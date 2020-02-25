/*...
 	jquery/tablesorter/jquery.tablesorter.pager.js?v=2017.01
*/
/*!
 * tablesorter pager plugin
 * updated 5/27/2013
 */
/*jshint browser:true, jquery:true, unused:false */
;(function($) {
	"use strict";
	/*jshint supernew:true */
	$.extend({ tablesorterPager: new function() {

		this.defaults = {
			// target the pager markup
			container: null,

			// use this format: "http://mydatabase.com?page={page}&size={size}&{sortList:col}&{filterList:fcol}"
			// where {page} is replaced by the page number, {size} is replaced by the number of records to show,
			// {sortList:col} adds the sortList to the url into a "col" array, and {filterList:fcol} adds
			// the filterList to the url into an "fcol" array.
			// So a sortList = [[2,0],[3,0]] becomes "&col[2]=0&col[3]=0" in the url
			// and a filterList = [[2,Blue],[3,13]] becomes "&fcol[2]=Blue&fcol[3]=13" in the url
			ajaxUrl: null,

			// modify the url after all processing has been applied
			customAjaxUrl: function(table, url) { return url; },

			// modify the $.ajax object to allow complete control over your ajax requests
			ajaxObject: {
				dataType: 'json'
			},

			// process ajax so that the following information is returned:
			// [ total_rows (number), rows (array of arrays), headers (array; optional) ]
			// example:
			// [
			//   100,  // total rows
			//   [
			//     [ "row1cell1", "row1cell2", ... "row1cellN" ],
			//     [ "row2cell1", "row2cell2", ... "row2cellN" ],
			//     ...
			//     [ "rowNcell1", "rowNcell2", ... "rowNcellN" ]
			//   ],
			//   [ "header1", "header2", ... "headerN" ] // optional
			// ]
			ajaxProcessing: function(ajax){ return [ 0, [], null ]; },

			// output default: '{page}/{totalPages}'
			// possible variables: {page}, {totalPages}, {filteredPages}, {startRow}, {endRow}, {filteredRows} and {totalRows}
			output: '{startRow} to {endRow} of {totalRows} rows', // '{page}/{totalPages}'

			// apply disabled classname to the pager arrows when the rows at either extreme is visible
			updateArrows: true,

			// starting page of the pager (zero based index)
			page: 0,

			// Number of visible rows
			size: 10,

			// if true, the table will remain the same height no matter how many records are displayed. The space is made up by an empty
			// table row set to a height to compensate; default is false
			fixedHeight: false,

			// remove rows from the table to speed up the sort of large tables.
			// setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
			removeRows: false, // removing rows in larger tables speeds up the sort

			// css class names of pager arrows
			cssFirst: '.first', // go to first page arrow
			cssPrev: '.prev', // previous page arrow
			cssNext: '.next', // next page arrow
			cssLast: '.last', // go to last page arrow
			cssGoto: '.gotoPage', // go to page selector - select dropdown that sets the current page
			cssPageDisplay: '.pagedisplay', // location of where the "output" is displayed
			cssPageSize: '.pagesize', // page size selector - select dropdown that sets the "size" option
			cssErrorRow: 'tablesorter-errorRow', // error information row

			// class added to arrows when at the extremes (i.e. prev/first arrows are "disabled" when on the first page)
			cssDisabled: 'disabled', // Note there is no period "." in front of this class name

			// stuff not set by the user
			totalRows: 0,
			totalPages: 0,
			filteredRows: 0,
			filteredPages: 0

		};

		var $this = this,

		// hide arrows at extremes
		pagerArrows = function(c, disable) {
			var a = 'addClass',
			r = 'removeClass',
			d = c.cssDisabled,
			dis = !!disable,
			tp = Math.min( c.totalPages, c.filteredPages );
			if ( c.updateArrows ) {
				c.$container.find(c.cssFirst + ',' + c.cssPrev)[ ( dis || c.page === 0 ) ? a : r ](d);
				c.$container.find(c.cssNext + ',' + c.cssLast)[ ( dis || c.page === tp - 1 ) ? a : r ](d);
			}
		},

		updatePageDisplay = function(table, c, flag) {
			var i, p, s, t, out,
			tc = table.config,
			f = $(table).hasClass('hasFilters') && !c.ajaxUrl;
			c.totalPages = Math.ceil( c.totalRows / c.size ); // needed for "pageSize" method
			c.filteredRows = (f) ? tc.$tbodies.eq(0).children('tr:not(.' + (tc.widgetOptions && tc.widgetOptions.filter_filteredRow || 'filtered') + ',' + tc.selectorRemove + ')').length : c.totalRows;
			c.filteredPages = (f) ? Math.ceil( c.filteredRows / c.size ) || 1 : c.totalPages;
			if ( Math.min( c.totalPages, c.filteredPages ) >= 0 ) {
				t = (c.size * c.page > c.filteredRows);
				c.startRow = (t) ? 1 : (c.filteredRows === 0 ? 0 : c.size * c.page + 1);
				c.page = (t) ? 0 : c.page;
				c.endRow = Math.min( c.filteredRows, c.totalRows, c.size * ( c.page + 1 ) );
				out = c.$container.find(c.cssPageDisplay);
				// form the output string
				s = c.output.replace(/\{(page|filteredRows|filteredPages|totalPages|startRow|endRow|totalRows)\}/gi, function(m){
							return {
								'{page}'            : c.page + 1,
								'{filteredRows}'    : c.filteredRows,
								'{filteredPages}'   : c.filteredPages,
								'{totalPages}'      : c.totalPages,
								'{startRow}'        : c.startRow,
								'{endRow}'          : c.endRow,
								'{totalRows}'       : c.totalRows
							}[m];
						});
				if (out.length) {
					out[ (out[0].tagName === 'INPUT') ? 'val' : 'html' ](s);
					if ( c.$goto.length ) {
						t = '';
						p = Math.min( c.totalPages, c.filteredPages );
						for ( i = 1; i <= p; i++ ) {
							t += '<option>' + i + '</option>';
						}
						c.$goto.html(t).val( c.page + 1 );
					}
				}
			}
			pagerArrows(c);
			if (c.initialized && flag !== false) { $(table).trigger('pagerComplete', c); }
		},

		fixHeight = function(table, c) {
			var d, h, $b = table.config.$tbodies.eq(0);
			if (c.fixedHeight) {
				$b.find('tr.pagerSavedHeightSpacer').remove();
				h = $.data(table, 'pagerSavedHeight');
				if (h) {
					d = h - $b.height();
					if ( d > 5 && $.data(table, 'pagerLastSize') === c.size && $b.children('tr:visible').length < c.size ) {
						$b.append('<tr class="pagerSavedHeightSpacer ' + table.config.selectorRemove.replace(/(tr)?\./g,'') + '" style="height:' + d + 'px;"></tr>');
					}
				}
			}
		},

		changeHeight = function(table, c) {
			var $b = table.config.$tbodies.eq(0);
			$b.find('tr.pagerSavedHeightSpacer').remove();
			$.data(table, 'pagerSavedHeight', $b.height());
			fixHeight(table, c);
			$.data(table, 'pagerLastSize', c.size);
		},

		hideRows = function(table, c){
			if (!c.ajaxUrl) {
				var i,
				tc = table.config,
				rows = tc.$tbodies.eq(0).children('tr:not(.' + tc.cssChildRow + ')'),
				l = rows.length,
				s = ( c.page * c.size ),
				e =  s + c.size,
				f = tc.widgetOptions && tc.widgetOptions.filter_filteredRow || 'filtered',
				j = 0; // size counter
				for ( i = 0; i < l; i++ ){
					if ( !rows[i].className.match(f) ) {
						rows[i].style.display = ( j >= s && j < e ) ? '' : 'none';
						j++;
					}
				}
			}
		},

		hideRowsSetup = function(table, c){
			c.size = parseInt( c.$size.val(), 10 ) || c.size;
			$.data(table, 'pagerLastSize', c.size);
			pagerArrows(c);
			if ( !c.removeRows ) {
				hideRows(table, c);
				$(table).bind('sortEnd.pager filterEnd.pager', function(){
					hideRows(table, c);
				});
			}
		},

		renderAjax = function(data, table, c, xhr, exception){
			// process data
			if ( typeof(c.ajaxProcessing) === "function" ) {
				// ajaxProcessing result: [ total, rows, headers ]
				var i, j, hsh, $f, $sh, th, d, l, $err,
				$t = $(table),
				tc = table.config,
				hl = $t.find('thead th').length, tds = '',
				result = c.ajaxProcessing(data, table) || [ 0, [] ],
				// allow [ total, rows, headers ]  or [ rows, total, headers ]
				t = isNaN(result[0]) && !isNaN(result[1]);

				$t.find('thead tr.' + c.cssErrorRow).remove(); // Clean up any previous error.

				if ( exception ) {
					$err = $('<tr class="' + c.cssErrorRow + '"><td style="text-align:center;" colspan="' + hl + '">' + (
						xhr.status === 0 ? 'Not connected, verify Network' :
						xhr.status === 404 ? 'Requested page not found [404]' :
						xhr.status === 500 ? 'Internal Server Error [500]' :
						exception === 'parsererror' ? 'Requested JSON parse failed' :
						exception === 'timeout' ? 'Time out error' :
						exception === 'abort' ? 'Ajax Request aborted' :
						'Uncaught error: ' + xhr.statusText + ' [' + xhr.status + ']' ) + '</td></tr>')
					.click(function(){
						$(this).remove();
					})
					// add error row to thead instead of tbody, or clicking on the header will result in a parser error
					.appendTo( $t.find('thead:first') );
					tc.$tbodies.eq(0).empty();
				} else {
					c.totalRows = result[t ? 1 : 0] || c.totalRows || 0;
					d = result[t ? 0 : 1] || []; // row data
					l = d.length;
					th = result[2]; // headers
					if (d instanceof jQuery) {
						// append jQuery object
						tc.$tbodies.eq(0).empty().append(d);
					} else if (d.length) {
						// build table from array
						if ( l > 0 ) {
							for ( i = 0; i < l; i++ ) {
								tds += '<tr>';
								for ( j = 0; j < d[i].length; j++ ) {
									// build tbody cells
									tds += '<td>' + d[i][j] + '</td>';
								}
								tds += '</tr>';
							}
						}
						// add rows to first tbody
						tc.$tbodies.eq(0).html( tds );
					}
					// only add new header text if the length matches
					if ( th && th.length === hl ) {
						hsh = $t.hasClass('hasStickyHeaders');
						$sh = hsh ? tc.$sticky.children('thead:first').children().children() : '';
						$f = $t.find('tfoot tr:first').children();
						$t.find('th.' + tc.cssHeader).each(function(j){
							var $t = $(this), icn;
							// add new test within the first span it finds, or just in the header
							if ( $t.find('.' + tc.cssIcon).length ) {
								icn = $t.find('.' + tc.cssIcon).clone(true);
								$t.find('.tablesorter-header-inner').html( th[j] ).append(icn);
								if ( hsh && $sh.length ) {
									icn = $sh.eq(j).find('.' + tc.cssIcon).clone(true);
									$sh.eq(j).find('.tablesorter-header-inner').html( th[j] ).append(icn);
								}
							} else {
								$t.find('.tablesorter-header-inner').html( th[j] );
								if (hsh && $sh.length) {
									$sh.eq(j).find('.tablesorter-header-inner').html( th[j] );
								}
							}
							$f.eq(j).html( th[j] );
						});
					}
				}
				if (tc.showProcessing) {
					$.tablesorter.isProcessing(table); // remove loading icon
				}
				$t.trigger('update');
				c.totalPages = Math.ceil( c.totalRows / c.size );
				updatePageDisplay(table, c);
				fixHeight(table, c);
				if (c.initialized) { $t.trigger('pagerChange', c); }
			}
			if (!c.initialized) {
				c.initialized = true;
				$(table).trigger('pagerInitialized', c);
			}
		},

		getAjax = function(table, c){
			var url = getAjaxUrl(table, c),
			$doc = $(document),
			tc = table.config;
			if ( url !== '' ) {
				if (tc.showProcessing) {
					$.tablesorter.isProcessing(table, true); // show loading icon
				}
				$doc.bind('ajaxError.pager', function(e, xhr, settings, exception) {
					if (url.match(settings.url)) {
						renderAjax(null, table, c, xhr, exception);
						$doc.unbind('ajaxError.pager');
					}
				});
				c.ajaxObject.url = url; // from the ajaxUrl option and modified by customAjaxUrl
				c.ajaxObject.success = function(data) {
					renderAjax(data, table, c);
					$doc.unbind('ajaxError.pager');
					if (typeof c.oldAjaxSuccess === 'function') {
						c.oldAjaxSuccess(data);
					}
				};
				$.ajax(c.ajaxObject);
			}
		},

		getAjaxUrl = function(table, c) {
			var url = (c.ajaxUrl) ? c.ajaxUrl
				// allow using "{page+1}" in the url string to switch to a non-zero based index
				.replace(/\{page([\-+]\d+)?\}/, function(s,n){ return c.page + (n ? parseInt(n, 10) : 0); })
				.replace(/\{size\}/g, c.size) : '',
			sl = table.config.sortList,
			fl = c.currentFilters || [],
			sortCol = url.match(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/),
			filterCol = url.match(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/),
			arry = [];
			if (sortCol) {
				sortCol = sortCol[1];
				$.each(sl, function(i,v){
					arry.push(sortCol + '[' + v[0] + ']=' + v[1]);
				});
				// if the arry is empty, just add the col parameter... "&{sortList:col}" becomes "&col"
				url = url.replace(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/g, arry.length ? arry.join('&') : sortCol );
				arry = [];
			}
			if (filterCol) {
				filterCol = filterCol[1];
				$.each(fl, function(i,v){
					if (v) {
						arry.push(filterCol + '[' + i + ']=' + encodeURIComponent(v));
					}
				});
				// if the arry is empty, just add the fcol parameter... "&{filterList:fcol}" becomes "&fcol"
				url = url.replace(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/g, arry.length ? arry.join('&') : filterCol );
			}
			if ( typeof(c.customAjaxUrl) === "function" ) {
				url = c.customAjaxUrl(table, url);
			}
			return url;
		},

		renderTable = function(table, rows, c) {
			c.isDisabled = false; // needed because sorting will change the page and re-enable the pager
			var i, j, o, $tb,
			l = rows.length,
			s = ( c.page * c.size ),
			e = ( s + c.size );
			if ( l < 1 ) { return; } // empty table, abort!
			if (c.initialized) { $(table).trigger('pagerChange', c); }
			if ( !c.removeRows ) {
				hideRows(table, c);
			} else {
				if ( e > rows.length ) {
					e = rows.length;
				}
				$.tablesorter.clearTableBody(table);
				$tb = $.tablesorter.processTbody(table, table.config.$tbodies.eq(0), true);
				for ( i = s; i < e; i++ ) {
					o = rows[i];
					l = o.length;
					for ( j = 0; j < l; j++ ) {
						$tb.appendChild(o[j]);
					}
				}
				$.tablesorter.processTbody(table, $tb, false);
			}
			if ( c.page >= c.totalPages ) {
				moveToLastPage(table, c);
			}
			updatePageDisplay(table, c);
			if ( !c.isDisabled ) { fixHeight(table, c); }
			$(table).trigger('applyWidgets');
		},

		showAllRows = function(table, c){
			if ( c.ajax ) {
				pagerArrows(c, true);
			} else {
				c.isDisabled = true;
				$.data(table, 'pagerLastPage', c.page);
				$.data(table, 'pagerLastSize', c.size);
				c.page = 0;
				c.size = c.totalRows;
				c.totalPages = 1;
				$(table).find('tr.pagerSavedHeightSpacer').remove();
				renderTable(table, table.config.rowsCopy, c);
			}
			// disable size selector
			c.$size.add(c.$goto).each(function(){
				$(this).addClass(c.cssDisabled)[0].disabled = true;
			});
		},

		moveToPage = function(table, c, flag) {
			if ( c.isDisabled ) { return; }
			var p = Math.min( c.totalPages, c.filteredPages );
			if ( c.page < 0 ) { c.page = 0; }
			if ( c.page > ( p - 1 ) && p !== 0 ) { c.page = p - 1; }
			if (c.ajax) {
				getAjax(table, c);
			} else if (!c.ajax) {
				renderTable(table, table.config.rowsCopy, c);
			}
			$.data(table, 'pagerLastPage', c.page);
			$.data(table, 'pagerUpdateTriggered', true);
			if (c.initialized && flag !== false) {
				$(table).trigger('pageMoved', c);
			}
		},

		setPageSize = function(table, size, c) {
			c.size = size;
			c.$size.val(size);
			$.data(table, 'pagerLastPage', c.page);
			$.data(table, 'pagerLastSize', c.size);
			c.totalPages = Math.ceil( c.totalRows / c.size );
			moveToPage(table, c);
		},

		moveToFirstPage = function(table, c) {
			c.page = 0;
			moveToPage(table, c);
		},

		moveToLastPage = function(table, c) {
			c.page = ( Math.min( c.totalPages, c.filteredPages ) - 1 );
			moveToPage(table, c);
		},

		moveToNextPage = function(table, c) {
			c.page++;
			if ( c.page >= ( Math.min( c.totalPages, c.filteredPages ) - 1 ) ) {
				c.page = ( Math.min( c.totalPages, c.filteredPages ) - 1 );
			}
			moveToPage(table, c);
		},

		moveToPrevPage = function(table, c) {
			c.page--;
			if ( c.page <= 0 ) {
				c.page = 0;
			}
			moveToPage(table, c);
		},

		destroyPager = function(table, c){
			showAllRows(table, c);
			c.$container.hide(); // hide pager
			table.config.appender = null; // remove pager appender function
			$(table).unbind('destroy.pager sortEnd.pager filterEnd.pager enable.pager disable.pager');
		},

		enablePager = function(table, c, triggered){
			var p = c.$size.removeClass(c.cssDisabled).removeAttr('disabled');
			c.$goto.removeClass(c.cssDisabled).removeAttr('disabled');
			c.isDisabled = false;
			c.page = $.data(table, 'pagerLastPage') || c.page || 0;
			c.size = $.data(table, 'pagerLastSize') || parseInt(p.find('option[selected]').val(), 10) || c.size;
			p.val(c.size); // set page size
			c.totalPages = Math.ceil( Math.min( c.totalPages, c.filteredPages ) / c.size);
			if ( triggered ) {
				$(table).trigger('update');
				setPageSize(table, c.size, c);
				hideRowsSetup(table, c);
				fixHeight(table, c);
			}
		};

		$this.appender = function(table, rows) {
			var c = table.config.pager;
			if ( !c.ajax ) {
				table.config.rowsCopy = rows;
				c.totalRows = rows.length;
				c.size = $.data(table, 'pagerLastSize') || c.size;
				c.totalPages = Math.ceil(c.totalRows / c.size);
				renderTable(table, rows, c);
			}
		};

		$this.construct = function(settings) {
			return this.each(function() {
				// check if tablesorter has initialized
				if (!(this.config && this.hasInitialized)) { return; }
				var t, ctrls, fxn,
				config = this.config,
				c = config.pager = $.extend( {}, $.tablesorterPager.defaults, settings ),
				table = this,
				tc = table.config,
				$t = $(table),
				// added in case the pager is reinitialized after being destroyed.
				pager = c.$container = $(c.container).addClass('tablesorter-pager').show();
				c.oldAjaxSuccess = c.oldAjaxSuccess || c.ajaxObject.success;
				config.appender = $this.appender;

				$t
					.unbind('filterStart.pager filterEnd.pager sortEnd.pager disable.pager enable.pager destroy.pager update.pager pageSize.pager')
					.bind('filterStart.pager', function(e, filters) {
						$.data(table, 'pagerUpdateTriggered', false);
						c.currentFilters = filters;
					})
					// update pager after filter widget completes
					.bind('filterEnd.pager sortEnd.pager', function(e) {
						//Prevent infinite event loops from occuring by setting this in all moveToPage calls and catching it here.
						/*if ($.data(table, 'pagerUpdateTriggered')) {
							$.data(table, 'pagerUpdateTriggered', false);
							return;
						}*/
						moveToPage(table, c, false);
						updatePageDisplay(table, c, false);
						fixHeight(table, c);
					})
					.bind('disable.pager', function(e){
						e.stopPropagation();
						showAllRows(table, c);
					})
					.bind('enable.pager', function(e){
						e.stopPropagation();
						enablePager(table, c, true);
					})
					.bind('destroy.pager', function(e){
						e.stopPropagation();
						destroyPager(table, c);
					})
					.bind('update.pager', function(e){
						e.stopPropagation();
						hideRows(table, c);
					})
					.bind('pageSize.pager', function(e,v){
						e.stopPropagation();
						setPageSize(table, parseInt(v, 10) || 10, c);
						hideRows(table, c);
						updatePageDisplay(table, c, false);
						if (c.$size.length) { c.$size.val(c.size); } // twice?
					})
					.bind('pageSet.pager', function(e,v){
						e.stopPropagation();
						c.page = (parseInt(v, 10) || 1) - 1;
						if (c.$goto.length) { c.$goto.val(c.size); } // twice?
						moveToPage(table, c);
						updatePageDisplay(table, c, false);
					});

				// clicked controls
				ctrls = [ c.cssFirst, c.cssPrev, c.cssNext, c.cssLast ];
				fxn = [ moveToFirstPage, moveToPrevPage, moveToNextPage, moveToLastPage ];
				pager.find(ctrls.join(','))
					.unbind('click.pager')
					.bind('click.pager', function(e){
						var i, $t = $(this), l = ctrls.length;
						if ( !$t.hasClass(c.cssDisabled) ) {
							for (i = 0; i < l; i++) {
								if ($t.is(ctrls[i])) {
									fxn[i](table, c);
									break;
								}
							}
						}
						return false;
					});

				// goto selector
				c.$goto = pager.find(c.cssGoto);
				if ( c.$goto.length ) {
					c.$goto
						.unbind('change')
						.bind('change', function(){
							c.page = $(this).val() - 1;
							moveToPage(table, c);
						});
						updatePageDisplay(table, c, false);
				}

				// page size selector
				c.$size = pager.find(c.cssPageSize);
				if ( c.$size.length ) {
					c.$size.unbind('change.pager').bind('change.pager', function() {
						c.$size.val( $(this).val() ); // in case there are more than one pagers
						if ( !$(this).hasClass(c.cssDisabled) ) {
							setPageSize(table, parseInt( $(this).val(), 10 ), c);
							changeHeight(table, c);
						}
						return false;
					});
				}

				// clear initialized flag
				c.initialized = false;
				// before initialization event
				$t.trigger('pagerBeforeInitialized', c);

				enablePager(table, c, false);

				if ( typeof(c.ajaxUrl) === 'string' ) {
					// ajax pager; interact with database
					c.ajax = true;
					//When filtering with ajax, allow only custom filtering function, disable default filtering since it will be done server side.
					tc.widgetOptions.filter_serversideFiltering = true;
					tc.serverSideSorting = true;
					moveToPage(table, c);
				} else {
					c.ajax = false;
					// Regular pager; all rows stored in memory
					$(this).trigger("appendCache", true);
					hideRowsSetup(table, c);
				}

				changeHeight(table, c);

				// pager initialized
				if (!c.ajax) {
					c.initialized = true;
					$(table).trigger('pagerInitialized', c);
				}
			});
		};

	}()
});
// extend plugin scope
$.fn.extend({
	tablesorterPager: $.tablesorterPager.construct
});

})(jQuery);
/*...
 	jquery/tablesorter/jquery.tablesorter.widgets.js?v=2017.01
*/

/*! tablesorter (FORK) - updated 01-06-2017 (v2.28.4)*/
/* Includes widgets ( storage,uitheme,columns,filter,stickyHeaders,resizable,saveSort ) */
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function(jQuery) {

/*! Widget: storage - updated 11/26/2016 (v2.28.0) */
/*global JSON:false */
;(function ($, window, document) {
	'use strict';

	var ts = $.tablesorter || {};
	// *** Store data in local storage, with a cookie fallback ***
	/* IE7 needs JSON library for JSON.stringify - (http://caniuse.com/#search=json)
	   if you need it, then include https://github.com/douglascrockford/JSON-js

	   $.parseJSON is not available is jQuery versions older than 1.4.1, using older
	   versions will only allow storing information for one page at a time

	   // *** Save data (JSON format only) ***
	   // val must be valid JSON... use http://jsonlint.com/ to ensure it is valid
	   var val = { "mywidget" : "data1" }; // valid JSON uses double quotes
	   // $.tablesorter.storage(table, key, val);
	   $.tablesorter.storage(table, 'tablesorter-mywidget', val);

	   // *** Get data: $.tablesorter.storage(table, key); ***
	   v = $.tablesorter.storage(table, 'tablesorter-mywidget');
	   // val may be empty, so also check for your data
	   val = (v && v.hasOwnProperty('mywidget')) ? v.mywidget : '';
	   alert(val); // 'data1' if saved, or '' if not
	*/
	ts.storage = function(table, key, value, options) {
		table = $(table)[0];
		var cookieIndex, cookies, date,
			hasStorage = false,
			values = {},
			c = table.config,
			wo = c && c.widgetOptions,
			storageType = ( options && options.useSessionStorage ) || ( wo && wo.storage_useSessionStorage ) ?
				'sessionStorage' : 'localStorage',
			$table = $(table),
			// id from (1) options ID, (2) table 'data-table-group' attribute, (3) widgetOptions.storage_tableId,
			// (4) table ID, then (5) table index
			id = options && options.id ||
				$table.attr( options && options.group || wo && wo.storage_group || 'data-table-group') ||
				wo && wo.storage_tableId || table.id || $('.tablesorter').index( $table ),
			// url from (1) options url, (2) table 'data-table-page' attribute, (3) widgetOptions.storage_fixedUrl,
			// (4) table.config.fixedUrl (deprecated), then (5) window location path
			url = options && options.url ||
				$table.attr(options && options.page || wo && wo.storage_page || 'data-table-page') ||
				wo && wo.storage_fixedUrl || c && c.fixedUrl || window.location.pathname;
		// update defaults for validator; these values must be falsy!
		$.extend(true, ts.defaults, {
			fixedUrl: '',
			widgetOptions: {
				storage_fixedUrl: '',
				storage_group: '',
				storage_page: '',
				storage_tableId: '',
				storage_useSessionStorage: ''
			}
		});
		// https://gist.github.com/paulirish/5558557
		if (storageType in window) {
			try {
				window[storageType].setItem('_tmptest', 'temp');
				hasStorage = true;
				window[storageType].removeItem('_tmptest');
			} catch (error) {
				if (c && c.debug) {
					console.warn( storageType + ' is not supported in this browser' );
				}
			}
		}
		// *** get value ***
		if ($.parseJSON) {
			if (hasStorage) {
				values = $.parseJSON( window[storageType][key] || 'null' ) || {};
			} else {
				// old browser, using cookies
				cookies = document.cookie.split(/[;\s|=]/);
				// add one to get from the key to the value
				cookieIndex = $.inArray(key, cookies) + 1;
				values = (cookieIndex !== 0) ? $.parseJSON(cookies[cookieIndex] || 'null') || {} : {};
			}
		}
		// allow value to be an empty string too
		if (typeof value !== 'undefined' && window.JSON && JSON.hasOwnProperty('stringify')) {
			// add unique identifiers = url pathname > table ID/index on page > data
			if (!values[url]) {
				values[url] = {};
			}
			values[url][id] = value;
			// *** set value ***
			if (hasStorage) {
				window[storageType][key] = JSON.stringify(values);
			} else {
				date = new Date();
				date.setTime(date.getTime() + (31536e+6)); // 365 days
				document.cookie = key + '=' + (JSON.stringify(values)).replace(/\"/g, '\"') + '; expires=' + date.toGMTString() + '; path=/';
			}
		} else {
			return values && values[url] ? values[url][id] : '';
		}
	};

})(jQuery, window, document);

/*! Widget: uitheme - updated 12/8/2016 (v2.28.1) */
;(function ($) {
	'use strict';
	var ts = $.tablesorter || {};

	ts.themes = {
		'bootstrap' : {
			table        : 'table table-bordered table-striped',
			caption      : 'caption',
			// header class names
			header       : 'bootstrap-header', // give the header a gradient background (theme.bootstrap_2.css)
			sortNone     : '',
			sortAsc      : '',
			sortDesc     : '',
			active       : '', // applied when column is sorted
			hover        : '', // custom css required - a defined bootstrap style may not override other classes
			// icon class names
			icons        : '', // add 'icon-white' to make them white; this icon class is added to the <i> in the header
			iconSortNone : 'bootstrap-icon-unsorted', // class name added to icon when column is not sorted
			iconSortAsc  : 'icon-chevron-up glyphicon glyphicon-chevron-up', // class name added to icon when column has ascending sort
			iconSortDesc : 'icon-chevron-down glyphicon glyphicon-chevron-down', // class name added to icon when column has descending sort
			filterRow    : '', // filter row class
			footerRow    : '',
			footerCells  : '',
			even         : '', // even row zebra striping
			odd          : ''  // odd row zebra striping
		},
		'jui' : {
			table        : 'ui-widget ui-widget-content ui-corner-all', // table classes
			caption      : 'ui-widget-content',
			// header class names
			header       : 'ui-widget-header ui-corner-all ui-state-default', // header classes
			sortNone     : '',
			sortAsc      : '',
			sortDesc     : '',
			active       : 'ui-state-active', // applied when column is sorted
			hover        : 'ui-state-hover',  // hover class
			// icon class names
			icons        : 'ui-icon', // icon class added to the <i> in the header
			iconSortNone : 'ui-icon-carat-2-n-s ui-icon-caret-2-n-s', // class name added to icon when column is not sorted
			iconSortAsc  : 'ui-icon-carat-1-n ui-icon-caret-1-n', // class name added to icon when column has ascending sort
			iconSortDesc : 'ui-icon-carat-1-s ui-icon-caret-1-s', // class name added to icon when column has descending sort
			filterRow    : '',
			footerRow    : '',
			footerCells  : '',
			even         : 'ui-widget-content', // even row zebra striping
			odd          : 'ui-state-default'   // odd row zebra striping
		}
	};

	$.extend(ts.css, {
		wrapper : 'tablesorter-wrapper' // ui theme & resizable
	});

	ts.addWidget({
		id: 'uitheme',
		priority: 10,
		format: function(table, c, wo) {
			var i, tmp, hdr, icon, time, $header, $icon, $tfoot, $h, oldtheme, oldremove, oldIconRmv, hasOldTheme,
				themesAll = ts.themes,
				$table = c.$table.add( $( c.namespace + '_extra_table' ) ),
				$headers = c.$headers.add( $( c.namespace + '_extra_headers' ) ),
				theme = c.theme || 'jui',
				themes = themesAll[theme] || {},
				remove = $.trim( [ themes.sortNone, themes.sortDesc, themes.sortAsc, themes.active ].join( ' ' ) ),
				iconRmv = $.trim( [ themes.iconSortNone, themes.iconSortDesc, themes.iconSortAsc ].join( ' ' ) );
			if (c.debug) { time = new Date(); }
			// initialization code - run once
			if (!$table.hasClass('tablesorter-' + theme) || c.theme !== c.appliedTheme || !wo.uitheme_applied) {
				wo.uitheme_applied = true;
				oldtheme = themesAll[c.appliedTheme] || {};
				hasOldTheme = !$.isEmptyObject(oldtheme);
				oldremove =  hasOldTheme ? [ oldtheme.sortNone, oldtheme.sortDesc, oldtheme.sortAsc, oldtheme.active ].join( ' ' ) : '';
				oldIconRmv = hasOldTheme ? [ oldtheme.iconSortNone, oldtheme.iconSortDesc, oldtheme.iconSortAsc ].join( ' ' ) : '';
				if (hasOldTheme) {
					wo.zebra[0] = $.trim( ' ' + wo.zebra[0].replace(' ' + oldtheme.even, '') );
					wo.zebra[1] = $.trim( ' ' + wo.zebra[1].replace(' ' + oldtheme.odd, '') );
					c.$tbodies.children().removeClass( [ oldtheme.even, oldtheme.odd ].join(' ') );
				}
				// update zebra stripes
				if (themes.even) { wo.zebra[0] += ' ' + themes.even; }
				if (themes.odd) { wo.zebra[1] += ' ' + themes.odd; }
				// add caption style
				$table.children('caption')
					.removeClass(oldtheme.caption || '')
					.addClass(themes.caption);
				// add table/footer class names
				$tfoot = $table
					// remove other selected themes
					.removeClass( (c.appliedTheme ? 'tablesorter-' + (c.appliedTheme || '') : '') + ' ' + (oldtheme.table || '') )
					.addClass('tablesorter-' + theme + ' ' + (themes.table || '')) // add theme widget class name
					.children('tfoot');
				c.appliedTheme = c.theme;

				if ($tfoot.length) {
					$tfoot
						// if oldtheme.footerRow or oldtheme.footerCells are undefined, all class names are removed
						.children('tr').removeClass(oldtheme.footerRow || '').addClass(themes.footerRow)
						.children('th, td').removeClass(oldtheme.footerCells || '').addClass(themes.footerCells);
				}
				// update header classes
				$headers
					.removeClass( (hasOldTheme ? [ oldtheme.header, oldtheme.hover, oldremove ].join(' ') : '') || '' )
					.addClass(themes.header)
					.not('.sorter-false')
					.unbind('mouseenter.tsuitheme mouseleave.tsuitheme')
					.bind('mouseenter.tsuitheme mouseleave.tsuitheme', function(event) {
						// toggleClass with switch added in jQuery 1.3
						$(this)[ event.type === 'mouseenter' ? 'addClass' : 'removeClass' ](themes.hover || '');
					});

				$headers.each(function(){
					var $this = $(this);
					if (!$this.find('.' + ts.css.wrapper).length) {
						// Firefox needs this inner div to position the icon & resizer correctly
						$this.wrapInner('<div class="' + ts.css.wrapper + '" style="position:relative;height:100%;width:100%"></div>');
					}
				});
				if (c.cssIcon) {
					// if c.cssIcon is '', then no <i> is added to the header
					$headers
						.find('.' + ts.css.icon)
						.removeClass(hasOldTheme ? [ oldtheme.icons, oldIconRmv ].join(' ') : '')
						.addClass(themes.icons || '');
				}
				// filter widget initializes after uitheme
				if (ts.hasWidget( c.table, 'filter' )) {
					tmp = function() {
						$table.children('thead').children('.' + ts.css.filterRow)
							.removeClass(hasOldTheme ? oldtheme.filterRow || '' : '')
							.addClass(themes.filterRow || '');
					};
					if (wo.filter_initialized) {
						tmp();
					} else {
						$table.one('filterInit', function() {
							tmp();
						});
					}
				}
			}
			for (i = 0; i < c.columns; i++) {
				$header = c.$headers
					.add($(c.namespace + '_extra_headers'))
					.not('.sorter-false')
					.filter('[data-column="' + i + '"]');
				$icon = (ts.css.icon) ? $header.find('.' + ts.css.icon) : $();
				$h = $headers.not('.sorter-false').filter('[data-column="' + i + '"]:last');
				if ($h.length) {
					$header.removeClass(remove);
					$icon.removeClass(iconRmv);
					if ($h[0].sortDisabled) {
						// no sort arrows for disabled columns!
						$icon.removeClass(themes.icons || '');
					} else {
						hdr = themes.sortNone;
						icon = themes.iconSortNone;
						if ($h.hasClass(ts.css.sortAsc)) {
							hdr = [ themes.sortAsc, themes.active ].join(' ');
							icon = themes.iconSortAsc;
						} else if ($h.hasClass(ts.css.sortDesc)) {
							hdr = [ themes.sortDesc, themes.active ].join(' ');
							icon = themes.iconSortDesc;
						}
						$header.addClass(hdr);
						$icon.addClass(icon || '');
					}
				}
			}
			if (c.debug) {
				console.log('Applying ' + theme + ' theme' + ts.benchmark(time));
			}
		},
		remove: function(table, c, wo, refreshing) {
			if (!wo.uitheme_applied) { return; }
			var $table = c.$table,
				theme = c.appliedTheme || 'jui',
				themes = ts.themes[ theme ] || ts.themes.jui,
				$headers = $table.children('thead').children(),
				remove = themes.sortNone + ' ' + themes.sortDesc + ' ' + themes.sortAsc,
				iconRmv = themes.iconSortNone + ' ' + themes.iconSortDesc + ' ' + themes.iconSortAsc;
			$table.removeClass('tablesorter-' + theme + ' ' + themes.table);
			wo.uitheme_applied = false;
			if (refreshing) { return; }
			$table.find(ts.css.header).removeClass(themes.header);
			$headers
				.unbind('mouseenter.tsuitheme mouseleave.tsuitheme') // remove hover
				.removeClass(themes.hover + ' ' + remove + ' ' + themes.active)
				.filter('.' + ts.css.filterRow)
				.removeClass(themes.filterRow);
			$headers.find('.' + ts.css.icon).removeClass(themes.icons + ' ' + iconRmv);
		}
	});

})(jQuery);

/*! Widget: columns */
;(function ($) {
	'use strict';
	var ts = $.tablesorter || {};

	ts.addWidget({
		id: 'columns',
		priority: 30,
		options : {
			columns : [ 'primary', 'secondary', 'tertiary' ]
		},
		format: function(table, c, wo) {
			var $tbody, tbodyIndex, $rows, rows, $row, $cells, remove, indx,
			$table = c.$table,
			$tbodies = c.$tbodies,
			sortList = c.sortList,
			len = sortList.length,
			// removed c.widgetColumns support
			css = wo && wo.columns || [ 'primary', 'secondary', 'tertiary' ],
			last = css.length - 1;
			remove = css.join(' ');
			// check if there is a sort (on initialization there may not be one)
			for (tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody(table, $tbodies.eq(tbodyIndex), true); // detach tbody
				$rows = $tbody.children('tr');
				// loop through the visible rows
				$rows.each(function() {
					$row = $(this);
					if (this.style.display !== 'none') {
						// remove all columns class names
						$cells = $row.children().removeClass(remove);
						// add appropriate column class names
						if (sortList && sortList[0]) {
							// primary sort column class
							$cells.eq(sortList[0][0]).addClass(css[0]);
							if (len > 1) {
								for (indx = 1; indx < len; indx++) {
									// secondary, tertiary, etc sort column classes
									$cells.eq(sortList[indx][0]).addClass( css[indx] || css[last] );
								}
							}
						}
					}
				});
				ts.processTbody(table, $tbody, false);
			}
			// add classes to thead and tfoot
			rows = wo.columns_thead !== false ? [ 'thead tr' ] : [];
			if (wo.columns_tfoot !== false) {
				rows.push('tfoot tr');
			}
			if (rows.length) {
				$rows = $table.find( rows.join(',') ).children().removeClass(remove);
				if (len) {
					for (indx = 0; indx < len; indx++) {
						// add primary. secondary, tertiary, etc sort column classes
						$rows.filter('[data-column="' + sortList[indx][0] + '"]').addClass(css[indx] || css[last]);
					}
				}
			}
		},
		remove: function(table, c, wo) {
			var tbodyIndex, $tbody,
				$tbodies = c.$tbodies,
				remove = (wo.columns || [ 'primary', 'secondary', 'tertiary' ]).join(' ');
			c.$headers.removeClass(remove);
			c.$table.children('tfoot').children('tr').children('th, td').removeClass(remove);
			for (tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody(table, $tbodies.eq(tbodyIndex), true); // remove tbody
				$tbody.children('tr').each(function() {
					$(this).children().removeClass(remove);
				});
				ts.processTbody(table, $tbody, false); // restore tbody
			}
		}
	});

})(jQuery);

/*! Widget: filter - updated 12/8/2016 (v2.28.1) *//*
 * Requires tablesorter v2.8+ and jQuery 1.7+
 * by Rob Garrison
 */
;( function ( $ ) {
	'use strict';
	var tsf, tsfRegex,
		ts = $.tablesorter || {},
		tscss = ts.css,
		tskeyCodes = ts.keyCodes;

	$.extend( tscss, {
		filterRow      : 'tablesorter-filter-row',
		filter         : 'tablesorter-filter',
		filterDisabled : 'disabled',
		filterRowHide  : 'hideme'
	});

	$.extend( tskeyCodes, {
		backSpace : 8,
		escape : 27,
		space : 32,
		left : 37,
		down : 40
	});

	ts.addWidget({
		id: 'filter',
		priority: 50,
		options : {
			filter_cellFilter    : '',    // css class name added to the filter cell ( string or array )
			filter_childRows     : false, // if true, filter includes child row content in the search
			filter_childByColumn : false, // ( filter_childRows must be true ) if true = search child rows by column; false = search all child row text grouped
			filter_childWithSibs : true,  // if true, include matching child row siblings
			filter_columnAnyMatch: true,  // if true, allows using '#:{query}' in AnyMatch searches ( column:query )
			filter_columnFilters : true,  // if true, a filter will be added to the top of each table column
			filter_cssFilter     : '',    // css class name added to the filter row & each input in the row ( tablesorter-filter is ALWAYS added )
			filter_defaultAttrib : 'data-value', // data attribute in the header cell that contains the default filter value
			filter_defaultFilter : {},    // add a default column filter type '~{query}' to make fuzzy searches default; '{q1} AND {q2}' to make all searches use a logical AND.
			filter_excludeFilter : {},    // filters to exclude, per column
			filter_external      : '',    // jQuery selector string ( or jQuery object ) of external filters
			filter_filteredRow   : 'filtered', // class added to filtered rows; define in css with "display:none" to hide the filtered-out rows
			filter_formatter     : null,  // add custom filter elements to the filter row
			filter_functions     : null,  // add custom filter functions using this option
			filter_hideEmpty     : true,  // hide filter row when table is empty
			filter_hideFilters   : false, // collapse filter row when mouse leaves the area
			filter_ignoreCase    : true,  // if true, make all searches case-insensitive
			filter_liveSearch    : true,  // if true, search column content while the user types ( with a delay )
			filter_matchType     : { 'input': 'exact', 'select': 'exact' }, // global query settings ('exact' or 'match'); overridden by "filter-match" or "filter-exact" class
			filter_onlyAvail     : 'filter-onlyAvail', // a header with a select dropdown & this class name will only show available ( visible ) options within the drop down
			filter_placeholder   : { search : '', select : '' }, // default placeholder text ( overridden by any header 'data-placeholder' setting )
			filter_reset         : null,  // jQuery selector string of an element used to reset the filters
			filter_resetOnEsc    : true,  // Reset filter input when the user presses escape - normalized across browsers
			filter_saveFilters   : false, // Use the $.tablesorter.storage utility to save the most recent filters
			filter_searchDelay   : 300,   // typing delay in milliseconds before starting a search
			filter_searchFiltered: true,  // allow searching through already filtered rows in special circumstances; will speed up searching in large tables if true
			filter_selectSource  : null,  // include a function to return an array of values to be added to the column filter select
			filter_selectSourceSeparator : '|', // filter_selectSource array text left of the separator is added to the option value, right into the option text
			filter_serversideFiltering : false, // if true, must perform server-side filtering b/c client-side filtering is disabled, but the ui and events will still be used.
			filter_startsWith    : false, // if true, filter start from the beginning of the cell contents
			filter_useParsedData : false  // filter all data using parsed content
		},
		format: function( table, c, wo ) {
			if ( !c.$table.hasClass( 'hasFilters' ) ) {
				tsf.init( table, c, wo );
			}
		},
		remove: function( table, c, wo, refreshing ) {
			var tbodyIndex, $tbody,
				$table = c.$table,
				$tbodies = c.$tbodies,
				events = 'addRows updateCell update updateRows updateComplete appendCache filterReset filterEnd search '
					.split( ' ' ).join( c.namespace + 'filter ' );
			$table
				.removeClass( 'hasFilters' )
				// add filter namespace to all BUT search
				.unbind( events.replace( ts.regex.spaces, ' ' ) )
				// remove the filter row even if refreshing, because the column might have been moved
				.find( '.' + tscss.filterRow ).remove();
			wo.filter_initialized = false;
			if ( refreshing ) { return; }
			for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody( table, $tbodies.eq( tbodyIndex ), true ); // remove tbody
				$tbody.children().removeClass( wo.filter_filteredRow ).show();
				ts.processTbody( table, $tbody, false ); // restore tbody
			}
			if ( wo.filter_reset ) {
				$( document ).undelegate( wo.filter_reset, 'click' + c.namespace + 'filter' );
			}
		}
	});

	tsf = ts.filter = {

		// regex used in filter 'check' functions - not for general use and not documented
		regex: {
			regex     : /^\/((?:\\\/|[^\/])+)\/([migyu]{0,5})?$/, // regex to test for regex
			child     : /tablesorter-childRow/, // child row class name; this gets updated in the script
			filtered  : /filtered/, // filtered (hidden) row class name; updated in the script
			type      : /undefined|number/, // check type
			exact     : /(^[\"\'=]+)|([\"\'=]+$)/g, // exact match (allow '==')
			operators : /[<>=]/g, // replace operators
			query     : '(q|query)', // replace filter queries
			wild01    : /\?/g, // wild card match 0 or 1
			wild0More : /\*/g, // wild care match 0 or more
			quote     : /\"/g,
			isNeg1    : /(>=?\s*-\d)/,
			isNeg2    : /(<=?\s*\d)/
		},
		// function( c, data ) { }
		// c = table.config
		// data.$row = jQuery object of the row currently being processed
		// data.$cells = jQuery object of all cells within the current row
		// data.filters = array of filters for all columns ( some may be undefined )
		// data.filter = filter for the current column
		// data.iFilter = same as data.filter, except lowercase ( if wo.filter_ignoreCase is true )
		// data.exact = table cell text ( or parsed data if column parser enabled; may be a number & not a string )
		// data.iExact = same as data.exact, except lowercase ( if wo.filter_ignoreCase is true; may be a number & not a string )
		// data.cache = table cell text from cache, so it has been parsed ( & in all lower case if c.ignoreCase is true )
		// data.cacheArray = An array of parsed content from each table cell in the row being processed
		// data.index = column index; table = table element ( DOM )
		// data.parsed = array ( by column ) of boolean values ( from filter_useParsedData or 'filter-parsed' class )
		types: {
			or : function( c, data, vars ) {
				// look for "|", but not if it is inside of a regular expression
				if ( ( tsfRegex.orTest.test( data.iFilter ) || tsfRegex.orSplit.test( data.filter ) ) &&
					// this test for regex has potential to slow down the overall search
					!tsfRegex.regex.test( data.filter ) ) {
					var indx, filterMatched, query, regex,
						// duplicate data but split filter
						data2 = $.extend( {}, data ),
						filter = data.filter.split( tsfRegex.orSplit ),
						iFilter = data.iFilter.split( tsfRegex.orSplit ),
						len = filter.length;
					for ( indx = 0; indx < len; indx++ ) {
						data2.nestedFilters = true;
						data2.filter = '' + ( tsf.parseFilter( c, filter[ indx ], data ) || '' );
						data2.iFilter = '' + ( tsf.parseFilter( c, iFilter[ indx ], data ) || '' );
						query = '(' + ( tsf.parseFilter( c, data2.filter, data ) || '' ) + ')';
						try {
							// use try/catch, because query may not be a valid regex if "|" is contained within a partial regex search,
							// e.g "/(Alex|Aar" -> Uncaught SyntaxError: Invalid regular expression: /(/(Alex)/: Unterminated group
							regex = new RegExp( data.isMatch ? query : '^' + query + '$', c.widgetOptions.filter_ignoreCase ? 'i' : '' );
							// filterMatched = data2.filter === '' && indx > 0 ? true
							// look for an exact match with the 'or' unless the 'filter-match' class is found
							filterMatched = regex.test( data2.exact ) || tsf.processTypes( c, data2, vars );
							if ( filterMatched ) {
								return filterMatched;
							}
						} catch ( error ) {
							return null;
						}
					}
					// may be null from processing types
					return filterMatched || false;
				}
				return null;
			},
			// Look for an AND or && operator ( logical and )
			and : function( c, data, vars ) {
				if ( tsfRegex.andTest.test( data.filter ) ) {
					var indx, filterMatched, result, query, regex,
						// duplicate data but split filter
						data2 = $.extend( {}, data ),
						filter = data.filter.split( tsfRegex.andSplit ),
						iFilter = data.iFilter.split( tsfRegex.andSplit ),
						len = filter.length;
					for ( indx = 0; indx < len; indx++ ) {
						data2.nestedFilters = true;
						data2.filter = '' + ( tsf.parseFilter( c, filter[ indx ], data ) || '' );
						data2.iFilter = '' + ( tsf.parseFilter( c, iFilter[ indx ], data ) || '' );
						query = ( '(' + ( tsf.parseFilter( c, data2.filter, data ) || '' ) + ')' )
							// replace wild cards since /(a*)/i will match anything
							.replace( tsfRegex.wild01, '\\S{1}' ).replace( tsfRegex.wild0More, '\\S*' );
						try {
							// use try/catch just in case RegExp is invalid
							regex = new RegExp( data.isMatch ? query : '^' + query + '$', c.widgetOptions.filter_ignoreCase ? 'i' : '' );
							// look for an exact match with the 'and' unless the 'filter-match' class is found
							result = ( regex.test( data2.exact ) || tsf.processTypes( c, data2, vars ) );
							if ( indx === 0 ) {
								filterMatched = result;
							} else {
								filterMatched = filterMatched && result;
							}
						} catch ( error ) {
							return null;
						}
					}
					// may be null from processing types
					return filterMatched || false;
				}
				return null;
			},
			// Look for regex
			regex: function( c, data ) {
				if ( tsfRegex.regex.test( data.filter ) ) {
					var matches,
						// cache regex per column for optimal speed
						regex = data.filter_regexCache[ data.index ] || tsfRegex.regex.exec( data.filter ),
						isRegex = regex instanceof RegExp;
					try {
						if ( !isRegex ) {
							// force case insensitive search if ignoreCase option set?
							// if ( c.ignoreCase && !regex[2] ) { regex[2] = 'i'; }
							data.filter_regexCache[ data.index ] = regex = new RegExp( regex[1], regex[2] );
						}
						matches = regex.test( data.exact );
					} catch ( error ) {
						matches = false;
					}
					return matches;
				}
				return null;
			},
			// Look for operators >, >=, < or <=
			operators: function( c, data ) {
				// ignore empty strings... because '' < 10 is true
				if ( tsfRegex.operTest.test( data.iFilter ) && data.iExact !== '' ) {
					var cachedValue, result, txt,
						table = c.table,
						parsed = data.parsed[ data.index ],
						query = ts.formatFloat( data.iFilter.replace( tsfRegex.operators, '' ), table ),
						parser = c.parsers[ data.index ] || {},
						savedSearch = query;
					// parse filter value in case we're comparing numbers ( dates )
					if ( parsed || parser.type === 'numeric' ) {
						txt = $.trim( '' + data.iFilter.replace( tsfRegex.operators, '' ) );
						result = tsf.parseFilter( c, txt, data, true );
						query = ( typeof result === 'number' && result !== '' && !isNaN( result ) ) ? result : query;
					}
					// iExact may be numeric - see issue #149;
					// check if cached is defined, because sometimes j goes out of range? ( numeric columns )
					if ( ( parsed || parser.type === 'numeric' ) && !isNaN( query ) &&
						typeof data.cache !== 'undefined' ) {
						cachedValue = data.cache;
					} else {
						txt = isNaN( data.iExact ) ? data.iExact.replace( ts.regex.nondigit, '' ) : data.iExact;
						cachedValue = ts.formatFloat( txt, table );
					}
					if ( tsfRegex.gtTest.test( data.iFilter ) ) {
						result = tsfRegex.gteTest.test( data.iFilter ) ? cachedValue >= query : cachedValue > query;
					} else if ( tsfRegex.ltTest.test( data.iFilter ) ) {
						result = tsfRegex.lteTest.test( data.iFilter ) ? cachedValue <= query : cachedValue < query;
					}
					// keep showing all rows if nothing follows the operator
					if ( !result && savedSearch === '' ) {
						result = true;
					}
					return result;
				}
				return null;
			},
			// Look for a not match
			notMatch: function( c, data ) {
				if ( tsfRegex.notTest.test( data.iFilter ) ) {
					var indx,
						txt = data.iFilter.replace( '!', '' ),
						filter = tsf.parseFilter( c, txt, data ) || '';
					if ( tsfRegex.exact.test( filter ) ) {
						// look for exact not matches - see #628
						filter = filter.replace( tsfRegex.exact, '' );
						return filter === '' ? true : $.trim( filter ) !== data.iExact;
					} else {
						indx = data.iExact.search( $.trim( filter ) );
						return filter === '' ? true :
							// return true if not found
							data.anyMatch ? indx < 0 :
							// return false if found
							!( c.widgetOptions.filter_startsWith ? indx === 0 : indx >= 0 );
					}
				}
				return null;
			},
			// Look for quotes or equals to get an exact match; ignore type since iExact could be numeric
			exact: function( c, data ) {
				/*jshint eqeqeq:false */
				if ( tsfRegex.exact.test( data.iFilter ) ) {
					var txt = data.iFilter.replace( tsfRegex.exact, '' ),
						filter = tsf.parseFilter( c, txt, data ) || '';
					return data.anyMatch ? $.inArray( filter, data.rowArray ) >= 0 : filter == data.iExact;
				}
				return null;
			},
			// Look for a range ( using ' to ' or ' - ' ) - see issue #166; thanks matzhu!
			range : function( c, data ) {
				if ( tsfRegex.toTest.test( data.iFilter ) ) {
					var result, tmp, range1, range2,
						table = c.table,
						index = data.index,
						parsed = data.parsed[index],
						// make sure the dash is for a range and not indicating a negative number
						query = data.iFilter.split( tsfRegex.toSplit );

					tmp = query[0].replace( ts.regex.nondigit, '' ) || '';
					range1 = ts.formatFloat( tsf.parseFilter( c, tmp, data ), table );
					tmp = query[1].replace( ts.regex.nondigit, '' ) || '';
					range2 = ts.formatFloat( tsf.parseFilter( c, tmp, data ), table );
					// parse filter value in case we're comparing numbers ( dates )
					if ( parsed || c.parsers[ index ].type === 'numeric' ) {
						result = c.parsers[ index ].format( '' + query[0], table, c.$headers.eq( index ), index );
						range1 = ( result !== '' && !isNaN( result ) ) ? result : range1;
						result = c.parsers[ index ].format( '' + query[1], table, c.$headers.eq( index ), index );
						range2 = ( result !== '' && !isNaN( result ) ) ? result : range2;
					}
					if ( ( parsed || c.parsers[ index ].type === 'numeric' ) && !isNaN( range1 ) && !isNaN( range2 ) ) {
						result = data.cache;
					} else {
						tmp = isNaN( data.iExact ) ? data.iExact.replace( ts.regex.nondigit, '' ) : data.iExact;
						result = ts.formatFloat( tmp, table );
					}
					if ( range1 > range2 ) {
						tmp = range1; range1 = range2; range2 = tmp; // swap
					}
					return ( result >= range1 && result <= range2 ) || ( range1 === '' || range2 === '' );
				}
				return null;
			},
			// Look for wild card: ? = single, * = multiple, or | = logical OR
			wild : function( c, data ) {
				if ( tsfRegex.wildOrTest.test( data.iFilter ) ) {
					var query = '' + ( tsf.parseFilter( c, data.iFilter, data ) || '' );
					// look for an exact match with the 'or' unless the 'filter-match' class is found
					if ( !tsfRegex.wildTest.test( query ) && data.nestedFilters ) {
						query = data.isMatch ? query : '^(' + query + ')$';
					}
					// parsing the filter may not work properly when using wildcards =/
					try {
						return new RegExp(
							query.replace( tsfRegex.wild01, '\\S{1}' ).replace( tsfRegex.wild0More, '\\S*' ),
							c.widgetOptions.filter_ignoreCase ? 'i' : ''
						)
						.test( data.exact );
					} catch ( error ) {
						return null;
					}
				}
				return null;
			},
			// fuzzy text search; modified from https://github.com/mattyork/fuzzy ( MIT license )
			fuzzy: function( c, data ) {
				if ( tsfRegex.fuzzyTest.test( data.iFilter ) ) {
					var indx,
						patternIndx = 0,
						len = data.iExact.length,
						txt = data.iFilter.slice( 1 ),
						pattern = tsf.parseFilter( c, txt, data ) || '';
					for ( indx = 0; indx < len; indx++ ) {
						if ( data.iExact[ indx ] === pattern[ patternIndx ] ) {
							patternIndx += 1;
						}
					}
					return patternIndx === pattern.length;
				}
				return null;
			}
		},
		init: function( table ) {
			// filter language options
			ts.language = $.extend( true, {}, {
				to  : 'to',
				or  : 'or',
				and : 'and'
			}, ts.language );

			var options, string, txt, $header, column, val, fxn, noSelect,
				c = table.config,
				wo = c.widgetOptions;
			c.$table.addClass( 'hasFilters' );
			c.lastSearch = [];

			// define timers so using clearTimeout won't cause an undefined error
			wo.filter_searchTimer = null;
			wo.filter_initTimer = null;
			wo.filter_formatterCount = 0;
			wo.filter_formatterInit = [];
			wo.filter_anyColumnSelector = '[data-column="all"],[data-column="any"]';
			wo.filter_multipleColumnSelector = '[data-column*="-"],[data-column*=","]';

			val = '\\{' + tsfRegex.query + '\\}';
			$.extend( tsfRegex, {
				child : new RegExp( c.cssChildRow ),
				filtered : new RegExp( wo.filter_filteredRow ),
				alreadyFiltered : new RegExp( '(\\s+(' + ts.language.or + '|-|' + ts.language.to + ')\\s+)', 'i' ),
				toTest : new RegExp( '\\s+(-|' + ts.language.to + ')\\s+', 'i' ),
				toSplit : new RegExp( '(?:\\s+(?:-|' + ts.language.to + ')\\s+)', 'gi' ),
				andTest : new RegExp( '\\s+(' + ts.language.and + '|&&)\\s+', 'i' ),
				andSplit : new RegExp( '(?:\\s+(?:' + ts.language.and + '|&&)\\s+)', 'gi' ),
				orTest : new RegExp( '(\\||\\s+' + ts.language.or + '\\s+)', 'i' ),
				orSplit : new RegExp( '(?:\\s+(?:' + ts.language.or + ')\\s+|\\|)', 'gi' ),
				iQuery : new RegExp( val, 'i' ),
				igQuery : new RegExp( val, 'ig' ),
				operTest : /^[<>]=?/,
				gtTest  : />/,
				gteTest : />=/,
				ltTest  : /</,
				lteTest : /<=/,
				notTest : /^\!/,
				wildOrTest : /[\?\*\|]/,
				wildTest : /\?\*/,
				fuzzyTest : /^~/,
				exactTest : /[=\"\|!]/
			});

			// don't build filter row if columnFilters is false or all columns are set to 'filter-false'
			// see issue #156
			val = c.$headers.filter( '.filter-false, .parser-false' ).length;
			if ( wo.filter_columnFilters !== false && val !== c.$headers.length ) {
				// build filter row
				tsf.buildRow( table, c, wo );
			}

			txt = 'addRows updateCell update updateRows updateComplete appendCache filterReset ' +
				'filterResetSaved filterEnd search '.split( ' ' ).join( c.namespace + 'filter ' );
			c.$table.bind( txt, function( event, filter ) {
				val = wo.filter_hideEmpty &&
					$.isEmptyObject( c.cache ) &&
					!( c.delayInit && event.type === 'appendCache' );
				// hide filter row using the 'filtered' class name
				c.$table.find( '.' + tscss.filterRow ).toggleClass( wo.filter_filteredRow, val ); // fixes #450
				if ( !/(search|filter)/.test( event.type ) ) {
					event.stopPropagation();
					tsf.buildDefault( table, true );
				}
				if ( event.type === 'filterReset' ) {
					c.$table.find( '.' + tscss.filter ).add( wo.filter_$externalFilters ).val( '' );
					tsf.searching( table, [] );
				} else if ( event.type === 'filterResetSaved' ) {
					ts.storage( table, 'tablesorter-filters', '' );
				} else if ( event.type === 'filterEnd' ) {
					tsf.buildDefault( table, true );
				} else {
					// send false argument to force a new search; otherwise if the filter hasn't changed,
					// it will return
					filter = event.type === 'search' ? filter :
						event.type === 'updateComplete' ? c.$table.data( 'lastSearch' ) : '';
					if ( /(update|add)/.test( event.type ) && event.type !== 'updateComplete' ) {
						// force a new search since content has changed
						c.lastCombinedFilter = null;
						c.lastSearch = [];
						// update filterFormatters after update (& small delay) - Fixes #1237
						setTimeout(function(){
							c.$table.triggerHandler( 'filterFomatterUpdate' );
						}, 100);
					}
					// pass true ( skipFirst ) to prevent the tablesorter.setFilters function from skipping the first
					// input ensures all inputs are updated when a search is triggered on the table
					// $( 'table' ).trigger( 'search', [...] );
					tsf.searching( table, filter, true );
				}
				return false;
			});

			// reset button/link
			if ( wo.filter_reset ) {
				if ( wo.filter_reset instanceof $ ) {
					// reset contains a jQuery object, bind to it
					wo.filter_reset.click( function() {
						c.$table.triggerHandler( 'filterReset' );
					});
				} else if ( $( wo.filter_reset ).length ) {
					// reset is a jQuery selector, use event delegation
					$( document )
						.undelegate( wo.filter_reset, 'click' + c.namespace + 'filter' )
						.delegate( wo.filter_reset, 'click' + c.namespace + 'filter', function() {
							// trigger a reset event, so other functions ( filter_formatter ) know when to reset
							c.$table.triggerHandler( 'filterReset' );
						});
				}
			}
			if ( wo.filter_functions ) {
				for ( column = 0; column < c.columns; column++ ) {
					fxn = ts.getColumnData( table, wo.filter_functions, column );
					if ( fxn ) {
						// remove 'filter-select' from header otherwise the options added here are replaced with
						// all options
						$header = c.$headerIndexed[ column ].removeClass( 'filter-select' );
						// don't build select if 'filter-false' or 'parser-false' set
						noSelect = !( $header.hasClass( 'filter-false' ) || $header.hasClass( 'parser-false' ) );
						options = '';
						if ( fxn === true && noSelect ) {
							tsf.buildSelect( table, column );
						} else if ( typeof fxn === 'object' && noSelect ) {
							// add custom drop down list
							for ( string in fxn ) {
								if ( typeof string === 'string' ) {
									options += options === '' ?
										'<option value="">' +
											( $header.data( 'placeholder' ) ||
												$header.attr( 'data-placeholder' ) ||
												wo.filter_placeholder.select ||
												''
											) +
										'</option>' : '';
									val = string;
									txt = string;
									if ( string.indexOf( wo.filter_selectSourceSeparator ) >= 0 ) {
										val = string.split( wo.filter_selectSourceSeparator );
										txt = val[1];
										val = val[0];
									}
									options += '<option ' +
										( txt === val ? '' : 'data-function-name="' + string + '" ' ) +
										'value="' + val + '">' + txt + '</option>';
								}
							}
							c.$table
								.find( 'thead' )
								.find( 'select.' + tscss.filter + '[data-column="' + column + '"]' )
								.append( options );
							txt = wo.filter_selectSource;
							fxn = typeof txt === 'function' ? true : ts.getColumnData( table, txt, column );
							if ( fxn ) {
								// updating so the extra options are appended
								tsf.buildSelect( c.table, column, '', true, $header.hasClass( wo.filter_onlyAvail ) );
							}
						}
					}
				}
			}
			// not really updating, but if the column has both the 'filter-select' class &
			// filter_functions set to true, it would append the same options twice.
			tsf.buildDefault( table, true );

			tsf.bindSearch( table, c.$table.find( '.' + tscss.filter ), true );
			if ( wo.filter_external ) {
				tsf.bindSearch( table, wo.filter_external );
			}

			if ( wo.filter_hideFilters ) {
				tsf.hideFilters( c );
			}

			// show processing icon
			if ( c.showProcessing ) {
				txt = 'filterStart filterEnd '.split( ' ' ).join( c.namespace + 'filter ' );
				c.$table
					.unbind( txt.replace( ts.regex.spaces, ' ' ) )
					.bind( txt, function( event, columns ) {
					// only add processing to certain columns to all columns
					$header = ( columns ) ?
						c.$table
							.find( '.' + tscss.header )
							.filter( '[data-column]' )
							.filter( function() {
								return columns[ $( this ).data( 'column' ) ] !== '';
							}) : '';
					ts.isProcessing( table, event.type === 'filterStart', columns ? $header : '' );
				});
			}

			// set filtered rows count ( intially unfiltered )
			c.filteredRows = c.totalRows;

			// add default values
			txt = 'tablesorter-initialized pagerBeforeInitialized '.split( ' ' ).join( c.namespace + 'filter ' );
			c.$table
			.unbind( txt.replace( ts.regex.spaces, ' ' ) )
			.bind( txt, function() {
				tsf.completeInit( this );
			});
			// if filter widget is added after pager has initialized; then set filter init flag
			if ( c.pager && c.pager.initialized && !wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterFomatterUpdate' );
				setTimeout( function() {
					tsf.filterInitComplete( c );
				}, 100 );
			} else if ( !wo.filter_initialized ) {
				tsf.completeInit( table );
			}
		},
		completeInit: function( table ) {
			// redefine 'c' & 'wo' so they update properly inside this callback
			var c = table.config,
				wo = c.widgetOptions,
				filters = tsf.setDefaults( table, c, wo ) || [];
			if ( filters.length ) {
				// prevent delayInit from triggering a cache build if filters are empty
				if ( !( c.delayInit && filters.join( '' ) === '' ) ) {
					ts.setFilters( table, filters, true );
				}
			}
			c.$table.triggerHandler( 'filterFomatterUpdate' );
			// trigger init after setTimeout to prevent multiple filterStart/End/Init triggers
			setTimeout( function() {
				if ( !wo.filter_initialized ) {
					tsf.filterInitComplete( c );
				}
			}, 100 );
		},

		// $cell parameter, but not the config, is passed to the filter_formatters,
		// so we have to work with it instead
		formatterUpdated: function( $cell, column ) {
			// prevent error if $cell is undefined - see #1056
			var wo = $cell && $cell.closest( 'table' )[0].config.widgetOptions;
			if ( wo && !wo.filter_initialized ) {
				// add updates by column since this function
				// may be called numerous times before initialization
				wo.filter_formatterInit[ column ] = 1;
			}
		},
		filterInitComplete: function( c ) {
			var indx, len,
				wo = c.widgetOptions,
				count = 0,
				completed = function() {
					wo.filter_initialized = true;
					// update lastSearch - it gets cleared often
					c.lastSearch = c.$table.data( 'lastSearch' );
					c.$table.triggerHandler( 'filterInit', c );
					tsf.findRows( c.table, c.lastSearch || [] );
				};
			if ( $.isEmptyObject( wo.filter_formatter ) ) {
				completed();
			} else {
				len = wo.filter_formatterInit.length;
				for ( indx = 0; indx < len; indx++ ) {
					if ( wo.filter_formatterInit[ indx ] === 1 ) {
						count++;
					}
				}
				clearTimeout( wo.filter_initTimer );
				if ( !wo.filter_initialized && count === wo.filter_formatterCount ) {
					// filter widget initialized
					completed();
				} else if ( !wo.filter_initialized ) {
					// fall back in case a filter_formatter doesn't call
					// $.tablesorter.filter.formatterUpdated( $cell, column ), and the count is off
					wo.filter_initTimer = setTimeout( function() {
						completed();
					}, 500 );
				}
			}
		},
		// encode or decode filters for storage; see #1026
		processFilters: function( filters, encode ) {
			var indx,
				// fixes #1237; previously returning an encoded "filters" value
				result = [],
				mode = encode ? encodeURIComponent : decodeURIComponent,
				len = filters.length;
			for ( indx = 0; indx < len; indx++ ) {
				if ( filters[ indx ] ) {
					result[ indx ] = mode( filters[ indx ] );
				}
			}
			return result;
		},
		setDefaults: function( table, c, wo ) {
			var isArray, saved, indx, col, $filters,
				// get current ( default ) filters
				filters = ts.getFilters( table ) || [];
			if ( wo.filter_saveFilters && ts.storage ) {
				saved = ts.storage( table, 'tablesorter-filters' ) || [];
				isArray = $.isArray( saved );
				// make sure we're not just getting an empty array
				if ( !( isArray && saved.join( '' ) === '' || !isArray ) ) {
					filters = tsf.processFilters( saved );
				}
			}
			// if no filters saved, then check default settings
			if ( filters.join( '' ) === '' ) {
				// allow adding default setting to external filters
				$filters = c.$headers.add( wo.filter_$externalFilters )
					.filter( '[' + wo.filter_defaultAttrib + ']' );
				for ( indx = 0; indx <= c.columns; indx++ ) {
					// include data-column='all' external filters
					col = indx === c.columns ? 'all' : indx;
					filters[ indx ] = $filters
						.filter( '[data-column="' + col + '"]' )
						.attr( wo.filter_defaultAttrib ) || filters[indx] || '';
				}
			}
			c.$table.data( 'lastSearch', filters );
			return filters;
		},
		parseFilter: function( c, filter, data, parsed ) {
			return parsed || data.parsed[ data.index ] ?
				c.parsers[ data.index ].format( filter, c.table, [], data.index ) :
				filter;
		},
		buildRow: function( table, c, wo ) {
			var $filter, col, column, $header, makeSelect, disabled, name, ffxn, tmp,
				// c.columns defined in computeThIndexes()
				cellFilter = wo.filter_cellFilter,
				columns = c.columns,
				arry = $.isArray( cellFilter ),
				buildFilter = '<tr role="row" class="' + tscss.filterRow + ' ' + c.cssIgnoreRow + '">';
			for ( column = 0; column < columns; column++ ) {
				if ( c.$headerIndexed[ column ].length ) {
					// account for entire column set with colspan. See #1047
					tmp = c.$headerIndexed[ column ] && c.$headerIndexed[ column ][0].colSpan || 0;
					if ( tmp > 1 ) {
						buildFilter += '<td data-column="' + column + '-' + ( column + tmp - 1 ) + '" colspan="' + tmp + '"';
					} else {
						buildFilter += '<td data-column="' + column + '"';
					}
					if ( arry ) {
						buildFilter += ( cellFilter[ column ] ? ' class="' + cellFilter[ column ] + '"' : '' );
					} else {
						buildFilter += ( cellFilter !== '' ? ' class="' + cellFilter + '"' : '' );
					}
					buildFilter += '></td>';
				}
			}
			c.$filters = $( buildFilter += '</tr>' )
				.appendTo( c.$table.children( 'thead' ).eq( 0 ) )
				.children( 'td' );
			// build each filter input
			for ( column = 0; column < columns; column++ ) {
				disabled = false;
				// assuming last cell of a column is the main column
				$header = c.$headerIndexed[ column ];
				if ( $header && $header.length ) {
					// $filter = c.$filters.filter( '[data-column="' + column + '"]' );
					$filter = tsf.getColumnElm( c, c.$filters, column );
					ffxn = ts.getColumnData( table, wo.filter_functions, column );
					makeSelect = ( wo.filter_functions && ffxn && typeof ffxn !== 'function' ) ||
						$header.hasClass( 'filter-select' );
					// get data from jQuery data, metadata, headers option or header class name
					col = ts.getColumnData( table, c.headers, column );
					disabled = ts.getData( $header[0], col, 'filter' ) === 'false' ||
						ts.getData( $header[0], col, 'parser' ) === 'false';

					if ( makeSelect ) {
						buildFilter = $( '<select>' ).appendTo( $filter );
					} else {
						ffxn = ts.getColumnData( table, wo.filter_formatter, column );
						if ( ffxn ) {
							wo.filter_formatterCount++;
							buildFilter = ffxn( $filter, column );
							// no element returned, so lets go find it
							if ( buildFilter && buildFilter.length === 0 ) {
								buildFilter = $filter.children( 'input' );
							}
							// element not in DOM, so lets attach it
							if ( buildFilter && ( buildFilter.parent().length === 0 ||
								( buildFilter.parent().length && buildFilter.parent()[0] !== $filter[0] ) ) ) {
								$filter.append( buildFilter );
							}
						} else {
							buildFilter = $( '<input type="search">' ).appendTo( $filter );
						}
						if ( buildFilter ) {
							tmp = $header.data( 'placeholder' ) ||
								$header.attr( 'data-placeholder' ) ||
								wo.filter_placeholder.search || '';
							buildFilter.attr( 'placeholder', tmp );
						}
					}
					if ( buildFilter ) {
						// add filter class name
						name = ( $.isArray( wo.filter_cssFilter ) ?
							( typeof wo.filter_cssFilter[column] !== 'undefined' ? wo.filter_cssFilter[column] || '' : '' ) :
							wo.filter_cssFilter ) || '';
						// copy data-column from table cell (it will include colspan)
						buildFilter.addClass( tscss.filter + ' ' + name ).attr( 'data-column', $filter.attr( 'data-column' ) );
						if ( disabled ) {
							buildFilter.attr( 'placeholder', '' ).addClass( tscss.filterDisabled )[0].disabled = true;
						}
					}
				}
			}
		},
		bindSearch: function( table, $el, internal ) {
			table = $( table )[0];
			$el = $( $el ); // allow passing a selector string
			if ( !$el.length ) { return; }
			var tmp,
				c = table.config,
				wo = c.widgetOptions,
				namespace = c.namespace + 'filter',
				$ext = wo.filter_$externalFilters;
			if ( internal !== true ) {
				// save anyMatch element
				tmp = wo.filter_anyColumnSelector + ',' + wo.filter_multipleColumnSelector;
				wo.filter_$anyMatch = $el.filter( tmp );
				if ( $ext && $ext.length ) {
					wo.filter_$externalFilters = wo.filter_$externalFilters.add( $el );
				} else {
					wo.filter_$externalFilters = $el;
				}
				// update values ( external filters added after table initialization )
				ts.setFilters( table, c.$table.data( 'lastSearch' ) || [], internal === false );
			}
			// unbind events
			tmp = ( 'keypress keyup keydown search change input '.split( ' ' ).join( namespace + ' ' ) );
			$el
			// use data attribute instead of jQuery data since the head is cloned without including
			// the data/binding
			.attr( 'data-lastSearchTime', new Date().getTime() )
			.unbind( tmp.replace( ts.regex.spaces, ' ' ) )
			.bind( 'keydown' + namespace, function( event ) {
				if ( event.which === tskeyCodes.escape && !table.config.widgetOptions.filter_resetOnEsc ) {
					// prevent keypress event
					return false;
				}
			})
			.bind( 'keyup' + namespace, function( event ) {
				wo = table.config.widgetOptions; // make sure "wo" isn't cached
				var column = parseInt( $( this ).attr( 'data-column' ), 10 ),
					liveSearch = typeof wo.filter_liveSearch === 'boolean' ? wo.filter_liveSearch :
						ts.getColumnData( table, wo.filter_liveSearch, column );
				if ( typeof liveSearch === 'undefined' ) {
					liveSearch = wo.filter_liveSearch.fallback || false;
				}
				$( this ).attr( 'data-lastSearchTime', new Date().getTime() );
				// emulate what webkit does.... escape clears the filter
				if ( event.which === tskeyCodes.escape ) {
					// make sure to restore the last value on escape
					this.value = wo.filter_resetOnEsc ? '' : c.lastSearch[column];
				// live search
				} else if ( liveSearch === false ) {
					return;
					// don't return if the search value is empty ( all rows need to be revealed )
				} else if ( this.value !== '' && (
					// liveSearch can contain a min value length; ignore arrow and meta keys, but allow backspace
					( typeof liveSearch === 'number' && this.value.length < liveSearch ) ||
					// let return & backspace continue on, but ignore arrows & non-valid characters
					( event.which !== tskeyCodes.enter && event.which !== tskeyCodes.backSpace &&
						( event.which < tskeyCodes.space || ( event.which >= tskeyCodes.left && event.which <= tskeyCodes.down ) ) ) ) ) {
					return;
				}
				// change event = no delay; last true flag tells getFilters to skip newest timed input
				tsf.searching( table, true, true, column );
			})
			// include change for select - fixes #473
			.bind( 'search change keypress input '.split( ' ' ).join( namespace + ' ' ), function( event ) {
				// don't get cached data, in case data-column changes dynamically
				var column = parseInt( $( this ).attr( 'data-column' ), 10 ),
					liveSearch = typeof wo.filter_liveSearch === 'boolean' ?
						wo.filter_liveSearch :
						ts.getColumnData( table, wo.filter_liveSearch, column );
				if ( table.config.widgetOptions.filter_initialized &&
					// immediate search if user presses enter
					( event.which === tskeyCodes.enter ||
						// immediate search if a "search" is triggered on the input
						event.type === 'search' ||
						// change & input events must be ignored if liveSearch !== true
						( event.type === 'change' || event.type === 'input' ) &&
						// prevent search if liveSearch is a number
						liveSearch === true &&
						// don't allow 'change' or 'input' event to process if the input value
						// is the same - fixes #685
						this.value !== c.lastSearch[column]
					)
				) {
					event.preventDefault();
					// init search with no delay
					$( this ).attr( 'data-lastSearchTime', new Date().getTime() );
					tsf.searching( table, event.type !== 'keypress', true, column );
				}
			});
		},
		searching: function( table, filter, skipFirst, column ) {
			var liveSearch,
				wo = table.config.widgetOptions;
			if (typeof column === 'undefined') {
				// no delay
				liveSearch = false;
			} else {
				liveSearch = typeof wo.filter_liveSearch === 'boolean' ?
					wo.filter_liveSearch :
					// get column setting, or set to fallback value, or default to false
					ts.getColumnData( table, wo.filter_liveSearch, column );
				if ( typeof liveSearch === 'undefined' ) {
					liveSearch = wo.filter_liveSearch.fallback || false;
				}
			}
			clearTimeout( wo.filter_searchTimer );
			if ( typeof filter === 'undefined' || filter === true ) {
				// delay filtering
				wo.filter_searchTimer = setTimeout( function() {
					tsf.checkFilters( table, filter, skipFirst );
				}, liveSearch ? wo.filter_searchDelay : 10 );
			} else {
				// skip delay
				tsf.checkFilters( table, filter, skipFirst );
			}
		},
		checkFilters: function( table, filter, skipFirst ) {
			var c = table.config,
				wo = c.widgetOptions,
				filterArray = $.isArray( filter ),
				filters = ( filterArray ) ? filter : ts.getFilters( table, true ),
				combinedFilters = ( filters || [] ).join( '' ); // combined filter values
			// prevent errors if delay init is set
			if ( $.isEmptyObject( c.cache ) ) {
				// update cache if delayInit set & pager has initialized ( after user initiates a search )
				if ( c.delayInit && ( !c.pager || c.pager && c.pager.initialized ) ) {
					ts.updateCache( c, function() {
						tsf.checkFilters( table, false, skipFirst );
					});
				}
				return;
			}
			// add filter array back into inputs
			if ( filterArray ) {
				ts.setFilters( table, filters, false, skipFirst !== true );
				if ( !wo.filter_initialized ) { c.lastCombinedFilter = ''; }
			}
			if ( wo.filter_hideFilters ) {
				// show/hide filter row as needed
				c.$table
					.find( '.' + tscss.filterRow )
					.triggerHandler( tsf.hideFiltersCheck( c ) ? 'mouseleave' : 'mouseenter' );
			}
			// return if the last search is the same; but filter === false when updating the search
			// see example-widget-filter.html filter toggle buttons
			if ( c.lastCombinedFilter === combinedFilters && filter !== false ) {
				return;
			} else if ( filter === false ) {
				// force filter refresh
				c.lastCombinedFilter = null;
				c.lastSearch = [];
			}
			// define filter inside it is false
			filters = filters || [];
			// convert filters to strings - see #1070
			filters = Array.prototype.map ?
				filters.map( String ) :
				// for IE8 & older browsers - maybe not the best method
				filters.join( '\ufffd' ).split( '\ufffd' );

			if ( wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterStart', [ filters ] );
			}
			if ( c.showProcessing ) {
				// give it time for the processing icon to kick in
				setTimeout( function() {
					tsf.findRows( table, filters, combinedFilters );
					return false;
				}, 30 );
			} else {
				tsf.findRows( table, filters, combinedFilters );
				return false;
			}
		},
		hideFiltersCheck: function( c ) {
			if (typeof c.widgetOptions.filter_hideFilters === 'function') {
				var val = c.widgetOptions.filter_hideFilters( c );
				if (typeof val === 'boolean') {
					return val;
				}
			}
			return ts.getFilters( c.$table ).join( '' ) === '';
		},
		hideFilters: function( c, $table ) {
			var timer;
			( $table || c.$table )
				.find( '.' + tscss.filterRow )
				.addClass( tscss.filterRowHide )
				.bind( 'mouseenter mouseleave', function( e ) {
					// save event object - http://bugs.jquery.com/ticket/12140
					var event = e,
						$row = $( this );
					clearTimeout( timer );
					timer = setTimeout( function() {
						if ( /enter|over/.test( event.type ) ) {
							$row.removeClass( tscss.filterRowHide );
						} else {
							// don't hide if input has focus
							// $( ':focus' ) needs jQuery 1.6+
							if ( $( document.activeElement ).closest( 'tr' )[0] !== $row[0] ) {
								// don't hide row if any filter has a value
								$row.toggleClass( tscss.filterRowHide, tsf.hideFiltersCheck( c ) );
							}
						}
					}, 200 );
				})
				.find( 'input, select' ).bind( 'focus blur', function( e ) {
					var event = e,
						$row = $( this ).closest( 'tr' );
					clearTimeout( timer );
					timer = setTimeout( function() {
						clearTimeout( timer );
						// don't hide row if any filter has a value
						$row.toggleClass( tscss.filterRowHide, tsf.hideFiltersCheck( c ) && event.type !== 'focus' );
					}, 200 );
				});
		},
		defaultFilter: function( filter, mask ) {
			if ( filter === '' ) { return filter; }
			var regex = tsfRegex.iQuery,
				maskLen = mask.match( tsfRegex.igQuery ).length,
				query = maskLen > 1 ? $.trim( filter ).split( /\s/ ) : [ $.trim( filter ) ],
				len = query.length - 1,
				indx = 0,
				val = mask;
			if ( len < 1 && maskLen > 1 ) {
				// only one 'word' in query but mask has >1 slots
				query[1] = query[0];
			}
			// replace all {query} with query words...
			// if query = 'Bob', then convert mask from '!{query}' to '!Bob'
			// if query = 'Bob Joe Frank', then convert mask '{q} OR {q}' to 'Bob OR Joe OR Frank'
			while ( regex.test( val ) ) {
				val = val.replace( regex, query[indx++] || '' );
				if ( regex.test( val ) && indx < len && ( query[indx] || '' ) !== '' ) {
					val = mask.replace( regex, val );
				}
			}
			return val;
		},
		getLatestSearch: function( $input ) {
			if ( $input ) {
				return $input.sort( function( a, b ) {
					return $( b ).attr( 'data-lastSearchTime' ) - $( a ).attr( 'data-lastSearchTime' );
				});
			}
			return $input || $();
		},
		findRange: function( c, val, ignoreRanges ) {
			// look for multiple columns '1-3,4-6,8' in data-column
			var temp, ranges, range, start, end, singles, i, indx, len,
				columns = [];
			if ( /^[0-9]+$/.test( val ) ) {
				// always return an array
				return [ parseInt( val, 10 ) ];
			}
			// process column range
			if ( !ignoreRanges && /-/.test( val ) ) {
				ranges = val.match( /(\d+)\s*-\s*(\d+)/g );
				len = ranges ? ranges.length : 0;
				for ( indx = 0; indx < len; indx++ ) {
					range = ranges[indx].split( /\s*-\s*/ );
					start = parseInt( range[0], 10 ) || 0;
					end = parseInt( range[1], 10 ) || ( c.columns - 1 );
					if ( start > end ) {
						temp = start; start = end; end = temp; // swap
					}
					if ( end >= c.columns ) {
						end = c.columns - 1;
					}
					for ( ; start <= end; start++ ) {
						columns[ columns.length ] = start;
					}
					// remove processed range from val
					val = val.replace( ranges[ indx ], '' );
				}
			}
			// process single columns
			if ( !ignoreRanges && /,/.test( val ) ) {
				singles = val.split( /\s*,\s*/ );
				len = singles.length;
				for ( i = 0; i < len; i++ ) {
					if ( singles[ i ] !== '' ) {
						indx = parseInt( singles[ i ], 10 );
						if ( indx < c.columns ) {
							columns[ columns.length ] = indx;
						}
					}
				}
			}
			// return all columns
			if ( !columns.length ) {
				for ( indx = 0; indx < c.columns; indx++ ) {
					columns[ columns.length ] = indx;
				}
			}
			return columns;
		},
		getColumnElm: function( c, $elements, column ) {
			// data-column may contain multiple columns '1-3,5-6,8'
			// replaces: c.$filters.filter( '[data-column="' + column + '"]' );
			return $elements.filter( function() {
				var cols = tsf.findRange( c, $( this ).attr( 'data-column' ) );
				return $.inArray( column, cols ) > -1;
			});
		},
		multipleColumns: function( c, $input ) {
			// look for multiple columns '1-3,4-6,8' in data-column
			var wo = c.widgetOptions,
				// only target 'all' column inputs on initialization
				// & don't target 'all' column inputs if they don't exist
				targets = wo.filter_initialized || !$input.filter( wo.filter_anyColumnSelector ).length,
				val = $.trim( tsf.getLatestSearch( $input ).attr( 'data-column' ) || '' );
			return tsf.findRange( c, val, !targets );
		},
		processTypes: function( c, data, vars ) {
			var ffxn,
				filterMatched = null,
				matches = null;
			for ( ffxn in tsf.types ) {
				if ( $.inArray( ffxn, vars.excludeMatch ) < 0 && matches === null ) {
					matches = tsf.types[ffxn]( c, data, vars );
					if ( matches !== null ) {
						filterMatched = matches;
					}
				}
			}
			return filterMatched;
		},
		matchType: function( c, columnIndex ) {
			var isMatch,
				wo = c.widgetOptions,
				$el = c.$headerIndexed[ columnIndex ];
			// filter-exact > filter-match > filter_matchType for type
			if ( $el.hasClass( 'filter-exact' ) ) {
				isMatch = false;
			} else if ( $el.hasClass( 'filter-match' ) ) {
				isMatch = true;
			} else {
				// filter-select is not applied when filter_functions are used, so look for a select
				if ( wo.filter_columnFilters ) {
					$el = c.$filters
						.find( '.' + tscss.filter )
						.add( wo.filter_$externalFilters )
						.filter( '[data-column="' + columnIndex + '"]' );
				} else if ( wo.filter_$externalFilters ) {
					$el = wo.filter_$externalFilters.filter( '[data-column="' + columnIndex + '"]' );
				}
				isMatch = $el.length ?
					c.widgetOptions.filter_matchType[ ( $el[ 0 ].nodeName || '' ).toLowerCase() ] === 'match' :
					// default to exact, if no inputs found
					false;
			}
			return isMatch;
		},
		processRow: function( c, data, vars ) {
			var result, filterMatched,
				fxn, ffxn, txt,
				wo = c.widgetOptions,
				showRow = true,
				hasAnyMatchInput = wo.filter_$anyMatch && wo.filter_$anyMatch.length,

				// if wo.filter_$anyMatch data-column attribute is changed dynamically
				// we don't want to do an "anyMatch" search on one column using data
				// for the entire row - see #998
				columnIndex = wo.filter_$anyMatch && wo.filter_$anyMatch.length ?
					// look for multiple columns '1-3,4-6,8'
					tsf.multipleColumns( c, wo.filter_$anyMatch ) :
					[];
			data.$cells = data.$row.children();
			if ( data.anyMatchFlag && columnIndex.length > 1 || ( data.anyMatchFilter && !hasAnyMatchInput ) ) {
				data.anyMatch = true;
				data.isMatch = true;
				data.rowArray = data.$cells.map( function( i ) {
					if ( $.inArray( i, columnIndex ) > -1 || ( data.anyMatchFilter && !hasAnyMatchInput ) ) {
						if ( data.parsed[ i ] ) {
							txt = data.cacheArray[ i ];
						} else {
							txt = data.rawArray[ i ];
							txt = $.trim( wo.filter_ignoreCase ? txt.toLowerCase() : txt );
							if ( c.sortLocaleCompare ) {
								txt = ts.replaceAccents( txt );
							}
						}
						return txt;
					}
				}).get();
				data.filter = data.anyMatchFilter;
				data.iFilter = data.iAnyMatchFilter;
				data.exact = data.rowArray.join( ' ' );
				data.iExact = wo.filter_ignoreCase ? data.exact.toLowerCase() : data.exact;
				data.cache = data.cacheArray.slice( 0, -1 ).join( ' ' );
				vars.excludeMatch = vars.noAnyMatch;
				filterMatched = tsf.processTypes( c, data, vars );
				if ( filterMatched !== null ) {
					showRow = filterMatched;
				} else {
					if ( wo.filter_startsWith ) {
						showRow = false;
						// data.rowArray may not contain all columns
						columnIndex = Math.min( c.columns, data.rowArray.length );
						while ( !showRow && columnIndex > 0 ) {
							columnIndex--;
							showRow = showRow || data.rowArray[ columnIndex ].indexOf( data.iFilter ) === 0;
						}
					} else {
						showRow = ( data.iExact + data.childRowText ).indexOf( data.iFilter ) >= 0;
					}
				}
				data.anyMatch = false;
				// no other filters to process
				if ( data.filters.join( '' ) === data.filter ) {
					return showRow;
				}
			}

			for ( columnIndex = 0; columnIndex < c.columns; columnIndex++ ) {
				data.filter = data.filters[ columnIndex ];
				data.index = columnIndex;

				// filter types to exclude, per column
				vars.excludeMatch = vars.excludeFilter[ columnIndex ];

				// ignore if filter is empty or disabled
				if ( data.filter ) {
					data.cache = data.cacheArray[ columnIndex ];
					result = data.parsed[ columnIndex ] ? data.cache : data.rawArray[ columnIndex ] || '';
					data.exact = c.sortLocaleCompare ? ts.replaceAccents( result ) : result; // issue #405
					data.iExact = !tsfRegex.type.test( typeof data.exact ) && wo.filter_ignoreCase ?
						data.exact.toLowerCase() : data.exact;
					data.isMatch = tsf.matchType( c, columnIndex );

					result = showRow; // if showRow is true, show that row

					// in case select filter option has a different value vs text 'a - z|A through Z'
					ffxn = wo.filter_columnFilters ?
						c.$filters.add( wo.filter_$externalFilters )
							.filter( '[data-column="' + columnIndex + '"]' )
							.find( 'select option:selected' )
							.attr( 'data-function-name' ) || '' : '';
					// replace accents - see #357
					if ( c.sortLocaleCompare ) {
						data.filter = ts.replaceAccents( data.filter );
					}

					// replace column specific default filters - see #1088
					if ( wo.filter_defaultFilter && tsfRegex.iQuery.test( vars.defaultColFilter[ columnIndex ] ) ) {
						data.filter = tsf.defaultFilter( data.filter, vars.defaultColFilter[ columnIndex ] );
					}

					// data.iFilter = case insensitive ( if wo.filter_ignoreCase is true ),
					// data.filter = case sensitive
					data.iFilter = wo.filter_ignoreCase ? ( data.filter || '' ).toLowerCase() : data.filter;
					fxn = vars.functions[ columnIndex ];
					filterMatched = null;
					if ( fxn ) {
						if ( fxn === true ) {
							// default selector uses exact match unless 'filter-match' class is found
							filterMatched = data.isMatch ?
								// data.iExact may be a number
								( '' + data.iExact ).search( data.iFilter ) >= 0 :
								data.filter === data.exact;
						} else if ( typeof fxn === 'function' ) {
							// filter callback( exact cell content, parser normalized content,
							// filter input value, column index, jQuery row object )
							filterMatched = fxn( data.exact, data.cache, data.filter, columnIndex, data.$row, c, data );
						} else if ( typeof fxn[ ffxn || data.filter ] === 'function' ) {
							// selector option function
							txt = ffxn || data.filter;
							filterMatched =
								fxn[ txt ]( data.exact, data.cache, data.filter, columnIndex, data.$row, c, data );
						}
					}
					if ( filterMatched === null ) {
						// cycle through the different filters
						// filters return a boolean or null if nothing matches
						filterMatched = tsf.processTypes( c, data, vars );
						if ( filterMatched !== null ) {
							result = filterMatched;
						// Look for match, and add child row data for matching
						} else {
							txt = ( data.iExact + data.childRowText ).indexOf( tsf.parseFilter( c, data.iFilter, data ) );
							result = ( ( !wo.filter_startsWith && txt >= 0 ) || ( wo.filter_startsWith && txt === 0 ) );
						}
					} else {
						result = filterMatched;
					}
					showRow = ( result ) ? showRow : false;
				}
			}
			return showRow;
		},
		findRows: function( table, filters, combinedFilters ) {
			if ( table.config.lastCombinedFilter === combinedFilters ||
				!table.config.widgetOptions.filter_initialized ) {
				return;
			}
			var len, norm_rows, rowData, $rows, $row, rowIndex, tbodyIndex, $tbody, columnIndex,
				isChild, childRow, lastSearch, showRow, showParent, time, val, indx,
				notFiltered, searchFiltered, query, injected, res, id, txt,
				storedFilters = $.extend( [], filters ),
				c = table.config,
				wo = c.widgetOptions,
				// data object passed to filters; anyMatch is a flag for the filters
				data = {
					anyMatch: false,
					filters: filters,
					// regex filter type cache
					filter_regexCache : []
				},
				vars = {
					// anyMatch really screws up with these types of filters
					noAnyMatch: [ 'range',  'operators' ],
					// cache filter variables that use ts.getColumnData in the main loop
					functions : [],
					excludeFilter : [],
					defaultColFilter : [],
					defaultAnyFilter : ts.getColumnData( table, wo.filter_defaultFilter, c.columns, true ) || ''
				};

			// parse columns after formatter, in case the class is added at that point
			data.parsed = [];
			for ( columnIndex = 0; columnIndex < c.columns; columnIndex++ ) {
				data.parsed[ columnIndex ] = wo.filter_useParsedData ||
					// parser has a "parsed" parameter
					( c.parsers && c.parsers[ columnIndex ] && c.parsers[ columnIndex ].parsed ||
					// getData may not return 'parsed' if other 'filter-' class names exist
					// ( e.g. <th class="filter-select filter-parsed"> )
					ts.getData && ts.getData( c.$headerIndexed[ columnIndex ],
						ts.getColumnData( table, c.headers, columnIndex ), 'filter' ) === 'parsed' ||
					c.$headerIndexed[ columnIndex ].hasClass( 'filter-parsed' ) );

				vars.functions[ columnIndex ] =
					ts.getColumnData( table, wo.filter_functions, columnIndex ) ||
					c.$headerIndexed[ columnIndex ].hasClass( 'filter-select' );
				vars.defaultColFilter[ columnIndex ] =
					ts.getColumnData( table, wo.filter_defaultFilter, columnIndex ) || '';
				vars.excludeFilter[ columnIndex ] =
					( ts.getColumnData( table, wo.filter_excludeFilter, columnIndex, true ) || '' ).split( /\s+/ );
			}

			if ( c.debug ) {
				console.log( 'Filter: Starting filter widget search', filters );
				time = new Date();
			}
			// filtered rows count
			c.filteredRows = 0;
			c.totalRows = 0;
			// combindedFilters are undefined on init
			combinedFilters = ( storedFilters || [] ).join( '' );

			for ( tbodyIndex = 0; tbodyIndex < c.$tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody( table, c.$tbodies.eq( tbodyIndex ), true );
				// skip child rows & widget added ( removable ) rows - fixes #448 thanks to @hempel!
				// $rows = $tbody.children( 'tr' ).not( c.selectorRemove );
				columnIndex = c.columns;
				// convert stored rows into a jQuery object
				norm_rows = c.cache[ tbodyIndex ].normalized;
				$rows = $( $.map( norm_rows, function( el ) {
					return el[ columnIndex ].$row.get();
				}) );

				if ( combinedFilters === '' || wo.filter_serversideFiltering ) {
					$rows
						.removeClass( wo.filter_filteredRow )
						.not( '.' + c.cssChildRow )
						.css( 'display', '' );
				} else {
					// filter out child rows
					$rows = $rows.not( '.' + c.cssChildRow );
					len = $rows.length;

					if ( ( wo.filter_$anyMatch && wo.filter_$anyMatch.length ) ||
						typeof filters[c.columns] !== 'undefined' ) {
						data.anyMatchFlag = true;
						data.anyMatchFilter = '' + (
							filters[ c.columns ] ||
							wo.filter_$anyMatch && tsf.getLatestSearch( wo.filter_$anyMatch ).val() ||
							''
						);
						if ( wo.filter_columnAnyMatch ) {
							// specific columns search
							query = data.anyMatchFilter.split( tsfRegex.andSplit );
							injected = false;
							for ( indx = 0; indx < query.length; indx++ ) {
								res = query[ indx ].split( ':' );
								if ( res.length > 1 ) {
									// make the column a one-based index ( non-developers start counting from one :P )
									if ( isNaN( res[0] ) ) {
										$.each( c.headerContent, function( i, txt ) {
											// multiple matches are possible
											if ( txt.toLowerCase().indexOf( res[0] ) > -1 ) {
												id = i;
												filters[ id ] = res[1];
											}
										});
									} else {
										id = parseInt( res[0], 10 ) - 1;
									}
									if ( id >= 0 && id < c.columns ) { // if id is an integer
										filters[ id ] = res[1];
										query.splice( indx, 1 );
										indx--;
										injected = true;
									}
								}
							}
							if ( injected ) {
								data.anyMatchFilter = query.join( ' && ' );
							}
						}
					}

					// optimize searching only through already filtered rows - see #313
					searchFiltered = wo.filter_searchFiltered;
					lastSearch = c.lastSearch || c.$table.data( 'lastSearch' ) || [];
					if ( searchFiltered ) {
						// cycle through all filters; include last ( columnIndex + 1 = match any column ). Fixes #669
						for ( indx = 0; indx < columnIndex + 1; indx++ ) {
							val = filters[indx] || '';
							// break out of loop if we've already determined not to search filtered rows
							if ( !searchFiltered ) { indx = columnIndex; }
							// search already filtered rows if...
							searchFiltered = searchFiltered && lastSearch.length &&
								// there are no changes from beginning of filter
								val.indexOf( lastSearch[indx] || '' ) === 0 &&
								// if there is NOT a logical 'or', or range ( 'to' or '-' ) in the string
								!tsfRegex.alreadyFiltered.test( val ) &&
								// if we are not doing exact matches, using '|' ( logical or ) or not '!'
								!tsfRegex.exactTest.test( val ) &&
								// don't search only filtered if the value is negative
								// ( '> -10' => '> -100' will ignore hidden rows )
								!( tsfRegex.isNeg1.test( val ) || tsfRegex.isNeg2.test( val ) ) &&
								// if filtering using a select without a 'filter-match' class ( exact match ) - fixes #593
								!( val !== '' && c.$filters && c.$filters.filter( '[data-column="' + indx + '"]' ).find( 'select' ).length &&
									!tsf.matchType( c, indx ) );
						}
					}
					notFiltered = $rows.not( '.' + wo.filter_filteredRow ).length;
					// can't search when all rows are hidden - this happens when looking for exact matches
					if ( searchFiltered && notFiltered === 0 ) { searchFiltered = false; }
					if ( c.debug ) {
						console.log( 'Filter: Searching through ' +
							( searchFiltered && notFiltered < len ? notFiltered : 'all' ) + ' rows' );
					}
					if ( data.anyMatchFlag ) {
						if ( c.sortLocaleCompare ) {
							// replace accents
							data.anyMatchFilter = ts.replaceAccents( data.anyMatchFilter );
						}
						if ( wo.filter_defaultFilter && tsfRegex.iQuery.test( vars.defaultAnyFilter ) ) {
							data.anyMatchFilter = tsf.defaultFilter( data.anyMatchFilter, vars.defaultAnyFilter );
							// clear search filtered flag because default filters are not saved to the last search
							searchFiltered = false;
						}
						// make iAnyMatchFilter lowercase unless both filter widget & core ignoreCase options are true
						// when c.ignoreCase is true, the cache contains all lower case data
						data.iAnyMatchFilter = !( wo.filter_ignoreCase && c.ignoreCase ) ?
							data.anyMatchFilter :
							data.anyMatchFilter.toLowerCase();
					}

					// loop through the rows
					for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {

						txt = $rows[ rowIndex ].className;
						// the first row can never be a child row
						isChild = rowIndex && tsfRegex.child.test( txt );
						// skip child rows & already filtered rows
						if ( isChild || ( searchFiltered && tsfRegex.filtered.test( txt ) ) ) {
							continue;
						}

						data.$row = $rows.eq( rowIndex );
						data.rowIndex = rowIndex;
						data.cacheArray = norm_rows[ rowIndex ];
						rowData = data.cacheArray[ c.columns ];
						data.rawArray = rowData.raw;
						data.childRowText = '';

						if ( !wo.filter_childByColumn ) {
							txt = '';
							// child row cached text
							childRow = rowData.child;
							// so, if 'table.config.widgetOptions.filter_childRows' is true and there is
							// a match anywhere in the child row, then it will make the row visible
							// checked here so the option can be changed dynamically
							for ( indx = 0; indx < childRow.length; indx++ ) {
								txt += ' ' + childRow[indx].join( ' ' ) || '';
							}
							data.childRowText = wo.filter_childRows ?
								( wo.filter_ignoreCase ? txt.toLowerCase() : txt ) :
								'';
						}

						showRow = false;
						showParent = tsf.processRow( c, data, vars );
						$row = rowData.$row;

						// don't pass reference to val
						val = showParent ? true : false;
						childRow = rowData.$row.filter( ':gt(0)' );
						if ( wo.filter_childRows && childRow.length ) {
							if ( wo.filter_childByColumn ) {
								if ( !wo.filter_childWithSibs ) {
									// hide all child rows
									childRow.addClass( wo.filter_filteredRow );
									// if only showing resulting child row, only include parent
									$row = $row.eq( 0 );
								}
								// cycle through each child row
								for ( indx = 0; indx < childRow.length; indx++ ) {
									data.$row = childRow.eq( indx );
									data.cacheArray = rowData.child[ indx ];
									data.rawArray = data.cacheArray;
									val = tsf.processRow( c, data, vars );
									// use OR comparison on child rows
									showRow = showRow || val;
									if ( !wo.filter_childWithSibs && val ) {
										childRow.eq( indx ).removeClass( wo.filter_filteredRow );
									}
								}
							}
							// keep parent row match even if no child matches... see #1020
							showRow = showRow || showParent;
						} else {
							showRow = val;
						}
						$row
							.toggleClass( wo.filter_filteredRow, !showRow )[0]
							.display = showRow ? '' : 'none';
					}
				}
				c.filteredRows += $rows.not( '.' + wo.filter_filteredRow ).length;
				c.totalRows += $rows.length;
				ts.processTbody( table, $tbody, false );
			}
			c.lastCombinedFilter = combinedFilters; // save last search
			// don't save 'filters' directly since it may have altered ( AnyMatch column searches )
			c.lastSearch = storedFilters;
			c.$table.data( 'lastSearch', storedFilters );
			if ( wo.filter_saveFilters && ts.storage ) {
				ts.storage( table, 'tablesorter-filters', tsf.processFilters( storedFilters, true ) );
			}
			if ( c.debug ) {
				console.log( 'Completed filter widget search' + ts.benchmark(time) );
			}
			if ( wo.filter_initialized ) {
				//c.$table.triggerHandler( 'filterBeforeEnd', c );
				//c.$table.triggerHandler( 'filterEnd', c );
			}
			setTimeout( function() {
				ts.applyWidget( c.table ); // make sure zebra widget is applied
			}, 0 );
		},
		getOptionSource: function( table, column, onlyAvail ) {
			table = $( table )[0];
			var c = table.config,
				wo = c.widgetOptions,
				arry = false,
				source = wo.filter_selectSource,
				last = c.$table.data( 'lastSearch' ) || [],
				fxn = typeof source === 'function' ? true : ts.getColumnData( table, source, column );

			if ( onlyAvail && last[column] !== '' ) {
				onlyAvail = false;
			}

			// filter select source option
			if ( fxn === true ) {
				// OVERALL source
				arry = source( table, column, onlyAvail );
			} else if ( fxn instanceof $ || ( $.type( fxn ) === 'string' && fxn.indexOf( '</option>' ) >= 0 ) ) {
				// selectSource is a jQuery object or string of options
				return fxn;
			} else if ( $.isArray( fxn ) ) {
				arry = fxn;
			} else if ( $.type( source ) === 'object' && fxn ) {
				// custom select source function for a SPECIFIC COLUMN
				arry = fxn( table, column, onlyAvail );
			}
			if ( arry === false ) {
				// fall back to original method
				arry = tsf.getOptions( table, column, onlyAvail );
			}

			return tsf.processOptions( table, column, arry );

		},
		processOptions: function( table, column, arry ) {
			if ( !$.isArray( arry ) ) {
				return false;
			}
			table = $( table )[0];
			var cts, txt, indx, len, parsedTxt, str,
				c = table.config,
				validColumn = typeof column !== 'undefined' && column !== null && column >= 0 && column < c.columns,
				direction = validColumn ? c.$headerIndexed[ column ].hasClass( 'filter-select-sort-desc' ) : false,
				parsed = [];
			// get unique elements and sort the list
			// if $.tablesorter.sortText exists ( not in the original tablesorter ),
			// then natural sort the list otherwise use a basic sort
			arry = $.grep( arry, function( value, indx ) {
				if ( value.text ) {
					return true;
				}
				return $.inArray( value, arry ) === indx;
			});
			if ( validColumn && c.$headerIndexed[ column ].hasClass( 'filter-select-nosort' ) ) {
				// unsorted select options
				return arry;
			} else {
				len = arry.length;
				// parse select option values
				for ( indx = 0; indx < len; indx++ ) {
					txt = arry[ indx ];
					// check for object
					str = txt.text ? txt.text : txt;
					// sortNatural breaks if you don't pass it strings
					parsedTxt = ( validColumn && c.parsers && c.parsers.length &&
						c.parsers[ column ].format( str, table, [], column ) || str ).toString();
					parsedTxt = c.widgetOptions.filter_ignoreCase ? parsedTxt.toLowerCase() : parsedTxt;
					// parse array data using set column parser; this DOES NOT pass the original
					// table cell to the parser format function
					if ( txt.text ) {
						txt.parsed = parsedTxt;
						parsed[ parsed.length ] = txt;
					} else {
						parsed[ parsed.length ] = {
							text : txt,
							// check parser length - fixes #934
							parsed : parsedTxt
						};
					}
				}
				// sort parsed select options
				cts = c.textSorter || '';
				parsed.sort( function( a, b ) {
					var x = direction ? b.parsed : a.parsed,
						y = direction ? a.parsed : b.parsed;
					if ( validColumn && typeof cts === 'function' ) {
						// custom OVERALL text sorter
						return cts( x, y, true, column, table );
					} else if ( validColumn && typeof cts === 'object' && cts.hasOwnProperty( column ) ) {
						// custom text sorter for a SPECIFIC COLUMN
						return cts[column]( x, y, true, column, table );
					} else if ( ts.sortNatural ) {
						// fall back to natural sort
						return ts.sortNatural( x, y );
					}
					// using an older version! do a basic sort
					return true;
				});
				// rebuild arry from sorted parsed data
				arry = [];
				len = parsed.length;
				for ( indx = 0; indx < len; indx++ ) {
					arry[ arry.length ] = parsed[indx];
				}
				return arry;
			}
		},
		getOptions: function( table, column, onlyAvail ) {
			table = $( table )[0];
			var rowIndex, tbodyIndex, len, row, cache, indx, child, childLen,
				c = table.config,
				wo = c.widgetOptions,
				arry = [];
			for ( tbodyIndex = 0; tbodyIndex < c.$tbodies.length; tbodyIndex++ ) {
				cache = c.cache[tbodyIndex];
				len = c.cache[tbodyIndex].normalized.length;
				// loop through the rows
				for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {
					// get cached row from cache.row ( old ) or row data object
					// ( new; last item in normalized array )
					row = cache.row ?
						cache.row[ rowIndex ] :
						cache.normalized[ rowIndex ][ c.columns ].$row[0];
					// check if has class filtered
					if ( onlyAvail && row.className.match( wo.filter_filteredRow ) ) {
						continue;
					}
					// get non-normalized cell content
					if ( wo.filter_useParsedData ||
						c.parsers[column].parsed ||
						c.$headerIndexed[column].hasClass( 'filter-parsed' ) ) {
						arry[ arry.length ] = '' + cache.normalized[ rowIndex ][ column ];
						// child row parsed data
						if ( wo.filter_childRows && wo.filter_childByColumn ) {
							childLen = cache.normalized[ rowIndex ][ c.columns ].$row.length - 1;
							for ( indx = 0; indx < childLen; indx++ ) {
								arry[ arry.length ] = '' + cache.normalized[ rowIndex ][ c.columns ].child[ indx ][ column ];
							}
						}
					} else {
						// get raw cached data instead of content directly from the cells
						arry[ arry.length ] = cache.normalized[ rowIndex ][ c.columns ].raw[ column ];
						// child row unparsed data
						if ( wo.filter_childRows && wo.filter_childByColumn ) {
							childLen = cache.normalized[ rowIndex ][ c.columns ].$row.length;
							for ( indx = 1; indx < childLen; indx++ ) {
								child =  cache.normalized[ rowIndex ][ c.columns ].$row.eq( indx ).children().eq( column );
								arry[ arry.length ] = '' + ts.getElementText( c, child, column );
							}
						}
					}
				}
			}
			return arry;
		},
		buildSelect: function( table, column, arry, updating, onlyAvail ) {
			table = $( table )[0];
			column = parseInt( column, 10 );
			if ( !table.config.cache || $.isEmptyObject( table.config.cache ) ) {
				return;
			}

			var indx, val, txt, t, $filters, $filter, option,
				c = table.config,
				wo = c.widgetOptions,
				node = c.$headerIndexed[ column ],
				// t.data( 'placeholder' ) won't work in jQuery older than 1.4.3
				options = '<option value="">' +
					( node.data( 'placeholder' ) ||
						node.attr( 'data-placeholder' ) ||
						wo.filter_placeholder.select || ''
					) + '</option>',
				// Get curent filter value
				currentValue = c.$table
					.find( 'thead' )
					.find( 'select.' + tscss.filter + '[data-column="' + column + '"]' )
					.val();

			// nothing included in arry ( external source ), so get the options from
			// filter_selectSource or column data
			if ( typeof arry === 'undefined' || arry === '' ) {
				arry = tsf.getOptionSource( table, column, onlyAvail );
			}

			if ( $.isArray( arry ) ) {
				// build option list
				for ( indx = 0; indx < arry.length; indx++ ) {
					option = arry[ indx ];
					if ( option.text ) {
						// OBJECT!! add data-function-name in case the value is set in filter_functions
						option['data-function-name'] = typeof option.value === 'undefined' ? option.text : option.value;

						// support jQuery < v1.8, otherwise the below code could be shortened to
						// options += $( '<option>', option )[ 0 ].outerHTML;
						options += '<option';
						for ( val in option ) {
							if ( option.hasOwnProperty( val ) && val !== 'text' ) {
								options += ' ' + val + '="' + option[ val ] + '"';
							}
						}
						if ( !option.value ) {
							options += ' value="' + option.text + '"';
						}
						options += '>' + option.text + '</option>';
						// above code is needed in jQuery < v1.8

						// make sure we don't turn an object into a string (objects without a "text" property)
					} else if ( '' + option !== '[object Object]' ) {
						txt = option = ( '' + option ).replace( tsfRegex.quote, '&quot;' );
						val = txt;
						// allow including a symbol in the selectSource array
						// 'a-z|A through Z' so that 'a-z' becomes the option value
						// and 'A through Z' becomes the option text
						if ( txt.indexOf( wo.filter_selectSourceSeparator ) >= 0 ) {
							t = txt.split( wo.filter_selectSourceSeparator );
							val = t[0];
							txt = t[1];
						}
						// replace quotes - fixes #242 & ignore empty strings
						// see http://stackoverflow.com/q/14990971/145346
						options += option !== '' ?
							'<option ' +
								( val === txt ? '' : 'data-function-name="' + option + '" ' ) +
								'value="' + val + '">' + txt +
							'</option>' : '';
					}
				}
				// clear arry so it doesn't get appended twice
				arry = [];
			}

			// update all selects in the same column ( clone thead in sticky headers &
			// any external selects ) - fixes 473
			$filters = ( c.$filters ? c.$filters : c.$table.children( 'thead' ) )
				.find( '.' + tscss.filter );
			if ( wo.filter_$externalFilters ) {
				$filters = $filters && $filters.length ?
					$filters.add( wo.filter_$externalFilters ) :
					wo.filter_$externalFilters;
			}
			$filter = $filters.filter( 'select[data-column="' + column + '"]' );

			// make sure there is a select there!
			if ( $filter.length ) {
				$filter[ updating ? 'html' : 'append' ]( options );
				if ( !$.isArray( arry ) ) {
					// append options if arry is provided externally as a string or jQuery object
					// options ( default value ) was already added
					$filter.append( arry ).val( currentValue );
				}
				$filter.val( currentValue );
			}
		},
		buildDefault: function( table, updating ) {
			var columnIndex, $header, noSelect,
				c = table.config,
				wo = c.widgetOptions,
				columns = c.columns;
			// build default select dropdown
			for ( columnIndex = 0; columnIndex < columns; columnIndex++ ) {
				$header = c.$headerIndexed[columnIndex];
				noSelect = !( $header.hasClass( 'filter-false' ) || $header.hasClass( 'parser-false' ) );
				// look for the filter-select class; build/update it if found
				if ( ( $header.hasClass( 'filter-select' ) ||
					ts.getColumnData( table, wo.filter_functions, columnIndex ) === true ) && noSelect ) {
					tsf.buildSelect( table, columnIndex, '', updating, $header.hasClass( wo.filter_onlyAvail ) );
				}
			}
		}
	};

	// filter regex variable
	tsfRegex = tsf.regex;

	ts.getFilters = function( table, getRaw, setFilters, skipFirst ) {
		var i, $filters, $column, cols,
			filters = [],
			c = table ? $( table )[0].config : '',
			wo = c ? c.widgetOptions : '';
		if ( ( getRaw !== true && wo && !wo.filter_columnFilters ) ||
			// setFilters called, but last search is exactly the same as the current
			// fixes issue #733 & #903 where calling update causes the input values to reset
			( $.isArray(setFilters) && setFilters.join('') === c.lastCombinedFilter ) ) {
			return $( table ).data( 'lastSearch' );
		}
		if ( c ) {
			if ( c.$filters ) {
				$filters = c.$filters.find( '.' + tscss.filter );
			}
			if ( wo.filter_$externalFilters ) {
				$filters = $filters && $filters.length ?
					$filters.add( wo.filter_$externalFilters ) :
					wo.filter_$externalFilters;
			}
			if ( $filters && $filters.length ) {
				filters = setFilters || [];
				for ( i = 0; i < c.columns + 1; i++ ) {
					cols = ( i === c.columns ?
						// 'all' columns can now include a range or set of columms ( data-column='0-2,4,6-7' )
						wo.filter_anyColumnSelector + ',' + wo.filter_multipleColumnSelector :
						'[data-column="' + i + '"]' );
					$column = $filters.filter( cols );
					if ( $column.length ) {
						// move the latest search to the first slot in the array
						$column = tsf.getLatestSearch( $column );
						if ( $.isArray( setFilters ) ) {
							// skip first ( latest input ) to maintain cursor position while typing
							if ( skipFirst && $column.length > 1 ) {
								$column = $column.slice( 1 );
							}
							if ( i === c.columns ) {
								// prevent data-column='all' from filling data-column='0,1' ( etc )
								cols = $column.filter( wo.filter_anyColumnSelector );
								$column = cols.length ? cols : $column;
							}
							$column
								.val( setFilters[ i ] )
								// must include a namespace here; but not c.namespace + 'filter'?
								.trigger( 'change' + c.namespace );
						} else {
							filters[i] = $column.val() || '';
							// don't change the first... it will move the cursor
							if ( i === c.columns ) {
								// don't update range columns from 'all' setting
								$column
									.slice( 1 )
									.filter( '[data-column*="' + $column.attr( 'data-column' ) + '"]' )
									.val( filters[ i ] );
							} else {
								$column
									.slice( 1 )
									.val( filters[ i ] );
							}
						}
						// save any match input dynamically
						if ( i === c.columns && $column.length ) {
							wo.filter_$anyMatch = $column;
						}
					}
				}
			}
		}
		return filters;
	};

	ts.setFilters = function( table, filter, apply, skipFirst ) {
		var c = table ? $( table )[0].config : '',
			valid = ts.getFilters( table, true, filter, skipFirst );
		// default apply to "true"
		if ( typeof apply === 'undefined' ) {
			apply = true;
		}
		if ( c && apply ) {
			// ensure new set filters are applied, even if the search is the same
			c.lastCombinedFilter = null;
			c.lastSearch = [];
			tsf.searching( c.table, filter, skipFirst );
			c.$table.triggerHandler( 'filterFomatterUpdate' );
		}
		return valid.length !== 0;
	};

})( jQuery );

/*! Widget: stickyHeaders - updated 1/6/2017 (v2.28.4) *//*
 * Requires tablesorter v2.8+ and jQuery 1.4.3+
 * by Rob Garrison
 */
;(function ($, window) {
	'use strict';
	var ts = $.tablesorter || {};

	$.extend(ts.css, {
		sticky    : 'tablesorter-stickyHeader', // stickyHeader
		stickyVis : 'tablesorter-sticky-visible',
		stickyHide: 'tablesorter-sticky-hidden',
		stickyWrap: 'tablesorter-sticky-wrapper'
	});

	// Add a resize event to table headers
	ts.addHeaderResizeEvent = function(table, disable, settings) {
		table = $(table)[0]; // make sure we're using a dom element
		if ( !table.config ) { return; }
		var defaults = {
				timer : 250
			},
			options = $.extend({}, defaults, settings),
			c = table.config,
			wo = c.widgetOptions,
			checkSizes = function( triggerEvent ) {
				var index, headers, $header, sizes, width, height,
					len = c.$headers.length;
				wo.resize_flag = true;
				headers = [];
				for ( index = 0; index < len; index++ ) {
					$header = c.$headers.eq( index );
					sizes = $header.data( 'savedSizes' ) || [ 0, 0 ]; // fixes #394
					width = $header[0].offsetWidth;
					height = $header[0].offsetHeight;
					if ( width !== sizes[0] || height !== sizes[1] ) {
						$header.data( 'savedSizes', [ width, height ] );
						headers.push( $header[0] );
					}
				}
				if ( headers.length && triggerEvent !== false ) {
					c.$table.triggerHandler( 'resize', [ headers ] );
				}
				wo.resize_flag = false;
			};
		clearInterval(wo.resize_timer);
		if (disable) {
			wo.resize_flag = false;
			return false;
		}
		checkSizes( false );
		wo.resize_timer = setInterval(function() {
			if (wo.resize_flag) { return; }
			checkSizes();
		}, options.timer);
	};

	// Sticky headers based on this awesome article:
	// http://css-tricks.com/13465-persistent-headers/
	// and https://github.com/jmosbech/StickyTableHeaders by Jonas Mosbech
	// **************************
	ts.addWidget({
		id: 'stickyHeaders',
		priority: 54, // sticky widget must be initialized after the filter & before pager widget!
		options: {
			stickyHeaders : '',       // extra class name added to the sticky header row
			stickyHeaders_appendTo : null, // jQuery selector or object to phycially attach the sticky headers
			stickyHeaders_attachTo : null, // jQuery selector or object to attach scroll listener to (overridden by xScroll & yScroll settings)
			stickyHeaders_xScroll : null, // jQuery selector or object to monitor horizontal scroll position (defaults: xScroll > attachTo > window)
			stickyHeaders_yScroll : null, // jQuery selector or object to monitor vertical scroll position (defaults: yScroll > attachTo > window)
			stickyHeaders_offset : 0, // number or jquery selector targeting the position:fixed element
			stickyHeaders_filteredToTop: true, // scroll table top into view after filtering
			stickyHeaders_cloneId : '-sticky', // added to table ID, if it exists
			stickyHeaders_addResizeEvent : true, // trigger 'resize' event on headers
			stickyHeaders_includeCaption : true, // if false and a caption exist, it won't be included in the sticky header
			stickyHeaders_zIndex : 2 // The zIndex of the stickyHeaders, allows the user to adjust this to their needs
		},
		format: function(table, c, wo) {
			// filter widget doesn't initialize on an empty table. Fixes #449
			if ( c.$table.hasClass('hasStickyHeaders') || ($.inArray('filter', c.widgets) >= 0 && !c.$table.hasClass('hasFilters')) ) {
				return;
			}
			var index, len, $t,
				$table = c.$table,
				// add position: relative to attach element, hopefully it won't cause trouble.
				$attach = $(wo.stickyHeaders_attachTo),
				namespace = c.namespace + 'stickyheaders ',
				// element to watch for the scroll event
				$yScroll = $(wo.stickyHeaders_yScroll || wo.stickyHeaders_attachTo || window),
				$xScroll = $(wo.stickyHeaders_xScroll || wo.stickyHeaders_attachTo || window),
				$thead = $table.children('thead:first'),
				$header = $thead.children('tr').not('.sticky-false').children(),
				$tfoot = $table.children('tfoot'),
				$stickyOffset = isNaN(wo.stickyHeaders_offset) ? $(wo.stickyHeaders_offset) : '',
				stickyOffset = $stickyOffset.length ? $stickyOffset.height() || 0 : parseInt(wo.stickyHeaders_offset, 10) || 0,
				// is this table nested? If so, find parent sticky header wrapper (div, not table)
				$nestedSticky = $table.parent().closest('.' + ts.css.table).hasClass('hasStickyHeaders') ?
					$table.parent().closest('table.tablesorter')[0].config.widgetOptions.$sticky.parent() : [],
				nestedStickyTop = $nestedSticky.length ? $nestedSticky.height() : 0,
				// clone table, then wrap to make sticky header
				$stickyTable = wo.$sticky = $table.clone()
					.addClass('containsStickyHeaders ' + ts.css.sticky + ' ' + wo.stickyHeaders + ' ' + c.namespace.slice(1) + '_extra_table' )
					.wrap('<div class="' + ts.css.stickyWrap + '">'),
				$stickyWrap = $stickyTable.parent()
					.addClass(ts.css.stickyHide)
					.css({
						position   : $attach.length ? 'absolute' : 'fixed',
						padding    : parseInt( $stickyTable.parent().parent().css('padding-left'), 10 ),
						top        : stickyOffset + nestedStickyTop,
						left       : 0,
						visibility : 'hidden',
						zIndex     : wo.stickyHeaders_zIndex || 2
					}),
				$stickyThead = $stickyTable.children('thead:first'),
				$stickyCells,
				laststate = '',
				spacing = 0,
				setWidth = function($orig, $clone){
					var index, width, border, $cell, $this,
						$cells = $orig.filter(':visible'),
						len = $cells.length;
					for ( index = 0; index < len; index++ ) {
						$cell = $clone.filter(':visible').eq(index);
						$this = $cells.eq(index);
						// code from https://github.com/jmosbech/StickyTableHeaders
						if ($this.css('box-sizing') === 'border-box') {
							width = $this.outerWidth();
						} else {
							if ($cell.css('border-collapse') === 'collapse') {
								if (window.getComputedStyle) {
									width = parseFloat( window.getComputedStyle($this[0], null).width );
								} else {
									// ie8 only
									border = parseFloat( $this.css('border-width') );
									width = $this.outerWidth() - parseFloat( $this.css('padding-left') ) - parseFloat( $this.css('padding-right') ) - border;
								}
							} else {
								width = $this.width();
							}
						}
						$cell.css({
							'width': width,
							'min-width': width,
							'max-width': width
						});
					}
				},
				resizeHeader = function() {
					stickyOffset = $stickyOffset.length ? $stickyOffset.height() || 0 : parseInt(wo.stickyHeaders_offset, 10) || 0;
					spacing = 0;
					$stickyWrap.css({
						left : $attach.length ? parseInt($attach.css('padding-left'), 10) || 0 :
								$table.offset().left - parseInt($table.css('margin-left'), 10) - $xScroll.scrollLeft() - spacing,
						width: $table.outerWidth()
					});
					setWidth( $table, $stickyTable );
					setWidth( $header, $stickyCells );
				},
				scrollSticky = function( resizing ) {
					if (!$table.is(':visible')) { return; } // fixes #278
					// Detect nested tables - fixes #724
					nestedStickyTop = $nestedSticky.length ? $nestedSticky.offset().top - $yScroll.scrollTop() + $nestedSticky.height() : 0;
					var offset = $table.offset(),
						yWindow = $.isWindow( $yScroll[0] ), // $.isWindow needs jQuery 1.4.3
						xWindow = $.isWindow( $xScroll[0] ),
						attachTop = $attach.length ?
							( yWindow ? $yScroll.scrollTop() : $yScroll.offset().top ) :
							$yScroll.scrollTop(),
						captionHeight = wo.stickyHeaders_includeCaption ? 0 : $table.children( 'caption' ).height() || 0,
						scrollTop = attachTop + stickyOffset + nestedStickyTop - captionHeight,
						tableHeight = $table.height() - ($stickyWrap.height() + ($tfoot.height() || 0)) - captionHeight,
						isVisible = ( scrollTop > offset.top ) && ( scrollTop < offset.top + tableHeight ) ? 'visible' : 'hidden',
						cssSettings = { visibility : isVisible };
					if ($attach.length) {
						cssSettings.top = yWindow ? scrollTop - $attach.offset().top : $attach.scrollTop();
					}
					if (xWindow) {
						// adjust when scrolling horizontally - fixes issue #143
						cssSettings.left = $table.offset().left - parseInt($table.css('margin-left'), 10) - $xScroll.scrollLeft() - spacing;
					}
					if ($nestedSticky.length) {
						cssSettings.top = ( cssSettings.top || 0 ) + stickyOffset + nestedStickyTop;
					}
					$stickyWrap
						.removeClass( ts.css.stickyVis + ' ' + ts.css.stickyHide )
						.addClass( isVisible === 'visible' ? ts.css.stickyVis : ts.css.stickyHide )
						.css(cssSettings);
					if (isVisible !== laststate || resizing) {
						// make sure the column widths match
						resizeHeader();
						laststate = isVisible;
					}
				};
			// only add a position relative if a position isn't already defined
			if ($attach.length && !$attach.css('position')) {
				$attach.css('position', 'relative');
			}
			// fix clone ID, if it exists - fixes #271
			if ($stickyTable.attr('id')) { $stickyTable[0].id += wo.stickyHeaders_cloneId; }
			// clear out cloned table, except for sticky header
			// include caption & filter row (fixes #126 & #249) - don't remove cells to get correct cell indexing
			$stickyTable.find('thead:gt(0), tr.sticky-false').hide();
			$stickyTable.find('tbody, tfoot').remove();
			$stickyTable.find('caption').toggle(wo.stickyHeaders_includeCaption);
			// issue #172 - find td/th in sticky header
			$stickyCells = $stickyThead.children().children();
			$stickyTable.css({ height:0, width:0, margin: 0 });
			// remove resizable block
			$stickyCells.find('.' + ts.css.resizer).remove();
			// update sticky header class names to match real header after sorting
			$table
				.addClass('hasStickyHeaders')
				.bind('pagerComplete' + namespace, function() {
					resizeHeader();
				});

			ts.bindEvents(table, $stickyThead.children().children('.' + ts.css.header));

			if (wo.stickyHeaders_appendTo) {
				$(wo.stickyHeaders_appendTo).append( $stickyWrap );
			} else {
				// add stickyheaders AFTER the table. If the table is selected by ID, the original one (first) will be returned.
				$table.after( $stickyWrap );
			}

			// onRenderHeader is defined, we need to do something about it (fixes #641)
			if (c.onRenderHeader) {
				$t = $stickyThead.children('tr').children();
				len = $t.length;
				for ( index = 0; index < len; index++ ) {
					// send second parameter
					c.onRenderHeader.apply( $t.eq( index ), [ index, c, $stickyTable ] );
				}
			}

			// make it sticky!
			$xScroll.add($yScroll)
				.unbind( ('scroll resize '.split(' ').join( namespace )).replace(/\s+/g, ' ') )
				.bind('scroll resize '.split(' ').join( namespace ), function( event ) {
					scrollSticky( event.type === 'resize' );
				});
			c.$table
				.unbind('stickyHeadersUpdate' + namespace)
				.bind('stickyHeadersUpdate' + namespace, function(){
					scrollSticky( true );
				});

			if (wo.stickyHeaders_addResizeEvent) {
				ts.addHeaderResizeEvent(table);
			}

			// look for filter widget
			if ($table.hasClass('hasFilters') && wo.filter_columnFilters) {
				// scroll table into view after filtering, if sticky header is active - #482
				$table.bind('filterEnd' + namespace, function() {
					// $(':focus') needs jQuery 1.6+
					var $td = $(document.activeElement).closest('td'),
						column = $td.parent().children().index($td);
					// only scroll if sticky header is active
					if ($stickyWrap.hasClass(ts.css.stickyVis) && wo.stickyHeaders_filteredToTop) {
						// scroll to original table (not sticky clone)
						window.scrollTo(0, $table.position().top);
						// give same input/select focus; check if c.$filters exists; fixes #594
						if (column >= 0 && c.$filters) {
							c.$filters.eq(column).find('a, select, input').filter(':visible').focus();
						}
					}
				});
				ts.filter.bindSearch( $table, $stickyCells.find('.' + ts.css.filter) );
				// support hideFilters
				if (wo.filter_hideFilters) {
					ts.filter.hideFilters(c, $stickyTable);
				}
			}

			// resize table (Firefox)
			if (wo.stickyHeaders_addResizeEvent) {
				$table.bind('resize' + c.namespace + 'stickyheaders', function() {
					resizeHeader();
				});
			}

			$table.triggerHandler('stickyHeadersInit');

		},
		remove: function(table, c, wo) {
			var namespace = c.namespace + 'stickyheaders ';
			c.$table
				.removeClass('hasStickyHeaders')
				.unbind( ('pagerComplete resize filterEnd stickyHeadersUpdate '.split(' ').join(namespace)).replace(/\s+/g, ' ') )
				.next('.' + ts.css.stickyWrap).remove();
			if (wo.$sticky && wo.$sticky.length) { wo.$sticky.remove(); } // remove cloned table
			$(window)
				.add(wo.stickyHeaders_xScroll)
				.add(wo.stickyHeaders_yScroll)
				.add(wo.stickyHeaders_attachTo)
				.unbind( ('scroll resize '.split(' ').join(namespace)).replace(/\s+/g, ' ') );
			ts.addHeaderResizeEvent(table, true);
		}
	});

})(jQuery, window);

/*! Widget: resizable - updated 12/15/2016 (v2.28.2) */
/*jshint browser:true, jquery:true, unused:false */
;(function ($, window) {
	'use strict';
	var ts = $.tablesorter || {};

	$.extend(ts.css, {
		resizableContainer : 'tablesorter-resizable-container',
		resizableHandle    : 'tablesorter-resizable-handle',
		resizableNoSelect  : 'tablesorter-disableSelection',
		resizableStorage   : 'tablesorter-resizable'
	});

	// Add extra scroller css
	$(function(){
		var s = '<style>' +
			'body.' + ts.css.resizableNoSelect + ' { -ms-user-select: none; -moz-user-select: -moz-none;' +
				'-khtml-user-select: none; -webkit-user-select: none; user-select: none; }' +
			'.' + ts.css.resizableContainer + ' { position: relative; height: 1px; }' +
			// make handle z-index > than stickyHeader z-index, so the handle stays above sticky header
			'.' + ts.css.resizableHandle + ' { position: absolute; display: inline-block; width: 8px;' +
				'top: 1px; cursor: ew-resize; z-index: 3; user-select: none; -moz-user-select: none; }' +
			'</style>';
		$('head').append(s);
	});

	ts.resizable = {
		init : function( c, wo ) {
			if ( c.$table.hasClass( 'hasResizable' ) ) { return; }
			c.$table.addClass( 'hasResizable' );

			var noResize, $header, column, storedSizes, tmp,
				$table = c.$table,
				$parent = $table.parent(),
				marginTop = parseInt( $table.css( 'margin-top' ), 10 ),

			// internal variables
			vars = wo.resizable_vars = {
				useStorage : ts.storage && wo.resizable !== false,
				$wrap : $parent,
				mouseXPosition : 0,
				$target : null,
				$next : null,
				overflow : $parent.css('overflow') === 'auto' ||
					$parent.css('overflow') === 'scroll' ||
					$parent.css('overflow-x') === 'auto' ||
					$parent.css('overflow-x') === 'scroll',
				storedSizes : []
			};

			// set default widths
			ts.resizableReset( c.table, true );

			// now get measurements!
			vars.tableWidth = $table.width();
			// attempt to autodetect
			vars.fullWidth = Math.abs( $parent.width() - vars.tableWidth ) < 20;

			/*
			// Hacky method to determine if table width is set to 'auto'
			// http://stackoverflow.com/a/20892048/145346
			if ( !vars.fullWidth ) {
				tmp = $table.width();
				$header = $table.wrap('<span>').parent(); // temp variable
				storedSizes = parseInt( $table.css( 'margin-left' ), 10 ) || 0;
				$table.css( 'margin-left', storedSizes + 50 );
				vars.tableWidth = $header.width() > tmp ? 'auto' : tmp;
				$table.css( 'margin-left', storedSizes ? storedSizes : '' );
				$header = null;
				$table.unwrap('<span>');
			}
			*/

			if ( vars.useStorage && vars.overflow ) {
				// save table width
				ts.storage( c.table, 'tablesorter-table-original-css-width', vars.tableWidth );
				tmp = ts.storage( c.table, 'tablesorter-table-resized-width' ) || 'auto';
				ts.resizable.setWidth( $table, tmp, true );
			}
			wo.resizable_vars.storedSizes = storedSizes = ( vars.useStorage ?
				ts.storage( c.table, ts.css.resizableStorage ) :
				[] ) || [];
			ts.resizable.setWidths( c, wo, storedSizes );
			ts.resizable.updateStoredSizes( c, wo );

			wo.$resizable_container = $( '<div class="' + ts.css.resizableContainer + '">' )
				.css({ top : marginTop })
				.insertBefore( $table );
			// add container
			for ( column = 0; column < c.columns; column++ ) {
				$header = c.$headerIndexed[ column ];
				tmp = ts.getColumnData( c.table, c.headers, column );
				noResize = ts.getData( $header, tmp, 'resizable' ) === 'false';
				if ( !noResize ) {
					$( '<div class="' + ts.css.resizableHandle + '">' )
						.appendTo( wo.$resizable_container )
						.attr({
							'data-column' : column,
							'unselectable' : 'on'
						})
						.data( 'header', $header )
						.bind( 'selectstart', false );
				}
			}
			ts.resizable.bindings( c, wo );
		},

		updateStoredSizes : function( c, wo ) {
			var column, $header,
				len = c.columns,
				vars = wo.resizable_vars;
			vars.storedSizes = [];
			for ( column = 0; column < len; column++ ) {
				$header = c.$headerIndexed[ column ];
				vars.storedSizes[ column ] = $header.is(':visible') ? $header.width() : 0;
			}
		},

		setWidth : function( $el, width, overflow ) {
			// overflow tables need min & max width set as well
			$el.css({
				'width' : width,
				'min-width' : overflow ? width : '',
				'max-width' : overflow ? width : ''
			});
		},

		setWidths : function( c, wo, storedSizes ) {
			var column, $temp,
				vars = wo.resizable_vars,
				$extra = $( c.namespace + '_extra_headers' ),
				$col = c.$table.children( 'colgroup' ).children( 'col' );
			storedSizes = storedSizes || vars.storedSizes || [];
			// process only if table ID or url match
			if ( storedSizes.length ) {
				for ( column = 0; column < c.columns; column++ ) {
					// set saved resizable widths
					ts.resizable.setWidth( c.$headerIndexed[ column ], storedSizes[ column ], vars.overflow );
					if ( $extra.length ) {
						// stickyHeaders needs to modify min & max width as well
						$temp = $extra.eq( column ).add( $col.eq( column ) );
						ts.resizable.setWidth( $temp, storedSizes[ column ], vars.overflow );
					}
				}
				$temp = $( c.namespace + '_extra_table' );
				if ( $temp.length && !ts.hasWidget( c.table, 'scroller' ) ) {
					ts.resizable.setWidth( $temp, c.$table.outerWidth(), vars.overflow );
				}
			}
		},

		setHandlePosition : function( c, wo ) {
			var startPosition,
				tableHeight = c.$table.height(),
				$handles = wo.$resizable_container.children(),
				handleCenter = Math.floor( $handles.width() / 2 );

			if ( ts.hasWidget( c.table, 'scroller' ) ) {
				tableHeight = 0;
				c.$table.closest( '.' + ts.css.scrollerWrap ).children().each(function(){
					var $this = $(this);
					// center table has a max-height set
					tableHeight += $this.filter('[style*="height"]').length ? $this.height() : $this.children('table').height();
				});
			}
			// subtract out table left position from resizable handles. Fixes #864
			startPosition = c.$table.position().left;
			$handles.each( function() {
				var $this = $(this),
					column = parseInt( $this.attr( 'data-column' ), 10 ),
					columns = c.columns - 1,
					$header = $this.data( 'header' );
				if ( !$header ) { return; } // see #859
				if ( !$header.is(':visible') ) {
					$this.hide();
				} else if ( column < columns || column === columns && wo.resizable_addLastColumn ) {
					$this.css({
						display: 'inline-block',
						height : tableHeight,
						left : $header.position().left - startPosition + $header.outerWidth() - handleCenter
					});
				}
			});
		},

		// prevent text selection while dragging resize bar
		toggleTextSelection : function( c, wo, toggle ) {
			var namespace = c.namespace + 'tsresize';
			wo.resizable_vars.disabled = toggle;
			$( 'body' ).toggleClass( ts.css.resizableNoSelect, toggle );
			if ( toggle ) {
				$( 'body' )
					.attr( 'unselectable', 'on' )
					.bind( 'selectstart' + namespace, false );
			} else {
				$( 'body' )
					.removeAttr( 'unselectable' )
					.unbind( 'selectstart' + namespace );
			}
		},

		bindings : function( c, wo ) {
			var namespace = c.namespace + 'tsresize';
			wo.$resizable_container.children().bind( 'mousedown', function( event ) {
				// save header cell and mouse position
				var column,
					vars = wo.resizable_vars,
					$extras = $( c.namespace + '_extra_headers' ),
					$header = $( event.target ).data( 'header' );

				column = parseInt( $header.attr( 'data-column' ), 10 );
				vars.$target = $header = $header.add( $extras.filter('[data-column="' + column + '"]') );
				vars.target = column;

				// if table is not as wide as it's parent, then resize the table
				vars.$next = event.shiftKey || wo.resizable_targetLast ?
					$header.parent().children().not( '.resizable-false' ).filter( ':last' ) :
					$header.nextAll( ':not(.resizable-false)' ).eq( 0 );

				column = parseInt( vars.$next.attr( 'data-column' ), 10 );
				vars.$next = vars.$next.add( $extras.filter('[data-column="' + column + '"]') );
				vars.next = column;

				vars.mouseXPosition = event.pageX;
				ts.resizable.updateStoredSizes( c, wo );
				ts.resizable.toggleTextSelection(c, wo, true );
			});

			$( document )
				.bind( 'mousemove' + namespace, function( event ) {
					var vars = wo.resizable_vars;
					// ignore mousemove if no mousedown
					if ( !vars.disabled || vars.mouseXPosition === 0 || !vars.$target ) { return; }
					if ( wo.resizable_throttle ) {
						clearTimeout( vars.timer );
						vars.timer = setTimeout( function() {
							ts.resizable.mouseMove( c, wo, event );
						}, isNaN( wo.resizable_throttle ) ? 5 : wo.resizable_throttle );
					} else {
						ts.resizable.mouseMove( c, wo, event );
					}
				})
				.bind( 'mouseup' + namespace, function() {
					if (!wo.resizable_vars.disabled) { return; }
					ts.resizable.toggleTextSelection( c, wo, false );
					ts.resizable.stopResize( c, wo );
					ts.resizable.setHandlePosition( c, wo );
				});

			// resizeEnd event triggered by scroller widget
			$( window ).bind( 'resize' + namespace + ' resizeEnd' + namespace, function() {
				ts.resizable.setHandlePosition( c, wo );
			});

			// right click to reset columns to default widths
			c.$table
				.bind( 'columnUpdate' + namespace + ' pagerComplete' + namespace, function() {
					ts.resizable.setHandlePosition( c, wo );
				})
				.find( 'thead:first' )
				.add( $( c.namespace + '_extra_table' ).find( 'thead:first' ) )
				.bind( 'contextmenu' + namespace, function() {
					// $.isEmptyObject() needs jQuery 1.4+; allow right click if already reset
					var allowClick = wo.resizable_vars.storedSizes.length === 0;
					ts.resizableReset( c.table );
					ts.resizable.setHandlePosition( c, wo );
					wo.resizable_vars.storedSizes = [];
					return allowClick;
				});

		},

		mouseMove : function( c, wo, event ) {
			if ( wo.resizable_vars.mouseXPosition === 0 || !wo.resizable_vars.$target ) { return; }
			// resize columns
			var column,
				total = 0,
				vars = wo.resizable_vars,
				$next = vars.$next,
				tar = vars.storedSizes[ vars.target ],
				leftEdge = event.pageX - vars.mouseXPosition;
			if ( vars.overflow ) {
				if ( tar + leftEdge > 0 ) {
					vars.storedSizes[ vars.target ] += leftEdge;
					ts.resizable.setWidth( vars.$target, vars.storedSizes[ vars.target ], true );
					// update the entire table width
					for ( column = 0; column < c.columns; column++ ) {
						total += vars.storedSizes[ column ];
					}
					ts.resizable.setWidth( c.$table.add( $( c.namespace + '_extra_table' ) ), total );
				}
				if ( !$next.length ) {
					// if expanding right-most column, scroll the wrapper
					vars.$wrap[0].scrollLeft = c.$table.width();
				}
			} else if ( vars.fullWidth ) {
				vars.storedSizes[ vars.target ] += leftEdge;
				vars.storedSizes[ vars.next ] -= leftEdge;
				ts.resizable.setWidths( c, wo );
			} else {
				vars.storedSizes[ vars.target ] += leftEdge;
				ts.resizable.setWidths( c, wo );
			}
			vars.mouseXPosition = event.pageX;
			// dynamically update sticky header widths
			c.$table.triggerHandler('stickyHeadersUpdate');
		},

		stopResize : function( c, wo ) {
			var vars = wo.resizable_vars;
			ts.resizable.updateStoredSizes( c, wo );
			if ( vars.useStorage ) {
				// save all column widths
				ts.storage( c.table, ts.css.resizableStorage, vars.storedSizes );
				ts.storage( c.table, 'tablesorter-table-resized-width', c.$table.width() );
			}
			vars.mouseXPosition = 0;
			vars.$target = vars.$next = null;
			// will update stickyHeaders, just in case, see #912
			c.$table.triggerHandler('stickyHeadersUpdate');
		}
	};

	// this widget saves the column widths if
	// $.tablesorter.storage function is included
	// **************************
	ts.addWidget({
		id: 'resizable',
		priority: 40,
		options: {
			resizable : true, // save column widths to storage
			resizable_addLastColumn : false,
			resizable_widths : [],
			resizable_throttle : false, // set to true (5ms) or any number 0-10 range
			resizable_targetLast : false,
			resizable_fullWidth : null
		},
		init: function(table, thisWidget, c, wo) {
			ts.resizable.init( c, wo );
		},
		format: function( table, c, wo ) {
			ts.resizable.setHandlePosition( c, wo );
		},
		remove: function( table, c, wo, refreshing ) {
			if (wo.$resizable_container) {
				var namespace = c.namespace + 'tsresize';
				c.$table.add( $( c.namespace + '_extra_table' ) )
					.removeClass('hasResizable')
					.children( 'thead' )
					.unbind( 'contextmenu' + namespace );

				wo.$resizable_container.remove();
				ts.resizable.toggleTextSelection( c, wo, false );
				ts.resizableReset( table, refreshing );
				$( document ).unbind( 'mousemove' + namespace + ' mouseup' + namespace );
			}
		}
	});

	ts.resizableReset = function( table, refreshing ) {
		$( table ).each(function(){
			var index, $t,
				c = this.config,
				wo = c && c.widgetOptions,
				vars = wo.resizable_vars;
			if ( table && c && c.$headerIndexed.length ) {
				// restore the initial table width
				if ( vars.overflow && vars.tableWidth ) {
					ts.resizable.setWidth( c.$table, vars.tableWidth, true );
					if ( vars.useStorage ) {
						ts.storage( table, 'tablesorter-table-resized-width', 'auto' );
					}
				}
				for ( index = 0; index < c.columns; index++ ) {
					$t = c.$headerIndexed[ index ];
					if ( wo.resizable_widths && wo.resizable_widths[ index ] ) {
						ts.resizable.setWidth( $t, wo.resizable_widths[ index ], vars.overflow );
					} else if ( !$t.hasClass( 'resizable-false' ) ) {
						// don't clear the width of any column that is not resizable
						ts.resizable.setWidth( $t, '', vars.overflow );
					}
				}

				// reset stickyHeader widths
				c.$table.triggerHandler( 'stickyHeadersUpdate' );
				if ( ts.storage && !refreshing ) {
					ts.storage( this, ts.css.resizableStorage, {} );
				}
			}
		});
	};

})( jQuery, window );

/*! Widget: saveSort - updated 10/31/2015 (v2.24.0) *//*
* Requires tablesorter v2.16+
* by Rob Garrison
*/
;(function ($) {
	'use strict';
	var ts = $.tablesorter || {};

	// this widget saves the last sort only if the
	// saveSort widget option is true AND the
	// $.tablesorter.storage function is included
	// **************************
	ts.addWidget({
		id: 'saveSort',
		priority: 20,
		options: {
			saveSort : true
		},
		init: function(table, thisWidget, c, wo) {
			// run widget format before all other widgets are applied to the table
			thisWidget.format(table, c, wo, true);
		},
		format: function(table, c, wo, init) {
			var stored, time,
				$table = c.$table,
				saveSort = wo.saveSort !== false, // make saveSort active/inactive; default to true
				sortList = { 'sortList' : c.sortList };
			if (c.debug) {
				time = new Date();
			}
			if ($table.hasClass('hasSaveSort')) {
				if (saveSort && table.hasInitialized && ts.storage) {
					ts.storage( table, 'tablesorter-savesort', sortList );
					if (c.debug) {
						console.log('saveSort widget: Saving last sort: ' + c.sortList + ts.benchmark(time));
					}
				}
			} else {
				// set table sort on initial run of the widget
				$table.addClass('hasSaveSort');
				sortList = '';
				// get data
				if (ts.storage) {
					stored = ts.storage( table, 'tablesorter-savesort' );
					sortList = (stored && stored.hasOwnProperty('sortList') && $.isArray(stored.sortList)) ? stored.sortList : '';
					if (c.debug) {
						console.log('saveSort: Last sort loaded: "' + sortList + '"' + ts.benchmark(time));
					}
					$table.bind('saveSortReset', function(event) {
						event.stopPropagation();
						ts.storage( table, 'tablesorter-savesort', '' );
					});
				}
				// init is true when widget init is run, this will run this widget before all other widgets have initialized
				// this method allows using this widget in the original tablesorter plugin; but then it will run all widgets twice.
				if (init && sortList && sortList.length > 0) {
					c.sortList = sortList;
				} else if (table.hasInitialized && sortList && sortList.length > 0) {
					// update sort change
					ts.sortOn( c, sortList );
				}
			}
		},
		remove: function(table, c) {
			c.$table.removeClass('hasSaveSort');
			// clear storage
			if (ts.storage) { ts.storage( table, 'tablesorter-savesort', '' ); }
		}
	});

})(jQuery);

return jQuery.tablesorter;
}));
/*...
 	jquery/tablesorter/jquery.tablesorter.widget-selectRow.js?v=2017.01
*/

$.tablesorter.addWidget({
    id: "selectRow",
    priority: 10,
    options: {
    },
    // format is called on init and when a sorting has finished
    format: function(table, c, wo) {
//    	$('input[type="checkbox"]', $(table)).click(function(e) {
//    		e.stopPropagation();
//    	});
//    	$('tbody tr', $(table)).click(function(e) {
//    		e.stopPropagation();
//    		var td = $('input[type="checkbox"]:first', $(this));
//    		td.prop('checked', td.prop('checked') ? false : true);
//    	});
    }
  });
/*...
 	jquery/tablesorter/widgets/widget-scroller.js?v=2017.01
*/
/*!
	Copyright (C) 2011 T. Connell & Associates, Inc.

	Dual-licensed under the MIT and GPL licenses

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
	FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	Resizable scroller widget for the jQuery tablesorter plugin

	Version 2.0 - modified by Rob Garrison (4/12/2013)
	Requires jQuery, v1.2.3 or higher
	Requires the tablesorter plugin, v2.0 or higher, available at http://mottie.github.com/tablesorter/docs/

	Usage:

		$(function() {

			$('table.tablesorter').tablesorter({
				widgets: ['zebra', 'scroller'],
				widgetOptions : {
					scroller_height       : 300,  // height of scroll window
					scroller_barWidth     : 17,   // scroll bar width
					scroller_jumpToHeader : true, // header snap to browser top when scrolling the tbody
					scroller_idPrefix     : 's_'  // cloned thead id prefix (random number added to end)
				}
			});

		});

	Website: www.tconnell.com
*/
/*jshint browser:true, jquery:true, unused:false */
;(function($){
"use strict";

$.fn.hasScrollBar = function(){
	return this.get(0).scrollHeight > this.height();
};

$.tablesorter.window_resize = function(){
	if (this.resize_timer) {
		clearTimeout(this.resize_timer); 
	}
	this.resize_timer = setTimeout(function(){
		$(this).trigger('resizeEnd');
	}, 250);
};

// Add extra scroller css
$(function(){
	var s = '<style>' +
		'.tablesorter-scroller-footer { margin-bottom: 15px; }' + 
		'.tablesorter-scroller table td, .tablesorter-scroller table th { padding: 0px margin: 0px; }' + 
		'.tablesorter-scroller-header table.tablesorter { margin-bottom: 0; }' +
		'.tablesorter-scroller-footer table.tablesorter { margin-bottom: 0; }' +
		'.tablesorter-scroller-table table.tablesorter { margin-top: 0; margin-bottom: 0px; } ' + 
		'.tablesorter-scroller-table table.tablesorter tfoot tr * {line-height:0;height:0;border:none;background-image:none;padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;overflow:hidden; } '  +
		'.tablesorter-scroller-table table.tablesorter thead tr.tablesorter-headerRow * {line-height:0;height:0;border:none;background-image:none;padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;overflow:hidden;} ' +
		'</style>';
	$(s).appendTo('body');
});

$.tablesorter.addWidget({
	id: 'scroller',
	priority: 60, // run after the filter widget
	options: {
		scroller_height : 450,
		scroller_barWidth : 17,
		scroller_jumpToHeader: true,
		scroller_idPrefix : 's_',
		scroller_displayFooter : false,
	},
	init: function(table, thisWidget, c, wo){
		var $win = $(window);
		//Setup window.resizeEnd event
		$win
			.bind('resize', $.tablesorter.window_resize)
			.bind('resizeEnd', function(e) {
				// init is run before format, so scroller_resizeWidth
				// won't be defined within the "c" or "wo" parameters
				if (typeof table.config.widgetOptions.scroller_resizeWidth === 'function') {
					//IE calls resize when you modify content, so we have to unbind the resize event
					//so we don't end up with an infinite loop. we can rebind after we're done.
					$win.unbind('resize', $.tablesorter.window_resize);
					table.config.widgetOptions.scroller_resizeWidth();
					$win.bind('resize', $.tablesorter.window_resize);
				}
			});
	},
	format: function(table, c, wo) {
		var h, $hdr, $foot, id, t, resize, $cells, $footCells,
			$win = $(window),
			$tbl = c.$table,
			flag = false,
			filterInputs = 'input, select';
		
		if (!c.isScrolling) {
			id = wo.scroller_id = wo.scroller_idPrefix + Math.floor(Math.random() * 101);

			$hdr = $('<table class="' + $tbl.attr('class') + '" cellpadding=0 cellspacing=0><thead>' + $tbl.find('thead:first').html() + '</thead></table>');

			$tbl
				.wrap('<div id="' + id + '" class="tablesorter-scroller" style="text-align:left;" />')
				.before($hdr)
				.find('.tablesorter-filter-row').addClass('hideme');
			

			$cells = $hdr
				.wrap('<div class="tablesorter-scroller-header" style="width:' + $tbl.width() + 'px;" />')
				.find('.' + c.cssHeader)
				.bind('mousedown', function(){
					this.onselectstart = function(){ return false; };
					return false;
				});

			// make scroller header sortable
			c.$headers.find('*')[ $.fn.addBack ? 'addBack': 'andSelf' ]().filter(c.selectorSort).each(function(i){
				var t = $(this);
				$cells.eq(i)
				// clicking on new header will trigger a sort
				.bind('mouseup', function(e){
					t.trigger(e, true); // external mouseup flag (click timer is ignored)
				})
				// prevent header text selection
				.bind('mousedown', function(){
					this.onselectstart = function(){ return false; };
					return false;
				});
			});

			// look for filter widget
			$tbl.bind('filterEnd', function(){
				if (flag) { return; }
				$cells.each(function(i){
					$(this).find(filterInputs).val( c.$filters.find(filterInputs).eq(i).val() );
				});
			});
			
			$hdr.find(filterInputs).bind('keyup search', function(e){
				// ignore arrow and meta keys; allow backspace
				if ((e.which < 32 && e.which !== 8) || (e.which >= 37 && e.which <=40)) { return; }
				flag = true;
				var $f = $(this), col = $f.attr('data-column');
				c.$filters.find(filterInputs).eq(col)
					.val( $f.val() )
					.trigger('search');
				setTimeout(function(){
					flag = false;
				}, wo.filter_searchDelay);
			});
			
			if (wo.scroller_displayFooter) {
				$foot = $('<table class="' + $tbl.prop('class') + '" cellpadding=0 cellspacing=0 style="margin-top:0px"><tfoot>' 
						+ $tbl.find('tfoot:first').html() 
						+ '</tfoot></table>');

				$foot.insertAfter($tbl.parent());
				
				$foot.wrap('<div class="tablesorter-scroller-footer" style="width:' + $tbl.width() + 'px;" />');
			}

			resize = function(){
				var d,
					//Hide other scrollers so we can resize
					$div = $('div.scroller[id != "' + id + '"]').hide();

				$tbl.find('thead').show();

				//Reset sizes so parent can resize.
				$hdr
					.width(0)
					.parent().width(0)
					.find('th,td').width(0);

				$foot
					.width(0)
					.parent().width(0)
					.find('th,td').width(0);
				
				$tbl
					.width(0)
					.find('thead').find('th,td').width(0);
				d = $tbl.parent();
				d.width(0);

				d.parent().trigger('resize');
				// Shrink a bit to accommodate scrollbar
				d.width( d.parent().innerWidth() - ( d.parent().hasScrollBar() ? wo.scroller_barWidth : 0 ) );

				$tbl.width( d.innerWidth() - ( d.hasScrollBar() ? wo.scroller_barWidth : 0 ) );
				$foot.width( d.innerWidth() - ( d.hasScrollBar() ? wo.scroller_barWidth : 0 ) );
				
				$hdr.width($tbl.innerWidth());
				$foot.width($tbl.innerWidth());

				$tbl.find('thead').find('th,td').filter(':visible').each(function(i, c){
					var $th = $(c),
					//Wrap in browser detect??
					w = parseInt( $th.css('min-width').replace('auto', '0').replace(/(px|em)/, ''), 10 );
					if ( $th.outerWidth() < w ) {
						$th.outerWidth(w);
					} else {
						w = $th.outerWidth();
					}
					$hdr.find('th,td').eq(i).outerWidth(w);
					$foot.find('th,td').eq(i).outerWidth(w);
				});

				$div.show();
				
			};

			//Expose to external calls
			wo.scroller_resizeWidth = resize;

			resize();

			
			h = wo.scroller_height || 400;
			t = $tbl.find('tbody').height();
			if (t !== 0 && h > t) { h = t + 10; }  // Table is less than h px
			
			$tbl
				.wrap('<div class="tablesorter-scroller-table" style="height:' + h + 'px;width:' + $tbl.width() + ';overflow-y:scroll;" />')
				.unbind('sortEnd.tsScroller')
				.bind('sortEnd.tsScroller', function(){
					c.$headers.each(function(i){
						var t = $cells.eq(i);
						t
							.attr('class', $(this).attr('class'))
							// remove processing icon
							.removeClass(c.cssProcessing);
						if (c.cssIcon) {
							t
								.find('.' + c.cssIcon)
								.attr('class', $(this).find('.' + c.cssIcon).attr('class'));
						}
					});
				});
			

			$tbl.find('thead').css('visibility', 'hidden');
			$tbl.find('tfoot').css('visibility', 'hidden');
			c.isScrolling = true;

			t = $tbl.parent().parent().height();
			// The header will always jump into view if scrolling the table body
			$tbl.parent().bind('scroll', function(){
				if (wo.scroller_jumpToHeader) {
					var pos = $win.scrollTop() - $hdr.offset().top;
					if ($(this).scrollTop() !== 0 && pos < t && pos > 0) {
						$win.scrollTop( $hdr.offset().top );
					}
				}
			});
		}

		//Sorting, so scroll to top
		$tbl.parent().animate({ scrollTop: 0 }, 'fast');
	},
	remove : function(table, c, wo){

	}
	});

})(jQuery);
/*...
 	jquery/datepick/jquery.datepick.js?v=2015.03
*/
/* http://keith-wood.name/datepick.html
   Date picker for jQuery v4.1.0.
   Written by Keith Wood (kbwood{at}iinet.com.au) February 2010.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
   Please attribute the author if you use it. */

(function($) { // Hide scope, no $ conflict

/* Datepicker manager. */
function Datepicker() {
	this._defaults = {
		pickerClass: '', // CSS class to add to this instance of the datepicker
		showOnFocus: true, // True for popup on focus, false for not
		showTrigger: null, // Element to be cloned for a trigger, null for none
		showAnim: 'show', // Name of jQuery animation for popup, '' for no animation
		showOptions: {}, // Options for enhanced animations
		showSpeed: 'normal', // Duration of display/closure
		popupContainer: null, // The element to which a popup calendar is added, null for body
		alignment: 'bottom', // Alignment of popup - with nominated corner of input:
			// 'top' or 'bottom' aligns depending on language direction,
			// 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
		fixedWeeks: false, // True to always show 6 weeks, false to only show as many as are needed
		firstDay: 0, // First day of the week, 0 = Sunday, 1 = Monday, ...
		calculateWeek: this.iso8601Week, // Calculate week of the year from a date, null for ISO8601
		monthsToShow: 1, // How many months to show, cols or [rows, cols]
		monthsOffset: 0, // How many months to offset the primary month by;
			// may be a function that takes the date and returns the offset
		monthsToStep: 1, // How many months to move when prev/next clicked
		monthsToJump: 12, // How many months to move when large prev/next clicked
		useMouseWheel: true, // True to use mousewheel if available, false to never use it
		changeMonth: true, // True to change month/year via drop-down, false for navigation only
		yearRange: 'c-10:c+10', // Range of years to show in drop-down: 'any' for direct text entry
			// or 'start:end', where start/end are '+-nn' for relative to today
			// or 'c+-nn' for relative to the currently selected date
			// or 'nnnn' for an absolute year
		shortYearCutoff: '+10', // Cutoff for two-digit year in the current century
		showOtherMonths: false, // True to show dates from other months, false to not show them
		selectOtherMonths: false, // True to allow selection of dates from other months too
		defaultDate: null, // Date to show if no other selected
		selectDefaultDate: false, // True to pre-select the default date if no other is chosen
		minDate: null, // The minimum selectable date
		maxDate: null, // The maximum selectable date
		dateFormat: 'mm/dd/yyyy', // Format for dates
		autoSize: false, // True to size the input field according to the date format
		rangeSelect: false, // Allows for selecting a date range on one date picker
		rangeSeparator: ' - ', // Text between two dates in a range
		multiSelect: 0, // Maximum number of selectable dates, zero for single select
		multiSeparator: ',', // Text between multiple dates
		onDate: null, // Callback as a date is added to the datepicker
		onShow: null, // Callback just before a datepicker is shown
		onChangeMonthYear: null, // Callback when a new month/year is selected
		onSelect: null, // Callback when a date is selected
		onClose: null, // Callback when a datepicker is closed
		altField: null, // Alternate field to update in synch with the datepicker
		altFormat: null, // Date format for alternate field, defaults to dateFormat
		constrainInput: true, // True to constrain typed input to dateFormat allowed characters
		commandsAsDateFormat: false, // True to apply formatDate to the command texts
		commands: this.commands // Command actions that may be added to a layout by name
	};
	this.regional = [];
	this.regional[''] = { // US/English
		monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		dateFormat: 'mm/dd/yyyy', // See options on formatDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		renderer: this.defaultRenderer, // The rendering templates
		prevText: '&lt;Prev', // Text for the previous month command
		prevStatus: 'Show the previous month', // Status text for the previous month command
		prevJumpText: '&lt;&lt;', // Text for the previous year command
		prevJumpStatus: 'Show the previous year', // Status text for the previous year command
		nextText: 'Next&gt;', // Text for the next month command
		nextStatus: 'Show the next month', // Status text for the next month command
		nextJumpText: '&gt;&gt;', // Text for the next year command
		nextJumpStatus: 'Show the next year', // Status text for the next year command
		currentText: 'Current', // Text for the current month command
		currentStatus: 'Show the current month', // Status text for the current month command
		todayText: 'Today', // Text for the today's month command
		todayStatus: 'Show today\'s month', // Status text for the today's month command
		clearText: 'Clear', // Text for the clear command
		clearStatus: 'Clear all the dates', // Status text for the clear command
		closeText: 'Close', // Text for the close command
		closeStatus: 'Close the datepicker', // Status text for the close command
		yearStatus: 'Change the year', // Status text for year selection
		monthStatus: 'Change the month', // Status text for month selection
		weekText: 'Wk', // Text for week of the year column header
		weekStatus: 'Week of the year', // Status text for week of the year column header
		dayStatus: 'Select DD, M d, yyyy', // Status text for selectable days
		defaultStatus: 'Select a date', // Status text shown by default
		isRTL: false // True if language is right-to-left
	};
	$.extend(this._defaults, this.regional['']);
	this._disabled = [];
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with datepicker. */
	markerClassName: 'hasDatepick',
	/* Name of the data property for instance settings. */
	propertyName: 'datepick',

	_popupClass: 'datepick-popup', // Marker for popup division
	_triggerClass: 'datepick-trigger', // Marker for trigger element
	_disableClass: 'datepick-disable', // Marker for disabled element
	_monthYearClass: 'datepick-month-year', // Marker for month/year inputs
	_curMonthClass: 'datepick-month-', // Marker for current month/year
	_anyYearClass: 'datepick-any-year', // Marker for year direct input
	_curDoWClass: 'datepick-dow-', // Marker for day of week

	commands: { // Command actions that may be added to a layout by name
		// name: { // The command name, use '{button:name}' or '{link:name}' in layouts
		//		text: '', // The field in the regional settings for the displayed text
		//		status: '', // The field in the regional settings for the status text
		//      // The keystroke to trigger the action
		//		keystroke: {keyCode: nn, ctrlKey: boolean, altKey: boolean, shiftKey: boolean},
		//		enabled: fn, // The function that indicates the command is enabled
		//		date: fn, // The function to get the date associated with this action
		//		action: fn} // The function that implements the action
		prev: {text: 'prevText', status: 'prevStatus', // Previous month
			keystroke: {keyCode: 33}, // Page up
			enabled: function(inst) {
				var minDate = inst.curMinDate();
				return (!minDate || plugin.add(plugin.day(
					plugin._applyMonthsOffset(plugin.add(plugin.newDate(inst.drawDate),
					1 - inst.options.monthsToStep, 'm'), inst), 1), -1, 'd').
					getTime() >= minDate.getTime()); },
			date: function(inst) {
				return plugin.day(plugin._applyMonthsOffset(plugin.add(
					plugin.newDate(inst.drawDate), -inst.options.monthsToStep, 'm'), inst), 1); },
			action: function(inst) {
				plugin._changeMonthPlugin(this, -inst.options.monthsToStep); }
		},
		prevJump: {text: 'prevJumpText', status: 'prevJumpStatus', // Previous year
			keystroke: {keyCode: 33, ctrlKey: true}, // Ctrl + Page up
			enabled: function(inst) {
				var minDate = inst.curMinDate();
				return (!minDate || plugin.add(plugin.day(
					plugin._applyMonthsOffset(plugin.add(plugin.newDate(inst.drawDate),
					1 - inst.options.monthsToJump, 'm'), inst), 1), -1, 'd').
					getTime() >= minDate.getTime()); },
			date: function(inst) {
				return plugin.day(plugin._applyMonthsOffset(plugin.add(
					plugin.newDate(inst.drawDate), -inst.options.monthsToJump, 'm'), inst), 1); },
			action: function(inst) {
				plugin._changeMonthPlugin(this, -inst.options.monthsToJump); }
		},
		next: {text: 'nextText', status: 'nextStatus', // Next month
			keystroke: {keyCode: 34}, // Page down
			enabled: function(inst) {
				var maxDate = inst.get('maxDate');
				return (!maxDate || plugin.day(plugin._applyMonthsOffset(plugin.add(
					plugin.newDate(inst.drawDate), inst.options.monthsToStep, 'm'), inst), 1).
					getTime() <= maxDate.getTime()); },
			date: function(inst) {
				return plugin.day(plugin._applyMonthsOffset(plugin.add(
					plugin.newDate(inst.drawDate), inst.options.monthsToStep, 'm'), inst), 1); },
			action: function(inst) {
				plugin._changeMonthPlugin(this, inst.options.monthsToStep); }
		},
		nextJump: {text: 'nextJumpText', status: 'nextJumpStatus', // Next year
			keystroke: {keyCode: 34, ctrlKey: true}, // Ctrl + Page down
			enabled: function(inst) {
				var maxDate = inst.get('maxDate');
				return (!maxDate || plugin.day(plugin._applyMonthsOffset(plugin.add(
					plugin.newDate(inst.drawDate), inst.options.monthsToJump, 'm'), inst), 1).
					getTime() <= maxDate.getTime()); },
			date: function(inst) {
				return plugin.day(plugin._applyMonthsOffset(plugin.add(
					plugin.newDate(inst.drawDate), inst.options.monthsToJump, 'm'), inst), 1); },
			action: function(inst) {
				plugin._changeMonthPlugin(this, inst.options.monthsToJump); }
		},
		current: {text: 'currentText', status: 'currentStatus', // Current month
			keystroke: {keyCode: 36, ctrlKey: true}, // Ctrl + Home
			enabled: function(inst) {
				var minDate = inst.curMinDate();
				var maxDate = inst.get('maxDate');
				var curDate = inst.selectedDates[0] || plugin.today();
				return (!minDate || curDate.getTime() >= minDate.getTime()) &&
					(!maxDate || curDate.getTime() <= maxDate.getTime()); },
			date: function(inst) {
				return inst.selectedDates[0] || plugin.today(); },
			action: function(inst) {
				var curDate = inst.selectedDates[0] || plugin.today();
				plugin._showMonthPlugin(this, curDate.getFullYear(), curDate.getMonth() + 1); }
		},
		today: {text: 'todayText', status: 'todayStatus', // Today's month
			keystroke: {keyCode: 36, ctrlKey: true}, // Ctrl + Home
			enabled: function(inst) {
				var minDate = inst.curMinDate();
				var maxDate = inst.get('maxDate');
				return (!minDate || plugin.today().getTime() >= minDate.getTime()) &&
					(!maxDate || plugin.today().getTime() <= maxDate.getTime()); },
			date: function(inst) { return plugin.today(); },
			action: function(inst) { plugin._showMonthPlugin(this); }
		},
		clear: {text: 'clearText', status: 'clearStatus', // Clear the datepicker
			keystroke: {keyCode: 35, ctrlKey: true}, // Ctrl + End
			enabled: function(inst) { return true; },
			date: function(inst) { return null; },
			action: function(inst) { plugin._clearPlugin(this); }
		},
		close: {text: 'closeText', status: 'closeStatus', // Close the datepicker
			keystroke: {keyCode: 27}, // Escape
			enabled: function(inst) { return true; },
			date: function(inst) { return null; },
			action: function(inst) { plugin._hidePlugin(this); }
		},
		prevWeek: {text: 'prevWeekText', status: 'prevWeekStatus', // Previous week
			keystroke: {keyCode: 38, ctrlKey: true}, // Ctrl + Up
			enabled: function(inst) {
				var minDate = inst.curMinDate();
				return (!minDate || plugin.add(plugin.newDate(inst.drawDate), -7, 'd').
					getTime() >= minDate.getTime()); },
			date: function(inst) { return plugin.add(plugin.newDate(inst.drawDate), -7, 'd'); },
			action: function(inst) { plugin._changeDayPlugin(this, -7); }
		},
		prevDay: {text: 'prevDayText', status: 'prevDayStatus', // Previous day
			keystroke: {keyCode: 37, ctrlKey: true}, // Ctrl + Left
			enabled: function(inst) {
				var minDate = inst.curMinDate();
				return (!minDate || plugin.add(plugin.newDate(inst.drawDate), -1, 'd').
					getTime() >= minDate.getTime()); },
			date: function(inst) { return plugin.add(plugin.newDate(inst.drawDate), -1, 'd'); },
			action: function(inst) { plugin._changeDayPlugin(this, -1); }
		},
		nextDay: {text: 'nextDayText', status: 'nextDayStatus', // Next day
			keystroke: {keyCode: 39, ctrlKey: true}, // Ctrl + Right
			enabled: function(inst) {
				var maxDate = inst.get('maxDate');
				return (!maxDate || plugin.add(plugin.newDate(inst.drawDate), 1, 'd').
					getTime() <= maxDate.getTime()); },
			date: function(inst) { return plugin.add(plugin.newDate(inst.drawDate), 1, 'd'); },
			action: function(inst) { plugin._changeDayPlugin(this, 1); }
		},
		nextWeek: {text: 'nextWeekText', status: 'nextWeekStatus', // Next week
			keystroke: {keyCode: 40, ctrlKey: true}, // Ctrl + Down
			enabled: function(inst) {
				var maxDate = inst.get('maxDate');
				return (!maxDate || plugin.add(plugin.newDate(inst.drawDate), 7, 'd').
					getTime() <= maxDate.getTime()); },
			date: function(inst) { return plugin.add(plugin.newDate(inst.drawDate), 7, 'd'); },
			action: function(inst) { plugin._changeDayPlugin(this, 7); }
		}
	},

	/* Default template for generating a datepicker. */
	defaultRenderer: {
		// Anywhere: '{l10n:name}' to insert localised value for name,
		// '{link:name}' to insert a link trigger for command name,
		// '{button:name}' to insert a button trigger for command name,
		// '{popup:start}...{popup:end}' to mark a section for inclusion in a popup datepicker only,
		// '{inline:start}...{inline:end}' to mark a section for inclusion in an inline datepicker only
		// Overall structure: '{months}' to insert calendar months
		picker: '<div class="datepick">' +
		'<div class="datepick-nav">{link:prev}{link:today}{link:next}</div>{months}' +
		'{popup:start}<div class="datepick-ctrl">{link:clear}{link:close}</div>{popup:end}' +
		'<div class="datepick-clear-fix"></div></div>',
		// One row of months: '{months}' to insert calendar months
		monthRow: '<div class="datepick-month-row">{months}</div>',
		// A single month: '{monthHeader:dateFormat}' to insert the month header -
		// dateFormat is optional and defaults to 'MM yyyy',
		// '{weekHeader}' to insert a week header, '{weeks}' to insert the month's weeks
		month: '<div class="datepick-month"><div class="datepick-month-header">{monthHeader}</div>' +
		'<table><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table></div>',
		// A week header: '{days}' to insert individual day names
		weekHeader: '<tr>{days}</tr>',
		// Individual day header: '{day}' to insert day name
		dayHeader: '<th>{day}</th>',
		// One week of the month: '{days}' to insert the week's days, '{weekOfYear}' to insert week of year
		week: '<tr>{days}</tr>',
		// An individual day: '{day}' to insert day value
		day: '<td>{day}</td>',
		// jQuery selector, relative to picker, for a single month
		monthSelector: '.datepick-month',
		// jQuery selector, relative to picker, for individual days
		daySelector: 'td',
		// Class for right-to-left (RTL) languages
		rtlClass: 'datepick-rtl',
		// Class for multi-month datepickers
		multiClass: 'datepick-multi',
		// Class for selectable dates
		defaultClass: '',
		// Class for currently selected dates
		selectedClass: 'datepick-selected',
		// Class for highlighted dates
		highlightedClass: 'datepick-highlight',
		// Class for today
		todayClass: 'datepick-today',
		// Class for days from other months
		otherMonthClass: 'datepick-other-month',
		// Class for days on weekends
		weekendClass: 'datepick-weekend',
		// Class prefix for commands
		commandClass: 'datepick-cmd',
		// Extra class(es) for commands that are buttons
		commandButtonClass: '',
		// Extra class(es) for commands that are links
		commandLinkClass: '',
		// Class for disabled commands
		disabledClass: 'datepick-disabled'
	},

	/* Override the default settings for all datepicker instances.
	   @param  options  (object) the new settings to use as defaults
	   @return  (Datepicker) this object */
	setDefaults: function(options) {
		$.extend(this._defaults, options || {});
		return this;
	},

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
	_msPerDay: 24 * 60 * 60 * 1000,

	ATOM: 'yyyy-mm-dd', // RFC 3339/ISO 8601
	COOKIE: 'D, dd M yyyy',
	FULL: 'DD, MM d, yyyy',
	ISO_8601: 'yyyy-mm-dd',
	JULIAN: 'J',
	RFC_822: 'D, d M yy',
	RFC_850: 'DD, dd-M-yy',
	RFC_1036: 'D, d M yy',
	RFC_1123: 'D, d M yyyy',
	RFC_2822: 'D, d M yyyy',
	RSS: 'D, d M yy', // RFC 822
	TICKS: '!',
	TIMESTAMP: '@',
	W3C: 'yyyy-mm-dd', // ISO 8601

	/* Format a date object into a string value.
	   The format can be combinations of the following:
	   d  - day of month (no leading zero)
	   dd - day of month (two digit)
	   o  - day of year (no leading zeros)
	   oo - day of year (three digit)
	   D  - day name short
	   DD - day name long
	   w  - week of year (no leading zero)
	   ww - week of year (two digit)
	   m  - month of year (no leading zero)
	   mm - month of year (two digit)
	   M  - month name short
	   MM - month name long
	   yy - year (two digit)
	   yyyy - year (four digit)
	   @  - Unix timestamp (s since 01/01/1970)
	   !  - Windows ticks (100ns since 01/01/0001)
	   '...' - literal text
	   '' - single quote
	   @param  format    (string) the desired format of the date (optional, default datepicker format)
	   @param  date      (Date) the date value to format
	   @param  settings  (object) attributes include:
	                     dayNamesShort    (string[]) abbreviated names of the days from Sunday (optional)
	                     dayNames         (string[]) names of the days from Sunday (optional)
	                     monthNamesShort  (string[]) abbreviated names of the months (optional)
	                     monthNames       (string[]) names of the months (optional)
						 calculateWeek    (function) function that determines week of the year (optional)
	   @return  (string) the date in the above format */
	formatDate: function(format, date, settings) {
		if (typeof format != 'string') {
			settings = date;
			date = format;
			format = '';
		}
		if (!date) {
			return '';
		}
		format = format || this._defaults.dateFormat;
		settings = settings || {};
		var dayNamesShort = settings.dayNamesShort || this._defaults.dayNamesShort;
		var dayNames = settings.dayNames || this._defaults.dayNames;
		var monthNamesShort = settings.monthNamesShort || this._defaults.monthNamesShort;
		var monthNames = settings.monthNames || this._defaults.monthNames;
		var calculateWeek = settings.calculateWeek || this._defaults.calculateWeek;
		// Check whether a format character is doubled
		var doubled = function(match, step) {
			var matches = 1;
			while (iFormat + matches < format.length && format.charAt(iFormat + matches) == match) {
				matches++;
			}
			iFormat += matches - 1;
			return Math.floor(matches / (step || 1)) > 1;
		};
		// Format a number, with leading zeroes if necessary
		var formatNumber = function(match, value, len, step) {
			var num = '' + value;
			if (doubled(match, step)) {
				while (num.length < len) {
					num = '0' + num;
				}
			}
			return num;
		};
		// Format a name, short or long as requested
		var formatName = function(match, value, shortNames, longNames) {
			return (doubled(match) ? longNames[value] : shortNames[value]);
		};
		var output = '';
		var literal = false;
		for (var iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) == "'" && !doubled("'")) {
					literal = false;
				}
				else {
					output += format.charAt(iFormat);
				}
			}
			else {
				switch (format.charAt(iFormat)) {
					case 'd': output += formatNumber('d', date.getDate(), 2); break;
					case 'D': output += formatName('D', date.getDay(),
						dayNamesShort, dayNames); break;
					case 'o': output += formatNumber('o', this.dayOfYear(date), 3); break;
					case 'w': output += formatNumber('w', calculateWeek(date), 2); break;
					case 'm': output += formatNumber('m', date.getMonth() + 1, 2); break;
					case 'M': output += formatName('M', date.getMonth(),
						monthNamesShort, monthNames); break;
					case 'y':
						output += (doubled('y', 2) ? date.getFullYear() :
							(date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100);
						break;
					case '@': output += Math.floor(date.getTime() / 1000); break;
					case '!': output += date.getTime() * 10000 + this._ticksTo1970; break;
					case "'":
						if (doubled("'")) {
							output += "'";
						}
						else {
							literal = true;
						}
						break;
					default:
						output += format.charAt(iFormat);
				}
			}
		}
		return output;
	},

	/* Parse a string value into a date object.
	   See formatDate for the possible formats, plus:
	   * - ignore rest of string
	   @param  format    (string) the expected format of the date ('' for default datepicker format)
	   @param  value     (string) the date in the above format
	   @param  settings  (object) attributes include:
	                     shortYearCutoff  (number) the cutoff year for determining the century (optional)
	                     dayNamesShort    (string[]) abbreviated names of the days from Sunday (optional)
	                     dayNames         (string[]) names of the days from Sunday (optional)
	                     monthNamesShort  (string[]) abbreviated names of the months (optional)
	                     monthNames       (string[]) names of the months (optional)
	   @return  (Date) the extracted date value or null if value is blank
	   @throws  errors if the format and/or value are missing,
	            if the value doesn't match the format,
	            or if the date is invalid */
	parseDate: function(format, value, settings) {
		if (value == null) {
			throw 'Invalid arguments';
		}
		value = (typeof value == 'object' ? value.toString() : value + '');
		if (value == '') {
			return null;
		}
		format = format || this._defaults.dateFormat;
		settings = settings || {};
		var shortYearCutoff = settings.shortYearCutoff || this._defaults.shortYearCutoff;
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
			this.today().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		var dayNamesShort = settings.dayNamesShort || this._defaults.dayNamesShort;
		var dayNames = settings.dayNames || this._defaults.dayNames;
		var monthNamesShort = settings.monthNamesShort || this._defaults.monthNamesShort;
		var monthNames = settings.monthNames || this._defaults.monthNames;
		var year = -1;
		var month = -1;
		var day = -1;
		var doy = -1;
		var shortYear = false;
		var literal = false;
		// Check whether a format character is doubled
		var doubled = function(match, step) {
			var matches = 1;
			while (iFormat + matches < format.length && format.charAt(iFormat + matches) == match) {
				matches++;
			}
			iFormat += matches - 1;
			return Math.floor(matches / (step || 1)) > 1;
		};
		// Extract a number from the string value
		var getNumber = function(match, step) {
			var isDoubled = doubled(match, step);
			var size = [2, 3, isDoubled ? 4 : 2, 11, 20]['oy@!'.indexOf(match) + 1];
			var digits = new RegExp('^-?\\d{1,' + size + '}');
			var num = value.substring(iValue).match(digits);
			if (!num) {
				throw 'Missing number at position {0}'.replace(/\{0\}/, iValue);
			}
			iValue += num[0].length;
			return parseInt(num[0], 10);
		};
		// Extract a name from the string value and convert to an index
		var getName = function(match, shortNames, longNames, step) {
			var names = (doubled(match, step) ? longNames : shortNames);
			for (var i = 0; i < names.length; i++) {
				if (value.substr(iValue, names[i].length).toLowerCase() == names[i].toLowerCase()) {
					iValue += names[i].length;
					return i + 1;
				}
			}
			throw 'Unknown name at position {0}'.replace(/\{0\}/, iValue);
		};
		// Confirm that a literal character matches the string value
		var checkLiteral = function() {
			if (value.charAt(iValue) != format.charAt(iFormat)) {
				throw 'Unexpected literal at position {0}'.replace(/\{0\}/, iValue);
			}
			iValue++;
		};
		var iValue = 0;
		for (var iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) == "'" && !doubled("'")) {
					literal = false;
				}
				else {
					checkLiteral();
				}
			}
			else {
				switch (format.charAt(iFormat)) {
					case 'd': day = getNumber('d'); break;
					case 'D': getName('D', dayNamesShort, dayNames); break;
					case 'o': doy = getNumber('o'); break;
					case 'w': getNumber('w'); break;
					case 'm': month = getNumber('m'); break;
					case 'M': month = getName('M', monthNamesShort, monthNames); break;
					case 'y':
						var iSave = iFormat;
						shortYear = !doubled('y', 2);
						iFormat = iSave;
						year = getNumber('y', 2);
						break;
					case '@':
						var date = this._normaliseDate(new Date(getNumber('@') * 1000));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case '!':
						var date = this._normaliseDate(
							new Date((getNumber('!') - this._ticksTo1970) / 10000));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case '*': iValue = value.length; break;
					case "'":
						if (doubled("'")) {
							checkLiteral();
						}
						else {
							literal = true;
						}
						break;
					default: checkLiteral();
				}
			}
		}
		if (iValue < value.length) {
			throw 'Additional text found at end';
		}
		if (year == -1) {
			year = this.today().getFullYear();
		}
		else if (year < 100 && shortYear) {
			year += (shortYearCutoff == -1 ? 1900 : this.today().getFullYear() -
				this.today().getFullYear() % 100 - (year <= shortYearCutoff ? 0 : 100));
		}
		if (doy > -1) {
			month = 1;
			day = doy;
			for (var dim = this.daysInMonth(year, month); day > dim;
					dim = this.daysInMonth(year, month)) {
				month++;
				day -= dim;
			}
		}
		var date = this.newDate(year, month, day);
		if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
			throw 'Invalid date';
		}
		return date;
	},

	/* A date may be specified as an exact value or a relative one.
	   @param  dateSpec     (Date or number or string) the date as an object or string
	                        in the given format or an offset - numeric days from today,
	                        or string amounts and periods, e.g. '+1m +2w'
	   @param  defaultDate  (Date) the date to use if no other supplied, may be null
	   @param  currentDate  (Date) the current date as a possible basis for relative dates,
	                        if null today is used (optional)
	   @param  dateFormat   (string) the expected date format - see formatDate above (optional)
	   @param  settings     (object) attributes include:
	                        shortYearCutoff  (number) the cutoff year for determining the century (optional)
	                        dayNamesShort    (string[7]) abbreviated names of the days from Sunday (optional)
	                        dayNames         (string[7]) names of the days from Sunday (optional)
	                        monthNamesShort  (string[12]) abbreviated names of the months (optional)
	                        monthNames       (string[12]) names of the months (optional)
	   @return  (Date) the decoded date */
	determineDate: function(dateSpec, defaultDate, currentDate, dateFormat, settings) {
		if (currentDate && typeof currentDate != 'object') {
			settings = dateFormat;
			dateFormat = currentDate;
			currentDate = null;
		}
		if (typeof dateFormat != 'string') {
			settings = dateFormat;
			dateFormat = '';
		}
		var offsetString = function(offset) {
			try {
				return plugin.parseDate(dateFormat, offset, settings);
			}
			catch (e) {
				// Ignore
			}
			offset = offset.toLowerCase();
			var date = (offset.match(/^c/) && currentDate ? plugin.newDate(currentDate) : null) ||
				plugin.today();
			var pattern = /([+-]?[0-9]+)\s*(d|w|m|y)?/g;
			var matches = null;
			while (matches = pattern.exec(offset)) {
				date = plugin.add(date, parseInt(matches[1], 10), matches[2] || 'd');
			}
			return date;
		};
		defaultDate = (defaultDate ? plugin.newDate(defaultDate) : null);
		dateSpec = (dateSpec == null ? defaultDate :
			(typeof dateSpec == 'string' ? offsetString(dateSpec) : (typeof dateSpec == 'number' ?
			(isNaN(dateSpec) || dateSpec == Infinity || dateSpec == -Infinity ? defaultDate :
			plugin.add(plugin.today(), dateSpec, 'd')) : plugin.newDate(dateSpec))));
		return dateSpec;
	},

	/* Find the number of days in a given month.
	   @param  year   (Date) the date to get days for or
	                  (number) the full year
	   @param  month  (number) the month (1 to 12)
	   @return  (number) the number of days in this month */
	daysInMonth: function(year, month) {
		month = (year.getFullYear ? year.getMonth() + 1 : month);
		year = (year.getFullYear ? year.getFullYear() : year);
		return this.newDate(year, month + 1, 0).getDate();
	},

	/* Calculate the day of the year for a date.
	   @param  year   (Date) the date to get the day-of-year for or
	                  (number) the full year
	   @param  month  (number) the month (1-12)
	   @param  day    (number) the day
	   @return  (number) the day of the year */
	dayOfYear: function(year, month, day) {
		var date = (year.getFullYear ? year : this.newDate(year, month, day));
		var newYear = this.newDate(date.getFullYear(), 1, 1);
		return Math.floor((date.getTime() - newYear.getTime()) / this._msPerDay) + 1;
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	   @param  year   (Date) the date to get the week for or
	                  (number) the full year
	   @param  month  (number) the month (1-12)
	   @param  day    (number) the day
	   @return  (number) the number of the week within the year that contains this date */
	iso8601Week: function(year, month, day) {
		var checkDate = (year.getFullYear ?
			new Date(year.getTime()) : this.newDate(year, month, day));
		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
		var time = checkDate.getTime();
		checkDate.setMonth(0, 1); // Compare with Jan 1
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Return today's date.
	   @return  (Date) today */
	today: function() {
		return this._normaliseDate(new Date());
	},

	/* Return a new date.
	   @param  year   (Date) the date to clone or
					  (number) the year
	   @param  month  (number) the month (1-12)
	   @param  day    (number) the day
	   @return  (Date) the date */
	newDate: function(year, month, day) {
		return (!year ? null : (year.getFullYear ? this._normaliseDate(new Date(year.getTime())) :
			new Date(year, month - 1, day, 12)));
	},

	/* Standardise a date into a common format - time portion is 12 noon.
	   @param  date  (Date) the date to standardise
	   @return  (Date) the normalised date */
	_normaliseDate: function(date) {
		if (date) {
			date.setHours(12, 0, 0, 0);
		}
		return date;
	},

	/* Set the year for a date.
	   @param  date  (Date) the original date
	   @param  year  (number) the new year
	   @return  the updated date */
	year: function(date, year) {
		date.setFullYear(year);
		return this._normaliseDate(date);
	},

	/* Set the month for a date.
	   @param  date   (Date) the original date
	   @param  month  (number) the new month (1-12)
	   @return  the updated date */
	month: function(date, month) {
		date.setMonth(month - 1);
		return this._normaliseDate(date);
	},

	/* Set the day for a date.
	   @param  date  (Date) the original date
	   @param  day   (number) the new day of the month
	   @return  the updated date */
	day: function(date, day) {
		date.setDate(day);
		return this._normaliseDate(date);
	},

	/* Add a number of periods to a date.
	   @param  date    (Date) the original date
	   @param  amount  (number) the number of periods
	   @param  period  (string) the type of period d/w/m/y
	   @return  the updated date */
	add: function(date, amount, period) {
		if (period == 'd' || period == 'w') {
			this._normaliseDate(date);
			date.setDate(date.getDate() + amount * (period == 'w' ? 7 : 1));
		}
		else {
			var year = date.getFullYear() + (period == 'y' ? amount : 0);
			var month = date.getMonth() + (period == 'm' ? amount : 0);
			date.setTime(plugin.newDate(year, month + 1,
				Math.min(date.getDate(), this.daysInMonth(year, month + 1))).getTime());
		}
		return date;
	},

	/* Apply the months offset value to a date.
	   @param  date  (Date) the original date
	   @param  inst  (object) the current instance settings
	   @return  (Date) the updated date */
	_applyMonthsOffset: function(date, inst) {
		var monthsOffset = inst.options.monthsOffset;
		if ($.isFunction(monthsOffset)) {
			monthsOffset = monthsOffset.apply(inst.target[0], [date]);
		}
		return plugin.add(date, -monthsOffset, 'm');
	},

	/* Attach the datepicker functionality to an input field.
	   @param  target   (element) the control to affect
	   @param  options  (object) the custom options for this instance */
	_attachPlugin: function(target, options) {
		target = $(target);
		if (target.hasClass(this.markerClassName)) {
			return;
		}
		var inlineSettings = ($.fn.metadata ? target.metadata() : {});
		var inst = {options: $.extend({}, this._defaults, inlineSettings, options),
			target: target, selectedDates: [], drawDate: null, pickingRange: false,
			inline: ($.inArray(target[0].nodeName.toLowerCase(), ['div', 'span']) > -1),
			get: function(name) { // Get a setting value, computing if necessary
				if ($.inArray(name, ['defaultDate', 'minDate', 'maxDate']) > -1) { // Decode date settings
					return plugin.determineDate(this.options[name], null,
						this.selectedDates[0], this.options.dateFormat, inst.getConfig());
				}
				return this.options[name];
			},
			curMinDate: function() {
				return (this.pickingRange ? this.selectedDates[0] : this.get('minDate'));
			},
			getConfig: function() {
				return {dayNamesShort: this.options.dayNamesShort, dayNames: this.options.dayNames,
					monthNamesShort: this.options.monthNamesShort, monthNames: this.options.monthNames,
					calculateWeek: this.options.calculateWeek,
					shortYearCutoff: this.options.shortYearCutoff};
			}
		};
		target.addClass(this.markerClassName).data(this.propertyName, inst);
		if (inst.inline) {
			inst.drawDate = plugin._checkMinMax(plugin.newDate(inst.selectedDates[0] ||
				inst.get('defaultDate') || plugin.today()), inst);
			inst.prevDate = plugin.newDate(inst.drawDate);
			this._update(target[0]);
			if ($.fn.mousewheel) {
				target.mousewheel(this._doMouseWheel);
			}
		}
		else {
			this._attachments(target, inst);
			target.bind('keydown.' + this.propertyName, this._keyDown).
				bind('keypress.' + this.propertyName, this._keyPress).
				bind('keyup.' + this.propertyName, this._keyUp);
			if (target.attr('disabled')) {
				this._disablePlugin(target[0]);
			}
		}
	},

	/* Retrieve or reconfigure the settings for a control.
	   @param  target   (element) the control to affect
	   @param  options  (object) the new options for this instance or
	                    (string) an individual property name
	   @param  value    (any) the individual property value (omit if options
	                    is an object or to retrieve the value of a setting)
	   @return  (any) if retrieving a value */
	_optionPlugin: function(target, options, value) {
		target = $(target);
		var inst = target.data(this.propertyName);
		if (!options || (typeof options == 'string' && value == null)) { // Get option
			var name = options;
			options = (inst || {}).options;
			return (options && name ? options[name] : options);
		}

		if (!target.hasClass(this.markerClassName)) {
			return;
		}
		options = options || {};
		if (typeof options == 'string') {
			var name = options;
			options = {};
			options[name] = value;
		}
		if (options.calendar && options.calendar != inst.options.calendar) {
			var discardDate = function(name) {
				return (typeof inst.options[name] == 'object' ? null : inst.options[name]);
			};
			options = $.extend({defaultDate: discardDate('defaultDate'),
				minDate: discardDate('minDate'), maxDate: discardDate('maxDate')}, options);
			inst.selectedDates = [];
			inst.drawDate = null;
		}
		var dates = inst.selectedDates;
		$.extend(inst.options, options);
		this._setDatePlugin(target[0], dates, null, false, true);
		inst.pickingRange = false;
		inst.drawDate = plugin.newDate(this._checkMinMax(
			(inst.options.defaultDate ? inst.get('defaultDate') : inst.drawDate) ||
			inst.get('defaultDate') || plugin.today(), inst));
		if (!inst.inline) {
			this._attachments(target, inst);
		}
		if (inst.inline || inst.div) {
			this._update(target[0]);
		}
	},

	/* Attach events and trigger, if necessary.
	   @param  target  (jQuery) the control to affect
	   @param  inst    (object) the current instance settings */
	_attachments: function(target, inst) {
		target.unbind('focus.' + this.propertyName);
		if (inst.options.showOnFocus) {
			target.bind('focus.' + this.propertyName, this._showPlugin);
		}
		if (inst.trigger) {
			inst.trigger.remove();
		}
		var trigger = inst.options.showTrigger;
		inst.trigger = (!trigger ? $([]) :
			$(trigger).clone().removeAttr('id').addClass(this._triggerClass)
				[inst.options.isRTL ? 'insertBefore' : 'insertAfter'](target).
				click(function() {
					if (!plugin._isDisabledPlugin(target[0])) {
						plugin[plugin.curInst == inst ? '_hidePlugin' : '_showPlugin'](target[0]);
					}
				}));
		this._autoSize(target, inst);
		var dates = this._extractDates(inst, target.val());
		if (dates) {
			this._setDatePlugin(target[0], dates, null, true);
		}
		var defaultDate = inst.get('defaultDate');
		if (inst.options.selectDefaultDate && defaultDate && inst.selectedDates.length == 0) {
			this._setDatePlugin(target[0], plugin.newDate(defaultDate || plugin.today()));
		}
	},

	/* Apply the maximum length for the date format.
	   @param  inst  (object) the current instance settings */
	_autoSize: function(target, inst) {
		if (inst.options.autoSize && !inst.inline) {
			var date = plugin.newDate(2009, 10, 20); // Ensure double digits
			var dateFormat = inst.options.dateFormat;
			if (dateFormat.match(/[DM]/)) {
				var findMax = function(names) {
					var max = 0;
					var maxI = 0;
					for (var i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(inst.options[dateFormat.match(/MM/) ? // Longest month
					'monthNames' : 'monthNamesShort']));
				date.setDate(findMax(inst.options[dateFormat.match(/DD/) ? // Longest day
					'dayNames' : 'dayNamesShort']) + 20 - date.getDay());
			}
			inst.target.attr('size', plugin.formatDate(dateFormat, date, inst.getConfig()).length);
		}
	},

	/* Remove the datepicker functionality from a control.
	   @param  target  (element) the control to affect */
	_destroyPlugin: function(target) {
		target = $(target);
		if (!target.hasClass(this.markerClassName)) {
			return;
		}
		var inst = target.data(this.propertyName);
		if (inst.trigger) {
			inst.trigger.remove();
		}
		target.removeClass(this.markerClassName).removeData(this.propertyName).
			empty().unbind('.' + this.propertyName);
		if (inst.inline && $.fn.mousewheel) {
			target.unmousewheel();
		}
		if (!inst.inline && inst.options.autoSize) {
			target.removeAttr('size');
		}
	},

	/* Apply multiple event functions.
	   Usage, for example: onShow: multipleEvents(fn1, fn2, ...)
	   @param  fns  (function...) the functions to apply */
	multipleEvents: function(fns) {
		var funcs = arguments;
		return function(args) {
			for (var i = 0; i < funcs.length; i++) {
				funcs[i].apply(this, arguments);
			}
		};
	},

	/* Enable the control.
	   @param  target  (element) the control to affect */
	_enablePlugin: function(target) {
		target = $(target);
		if (!target.hasClass(this.markerClassName)) {
			return;
		}
		var inst = target.data(this.propertyName);
		if (inst.inline) {
			target.children('.' + this._disableClass).remove().end().
				find('button,select').removeAttr('disabled').end().
				find('a').attr('href', 'javascript:void(0)');
		}
		else {
			target.prop('disabled', false);
			inst.trigger.filter('button.' + this._triggerClass).
				removeAttr('disabled').end().
				filter('img.' + this._triggerClass).
				css({opacity: '1.0', cursor: ''});
		}
		this._disabled = $.map(this._disabled,
			function(value) { return (value == target[0] ? null : value); }); // Delete entry
	},

	/* Disable the control.
	   @param  target  (element) the control to affect */
	_disablePlugin: function(target) {
		target = $(target);
		if (!target.hasClass(this.markerClassName)) {
			return;
		}
		var inst = target.data(this.propertyName);
		if (inst.inline) {
			var inline = target.children(':last');
			var offset = inline.offset();
			var relOffset = {left: 0, top: 0};
			inline.parents().each(function() {
				if ($(this).css('position') == 'relative') {
					relOffset = $(this).offset();
					return false;
				}
			});
			var zIndex = target.css('zIndex');
			zIndex = (zIndex == 'auto' ? 0 : parseInt(zIndex, 10)) + 1;
			target.prepend('<div class="' + this._disableClass + '" style="' +
				'width: ' + inline.outerWidth() + 'px; height: ' + inline.outerHeight() +
				'px; left: ' + (offset.left - relOffset.left) + 'px; top: ' +
				(offset.top - relOffset.top) + 'px; z-index: ' + zIndex + '"></div>').
				find('button,select').attr('disabled', 'disabled').end().
				find('a').removeAttr('href');
		}
		else {
			target.prop('disabled', true);
			inst.trigger.filter('button.' + this._triggerClass).
				attr('disabled', 'disabled').end().
				filter('img.' + this._triggerClass).
				css({opacity: '0.5', cursor: 'default'});
		}
		this._disabled = $.map(this._disabled,
			function(value) { return (value == target[0] ? null : value); }); // Delete entry
		this._disabled.push(target[0]);
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	   @param  target  (element) the control to examine
	   @return  (boolean) true if disabled, false if enabled */
	_isDisabledPlugin: function(target) {
		return (target && $.inArray(target, this._disabled) > -1);
	},

	/* Show a popup datepicker.
	   @param  target  (event) a focus event or
	                   (element) the control to use */
	_showPlugin: function(target) {
		target = $(target.target || target);
		var inst = target.data(plugin.propertyName);
		if (plugin.curInst == inst) {
			return;
		}
		if (plugin.curInst) {
			plugin._hidePlugin(plugin.curInst, true);
		}
		if (inst) {
			// Retrieve existing date(s)
			inst.lastVal = null;
			inst.selectedDates = plugin._extractDates(inst, target.val());
			inst.pickingRange = false;
			inst.drawDate = plugin._checkMinMax(plugin.newDate(inst.selectedDates[0] ||
				inst.get('defaultDate') || plugin.today()), inst);
			inst.prevDate = plugin.newDate(inst.drawDate);
			plugin.curInst = inst;
			// Generate content
			plugin._update(target[0], true);
			// Adjust position before showing
			var offset = plugin._checkOffset(inst);
			inst.div.css({left: offset.left, top: offset.top});
			$(inst.div).maxZIndex();
			// And display
			var showAnim = inst.options.showAnim;
			var showSpeed = inst.options.showSpeed;
			showSpeed = (showSpeed == 'normal' && $.ui && $.ui.version >= '1.8' ?
				'_default' : showSpeed);
			if ($.effects && $.effects[showAnim]) {
				var data = inst.div.data(); // Update old effects data
				for (var key in data) {
					if (key.match(/^ec\.storage\./)) {
						data[key] = inst._mainDiv.css(key.replace(/ec\.storage\./, ''));
					}
				}
				inst.div.data(data).show(showAnim, inst.options.showOptions, showSpeed);
			}
			else {
				inst.div[showAnim || 'show']((showAnim ? showSpeed : ''));
			}
		}
	},

	/* Extract possible dates from a string.
	   @param  inst  (object) the current instance settings
	   @param  text  (string) the text to extract from
	   @return  (CDate[]) the extracted dates */
	_extractDates: function(inst, datesText) {
		if (datesText == inst.lastVal) {
			return;
		}
		inst.lastVal = datesText;
		datesText = datesText.split(inst.options.multiSelect ? inst.options.multiSeparator :
			(inst.options.rangeSelect ? inst.options.rangeSeparator : '\x00'));
		var dates = [];
		for (var i = 0; i < datesText.length; i++) {
			try {
				var date = plugin.parseDate(inst.options.dateFormat, datesText[i], inst.getConfig());
				if (date) {
					var found = false;
					for (var j = 0; j < dates.length; j++) {
						if (dates[j].getTime() == date.getTime()) {
							found = true;
							break;
						}
					}
					if (!found) {
						dates.push(date);
					}
				}
			}
			catch (e) {
				// Ignore
			}
		}
		dates.splice(inst.options.multiSelect || (inst.options.rangeSelect ? 2 : 1), dates.length);
		if (inst.options.rangeSelect && dates.length == 1) {
			dates[1] = dates[0];
		}
		return dates;
	},

	/* Update the datepicker display.
	   @param  target  (event) a focus event or
	                   (element) the control to use
	   @param  hidden  (boolean) true to initially hide the datepicker */
	_update: function(target, hidden) {
		target = $(target.target || target);
		var inst = target.data(plugin.propertyName);
		if (inst) {
			if (inst.inline || plugin.curInst == inst) {
				if ($.isFunction(inst.options.onChangeMonthYear) && (!inst.prevDate ||
						inst.prevDate.getFullYear() != inst.drawDate.getFullYear() ||
						inst.prevDate.getMonth() != inst.drawDate.getMonth())) {
					inst.options.onChangeMonthYear.apply(target[0],
						[inst.drawDate.getFullYear(), inst.drawDate.getMonth() + 1]);
				}
			}
			if (inst.inline) {
				target.html(this._generateContent(target[0], inst));
			}
			else if (plugin.curInst == inst) {
				if (!inst.div) {
					inst.div = $('<div></div>').addClass(this._popupClass).
						css({display: (hidden ? 'none' : 'static'), position: 'absolute',
							left: target.offset().left,
							top: target.offset().top + target.outerHeight()}).
						appendTo($(inst.options.popupContainer || 'body'));
					if ($.fn.mousewheel) {
						inst.div.mousewheel(this._doMouseWheel);
					}
				}
				inst.div.html(this._generateContent(target[0], inst));
				target.focus();
			}
		}
	},

	/* Update the input field and any alternate field with the current dates.
	   @param  target  (element) the control to use
	   @param  keyUp   (boolean, internal) true if coming from keyUp processing */
	_updateInput: function(target, keyUp) {
		var inst = $.data(target, this.propertyName);
		if (inst) {
			var value = '';
			var altValue = '';
			var sep = (inst.options.multiSelect ? inst.options.multiSeparator :
				inst.options.rangeSeparator);
			var altFormat = inst.options.altFormat || inst.options.dateFormat;
			for (var i = 0; i < inst.selectedDates.length; i++) {
				value += (keyUp ? '' : (i > 0 ? sep : '') + plugin.formatDate(
					inst.options.dateFormat, inst.selectedDates[i], inst.getConfig()));
				altValue += (i > 0 ? sep : '') + plugin.formatDate(
					altFormat, inst.selectedDates[i], inst.getConfig());
			}
			if (!inst.inline && !keyUp) {
				$(target).val(value);
			}
			$(inst.options.altField).val(altValue);
			if ($.isFunction(inst.options.onSelect) && !keyUp && !inst.inSelect) {
				inst.inSelect = true; // Prevent endless loops
				inst.options.onSelect.apply(target, [inst.selectedDates]);
				inst.inSelect = false;
			}
		}
	},

	/* Retrieve the size of left and top borders for an element.
	   @param  elem  (jQuery) the element of interest
	   @return  (number[2]) the left and top borders */
	_getBorders: function(elem) {
		var convert = function(value) {
			return {thin: 1, medium: 3, thick: 5}[value] || value;
		};
		return [parseFloat(convert(elem.css('border-left-width'))),
			parseFloat(convert(elem.css('border-top-width')))];
	},

	/* Check positioning to remain on the screen.
	   @param  inst  (object) the current instance settings
	   @return  (object) the updated offset for the datepicker */
	_checkOffset: function(inst) {
		var base = (inst.target.is(':hidden') && inst.trigger ? inst.trigger : inst.target);
		var offset = base.offset();
		var browserWidth = $(window).width();
		var browserHeight = $(window).height();
		if (browserWidth == 0) {
			return offset;
		}
		var isFixed = false;
		$(inst.target).parents().each(function() {
			isFixed |= $(this).css('position') == 'fixed';
			return !isFixed;
		});
		var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
		var above = offset.top - (isFixed ? scrollY : 0) - inst.div.outerHeight();
		var below = offset.top - (isFixed ? scrollY : 0) + base.outerHeight();
		var alignL = offset.left - (isFixed ? scrollX : 0);
		var alignR = offset.left - (isFixed ? scrollX : 0) + base.outerWidth() - inst.div.outerWidth();
		var tooWide = (offset.left - scrollX + inst.div.outerWidth()) > browserWidth;
		var tooHigh = (offset.top - scrollY + inst.target.outerHeight() +
			inst.div.outerHeight()) > browserHeight;
		inst.div.css('position', isFixed ? 'fixed' : 'absolute');
		var alignment = inst.options.alignment;
		if (alignment == 'topLeft') {
			offset = {left: alignL, top: above};
		}
		else if (alignment == 'topRight') {
			offset = {left: alignR, top: above};
		}
		else if (alignment == 'bottomLeft') {
			offset = {left: alignL, top: below};
		}
		else if (alignment == 'bottomRight') {
			offset = {left: alignR, top: below};
		}
		else if (alignment == 'top') {
			offset = {left: (inst.options.isRTL || tooWide ? alignR : alignL), top: above};
		}
		else { // bottom
			offset = {left: (inst.options.isRTL || tooWide ? alignR : alignL),
				top: (tooHigh ? above : below)};
		}
		offset.left = Math.max((isFixed ? 0 : scrollX), offset.left);
		offset.top = Math.max((isFixed ? 0 : scrollY), offset.top);
		return offset;
	},

	/* Close date picker if clicked elsewhere.
	   @param  event  (MouseEvent) the mouse click to check */
	_checkExternalClick: function(event) {
		if (!plugin.curInst) {
			return;
		}
		var target = $(event.target);
		if (!target.parents().addBack().hasClass(plugin._popupClass) &&
				!target.hasClass(plugin.markerClassName) &&
				!target.parents().addBack().hasClass(plugin._triggerClass)) {
			plugin._hidePlugin(plugin.curInst);
		}
	},

	/* Hide a popup datepicker.
	   @param  target     (element) the control to use or
	                      (object) the current instance settings
	   @param  immediate  (boolean) true to close immediately without animation */
	_hidePlugin: function(target, immediate) {
		if (!target) {
			return;
		}
		var inst = $.data(target, this.propertyName) || target;
		if (inst && inst == plugin.curInst) {
			var showAnim = (immediate ? '' : inst.options.showAnim);
			var showSpeed = inst.options.showSpeed;
			showSpeed = (showSpeed == 'normal' && $.ui && $.ui.version >= '1.8' ?
				'_default' : showSpeed);
			var postProcess = function() {
				if (!inst.div) {
					return;
				}
				inst.div.remove();
				inst.div = null;
				plugin.curInst = null;
				if ($.isFunction(inst.options.onClose)) {
					inst.options.onClose.apply(target, [inst.selectedDates]);
				}
			};
			inst.div.stop();
			if ($.effects && $.effects[showAnim]) {
				inst.div.hide(showAnim, inst.options.showOptions, showSpeed, postProcess);
			}
			else {
				var hideAnim = (showAnim == 'slideDown' ? 'slideUp' :
					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'));
				inst.div[hideAnim]((showAnim ? showSpeed : ''), postProcess);
			}
			if (!showAnim) {
				postProcess();
			}
		}
	},

	/* Handle keystrokes in the datepicker.
	   @param  event  (KeyEvent) the keystroke
	   @return  (boolean) true if not handled, false if handled */
	_keyDown: function(event) {
		var target = event.target;
		var inst = $.data(target, plugin.propertyName);
		var handled = false;
		if (inst.div) {
			if (event.keyCode == 9) { // Tab - close
				plugin._hidePlugin(target);
			}
			else if (event.keyCode == 13) { // Enter - select
				plugin._selectDatePlugin(target,
					$('a.' + inst.options.renderer.highlightedClass, inst.div)[0]);
				handled = true;
			}
			else { // Command keystrokes
				var commands = inst.options.commands;
				for (var name in commands) {
					var command = commands[name];
					if (command.keystroke.keyCode == event.keyCode &&
							!!command.keystroke.ctrlKey == !!(event.ctrlKey || event.metaKey) &&
							!!command.keystroke.altKey == event.altKey &&
							!!command.keystroke.shiftKey == event.shiftKey) {
						plugin._performActionPlugin(target, name);
						handled = true;
						break;
					}
				}
			}
		}
		else { // Show on 'current' keystroke
			var command = inst.options.commands.current;
			if (command.keystroke.keyCode == event.keyCode &&
					!!command.keystroke.ctrlKey == !!(event.ctrlKey || event.metaKey) &&
					!!command.keystroke.altKey == event.altKey &&
					!!command.keystroke.shiftKey == event.shiftKey) {
				plugin._showPlugin(target);
				handled = true;
			}
		}
		inst.ctrlKey = ((event.keyCode < 48 && event.keyCode != 32) ||
			event.ctrlKey || event.metaKey);
		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
		return !handled;
	},

	/* Filter keystrokes in the datepicker.
	   @param  event  (KeyEvent) the keystroke
	   @return  (boolean) true if allowed, false if not allowed */
	_keyPress: function(event) {
		var inst = $.data(event.target, plugin.propertyName);
		if (inst && inst.options.constrainInput) {
			var ch = String.fromCharCode(event.keyCode || event.charCode);
			var allowedChars = plugin._allowedChars(inst);
			return (event.metaKey || inst.ctrlKey || ch < ' ' ||
				!allowedChars || allowedChars.indexOf(ch) > -1);
		}
		return true;
	},

	/* Determine the set of characters allowed by the date format.
	   @param  inst  (object) the current instance settings
	   @return  (string) the set of allowed characters, or null if anything allowed */
	_allowedChars: function(inst) {
		var allowedChars = (inst.options.multiSelect ? inst.options.multiSeparator :
			(inst.options.rangeSelect ? inst.options.rangeSeparator : ''));
		var literal = false;
		var hasNum = false;
		var dateFormat = inst.options.dateFormat;
		for (var i = 0; i < dateFormat.length; i++) {
			var ch = dateFormat.charAt(i);
			if (literal) {
				if (ch == "'" && dateFormat.charAt(i + 1) != "'") {
					literal = false;
				}
				else {
					allowedChars += ch;
				}
			}
			else {
				switch (ch) {
					case 'd': case 'm': case 'o': case 'w':
						allowedChars += (hasNum ? '' : '0123456789'); hasNum = true; break;
					case 'y': case '@': case '!':
						allowedChars += (hasNum ? '' : '0123456789') + '-'; hasNum = true; break;
					case 'J':
						allowedChars += (hasNum ? '' : '0123456789') + '-.'; hasNum = true; break;
					case 'D': case 'M': case 'Y':
						return null; // Accept anything
					case "'":
						if (dateFormat.charAt(i + 1) == "'") {
							allowedChars += "'";
						}
						else {
							literal = true;
						}
						break;
					default:
						allowedChars += ch;
				}
			}
		}
		return allowedChars;
	},

	/* Synchronise datepicker with the field.
	   @param  event  (KeyEvent) the keystroke
	   @return  (boolean) true if allowed, false if not allowed */
	_keyUp: function(event) {
		var target = event.target;
		var inst = $.data(target, plugin.propertyName);
		if (inst && !inst.ctrlKey && inst.lastVal != inst.target.val()) {
			try {
				var dates = plugin._extractDates(inst, inst.target.val());
				if (dates.length > 0) {
					plugin._setDatePlugin(target, dates, null, true);
				}
			}
			catch (event) {
				// Ignore
			}
		}
		return true;
	},

	/* Increment/decrement month/year on mouse wheel activity.
	   @param  event  (event) the mouse wheel event
	   @param  delta  (number) the amount of change */
	_doMouseWheel: function(event, delta) {
		var target = (plugin.curInst && plugin.curInst.target[0]) ||
			$(event.target).closest('.' + plugin.markerClassName)[0];
		if (plugin._isDisabledPlugin(target)) {
			return;
		}
		var inst = $.data(target, plugin.propertyName);
		if (inst.options.useMouseWheel) {
			delta = (delta < 0 ? -1 : +1);
			plugin._changeMonthPlugin(target,
				-inst.options[event.ctrlKey ? 'monthsToJump' : 'monthsToStep'] * delta);
		}
		event.preventDefault();
	},

	/* Clear an input and close a popup datepicker.
	   @param  target  (element) the control to use */
	_clearPlugin: function(target) {
		var inst = $.data(target, this.propertyName);
		if (inst) {
			inst.selectedDates = [];
			this._hidePlugin(target);
			var defaultDate = inst.get('defaultDate');
			if (inst.options.selectDefaultDate && defaultDate) {
				this._setDatePlugin(target, plugin.newDate(defaultDate || plugin.today()));
			}
			else {
				this._updateInput(target);
			}
		}
	},

	/* Retrieve the selected date(s) for a datepicker.
	   @param  target  (element) the control to examine
	   @return  (CDate[]) the selected date(s) */
	_getDatePlugin: function(target) {
		var inst = $.data(target, this.propertyName);
		return (inst ? inst.selectedDates : []);
	},

	/* Set the selected date(s) for a datepicker.
	   @param  target   (element) the control to examine
	   @param  dates    (CDate or number or string or [] of these) the selected date(s)
	   @param  endDate  (CDate or number or string) the ending date for a range (optional)
	   @param  keyUp    (boolean, internal) true if coming from keyUp processing
	   @param  setOpt   (boolean, internal) true if coming from option processing */
	_setDatePlugin: function(target, dates, endDate, keyUp, setOpt) {
		var inst = $.data(target, this.propertyName);
		if (inst) {
			if (!$.isArray(dates)) {
				dates = [dates];
				if (endDate) {
					dates.push(endDate);
				}
			}
			var minDate = inst.get('minDate');
			var maxDate = inst.get('maxDate');
			var curDate = inst.selectedDates[0];
			inst.selectedDates = [];
			for (var i = 0; i < dates.length; i++) {
				var date = plugin.determineDate(
					dates[i], null, curDate, inst.options.dateFormat, inst.getConfig());
				if (date) {
					if ((!minDate || date.getTime() >= minDate.getTime()) &&
							(!maxDate || date.getTime() <= maxDate.getTime())) {
						var found = false;
						for (var j = 0; j < inst.selectedDates.length; j++) {
							if (inst.selectedDates[j].getTime() == date.getTime()) {
								found = true;
								break;
							}
						}
						if (!found) {
							inst.selectedDates.push(date);
						}
					}
				}
			}
			inst.selectedDates.splice(inst.options.multiSelect ||
				(inst.options.rangeSelect ? 2 : 1), inst.selectedDates.length);
			if (inst.options.rangeSelect) {
				switch (inst.selectedDates.length) {
					case 1: inst.selectedDates[1] = inst.selectedDates[0]; break;
					case 2: inst.selectedDates[1] =
						(inst.selectedDates[0].getTime() > inst.selectedDates[1].getTime() ?
						inst.selectedDates[0] : inst.selectedDates[1]); break;
				}
				inst.pickingRange = false;
			}
			inst.prevDate = (inst.drawDate ? plugin.newDate(inst.drawDate) : null);
			inst.drawDate = this._checkMinMax(plugin.newDate(inst.selectedDates[0] ||
				inst.get('defaultDate') || plugin.today()), inst);
			if (!setOpt) {
				this._update(target);
				this._updateInput(target, keyUp);
			}
		}
	},

	/* Determine whether a date is selectable for this datepicker.
	   @param  target  (element) the control to check
	   @param  date    (Date or string or number) the date to check
	   @return  (boolean) true if selectable, false if not */
	_isSelectablePlugin: function(target, date) {
		var inst = $.data(target, this.propertyName);
		if (!inst) {
			return false;
		}
		date = plugin.determineDate(date, inst.selectedDates[0] || this.today(), null,
			inst.options.dateFormat, inst.getConfig());
		return this._isSelectable(target, date, inst.options.onDate,
			inst.get('minDate'), inst.get('maxDate'));
	},

	/* Internally determine whether a date is selectable for this datepicker.
	   @param  target   (element) the control to check
	   @param  date     (Date) the date to check
	   @param  onDate   (function or boolean) any onDate callback or callback.selectable
	   @param  mindate  (Date) the minimum allowed date
	   @param  maxdate  (Date) the maximum allowed date
	   @return  (boolean) true if selectable, false if not */
	_isSelectable: function(target, date, onDate, minDate, maxDate) {
		var dateInfo = (typeof onDate == 'boolean' ? {selectable: onDate} :
			(!$.isFunction(onDate) ? {} : onDate.apply(target, [date, true])));
		return (dateInfo.selectable != false) &&
			(!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime());
	},

	/* Perform a named action for a datepicker.
	   @param  target  (element) the control to affect
	   @param  action  (string) the name of the action */
	_performActionPlugin: function(target, action) {
		var inst = $.data(target, this.propertyName);
		if (inst && !this._isDisabledPlugin(target)) {
			var commands = inst.options.commands;
			if (commands[action] && commands[action].enabled.apply(target, [inst])) {
				commands[action].action.apply(target, [inst]);
			}
		}
	},

	/* Set the currently shown month, defaulting to today's.
	   @param  target  (element) the control to affect
	   @param  year    (number) the year to show (optional)
	   @param  month   (number) the month to show (1-12) (optional)
	   @param  day     (number) the day to show (optional) */
	_showMonthPlugin: function(target, year, month, day) {
		var inst = $.data(target, this.propertyName);
		if (inst && (day != null ||
				(inst.drawDate.getFullYear() != year || inst.drawDate.getMonth() + 1 != month))) {
			inst.prevDate = plugin.newDate(inst.drawDate);
			var show = this._checkMinMax((year != null ?
				plugin.newDate(year, month, 1) : plugin.today()), inst);
			inst.drawDate = plugin.newDate(show.getFullYear(), show.getMonth() + 1,
				(day != null ? day : Math.min(inst.drawDate.getDate(),
				plugin.daysInMonth(show.getFullYear(), show.getMonth() + 1))));
			this._update(target);
		}
	},

	/* Adjust the currently shown month.
	   @param  target  (element) the control to affect
	   @param  offset  (number) the number of months to change by */
	_changeMonthPlugin: function(target, offset) {
		var inst = $.data(target, this.propertyName);
		if (inst) {
			var date = plugin.add(plugin.newDate(inst.drawDate), offset, 'm');
			this._showMonthPlugin(target, date.getFullYear(), date.getMonth() + 1);
		}
	},

	/* Adjust the currently shown day.
	   @param  target  (element) the control to affect
	   @param  offset  (number) the number of days to change by */
	_changeDayPlugin: function(target, offset) {
		var inst = $.data(target, this.propertyName);
		if (inst) {
			var date = plugin.add(plugin.newDate(inst.drawDate), offset, 'd');
			this._showMonthPlugin(target, date.getFullYear(), date.getMonth() + 1, date.getDate());
		}
	},

	/* Restrict a date to the minimum/maximum specified.
	   @param  date  (CDate) the date to check
	   @param  inst  (object) the current instance settings */
	_checkMinMax: function(date, inst) {
		var minDate = inst.get('minDate');
		var maxDate = inst.get('maxDate');
		date = (minDate && date.getTime() < minDate.getTime() ? plugin.newDate(minDate) : date);
		date = (maxDate && date.getTime() > maxDate.getTime() ? plugin.newDate(maxDate) : date);
		return date;
	},

	/* Retrieve the date associated with an entry in the datepicker.
	   @param  target  (element) the control to examine
	   @param  elem    (element) the selected datepicker element
	   @return  (CDate) the corresponding date, or null */
	_retrieveDatePlugin: function(target, elem) {
		var inst = $.data(target, this.propertyName);
		return (!inst ? null : this._normaliseDate(
			new Date(parseInt(elem.className.replace(/^.*dp(-?\d+).*$/, '$1'), 10))));
	},

	/* Select a date for this datepicker.
	   @param  target  (element) the control to examine
	   @param  elem    (element) the selected datepicker element */
	_selectDatePlugin: function(target, elem) {
		var inst = $.data(target, this.propertyName);
		if (inst && !this._isDisabledPlugin(target)) {
			var date = this._retrieveDatePlugin(target, elem);
			if (inst.options.multiSelect) {
				var found = false;
				for (var i = 0; i < inst.selectedDates.length; i++) {
					if (date.getTime() == inst.selectedDates[i].getTime()) {
						inst.selectedDates.splice(i, 1);
						found = true;
						break;
					}
				}
				if (!found && inst.selectedDates.length < inst.options.multiSelect) {
					inst.selectedDates.push(date);
				}
			}
			else if (inst.options.rangeSelect) {
				if (inst.pickingRange) {
					inst.selectedDates[1] = date;
				}
				else {
					inst.selectedDates = [date, date];
				}
				inst.pickingRange = !inst.pickingRange;
			}
			else {
				inst.selectedDates = [date];
			}
			inst.prevDate = plugin.newDate(date);
			this._updateInput(target);
			if (inst.inline || inst.pickingRange || inst.selectedDates.length <
					(inst.options.multiSelect || (inst.options.rangeSelect ? 2 : 1))) {
				this._update(target);
			}
			else {
				this._hidePlugin(target);
			}
		}
	},

	/* Generate the datepicker content for this control.
	   @param  target  (element) the control to affect
	   @param  inst    (object) the current instance settings
	   @return  (jQuery) the datepicker content */
	_generateContent: function(target, inst) {
		var monthsToShow = inst.options.monthsToShow;
		monthsToShow = ($.isArray(monthsToShow) ? monthsToShow : [1, monthsToShow]);
		inst.drawDate = this._checkMinMax(
			inst.drawDate || inst.get('defaultDate') || plugin.today(), inst);
		var drawDate = plugin._applyMonthsOffset(plugin.newDate(inst.drawDate), inst);
		// Generate months
		var monthRows = '';
		for (var row = 0; row < monthsToShow[0]; row++) {
			var months = '';
			for (var col = 0; col < monthsToShow[1]; col++) {
				months += this._generateMonth(target, inst, drawDate.getFullYear(),
					drawDate.getMonth() + 1, inst.options.renderer, (row == 0 && col == 0));
				plugin.add(drawDate, 1, 'm');
			}
			monthRows += this._prepare(inst.options.renderer.monthRow, inst).replace(/\{months\}/, months);
		}
		var picker = this._prepare(inst.options.renderer.picker, inst).replace(/\{months\}/, monthRows).
			replace(/\{weekHeader\}/g, this._generateDayHeaders(inst, inst.options.renderer));
		// Add commands
		var addCommand = function(type, open, close, name, classes) {
			if (picker.indexOf('{' + type + ':' + name + '}') == -1) {
				return;
			}
			var command = inst.options.commands[name];
			var date = (inst.options.commandsAsDateFormat ? command.date.apply(target, [inst]) : null);
			picker = picker.replace(new RegExp('\\{' + type + ':' + name + '\\}', 'g'),
				'<' + open +
				(command.status ? ' title="' + inst.options[command.status] + '"' : '') +
				' class="' + inst.options.renderer.commandClass + ' ' +
				inst.options.renderer.commandClass + '-' + name + ' ' + classes +
				(command.enabled(inst) ? '' : ' ' + inst.options.renderer.disabledClass) + '">' +
				(date ? plugin.formatDate(inst.options[command.text], date, inst.getConfig()) :
				inst.options[command.text]) + '</' + close + '>');
		};
		for (var name in inst.options.commands) {
			addCommand('button', 'button type="button"', 'button', name,
				inst.options.renderer.commandButtonClass);
			addCommand('link', 'a href="javascript:void(0)"', 'a', name,
				inst.options.renderer.commandLinkClass);
		}
		picker = $(picker);
		if (monthsToShow[1] > 1) {
			var count = 0;
			$(inst.options.renderer.monthSelector, picker).each(function() {
				var nth = ++count % monthsToShow[1];
				$(this).addClass(nth == 1 ? 'first' : (nth == 0 ? 'last' : ''));
			});
		}
		// Add datepicker behaviour
		var self = this;
		picker.find(inst.options.renderer.daySelector + ' a').hover(
				function() { $(this).addClass(inst.options.renderer.highlightedClass); },
				function() {
					(inst.inline ? $(this).parents('.' + self.markerClassName) : inst.div).
						find(inst.options.renderer.daySelector + ' a').
						removeClass(inst.options.renderer.highlightedClass);
				}).
			click(function() {
				self._selectDatePlugin(target, this);
			}).end().
			find('select.' + this._monthYearClass + ':not(.' + this._anyYearClass + ')').
			change(function() {
				var monthYear = $(this).val().split('/');
				self._showMonthPlugin(target, parseInt(monthYear[1], 10), parseInt(monthYear[0], 10));
			}).end().
			find('select.' + this._anyYearClass).click(function() {
				$(this).css('visibility', 'hidden').
					next('input').css({left: this.offsetLeft, top: this.offsetTop,
					width: this.offsetWidth, height: this.offsetHeight}).show().focus();
			}).end().
			find('input.' + self._monthYearClass).change(function() {
				try {
					var year = parseInt($(this).val(), 10);
					year = (isNaN(year) ? inst.drawDate.getFullYear() : year);
					self._showMonthPlugin(target, year, inst.drawDate.getMonth() + 1, inst.drawDate.getDate());
				}
				catch (e) {
					alert(e);
				}
			}).keydown(function(event) {
				if (event.keyCode == 13) { // Enter
					$(event.target).change();
				}
				else if (event.keyCode == 27) { // Escape
					$(event.target).hide().prev('select').css('visibility', 'visible');
					inst.target.focus();
				}
			});
		// Add command behaviour
		picker.find('.' + inst.options.renderer.commandClass).click(function() {
				if (!$(this).hasClass(inst.options.renderer.disabledClass)) {
					var action = this.className.replace(
						new RegExp('^.*' + inst.options.renderer.commandClass + '-([^ ]+).*$'), '$1');
					plugin._performActionPlugin(target, action);
				}
			});
		// Add classes
		if (inst.options.isRTL) {
			picker.addClass(inst.options.renderer.rtlClass);
		}
		if (monthsToShow[0] * monthsToShow[1] > 1) {
			picker.addClass(inst.options.renderer.multiClass);
		}
		if (inst.options.pickerClass) {
			picker.addClass(inst.options.pickerClass);
		}
		// Resize
		$('body').append(picker);
		var width = 0;
		picker.find(inst.options.renderer.monthSelector).each(function() {
			width += $(this).outerWidth();
		});
		picker.width(width / monthsToShow[0]);
		// Pre-show customisation
		if ($.isFunction(inst.options.onShow)) {
			inst.options.onShow.apply(target, [picker, inst]);
		}
		return picker;
	},

	/* Generate the content for a single month.
	   @param  target    (element) the control to affect
	   @param  inst      (object) the current instance settings
	   @param  year      (number) the year to generate
	   @param  month     (number) the month to generate
	   @param  renderer  (object) the rendering templates
	   @param  first     (boolean) true if first of multiple months
	   @return  (string) the month content */
	_generateMonth: function(target, inst, year, month, renderer, first) {
		var daysInMonth = plugin.daysInMonth(year, month);
		var monthsToShow = inst.options.monthsToShow;
		monthsToShow = ($.isArray(monthsToShow) ? monthsToShow : [1, monthsToShow]);
		var fixedWeeks = inst.options.fixedWeeks || (monthsToShow[0] * monthsToShow[1] > 1);
		var firstDay = inst.options.firstDay;
		var leadDays = (plugin.newDate(year, month, 1).getDay() - firstDay + 7) % 7;
		var numWeeks = (fixedWeeks ? 6 : Math.ceil((leadDays + daysInMonth) / 7));
		var selectOtherMonths = inst.options.selectOtherMonths && inst.options.showOtherMonths;
		var minDate = (inst.pickingRange ? inst.selectedDates[0] : inst.get('minDate'));
		var maxDate = inst.get('maxDate');
		var showWeeks = renderer.week.indexOf('{weekOfYear}') > -1;
		var today = plugin.today();
		var drawDate = plugin.newDate(year, month, 1);
		plugin.add(drawDate, -leadDays - (fixedWeeks && (drawDate.getDay() == firstDay) ? 7 : 0), 'd');
		var ts = drawDate.getTime();
		// Generate weeks
		var weeks = '';
		for (var week = 0; week < numWeeks; week++) {
			var weekOfYear = (!showWeeks ? '' : '<span class="dp' + ts + '">' +
				($.isFunction(inst.options.calculateWeek) ? inst.options.calculateWeek(drawDate) : 0) + '</span>');
			var days = '';
			for (var day = 0; day < 7; day++) {
				var selected = false;
				if (inst.options.rangeSelect && inst.selectedDates.length > 0) {
					selected = (drawDate.getTime() >= inst.selectedDates[0] &&
						drawDate.getTime() <= inst.selectedDates[1]);
				}
				else {
					for (var i = 0; i < inst.selectedDates.length; i++) {
						if (inst.selectedDates[i].getTime() == drawDate.getTime()) {
							selected = true;
							break;
						}
					}
				}
				var dateInfo = (!$.isFunction(inst.options.onDate) ? {} :
					inst.options.onDate.apply(target, [drawDate, drawDate.getMonth() + 1 == month]));
				var selectable = (selectOtherMonths || drawDate.getMonth() + 1 == month) &&
					this._isSelectable(target, drawDate, dateInfo.selectable, minDate, maxDate);
				days += this._prepare(renderer.day, inst).replace(/\{day\}/g,
					(selectable ? '<a href="javascript:void(0)"' : '<span') +
					' class="dp' + ts + ' ' + (dateInfo.dateClass || '') +
					(selected && (selectOtherMonths || drawDate.getMonth() + 1 == month) ?
					' ' + renderer.selectedClass : '') +
					(selectable ? ' ' + renderer.defaultClass : '') +
					((drawDate.getDay() || 7) < 6 ? '' : ' ' + renderer.weekendClass) +
					(drawDate.getMonth() + 1 == month ? '' : ' ' + renderer.otherMonthClass) +
					(drawDate.getTime() == today.getTime() && (drawDate.getMonth() + 1) == month ?
					' ' + renderer.todayClass : '') +
					(drawDate.getTime() == inst.drawDate.getTime() && (drawDate.getMonth() + 1) == month ?
					' ' + renderer.highlightedClass : '') + '"' +
					(dateInfo.title || (inst.options.dayStatus && selectable) ? ' title="' +
					(dateInfo.title || plugin.formatDate(
					inst.options.dayStatus, drawDate, inst.getConfig())) + '"' : '') + '>' +
					(inst.options.showOtherMonths || (drawDate.getMonth() + 1) == month ?
					dateInfo.content || drawDate.getDate() : '&nbsp;') +
					(selectable ? '</a>' : '</span>'));
				plugin.add(drawDate, 1, 'd');
				ts = drawDate.getTime();
			}
			weeks += this._prepare(renderer.week, inst).replace(/\{days\}/g, days).
				replace(/\{weekOfYear\}/g, weekOfYear);
		}
		var monthHeader = this._prepare(renderer.month, inst).match(/\{monthHeader(:[^\}]+)?\}/);
		monthHeader = (monthHeader[0].length <= 13 ? 'MM yyyy' :
			monthHeader[0].substring(13, monthHeader[0].length - 1));
		monthHeader = (first ? this._generateMonthSelection(
			inst, year, month, minDate, maxDate, monthHeader, renderer) :
			plugin.formatDate(monthHeader, plugin.newDate(year, month, 1), inst.getConfig()));
		var weekHeader = this._prepare(renderer.weekHeader, inst).
			replace(/\{days\}/g, this._generateDayHeaders(inst, renderer));
		return this._prepare(renderer.month, inst).replace(/\{monthHeader(:[^\}]+)?\}/g, monthHeader).
			replace(/\{weekHeader\}/g, weekHeader).replace(/\{weeks\}/g, weeks);
	},

	/* Generate the HTML for the day headers.
	   @param  inst      (object) the current instance settings
	   @param  renderer  (object) the rendering templates
	   @return  (string) a week's worth of day headers */
	_generateDayHeaders: function(inst, renderer) {
		var header = '';
		for (var day = 0; day < 7; day++) {
			var dow = (day + inst.options.firstDay) % 7;
			header += this._prepare(renderer.dayHeader, inst).replace(/\{day\}/g,
				'<span class="' + this._curDoWClass + dow + '" title="' +
				inst.options.dayNames[dow] + '">' + inst.options.dayNamesMin[dow] + '</span>');
		}
		return header;
	},

	/* Generate selection controls for month.
	   @param  inst         (object) the current instance settings
	   @param  year         (number) the year to generate
	   @param  month        (number) the month to generate
	   @param  minDate      (CDate) the minimum date allowed
	   @param  maxDate      (CDate) the maximum date allowed
	   @param  monthHeader  (string) the month/year format
	   @return  (string) the month selection content */
	_generateMonthSelection: function(inst, year, month, minDate, maxDate, monthHeader) {
		if (!inst.options.changeMonth) {
			return plugin.formatDate(
				monthHeader, plugin.newDate(year, month, 1), inst.getConfig());
		}
		// Months
		var monthNames = inst.options['monthNames' + (monthHeader.match(/mm/i) ? '' : 'Short')];
		var html = monthHeader.replace(/m+/i, '\\x2E').replace(/y+/i, '\\x2F');
		var selector = '<select class="' + this._monthYearClass +
			'" title="' + inst.options.monthStatus + '">';
		for (var m = 1; m <= 12; m++) {
			if ((!minDate || plugin.newDate(year, m, plugin.daysInMonth(year, m)).
					getTime() >= minDate.getTime()) &&
					(!maxDate || plugin.newDate(year, m, 1).getTime() <= maxDate.getTime())) {
				selector += '<option value="' + m + '/' + year + '"' +
					(month == m ? ' selected="selected"' : '') + '>' +
					monthNames[m - 1] + '</option>';
			}
		}
		selector += '</select>';
		html = html.replace(/\\x2E/, selector);
		// Years
		var yearRange = inst.options.yearRange;
		if (yearRange == 'any') {
			selector = '<select class="' + this._monthYearClass + ' ' + this._anyYearClass +
				'" title="' + inst.options.yearStatus + '">' +
				'<option>' + year + '</option></select>' +
				'<input class="' + this._monthYearClass + ' ' + this._curMonthClass +
				month + '" value="' + year + '">';
		}
		else {
			yearRange = yearRange.split(':');
			var todayYear = plugin.today().getFullYear();
			var start = (yearRange[0].match('c[+-].*') ? year + parseInt(yearRange[0].substring(1), 10) :
				((yearRange[0].match('[+-].*') ? todayYear : 0) + parseInt(yearRange[0], 10)));
			var end = (yearRange[1].match('c[+-].*') ? year + parseInt(yearRange[1].substring(1), 10) :
				((yearRange[1].match('[+-].*') ? todayYear : 0) + parseInt(yearRange[1], 10)));
			selector = '<select class="' + this._monthYearClass +
				'" title="' + inst.options.yearStatus + '">';
			start = plugin.add(plugin.newDate(start + 1, 1, 1), -1, 'd');
			end = plugin.newDate(end, 1, 1);
			var addYear = function(y) {
				if (y != 0) {
					selector += '<option value="' + month + '/' + y + '"' +
						(year == y ? ' selected="selected"' : '') + '>' + y + '</option>';
				}
			};
			if (start.getTime() < end.getTime()) {
				start = (minDate && minDate.getTime() > start.getTime() ? minDate : start).getFullYear();
				end = (maxDate && maxDate.getTime() < end.getTime() ? maxDate : end).getFullYear();
				for (var y = start; y <= end; y++) {
					addYear(y);
				}
			}
			else {
				start = (maxDate && maxDate.getTime() < start.getTime() ? maxDate : start).getFullYear();
				end = (minDate && minDate.getTime() > end.getTime() ? minDate : end).getFullYear();
				for (var y = start; y >= end; y--) {
					addYear(y);
				}
			}
			selector += '</select>';
		}
		html = html.replace(/\\x2F/, selector);
		return html;
	},

	/* Prepare a render template for use.
	   Exclude popup/inline sections that are not applicable.
	   Localise text of the form: {l10n:name}.
	   @param  text  (string) the text to localise
	   @param  inst  (object) the current instance settings
	   @return  (string) the localised text */
	_prepare: function(text, inst) {
		var replaceSection = function(type, retain) {
			while (true) {
				var start = text.indexOf('{' + type + ':start}');
				if (start == -1) {
					return;
				}
				var end = text.substring(start).indexOf('{' + type + ':end}');
				if (end > -1) {
					text = text.substring(0, start) +
						(retain ? text.substr(start + type.length + 8, end - type.length - 8) : '') +
						text.substring(start + end + type.length + 6);
				}
			}
		};
		replaceSection('inline', inst.inline);
		replaceSection('popup', !inst.inline);
		var pattern = /\{l10n:([^\}]+)\}/;
		var matches = null;
		while (matches = pattern.exec(text)) {
			text = text.replace(matches[0], inst.options[matches[1]]);
		}
		return text;
	}
});

// The list of commands that return values and don't permit chaining
var getters = ['getDate', 'isDisabled', 'isSelectable', 'retrieveDate'];

/* Determine whether a command is a getter and doesn't permit chaining.
   @param  command    (string, optional) the command to run
   @param  otherArgs  ([], optional) any other arguments for the command
   @return  true if the command is a getter, false if not */
function isNotChained(command, otherArgs) {
	if (command == 'option' && (otherArgs.length == 0 ||
			(otherArgs.length == 1 && typeof otherArgs[0] == 'string'))) {
		return true;
	}
	return $.inArray(command, getters) > -1;
}

/* Attach the datepicker functionality to a jQuery selection.
   @param  options  (object) the new settings to use for these instances (optional) or
                    (string) the command to run (optional)
   @return  (jQuery) for chaining further calls or
            (any) getter value */
$.fn.datepick = function(options) {
	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (isNotChained(options, otherArgs)) {
		return plugin['_' + options + 'Plugin'].apply(plugin, [this[0]].concat(otherArgs));
	}
	return this.each(function() {
		if (typeof options == 'string') {
			if (!plugin['_' + options + 'Plugin']) {
				throw 'Unknown command: ' + options;
			}
			plugin['_' + options + 'Plugin'].apply(plugin, [this].concat(otherArgs));
		}
		else {
			plugin._attachPlugin(this, options || {});
		}
	});
};

/* Initialise the datepicker functionality. */
var plugin = $.datepick = new Datepicker(); // Singleton instance

$(function() {
	$(document).mousedown(plugin._checkExternalClick).
		resize(function() { plugin._hidePlugin(plugin.curInst); });
});

})(jQuery);
/*...
 	jquery/datepick/jquery.datepick.ext.js?v=2015.03
*/
/* http://keith-wood.name/datepick.html
   Datepicker extensions for jQuery v4.1.0.
   Written by Keith Wood (kbwood{at}iinet.com.au) August 2009.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
   Please attribute the author if you use it. */

(function($) { // Hide scope, no $ conflict

var themeRollerRenderer = {
	picker: '<div{popup:start} id="ui-datepicker-div"{popup:end} class="ui-datepicker ui-widget ' +
	'ui-widget-content ui-helper-clearfix ui-corner-all{inline:start} ui-datepicker-inline{inline:end}">' +
	'<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">' +
	'{link:prev}{link:today}{link:next}</div>{months}' +
	'{popup:start}<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ' +
	'ui-corner-all">{button:clear}{button:close}</div>{popup:end}' +
	'<div class="ui-helper-clearfix"></div></div>',
	monthRow: '<div class="ui-datepicker-row-break">{months}</div>',
	month: '<div class="ui-datepicker-group">' +
	'<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">{monthHeader:MM yyyy}</div>' +
	'<table class="ui-datepicker-calendar"><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table></div>',
	weekHeader: '<tr>{days}</tr>',
	dayHeader: '<th>{day}</th>',
	week: '<tr>{days}</tr>',
	day: '<td>{day}</td>',
	monthSelector: '.ui-datepicker-group',
	daySelector: 'td',
	rtlClass: 'ui-datepicker-rtl',
	multiClass: 'ui-datepicker-multi',
	defaultClass: 'ui-state-default',
	selectedClass: 'ui-state-active',
	highlightedClass: 'ui-state-hover',
	todayClass: 'ui-state-highlight',
	otherMonthClass: 'ui-datepicker-other-month',
	weekendClass: 'ui-datepicker-week-end',
	commandClass: 'ui-datepicker-cmd',
	commandButtonClass: 'ui-state-default ui-corner-all',
	commandLinkClass: '',
	disabledClass: 'ui-datepicker-disabled'
};

$.extend($.datepick, {

	// Template for generating a datepicker showing week of year.
	weekOfYearRenderer: $.extend({}, $.datepick.defaultRenderer, {
		weekHeader: '<tr><th class="datepick-week">' +
		'<span title="{l10n:weekStatus}">{l10n:weekText}</span></th>{days}</tr>',
		week: '<tr><td class="datepick-week">{weekOfYear}</td>{days}</tr>'
	}),

	// ThemeRoller template for generating a datepicker.
	themeRollerRenderer: themeRollerRenderer,

	// ThemeRoller template for generating a datepicker showing week of year.
	themeRollerWeekOfYearRenderer: $.extend({}, themeRollerRenderer, {
		weekHeader: '<tr><th class="ui-state-hover"><span>{l10n:weekText}</span></th>{days}</tr>',
		week: '<tr><td class="ui-state-hover">{weekOfYear}</td>{days}</tr>'
	}),

	/* Don't allow weekends to be selected.
	   Usage: onDate: $.datepick.noWeekends.
	   @param  date  (Date) the current date
	   @return  (object) information about this date */
	noWeekends: function(date) {
		return {selectable: (date.getDay() || 7) < 6};
	},

	/* Change the first day of the week by clicking on the day header.
	   Usage: onShow: $.datepick.changeFirstDay.
	   @param  picker  (jQuery) the completed datepicker division
	   @param  inst    (object) the current instance settings */
	changeFirstDay: function(picker, inst) {
		var target = $(this);
		picker.find('th span').each(function() {
			var parent = $(this).parent();
			if (parent.is('.datepick-week') || parent.is('.ui-state-hover')) {
				return;
			}
			$('<a href="javascript:void(0)" class="' + this.className +
					'" title="Change first day of the week">' + $(this).text() + '</a>').
				click(function() {
					var dow = parseInt(this.className.replace(/^.*datepick-dow-(\d+).*$/, '$1'), 10);
					target.datepick('option', {firstDay: dow});
				}).
				replaceAll(this);
		});
	},

	/* Add a callback when hovering over dates.
	   Usage: onShow: $.datepick.hoverCallback(handleHover).
	   @param  onHover  (function) the callback when hovering,
	                    it receives the current date and a flag indicating selectability
	                    as parameters on entry, and no parameters on exit,
	                    this refers to the target input or division */
	hoverCallback: function(onHover) {
		return function(picker, inst) {
			if ($.isFunction(onHover)) {
				var target = this;
				picker.find(inst.options.renderer.daySelector + ' a, ' +
						inst.options.renderer.daySelector + ' span').
					hover(function() {
						onHover.apply(target, [$(target).datepick('retrieveDate', this),
							this.nodeName.toLowerCase() == 'a']);
					},
					function() { onHover.apply(target, []); });
			}
		};
	},

	/* Highlight the entire week when hovering over it.
	   Usage: onShow: $.datepick.highlightWeek.
	   @param  picker  (jQuery) the completed datepicker division
	   @param  inst    (object) the current instance settings */
	highlightWeek: function(picker, inst) {
		var target = this;
		var renderer = inst.options.renderer;
		picker.find(renderer.daySelector + ' a, ' + renderer.daySelector + ' span').
			hover(function() {
				$(this).parents('tr').find(renderer.daySelector + ' *').
					addClass(renderer.highlightedClass);
			},
			function() {
				$(this).parents('tr').find(renderer.daySelector + ' *').
					removeClass(renderer.highlightedClass);
			});
	},

	/* Show a status bar with messages.
	   Usage: onShow: $.datepick.showStatus.
	   @param  picker  (jQuery) the completed datepicker division
	   @param  inst    (object) the current instance settings */
	showStatus: function(picker, inst) {
		var isTR = (inst.options.renderer.selectedClass == themeRollerRenderer.selectedClass);
		var defaultStatus = inst.options.defaultStatus || '&nbsp;';
		var status = $('<div class="' + (!isTR ? 'datepick-status' :
			'ui-datepicker-status ui-widget-header ui-helper-clearfix ui-corner-all') + '">' +
			defaultStatus + '</div>').
			insertAfter(picker.find('.datepick-month-row:last,.ui-datepicker-row-break:last'));
		picker.find('*[title]').each(function() {
				var title = $(this).attr('title');
				$(this).removeAttr('title').hover(
					function() { status.text(title || defaultStatus); },
					function() { status.text(defaultStatus); });
			});
	},

	/* Allow easier navigation by month/year.
	   Usage: onShow: $.datepick.monthNavigation.
	   @param  picker  (jQuery) the completed datepicker division
	   @param  inst    (object) the current instance settings */
	monthNavigation: function(picker, inst) {
		var target = $(this);
		var isTR = (inst.options.renderer.selectedClass == themeRollerRenderer.selectedClass);
		var minDate = inst.curMinDate();
		var maxDate = inst.get('maxDate');
		var month = inst.drawDate.getMonth();
		var year = inst.drawDate.getFullYear();
		var html = '<div class="' + (!isTR ? 'datepick-month-nav' : 'ui-datepicker-month-nav') + '"' +
			' style="display: none;">';
		for (var i = 0; i < inst.options.monthNames.length; i++) {
			var inRange = ((!minDate || new Date(year, i + 1, 0).getTime() >= minDate.getTime()) &&
				(!maxDate || new Date(year, i, 1).getTime() <= maxDate.getTime()));
			html += '<div>' +
				(inRange ? '<a href="#" class="dp' + new Date(year, i, 1).getTime() + '"' : '<span') +
				' title="' + inst.options.monthNames[i] + '">' + inst.options.monthNamesShort[i] +
				(inRange ? '</a>' : '</span>') + '</div>';
		}
		for (var i = -6; i <= 6; i++) {
			if (i == 0) {
				continue;
			}
			var inRange =
				((!minDate || new Date(year + i, 12 - 1, 31).getTime() >= minDate.getTime()) &&
				(!maxDate || new Date(year + i, 1 - 1, 1).getTime() <= maxDate.getTime()));
			html += '<div>' + (inRange ? '<a href="#" class="dp' +
				new Date(year + i, month, 1).getTime() + '"' : '<span') +
				' title="' + (year + i) + '">' + (year + i) +
				(inRange ? '</a>' : '</span>') + '</div>';
		}
		html += '</div>';
		html = $(html).insertAfter(picker.find('div.datepick-nav,div.ui-datepicker-header:first'));
		html.find('a').click(function() {
				var date = target.datepick('retrieveDate', this);
				target.datepick('showMonth', date.getFullYear(), date.getMonth() + 1);
				return false;
			});
		picker.find('div.datepick-month-header,div.ui-datepicker-month-header').click(function() {
			html.slideToggle();
		}).css('cursor', 'pointer');
	},

	/* Select an entire week when clicking on a week number.
	   Use in conjunction with weekOfYearRenderer or themeRollerWeekOfYearRenderer.
	   Usage: onShow: $.datepick.selectWeek.
	   @param  picker  (jQuery) the completed datepicker division
	   @param  inst    (object) the current instance settings */
	selectWeek: function(picker, inst) {
		var target = $(this);
		picker.find('td.datepick-week span,td.ui-state-hover span').each(function() {
			$('<a href="javascript:void(0)" class="' +
					this.className + '" title="Select the entire week">' +
					$(this).text() + '</a>').
				click(function() {
					var date = target.datepick('retrieveDate', this);
					var dates = [date];
					for (var i = 1; i < 7; i++) {
						dates.push(date = $.datepick.add($.datepick.newDate(date), 1, 'd'));
					}
					if (inst.options.rangeSelect) {
						dates.splice(1, dates.length - 2);
					}
					target.datepick('setDate', dates).datepick('hide');
				}).
				replaceAll(this);
		});
	},

	/* Select an entire month when clicking on the week header.
	   Use in conjunction with weekOfYearRenderer or themeRollerWeekOfYearRenderer.
	   Usage: onShow: $.datepick.selectMonth.
	   @param  picker  (jQuery) the completed datepicker division
	   @param  inst    (object) the current instance settings */
	selectMonth: function(picker, inst) {
		var target = $(this);
		picker.find('th.datepick-week span,th.ui-state-hover span').each(function() {
			$('<a href="javascript:void(0)" title="Select the entire month">' +
					$(this).text() + '</a>').
				click(function() {
					var date = target.datepick('retrieveDate', $(this).parents('table').
						find('td:not(.datepick-week):not(.ui-state-hover) ' +
							'*:not(.datepick-other-month):not(.ui-datepicker-other-month)')[0]);
					var dates = [date];
					var dim = $.datepick.daysInMonth(date);
					for (var i = 1; i < dim; i++) {
						dates.push(date = $.datepick.add($.datepick.newDate(date), 1, 'd'));
					}
					if (inst.options.rangeSelect) {
						dates.splice(1, dates.length - 2);
					}
					target.datepick('setDate', dates).datepick('hide');
				}).
				replaceAll(this);
		});
	},

	/* Select a month only instead of a single day.
	   Usage: onShow: $.datepick.monthOnly.
	   @param  picker  (jQuery) the completed datepicker division
	   @param  inst    (object) the current instance settings */
	monthOnly: function(picker, inst) {
		var target = $(this);
		var selectMonth = $('<div style="text-align: center;"><button type="button">Select</button></div>').
			insertAfter(picker.find('.datepick-month-row:last,.ui-datepicker-row-break:last')).
			children().click(function() {
				var monthYear = picker.find('.datepick-month-year:first').val().split('/');
				target.datepick('setDate', $.datepick.newDate(
					parseInt(monthYear[1], 10), parseInt(monthYear[0], 10), 1)).
					datepick('hide');
			});
		picker.find('.datepick-month-row table,.ui-datepicker-row-break table').remove();
	}
});

})(jQuery);
/*...
 	jquery/jquery.cookie.js?v=2015.03
*/
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/*...
 	date.js?v=2015.03
*/
/**
 * Version: 1.0 Alpha-1
 * Build Date: 13-Nov-2007
 * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/.
 * Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
 */
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|after|from)/i,subtract:/^(\-|before|ago)/i,yesterday:/^yesterday/i,today:/^t(oday)?/i,tomorrow:/^tomorrow/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^min(ute)?s?/i,hour:/^h(ou)?rs?/i,week:/^w(ee)?k/i,month:/^m(o(nth)?s?)?/i,day:/^d(ays?)?/i,year:/^y((ea)?rs?)?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a|p)/i},abbreviatedTimeZoneStandard:{GMT:"-000",EST:"-0400",CST:"-0500",MST:"-0600",PST:"-0700"},abbreviatedTimeZoneDST:{GMT:"-000",EDT:"-0500",CDT:"-0600",MDT:"-0700",PDT:"-0800"}};
Date.getMonthNumberFromName=function(name){var n=Date.CultureInfo.monthNames,m=Date.CultureInfo.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};Date.getDayNumberFromName=function(name){var n=Date.CultureInfo.dayNames,m=Date.CultureInfo.abbreviatedDayNames,o=Date.CultureInfo.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};Date.isLeapYear=function(year){return(((year%4===0)&&(year%100!==0))||(year%400===0));};Date.getDaysInMonth=function(year,month){return[31,(Date.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};Date.getTimezoneOffset=function(s,dst){return(dst||false)?Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()]:Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()];};Date.getTimezoneAbbreviation=function(offset,dst){var n=(dst||false)?Date.CultureInfo.abbreviatedTimeZoneDST:Date.CultureInfo.abbreviatedTimeZoneStandard,p;for(p in n){if(n[p]===offset){return p;}}
return null;};Date.prototype.clone=function(){return new Date(this.getTime());};Date.prototype.compareTo=function(date){if(isNaN(this)){throw new Error(this);}
if(date instanceof Date&&!isNaN(date)){return(this>date)?1:(this<date)?-1:0;}else{throw new TypeError(date);}};Date.prototype.equals=function(date){return(this.compareTo(date)===0);};Date.prototype.between=function(start,end){var t=this.getTime();return t>=start.getTime()&&t<=end.getTime();};Date.prototype.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};Date.prototype.addSeconds=function(value){return this.addMilliseconds(value*1000);};Date.prototype.addMinutes=function(value){return this.addMilliseconds(value*60000);};Date.prototype.addHours=function(value){return this.addMilliseconds(value*3600000);};Date.prototype.addDays=function(value){return this.addMilliseconds(value*86400000);};Date.prototype.addWeeks=function(value){return this.addMilliseconds(value*604800000);};Date.prototype.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,this.getDaysInMonth()));return this;};Date.prototype.addYears=function(value){return this.addMonths(value*12);};Date.prototype.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.millisecond||x.milliseconds){this.addMilliseconds(x.millisecond||x.milliseconds);}
if(x.second||x.seconds){this.addSeconds(x.second||x.seconds);}
if(x.minute||x.minutes){this.addMinutes(x.minute||x.minutes);}
if(x.hour||x.hours){this.addHours(x.hour||x.hours);}
if(x.month||x.months){this.addMonths(x.month||x.months);}
if(x.year||x.years){this.addYears(x.year||x.years);}
if(x.day||x.days){this.addDays(x.day||x.days);}
return this;};Date._validate=function(value,min,max,name){if(typeof value!="number"){throw new TypeError(value+" is not a Number.");}else if(value<min||value>max){throw new RangeError(value+" is not a valid value for "+name+".");}
return true;};Date.validateMillisecond=function(n){return Date._validate(n,0,999,"milliseconds");};Date.validateSecond=function(n){return Date._validate(n,0,59,"seconds");};Date.validateMinute=function(n){return Date._validate(n,0,59,"minutes");};Date.validateHour=function(n){return Date._validate(n,0,23,"hours");};Date.validateDay=function(n,year,month){return Date._validate(n,1,Date.getDaysInMonth(year,month),"days");};Date.validateMonth=function(n){return Date._validate(n,0,11,"months");};Date.validateYear=function(n){return Date._validate(n,1,9999,"seconds");};Date.prototype.set=function(config){var x=config;if(!x.millisecond&&x.millisecond!==0){x.millisecond=-1;}
if(!x.second&&x.second!==0){x.second=-1;}
if(!x.minute&&x.minute!==0){x.minute=-1;}
if(!x.hour&&x.hour!==0){x.hour=-1;}
if(!x.day&&x.day!==0){x.day=-1;}
if(!x.month&&x.month!==0){x.month=-1;}
if(!x.year&&x.year!==0){x.year=-1;}
if(x.millisecond!=-1&&Date.validateMillisecond(x.millisecond)){this.addMilliseconds(x.millisecond-this.getMilliseconds());}
if(x.second!=-1&&Date.validateSecond(x.second)){this.addSeconds(x.second-this.getSeconds());}
if(x.minute!=-1&&Date.validateMinute(x.minute)){this.addMinutes(x.minute-this.getMinutes());}
if(x.hour!=-1&&Date.validateHour(x.hour)){this.addHours(x.hour-this.getHours());}
if(x.month!==-1&&Date.validateMonth(x.month)){this.addMonths(x.month-this.getMonth());}
if(x.year!=-1&&Date.validateYear(x.year)){this.addYears(x.year-this.getFullYear());}
if(x.day!=-1&&Date.validateDay(x.day,this.getFullYear(),this.getMonth())){this.addDays(x.day-this.getDate());}
if(x.timezone){this.setTimezone(x.timezone);}
if(x.timezoneOffset){this.setTimezoneOffset(x.timezoneOffset);}
return this;};Date.prototype.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};Date.prototype.isLeapYear=function(){var y=this.getFullYear();return(((y%4===0)&&(y%100!==0))||(y%400===0));};Date.prototype.isWeekday=function(){return!(this.is().sat()||this.is().sun());};Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth());};Date.prototype.moveToFirstDayOfMonth=function(){return this.set({day:1});};Date.prototype.moveToLastDayOfMonth=function(){return this.set({day:this.getDaysInMonth()});};Date.prototype.moveToDayOfWeek=function(day,orient){var diff=(day-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};Date.prototype.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};Date.prototype.getDayOfYear=function(){return Math.floor((this-new Date(this.getFullYear(),0,1))/86400000);};Date.prototype.getWeekOfYear=function(firstDayOfWeek){var y=this.getFullYear(),m=this.getMonth(),d=this.getDate();var dow=firstDayOfWeek||Date.CultureInfo.firstDayOfWeek;var offset=7+1-new Date(y,0,1).getDay();if(offset==8){offset=1;}
var daynum=((Date.UTC(y,m,d,0,0,0)-Date.UTC(y,0,1,0,0,0))/86400000)+1;var w=Math.floor((daynum-offset+7)/7);if(w===dow){y--;var prevOffset=7+1-new Date(y,0,1).getDay();if(prevOffset==2||prevOffset==8){w=53;}else{w=52;}}
return w;};Date.prototype.isDST=function(){console.log('isDST');return this.toString().match(/(E|C|M|P)(S|D)T/)[2]=="D";};Date.prototype.getTimezone=function(){return Date.getTimezoneAbbreviation(this.getUTCOffset,this.isDST());};Date.prototype.setTimezoneOffset=function(s){var here=this.getTimezoneOffset(),there=Number(s)*-6/10;this.addMinutes(there-here);return this;};Date.prototype.setTimezone=function(s){return this.setTimezoneOffset(Date.getTimezoneOffset(s));};Date.prototype.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r[0]+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};Date.prototype.getDayName=function(abbrev){return abbrev?Date.CultureInfo.abbreviatedDayNames[this.getDay()]:Date.CultureInfo.dayNames[this.getDay()];};Date.prototype.getMonthName=function(abbrev){return abbrev?Date.CultureInfo.abbreviatedMonthNames[this.getMonth()]:Date.CultureInfo.monthNames[this.getMonth()];};Date.prototype._toString=Date.prototype.toString;Date.prototype.toString=function(format){var self=this;var p=function p(s){return(s.toString().length==1)?"0"+s:s;};return format?format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,function(format){switch(format){case"hh":return p(self.getHours()<13?self.getHours():(self.getHours()-12));case"h":return self.getHours()<13?self.getHours():(self.getHours()-12);case"HH":return p(self.getHours());case"H":return self.getHours();case"mm":return p(self.getMinutes());case"m":return self.getMinutes();case"ss":return p(self.getSeconds());case"s":return self.getSeconds();case"yyyy":return self.getFullYear();case"yy":return self.getFullYear().toString().substring(2,4);case"dddd":return self.getDayName();case"ddd":return self.getDayName(true);case"dd":return p(self.getDate());case"d":return self.getDate().toString();case"MMMM":return self.getMonthName();case"MMM":return self.getMonthName(true);case"MM":return p((self.getMonth()+1));case"M":return self.getMonth()+1;case"t":return self.getHours()<12?Date.CultureInfo.amDesignator.substring(0,1):Date.CultureInfo.pmDesignator.substring(0,1);case"tt":return self.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator;case"zzz":case"zz":case"z":return"";}}):this._toString();};
Date.now=function(){return new Date();};Date.today=function(){return Date.now().clearTime();};Date.prototype._orient=+1;Date.prototype.next=function(){this._orient=+1;return this;};Date.prototype.last=Date.prototype.prev=Date.prototype.previous=function(){this._orient=-1;return this;};Date.prototype._is=false;Date.prototype.is=function(){this._is=true;return this;};Number.prototype._dateElement="day";Number.prototype.fromNow=function(){var c={};c[this._dateElement]=this;return Date.now().add(c);};Number.prototype.ago=function(){var c={};c[this._dateElement]=this*-1;return Date.now().add(c);};(function(){var $D=Date.prototype,$N=Number.prototype;var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),de;var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
return this.moveToDayOfWeek(n,this._orient);};};for(var i=0;i<dx.length;i++){$D[dx[i]]=$D[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};for(var j=0;j<mx.length;j++){$D[mx[j]]=$D[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$D[de]=$D[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}}());Date.prototype.toJSONString=function(){return this.toString("yyyy-MM-ddThh:mm:ssZ");};Date.prototype.toShortDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern);};Date.prototype.toLongDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.longDatePattern);};Date.prototype.toShortTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern);};Date.prototype.toLongTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.longTimePattern);};Date.prototype.getOrdinal=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};Date.Grammar={};Date.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=((s.length==3)?Date.getMonthNumberFromName(s):(Number(s)-1));};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<Date.CultureInfo.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];var now=new Date();this.year=now.getFullYear();this.month=now.getMonth();this.day=1;this.hour=0;this.minute=0;this.second=0;for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
this.hour=(this.meridian=="p"&&this.hour<13)?this.hour+12:this.hour;if(this.day>Date.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
if(this.now){return new Date();}
var today=Date.today();var method=null;var expression=!!(this.days!=null||this.orient||this.operator);if(expression){var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(this.weekday){this.unit="day";gap=(Date.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
if(this.unit=="week"){this.unit="day";this.value=this.value*7;}
this[this.unit+"s"]=this.value*orient;}
return today.add(this);}else{if(this.meridian&&this.hour){this.hour=(this.hour<13&&this.meridian=="p")?this.hour+12:this.hour;}
if(this.weekday&&!this.day){this.day=(today.addDays((Date.getDayNumberFromName(this.weekday)-today.getDay()))).getDate();}
if(this.month&&!this.day){this.day=1;}
return today.set(this);}}};var _=Date.Parsing.Operators,g=Date.Grammar,t=Date.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=Date.CultureInfo.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken(Date.CultureInfo.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.mm,g.ss],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[Date.CultureInfo.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw Date.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["yyyy-MM-ddTHH:mm:ss","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};}());Date._parse=Date.parse;Date.parse=function(s){var r=null;if(!s){return null;}
try{r=Date.Grammar.start.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};Date.getParseFunction=function(fx){var fn=Date.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};Date.parseExact=function(s,fx){return Date.getParseFunction(fx)(s);};
