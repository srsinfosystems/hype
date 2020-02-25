/*...
    jquery/jquery.jgrowl.js?v=2015.03
*/
/**
 * jGrowl 1.2.4
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Written by Stan Lemon <stosh1985@gmail.com>
 * Last updated: 2009.12.13
 *
 * jGrowl is a jQuery plugin implementing unobtrusive userland notifications.  These 
 * notifications function similarly to the Growl Framework available for
 * Mac OS X (http://growl.info).
 *
 * To Do:
 * - Move library settings to containers and allow them to be changed per container
 *
 * Changes in 1.2.4
 * - Fixed IE bug with the close-all button
 * - Fixed IE bug with the filter CSS attribute (special thanks to gotwic)
 * - Update IE opacity CSS
 * - Changed font sizes to use "em", and only set the base style
 *
 * Changes in 1.2.3
 * - The callbacks no longer use the container as context, instead they use the actual notification
 * - The callbacks now receive the container as a parameter after the options parameter
 * - beforeOpen and beforeClose now check the return value, if it's false - the notification does
 *   not continue.  The open callback will also halt execution if it returns false.
 * - Fixed bug where containers would get confused
 * - Expanded the pause functionality to pause an entire container.
 *
 * Changes in 1.2.2
 * - Notification can now be theme rolled for jQuery UI, special thanks to Jeff Chan!
 *
 * Changes in 1.2.1
 * - Fixed instance where the interval would fire the close method multiple times.
 * - Added CSS to hide from print media
 * - Fixed issue with closer button when div { position: relative } is set
 * - Fixed leaking issue with multiple containers.  Special thanks to Matthew Hanlon!
 *
 * Changes in 1.2.0
 * - Added message pooling to limit the number of messages appearing at a given time.
 * - Closing a notification is now bound to the notification object and triggered by the close button.
 *
 * Changes in 1.1.2
 * - Added iPhone styled example
 * - Fixed possible IE7 bug when determining if the ie6 class shoudl be applied.
 * - Added template for the close button, so that it's content could be customized.
 *
 * Changes in 1.1.1
 * - Fixed CSS styling bug for ie6 caused by a mispelling
 * - Changes height restriction on default notifications to min-height
 * - Added skinned examples using a variety of images
 * - Added the ability to customize the content of the [close all] box
 * - Added jTweet, an example of using jGrowl + Twitter
 *
 * Changes in 1.1.0
 * - Multiple container and instances.
 * - Standard $.jGrowl() now wraps $.fn.jGrowl() by first establishing a generic jGrowl container.
 * - Instance methods of a jGrowl container can be called by $.fn.jGrowl(methodName)
 * - Added glue preferenced, which allows notifications to be inserted before or after nodes in the container
 * - Added new log callback which is called before anything is done for the notification
 * - Corner's attribute are now applied on an individual notification basis.
 *
 * Changes in 1.0.4
 * - Various CSS fixes so that jGrowl renders correctly in IE6.
 *
 * Changes in 1.0.3
 * - Fixed bug with options persisting across notifications
 * - Fixed theme application bug
 * - Simplified some selectors and manipulations.
 * - Added beforeOpen and beforeClose callbacks
 * - Reorganized some lines of code to be more readable
 * - Removed unnecessary this.defaults context
 * - If corners plugin is present, it's now customizable.
 * - Customizable open animation.
 * - Customizable close animation.
 * - Customizable animation easing.
 * - Added customizable positioning (top-left, top-right, bottom-left, bottom-right, center)
 *
 * Changes in 1.0.2
 * - All CSS styling is now external.
 * - Added a theme parameter which specifies a secondary class for styling, such
 *   that notifications can be customized in appearance on a per message basis.
 * - Notification life span is now customizable on a per message basis.
 * - Added the ability to disable the global closer, enabled by default.
 * - Added callbacks for when a notification is opened or closed.
 * - Added callback for the global closer.
 * - Customizable animation speed.
 * - jGrowl now set itself up and tears itself down.
 *
 * Changes in 1.0.1:
 * - Removed dependency on metadata plugin in favor of .data()
 * - Namespaced all events
 */
(function($) {

    /** jGrowl Wrapper - Establish a base jGrowl Container for compatibility with older releases. **/
    $.jGrowl = function( m , o ) {
        // To maintain compatibility with older version that only supported one instance we'll create the base container.
        if ( $('#jGrowl').size() == 0 ) 
            $('<div id="jGrowl"></div>').addClass($.jGrowl.defaults.position).appendTo('body');

        // Create a notification on the container.
        $('#jGrowl').jGrowl(m,o);
    };


    /** Raise jGrowl Notification on a jGrowl Container **/
    $.fn.jGrowl = function( m , o ) {
        if ( $.isFunction(this.each) ) {
            var args = arguments;

            return this.each(function() {
                var self = this;

                /** Create a jGrowl Instance on the Container if it does not exist **/
                if ( $(this).data('jGrowl.instance') == undefined ) {
                    $(this).data('jGrowl.instance', $.extend( new $.fn.jGrowl(), { notifications: [], element: null, interval: null } ));
                    $(this).data('jGrowl.instance').startup( this );
                }

                /** Optionally call jGrowl instance methods, or just raise a normal notification **/
                if ( $.isFunction($(this).data('jGrowl.instance')[m]) ) {
                    $(this).data('jGrowl.instance')[m].apply( $(this).data('jGrowl.instance') , $.makeArray(args).slice(1) );
                } else {
                    $(this).data('jGrowl.instance').create( m , o );
                }
            });
        };
    };

    $.extend( $.fn.jGrowl.prototype , {

        /** Default JGrowl Settings **/
        defaults: {
            pool:             0,
            header:         '',
            group:             '',
            sticky:         false,
            position:         'top-right', // Is this still needed?
            glue:             'after',
            theme:             'default',
            corners:         '10px',
            check:             250,
            life:             3000,
            speed:             'normal',
            easing:         'swing',
            closer:         true,
            closeTemplate: '&times;',
            closerTemplate: '<div>[ close all ]</div>',
            log:             function(e,m,o) {},
            beforeOpen:     function(e,m,o) {},
            open:             function(e,m,o) {},
            beforeClose:     function(e,m,o) {},
            close:             function(e,m,o) {},
            animateOpen:     {
                opacity:     'show'
            },
            animateClose:     {
                opacity:     'hide'
            }
        },
        
        notifications: [],
        
        /** jGrowl Container Node **/
        element:     null,
    
        /** Interval Function **/
        interval:   null,
        
        /** Create a Notification **/
        create:     function( message , o ) {
            var o = $.extend({}, this.defaults, o);

            this.notifications.push({ message: message , options: o });
            
            o.log.apply( this.element , [this.element,message,o] );
        },
        
        render:         function( notification ) {
            var self = this;
            var message = notification.message;
            var o = notification.options;

            var notification = $(
                '<div class="jGrowl-notification ui-state-highlight ui-corner-all ' +
                ((o.group != undefined && o.group != '') ? ' ' + o.group : '') + '">' +
                '<div class="close">' + o.closeTemplate + '</div>' +
                '<div class="header">' + o.header + '</div>' +
                '<div class="message">' + message + '</div></div>'
            ).data("jGrowl", o).addClass(o.theme).children('div.close').bind("click.jGrowl", function() {
                $(this).parent().trigger('jGrowl.close');
            }).parent();


            /** Notification Actions **/
            $(notification).bind("mouseover.jGrowl", function() {
                $('div.jGrowl-notification', self.element).data("jGrowl.pause", true);
            }).bind("mouseout.jGrowl", function() {
                $('div.jGrowl-notification', self.element).data("jGrowl.pause", false);
            }).bind('jGrowl.beforeOpen', function() {
                if ( o.beforeOpen.apply( notification , [notification,message,o,self.element] ) != false ) {
                    $(this).trigger('jGrowl.open');
                }
            }).bind('jGrowl.open', function() {
                if ( o.open.apply( notification , [notification,message,o,self.element] ) != false ) {
                    if ( o.glue == 'after' ) {
                        $('div.jGrowl-notification:last', self.element).after(notification);
                    } else {
                        $('div.jGrowl-notification:first', self.element).before(notification);
                    }
                    
                    $(this).animate(o.animateOpen, o.speed, o.easing, function() {
                        // Fixes some anti-aliasing issues with IE filters.
//                        if ($.browser.msie && (parseInt($(this).css('opacity'), 10) === 1 || parseInt($(this).css('opacity'), 10) === 0))
//                            this.style.removeAttribute('filter');

                        $(this).data("jGrowl").created = new Date();
                    });
                }
            }).bind('jGrowl.beforeClose', function() {
                if ( o.beforeClose.apply( notification , [notification,message,o,self.element] ) != false )
                    $(this).trigger('jGrowl.close');
            }).bind('jGrowl.close', function() {
                // Pause the notification, lest during the course of animation another close event gets called.
                $(this).data('jGrowl.pause', true);
                $(this).animate(o.animateClose, o.speed, o.easing, function() {
                    $(this).remove();
                    var close = o.close.apply( notification , [notification,message,o,self.element] );

                    if ( $.isFunction(close) )
                        close.apply( notification , [notification,message,o,self.element] );
                });
            }).trigger('jGrowl.beforeOpen');
        
            /** Optional Corners Plugin **/
            if ( $.fn.corner != undefined ) $(notification).corner( o.corners );

            /** Add a Global Closer if more than one notification exists **/
            if ( $('div.jGrowl-notification:parent', self.element).size() > 1 && 
                 $('div.jGrowl-closer', self.element).size() == 0 && this.defaults.closer != false ) {
                $(this.defaults.closerTemplate).addClass('jGrowl-closer ui-state-highlight ui-corner-all').addClass(this.defaults.theme)
                    .appendTo(self.element).animate(this.defaults.animateOpen, this.defaults.speed, this.defaults.easing)
                    .bind("click.jGrowl", function() {
                        $(this).siblings().children('div.close').trigger("click.jGrowl");

                        if ( $.isFunction( self.defaults.closer ) ) {
                            self.defaults.closer.apply( $(this).parent()[0] , [$(this).parent()[0]] );
                        }
                    });
            };
        },

        /** Update the jGrowl Container, removing old jGrowl notifications **/
        update:     function() {
            $(this.element).find('div.jGrowl-notification:parent').each( function() {
                if ( $(this).data("jGrowl") != undefined && $(this).data("jGrowl").created != undefined && 
                     ($(this).data("jGrowl").created.getTime() + $(this).data("jGrowl").life)  < (new Date()).getTime() && 
                     $(this).data("jGrowl").sticky != true && 
                     ($(this).data("jGrowl.pause") == undefined || $(this).data("jGrowl.pause") != true) ) {

                    // Pause the notification, lest during the course of animation another close event gets called.
                    $(this).trigger('jGrowl.beforeClose');
                }
            });

            if ( this.notifications.length > 0 && 
                 (this.defaults.pool == 0 || $(this.element).find('div.jGrowl-notification:parent').size() < this.defaults.pool) )
                this.render( this.notifications.shift() );

            if ( $(this.element).find('div.jGrowl-notification:parent').size() < 2 ) {
                $(this.element).find('div.jGrowl-closer').animate(this.defaults.animateClose, this.defaults.speed, this.defaults.easing, function() {
                    $(this).remove();
                });
            }
        },

        /** Setup the jGrowl Notification Container **/
        startup:    function(e) {
            this.element = $(e).addClass('jGrowl').append('<div class="jGrowl-notification"></div>');
            this.interval = setInterval( function() { 
                $(e).data('jGrowl.instance').update(); 
            }, this.defaults.check);
            
//            if ($.browser.msie && parseInt($.browser.version) < 7 && !window["XMLHttpRequest"]) {
//                $(this.element).addClass('ie6');
//            }
        },

        /** Shutdown jGrowl, removing it and clearing the interval **/
        shutdown:   function() {
            $(this.element).removeClass('jGrowl').find('div.jGrowl-notification').remove();
            clearInterval( this.interval );
        },
        
        close:     function() {
            $(this.element).find('div.jGrowl-notification').each(function(){
                $(this).trigger('jGrowl.beforeClose');
            });
        }
    });
    
    /** Reference the Defaults Object for compatibility with older versions of jGrowl **/
    $.jGrowl.defaults = $.fn.jGrowl.prototype.defaults;

})(jQuery);
/*...
    jquery/jquery-tabswitching.js?v=2015.03
*/
(function($) {
    $.extend($.ui.tabs.prototype, {
        tabSwitching: function(options) {
            var self = this;

            function init() {
                $(window).bind('keyup', handleKeyUp);
            }

            function handleKeyUp(event) {
                if (event.altKey) {
                    var val = parseInt(String.fromCharCode(event.which), 10);

                    if ($('.ui-tabs').size() > 1) {
                        var currentTabID = $(self.element).prop('id');
                        var isInDialogBox = $('#' + currentTabID).closest('.ui-dialog-content').size() ? true : false;
                        
                        if (isInDialogBox) {
                            var dialogBoxID = $('#' + currentTabID).closest('.ui-dialog-content').prop('id');
                            
                            if (!$('#' + dialogBoxID).dialog('isOpen')) {
                                return false;
                            }
                        }
                        else if ($('.ui-dialog').is(':visible')) {
                            return false;
                        }
                    }
                    
                    if (val) {
                        val--;
                        $(self.element).tabs('option', 'active', val);
                    }
                }
            }

            init();
        }
    });
})(jQuery);
/*...
    jquery/superfish.js?v=2015.03
*/

/*
 * Superfish v1.5.8 - jQuery menu widget
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *     http://www.opensource.org/licenses/mit-license.php
 *     http://www.gnu.org/licenses/gpl.html
 *
 */

;(function($){
    $.fn.superfish = function(op){

        var sf = $.fn.superfish,
            c = sf.c,
            $arrow = $('<span class="'+c.arrowClass+'"> &#187;</span>'),
            over = function(e){
                var $$ = $(this), menu = getMenu($$);
                clearTimeout(menu.sfTimer);
                $$.showSuperfishUl().siblings().hideSuperfishUl();
            },
            out = function(e){
                var $$ = $(this), menu = getMenu($$), o = sf.op;
                var close = function(){
                    o.retainPath=($.inArray($$[0],o.$path)>-1);
                    $$.hideSuperfishUl();
                    if (o.$path.length && $$.parents('li.'+o.hoverClass).length<1){
                        o.onIdle.call();
                        $.proxy(over,o.$path,e)();
                    }
                };
                if (e.type !== 'mouseleave' && e.type !== 'focusout'){
                    close();
                } else {
                    clearTimeout(menu.sfTimer);
                    menu.sfTimer=setTimeout(close,o.delay);
                }
            },
            getMenu = function($child){
                if ($child.hasClass(c.menuClass)){
                    $.error('Superfish requires you to update to a version of hoverIntent that supports event-delegation, such as this one: https://github.com/joeldbirch/onHoverIntent');
                }
                var menu = $child.closest('.'+c.menuClass)[0];
                sf.op = sf.o[menu.serial];
                return menu;
            },
            applyHandlers = function($menu){
                var targets = 'li:has(ul)';
                if (!sf.op.useClick){
                    if ($.fn.hoverIntent && !sf.op.disableHI){
                        $menu.hoverIntent(over, out, targets);
                    } else {
                        $menu
                            .on('mouseenter', targets, over)
                            .on('mouseleave', targets, out);
                    }
                }
                $menu
                    .on('focusin', targets, over)
                    .on('focusout', targets, out)
                    .on('click', 'a', clickHandler)
                    .on('touchstart', 'a', touchHandler);
            },
            touchHandler = function(){
                var $$ = $(this);
                if (!$$.next('ul').is(':visible')){
                    $(this).data('follow', false);
                }
            },
            clickHandler = function(e){
                var $a = $(this),
                        $submenu = $a.next('ul'),
                        follow = ($a.data('follow') === false) ? false : true;

                if ( $submenu.length && (sf.op.useClick || !follow) ){
                    e.preventDefault();
                    if (!$submenu.is(':visible')){
                        $.proxy(over,$a.parent(),e)();
                    } else if (sf.op.useClick && follow) {
                        $.proxy(out,$a.parent(),e)();
                    }
                }
            },
            addArrows = function($li,o){
                if (o.autoArrows) {
                    $li.children('a').each(function() {
                        addArrow( $(this) );
                    });
                }
            },
            addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };

        return this.addClass(c.menuClass).each(function() {
            var s = this.serial = sf.o.length;
            var o = $.extend({},sf.defaults,op);
            var $$ = $(this);
            var $liHasUl = $$.find('li:has(ul)');
            o.$path = $$.find('li.'+o.pathClass).slice(0,o.pathLevels).each(function(){
                $(this).addClass(o.hoverClass+' '+c.bcClass)
                    .filter('li:has(ul)').removeClass(o.pathClass);
            });
            sf.o[s] = sf.op = o;

            addArrows($liHasUl,o);
            applyHandlers($$);

            $liHasUl.not('.'+c.bcClass).hideSuperfishUl();

            o.onInit.call(this);

        });
    };

    var sf = $.fn.superfish;
    sf.o = [];
    sf.op = {};

    sf.c = {
        bcClass     : 'sf-breadcrumb',
        menuClass   : 'sf-js-enabled',
        anchorClass : 'sf-with-ul',
        arrowClass  : 'sf-sub-indicator'
    };
    sf.defaults = {
        hoverClass    : 'sfHover',
        pathClass    : 'overideThisToUse',
        pathLevels    : 1,
        delay        : 800,
        animation    : {opacity:'show'},
        animationOut: {opacity:'hide'},
        speed        : 'normal',
        speedOut : 'fast',
        autoArrows    : true,
        disableHI    : false,        // true disables hoverIntent detection
        useClick : false,
        onInit        : function(){}, // callback functions
        onBeforeShow: function(){},
        onShow        : function(){},
        onHide        : function(){},
        onIdle        : function(){}
    };
    $.fn.extend({
        hideSuperfishUl : function(){
            var o = sf.op,
                $$ = this,
                not = (o.retainPath===true) ? o.$path : '';
            o.retainPath = false;
            var $ul = $('li.'+o.hoverClass,this).add(this).not(not)
                    .find('>ul').stop().animate(o.animationOut,o.speedOut,function(){
                        $ul = $(this);
                        $ul.parent().removeClass(o.hoverClass);
                        o.onHide.call($ul);
                        if (sf.op.useClick){
                            $$.children('a').data('follow', false);
                        }
                    });
            return this;
        },
        showSuperfishUl : function(){
            var o = sf.op,
                $$ = this,
                $ul = this.addClass(o.hoverClass)
                    .find('>ul:hidden');
            o.onBeforeShow.call($ul);
            $ul.stop().animate(o.animation,o.speed,function(){
                o.onShow.call($ul);
                $$.children('a').data('follow', true);
            });
            return this;
        }
    });

})(jQuery);
/*...
     jquery/modernizr.js?v=2015.03
*/
/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-iepp-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return C(d,b)}function C(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function B(a,b){return!!~(""+a).indexOf(b)}function A(a,b){return typeof a===b}function z(a,b){return y(o.join(a+";")+(b||""))}function y(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={},r={},s={},t=[],u=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},v,w={}.hasOwnProperty,x;!A(w,c)&&!A(w.call,c)?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],c)};var E=function(a,c){var d=a.join(""),f=c.length;u(d,function(a,c){var d=b.styleSheets[b.styleSheets.length-1],g=d.cssRules&&d.cssRules[0]?d.cssRules[0].cssText:d.cssText||"",h=a.childNodes,i={};while(f--)i[h[f].id]=h[f];e.csstransforms3d=i.csstransforms3d.offsetLeft===9,e.generatedcontent=i.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(g)&&g.indexOf(c.split(" ")[0])===0},f,c)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",o.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',m,'";visibility:hidden}'].join("")],["fontface","csstransforms3d","generatedcontent"]);q.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},q.rgba=function(){y("background-color:rgba(150,255,150,.5)");return B(k.backgroundColor,"rgba")},q.hsla=function(){y("background-color:hsla(120,40%,100%,.5)");return B(k.backgroundColor,"rgba")||B(k.backgroundColor,"hsla")},q.multiplebgs=function(){y("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(k.background)},q.backgroundsize=function(){return D("backgroundSize")},q.borderimage=function(){return D("borderImage")},q.borderradius=function(){return D("borderRadius")},q.boxshadow=function(){return D("boxShadow")},q.textshadow=function(){return b.createElement("div").style.textShadow===""},q.opacity=function(){z("opacity:.55");return/^0.55$/.test(k.opacity)},q.cssanimations=function(){return D("animationName")},q.csscolumns=function(){return D("columnCount")},q.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";y((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return B(k.backgroundImage,"gradient")},q.cssreflections=function(){return D("boxReflect")},q.csstransforms=function(){return!!C(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},q.csstransforms3d=function(){var a=!!C(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},q.csstransitions=function(){return D("transitionProperty")},q.fontface=function(){return e.fontface},q.generatedcontent=function(){return e.generatedcontent};for(var F in q)x(q,F)&&(v=F.toLowerCase(),e[v]=q[F](),t.push((e[v]?"":"no-")+v));y(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=o,e._domPrefixes=p,e.testProp=function(a){return C([a])},e.testAllProps=D,e.testStyles=u,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+t.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*...
     jquery/flatpickr.js
*/
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! flatpickr v2.3.4, @license MIT */
function Flatpickr(element, config) {
    var self = this;

    function init() {
        if (element._flatpickr) destroy(element._flatpickr);

        element._flatpickr = self;

        self.element = element;
        self.instanceConfig = config || {};

        setupFormats();

        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();

        self.isOpen = self.config.inline;
        self.changeMonth = changeMonth;
        self.clear = clear;
        self.close = close;
        self.destroy = destroy;
        self.formatDate = formatDate;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;

        self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (!self.isMobile) build();

        bind();

        if (!self.isMobile) {
            Object.defineProperty(self, "dateIsPicked", {
                set: function set(bool) {
                    if (bool) return self.calendarContainer.classList.add("dateIsPicked");
                    self.calendarContainer.classList.remove("dateIsPicked");
                }
            });
        }

        self.dateIsPicked = self.selectedDates.length > 0 || self.config.noCalendar;

        if (self.selectedDates.length) {
            if (self.config.enableTime) setHoursFromDate();
            updateValue();
        }

        if (self.config.weekNumbers) {
            self.calendarContainer.style.width = self.days.clientWidth + self.weekWrapper.clientWidth + "px";
        }

        triggerEvent("Ready");
    }

    function updateTime(e) {
        if (self.config.noCalendar && !self.selectedDates.length)
            // picking time only
            self.selectedDates = [self.now];

        timeWrapper(e);

        if (!self.selectedDates.length) return;

        if (!self.minDateHasTime || e.type !== "input" || e.target.value.length >= 2) {
            setHoursFromInputs();
            updateValue();
        } else {
            setTimeout(function () {
                setHoursFromInputs();
                updateValue();
            }, 1000);
        }
    }

    function setHoursFromInputs() {
        if (!self.config.enableTime) return;

        var hours = parseInt(self.hourElement.value, 10) || 0,
            minutes = parseInt(self.minuteElement.value, 10) || 0,
            seconds = self.config.enableSeconds ? parseInt(self.secondElement.value, 10) || 0 : 0;

        if (self.amPM) hours = hours % 12 + 12 * (self.amPM.textContent === "PM");

        if (self.minDateHasTime && compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {

            hours = Math.max(hours, self.config.minDate.getHours());
            if (hours === self.config.minDate.getHours()) minutes = Math.max(minutes, self.config.minDate.getMinutes());
        } else if (self.maxDateHasTime && compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
            hours = Math.min(hours, self.config.maxDate.getHours());
            if (hours === self.config.maxDate.getHours()) minutes = Math.min(minutes, self.config.maxDate.getMinutes());
        }

        setHours(hours, minutes, seconds);
    }

    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;

        if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }

    function setHours(hours, minutes, seconds) {
        if (self.selectedDates.length) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }

        if (!self.config.enableTime || self.isMobile) return;

        self.hourElement.value = self.pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);

        self.minuteElement.value = self.pad(minutes);

        if (!self.config.time_24hr && self.selectedDates.length) self.amPM.textContent = self.latestSelectedDateObj.getHours() >= 12 ? "PM" : "AM";

        if (self.config.enableSeconds) self.secondElement.value = self.pad(seconds);
    }

    function onYearInput(event) {
        if (event.target.value.length === 4) {
            self.currentYearElement.blur();
            handleYearChange(event.target.value);
            event.target.value = self.currentYear;
        }
    }

    function bind() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (el) {
                try {
                    self.element.querySelector("[data-" + el + "]").addEventListener("click", self[el]);
                } catch (e) {
                    //
                }
            });
        }

        if (window.document.createEvent !== undefined) {
            self.changeEvent = window.document.createEvent("HTMLEvents");
            self.changeEvent.initEvent("change", false, true);
        }

        if (self.isMobile) return setupMobile();

        self.debouncedResize = debounce(onResize, 50);
        self.triggerChange = function () {
            triggerEvent("Change");
        };
        self.debouncedChange = debounce(self.triggerChange, 300);

        if (self.config.mode === "range" && self.days) self.days.addEventListener("mouseover", onMouseOver);

        window.document.addEventListener("keydown", onKeyDown);

        if (!self.config.inline && !self.config.static) window.addEventListener("resize", self.debouncedResize);

        if (window.ontouchstart) window.document.addEventListener("touchstart", documentClick);

        window.document.addEventListener("click", documentClick);
        window.document.addEventListener("blur", documentClick);

        if (self.config.clickOpens) (self.altInput || self.input).addEventListener("focus", open);

        if (!self.config.noCalendar) {
            self.prevMonthNav.addEventListener("click", function () {
                return changeMonth(-1);
            });
            self.nextMonthNav.addEventListener("click", function () {
                return changeMonth(1);
            });

            self.currentYearElement.addEventListener("wheel", function (e) {
                return debounce(yearScroll(e), 50);
            });
            self.currentYearElement.addEventListener("focus", function () {
                self.currentYearElement.select();
            });

            self.currentYearElement.addEventListener("input", onYearInput);
            self.currentYearElement.addEventListener("increment", onYearInput);

            self.days.addEventListener("click", selectDate);
        }

        if (self.config.enableTime) {
            self.timeContainer.addEventListener("transitionend", positionCalendar);
            self.timeContainer.addEventListener("wheel", function (e) {
                return debounce(updateTime(e), 5);
            });
            self.timeContainer.addEventListener("input", updateTime);
            self.timeContainer.addEventListener("increment", updateTime);
            self.timeContainer.addEventListener("increment", self.debouncedChange);

            self.timeContainer.addEventListener("wheel", self.debouncedChange);
            self.timeContainer.addEventListener("input", self.triggerChange);

            self.hourElement.addEventListener("focus", function () {
                self.hourElement.select();
            });
            self.minuteElement.addEventListener("focus", function () {
                self.minuteElement.select();
            });

            if (self.secondElement) {
                self.secondElement.addEventListener("focus", function () {
                    self.secondElement.select();
                });
            }

            if (self.amPM) {
                self.amPM.addEventListener("click", function (e) {
                    updateTime(e);
                    self.triggerChange(e);
                });
            }
        }
    }

    function jumpToDate(jumpDate) {
        jumpDate = jumpDate ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

        try {
            self.currentYear = jumpDate.getFullYear();
            self.currentMonth = jumpDate.getMonth();
        } catch (e) {
            console.error(e.stack);
            console.warn("Invalid date supplied: " + jumpDate);
        }

        self.redraw();
    }

    function incrementNumInput(e, delta) {
        var input = e.target.parentNode.childNodes[0];
        input.value = parseInt(input.value, 10) + delta * (input.step || 1);

        try {
            input.dispatchEvent(new Event("increment", { "bubbles": true }));
        } catch (e) {
            var ev = window.document.createEvent("CustomEvent");
            ev.initCustomEvent("increment", true, true, {});
            input.dispatchEvent(ev);
        }
    }

    function createNumberInput(inputClassName) {
        var wrapper = createElement("div", "numInputWrapper"),
            numInput = createElement("input", "numInput " + inputClassName),
            arrowUp = createElement("span", "arrowUp"),
            arrowDown = createElement("span", "arrowDown");

        numInput.type = "text";
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);

        arrowUp.addEventListener("click", function (e) {
            return incrementNumInput(e, 1);
        });
        arrowDown.addEventListener("click", function (e) {
            return incrementNumInput(e, -1);
        });
        return wrapper;
    }

    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.numInputType = navigator.userAgent.indexOf("MSIE 9.0") > 0 ? "text" : "number";

        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = createElement("div", "flatpickr-innerContainer");

            if (self.config.weekNumbers) self.innerContainer.appendChild(buildWeeks());

            self.rContainer = createElement("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            self.rContainer.appendChild(buildDays());
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }

        if (self.config.enableTime) fragment.appendChild(buildTime());

        if (self.config.mode === "range") self.calendarContainer.classList.add("rangeMode");

        self.calendarContainer.appendChild(fragment);

        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            positionCalendar();

            if (self.config.appendTo && self.config.appendTo.nodeType) self.config.appendTo.appendChild(self.calendarContainer);else {
                self.element.parentNode.insertBefore(self.calendarContainer, (self.altInput || self.input).nextSibling);
            }
        } else window.document.body.appendChild(self.calendarContainer);
    }

    function createDay(className, date, dayNumber) {
        var dateIsEnabled = isEnabled(date, true),
            dayElement = createElement("span", "flatpickr-day " + className, date.getDate());

        dayElement.dateObj = date;

        if (compareDates(date, self.now) === 0) dayElement.classList.add("today");

        if (dateIsEnabled) {
            dayElement.tabIndex = 0;

            if (isDateSelected(date)) {
                dayElement.classList.add("selected");

                if (self.config.mode === "range") {
                    dayElement.classList.add(compareDates(date, self.selectedDates[0]) === 0 ? "startRange" : "endRange");
                } else self.selectedDateElem = dayElement;
            }
        } else {
            dayElement.classList.add("disabled");
            if (self.selectedDates[0] && date > self.minRangeDate && date < self.selectedDates[0]) self.minRangeDate = date;else if (self.selectedDates[0] && date < self.maxRangeDate && date > self.selectedDates[0]) self.maxRangeDate = date;
        }

        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");

            if (self.selectedDates.length === 1 && (date < self.minRangeDate || date > self.maxRangeDate)) dayElement.classList.add("notAllowed");
        }

        if (self.config.weekNumbers && className !== "prevMonthDay" && dayNumber % 7 === 1) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }

        triggerEvent("DayCreate", dayElement);

        return dayElement;
    }

    function buildDays() {
        if (!self.days) {
            self.days = createElement("div", "flatpickr-days");
            self.days.tabIndex = -1;
        }

        self.firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;

        self.prevMonthDays = self.utils.getDaysinMonth((self.currentMonth - 1 + 12) % 12);

        var daysInMonth = self.utils.getDaysinMonth(),
            days = window.document.createDocumentFragment();

        var dayNumber = self.prevMonthDays + 1 - self.firstOfMonth;

        if (self.config.weekNumbers && self.weekNumbers.firstChild) self.weekNumbers.textContent = "";

        if (self.config.mode === "range") {
            // const dateLimits = self.config.enable.length || self.config.disable.length || self.config.mixDate || self.config.maxDate;
            self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
            self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - self.firstOfMonth) % daysInMonth);
        }

        if (self.days.firstChild) self.days.textContent = "";

        // prepend days from the ending of previous month
        for (var i = 0; dayNumber <= self.prevMonthDays; i++, dayNumber++) {
            days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber));
        }

        // Start at 1 since there is no 0th day
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
            days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber));
        }

        // append days from the next month
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - self.firstOfMonth; dayNum++) {
            days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum));
        }

        self.days.appendChild(days);
        return self.days;
    }

    function buildMonthNav() {
        var monthNavFragment = window.document.createDocumentFragment();
        self.monthNav = createElement("div", "flatpickr-month");

        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;

        self.currentMonthElement = createElement("span", "cur-month");

        var yearInput = createNumberInput("cur-year");
        self.currentYearElement = yearInput.childNodes[0];
        self.currentYearElement.title = self.l10n.scrollTitle;

        if (self.config.minDate) self.currentYearElement.min = self.config.minDate.getFullYear();

        if (self.config.maxDate) {
            self.currentYearElement.max = self.config.maxDate.getFullYear();

            self.currentYearElement.disabled = self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }

        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;

        self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
        self.navigationCurrentMonth.appendChild(self.currentMonthElement);
        self.navigationCurrentMonth.appendChild(yearInput);

        monthNavFragment.appendChild(self.prevMonthNav);
        monthNavFragment.appendChild(self.navigationCurrentMonth);
        monthNavFragment.appendChild(self.nextMonthNav);
        self.monthNav.appendChild(monthNavFragment);

        updateNavigationCurrentMonth();

        return self.monthNav;
    }

    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");

        var hourInput = createNumberInput("flatpickr-hour");
        self.hourElement = hourInput.childNodes[0];

        var minuteInput = createNumberInput("flatpickr-minute");
        self.minuteElement = minuteInput.childNodes[0];

        self.hourElement.tabIndex = self.minuteElement.tabIndex = 0;
        self.hourElement.pattern = self.minuteElement.pattern = "\\d*";

        self.hourElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.defaultHour);

        self.minuteElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);

        self.hourElement.step = self.config.hourIncrement;
        self.minuteElement.step = self.config.minuteIncrement;

        self.hourElement.min = self.config.time_24hr ? 0 : 1;
        self.hourElement.max = self.config.time_24hr ? 23 : 12;

        self.minuteElement.min = 0;
        self.minuteElement.max = 59;

        self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;

        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);

        if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");

            var secondInput = createNumberInput("flatpickr-second");
            self.secondElement = secondInput.childNodes[0];

            self.secondElement.pattern = self.hourElement.pattern;
            self.secondElement.value = self.latestSelectedDateObj ? self.pad(self.latestSelectedDateObj.getSeconds()) : "00";

            self.secondElement.step = self.minuteElement.step;
            self.secondElement.min = self.minuteElement.min;
            self.secondElement.max = self.minuteElement.max;

            self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }

        if (!self.config.time_24hr) {
            // add self.amPM if appropriate
            self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = 0;
            self.timeContainer.appendChild(self.amPM);
        }

        return self.timeContainer;
    }

    function buildWeekdays() {
        if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");

        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = self.l10n.weekdays.shorthand.slice();

        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
        }

        self.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + weekdays.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t";

        return self.weekdayContainer;
    }

    /* istanbul ignore next */
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        self.weekWrapper = createElement("div", "flatpickr-weekwrapper");
        self.weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        self.weekNumbers = createElement("div", "flatpickr-weeks");
        self.weekWrapper.appendChild(self.weekNumbers);

        return self.weekWrapper;
    }

    function changeMonth(value, is_offset) {
        self.currentMonth = typeof is_offset === "undefined" || is_offset ? self.currentMonth + value : value;

        handleYearChange();
        updateNavigationCurrentMonth();
        buildDays();

        if (!self.config.noCalendar) self.days.focus();

        triggerEvent("MonthChange");
    }

    function clear(triggerChangeEvent) {
        self.input.value = "";

        if (self.altInput) self.altInput.value = "";

        if (self.mobileInput) self.mobileInput.value = "";

        self.selectedDates = [];
        self.latestSelectedDateObj = null;
        self.dateIsPicked = false;

        self.redraw();

        if (triggerChangeEvent !== false)
            // triggerChangeEvent is true (default) or an Event
            triggerEvent("Change");
    }

    function close() {
        self.isOpen = false;

        if (!self.isMobile) {
            self.calendarContainer.classList.remove("open");
            (self.altInput || self.input).classList.remove("active");
        }

        triggerEvent("Close");
    }

    function destroy(instance) {
        instance = instance || self;
        instance.clear(false);

        window.document.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("resize", instance.debouncedResize);

        window.document.removeEventListener("click", documentClick);
        window.document.removeEventListener("touchstart", documentClick);
        window.document.removeEventListener("blur", documentClick);

        if (instance.timeContainer) instance.timeContainer.removeEventListener("transitionend", positionCalendar);

        if (instance.mobileInput && instance.mobileInput.parentNode) instance.mobileInput.parentNode.removeChild(instance.mobileInput);else if (instance.calendarContainer && instance.calendarContainer.parentNode) instance.calendarContainer.parentNode.removeChild(instance.calendarContainer);

        if (instance.altInput) {
            instance.input.type = "text";
            if (instance.altInput.parentNode) instance.altInput.parentNode.removeChild(instance.altInput);
        }

        instance.input.type = instance.input._type;
        instance.input.classList.remove("flatpickr-input");
        instance.input.removeEventListener("focus", open);
        instance.input.removeAttribute("readonly");

        delete instance.input._flatpickr;
    }

    function isCalendarElem(elem) {
        var e = elem;
        while (e) {
            if (/flatpickr-day|flatpickr-calendar/.test(e.className)) return true;
            e = e.parentNode;
        }

        return false;
    }

    function documentClick(e) {
        var isInput = self.element.contains(e.target) || e.target === self.input || e.target === self.altInput || e.path && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));

        if (self.isOpen && !self.config.inline && !isCalendarElem(e.target) && !isInput) {
            e.preventDefault();
            self.close();

            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                self.clear();
                self.redraw();
            }
        }
    }

    function formatDate(frmt, dateObj) {
        if (self.config.formatDate) return self.config.formatDate(frmt, dateObj);

        var chars = frmt.split("");
        return chars.map(function (c, i) {
            return self.formats[c] && chars[i - 1] !== "\\" ? self.formats[c](dateObj) : c !== "\\" ? c : "";
        }).join("");
    }

    function handleYearChange(newYear) {
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth % 11;
            self.currentMonth = (self.currentMonth + 12) % 12;

            triggerEvent("YearChange");
        } else if (newYear && (!self.currentYearElement.min || newYear >= self.currentYearElement.min) && (!self.currentYearElement.max || newYear <= self.currentYearElement.max)) {
            self.currentYear = parseInt(newYear, 10) || self.currentYear;

            if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }

            self.redraw();
            triggerEvent("YearChange");
        }
    }

    function isEnabled(date, timeless) {
        var ltmin = compareDates(date, self.config.minDate, typeof timeless !== "undefined" ? timeless : !self.minDateHasTime) < 0;
        var gtmax = compareDates(date, self.config.maxDate, typeof timeless !== "undefined" ? timeless : !self.maxDateHasTime) > 0;

        if (ltmin || gtmax) return false;

        if (!self.config.enable.length && !self.config.disable.length) return true;

        var dateToCheck = self.parseDate(date, true); // timeless

        var bool = self.config.enable.length > 0,
            array = bool ? self.config.enable : self.config.disable;

        for (var i = 0, d; i < array.length; i++) {
            d = array[i];

            if (d instanceof Function && d(dateToCheck)) // disabled by function
                return bool;else if (d instanceof Date && d.getTime() === dateToCheck.getTime())
                // disabled by date
                return bool;else if (typeof d === "string" && self.parseDate(d, true).getTime() === dateToCheck.getTime())
                // disabled by date string
                return bool;else if ( // disabled by range
            (typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.from && d.to && dateToCheck >= d.from && dateToCheck <= d.to) return bool;
        }

        return !bool;
    }

    function onKeyDown(e) {
        if (self.isOpen) {
            switch (e.which) {
                case 13:
                    if (self.timeContainer && self.timeContainer.contains(e.target)) updateValue();else selectDate(e);

                    break;

                case 27:
                    // escape
                    self.clear();
                    self.redraw();
                    self.close();
                    break;

                case 37:
                    if (e.target !== self.input & e.target !== self.altInput) changeMonth(-1);
                    break;

                case 38:
                    e.preventDefault();

                    if (self.timeContainer && self.timeContainer.contains(e.target)) updateTime(e);else {
                        self.currentYear++;
                        self.redraw();
                    }

                    break;

                case 39:
                    if (e.target !== self.input & e.target !== self.altInput) changeMonth(1);
                    break;

                case 40:
                    e.preventDefault();
                    if (self.timeContainer && self.timeContainer.contains(e.target)) updateTime(e);else {
                        self.currentYear--;
                        self.redraw();
                    }

                    break;

                default:
                    break;
            }
        }
    }

    function onMouseOver(e) {
        if (self.selectedDates.length !== 1 || !e.target.classList.contains("flatpickr-day")) return;

        var hoverDate = e.target.dateObj,
            initialDate = self.parseDate(self.selectedDates[0], true),
            rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()),
            rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()),
            containsDisabled = false;

        for (var t = rangeStartDate; t < rangeEndDate; t += self.utils.duration.DAY) {
            if (!isEnabled(new Date(t))) {
                containsDisabled = true;
                break;
            }
        }

        for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += self.utils.duration.DAY) {
            var outOfRange = timestamp < self.minRangeDate.getTime() || timestamp > self.maxRangeDate.getTime();

            if (outOfRange) {
                self.days.childNodes[i].classList.add("notAllowed");
                self.days.childNodes[i].classList.remove("inRange", "startRange", "endRange");
                continue;
            } else if (containsDisabled && !outOfRange) continue;

            self.days.childNodes[i].classList.remove("startRange", "inRange", "endRange", "notAllowed");

            var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate),
                maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);

            e.target.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");

            if (initialDate > hoverDate && timestamp === initialDate.getTime()) self.days.childNodes[i].classList.add("endRange");else if (initialDate < hoverDate && timestamp === initialDate.getTime()) self.days.childNodes[i].classList.add("startRange");else if (timestamp > minRangeDate && timestamp < maxRangeDate) self.days.childNodes[i].classList.add("inRange");
        }
    }

    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
    }

    function open(e) {
        if (self.isMobile) {
            if (e) {
                e.preventDefault();
                e.target.blur();
            }

            setTimeout(function () {
                self.mobileInput.click();
            }, 0);

            triggerEvent("Open");
            return;
        } else if (self.isOpen || (self.altInput || self.input).disabled || self.config.inline) return;

        self.calendarContainer.classList.add("open");

        if (!self.config.static && !self.config.inline) positionCalendar();

        self.isOpen = true;

        if (!self.config.allowInput) {
            (self.altInput || self.input).blur();
            (self.config.noCalendar ? self.timeContainer : self.selectedDateElem ? self.selectedDateElem : self.days).focus();
        }

        (self.altInput || self.input).classList.add("active");
        triggerEvent("Open");
    }

    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = self.config["_" + type + "Date"] = self.parseDate(date);
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(isEnabled);
                updateValue();
            }

            if (self.days) redraw();

            if (!self.currentYearElement) return;

            if (date && dateObj instanceof Date) {
                self[type + "DateHasTime"] = dateObj.getHours() || dateObj.getMinutes() || dateObj.getSeconds();

                self.currentYearElement[type] = dateObj.getFullYear();
            } else self.currentYearElement.removeAttribute(type);

            self.currentYearElement.disabled = inverseDateObj && dateObj && inverseDateObj.getFullYear() === dateObj.getFullYear();
        };
    }

    function parseConfig() {
        var boolOpts = ["utc", "wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
        self.config = Object.create(Flatpickr.defaultConfig);

        Object.defineProperty(self.config, "minDate", {
            get: function get() {
                return this._minDate;
            },
            set: minMaxDateSetter("min")
        });

        Object.defineProperty(self.config, "maxDate", {
            get: function get() {
                return this._maxDate;
            },
            set: minMaxDateSetter("max")
        });

        var userConfig = _extends({}, self.instanceConfig, JSON.parse(JSON.stringify(self.element.dataset || {})));

        _extends(self.config, userConfig);

        for (var i = 0; i < boolOpts.length; i++) {
            self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
        }if (!userConfig.dateFormat && userConfig.enableTime) {
            self.config.dateFormat = self.config.noCalendar ? "H:i" + (self.config.enableSeconds ? ":S" : "") : Flatpickr.defaultConfig.dateFormat + " H:i" + (self.config.enableSeconds ? ":S" : "");
        }

        if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
            self.config.altFormat = self.config.noCalendar ? "h:i" + (self.config.enableSeconds ? ":S K" : " K") : Flatpickr.defaultConfig.altFormat + (" h:i" + (self.config.enableSeconds ? ":S" : "") + " K");
        }
    }

    function setupLocale() {
        if (_typeof(self.config.locale) !== "object" && typeof Flatpickr.l10ns[self.config.locale] === "undefined") console.warn("flatpickr: invalid locale " + self.config.locale);

        self.l10n = _extends(Object.create(Flatpickr.l10ns.default), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? Flatpickr.l10ns[self.config.locale] || {} : {});
    }

    function positionCalendar(e) {
        if (e && e.target !== self.timeContainer) return;

        var calendarHeight = self.calendarContainer.offsetHeight,
            calendarWidth = self.calendarContainer.offsetWidth,
            input = self.altInput || self.input,
            inputBounds = input.getBoundingClientRect(),
            distanceFromBottom = window.innerHeight - inputBounds.bottom + input.offsetHeight;

        var top = void 0;

        if (distanceFromBottom < calendarHeight + 60) {
            top = window.pageYOffset - calendarHeight + inputBounds.top - 2;
            self.calendarContainer.classList.remove("arrowTop");
            self.calendarContainer.classList.add("arrowBottom");
        } else {
            top = window.pageYOffset + input.offsetHeight + inputBounds.top + 2;
            self.calendarContainer.classList.remove("arrowBottom");
            self.calendarContainer.classList.add("arrowTop");
        }

        if (!self.config.static && !self.config.inline) {
            self.calendarContainer.style.top = top + "px";

            var left = window.pageXOffset + inputBounds.left;
            var right = window.document.body.offsetWidth - inputBounds.right;

            if (left + calendarWidth <= window.document.body.offsetWidth) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";

                self.calendarContainer.classList.remove("rightMost");
            } else {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";

                self.calendarContainer.classList.add("rightMost");
            }
        }
    }

    function redraw() {
        if (self.config.noCalendar || self.isMobile) return;

        buildWeekdays();
        updateNavigationCurrentMonth();
        buildDays();
    }

    function selectDate(e) {
        e.preventDefault();
        if (self.config.allowInput && e.which === 13 && e.target === (self.altInput || self.input)) return self.setDate((self.altInput || self.input).value), e.target.blur();

        if (!e.target.classList.contains("flatpickr-day") || e.target.classList.contains("disabled") || e.target.classList.contains("notAllowed")) return;

        var selectedDate = self.latestSelectedDateObj = new Date(e.target.dateObj.getTime());

        self.selectedDateElem = e.target;

        if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex) self.selectedDates.splice(selectedIndex, 1);else self.selectedDates.push(selectedDate);
        } else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) self.clear();

            self.selectedDates.push(selectedDate);
            self.selectedDates.sort(function (a, b) {
                return a.getTime() - b.getTime();
            });
        }

        setHoursFromInputs();

        if (selectedDate.getMonth() !== self.currentMonth && self.config.mode !== "range") {
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            updateNavigationCurrentMonth();
        }

        buildDays();

        if (self.minDateHasTime && self.config.enableTime && compareDates(selectedDate, self.config.minDate) === 0) setHoursFromDate(self.config.minDate);

        updateValue();

        setTimeout(function () {
            return self.dateIsPicked = true;
        }, 50);

        if (self.config.mode === "range" && self.selectedDates.length === 1) onMouseOver(e);

        if (self.config.mode === "single" && !self.config.enableTime) self.close();

        triggerEvent("Change");
    }

    function set(option, value) {
        self.config[option] = value;
        self.redraw();
        jumpToDate();
    }

    function setSelectedDate(inputDate) {
        if (Array.isArray(inputDate)) self.selectedDates = inputDate.map(self.parseDate);else if (inputDate) {
            switch (self.config.mode) {
                case "single":
                    self.selectedDates = [self.parseDate(inputDate)];
                    break;

                case "multiple":
                    self.selectedDates = inputDate.split("; ").map(self.parseDate);
                    break;

                case "range":
                    self.selectedDates = inputDate.split(self.l10n.rangeSeparator).map(self.parseDate);
                    break;

                default:
                    break;
            }
        }

        self.selectedDates = self.selectedDates.filter(function (d) {
            return d instanceof Date && d.getTime() && isEnabled(d, false);
        });

        self.selectedDates.sort(function (a, b) {
            return a.getTime() - b.getTime();
        });
    }

    function setDate(date, triggerChange) {
        if (!date) return self.clear();

        setSelectedDate(date);

        if (self.selectedDates.length > 0) {
            self.dateIsPicked = true;
            self.latestSelectedDateObj = self.selectedDates[0];
        } else self.latestSelectedDateObj = null;

        self.redraw();
        jumpToDate();

        setHoursFromDate();
        updateValue();

        if (triggerChange === true) triggerEvent("Change");
    }

    function setupDates() {
        function parseDateRules(arr) {
            for (var i = arr.length; i--;) {
                if (typeof arr[i] === "string" || +arr[i]) arr[i] = self.parseDate(arr[i], true);else if (arr[i] && arr[i].from && arr[i].to) {
                    arr[i].from = self.parseDate(arr[i].from);
                    arr[i].to = self.parseDate(arr[i].to);
                }
            }

            return arr.filter(function (x) {
                return x;
            }); // remove falsy values
        }

        self.selectedDates = [];
        self.now = new Date();

        setSelectedDate(self.config.defaultDate || self.input.value);

        if (self.config.disable.length) self.config.disable = parseDateRules(self.config.disable);

        if (self.config.enable.length) self.config.enable = parseDateRules(self.config.enable);

        var initialDate = self.selectedDates.length ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now ? self.config.maxDate : self.now;

        self.currentYear = initialDate.getFullYear();
        self.currentMonth = initialDate.getMonth();

        if (self.selectedDates.length) self.latestSelectedDateObj = self.selectedDates[0];

        self.minDateHasTime = self.config.minDate && (self.config.minDate.getHours() || self.config.minDate.getMinutes() || self.config.minDate.getSeconds());

        self.maxDateHasTime = self.config.maxDate && (self.config.maxDate.getHours() || self.config.maxDate.getMinutes() || self.config.maxDate.getSeconds());

        Object.defineProperty(self, "latestSelectedDateObj", {
            get: function get() {
                return self._selectedDateObj || self.selectedDates[self.selectedDates.length - 1] || null;
            },
            set: function set(date) {
                self._selectedDateObj = date;
            }
        });
    }

    function setupHelperFunctions() {
        self.utils = {
            duration: {
                DAY: 86400000
            },
            getDaysinMonth: function getDaysinMonth(month, yr) {
                month = typeof month === "undefined" ? self.currentMonth : month;

                yr = typeof yr === "undefined" ? self.currentYear : yr;

                if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;

                return self.l10n.daysInMonth[month];
            },
            monthToStr: function monthToStr(monthNumber, shorthand) {
                shorthand = typeof shorthand === "undefined" ? self.config.shorthandCurrentMonth : shorthand;

                return self.l10n.months[(shorthand ? "short" : "long") + "hand"][monthNumber];
            }
        };
    }

    /* istanbul ignore next */
    function setupFormats() {
        self.formats = {
            // weekday name, short, e.g. Thu
            D: function D(date) {
                return self.l10n.weekdays.shorthand[self.formats.w(date)];
            },

            // full month name e.g. January
            F: function F(date) {
                return self.utils.monthToStr(self.formats.n(date) - 1, false);
            },

            // hours with leading zero e.g. 03
            H: function H(date) {
                return Flatpickr.prototype.pad(date.getHours());
            },

            // day (1-30) with ordinal suffix e.g. 1st, 2nd
            J: function J(date) {
                return date.getDate() + self.l10n.ordinal(date.getDate());
            },

            // AM/PM
            K: function K(date) {
                return date.getHours() > 11 ? "PM" : "AM";
            },

            // shorthand month e.g. Jan, Sep, Oct, etc
            M: function M(date) {
                return self.utils.monthToStr(date.getMonth(), true);
            },

            // seconds 00-59
            S: function S(date) {
                return Flatpickr.prototype.pad(date.getSeconds());
            },

            // unix timestamp
            U: function U(date) {
                return date.getTime() / 1000;
            },

            // full year e.g. 2016
            Y: function Y(date) {
                return date.getFullYear();
            },

            // day in month, padded (01-30)
            d: function d(date) {
                return Flatpickr.prototype.pad(self.formats.j(date));
            },

            // hour from 1-12 (am/pm)
            h: function h(date) {
                return date.getHours() % 12 ? date.getHours() % 12 : 12;
            },

            // minutes, padded with leading zero e.g. 09
            i: function i(date) {
                return Flatpickr.prototype.pad(date.getMinutes());
            },

            // day in month (1-30)
            j: function j(date) {
                return date.getDate();
            },

            // weekday name, full, e.g. Thursday
            l: function l(date) {
                return self.l10n.weekdays.longhand[self.formats.w(date)];
            },

            // padded month number (01-12)
            m: function m(date) {
                return Flatpickr.prototype.pad(self.formats.n(date));
            },

            // the month number (1-12)
            n: function n(date) {
                return date.getMonth() + 1;
            },

            // seconds 0-59
            s: function s(date) {
                return date.getSeconds();
            },

            // number of the day of the week
            w: function w(date) {
                return date.getDay();
            },

            // last two digits of year e.g. 16 for 2016
            y: function y(date) {
                return String(self.formats.Y(date)).substring(2);
            }
        };
    }

    function setupInputs() {
        self.input = self.config.wrap ? self.element.querySelector("[data-input]") : self.element;

        if (!self.input) return console.warn("Error: invalid input element specified", self.input);

        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");

        if (self.config.altInput) {
            // replicate self.element
            self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.type = "text";

            self.input.type = "hidden";
            if (self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }

        if (!self.config.allowInput) (self.altInput || self.input).setAttribute("readonly", "readonly");
    }

    function setupMobile() {
        var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";

        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.step = "any";
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;

        self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

        if (self.selectedDates.length) {
            self.mobileInput.defaultValue = self.mobileInput.value = formatDate(self.mobileFormatStr, self.selectedDates[0]);
        }

        if (self.config.minDate) self.mobileInput.min = formatDate("Y-m-d", self.config.minDate);

        if (self.config.maxDate) self.mobileInput.max = formatDate("Y-m-d", self.config.maxDate);

        self.input.type = "hidden";
        if (self.config.altInput) self.altInput.type = "hidden";

        try {
            self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        } catch (e) {
            //
        }

        self.mobileInput.addEventListener("change", function (e) {
            self.latestSelectedDateObj = self.parseDate(e.target.value);
            self.setDate(self.latestSelectedDateObj);
            triggerEvent("Change");
            triggerEvent("Close");
        });
    }

    function toggle() {
        if (self.isOpen) self.close();else self.open();
    }

    function triggerEvent(event, data) {
        if (self.config["on" + event]) {
            var hooks = Array.isArray(self.config["on" + event]) ? self.config["on" + event] : [self.config["on" + event]];

            for (var i = 0; i < hooks.length; i++) {
                hooks[i](self.selectedDates, self.input.value, self, data);
            }
        }

        if (event === "Change") {
            if (typeof Event === "function" && Event.constructor) {
                self.input.dispatchEvent(new Event("change", { "bubbles": true }));

                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(new Event("input", { "bubbles": true }));
            } else {
                if (window.document.createEvent !== undefined) return self.input.dispatchEvent(self.changeEvent);

                self.input.fireEvent("onchange");
            }
        }
    }

    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
        }

        return false;
    }

    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
        return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
    }

    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav) return;

        self.currentMonthElement.textContent = self.utils.monthToStr(self.currentMonth) + " ";
        self.currentYearElement.value = self.currentYear;

        if (self.config.minDate) {
            var hidePrevMonthArrow = self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear();

            self.prevMonthNav.style.display = hidePrevMonthArrow ? "none" : "block";
        } else self.prevMonthNav.style.display = "block";

        if (self.config.maxDate) {
            var hideNextMonthArrow = self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear();

            self.nextMonthNav.style.display = hideNextMonthArrow ? "none" : "block";
        } else self.nextMonthNav.style.display = "block";
    }

    function updateValue() {
        if (!self.selectedDates.length) return self.clear();

        if (self.isMobile) {
            self.mobileInput.value = self.selectedDates.length ? formatDate(self.mobileFormatStr, self.latestSelectedDateObj) : "";
        }

        var joinChar = self.config.mode !== "range" ? "; " : self.l10n.rangeSeparator;

        self.input.value = self.selectedDates.map(function (dObj) {
            return formatDate(self.config.dateFormat, dObj);
        }).join(joinChar);

        if (self.config.altInput) {
            self.altInput.value = self.selectedDates.map(function (dObj) {
                return formatDate(self.config.altFormat, dObj);
            }).join(joinChar);
        }

        triggerEvent("ValueUpdate");
    }

    function yearScroll(e) {
        e.preventDefault();

        var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)),
            newYear = parseInt(e.target.value, 10) + delta;

        handleYearChange(newYear);
        e.target.value = self.currentYear;
    }

    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";

        e.className = className;

        if (content) e.textContent = content;

        return e;
    }

    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        var timeout = void 0;
        return function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var context = this;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (immediate && !timeout) func.apply(context, args);
        };
    }

    function compareDates(date1, date2, timeless) {
        if (!(date1 instanceof Date) || !(date2 instanceof Date)) return false;

        if (timeless !== false) {
            return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
        }

        return date1.getTime() - date2.getTime();
    }

    function timeWrapper(e) {
        e.preventDefault();
        if (e && ((e.target.value || e.target.textContent).length >= 2 || // typed two digits
        e.type !== "keydown" && e.type !== "input" // scroll event
        )) e.target.blur();

        if (self.amPM && e.target === self.amPM) return e.target.textContent = ["AM", "PM"][e.target.textContent === "AM" | 0];

        var min = Number(e.target.min),
            max = Number(e.target.max),
            step = Number(e.target.step),
            curValue = parseInt(e.target.value, 10),
            delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));

        var newValue = Number(curValue);

        switch (e.type) {
            case "wheel":
                newValue = curValue + step * delta;
                break;

            case "keydown":
                newValue = curValue + step * (e.which === 38 ? 1 : -1);
                break;
        }

        if (e.type !== "input" || e.target.value.length === 2) {
            if (newValue < min) {
                newValue = max + newValue + (e.target !== self.hourElement) + (e.target === self.hourElement && !self.amPM);
            } else if (newValue > max) {
                newValue = e.target === self.hourElement ? newValue - max - !self.amPM : min;
            }

            if (self.amPM && e.target === self.hourElement && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";

            e.target.value = self.pad(newValue);
        } else e.target.value = newValue;
    }

    init();
    return self;
}

/* istanbul ignore next */
Flatpickr.defaultConfig = {

    mode: "single",

    /* if true, dates will be parsed, formatted, and displayed in UTC.
 preloading date strings w/ timezones is recommended but not necessary */
    utc: false,

    // wrap: see https://chmln.github.io/flatpickr/#strap
    wrap: false,

    // enables week numbers
    weekNumbers: false,

    // allow manual datetime input
    allowInput: false,

    /*
     clicking on input opens the date(time)picker.
     disable if you wish to open the calendar manually with .open()
 */
    clickOpens: true,

    // display time picker in 24 hour mode
    time_24hr: false,

    // enables the time picker functionality
    enableTime: false,

    // noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
    noCalendar: false,

    // more date format chars at https://chmln.github.io/flatpickr/#dateformat
    dateFormat: "Y-m-d",

    // altInput - see https://chmln.github.io/flatpickr/#altinput
    altInput: false,

    // the created altInput element will have this class.
    altInputClass: "flatpickr-input form-control input",

    // same as dateFormat, but for altInput
    altFormat: "F j, Y", // defaults to e.g. June 10, 2016

    // defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
    defaultDate: null,

    // the minimum date that user can pick (inclusive)
    minDate: null,

    // the maximum date that user can pick (inclusive)
    maxDate: null,

    // dateparser that transforms a given string to a date object
    parseDate: null,

    // dateformatter that transforms a given date object to a string, according to passed format
    formatDate: null,

    getWeek: function getWeek(givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);

        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        var week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    },

    // see https://chmln.github.io/flatpickr/#disable
    enable: [],

    // see https://chmln.github.io/flatpickr/#disable
    disable: [],

    // display the short version of month names - e.g. Sep instead of September
    shorthandCurrentMonth: false,

    // displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
    inline: false,

    // position calendar inside wrapper and next to the input element
    // leave at false unless you know what you"re doing
    static: false,

    // DOM node to append the calendar to in *static* mode
    appendTo: null,

    // code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",

    // enables seconds in the time picker
    enableSeconds: false,

    // step size used when scrolling/incrementing the hour element
    hourIncrement: 1,

    // step size used when scrolling/incrementing the minute element
    minuteIncrement: 5,

    // initial value in the hour element
    defaultHour: 12,

    // initial value in the minute element
    defaultMinute: 0,

    // disable native mobile datetime input support
    disableMobile: false,

    // default locale
    locale: "default",

    // onChange callback when user selects a date or time
    onChange: null, // function (dateObj, dateStr) {}

    // called every time calendar is opened
    onOpen: null, // function (dateObj, dateStr) {}

    // called every time calendar is closed
    onClose: null, // function (dateObj, dateStr) {}

    // called after calendar is ready
    onReady: null, // function (dateObj, dateStr) {}

    onValueUpdate: null,

    onDayCreate: null
};

/* istanbul ignore next */
Flatpickr.l10ns = {
    en: {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function ordinal(nth) {
            var s = nth % 100;
            if (s > 3 && s < 21) return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle"
    }
};

Flatpickr.l10ns.default = Object.create(Flatpickr.l10ns.en);
Flatpickr.localize = function (l10n) {
    return _extends(Flatpickr.l10ns.default, l10n || {});
};
Flatpickr.setDefaults = function (config) {
    return _extends(Flatpickr.defaultConfig, config || {});
};

Flatpickr.prototype = {
    pad: function pad(number) {
        return ("0" + number).slice(-2);
    },
    parseDate: function parseDate(date, timeless) {
        if (!date) return null;

        var dateTimeRegex = /(\d+)/g,
            timeRegex = /^(\d{1,2})[:\s](\d\d)?[:\s]?(\d\d)?\s?(a|p)?/i,
            timestamp = /^(\d+)$/g,
            date_orig = date;

        if (date.toFixed || timestamp.test(date)) // timestamp
            date = new Date(date);else if (typeof date === "string") {
            date = date.trim();

            if (date === "today") {
                date = new Date();
                timeless = true;
            } else if (this.config && this.config.parseDate) date = this.config.parseDate(date);else if (timeRegex.test(date)) {
                // time picker
                var m = date.match(timeRegex),
                    hours = !m[4] ? m[1] // military time, no conversion needed
                : m[1] % 12 + (m[4].toLowerCase() === "p" ? 12 : 0); // am/pm

                date = new Date();
                date.setHours(hours, m[2] || 0, m[3] || 0);
            } else if (/Z$/.test(date) || /GMT$/.test(date)) // datestrings w/ timezone
                date = new Date(date);else if (dateTimeRegex.test(date) && /^[0-9]/.test(date)) {
                var d = date.match(dateTimeRegex);
                date = new Date(d[0] + "/" + (d[1] || 1) + "/" + (d[2] || 1) + " " + (d[3] || 0) + ":" + (d[4] || 0) + ":" + (d[5] || 0));
            } else // fallback
                date = new Date(date);
        } else if (date instanceof Date) date = new Date(date.getTime()); // create a copy

        if (!(date instanceof Date)) {
            console.warn("flatpickr: invalid date " + date_orig);
            console.info(this.element);
            return null;
        }

        if (this.config && this.config.utc && !date.fp_isUTC) date = date.fp_toUTC();

        if (timeless === true) date.setHours(0, 0, 0, 0);

        return date;
    }
};

function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice.call(nodeList); // static list
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        try {
            nodes[i]._flatpickr = new Flatpickr(nodes[i], config || {});
            instances.push(nodes[i]._flatpickr);
        } catch (e) {
            console.warn(e, e.stack);
        }
    }

    return instances.length === 1 ? instances[0] : instances;
}

if (typeof HTMLElement !== "undefined") {
    // browser env
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };

    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}

function flatpickr(selector, config) {
    return _flatpickr(window.document.querySelectorAll(selector), config);
}

if (typeof jQuery !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}

Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
};

Date.prototype.fp_isUTC = false;
Date.prototype.fp_toUTC = function () {
    var newDate = new Date(this.getUTCFullYear(), this.getUTCMonth(), this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds());

    newDate.fp_isUTC = true;
    return newDate;
};

// IE9 classList polyfill
/* istanbul ignore next */
if (!window.document.documentElement.classList && Object.defineProperty && typeof HTMLElement !== "undefined") {
    Object.defineProperty(HTMLElement.prototype, "classList", {
        get: function get() {
            var self = this;
            function update(fn) {
                return function (value) {
                    var classes = self.className.split(/\s+/),
                        index = classes.indexOf(value);

                    fn(classes, index, value);
                    self.className = classes.join(" ");
                };
            }

            var ret = {
                add: update(function (classes, index, value) {
                    if (!~index) classes.push(value);
                }),

                remove: update(function (classes, index) {
                    if (~index) classes.splice(index, 1);
                }),

                toggle: update(function (classes, index, value) {
                    if (~index) classes.splice(index, 1);else classes.push(value);
                }),

                contains: function contains(value) {
                    return !!~self.className.split(/\s+/).indexOf(value);
                },

                item: function item(i) {
                    return self.className.split(/\s+/)[i] || null;
                }
            };

            Object.defineProperty(ret, "length", {
                get: function get() {
                    return self.className.split(/\s+/).length;
                }
            });

            return ret;
        }
    });
}

if (typeof module !== "undefined") module.exports = Flatpickr;

/*...
     jquery/clipboard.min.js
*/
/*!
 * clipboard.js v1.5.10
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(c,a){if(!n[c]){if(!e[c]){var s="function"==typeof require&&require;if(!a&&s)return s(c,!0);if(r)return r(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[c]={exports:{}};e[c][0].call(u.exports,function(t){var n=e[c][1][t];return i(n?n:t)},u,u.exports,t,e,n,o)}return n[c].exports}for(var r="function"==typeof require&&require,c=0;c<o.length;c++)i(o[c]);return i}({1:[function(t,e,n){var o=t("matches-selector");e.exports=function(t,e,n){for(var i=n?t:t.parentNode;i&&i!==document;){if(o(i,e))return i;i=i.parentNode}}},{"matches-selector":5}],2:[function(t,e,n){function o(t,e,n,o,r){var c=i.apply(this,arguments);return t.addEventListener(n,c,r),{destroy:function(){t.removeEventListener(n,c,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var r=t("closest");e.exports=o},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!a.string(e))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(t))return i(t,e,n);if(a.nodeList(t))return r(t,e,n);if(a.string(t))return c(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function c(t,e,n){return s(document.body,t,e,n)}var a=t("./is"),s=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t,e){if(r)return r.call(t,e);for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0;return!1}var i=Element.prototype,r=i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=o},{}],6:[function(t,e,n){function o(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],7:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;i>o;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,c=o.length;c>r;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if("undefined"!=typeof o)r(n,e("select"));else{var c={exports:{}};r(c,i.select),i.clipboardAction=c.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){this.text?this.selectFake():this.target&&this.selectTarget()},t.prototype.selectFake=function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return e.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="fixed",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=(0,i.default)(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},c(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==("undefined"==typeof e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=a})},{select:6}],9:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var c={exports:{}};r(c,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=c.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),u=i(n),f=i(o),d=function(t){function e(n,o){r(this,e);var i=c(this,t.call(this));return i.resolveOptions(o),i.listenClick(n),i}return a(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return s("action",e)},e.prototype.defaultTarget=function t(e){var n=s("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return s("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(u.default);t.exports=d})},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)});

/*...
     jquery/jquery.printElement.min.js
*/
/// <reference path="http://code.jquery.com/jquery-1.4.1-vsdoc.js" />
/*
* Print Element Plugin 1.2
*
* Copyright (c) 2010 Erik Zaadi
*
* Inspired by PrintArea (http://plugins.jquery.com/project/PrintArea) and
* http://stackoverflow.com/questions/472951/how-do-i-print-an-iframe-from-javascript-in-safari-chrome
*
*  Home Page : http://projects.erikzaadi/jQueryPlugins/jQuery.printElement 
*  Issues (bug reporting) : http://github.com/erikzaadi/jQueryPlugins/issues/labels/printElement
*  jQuery plugin page : http://plugins.jquery.com/project/printElement 
*  
*  Thanks to David B (http://github.com/ungenio) and icgJohn (http://www.blogger.com/profile/11881116857076484100)
*  For their great contributions!
* 
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*   
*   Note, Iframe Printing is not supported in Opera and Chrome 3.0, a popup window will be shown instead
*/
;(function(g){function k(c){c&&c.printPage?c.printPage():setTimeout(function(){k(c)},50)}function l(c){c=a(c);a(":checked",c).each(function(){this.setAttribute("checked","checked")});a("input[type='text']",c).each(function(){this.setAttribute("value",a(this).val())});a("select",c).each(function(){var b=a(this);a("option",b).each(function(){b.val()==a(this).val()&&this.setAttribute("selected","selected")})});a("textarea",c).each(function(){var b=a(this).attr("value");if(a.browser.b&&this.firstChild)this.firstChild.textContent=
b;else this.innerHTML=b});return a("<div></div>").append(c.clone()).html()}function m(c,b){var i=a(c);c=l(c);var d=[];d.push("<html><head><title>"+b.pageTitle+"</title>");if(b.overrideElementCSS){if(b.overrideElementCSS.length>0)for(var f=0;f<b.overrideElementCSS.length;f++){var e=b.overrideElementCSS[f];typeof e=="string"?d.push('<link type="text/css" rel="stylesheet" href="'+e+'" >'):d.push('<link type="text/css" rel="stylesheet" href="'+e.href+'" media="'+e.media+'" >')}}else a("link",j).filter(function(){return a(this).attr("rel").toLowerCase()==
"stylesheet"}).each(function(){d.push('<link type="text/css" rel="stylesheet" href="'+a(this).attr("href")+'" media="'+a(this).attr("media")+'" >')});d.push('<base href="'+(g.location.protocol+"//"+g.location.hostname+(g.location.port?":"+g.location.port:"")+g.location.pathname)+'" />');d.push('</head><body style="'+b.printBodyOptions.styleToAdd+'" class="'+b.printBodyOptions.classNameToAdd+'">');d.push('<div class="'+i.attr("class")+'">'+c+"</div>");d.push('<script type="text/javascript">function printPage(){focus();print();'+
(!a.browser.opera&&!b.leaveOpen&&b.printMode.toLowerCase()=="popup"?"close();":"")+"}<\/script>");d.push("</body></html>");return d.join("")}var j=g.document,a=g.jQuery;a.fn.printElement=function(c){var b=a.extend({},a.fn.printElement.defaults,c);if(b.printMode=="iframe")if(a.browser.opera||/chrome/.test(navigator.userAgent.toLowerCase()))b.printMode="popup";a("[id^='printElement_']").remove();return this.each(function(){var i=a.a?a.extend({},b,a(this).data()):b,d=a(this);d=m(d,i);var f=null,e=null;
if(i.printMode.toLowerCase()=="popup"){f=g.open("about:blank","printElementWindow","width=650,height=440,scrollbars=yes");e=f.document}else{f="printElement_"+Math.round(Math.random()*99999).toString();var h=j.createElement("IFRAME");a(h).attr({style:i.iframeElementOptions.styleToAdd,id:f,className:i.iframeElementOptions.classNameToAdd,frameBorder:0,scrolling:"no",src:"about:blank"});j.body.appendChild(h);e=h.contentWindow||h.contentDocument;if(e.document)e=e.document;h=j.frames?j.frames[f]:j.getElementById(f);
f=h.contentWindow||h}focus();e.open();e.write(d);e.close();k(f)})};a.fn.printElement.defaults={printMode:"iframe",pageTitle:"",overrideElementCSS:null,printBodyOptions:{styleToAdd:"padding:10px;margin:10px;",classNameToAdd:""},leaveOpen:false,iframeElementOptions:{styleToAdd:"border:none;position:absolute;width:0px;height:0px;bottom:0px;left:0px;",classNameToAdd:""}};a.fn.printElement.cssElement={href:"",media:""}})(window);
/*...
     tablesorter1/jquery.tablesorter1.min.js?v=2015.03
*/
/*
 * 
 * TableSorter 2.0 - Client-side table sorting with ease!
 * Version 2.0.5b
 * @requires jQuery v1.2.3
 * 
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 */
/**
 * 
 * @description Create a sortable table with multi-column sorting capabilitys
 * 
 * @example $('table').tablesorter1();
 * @desc Create a simple tablesorter1 interface.
 * 
 * @example $('table').tablesorter1({ sortList:[[0,0],[1,0]] });
 * @desc Create a tablesorter1 interface and sort on the first and secound column column headers.
 * 
 * @example $('table').tablesorter1({ headers: { 0: { sorter: false}, 1: {sorter: false} } });
 *          
 * @desc Create a tablesorter1 interface and disableing the first and second  column headers.
 *      
 * 
 * @example $('table').tablesorter1({ headers: { 0: {sorter:"integer"}, 1: {sorter:"currency"} } });
 * 
 * @desc Create a tablesorter1 interface and set a column parser for the first
 *       and second column.
 * 
 * 
 * @param Object
 *            settings An object literal containing key/value pairs to provide
 *            optional settings.
 * 
 * 
 * @option String cssHeader (optional) A string of the class name to be appended
 *         to sortable tr elements in the thead of the table. Default value:
 *         "header"
 * 
 * @option String cssAsc (optional) A string of the class name to be appended to
 *         sortable tr elements in the thead on a ascending sort. Default value:
 *         "headerSortUp"
 * 
 * @option String cssDesc (optional) A string of the class name to be appended
 *         to sortable tr elements in the thead on a descending sort. Default
 *         value: "headerSortDown"
 * 
 * @option String sortInitialOrder (optional) A string of the inital sorting
 *         order can be asc or desc. Default value: "asc"
 * 
 * @option String sortMultisortKey (optional) A string of the multi-column sort
 *         key. Default value: "shiftKey"
 * 
 * @option String textExtraction (optional) A string of the text-extraction
 *         method to use. For complex html structures inside td cell set this
 *         option to "complex", on large tables the complex option can be slow.
 *         Default value: "simple"
 * 
 * @option Object headers (optional) An array containing the forces sorting
 *         rules. This option let's you specify a default sorting rule. Default
 *         value: null
 * 
 * @option Array sortList (optional) An array containing the forces sorting
 *         rules. This option let's you specify a default sorting rule. Default
 *         value: null
 * 
 * @option Array sortForce (optional) An array containing forced sorting rules.
 *         This option let's you specify a default sorting rule, which is
 *         prepended to user-selected rules. Default value: null
 * 
 * @option Boolean sortLocaleCompare (optional) Boolean flag indicating whatever
 *         to use String.localeCampare method or not. Default set to true.
 * 
 * 
 * @option Array sortAppend (optional) An array containing forced sorting rules.
 *         This option let's you specify a default sorting rule, which is
 *         appended to user-selected rules. Default value: null
 * 
 * @option Boolean widthFixed (optional) Boolean flag indicating if tablesorter1
 *         should apply fixed widths to the table columns. This is usefull when
 *         using the pager companion plugin. This options requires the dimension
 *         jquery plugin. Default value: false
 * 
 * @option Boolean cancelSelection (optional) Boolean flag indicating if
 *         tablesorter1 should cancel selection of the table headers text.
 *         Default value: true
 * 
 * @option Boolean debug (optional) Boolean flag indicating if tablesorter1
 *         should display debuging information usefull for development.
 * 
 * @type jQuery
 * 
 * @name tablesorter1
 * 
 * @cat Plugins/tablesorter1
 * 
 * @author Christian Bach/christian.bach@polyester.se
 */

(function ($) {
    $.extend({
        tablesorter1: new
        function () {

            var parsers = [],
                widgets = [];

            this.defaults = {
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown",
                cssChildRow: "expand-child",
                sortInitialOrder: "asc",
                sortMultiSortKey: "shiftKey",
                sortForce: null,
                sortAppend: null,
                sortLocaleCompare: true,
                textExtraction: "simple",
                parsers: {}, widgets: [],
                widgetZebra: {
                    css: ["even", "odd"]
                }, headers: {}, widthFixed: false,
                cancelSelection: true,
                sortList: [],
                headerList: [],
                dateFormat: "us",
                decimal: '/\.|\,/g',
                onRenderHeader: null,
                selectorHeaders: 'thead th',
                debug: false,
                initialized: false
            };

            /* debuging utils */

            function benchmark(s, d) {
                log(s + "," + (new Date().getTime() - d.getTime()) + "ms");
            }

            this.benchmark = benchmark;

            function log(s) {
                if (typeof console != "undefined" && typeof console.debug != "undefined") {
                    console.log(s);
                } else {
                    alert(s);
                }
            }

            /* parsers utils */

            function buildParserCache(table, $headers) {

                if (table.config.debug) {
                    var parsersDebug = "";
                }

                if (table.tBodies.length == 0) return; // In the case of empty tables
                var rows = table.tBodies[0].rows;

                if (rows[0]) {

                    var list = [],
                        cells = rows[0].cells,
                        l = cells.length;

                    for (var i = 0; i < l; i++) {

                        var p = false;

                        if ($.metadata && ($($headers[i]).metadata() && $($headers[i]).metadata().sorter)) {

                            p = getParserById($($headers[i]).metadata().sorter);

                        } else if ((table.config.headers[i] && table.config.headers[i].sorter)) {

                            p = getParserById(table.config.headers[i].sorter);
                        }
                        if (!p) {

                            p = detectParserForColumn(table, rows, -1, i);
                        }

                        if (table.config.debug) {
                            parsersDebug += "column:" + i + " parser:" + p.id + "\n";
                        }

                        list.push(p);
                    }
                }

                if (table.config.debug) {
                    log(parsersDebug);
                }

                return list;
            };

            function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                var l = parsers.length,
                    node = false,
                    nodeValue = false,
                    keepLooking = true;
                while (nodeValue == '' && keepLooking) {
                    rowIndex++;
                    if (rows[rowIndex]) {
                        node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                        nodeValue = trimAndGetNodeText(table.config, node);
                        if (table.config.debug) {
                            log('Checking if value was empty on row:' + rowIndex);
                        }
                    } else {
                        keepLooking = false;
                    }
                }
                for (var i = 1; i < l; i++) {
                    if (parsers[i].is(nodeValue, table, node)) {
                        return parsers[i];
                    }
                }
                // 0 is always the generic parser (text)
                return parsers[0];
            }

            function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
                return rows[rowIndex].cells[cellIndex];
            }

            function trimAndGetNodeText(config, node) {
                return $.trim(getElementText(config, node));
            }

            function getParserById(name) {
                var l = parsers.length;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == name.toLowerCase()) {
                        return parsers[i];
                    }
                }
                return false;
            }

            /* utils */

            function buildCache(table) {

                if (table.config.debug) {
                    var cacheTime = new Date();
                }

                var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0,
                    totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0,
                    parsers = table.config.parsers,
                    cache = {
                        row: [],
                        normalized: []
                    };

                for (var i = 0; i < totalRows; ++i) {

                    /** Add the table data to main data array */
                    var c = $(table.tBodies[0].rows[i]),
                        cols = [];

                    // if this is a child row, add it to the last row's children and
                    // continue to the next row
                    if (c.hasClass(table.config.cssChildRow)) {
                        cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);
                        // go to the next for loop
                        continue;
                    }

                    cache.row.push(c);

                    for (var j = 0; j < totalCells; ++j) {
                        cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j]));
                    }

                    cols.push(cache.normalized.length); // add position for rowCache
                    cache.normalized.push(cols);
                    cols = null;
                };

                if (table.config.debug) {
                    benchmark("Building cache for " + totalRows + " rows:", cacheTime);
                }

                return cache;
            };

            function getElementText(config, node) {

                var text = "";

                if (!node) return "";

                if (!config.supportsTextContent) config.supportsTextContent = node.textContent || false;

                if (config.textExtraction == "simple") {
                    if (config.supportsTextContent) {
                        text = node.textContent;
                    } else {
                        if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                            text = node.childNodes[0].innerHTML;
                        } else {
                            text = node.innerHTML;
                        }
                    }
                } else {
                    if (typeof(config.textExtraction) == "function") {
                        text = config.textExtraction(node);
                    } else {
                        text = $(node).text();
                    }
                }
                return text;
            }

            function appendToTable(table, cache) {

                if (table.config.debug) {
                    var appendTime = new Date()
                }

                var c = cache,
                    r = c.row,
                    n = c.normalized,
                    totalRows = n.length,
                    checkCell = (n[0].length - 1),
                    tableBody = $(table.tBodies[0]),
                    rows = [];


                for (var i = 0; i < totalRows; i++) {
                    var pos = n[i][checkCell];

                    rows.push(r[pos]);

                    if (!table.config.appender) {

                        //var o = ;
                        var l = r[pos].length;
                        for (var j = 0; j < l; j++) {
                            tableBody[0].appendChild(r[pos][j]);
                        }

                        // 
                    }
                }



                if (table.config.appender) {

                    table.config.appender(table, rows);
                }

                rows = null;

                if (table.config.debug) {
                    benchmark("Rebuilt table:", appendTime);
                }

                // apply table widgets
                applyWidget(table);

                // trigger sortend
                setTimeout(function () {
                    $(table).trigger("sortEnd");
                }, 0);

            };

            function buildHeaders(table) {

                if (table.config.debug) {
                    var time = new Date();
                }

                var meta = ($.metadata) ? true : false;
                
                var header_index = computeTableHeaderCellIndexes(table);

                $tableHeaders = $(table.config.selectorHeaders, table).each(function (index) {

                    this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                    // this.column = index;
                    this.order = formatSortingOrder(table.config.sortInitialOrder);
                    
                    
                    this.count = this.order;

                    if (checkHeaderMetadata(this) || checkHeaderOptions(table, index)) this.sortDisabled = true;
                    if (checkHeaderOptionsSortingLocked(table, index)) this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);

                    if (!this.sortDisabled) {
                        var $th = $(this).addClass(table.config.cssHeader);
                        if (table.config.onRenderHeader) table.config.onRenderHeader.apply($th);
                    }

                    // add cell to headerList
                    table.config.headerList[index] = this;
                });

                if (table.config.debug) {
                    benchmark("Built headers:", time);
                    log($tableHeaders);
                }

                return $tableHeaders;

            };

            // from:
            // http://www.javascripttoolbox.com/lib/table/examples.php
            // http://www.javascripttoolbox.com/temp/table_cellindex.html


            function computeTableHeaderCellIndexes(t) {
                var matrix = [];
                var lookup = {};
                var thead = t.getElementsByTagName('THEAD')[0];
                var trs = thead.getElementsByTagName('TR');

                for (var i = 0; i < trs.length; i++) {
                    var cells = trs[i].cells;
                    for (var j = 0; j < cells.length; j++) {
                        var c = cells[j];

                        var rowIndex = c.parentNode.rowIndex;
                        var cellId = rowIndex + "-" + c.cellIndex;
                        var rowSpan = c.rowSpan || 1;
                        var colSpan = c.colSpan || 1
                        var firstAvailCol;
                        if (typeof(matrix[rowIndex]) == "undefined") {
                            matrix[rowIndex] = [];
                        }
                        // Find first available column in the first row
                        for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
                            if (typeof(matrix[rowIndex][k]) == "undefined") {
                                firstAvailCol = k;
                                break;
                            }
                        }
                        lookup[cellId] = firstAvailCol;
                        for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
                            if (typeof(matrix[k]) == "undefined") {
                                matrix[k] = [];
                            }
                            var matrixrow = matrix[k];
                            for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
                                matrixrow[l] = "x";
                            }
                        }
                    }
                }
                return lookup;
            }

            function checkCellColSpan(table, rows, row) {
                var arr = [],
                    r = table.tHead.rows,
                    c = r[row].cells;

                for (var i = 0; i < c.length; i++) {
                    var cell = c[i];

                    if (cell.colSpan > 1) {
                        arr = arr.concat(checkCellColSpan(table, headerArr, row++));
                    } else {
                        if (table.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) {
                            arr.push(cell);
                        }
                        // headerArr[row] = (i+row);
                    }
                }
                return arr;
            };

            function checkHeaderMetadata(cell) {
                if (($.metadata) && ($(cell).metadata().sorter === false)) {
                    return true;
                };
                return false;
            }

            function checkHeaderOptions(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].sorter === false)) {
                    return true;
                };
                return false;
            }
            
             function checkHeaderOptionsSortingLocked(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].lockedOrder)) return table.config.headers[i].lockedOrder;
                return false;
            }
            
            function applyWidget(table) {
                var c = table.config.widgets;
                var l = c.length;
                for (var i = 0; i < l; i++) {

                    getWidgetById(c[i]).format(table);
                }

            }

            function getWidgetById(name) {
                var l = widgets.length;
                for (var i = 0; i < l; i++) {
                    if (widgets[i].id.toLowerCase() == name.toLowerCase()) {
                        return widgets[i];
                    }
                }
            };

            function formatSortingOrder(v) {
                if (typeof(v) != "Number") {
                    return (v.toLowerCase() == "desc") ? 1 : 0;
                } else {
                    return (v == 1) ? 1 : 0;
                }
            }

            function isValueInArray(v, a) {
                var l = a.length;
                for (var i = 0; i < l; i++) {
                    if (a[i][0] == v) {
                        return true;
                    }
                }
                return false;
            }

            function setHeadersCss(table, $headers, list, css) {
                // remove all header information
                $headers.removeClass(css[0]).removeClass(css[1]);

                var h = [];
                $headers.each(function (offset) {
                    if (!this.sortDisabled) {
                        h[this.column] = $(this);
                    }
                });

                var l = list.length;
                for (var i = 0; i < l; i++) {
                    h[list[i][0]].addClass(css[list[i][1]]);
                }
            }

            function fixColumnWidth(table, $headers) {
                var c = table.config;
                if (c.widthFixed) {
                    var colgroup = $('<colgroup>');
                    $("tr:first td", table.tBodies[0]).each(function () {
                        colgroup.append($('<col>').css('width', $(this).width()));
                    });
                    $(table).prepend(colgroup);
                };
            }

            function updateHeaderSortCount(table, sortList) {
                var c = table.config,
                    l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var s = sortList[i],
                        o = c.headerList[s[0]];
                    o.count = s[1];
                    o.count++;
                }
            }

            /* sorting methods */

            function multisort(table, sortList, cache) {

                if (table.config.debug) {
                    var sortTime = new Date();
                }

                var dynamicExp = "var sortWrapper = function(a,b) {",
                    l = sortList.length;

                // TODO: inline functions.
                for (var i = 0; i < l; i++) {

                    var c = sortList[i][0];
                    var order = sortList[i][1];
                    // var s = (getCachedSortType(table.config.parsers,c) == "text") ?
                    // ((order == 0) ? "sortText" : "sortTextDesc") : ((order == 0) ?
                    // "sortNumeric" : "sortNumericDesc");
                    // var s = (table.config.parsers[c].type == "text") ? ((order == 0)
                    // ? makeSortText(c) : makeSortTextDesc(c)) : ((order == 0) ?
                    // makeSortNumeric(c) : makeSortNumericDesc(c));
                    var s = (table.config.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c)) : ((order == 0) ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c));
                    var e = "e" + i;

                    dynamicExp += "var " + e + " = " + s; // + "(a[" + c + "],b[" + c
                    // + "]); ";
                    dynamicExp += "if(" + e + ") { return " + e + "; } ";
                    dynamicExp += "else { ";

                }

                // if value is the same keep orignal order
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";

                for (var i = 0; i < l; i++) {
                    dynamicExp += "}; ";
                }

                dynamicExp += "return 0; ";
                dynamicExp += "}; ";

                if (table.config.debug) {
                    benchmark("Evaling expression:" + dynamicExp, new Date());
                }

                eval(dynamicExp);

                cache.normalized.sort(sortWrapper);

                if (table.config.debug) {
                    benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime);
                }

                return cache;
            };

            function makeSortFunction(type, direction, index) {
                var a = "a[" + index + "]",
                    b = "b[" + index + "]";
                if (type == 'text' && direction == 'asc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
                } else if (type == 'text' && direction == 'desc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
                } else if (type == 'numeric' && direction == 'asc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
                } else if (type == 'numeric' && direction == 'desc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
                }
            };

            function makeSortText(i) {
                return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));";
            };

            function makeSortTextDesc(i) {
                return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));";
            };

            function makeSortNumeric(i) {
                return "a[" + i + "]-b[" + i + "];";
            };

            function makeSortNumericDesc(i) {
                return "b[" + i + "]-a[" + i + "];";
            };

            function sortText(a, b) {
                if (table.config.sortLocaleCompare) return a.localeCompare(b);
                return ((a < b) ? -1 : ((a > b) ? 1 : 0));
            };

            function sortTextDesc(a, b) {
                if (table.config.sortLocaleCompare) return b.localeCompare(a);
                return ((b < a) ? -1 : ((b > a) ? 1 : 0));
            };

            function sortNumeric(a, b) {
                return a - b;
            };

            function sortNumericDesc(a, b) {
                return b - a;
            };

            function getCachedSortType(parsers, i) {
                return parsers[i].type;
            }; /* public methods */
            this.construct = function (settings) {
                return this.each(function () {
                    // if no thead or tbody quit.
                    if (!this.tHead || !this.tBodies) return;
                    // declare
                    var $this, $document, $headers, cache, config, shiftDown = 0,
                        sortOrder;
                    // new blank config object
                    this.config = {};
                    // merge and extend.
                    config = $.extend(this.config, $.tablesorter1.defaults, settings);
                    // store common expression for speed
                    $this = $(this);
                    // save the settings where they read
                    $.data(this, "tablesorter1", config);
                    // build headers
                    $headers = buildHeaders(this);
                    // try to auto detect column type, and store in tables config
                    this.config.parsers = buildParserCache(this, $headers);
                    // build the cache for the tbody cells
                    cache = buildCache(this);
                    // get the css class names, could be done else where.
                    var sortCSS = [config.cssDesc, config.cssAsc];
                    // fixate columns if the users supplies the fixedWidth option
                    fixColumnWidth(this);
                    // apply event handling to headers
                    // this is to big, perhaps break it out?
                    $headers.click(

                    function (e) {
                        var totalRows = ($this[0].tBodies[0] && $this[0].tBodies[0].rows.length) || 0;
                        if (!this.sortDisabled && totalRows > 0) {
                            // Only call sortStart if sorting is
                            // enabled.
                            $this.trigger("sortStart");
                            // store exp, for speed
                            var $cell = $(this);
                            // get current column index
                            var i = this.column;
                            // get current column sort order
                            this.order = this.count++ % 2;
                            // always sort on the locked order.
                            if(this.lockedOrder) this.order = this.lockedOrder;
                            
                            // user only whants to sort on one
                            // column
                            if (!e[config.sortMultiSortKey]) {
                                // flush the sort list
                                config.sortList = [];
                                if (config.sortForce != null) {
                                    var a = config.sortForce;
                                    for (var j = 0; j < a.length; j++) {
                                        if (a[j][0] != i) {
                                            config.sortList.push(a[j]);
                                        }
                                    }
                                }
                                // add column to sort list
                                config.sortList.push([i, this.order]);
                                // multi column sorting
                            } else {
                                // the user has clicked on an all
                                // ready sortet column.
                                if (isValueInArray(i, config.sortList)) {
                                    // revers the sorting direction
                                    // for all tables.
                                    for (var j = 0; j < config.sortList.length; j++) {
                                        var s = config.sortList[j],
                                            o = config.headerList[s[0]];
                                        if (s[0] == i) {
                                            o.count = s[1];
                                            o.count++;
                                            s[1] = o.count % 2;
                                        }
                                    }
                                } else {
                                    // add column to sort list array
                                    config.sortList.push([i, this.order]);
                                }
                            };
                            setTimeout(function () {
                                // set css for headers
                                setHeadersCss($this[0], $headers, config.sortList, sortCSS);
                                appendToTable(
                                    $this[0], multisort(
                                    $this[0], config.sortList, cache)
                                );
                            }, 1);
                            // stop normal event by returning false
                            return false;
                        }
                        // cancel selection
                    }).mousedown(function () {
                        if (config.cancelSelection) {
                            this.onselectstart = function () {
                                return false
                            };
                            return false;
                        }
                    });
                    // apply easy methods that trigger binded events
                    $this.bind("update", function () {
                        var me = this;
                        setTimeout(function () {
                            // rebuild parsers.
                            me.config.parsers = buildParserCache(
                            me, $headers);
                            // rebuild the cache map
                            cache = buildCache(me);
                        }, 1);
                    }).bind("updateCell", function (e, cell) {
                        var config = this.config;
                        // get position from the dom.
                        var pos = [(cell.parentNode.rowIndex - 1), cell.cellIndex];
                        // update cache
                        cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(
                        getElementText(config, cell), cell);
                    }).bind("sorton", function (e, list) {
                        $(this).trigger("sortStart");
                        config.sortList = list;
                        // update and store the sortlist
                        var sortList = config.sortList;
                        // update header count index
                        updateHeaderSortCount(this, sortList);
                        // set css for headers
                        setHeadersCss(this, $headers, sortList, sortCSS);
                        // sort the table and append it to the dom
                        appendToTable(this, multisort(this, sortList, cache));
                    }).bind("appendCache", function () {
                        appendToTable(this, cache);
                    }).bind("applyWidgetId", function (e, id) {
                        getWidgetById(id).format(this);
                    }).bind("applyWidgets", function () {
                        // apply widgets
                        applyWidget(this);
                    });
                    if ($.metadata && ($(this).metadata() && $(this).metadata().sortlist)) {
                        config.sortList = $(this).metadata().sortlist;
                    }
                    // if user has supplied a sort list to constructor.
                    if (config.sortList.length > 0) {
                        $this.trigger("sorton", [config.sortList]);
                    }
                    // apply widgets
                    applyWidget(this);
                });
            };
            this.addParser = function (parser) {
                var l = parsers.length,
                    a = true;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) {
                        a = false;
                    }
                }
                if (a) {
                    parsers.push(parser);
                };
            };
            this.addWidget = function (widget) {
                widgets.push(widget);
            };
            this.formatFloat = function (s) {
                var i = parseFloat(s);
                return (isNaN(i)) ? 0 : i;
            };
            this.formatInt = function (s) {
                var i = parseInt(s);
                return (isNaN(i)) ? 0 : i;
            };
            this.isDigit = function (s, config) {
                // replace all an wanted chars and match.
                return /^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g, '')));
            };
            this.clearTableBody = function (table) {
                if ($.browser.msie) {
                    function empty() {
                        while (this.firstChild)
                        this.removeChild(this.firstChild);
                    }
                    empty.apply(table.tBodies[0]);
                } else {
                    table.tBodies[0].innerHTML = "";
                }
            };
        }
    });

    // extend plugin scope
    $.fn.extend({
        tablesorter1: $.tablesorter1.construct
    });

    // make shortcut
    var ts = $.tablesorter1;

    // add default parsers
    ts.addParser({
        id: "text",
        is: function (s) {
            return true;
        }, format: function (s) {
            return $.trim(s.toLocaleLowerCase());
        }, type: "text"
    });

    ts.addParser({
        id: "digit",
        is: function (s, table) {
            var c = table.config;
            return $.tablesorter1.isDigit(s, c);
        }, format: function (s) {
            return $.tablesorter1.formatFloat(s);
        }, type: "numeric"
    });

    ts.addParser({
        id: "currency",
        is: function (s) {
            return /^[£$€?.]/.test(s);
        }, format: function (s) {
            return $.tablesorter1.formatFloat(s.replace(new RegExp(/[£$€]/g), ""));
        }, type: "numeric"
    });

    ts.addParser({
        id: "ipAddress",
        is: function (s) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);
        }, format: function (s) {
            var a = s.split("."),
                r = "",
                l = a.length;
            for (var i = 0; i < l; i++) {
                var item = a[i];
                if (item.length == 2) {
                    r += "0" + item;
                } else {
                    r += item;
                }
            }
            return $.tablesorter1.formatFloat(r);
        }, type: "numeric"
    });

    ts.addParser({
        id: "url",
        is: function (s) {
            return /^(https?|ftp|file):\/\/$/.test(s);
        }, format: function (s) {
            return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), ''));
        }, type: "text"
    });

    ts.addParser({
        id: "isoDate",
        is: function (s) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);
        }, format: function (s) {
            return $.tablesorter1.formatFloat((s != "") ? new Date(s.replace(
            new RegExp(/-/g), "/")).getTime() : "0");
        }, type: "numeric"
    });

    ts.addParser({
        id: "percent",
        is: function (s) {
            return /\%$/.test($.trim(s));
        }, format: function (s) {
            return $.tablesorter1.formatFloat(s.replace(new RegExp(/%/g), ""));
        }, type: "numeric"
    });

    ts.addParser({
        id: "usLongDate",
        is: function (s) {
            return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
        }, format: function (s) {
            return $.tablesorter1.formatFloat(new Date(s).getTime());
        }, type: "numeric"
    });

    ts.addParser({
        id: "shortDate",
        is: function (s) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);
        }, format: function (s, table) {
            var c = table.config;
            s = s.replace(/\-/g, "/");
            if (c.dateFormat == "us") {
                // reformat the string in ISO format
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
            } else if (c.dateFormat == "uk") {
                // reformat the string in ISO format
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            } else if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
            }
            return $.tablesorter1.formatFloat(new Date(s).getTime());
        }, type: "numeric"
    });
    ts.addParser({
        id: "time",
        is: function (s) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);
        }, format: function (s) {
            return $.tablesorter1.formatFloat(new Date("2000/01/01 " + s).getTime());
        }, type: "numeric"
    });
    ts.addParser({
        id: "metadata",
        is: function (s) {
            return false;
        }, format: function (s, table, cell) {
            var c = table.config,
                p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
            return $(cell).metadata()[p];
        }, type: "numeric"
    });
    // add default widgets
    ts.addWidget({
        id: "zebra",
        format: function (table) {
            if (table.config.debug) {
                var time = new Date();
            }
            
            var selector = "tr:visible";
            if (!table.config.initialized) {
                selector = "tr";
            }
            
            var $tr, row = -1,
                odd;
            // loop through the visible rows
            $(selector, table.tBodies[0]).each(function (i) {
                $tr = $(this);
                // style children rows the same way the parent
                // row was styled
                if (!$tr.hasClass(table.config.cssChildRow)) row++;
                odd = (row % 2 == 0);
                $tr.removeClass(
                table.config.widgetZebra.css[odd ? 0 : 1]).addClass(
                table.config.widgetZebra.css[odd ? 1 : 0])
            });
            if (table.config.debug) {
                $.tablesorter1.benchmark("Applying Zebra widget", time);
            }
            table.config.initialized = true;
        }
    });
})(jQuery);
$.tablesorter1.addWidget({ 
    id: "hover", 
    format: function(table) { 
        $('tr',$(table))
            .mouseover(function () { $(this).addClass('hover'); })
            .mouseout(function () { $(this).removeClass('hover'); }); 
    } 
});

$.tablesorter1.addParser({ 
    id: 'sortDate-dmyHia', 
    is: function(s) { return false; }, 
    format: function(s) { return Date.parseExact(s.toUpperCase(), "dd/MM/yyyy h:m tt"); }, 
    type: 'numeric' 
}); 

$.tablesorter1.addParser({ 
    id: 'sortDate-dmy', 
    is: function(s) { return false; }, 
    format: function(s) { return Date.parseExact(s.toUpperCase(), "dd/MM/yyyy"); }, 
    type: 'numeric' 
}); 

/*...
     jquery/tablesorter/jquery.tablesorter.js?v=2017.01
*/
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function(jQuery) {

/*! TableSorter (FORK) v2.28.4 *//*
* Client-side table sorting with ease!
* @requires jQuery v1.2.6+
*
* Copyright (c) 2007 Christian Bach
* fork maintained by Rob Garrison
*
* Examples and original docs at: http://tablesorter.com
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
* @type jQuery
* @name tablesorter (FORK)
* @cat Plugins/Tablesorter
* @author Christian Bach - christian.bach@polyester.se
* @contributor Rob Garrison - https://github.com/Mottie/tablesorter
* @docs (fork) - https://mottie.github.io/tablesorter/docs/
*/
/*jshint browser:true, jquery:true, unused:false, expr: true */
;( function( $ ) {
    'use strict';
    var ts = $.tablesorter = {

        version : '2.28.4',

        parsers : [],
        widgets : [],
        defaults : {

            // *** appearance
            theme            : 'default',  // adds tablesorter-{theme} to the table for styling
            widthFixed       : false,      // adds colgroup to fix widths of columns
            showProcessing   : false,      // show an indeterminate timer icon in the header when the table is sorted or filtered.

            headerTemplate   : '{content}',// header layout template (HTML ok); {content} = innerHTML, {icon} = <i/> // class from cssIcon
            onRenderTemplate : null,       // function( index, template ){ return template; }, // template is a string
            onRenderHeader   : null,       // function( index ){}, // nothing to return

            // *** functionality
            cancelSelection  : true,       // prevent text selection in the header
            tabIndex         : true,       // add tabindex to header for keyboard accessibility
            dateFormat       : 'mmddyyyy', // other options: 'ddmmyyy' or 'yyyymmdd'
            sortMultiSortKey : 'shiftKey', // key used to select additional columns
            sortResetKey     : 'ctrlKey',  // key used to remove sorting on a column
            usNumberFormat   : true,       // false for German '1.234.567,89' or French '1 234 567,89'
            delayInit        : false,      // if false, the parsed table contents will not update until the first sort
            serverSideSorting: false,      // if true, server-side sorting should be performed because client-side sorting will be disabled, but the ui and events will still be used.
            resort           : true,       // default setting to trigger a resort after an 'update', 'addRows', 'updateCell', etc has completed

            // *** sort options
            headers          : {},         // set sorter, string, empty, locked order, sortInitialOrder, filter, etc.
            ignoreCase       : true,       // ignore case while sorting
            sortForce        : null,       // column(s) first sorted; always applied
            sortList         : [],         // Initial sort order; applied initially; updated when manually sorted
            sortAppend       : null,       // column(s) sorted last; always applied
            sortStable       : false,      // when sorting two rows with exactly the same content, the original sort order is maintained

            sortInitialOrder : 'asc',      // sort direction on first click
            sortLocaleCompare: false,      // replace equivalent character (accented characters)
            sortReset        : false,      // third click on the header will reset column to default - unsorted
            sortRestart      : false,      // restart sort to 'sortInitialOrder' when clicking on previously unsorted columns

            emptyTo          : 'bottom',   // sort empty cell to bottom, top, none, zero, emptyMax, emptyMin
            stringTo         : 'max',      // sort strings in numerical column as max, min, top, bottom, zero
            duplicateSpan    : true,       // colspan cells in the tbody will have duplicated content in the cache for each spanned column
            textExtraction   : 'basic',    // text extraction method/function - function( node, table, cellIndex ){}
            textAttribute    : 'data-text',// data-attribute that contains alternate cell text (used in default textExtraction function)
            textSorter       : null,       // choose overall or specific column sorter function( a, b, direction, table, columnIndex ) [alt: ts.sortText]
            numberSorter     : null,       // choose overall numeric sorter function( a, b, direction, maxColumnValue )

            // *** widget options
            initWidgets      : true,       // apply widgets on tablesorter initialization
            widgetClass      : 'widget-{name}', // table class name template to match to include a widget
            widgets          : [],         // method to add widgets, e.g. widgets: ['zebra']
            widgetOptions    : {
                zebra : [ 'even', 'odd' ]  // zebra widget alternating row class names
            },

            // *** callbacks
            initialized      : null,       // function( table ){},

            // *** extra css class names
            tableClass       : '',
            cssAsc           : '',
            cssDesc          : '',
            cssNone          : '',
            cssHeader        : '',
            cssHeaderRow     : '',
            cssProcessing    : '', // processing icon applied to header during sort/filter

            cssChildRow      : 'tablesorter-childRow', // class name indiciating that a row is to be attached to its parent
            cssInfoBlock     : 'tablesorter-infoOnly', // don't sort tbody with this class name (only one class name allowed here!)
            cssNoSort        : 'tablesorter-noSort',   // class name added to element inside header; clicking on it won't cause a sort
            cssIgnoreRow     : 'tablesorter-ignoreRow',// header row to ignore; cells within this row will not be added to c.$headers

            cssIcon          : 'tablesorter-icon', // if this class does not exist, the {icon} will not be added from the headerTemplate
            cssIconNone      : '', // class name added to the icon when there is no column sort
            cssIconAsc       : '', // class name added to the icon when the column has an ascending sort
            cssIconDesc      : '', // class name added to the icon when the column has a descending sort

            // *** events
            pointerClick     : 'click',
            pointerDown      : 'mousedown',
            pointerUp        : 'mouseup',

            // *** selectors
            selectorHeaders  : '> thead th, > thead td',
            selectorSort     : 'th, td', // jQuery selector of content within selectorHeaders that is clickable to trigger a sort
            selectorRemove   : '.remove-me',

            // *** advanced
            debug            : false,

            // *** Internal variables
            headerList: [],
            empties: {},
            strings: {},
            parsers: [],

            // *** parser options for validator; values must be falsy!
            globalize: 0,
            imgAttr: 0

            // removed: widgetZebra: { css: ['even', 'odd'] }

        },

        // internal css classes - these will ALWAYS be added to
        // the table and MUST only contain one class name - fixes #381
        css : {
            table      : 'tablesorter',
            cssHasChild: 'tablesorter-hasChildRow',
            childRow   : 'tablesorter-childRow',
            colgroup   : 'tablesorter-colgroup',
            header     : 'tablesorter-header',
            headerRow  : 'tablesorter-headerRow',
            headerIn   : 'tablesorter-header-inner',
            icon       : 'tablesorter-icon',
            processing : 'tablesorter-processing',
            sortAsc    : 'tablesorter-headerAsc',
            sortDesc   : 'tablesorter-headerDesc',
            sortNone   : 'tablesorter-headerUnSorted'
        },

        // labels applied to sortable headers for accessibility (aria) support
        language : {
            sortAsc      : 'Ascending sort applied, ',
            sortDesc     : 'Descending sort applied, ',
            sortNone     : 'No sort applied, ',
            sortDisabled : 'sorting is disabled',
            nextAsc      : 'activate to apply an ascending sort',
            nextDesc     : 'activate to apply a descending sort',
            nextNone     : 'activate to remove the sort'
        },

        regex : {
            templateContent : /\{content\}/g,
            templateIcon    : /\{icon\}/g,
            templateName    : /\{name\}/i,
            spaces          : /\s+/g,
            nonWord         : /\W/g,
            formElements    : /(input|select|button|textarea)/i,

            // *** sort functions ***
            // regex used in natural sort
            // chunk/tokenize numbers & letters
            chunk  : /(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
            // replace chunks @ ends
            chunks : /(^\\0|\\0$)/,
            hex    : /^0x[0-9a-f]+$/i,

            // *** formatFloat ***
            comma                : /,/g,
            digitNonUS           : /[\s|\.]/g,
            digitNegativeTest    : /^\s*\([.\d]+\)/,
            digitNegativeReplace : /^\s*\(([.\d]+)\)/,

            // *** isDigit ***
            digitTest    : /^[\-+(]?\d+[)]?$/,
            digitReplace : /[,.'"\s]/g

        },

        // digit sort, text location
        string : {
            max      : 1,
            min      : -1,
            emptymin : 1,
            emptymax : -1,
            zero     : 0,
            none     : 0,
            'null'   : 0,
            top      : true,
            bottom   : false
        },

        keyCodes : {
            enter : 13
        },

        // placeholder date parser data (globalize)
        dates : {},

        // These methods can be applied on table.config instance
        instanceMethods : {},

        /*
        ▄█████ ██████ ██████ ██  ██ █████▄
        ▀█▄    ██▄▄     ██   ██  ██ ██▄▄██
           ▀█▄ ██▀▀     ██   ██  ██ ██▀▀▀
        █████▀ ██████   ██   ▀████▀ ██
        */

        setup : function( table, c ) {
            // if no thead or tbody, or tablesorter is already present, quit
            if ( !table || !table.tHead || table.tBodies.length === 0 || table.hasInitialized === true ) {
                if ( c.debug ) {
                    if ( table.hasInitialized ) {
                        console.warn( 'Stopping initialization. Tablesorter has already been initialized' );
                    } else {
                        console.error( 'Stopping initialization! No table, thead or tbody', table );
                    }
                }
                return;
            }

            var tmp = '',
                $table = $( table ),
                meta = $.metadata;
            // initialization flag
            table.hasInitialized = false;
            // table is being processed flag
            table.isProcessing = true;
            // make sure to store the config object
            table.config = c;
            // save the settings where they read
            $.data( table, 'tablesorter', c );
            if ( c.debug ) {
                console[ console.group ? 'group' : 'log' ]( 'Initializing tablesorter v' + ts.version );
                $.data( table, 'startoveralltimer', new Date() );
            }

            // removing this in version 3 (only supports jQuery 1.7+)
            c.supportsDataObject = ( function( version ) {
                version[ 0 ] = parseInt( version[ 0 ], 10 );
                return ( version[ 0 ] > 1 ) || ( version[ 0 ] === 1 && parseInt( version[ 1 ], 10 ) >= 4 );
            })( $.fn.jquery.split( '.' ) );
            // ensure case insensitivity
            c.emptyTo = c.emptyTo.toLowerCase();
            c.stringTo = c.stringTo.toLowerCase();
            c.last = { sortList : [], clickedIndex : -1 };
            // add table theme class only if there isn't already one there
            if ( !/tablesorter\-/.test( $table.attr( 'class' ) ) ) {
                tmp = ( c.theme !== '' ? ' tablesorter-' + c.theme : '' );
            }
            c.table = table;
            c.$table = $table
                .addClass( ts.css.table + ' ' + c.tableClass + tmp )
                .attr( 'role', 'grid' );
            c.$headers = $table.find( c.selectorHeaders );

            // give the table a unique id, which will be used in namespace binding
            if ( !c.namespace ) {
                c.namespace = '.tablesorter' + Math.random().toString( 16 ).slice( 2 );
            } else {
                // make sure namespace starts with a period & doesn't have weird characters
                c.namespace = '.' + c.namespace.replace( ts.regex.nonWord, '' );
            }

            c.$table.children().children( 'tr' ).attr( 'role', 'row' );
            c.$tbodies = $table.children( 'tbody:not(.' + c.cssInfoBlock + ')' ).attr({
                'aria-live' : 'polite',
                'aria-relevant' : 'all'
            });
            if ( c.$table.children( 'caption' ).length ) {
                tmp = c.$table.children( 'caption' )[ 0 ];
                if ( !tmp.id ) { tmp.id = c.namespace.slice( 1 ) + 'caption'; }
                c.$table.attr( 'aria-labelledby', tmp.id );
            }
            c.widgetInit = {}; // keep a list of initialized widgets
            // change textExtraction via data-attribute
            c.textExtraction = c.$table.attr( 'data-text-extraction' ) || c.textExtraction || 'basic';
            // build headers
            ts.buildHeaders( c );
            // fixate columns if the users supplies the fixedWidth option
            // do this after theme has been applied
            ts.fixColumnWidth( table );
            // add widgets from class name
            ts.addWidgetFromClass( table );
            // add widget options before parsing (e.g. grouping widget has parser settings)
            ts.applyWidgetOptions( table );
            // try to auto detect column type, and store in tables config
            ts.setupParsers( c );
            // start total row count at zero
            c.totalRows = 0;
            ts.validateOptions( c );
            // build the cache for the tbody cells
            // delayInit will delay building the cache until the user starts a sort
            if ( !c.delayInit ) { ts.buildCache( c ); }
            // bind all header events and methods
            ts.bindEvents( table, c.$headers, true );
            ts.bindMethods( c );
            // get sort list from jQuery data or metadata
            // in jQuery < 1.4, an error occurs when calling $table.data()
            if ( c.supportsDataObject && typeof $table.data().sortlist !== 'undefined' ) {
                c.sortList = $table.data().sortlist;
            } else if ( meta && ( $table.metadata() && $table.metadata().sortlist ) ) {
                c.sortList = $table.metadata().sortlist;
            }
            // apply widget init code
            ts.applyWidget( table, true );
            // if user has supplied a sort list to constructor
            if ( c.sortList.length > 0 ) {
                ts.sortOn( c, c.sortList, {}, !c.initWidgets );
            } else {
                ts.setHeadersCss( c );
                if ( c.initWidgets ) {
                    // apply widget format
                    ts.applyWidget( table, false );
                }
            }

            // show processesing icon
            if ( c.showProcessing ) {
                $table
                .unbind( 'sortBegin' + c.namespace + ' sortEnd' + c.namespace )
                .bind( 'sortBegin' + c.namespace + ' sortEnd' + c.namespace, function( e ) {
                    clearTimeout( c.timerProcessing );
                    ts.isProcessing( table );
                    if ( e.type === 'sortBegin' ) {
                        c.timerProcessing = setTimeout( function() {
                            ts.isProcessing( table, true );
                        }, 500 );
                    }
                });
            }

            // initialized
            table.hasInitialized = true;
            table.isProcessing = false;
            if ( c.debug ) {
                console.log( 'Overall initialization time:' + ts.benchmark( $.data( table, 'startoveralltimer' ) ) );
                if ( c.debug && console.groupEnd ) { console.groupEnd(); }
            }
            $table.triggerHandler( 'tablesorter-initialized', table );
            if ( typeof c.initialized === 'function' ) {
                c.initialized( table );
            }
        },

        bindMethods : function( c ) {
            var $table = c.$table,
                namespace = c.namespace,
                events = ( 'sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete ' +
                    'sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup ' +
                    'mouseleave ' ).split( ' ' )
                    .join( namespace + ' ' );
            // apply easy methods that trigger bound events
            $table
            .unbind( events.replace( ts.regex.spaces, ' ' ) )
            .bind( 'sortReset' + namespace, function( e, callback ) {
                e.stopPropagation();
                // using this.config to ensure functions are getting a non-cached version of the config
                ts.sortReset( this.config, callback );
            })
            .bind( 'updateAll' + namespace, function( e, resort, callback ) {
                e.stopPropagation();
                ts.updateAll( this.config, resort, callback );
            })
            .bind( 'update' + namespace + ' updateRows' + namespace, function( e, resort, callback ) {
                e.stopPropagation();
                ts.update( this.config, resort, callback );
            })
            .bind( 'updateHeaders' + namespace, function( e, callback ) {
                e.stopPropagation();
                ts.updateHeaders( this.config, callback );
            })
            .bind( 'updateCell' + namespace, function( e, cell, resort, callback ) {
                e.stopPropagation();
                ts.updateCell( this.config, cell, resort, callback );
            })
            .bind( 'addRows' + namespace, function( e, $row, resort, callback ) {
                e.stopPropagation();
                ts.addRows( this.config, $row, resort, callback );
            })
            .bind( 'updateComplete' + namespace, function() {
                this.isUpdating = false;
            })
            .bind( 'sorton' + namespace, function( e, list, callback, init ) {
                e.stopPropagation();
                ts.sortOn( this.config, list, callback, init );
            })
            .bind( 'appendCache' + namespace, function( e, callback, init ) {
                e.stopPropagation();
                ts.appendCache( this.config, init );
                if ( $.isFunction( callback ) ) {
                    callback( this );
                }
            })
            // $tbodies variable is used by the tbody sorting widget
            .bind( 'updateCache' + namespace, function( e, callback, $tbodies ) {
                e.stopPropagation();
                ts.updateCache( this.config, callback, $tbodies );
            })
            .bind( 'applyWidgetId' + namespace, function( e, id ) {
                e.stopPropagation();
                ts.applyWidgetId( this, id );
            })
            .bind( 'applyWidgets' + namespace, function( e, init ) {
                e.stopPropagation();
                // apply widgets
                ts.applyWidget( this, init );
            })
            .bind( 'refreshWidgets' + namespace, function( e, all, dontapply ) {
                e.stopPropagation();
                ts.refreshWidgets( this, all, dontapply );
            })
            .bind( 'removeWidget' + namespace, function( e, name, refreshing ) {
                e.stopPropagation();
                ts.removeWidget( this, name, refreshing );
            })
            .bind( 'destroy' + namespace, function( e, removeClasses, callback ) {
                e.stopPropagation();
                ts.destroy( this, removeClasses, callback );
            })
            .bind( 'resetToLoadState' + namespace, function( e ) {
                e.stopPropagation();
                // remove all widgets
                ts.removeWidget( this, true, false );
                var tmp = $.extend( true, {}, c.originalSettings );
                // restore original settings; this clears out current settings, but does not clear
                // values saved to storage.
                c = $.extend( true, ts.defaults, tmp );
                c.originalSettings = tmp;
                this.hasInitialized = false;
                // setup the entire table again
                ts.setup( this, c );
            });
        },

        bindEvents : function( table, $headers, core ) {
            table = $( table )[ 0 ];
            var tmp,
                c = table.config,
                namespace = c.namespace,
                downTarget = null;
            if ( core !== true ) {
                $headers.addClass( namespace.slice( 1 ) + '_extra_headers' );
                tmp = $.fn.closest ? $headers.closest( 'table' )[ 0 ] : $headers.parents( 'table' )[ 0 ];
                if ( tmp && tmp.nodeName === 'TABLE' && tmp !== table ) {
                    $( tmp ).addClass( namespace.slice( 1 ) + '_extra_table' );
                }
            }
            tmp = ( c.pointerDown + ' ' + c.pointerUp + ' ' + c.pointerClick + ' sort keyup ' )
                .replace( ts.regex.spaces, ' ' )
                .split( ' ' )
                .join( namespace + ' ' );
            // apply event handling to headers and/or additional headers (stickyheaders, scroller, etc)
            $headers
            // http://stackoverflow.com/questions/5312849/jquery-find-self;
            .find( c.selectorSort )
            .add( $headers.filter( c.selectorSort ) )
            .unbind( tmp )
            .bind( tmp, function( e, external ) {
                var $cell, cell, temp,
                    $target = $( e.target ),
                    // wrap event type in spaces, so the match doesn't trigger on inner words
                    type = ' ' + e.type + ' ';
                // only recognize left clicks
                if ( ( ( e.which || e.button ) !== 1 && !type.match( ' ' + c.pointerClick + ' | sort | keyup ' ) ) ||
                    // allow pressing enter
                    ( type === ' keyup ' && e.which !== ts.keyCodes.enter ) ||
                    // allow triggering a click event (e.which is undefined) & ignore physical clicks
                    ( type.match( ' ' + c.pointerClick + ' ' ) && typeof e.which !== 'undefined' ) ) {
                    return;
                }
                // ignore mouseup if mousedown wasn't on the same target
                if ( type.match( ' ' + c.pointerUp + ' ' ) && downTarget !== e.target && external !== true ) {
                    return;
                }
                // set target on mousedown
                if ( type.match( ' ' + c.pointerDown + ' ' ) ) {
                    downTarget = e.target;
                    // preventDefault needed or jQuery v1.3.2 and older throws an
                    // "Uncaught TypeError: handler.apply is not a function" error
                    temp = $target.jquery.split( '.' );
                    if ( temp[ 0 ] === '1' && temp[ 1 ] < 4 ) { e.preventDefault(); }
                    return;
                }
                downTarget = null;
                // prevent sort being triggered on form elements
                if ( ts.regex.formElements.test( e.target.nodeName ) ||
                    // nosort class name, or elements within a nosort container
                    $target.hasClass( c.cssNoSort ) || $target.parents( '.' + c.cssNoSort ).length > 0 ||
                    // elements within a button
                    $target.parents( 'button' ).length > 0 ) {
                    return !c.cancelSelection;
                }
                if ( c.delayInit && ts.isEmptyObject( c.cache ) ) {
                    ts.buildCache( c );
                }
                // jQuery v1.2.6 doesn't have closest()
                $cell = $.fn.closest ? $( this ).closest( 'th, td' ) :
                    /TH|TD/.test( this.nodeName ) ? $( this ) : $( this ).parents( 'th, td' );
                // reference original table headers and find the same cell
                // don't use $headers or IE8 throws an error - see #987
                temp = $headers.index( $cell );
                c.last.clickedIndex = ( temp < 0 ) ? $cell.attr( 'data-column' ) : temp;
                // use column index if $headers is undefined
                cell = c.$headers[ c.last.clickedIndex ];
                if ( cell && !cell.sortDisabled ) {
                    ts.initSort( c, cell, e );
                }
            });
            if ( c.cancelSelection ) {
                // cancel selection
                $headers
                    .attr( 'unselectable', 'on' )
                    .bind( 'selectstart', false )
                    .css({
                        'user-select' : 'none',
                        'MozUserSelect' : 'none' // not needed for jQuery 1.8+
                    });
            }
        },

        buildHeaders : function( c ) {
            var $temp, icon, timer, indx;
            c.headerList = [];
            c.headerContent = [];
            c.sortVars = [];
            if ( c.debug ) {
                timer = new Date();
            }
            // children tr in tfoot - see issue #196 & #547
            // don't pass table.config to computeColumnIndex here - widgets (math) pass it to "quickly" index tbody cells
            c.columns = ts.computeColumnIndex( c.$table.children( 'thead, tfoot' ).children( 'tr' ) );
            // add icon if cssIcon option exists
            icon = c.cssIcon ?
                '<i class="' + ( c.cssIcon === ts.css.icon ? ts.css.icon : c.cssIcon + ' ' + ts.css.icon ) + '"></i>' :
                '';
            // redefine c.$headers here in case of an updateAll that replaces or adds an entire header cell - see #683
            c.$headers = $( $.map( c.$table.find( c.selectorHeaders ), function( elem, index ) {
                var configHeaders, header, column, template, tmp,
                    $elem = $( elem );
                // ignore cell (don't add it to c.$headers) if row has ignoreRow class
                if ( $elem.parent().hasClass( c.cssIgnoreRow ) ) { return; }
                // make sure to get header cell & not column indexed cell
                configHeaders = ts.getColumnData( c.table, c.headers, index, true );
                // save original header content
                c.headerContent[ index ] = $elem.html();
                // if headerTemplate is empty, don't reformat the header cell
                if ( c.headerTemplate !== '' && !$elem.find( '.' + ts.css.headerIn ).length ) {
                    // set up header template
                    template = c.headerTemplate
                        .replace( ts.regex.templateContent, $elem.html() )
                        .replace( ts.regex.templateIcon, $elem.find( '.' + ts.css.icon ).length ? '' : icon );
                    if ( c.onRenderTemplate ) {
                        header = c.onRenderTemplate.apply( $elem, [ index, template ] );
                        // only change t if something is returned
                        if ( header && typeof header === 'string' ) {
                            template = header;
                        }
                    }
                    $elem.html( '<div class="' + ts.css.headerIn + '">' + template + '</div>' ); // faster than wrapInner
                }
                if ( c.onRenderHeader ) {
                    c.onRenderHeader.apply( $elem, [ index, c, c.$table ] );
                }
                column = parseInt( $elem.attr( 'data-column' ), 10 );
                elem.column = column;
                tmp = ts.getOrder( ts.getData( $elem, configHeaders, 'sortInitialOrder' ) || c.sortInitialOrder );
                // this may get updated numerous times if there are multiple rows
                c.sortVars[ column ] = {
                    count : -1, // set to -1 because clicking on the header automatically adds one
                    order:  tmp ?
                        ( c.sortReset ? [ 1, 0, 2 ] : [ 1, 0 ] ) : // desc, asc, unsorted
                        ( c.sortReset ? [ 0, 1, 2 ] : [ 0, 1 ] ),  // asc, desc, unsorted
                    lockedOrder : false
                };
                tmp = ts.getData( $elem, configHeaders, 'lockedOrder' ) || false;
                if ( typeof tmp !== 'undefined' && tmp !== false ) {
                    c.sortVars[ column ].lockedOrder = true;
                    c.sortVars[ column ].order = ts.getOrder( tmp ) ? [ 1, 1 ] : [ 0, 0 ];
                }
                // add cell to headerList
                c.headerList[ index ] = elem;
                // add to parent in case there are multiple rows
                $elem
                    .addClass( ts.css.header + ' ' + c.cssHeader )
                    .parent()
                    .addClass( ts.css.headerRow + ' ' + c.cssHeaderRow )
                    .attr( 'role', 'row' );
                // allow keyboard cursor to focus on element
                if ( c.tabIndex ) {
                    $elem.attr( 'tabindex', 0 );
                }
                return elem;
            }) );
            // cache headers per column
            c.$headerIndexed = [];
            for ( indx = 0; indx < c.columns; indx++ ) {
                // colspan in header making a column undefined
                if ( ts.isEmptyObject( c.sortVars[ indx ] ) ) {
                    c.sortVars[ indx ] = {};
                }
                $temp = c.$headers.filter( '[data-column="' + indx + '"]' );
                // target sortable column cells, unless there are none, then use non-sortable cells
                // .last() added in jQuery 1.4; use .filter(':last') to maintain compatibility with jQuery v1.2.6
                c.$headerIndexed[ indx ] = $temp.length ?
                    $temp.not( '.sorter-false' ).length ?
                        $temp.not( '.sorter-false' ).filter( ':last' ) :
                        $temp.filter( ':last' ) :
                    $();
            }
            c.$table.find( c.selectorHeaders ).attr({
                scope: 'col',
                role : 'columnheader'
            });
            // enable/disable sorting
            ts.updateHeader( c );
            if ( c.debug ) {
                console.log( 'Built headers:' + ts.benchmark( timer ) );
                console.log( c.$headers );
            }
        },

        // Use it to add a set of methods to table.config which will be available for all tables.
        // This should be done before table initialization
        addInstanceMethods : function( methods ) {
            $.extend( ts.instanceMethods, methods );
        },

        /*
        █████▄ ▄████▄ █████▄ ▄█████ ██████ █████▄ ▄█████
        ██▄▄██ ██▄▄██ ██▄▄██ ▀█▄    ██▄▄   ██▄▄██ ▀█▄
        ██▀▀▀  ██▀▀██ ██▀██     ▀█▄ ██▀▀   ██▀██     ▀█▄
        ██     ██  ██ ██  ██ █████▀ ██████ ██  ██ █████▀
        */
        setupParsers : function( c, $tbodies ) {
            var rows, list, span, max, colIndex, indx, header, configHeaders,
                noParser, parser, extractor, time, tbody, len,
                table = c.table,
                tbodyIndex = 0,
                debug = {};
            // update table bodies in case we start with an empty table
            c.$tbodies = c.$table.children( 'tbody:not(.' + c.cssInfoBlock + ')' );
            tbody = typeof $tbodies === 'undefined' ? c.$tbodies : $tbodies;
            len = tbody.length;
            if ( len === 0 ) {
                return c.debug ? console.warn( 'Warning: *Empty table!* Not building a parser cache' ) : '';
            } else if ( c.debug ) {
                time = new Date();
                console[ console.group ? 'group' : 'log' ]( 'Detecting parsers for each column' );
            }
            list = {
                extractors: [],
                parsers: []
            };
            while ( tbodyIndex < len ) {
                rows = tbody[ tbodyIndex ].rows;
                if ( rows.length ) {
                    colIndex = 0;
                    max = c.columns;
                    for ( indx = 0; indx < max; indx++ ) {
                        header = c.$headerIndexed[ colIndex ];
                        if ( header && header.length ) {
                            // get column indexed table cell
                            configHeaders = ts.getColumnData( table, c.headers, colIndex );
                            // get column parser/extractor
                            extractor = ts.getParserById( ts.getData( header, configHeaders, 'extractor' ) );
                            parser = ts.getParserById( ts.getData( header, configHeaders, 'sorter' ) );
                            noParser = ts.getData( header, configHeaders, 'parser' ) === 'false';
                            // empty cells behaviour - keeping emptyToBottom for backwards compatibility
                            c.empties[colIndex] = (
                                ts.getData( header, configHeaders, 'empty' ) ||
                                c.emptyTo || ( c.emptyToBottom ? 'bottom' : 'top' ) ).toLowerCase();
                            // text strings behaviour in numerical sorts
                            c.strings[colIndex] = (
                                ts.getData( header, configHeaders, 'string' ) ||
                                c.stringTo ||
                                'max' ).toLowerCase();
                            if ( noParser ) {
                                parser = ts.getParserById( 'no-parser' );
                            }
                            if ( !extractor ) {
                                // For now, maybe detect someday
                                extractor = false;
                            }
                            if ( !parser ) {
                                parser = ts.detectParserForColumn( c, rows, -1, colIndex );
                            }
                            if ( c.debug ) {
                                debug[ '(' + colIndex + ') ' + header.text() ] = {
                                    parser : parser.id,
                                    extractor : extractor ? extractor.id : 'none',
                                    string : c.strings[ colIndex ],
                                    empty  : c.empties[ colIndex ]
                                };
                            }
                            list.parsers[ colIndex ] = parser;
                            list.extractors[ colIndex ] = extractor;
                            span = header[ 0 ].colSpan - 1;
                            if ( span > 0 ) {
                                colIndex += span;
                                max += span;
                                while ( span + 1 > 0 ) {
                                    // set colspan columns to use the same parsers & extractors
                                    list.parsers[ colIndex - span ] = parser;
                                    list.extractors[ colIndex - span ] = extractor;
                                    span--;
                                }
                            }
                        }
                        colIndex++;
                    }
                }
                tbodyIndex += ( list.parsers.length ) ? len : 1;
            }
            if ( c.debug ) {
                if ( !ts.isEmptyObject( debug ) ) {
                    console[ console.table ? 'table' : 'log' ]( debug );
                } else {
                    console.warn( '  No parsers detected!' );
                }
                console.log( 'Completed detecting parsers' + ts.benchmark( time ) );
                if ( console.groupEnd ) { console.groupEnd(); }
            }
            c.parsers = list.parsers;
            c.extractors = list.extractors;
        },

        addParser : function( parser ) {
            var indx,
                len = ts.parsers.length,
                add = true;
            for ( indx = 0; indx < len; indx++ ) {
                if ( ts.parsers[ indx ].id.toLowerCase() === parser.id.toLowerCase() ) {
                    add = false;
                }
            }
            if ( add ) {
                ts.parsers[ ts.parsers.length ] = parser;
            }
        },

        getParserById : function( name ) {
            /*jshint eqeqeq:false */
            if ( name == 'false' ) { return false; }
            var indx,
                len = ts.parsers.length;
            for ( indx = 0; indx < len; indx++ ) {
                if ( ts.parsers[ indx ].id.toLowerCase() === ( name.toString() ).toLowerCase() ) {
                    return ts.parsers[ indx ];
                }
            }
            return false;
        },

        detectParserForColumn : function( c, rows, rowIndex, cellIndex ) {
            var cur, $node, row,
                indx = ts.parsers.length,
                node = false,
                nodeValue = '',
                keepLooking = true;
            while ( nodeValue === '' && keepLooking ) {
                rowIndex++;
                row = rows[ rowIndex ];
                // stop looking after 50 empty rows
                if ( row && rowIndex < 50 ) {
                    if ( row.className.indexOf( ts.cssIgnoreRow ) < 0 ) {
                        node = rows[ rowIndex ].cells[ cellIndex ];
                        nodeValue = ts.getElementText( c, node, cellIndex );
                        $node = $( node );
                        if ( c.debug ) {
                            console.log( 'Checking if value was empty on row ' + rowIndex + ', column: ' +
                                cellIndex + ': "' + nodeValue + '"' );
                        }
                    }
                } else {
                    keepLooking = false;
                }
            }
            while ( --indx >= 0 ) {
                cur = ts.parsers[ indx ];
                // ignore the default text parser because it will always be true
                if ( cur && cur.id !== 'text' && cur.is && cur.is( nodeValue, c.table, node, $node ) ) {
                    return cur;
                }
            }
            // nothing found, return the generic parser (text)
            return ts.getParserById( 'text' );
        },

        getElementText : function( c, node, cellIndex ) {
            if ( !node ) { return ''; }
            var tmp,
                extract = c.textExtraction || '',
                // node could be a jquery object
                // http://jsperf.com/jquery-vs-instanceof-jquery/2
                $node = node.jquery ? node : $( node );
            if ( typeof extract === 'string' ) {
                // check data-attribute first when set to 'basic'; don't use node.innerText - it's really slow!
                // http://www.kellegous.com/j/2013/02/27/innertext-vs-textcontent/
                if ( extract === 'basic' && typeof ( tmp = $node.attr( c.textAttribute ) ) !== 'undefined' ) {
                    return $.trim( tmp );
                }
                return $.trim( node.textContent || $node.text() );
            } else {
                if ( typeof extract === 'function' ) {
                    return $.trim( extract( $node[ 0 ], c.table, cellIndex ) );
                } else if ( typeof ( tmp = ts.getColumnData( c.table, extract, cellIndex ) ) === 'function' ) {
                    return $.trim( tmp( $node[ 0 ], c.table, cellIndex ) );
                }
            }
            // fallback
            return $.trim( $node[ 0 ].textContent || $node.text() );
        },

        // centralized function to extract/parse cell contents
        getParsedText : function( c, cell, colIndex, txt ) {
            if ( typeof txt === 'undefined' ) {
                txt = ts.getElementText( c, cell, colIndex );
            }
            // if no parser, make sure to return the txt
            var val = '' + txt,
                parser = c.parsers[ colIndex ],
                extractor = c.extractors[ colIndex ];
            if ( parser ) {
                // do extract before parsing, if there is one
                if ( extractor && typeof extractor.format === 'function' ) {
                    txt = extractor.format( txt, c.table, cell, colIndex );
                }
                // allow parsing if the string is empty, previously parsing would change it to zero,
                // in case the parser needs to extract data from the table cell attributes
                val = parser.id === 'no-parser' ? '' :
                    // make sure txt is a string (extractor may have converted it)
                    parser.format( '' + txt, c.table, cell, colIndex );
                if ( c.ignoreCase && typeof val === 'string' ) {
                    val = val.toLowerCase();
                }
            }
            return val;
        },

        /*
        ▄████▄ ▄████▄ ▄████▄ ██  ██ ██████
        ██  ▀▀ ██▄▄██ ██  ▀▀ ██▄▄██ ██▄▄
        ██  ▄▄ ██▀▀██ ██  ▄▄ ██▀▀██ ██▀▀
        ▀████▀ ██  ██ ▀████▀ ██  ██ ██████
        */
        buildCache : function( c, callback, $tbodies ) {
            var cache, val, txt, rowIndex, colIndex, tbodyIndex, $tbody, $row,
                cols, $cells, cell, cacheTime, totalRows, rowData, prevRowData,
                colMax, span, cacheIndex, hasParser, max, len, index,
                table = c.table,
                parsers = c.parsers;
            // update tbody variable
            c.$tbodies = c.$table.children( 'tbody:not(.' + c.cssInfoBlock + ')' );
            $tbody = typeof $tbodies === 'undefined' ? c.$tbodies : $tbodies,
            c.cache = {};
            c.totalRows = 0;
            // if no parsers found, return - it's an empty table.
            if ( !parsers ) {
                return c.debug ? console.warn( 'Warning: *Empty table!* Not building a cache' ) : '';
            }
            if ( c.debug ) {
                cacheTime = new Date();
            }
            // processing icon
            if ( c.showProcessing ) {
                ts.isProcessing( table, true );
            }
            for ( tbodyIndex = 0; tbodyIndex < $tbody.length; tbodyIndex++ ) {
                colMax = []; // column max value per tbody
                cache = c.cache[ tbodyIndex ] = {
                    normalized: [] // array of normalized row data; last entry contains 'rowData' above
                    // colMax: #   // added at the end
                };

                totalRows = ( $tbody[ tbodyIndex ] && $tbody[ tbodyIndex ].rows.length ) || 0;
                for ( rowIndex = 0; rowIndex < totalRows; ++rowIndex ) {
                    rowData = {
                        // order: original row order #
                        // $row : jQuery Object[]
                        child: [], // child row text (filter widget)
                        raw: []    // original row text
                    };
                    /** Add the table data to main data array */
                    $row = $( $tbody[ tbodyIndex ].rows[ rowIndex ] );
                    cols = [];
                    // ignore "remove-me" rows
                    if ( $row.hasClass( c.selectorRemove.slice(1) ) ) {
                        continue;
                    }
                    // if this is a child row, add it to the last row's children and continue to the next row
                    // ignore child row class, if it is the first row
                    if ( $row.hasClass( c.cssChildRow ) && rowIndex !== 0 ) {
                        len = cache.normalized.length - 1;
                        prevRowData = cache.normalized[ len ][ c.columns ];
                        prevRowData.$row = prevRowData.$row.add( $row );
                        // add 'hasChild' class name to parent row
                        if ( !$row.prev().hasClass( c.cssChildRow ) ) {
                            $row.prev().addClass( ts.css.cssHasChild );
                        }
                        // save child row content (un-parsed!)
                        $cells = $row.children( 'th, td' );
                        len = prevRowData.child.length;
                        prevRowData.child[ len ] = [];
                        // child row content does not account for colspans/rowspans; so indexing may be off
                        cacheIndex = 0;
                        max = c.columns;
                        for ( colIndex = 0; colIndex < max; colIndex++ ) {
                            cell = $cells[ colIndex ];
                            if ( cell ) {
                                prevRowData.child[ len ][ colIndex ] = ts.getParsedText( c, cell, colIndex );
                                span = $cells[ colIndex ].colSpan - 1;
                                if ( span > 0 ) {
                                    cacheIndex += span;
                                    max += span;
                                }
                            }
                            cacheIndex++;
                        }
                        // go to the next for loop
                        continue;
                    }
                    rowData.$row = $row;
                    rowData.order = rowIndex; // add original row position to rowCache
                    cacheIndex = 0;
                    max = c.columns;
                    for ( colIndex = 0; colIndex < max; ++colIndex ) {
                        cell = $row[ 0 ].cells[ colIndex ];
                        if ( cell && cacheIndex < c.columns ) {
                            hasParser = typeof parsers[ cacheIndex ] !== 'undefined';
                            if ( !hasParser && c.debug ) {
                                console.warn( 'No parser found for row: ' + rowIndex + ', column: ' + colIndex +
                                    '; cell containing: "' + $(cell).text() + '"; does it have a header?' );
                            }
                            val = ts.getElementText( c, cell, cacheIndex );
                            rowData.raw[ cacheIndex ] = val; // save original row text
                            // save raw column text even if there is no parser set
                            txt = ts.getParsedText( c, cell, cacheIndex, val );
                            cols[ cacheIndex ] = txt;
                            if ( hasParser && ( parsers[ cacheIndex ].type || '' ).toLowerCase() === 'numeric' ) {
                                // determine column max value (ignore sign)
                                colMax[ cacheIndex ] = Math.max( Math.abs( txt ) || 0, colMax[ cacheIndex ] || 0 );
                            }
                            // allow colSpan in tbody
                            span = cell.colSpan - 1;
                            if ( span > 0 ) {
                                index = 0;
                                while ( index <= span ) {
                                    // duplicate text (or not) to spanned columns
                                    // instead of setting duplicate span to empty string, use textExtraction to try to get a value
                                    // see http://stackoverflow.com/q/36449711/145346
                                    txt = c.duplicateSpan || index === 0 ?
                                        val :
                                        typeof c.textExtraction !== 'string' ?
                                            ts.getElementText( c, cell, cacheIndex + index ) || '' :
                                            '';
                                    rowData.raw[ cacheIndex + index ] = txt;
                                    cols[ cacheIndex + index ] = txt;
                                    index++;
                                }
                                cacheIndex += span;
                                max += span;
                            }
                        }
                        cacheIndex++;
                    }
                    // ensure rowData is always in the same location (after the last column)
                    cols[ c.columns ] = rowData;
                    cache.normalized[ cache.normalized.length ] = cols;
                }
                cache.colMax = colMax;
                // total up rows, not including child rows
                c.totalRows += cache.normalized.length;

            }
            if ( c.showProcessing ) {
                ts.isProcessing( table ); // remove processing icon
            }
            if ( c.debug ) {
                len = Math.min( 5, c.cache[ 0 ].normalized.length );
                console[ console.group ? 'group' : 'log' ]( 'Building cache for ' + c.totalRows +
                    ' rows (showing ' + len + ' rows in log) and ' + c.columns + ' columns' +
                    ts.benchmark( cacheTime ) );
                val = {};
                for ( colIndex = 0; colIndex < c.columns; colIndex++ ) {
                    for ( cacheIndex = 0; cacheIndex < len; cacheIndex++ ) {
                        if ( !val[ 'row: ' + cacheIndex ] ) {
                            val[ 'row: ' + cacheIndex ] = {};
                        }
                        val[ 'row: ' + cacheIndex ][ c.$headerIndexed[ colIndex ].text() ] =
                            c.cache[ 0 ].normalized[ cacheIndex ][ colIndex ];
                    }
                }
                console[ console.table ? 'table' : 'log' ]( val );
                if ( console.groupEnd ) { console.groupEnd(); }
            }
            if ( $.isFunction( callback ) ) {
                callback( table );
            }
        },

        getColumnText : function( table, column, callback, rowFilter ) {
            table = $( table )[0];
            var tbodyIndex, rowIndex, cache, row, tbodyLen, rowLen, raw, parsed, $cell, result,
                hasCallback = typeof callback === 'function',
                allColumns = column === 'all',
                data = { raw : [], parsed: [], $cell: [] },
                c = table.config;
            if ( ts.isEmptyObject( c ) ) {
                if ( c.debug ) {
                    console.warn( 'No cache found - aborting getColumnText function!' );
                }
            } else {
                tbodyLen = c.$tbodies.length;
                for ( tbodyIndex = 0; tbodyIndex < tbodyLen; tbodyIndex++ ) {
                    cache = c.cache[ tbodyIndex ].normalized;
                    rowLen = cache.length;
                    for ( rowIndex = 0; rowIndex < rowLen; rowIndex++ ) {
                        row = cache[ rowIndex ];
                        if ( rowFilter && !row[ c.columns ].$row.is( rowFilter ) ) {
                            continue;
                        }
                        result = true;
                        parsed = ( allColumns ) ? row.slice( 0, c.columns ) : row[ column ];
                        row = row[ c.columns ];
                        raw = ( allColumns ) ? row.raw : row.raw[ column ];
                        $cell = ( allColumns ) ? row.$row.children() : row.$row.children().eq( column );
                        if ( hasCallback ) {
                            result = callback({
                                tbodyIndex : tbodyIndex,
                                rowIndex : rowIndex,
                                parsed : parsed,
                                raw : raw,
                                $row : row.$row,
                                $cell : $cell
                            });
                        }
                        if ( result !== false ) {
                            data.parsed[ data.parsed.length ] = parsed;
                            data.raw[ data.raw.length ] = raw;
                            data.$cell[ data.$cell.length ] = $cell;
                        }
                    }
                }
                // return everything
                return data;
            }
        },

        /*
        ██  ██ █████▄ █████▄ ▄████▄ ██████ ██████
        ██  ██ ██▄▄██ ██  ██ ██▄▄██   ██   ██▄▄
        ██  ██ ██▀▀▀  ██  ██ ██▀▀██   ██   ██▀▀
        ▀████▀ ██     █████▀ ██  ██   ██   ██████
        */
        setHeadersCss : function( c ) {
            var $sorted, indx, column,
                list = c.sortList,
                len = list.length,
                none = ts.css.sortNone + ' ' + c.cssNone,
                css = [ ts.css.sortAsc + ' ' + c.cssAsc, ts.css.sortDesc + ' ' + c.cssDesc ],
                cssIcon = [ c.cssIconAsc, c.cssIconDesc, c.cssIconNone ],
                aria = [ 'ascending', 'descending' ],
                // find the footer
                $headers = c.$table
                    .find( 'tfoot tr' )
                    .children( 'td, th' )
                    .add( $( c.namespace + '_extra_headers' ) )
                    .removeClass( css.join( ' ' ) );
            // remove all header information
            c.$headers
                .add( $( 'thead ' + c.namespace + '_extra_headers' ) )
                .removeClass( css.join( ' ' ) )
                .addClass( none )
                .attr( 'aria-sort', 'none' )
                .find( '.' + ts.css.icon )
                .removeClass( cssIcon.join( ' ' ) )
                .addClass( cssIcon[ 2 ] );
            for ( indx = 0; indx < len; indx++ ) {
                // direction = 2 means reset!
                if ( list[ indx ][ 1 ] !== 2 ) {
                    // multicolumn sorting updating - see #1005
                    // .not(function(){}) needs jQuery 1.4
                    // filter(function(i, el){}) <- el is undefined in jQuery v1.2.6
                    $sorted = c.$headers.filter( function( i ) {
                        // only include headers that are in the sortList (this includes colspans)
                        var include = true,
                            $el = c.$headers.eq( i ),
                            col = parseInt( $el.attr( 'data-column' ), 10 ),
                            end = col + c.$headers[ i ].colSpan;
                        for ( ; col < end; col++ ) {
                            include = include ? include || ts.isValueInArray( col, c.sortList ) > -1 : false;
                        }
                        return include;
                    });

                    // choose the :last in case there are nested columns
                    $sorted = $sorted
                        .not( '.sorter-false' )
                        .filter( '[data-column="' + list[ indx ][ 0 ] + '"]' + ( len === 1 ? ':last' : '' ) );
                    if ( $sorted.length ) {
                        for ( column = 0; column < $sorted.length; column++ ) {
                            if ( !$sorted[ column ].sortDisabled ) {
                                $sorted
                                    .eq( column )
                                    .removeClass( none )
                                    .addClass( css[ list[ indx ][ 1 ] ] )
                                    .attr( 'aria-sort', aria[ list[ indx ][ 1 ] ] )
                                    .find( '.' + ts.css.icon )
                                    .removeClass( cssIcon[ 2 ] )
                                    .addClass( cssIcon[ list[ indx ][ 1 ] ] );
                            }
                        }
                        // add sorted class to footer & extra headers, if they exist
                        if ( $headers.length ) {
                            $headers
                                .filter( '[data-column="' + list[ indx ][ 0 ] + '"]' )
                                .removeClass( none )
                                .addClass( css[ list[ indx ][ 1 ] ] );
                        }
                    }
                }
            }
            // add verbose aria labels
            len = c.$headers.length;
            for ( indx = 0; indx < len; indx++ ) {
                ts.setColumnAriaLabel( c, c.$headers.eq( indx ) );
            }
        },

        // nextSort (optional), lets you disable next sort text
        setColumnAriaLabel : function( c, $header, nextSort ) {
            if ( $header.length ) {
                var column = parseInt( $header.attr( 'data-column' ), 10 ),
                    vars = c.sortVars[ column ],
                    tmp = $header.hasClass( ts.css.sortAsc ) ?
                        'sortAsc' :
                        $header.hasClass( ts.css.sortDesc ) ? 'sortDesc' : 'sortNone',
                    txt = $.trim( $header.text() ) + ': ' + ts.language[ tmp ];
                if ( $header.hasClass( 'sorter-false' ) || nextSort === false ) {
                    txt += ts.language.sortDisabled;
                } else {
                    tmp = ( vars.count + 1 ) % vars.order.length;
                    nextSort = vars.order[ tmp ];
                    // if nextSort
                    txt += ts.language[ nextSort === 0 ? 'nextAsc' : nextSort === 1 ? 'nextDesc' : 'nextNone' ];
                }
                $header.attr( 'aria-label', txt );
            }
        },

        updateHeader : function( c ) {
            var index, isDisabled, $header, col,
                table = c.table,
                len = c.$headers.length;
            for ( index = 0; index < len; index++ ) {
                $header = c.$headers.eq( index );
                col = ts.getColumnData( table, c.headers, index, true );
                // add 'sorter-false' class if 'parser-false' is set
                isDisabled = ts.getData( $header, col, 'sorter' ) === 'false' || ts.getData( $header, col, 'parser' ) === 'false';
                ts.setColumnSort( c, $header, isDisabled );
            }
        },

        setColumnSort : function( c, $header, isDisabled ) {
            var id = c.table.id;
            $header[ 0 ].sortDisabled = isDisabled;
            $header[ isDisabled ? 'addClass' : 'removeClass' ]( 'sorter-false' )
                .attr( 'aria-disabled', '' + isDisabled );
            // disable tab index on disabled cells
            if ( c.tabIndex ) {
                if ( isDisabled ) {
                    $header.removeAttr( 'tabindex' );
                } else {
                    $header.attr( 'tabindex', '0' );
                }
            }
            // aria-controls - requires table ID
            if ( id ) {
                if ( isDisabled ) {
                    $header.removeAttr( 'aria-controls' );
                } else {
                    $header.attr( 'aria-controls', id );
                }
            }
        },

        updateHeaderSortCount : function( c, list ) {
            var col, dir, group, indx, primary, temp, val, order,
                sortList = list || c.sortList,
                len = sortList.length;
            c.sortList = [];
            for ( indx = 0; indx < len; indx++ ) {
                val = sortList[ indx ];
                // ensure all sortList values are numeric - fixes #127
                col = parseInt( val[ 0 ], 10 );
                // prevents error if sorton array is wrong
                if ( col < c.columns ) {

                    // set order if not already defined - due to colspan header without associated header cell
                    // adding this check prevents a javascript error
                    if ( !c.sortVars[ col ].order ) {
                        if ( ts.getOrder( c.sortInitialOrder ) ) {
                            order = c.sortReset ? [ 1, 0, 2 ] : [ 1, 0 ];
                        } else {
                            order = c.sortReset ? [ 0, 1, 2 ] : [ 0, 1 ];
                        }
                        c.sortVars[ col ].order = order;
                        c.sortVars[ col ].count = 0;
                    }

                    order = c.sortVars[ col ].order;
                    dir = ( '' + val[ 1 ] ).match( /^(1|d|s|o|n)/ );
                    dir = dir ? dir[ 0 ] : '';
                    // 0/(a)sc (default), 1/(d)esc, (s)ame, (o)pposite, (n)ext
                    switch ( dir ) {
                        case '1' : case 'd' : // descending
                            dir = 1;
                            break;
                        case 's' : // same direction (as primary column)
                            // if primary sort is set to 's', make it ascending
                            dir = primary || 0;
                            break;
                        case 'o' :
                            temp = order[ ( primary || 0 ) % order.length ];
                            // opposite of primary column; but resets if primary resets
                            dir = temp === 0 ? 1 : temp === 1 ? 0 : 2;
                            break;
                        case 'n' :
                            dir = order[ ( ++c.sortVars[ col ].count ) % order.length ];
                            break;
                        default : // ascending
                            dir = 0;
                            break;
                    }
                    primary = indx === 0 ? dir : primary;
                    group = [ col, parseInt( dir, 10 ) || 0 ];
                    c.sortList[ c.sortList.length ] = group;
                    dir = $.inArray( group[ 1 ], order ); // fixes issue #167
                    c.sortVars[ col ].count = dir >= 0 ? dir : group[ 1 ] % order.length;
                }
            }
        },

        updateAll : function( c, resort, callback ) {
            var table = c.table;
            table.isUpdating = true;
            ts.refreshWidgets( table, true, true );
            ts.buildHeaders( c );
            ts.bindEvents( table, c.$headers, true );
            ts.bindMethods( c );
            ts.commonUpdate( c, resort, callback );
        },

        update : function( c, resort, callback ) {
            console.log('update');
            var table = c.table;
            table.isUpdating = true;
            // update sorting (if enabled/disabled)
            ts.updateHeader( c );
            ts.commonUpdate( c, resort, callback );
        },

        // simple header update - see #989
        updateHeaders : function( c, callback ) {
            c.table.isUpdating = true;
            ts.buildHeaders( c );
            ts.bindEvents( c.table, c.$headers, true );
            ts.resortComplete( c, callback );
        },

        updateCell : function( c, cell, resort, callback ) {
            if ( ts.isEmptyObject( c.cache ) ) {
                // empty table, do an update instead - fixes #1099
                ts.updateHeader( c );
                ts.commonUpdate( c, resort, callback );
                return;
            }
            c.table.isUpdating = true;
            c.$table.find( c.selectorRemove ).remove();
            // get position from the dom
            var tmp, indx, row, icell, cache, len,
                $tbodies = c.$tbodies,
                $cell = $( cell ),
                // update cache - format: function( s, table, cell, cellIndex )
                // no closest in jQuery v1.2.6
                tbodyIndex = $tbodies
                    .index( $.fn.closest ? $cell.closest( 'tbody' ) : $cell.parents( 'tbody' ).filter( ':first' ) ),
                tbcache = c.cache[ tbodyIndex ],
                $row = $.fn.closest ? $cell.closest( 'tr' ) : $cell.parents( 'tr' ).filter( ':first' );
            cell = $cell[ 0 ]; // in case cell is a jQuery object
            // tbody may not exist if update is initialized while tbody is removed for processing
            if ( $tbodies.length && tbodyIndex >= 0 ) {
                row = $tbodies.eq( tbodyIndex ).find( 'tr' ).index( $row );
                cache = tbcache.normalized[ row ];
                len = $row[ 0 ].cells.length;
                if ( len !== c.columns ) {
                    // colspan in here somewhere!
                    icell = 0;
                    tmp = false;
                    for ( indx = 0; indx < len; indx++ ) {
                        if ( !tmp && $row[ 0 ].cells[ indx ] !== cell ) {
                            icell += $row[ 0 ].cells[ indx ].colSpan;
                        } else {
                            tmp = true;
                        }
                    }
                } else {
                    icell = $cell.index();
                }
                tmp = ts.getElementText( c, cell, icell ); // raw
                cache[ c.columns ].raw[ icell ] = tmp;
                tmp = ts.getParsedText( c, cell, icell, tmp );
                cache[ icell ] = tmp; // parsed
                cache[ c.columns ].$row = $row;
                if ( ( c.parsers[ icell ].type || '' ).toLowerCase() === 'numeric' ) {
                    // update column max value (ignore sign)
                    tbcache.colMax[ icell ] = Math.max( Math.abs( tmp ) || 0, tbcache.colMax[ icell ] || 0 );
                }
                tmp = resort !== 'undefined' ? resort : c.resort;
                if ( tmp !== false ) {
                    // widgets will be reapplied
                    ts.checkResort( c, tmp, callback );
                } else {
                    // don't reapply widgets is resort is false, just in case it causes
                    // problems with element focus
                    ts.resortComplete( c, callback );
                }
            } else {
                if ( c.debug ) {
                    console.error( 'updateCell aborted, tbody missing or not within the indicated table' );
                }
                c.table.isUpdating = false;
            }
        },

        addRows : function( c, $row, resort, callback ) {
            var txt, val, tbodyIndex, rowIndex, rows, cellIndex, len, order,
                cacheIndex, rowData, cells, cell, span,
                // allow passing a row string if only one non-info tbody exists in the table
                valid = typeof $row === 'string' && c.$tbodies.length === 1 && /<tr/.test( $row || '' ),
                table = c.table;
            if ( valid ) {
                $row = $( $row );
                c.$tbodies.append( $row );
            } else if ( !$row ||
                // row is a jQuery object?
                !( $row instanceof jQuery ) ||
                // row contained in the table?
                ( $.fn.closest ? $row.closest( 'table' )[ 0 ] : $row.parents( 'table' )[ 0 ] ) !== c.table ) {
                if ( c.debug ) {
                    console.error( 'addRows method requires (1) a jQuery selector reference to rows that have already ' +
                        'been added to the table, or (2) row HTML string to be added to a table with only one tbody' );
                }
                return false;
            }
            table.isUpdating = true;
            if ( ts.isEmptyObject( c.cache ) ) {
                // empty table, do an update instead - fixes #450
                ts.updateHeader( c );
                ts.commonUpdate( c, resort, callback );
            } else {
                rows = $row.filter( 'tr' ).attr( 'role', 'row' ).length;
                tbodyIndex = c.$tbodies.index( $row.parents( 'tbody' ).filter( ':first' ) );
                // fixes adding rows to an empty table - see issue #179
                if ( !( c.parsers && c.parsers.length ) ) {
                    ts.setupParsers( c );
                }
                // add each row
                for ( rowIndex = 0; rowIndex < rows; rowIndex++ ) {
                    cacheIndex = 0;
                    len = $row[ rowIndex ].cells.length;
                    order = c.cache[ tbodyIndex ].normalized.length;
                    cells = [];
                    rowData = {
                        child : [],
                        raw : [],
                        $row : $row.eq( rowIndex ),
                        order : order
                    };
                    // add each cell
                    for ( cellIndex = 0; cellIndex < len; cellIndex++ ) {
                        cell = $row[ rowIndex ].cells[ cellIndex ];
                        txt = ts.getElementText( c, cell, cacheIndex );
                        rowData.raw[ cacheIndex ] = txt;
                        val = ts.getParsedText( c, cell, cacheIndex, txt );
                        cells[ cacheIndex ] = val;
                        if ( ( c.parsers[ cacheIndex ].type || '' ).toLowerCase() === 'numeric' ) {
                            // update column max value (ignore sign)
                            c.cache[ tbodyIndex ].colMax[ cacheIndex ] =
                                Math.max( Math.abs( val ) || 0, c.cache[ tbodyIndex ].colMax[ cacheIndex ] || 0 );
                        }
                        span = cell.colSpan - 1;
                        if ( span > 0 ) {
                            cacheIndex += span;
                        }
                        cacheIndex++;
                    }
                    // add the row data to the end
                    cells[ c.columns ] = rowData;
                    // update cache
                    c.cache[ tbodyIndex ].normalized[ order ] = cells;
                }
                // resort using current settings
                ts.checkResort( c, resort, callback );
            }
        },

        updateCache : function( c, callback, $tbodies ) {
            console.log('updated cache');

            // rebuild parsers
            if ( !( c.parsers && c.parsers.length ) ) {
                ts.setupParsers( c, $tbodies );
            }
            // rebuild the cache map
            ts.buildCache( c, callback, $tbodies );
        },

        // init flag (true) used by pager plugin to prevent widget application
        // renamed from appendToTable
        appendCache : function( c, init ) {
            var parsed, totalRows, $tbody, $curTbody, rowIndex, tbodyIndex, appendTime,
                table = c.table,
                wo = c.widgetOptions,
                $tbodies = c.$tbodies,
                rows = [],
                cache = c.cache;
            // empty table - fixes #206/#346
            if ( ts.isEmptyObject( cache ) ) {
                // run pager appender in case the table was just emptied
                return c.appender ? c.appender( table, rows ) :
                    table.isUpdating ? c.$table.triggerHandler( 'updateComplete', table ) : ''; // Fixes #532
            }
            if ( c.debug ) {
                appendTime = new Date();
            }
            for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
                $tbody = $tbodies.eq( tbodyIndex );
                if ( $tbody.length ) {
                    // detach tbody for manipulation
                    $curTbody = ts.processTbody( table, $tbody, true );
                    parsed = cache[ tbodyIndex ].normalized;
                    totalRows = parsed.length;
                    for ( rowIndex = 0; rowIndex < totalRows; rowIndex++ ) {
                        rows[rows.length] = parsed[ rowIndex ][ c.columns ].$row;
                        // removeRows used by the pager plugin; don't render if using ajax - fixes #411
                        if ( !c.appender || ( c.pager && ( !c.pager.removeRows || !wo.pager_removeRows ) && !c.pager.ajax ) ) {
                            $curTbody.append( parsed[ rowIndex ][ c.columns ].$row );
                        }
                    }
                    // restore tbody
                    ts.processTbody( table, $curTbody, false );
                }
            }
            if ( c.appender ) {
                c.appender( table, rows );
            }
            if ( c.debug ) {
                console.log( 'Rebuilt table' + ts.benchmark( appendTime ) );
            }
            // apply table widgets; but not before ajax completes
            if ( !init && !c.appender ) {
                ts.applyWidget( table );
            }
            if ( table.isUpdating ) {
                c.$table.triggerHandler( 'updateComplete', table );
            }
        },

        commonUpdate : function( c, resort, callback ) {
            // remove rows/elements before update
            c.$table.find( c.selectorRemove ).remove();
            // rebuild parsers
            ts.setupParsers( c );
            // rebuild the cache map
            ts.buildCache( c );
            ts.checkResort( c, resort, callback );
        },

        /*
        ▄█████ ▄████▄ █████▄ ██████ ██ █████▄ ▄████▄
        ▀█▄    ██  ██ ██▄▄██   ██   ██ ██  ██ ██ ▄▄▄
           ▀█▄ ██  ██ ██▀██    ██   ██ ██  ██ ██ ▀██
        █████▀ ▀████▀ ██  ██   ██   ██ ██  ██ ▀████▀
        */
        initSort : function( c, cell, event ) {
            if ( c.table.isUpdating ) {
                // let any updates complete before initializing a sort
                return setTimeout( function(){
                    ts.initSort( c, cell, event );
                }, 50 );
            }

            var arry, indx, headerIndx, dir, temp, tmp, $header,
                notMultiSort = !event[ c.sortMultiSortKey ],
                table = c.table,
                len = c.$headers.length,
                // get current column index
                col = parseInt( $( cell ).attr( 'data-column' ), 10 ),
                order = c.sortVars[ col ].order;

            // Only call sortStart if sorting is enabled
            c.$table.triggerHandler( 'sortStart', table );
            // get current column sort order
            tmp = ( c.sortVars[ col ].count + 1 ) % order.length;
            c.sortVars[ col ].count = event[ c.sortResetKey ] ? 2 : tmp;
            // reset all sorts on non-current column - issue #30
            if ( c.sortRestart ) {
                for ( headerIndx = 0; headerIndx < len; headerIndx++ ) {
                    $header = c.$headers.eq( headerIndx );
                    tmp = parseInt( $header.attr( 'data-column' ), 10 );
                    // only reset counts on columns that weren't just clicked on and if not included in a multisort
                    if ( col !== tmp && ( notMultiSort || $header.hasClass( ts.css.sortNone ) ) ) {
                        c.sortVars[ tmp ].count = -1;
                    }
                }
            }
            // user only wants to sort on one column
            if ( notMultiSort ) {
                // flush the sort list
                c.sortList = [];
                c.last.sortList = [];
                if ( c.sortForce !== null ) {
                    arry = c.sortForce;
                    for ( indx = 0; indx < arry.length; indx++ ) {
                        if ( arry[ indx ][ 0 ] !== col ) {
                            c.sortList[ c.sortList.length ] = arry[ indx ];
                        }
                    }
                }
                // add column to sort list
                dir = order[ c.sortVars[ col ].count ];
                if ( dir < 2 ) {
                    c.sortList[ c.sortList.length ] = [ col, dir ];
                    // add other columns if header spans across multiple
                    if ( cell.colSpan > 1 ) {
                        for ( indx = 1; indx < cell.colSpan; indx++ ) {
                            c.sortList[ c.sortList.length ] = [ col + indx, dir ];
                            // update count on columns in colSpan
                            c.sortVars[ col + indx ].count = $.inArray( dir, order );
                        }
                    }
                }
                // multi column sorting
            } else {
                // get rid of the sortAppend before adding more - fixes issue #115 & #523
                c.sortList = $.extend( [], c.last.sortList );

                // the user has clicked on an already sorted column
                if ( ts.isValueInArray( col, c.sortList ) >= 0 ) {
                    // reverse the sorting direction
                    for ( indx = 0; indx < c.sortList.length; indx++ ) {
                        tmp = c.sortList[ indx ];
                        if ( tmp[ 0 ] === col ) {
                            // order.count seems to be incorrect when compared to cell.count
                            tmp[ 1 ] = order[ c.sortVars[ col ].count ];
                            if ( tmp[1] === 2 ) {
                                c.sortList.splice( indx, 1 );
                                c.sortVars[ col ].count = -1;
                            }
                        }
                    }
                } else {
                    // add column to sort list array
                    dir = order[ c.sortVars[ col ].count ];
                    if ( dir < 2 ) {
                        c.sortList[ c.sortList.length ] = [ col, dir ];
                        // add other columns if header spans across multiple
                        if ( cell.colSpan > 1 ) {
                            for ( indx = 1; indx < cell.colSpan; indx++ ) {
                                c.sortList[ c.sortList.length ] = [ col + indx, dir ];
                                // update count on columns in colSpan
                                c.sortVars[ col + indx ].count = $.inArray( dir, order );
                            }
                        }
                    }
                }
            }
            // save sort before applying sortAppend
            c.last.sortList = $.extend( [], c.sortList );
            if ( c.sortList.length && c.sortAppend ) {
                arry = $.isArray( c.sortAppend ) ? c.sortAppend : c.sortAppend[ c.sortList[ 0 ][ 0 ] ];
                if ( !ts.isEmptyObject( arry ) ) {
                    for ( indx = 0; indx < arry.length; indx++ ) {
                        if ( arry[ indx ][ 0 ] !== col && ts.isValueInArray( arry[ indx ][ 0 ], c.sortList ) < 0 ) {
                            dir = arry[ indx ][ 1 ];
                            temp = ( '' + dir ).match( /^(a|d|s|o|n)/ );
                            if ( temp ) {
                                tmp = c.sortList[ 0 ][ 1 ];
                                switch ( temp[ 0 ] ) {
                                    case 'd' :
                                        dir = 1;
                                        break;
                                    case 's' :
                                        dir = tmp;
                                        break;
                                    case 'o' :
                                        dir = tmp === 0 ? 1 : 0;
                                        break;
                                    case 'n' :
                                        dir = ( tmp + 1 ) % order.length;
                                        break;
                                    default:
                                        dir = 0;
                                        break;
                                }
                            }
                            c.sortList[ c.sortList.length ] = [ arry[ indx ][ 0 ], dir ];
                        }
                    }
                }
            }
            // sortBegin event triggered immediately before the sort
            c.$table.triggerHandler( 'sortBegin', table );
            // setTimeout needed so the processing icon shows up
            setTimeout( function() {
                // set css for headers
                ts.setHeadersCss( c );
                ts.multisort( c );
                ts.appendCache( c );
                c.$table.triggerHandler( 'sortBeforeEnd', table );
                c.$table.triggerHandler( 'sortEnd', table );
            }, 1 );
        },

        // sort multiple columns
        multisort : function( c ) { /*jshint loopfunc:true */
            var tbodyIndex, sortTime, colMax, rows, tmp,
                table = c.table,
                sorter = [],
                dir = 0,
                textSorter = c.textSorter || '',
                sortList = c.sortList,
                sortLen = sortList.length,
                len = c.$tbodies.length;
            if ( c.serverSideSorting || ts.isEmptyObject( c.cache ) ) {
                // empty table - fixes #206/#346
                return;
            }
            if ( c.debug ) { sortTime = new Date(); }
            // cache textSorter to optimize speed
            if ( typeof textSorter === 'object' ) {
                colMax = c.columns;
                while ( colMax-- ) {
                    tmp = ts.getColumnData( table, textSorter, colMax );
                    if ( typeof tmp === 'function' ) {
                        sorter[ colMax ] = tmp;
                    }
                }
            }
            for ( tbodyIndex = 0; tbodyIndex < len; tbodyIndex++ ) {
                colMax = c.cache[ tbodyIndex ].colMax;
                rows = c.cache[ tbodyIndex ].normalized;

                rows.sort( function( a, b ) {
                    var sortIndex, num, col, order, sort, x, y;
                    // rows is undefined here in IE, so don't use it!
                    for ( sortIndex = 0; sortIndex < sortLen; sortIndex++ ) {
                        col = sortList[ sortIndex ][ 0 ];
                        order = sortList[ sortIndex ][ 1 ];
                        // sort direction, true = asc, false = desc
                        dir = order === 0;

                        if ( c.sortStable && a[ col ] === b[ col ] && sortLen === 1 ) {
                            return a[ c.columns ].order - b[ c.columns ].order;
                        }

                        // fallback to natural sort since it is more robust
                        num = /n/i.test( ts.getSortType( c.parsers, col ) );
                        if ( num && c.strings[ col ] ) {
                            // sort strings in numerical columns
                            if ( typeof ( ts.string[ c.strings[ col ] ] ) === 'boolean' ) {
                                num = ( dir ? 1 : -1 ) * ( ts.string[ c.strings[ col ] ] ? -1 : 1 );
                            } else {
                                num = ( c.strings[ col ] ) ? ts.string[ c.strings[ col ] ] || 0 : 0;
                            }
                            // fall back to built-in numeric sort
                            // var sort = $.tablesorter['sort' + s]( a[col], b[col], dir, colMax[col], table );
                            sort = c.numberSorter ? c.numberSorter( a[ col ], b[ col ], dir, colMax[ col ], table ) :
                                ts[ 'sortNumeric' + ( dir ? 'Asc' : 'Desc' ) ]( a[ col ], b[ col ], num, colMax[ col ], col, c );
                        } else {
                            // set a & b depending on sort direction
                            x = dir ? a : b;
                            y = dir ? b : a;
                            // text sort function
                            if ( typeof textSorter === 'function' ) {
                                // custom OVERALL text sorter
                                sort = textSorter( x[ col ], y[ col ], dir, col, table );
                            } else if ( typeof sorter[ col ] === 'function' ) {
                                // custom text sorter for a SPECIFIC COLUMN
                                sort = sorter[ col ]( x[ col ], y[ col ], dir, col, table );
                            } else {
                                // fall back to natural sort
                                sort = ts[ 'sortNatural' + ( dir ? 'Asc' : 'Desc' ) ]( a[ col ], b[ col ], col, c );
                            }
                        }
                        if ( sort ) { return sort; }
                    }
                    return a[ c.columns ].order - b[ c.columns ].order;
                });
            }
            if ( c.debug ) {
                console.log( 'Applying sort ' + sortList.toString() + ts.benchmark( sortTime ) );
            }
        },

        resortComplete : function( c, callback ) {
            console.log('resort complete');
            if ( c.table.isUpdating ) {
                c.$table.triggerHandler( 'updateComplete', c.table );
            }
            if ( $.isFunction( callback ) ) {
                callback( c.table );
            }
        },

        checkResort : function( c, resort, callback ) {
            console.log('check resort');
            var sortList = $.isArray( resort ) ? resort : c.sortList,
                // if no resort parameter is passed, fallback to config.resort (true by default)
                resrt = typeof resort === 'undefined' ? c.resort : resort;
            // don't try to resort if the table is still processing
            // this will catch spamming of the updateCell method
            if ( resrt !== false && !c.serverSideSorting && !c.table.isProcessing ) {
                if ( sortList.length ) {
                    ts.sortOn( c, sortList, function() {
                        ts.resortComplete( c, callback );
                    }, true );
                } else {
                    ts.sortReset( c, function() {
                        ts.resortComplete( c, callback );
                        ts.applyWidget( c.table, false );
                    } );
                }
            } else {
                ts.resortComplete( c, callback );
                ts.applyWidget( c.table, false );
            }
        },

        sortOn : function( c, list, callback, init ) {
            console.log('sorton');

            var table = c.table;
            c.$table.triggerHandler( 'sortStart', table );
            // update header count index
            ts.updateHeaderSortCount( c, list );
            // set css for headers
            ts.setHeadersCss( c );
            // fixes #346
            if ( c.delayInit && ts.isEmptyObject( c.cache ) ) {
                ts.buildCache( c );
            }
            c.$table.triggerHandler( 'sortBegin', table );
            // sort the table and append it to the dom
            ts.multisort( c );
            ts.appendCache( c, init );
            c.$table.triggerHandler( 'sortBeforeEnd', table );
            c.$table.triggerHandler( 'sortEnd', table );
            ts.applyWidget( table );
            if ( $.isFunction( callback ) ) {
                callback( table );
            }
        },

        sortReset : function( c, callback ) {
            c.sortList = [];
            ts.setHeadersCss( c );
            ts.multisort( c );
            ts.appendCache( c );
            if ( $.isFunction( callback ) ) {
                callback( c.table );
            }
        },

        getSortType : function( parsers, column ) {
            return ( parsers && parsers[ column ] ) ? parsers[ column ].type || '' : '';
        },

        getOrder : function( val ) {
            // look for 'd' in 'desc' order; return true
            return ( /^d/i.test( val ) || val === 1 );
        },

        // Natural sort - https://github.com/overset/javascript-natural-sort (date sorting removed)
        // this function will only accept strings, or you'll see 'TypeError: undefined is not a function'
        // I could add a = a.toString(); b = b.toString(); but it'll slow down the sort overall
        sortNatural : function( a, b ) {
            if ( a === b ) { return 0; }
            var aNum, bNum, aFloat, bFloat, indx, max,
                regex = ts.regex;
            // first try and sort Hex codes
            if ( regex.hex.test( b ) ) {
                aNum = parseInt( ( a || '' ).match( regex.hex ), 16 );
                bNum = parseInt( ( b || '' ).match( regex.hex ), 16 );
                if ( aNum < bNum ) { return -1; }
                if ( aNum > bNum ) { return 1; }
            }
            // chunk/tokenize
            aNum = ( a || '' ).replace( regex.chunk, '\\0$1\\0' ).replace( regex.chunks, '' ).split( '\\0' );
            bNum = ( b || '' ).replace( regex.chunk, '\\0$1\\0' ).replace( regex.chunks, '' ).split( '\\0' );
            max = Math.max( aNum.length, bNum.length );
            // natural sorting through split numeric strings and default strings
            for ( indx = 0; indx < max; indx++ ) {
                // find floats not starting with '0', string or 0 if not defined
                aFloat = isNaN( aNum[ indx ] ) ? aNum[ indx ] || 0 : parseFloat( aNum[ indx ] ) || 0;
                bFloat = isNaN( bNum[ indx ] ) ? bNum[ indx ] || 0 : parseFloat( bNum[ indx ] ) || 0;
                // handle numeric vs string comparison - number < string - (Kyle Adams)
                if ( isNaN( aFloat ) !== isNaN( bFloat ) ) { return isNaN( aFloat ) ? 1 : -1; }
                // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
                if ( typeof aFloat !== typeof bFloat ) {
                    aFloat += '';
                    bFloat += '';
                }
                if ( aFloat < bFloat ) { return -1; }
                if ( aFloat > bFloat ) { return 1; }
            }
            return 0;
        },

        sortNaturalAsc : function( a, b, col, c ) {
            if ( a === b ) { return 0; }
            var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
            if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : -empty || -1; }
            if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : empty || 1; }
            return ts.sortNatural( a, b );
        },

        sortNaturalDesc : function( a, b, col, c ) {
            if ( a === b ) { return 0; }
            var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
            if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : empty || 1; }
            if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : -empty || -1; }
            return ts.sortNatural( b, a );
        },

        // basic alphabetical sort
        sortText : function( a, b ) {
            return a > b ? 1 : ( a < b ? -1 : 0 );
        },

        // return text string value by adding up ascii value
        // so the text is somewhat sorted when using a digital sort
        // this is NOT an alphanumeric sort
        getTextValue : function( val, num, max ) {
            if ( max ) {
                // make sure the text value is greater than the max numerical value (max)
                var indx,
                    len = val ? val.length : 0,
                    n = max + num;
                for ( indx = 0; indx < len; indx++ ) {
                    n += val.charCodeAt( indx );
                }
                return num * n;
            }
            return 0;
        },

        sortNumericAsc : function( a, b, num, max, col, c ) {
            if ( a === b ) { return 0; }
            var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
            if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : -empty || -1; }
            if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : empty || 1; }
            if ( isNaN( a ) ) { a = ts.getTextValue( a, num, max ); }
            if ( isNaN( b ) ) { b = ts.getTextValue( b, num, max ); }
            return a - b;
        },

        sortNumericDesc : function( a, b, num, max, col, c ) {
            if ( a === b ) { return 0; }
            var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
            if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : empty || 1; }
            if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : -empty || -1; }
            if ( isNaN( a ) ) { a = ts.getTextValue( a, num, max ); }
            if ( isNaN( b ) ) { b = ts.getTextValue( b, num, max ); }
            return b - a;
        },

        sortNumeric : function( a, b ) {
            return a - b;
        },

        /*
        ██ ██ ██ ██ █████▄ ▄████▄ ██████ ██████ ▄█████
        ██ ██ ██ ██ ██  ██ ██ ▄▄▄ ██▄▄     ██   ▀█▄
        ██ ██ ██ ██ ██  ██ ██ ▀██ ██▀▀     ██      ▀█▄
        ███████▀ ██ █████▀ ▀████▀ ██████   ██   █████▀
        */
        addWidget : function( widget ) {
            if ( widget.id && !ts.isEmptyObject( ts.getWidgetById( widget.id ) ) ) {
                console.warn( '"' + widget.id + '" widget was loaded more than once!' );
            }
            ts.widgets[ ts.widgets.length ] = widget;
        },

        hasWidget : function( $table, name ) {
            $table = $( $table );
            return $table.length && $table[ 0 ].config && $table[ 0 ].config.widgetInit[ name ] || false;
        },

        getWidgetById : function( name ) {
            var indx, widget,
                len = ts.widgets.length;
            for ( indx = 0; indx < len; indx++ ) {
                widget = ts.widgets[ indx ];
                if ( widget && widget.id && widget.id.toLowerCase() === name.toLowerCase() ) {
                    return widget;
                }
            }
        },

        applyWidgetOptions : function( table ) {
            var indx, widget,
                c = table.config,
                len = c.widgets.length;
            if ( len ) {
                for ( indx = 0; indx < len; indx++ ) {
                    widget = ts.getWidgetById( c.widgets[ indx ] );
                    if ( widget && widget.options ) {
                        c.widgetOptions = $.extend( true, {}, widget.options, c.widgetOptions );
                        // add widgetOptions to defaults for option validator
                        $.extend( true, ts.defaults.widgetOptions, widget.options );
                    }
                }
            }
        },

        addWidgetFromClass : function( table ) {
            var len, indx,
                c = table.config,
                // look for widgets to apply from table class
                // don't match from 'ui-widget-content'; use \S instead of \w to include widgets
                // with dashes in the name, e.g. "widget-test-2" extracts out "test-2"
                regex = '^' + c.widgetClass.replace( ts.regex.templateName, '(\\S+)+' ) + '$',
                widgetClass = new RegExp( regex, 'g' ),
                // split up table class (widget id's can include dashes) - stop using match
                // otherwise only one widget gets extracted, see #1109
                widgets = ( table.className || '' ).split( ts.regex.spaces );
            if ( widgets.length ) {
                len = widgets.length;
                for ( indx = 0; indx < len; indx++ ) {
                    if ( widgets[ indx ].match( widgetClass ) ) {
                        c.widgets[ c.widgets.length ] = widgets[ indx ].replace( widgetClass, '$1' );
                    }
                }
            }
        },

        applyWidgetId : function( table, id, init ) {
            table = $(table)[0];
            var applied, time, name,
                c = table.config,
                wo = c.widgetOptions,
                widget = ts.getWidgetById( id );
            if ( widget ) {
                name = widget.id;
                applied = false;
                // add widget name to option list so it gets reapplied after sorting, filtering, etc
                if ( $.inArray( name, c.widgets ) < 0 ) {
                    c.widgets[ c.widgets.length ] = name;
                }
                if ( c.debug ) { time = new Date(); }

                if ( init || !( c.widgetInit[ name ] ) ) {
                    // set init flag first to prevent calling init more than once (e.g. pager)
                    c.widgetInit[ name ] = true;
                    if ( table.hasInitialized ) {
                        // don't reapply widget options on tablesorter init
                        ts.applyWidgetOptions( table );
                    }
                    if ( typeof widget.init === 'function' ) {
                        applied = true;
                        if ( c.debug ) {
                            console[ console.group ? 'group' : 'log' ]( 'Initializing ' + name + ' widget' );
                        }
                        widget.init( table, widget, c, wo );
                    }
                }
                if ( !init && typeof widget.format === 'function' ) {
                    applied = true;
                    if ( c.debug ) {
                        console[ console.group ? 'group' : 'log' ]( 'Updating ' + name + ' widget' );
                    }
                    widget.format( table, c, wo, false );
                }
                if ( c.debug ) {
                    if ( applied ) {
                        console.log( 'Completed ' + ( init ? 'initializing ' : 'applying ' ) + name + ' widget' + ts.benchmark( time ) );
                        if ( console.groupEnd ) { console.groupEnd(); }
                    }
                }
            }
        },

        applyWidget : function( table, init, callback ) {
            table = $( table )[ 0 ]; // in case this is called externally
            var indx, len, names, widget, time,
                c = table.config,
                widgets = [];
            // prevent numerous consecutive widget applications
            if ( init !== false && table.hasInitialized && ( table.isApplyingWidgets || table.isUpdating ) ) {
                return;
            }
            if ( c.debug ) { time = new Date(); }
            ts.addWidgetFromClass( table );
            // prevent "tablesorter-ready" from firing multiple times in a row
            clearTimeout( c.timerReady );
            if ( c.widgets.length ) {
                table.isApplyingWidgets = true;
                // ensure unique widget ids
                c.widgets = $.grep( c.widgets, function( val, index ) {
                    return $.inArray( val, c.widgets ) === index;
                });
                names = c.widgets || [];
                len = names.length;
                // build widget array & add priority as needed
                for ( indx = 0; indx < len; indx++ ) {
                    widget = ts.getWidgetById( names[ indx ] );
                    if ( widget && widget.id ) {
                        // set priority to 10 if not defined
                        if ( !widget.priority ) { widget.priority = 10; }
                        widgets[ indx ] = widget;
                    } else if ( c.debug ) {
                        console.warn( '"' + names[ indx ] + '" widget code does not exist!' );
                    }
                }
                // sort widgets by priority
                widgets.sort( function( a, b ) {
                    return a.priority < b.priority ? -1 : a.priority === b.priority ? 0 : 1;
                });
                // add/update selected widgets
                len = widgets.length;
                if ( c.debug ) {
                    console[ console.group ? 'group' : 'log' ]( 'Start ' + ( init ? 'initializing' : 'applying' ) + ' widgets' );
                }
                for ( indx = 0; indx < len; indx++ ) {
                    widget = widgets[ indx ];
                    if ( widget && widget.id ) {
                        ts.applyWidgetId( table, widget.id, init );
                    }
                }
                if ( c.debug && console.groupEnd ) { console.groupEnd(); }
                // callback executed on init only
                if ( !init && typeof callback === 'function' ) {
                    callback( table );
                }
            }
            c.timerReady = setTimeout( function() {
                table.isApplyingWidgets = false;
                $.data( table, 'lastWidgetApplication', new Date() );
                c.$table.triggerHandler( 'tablesorter-ready' );
            }, 10 );
            if ( c.debug ) {
                widget = c.widgets.length;
                console.log( 'Completed ' +
                    ( init === true ? 'initializing ' : 'applying ' ) + widget +
                    ' widget' + ( widget !== 1 ? 's' : '' ) + ts.benchmark( time ) );
            }
        },

        removeWidget : function( table, name, refreshing ) {
            table = $( table )[ 0 ];
            var index, widget, indx, len,
                c = table.config;
            // if name === true, add all widgets from $.tablesorter.widgets
            if ( name === true ) {
                name = [];
                len = ts.widgets.length;
                for ( indx = 0; indx < len; indx++ ) {
                    widget = ts.widgets[ indx ];
                    if ( widget && widget.id ) {
                        name[ name.length ] = widget.id;
                    }
                }
            } else {
                // name can be either an array of widgets names,
                // or a space/comma separated list of widget names
                name = ( $.isArray( name ) ? name.join( ',' ) : name || '' ).toLowerCase().split( /[\s,]+/ );
            }
            len = name.length;
            for ( index = 0; index < len; index++ ) {
                widget = ts.getWidgetById( name[ index ] );
                indx = $.inArray( name[ index ], c.widgets );
                // don't remove the widget from config.widget if refreshing
                if ( indx >= 0 && refreshing !== true ) {
                    c.widgets.splice( indx, 1 );
                }
                if ( widget && widget.remove ) {
                    if ( c.debug ) {
                        console.log( ( refreshing ? 'Refreshing' : 'Removing' ) + ' "' + name[ index ] + '" widget' );
                    }
                    widget.remove( table, c, c.widgetOptions, refreshing );
                    c.widgetInit[ name[ index ] ] = false;
                }
            }
        },

        refreshWidgets : function( table, doAll, dontapply ) {
            table = $( table )[ 0 ]; // see issue #243
            var indx, widget,
                c = table.config,
                curWidgets = c.widgets,
                widgets = ts.widgets,
                len = widgets.length,
                list = [],
                callback = function( table ) {
                    $( table ).triggerHandler( 'refreshComplete' );
                };
            // remove widgets not defined in config.widgets, unless doAll is true
            for ( indx = 0; indx < len; indx++ ) {
                widget = widgets[ indx ];
                if ( widget && widget.id && ( doAll || $.inArray( widget.id, curWidgets ) < 0 ) ) {
                    list[ list.length ] = widget.id;
                }
            }
            ts.removeWidget( table, list.join( ',' ), true );
            if ( dontapply !== true ) {
                // call widget init if
                ts.applyWidget( table, doAll || false, callback );
                if ( doAll ) {
                    // apply widget format
                    ts.applyWidget( table, false, callback );
                }
            } else {
                callback( table );
            }
        },

        /*
        ██  ██ ██████ ██ ██     ██ ██████ ██ ██████ ▄█████
        ██  ██   ██   ██ ██     ██   ██   ██ ██▄▄   ▀█▄
        ██  ██   ██   ██ ██     ██   ██   ██ ██▀▀      ▀█▄
        ▀████▀   ██   ██ ██████ ██   ██   ██ ██████ █████▀
        */
        benchmark : function( diff ) {
            return ( ' (' + ( new Date().getTime() - diff.getTime() ) + ' ms)' );
        },
        // deprecated ts.log
        log : function() {
            console.log( arguments );
        },

        // $.isEmptyObject from jQuery v1.4
        isEmptyObject : function( obj ) {
            /*jshint forin: false */
            for ( var name in obj ) {
                return false;
            }
            return true;
        },

        isValueInArray : function( column, arry ) {
            var indx,
                len = arry && arry.length || 0;
            for ( indx = 0; indx < len; indx++ ) {
                if ( arry[ indx ][ 0 ] === column ) {
                    return indx;
                }
            }
            return -1;
        },

        formatFloat : function( str, table ) {
            if ( typeof str !== 'string' || str === '' ) { return str; }
            // allow using formatFloat without a table; defaults to US number format
            var num,
                usFormat = table && table.config ? table.config.usNumberFormat !== false :
                    typeof table !== 'undefined' ? table : true;
            if ( usFormat ) {
                // US Format - 1,234,567.89 -> 1234567.89
                str = str.replace( ts.regex.comma, '' );
            } else {
                // German Format = 1.234.567,89 -> 1234567.89
                // French Format = 1 234 567,89 -> 1234567.89
                str = str.replace( ts.regex.digitNonUS, '' ).replace( ts.regex.comma, '.' );
            }
            if ( ts.regex.digitNegativeTest.test( str ) ) {
                // make (#) into a negative number -> (10) = -10
                str = str.replace( ts.regex.digitNegativeReplace, '-$1' );
            }
            num = parseFloat( str );
            // return the text instead of zero
            return isNaN( num ) ? $.trim( str ) : num;
        },

        isDigit : function( str ) {
            // replace all unwanted chars and match
            return isNaN( str ) ?
                ts.regex.digitTest.test( str.toString().replace( ts.regex.digitReplace, '' ) ) :
                str !== '';
        },

        // computeTableHeaderCellIndexes from:
        // http://www.javascripttoolbox.com/lib/table/examples.php
        // http://www.javascripttoolbox.com/temp/table_cellindex.html
        computeColumnIndex : function( $rows, c ) {
            var i, j, k, l, cell, cells, rowIndex, rowSpan, colSpan, firstAvailCol,
                // total columns has been calculated, use it to set the matrixrow
                columns = c && c.columns || 0,
                matrix = [],
                matrixrow = new Array( columns );
            for ( i = 0; i < $rows.length; i++ ) {
                cells = $rows[ i ].cells;
                for ( j = 0; j < cells.length; j++ ) {
                    cell = cells[ j ];
                    rowIndex = cell.parentNode.rowIndex;
                    rowSpan = cell.rowSpan || 1;
                    colSpan = cell.colSpan || 1;
                    if ( typeof matrix[ rowIndex ] === 'undefined' ) {
                        matrix[ rowIndex ] = [];
                    }
                    // Find first available column in the first row
                    for ( k = 0; k < matrix[ rowIndex ].length + 1; k++ ) {
                        if ( typeof matrix[ rowIndex ][ k ] === 'undefined' ) {
                            firstAvailCol = k;
                            break;
                        }
                    }
                    // jscs:disable disallowEmptyBlocks
                    if ( columns && cell.cellIndex === firstAvailCol ) {
                        // don't to anything
                    } else if ( cell.setAttribute ) {
                        // jscs:enable disallowEmptyBlocks
                        // add data-column (setAttribute = IE8+)
                        cell.setAttribute( 'data-column', firstAvailCol );
                    } else {
                        // remove once we drop support for IE7 - 1/12/2016
                        $( cell ).attr( 'data-column', firstAvailCol );
                    }
                    for ( k = rowIndex; k < rowIndex + rowSpan; k++ ) {
                        if ( typeof matrix[ k ] === 'undefined' ) {
                            matrix[ k ] = [];
                        }
                        matrixrow = matrix[ k ];
                        for ( l = firstAvailCol; l < firstAvailCol + colSpan; l++ ) {
                            matrixrow[ l ] = 'x';
                        }
                    }
                }
            }
            return matrixrow.length;
        },

        // automatically add a colgroup with col elements set to a percentage width
        fixColumnWidth : function( table ) {
            table = $( table )[ 0 ];
            var overallWidth, percent, $tbodies, len, index,
                c = table.config,
                $colgroup = c.$table.children( 'colgroup' );
            // remove plugin-added colgroup, in case we need to refresh the widths
            if ( $colgroup.length && $colgroup.hasClass( ts.css.colgroup ) ) {
                $colgroup.remove();
            }
            if ( c.widthFixed && c.$table.children( 'colgroup' ).length === 0 ) {
                $colgroup = $( '<colgroup class="' + ts.css.colgroup + '">' );
                overallWidth = c.$table.width();
                // only add col for visible columns - fixes #371
                $tbodies = c.$tbodies.find( 'tr:first' ).children( ':visible' );
                len = $tbodies.length;
                for ( index = 0; index < len; index++ ) {
                    percent = parseInt( ( $tbodies.eq( index ).width() / overallWidth ) * 1000, 10 ) / 10 + '%';
                    $colgroup.append( $( '<col>' ).css( 'width', percent ) );
                }
                c.$table.prepend( $colgroup );
            }
        },

        // get sorter, string, empty, etc options for each column from
        // jQuery data, metadata, header option or header class name ('sorter-false')
        // priority = jQuery data > meta > headers option > header class name
        getData : function( header, configHeader, key ) {
            var meta, cl4ss,
                val = '',
                $header = $( header );
            if ( !$header.length ) { return ''; }
            meta = $.metadata ? $header.metadata() : false;
            cl4ss = ' ' + ( $header.attr( 'class' ) || '' );
            if ( typeof $header.data( key ) !== 'undefined' ||
                typeof $header.data( key.toLowerCase() ) !== 'undefined' ) {
                // 'data-lockedOrder' is assigned to 'lockedorder'; but 'data-locked-order' is assigned to 'lockedOrder'
                // 'data-sort-initial-order' is assigned to 'sortInitialOrder'
                val += $header.data( key ) || $header.data( key.toLowerCase() );
            } else if ( meta && typeof meta[ key ] !== 'undefined' ) {
                val += meta[ key ];
            } else if ( configHeader && typeof configHeader[ key ] !== 'undefined' ) {
                val += configHeader[ key ];
            } else if ( cl4ss !== ' ' && cl4ss.match( ' ' + key + '-' ) ) {
                // include sorter class name 'sorter-text', etc; now works with 'sorter-my-custom-parser'
                val = cl4ss.match( new RegExp( '\\s' + key + '-([\\w-]+)' ) )[ 1 ] || '';
            }
            return $.trim( val );
        },

        getColumnData : function( table, obj, indx, getCell, $headers ) {
            if ( typeof obj !== 'object' || obj === null ) {
                return obj;
            }
            table = $( table )[ 0 ];
            var $header, key,
                c = table.config,
                $cells = ( $headers || c.$headers ),
                // c.$headerIndexed is not defined initially
                $cell = c.$headerIndexed && c.$headerIndexed[ indx ] ||
                    $cells.filter( '[data-column="' + indx + '"]:last' );
            if ( typeof obj[ indx ] !== 'undefined' ) {
                return getCell ? obj[ indx ] : obj[ $cells.index( $cell ) ];
            }
            for ( key in obj ) {
                if ( typeof key === 'string' ) {
                    $header = $cell
                        // header cell with class/id
                        .filter( key )
                        // find elements within the header cell with cell/id
                        .add( $cell.find( key ) );
                    if ( $header.length ) {
                        return obj[ key ];
                    }
                }
            }
            return;
        },

        // *** Process table ***
        // add processing indicator
        isProcessing : function( $table, toggle, $headers ) {
            $table = $( $table );
            var c = $table[ 0 ].config,
                // default to all headers
                $header = $headers || $table.find( '.' + ts.css.header );
            if ( toggle ) {
                // don't use sortList if custom $headers used
                if ( typeof $headers !== 'undefined' && c.sortList.length > 0 ) {
                    // get headers from the sortList
                    $header = $header.filter( function() {
                        // get data-column from attr to keep compatibility with jQuery 1.2.6
                        return this.sortDisabled ?
                            false :
                            ts.isValueInArray( parseFloat( $( this ).attr( 'data-column' ) ), c.sortList ) >= 0;
                    });
                }
                $table.add( $header ).addClass( ts.css.processing + ' ' + c.cssProcessing );
            } else {
                $table.add( $header ).removeClass( ts.css.processing + ' ' + c.cssProcessing );
            }
        },

        // detach tbody but save the position
        // don't use tbody because there are portions that look for a tbody index (updateCell)
        processTbody : function( table, $tb, getIt ) {
            table = $( table )[ 0 ];
            if ( getIt ) {
                table.isProcessing = true;
                $tb.before( '<colgroup class="tablesorter-savemyplace"/>' );
                return $.fn.detach ? $tb.detach() : $tb.remove();
            }
            var holdr = $( table ).find( 'colgroup.tablesorter-savemyplace' );
            $tb.insertAfter( holdr );
            holdr.remove();
            table.isProcessing = false;
        },

        clearTableBody : function( table ) {
            $( table )[ 0 ].config.$tbodies.children().detach();
        },

        // used when replacing accented characters during sorting
        characterEquivalents : {
            'a' : '\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5', // áàâãäąå
            'A' : '\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5', // ÁÀÂÃÄĄÅ
            'c' : '\u00e7\u0107\u010d', // çćč
            'C' : '\u00c7\u0106\u010c', // ÇĆČ
            'e' : '\u00e9\u00e8\u00ea\u00eb\u011b\u0119', // éèêëěę
            'E' : '\u00c9\u00c8\u00ca\u00cb\u011a\u0118', // ÉÈÊËĚĘ
            'i' : '\u00ed\u00ec\u0130\u00ee\u00ef\u0131', // íìİîïı
            'I' : '\u00cd\u00cc\u0130\u00ce\u00cf', // ÍÌİÎÏ
            'o' : '\u00f3\u00f2\u00f4\u00f5\u00f6\u014d', // óòôõöō
            'O' : '\u00d3\u00d2\u00d4\u00d5\u00d6\u014c', // ÓÒÔÕÖŌ
            'ss': '\u00df', // ß (s sharp)
            'SS': '\u1e9e', // ẞ (Capital sharp s)
            'u' : '\u00fa\u00f9\u00fb\u00fc\u016f', // úùûüů
            'U' : '\u00da\u00d9\u00db\u00dc\u016e' // ÚÙÛÜŮ
        },

        replaceAccents : function( str ) {
            var chr,
                acc = '[',
                eq = ts.characterEquivalents;
            if ( !ts.characterRegex ) {
                ts.characterRegexArray = {};
                for ( chr in eq ) {
                    if ( typeof chr === 'string' ) {
                        acc += eq[ chr ];
                        ts.characterRegexArray[ chr ] = new RegExp( '[' + eq[ chr ] + ']', 'g' );
                    }
                }
                ts.characterRegex = new RegExp( acc + ']' );
            }
            if ( ts.characterRegex.test( str ) ) {
                for ( chr in eq ) {
                    if ( typeof chr === 'string' ) {
                        str = str.replace( ts.characterRegexArray[ chr ], chr );
                    }
                }
            }
            return str;
        },

        validateOptions : function( c ) {
            var setting, setting2, typ, timer,
                // ignore options containing an array
                ignore = 'headers sortForce sortList sortAppend widgets'.split( ' ' ),
                orig = c.originalSettings;
            if ( orig ) {
                if ( c.debug ) {
                    timer = new Date();
                }
                for ( setting in orig ) {
                    typ = typeof ts.defaults[setting];
                    if ( typ === 'undefined' ) {
                        console.warn( 'Tablesorter Warning! "table.config.' + setting + '" option not recognized' );
                    } else if ( typ === 'object' ) {
                        for ( setting2 in orig[setting] ) {
                            typ = ts.defaults[setting] && typeof ts.defaults[setting][setting2];
                            if ( $.inArray( setting, ignore ) < 0 && typ === 'undefined' ) {
                                console.warn( 'Tablesorter Warning! "table.config.' + setting + '.' + setting2 + '" option not recognized' );
                            }
                        }
                    }
                }
                if ( c.debug ) {
                    console.log( 'validate options time:' + ts.benchmark( timer ) );
                }
            }
        },

        // restore headers
        restoreHeaders : function( table ) {
            var index, $cell,
                c = $( table )[ 0 ].config,
                $headers = c.$table.find( c.selectorHeaders ),
                len = $headers.length;
            // don't use c.$headers here in case header cells were swapped
            for ( index = 0; index < len; index++ ) {
                $cell = $headers.eq( index );
                // only restore header cells if it is wrapped
                // because this is also used by the updateAll method
                if ( $cell.find( '.' + ts.css.headerIn ).length ) {
                    $cell.html( c.headerContent[ index ] );
                }
            }
        },

        destroy : function( table, removeClasses, callback ) {
            table = $( table )[ 0 ];
            if ( !table.hasInitialized ) { return; }
            // remove all widgets
            ts.removeWidget( table, true, false );
            var events,
                $t = $( table ),
                c = table.config,
                debug = c.debug,
                $h = $t.find( 'thead:first' ),
                $r = $h.find( 'tr.' + ts.css.headerRow ).removeClass( ts.css.headerRow + ' ' + c.cssHeaderRow ),
                $f = $t.find( 'tfoot:first > tr' ).children( 'th, td' );
            if ( removeClasses === false && $.inArray( 'uitheme', c.widgets ) >= 0 ) {
                // reapply uitheme classes, in case we want to maintain appearance
                $t.triggerHandler( 'applyWidgetId', [ 'uitheme' ] );
                $t.triggerHandler( 'applyWidgetId', [ 'zebra' ] );
            }
            // remove widget added rows, just in case
            $h.find( 'tr' ).not( $r ).remove();
            // disable tablesorter - not using .unbind( namespace ) because namespacing was
            // added in jQuery v1.4.3 - see http://api.jquery.com/event.namespace/
            events = 'sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton ' +
                'appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave ' +
                'keypress sortBegin sortEnd resetToLoadState '.split( ' ' )
                .join( c.namespace + ' ' );
            $t
                .removeData( 'tablesorter' )
                .unbind( events.replace( ts.regex.spaces, ' ' ) );
            c.$headers
                .add( $f )
                .removeClass( [ ts.css.header, c.cssHeader, c.cssAsc, c.cssDesc, ts.css.sortAsc, ts.css.sortDesc, ts.css.sortNone ].join( ' ' ) )
                .removeAttr( 'data-column' )
                .removeAttr( 'aria-label' )
                .attr( 'aria-disabled', 'true' );
            $r
                .find( c.selectorSort )
                .unbind( ( 'mousedown mouseup keypress '.split( ' ' ).join( c.namespace + ' ' ) ).replace( ts.regex.spaces, ' ' ) );
            ts.restoreHeaders( table );
            $t.toggleClass( ts.css.table + ' ' + c.tableClass + ' tablesorter-' + c.theme, removeClasses === false );
            // clear flag in case the plugin is initialized again
            table.hasInitialized = false;
            delete table.config.cache;
            if ( typeof callback === 'function' ) {
                callback( table );
            }
            if ( debug ) {
                console.log( 'tablesorter has been removed' );
            }
        }

    };

    $.fn.tablesorter = function( settings ) {
        return this.each( function() {
            var table = this,
            // merge & extend config options
            c = $.extend( true, {}, ts.defaults, settings, ts.instanceMethods );
            // save initial settings
            c.originalSettings = settings;
            // create a table from data (build table widget)
            if ( !table.hasInitialized && ts.buildTable && this.nodeName !== 'TABLE' ) {
                // return the table (in case the original target is the table's container)
                ts.buildTable( table, c );
            } else {
                ts.setup( table, c );
            }
        });
    };

    // set up debug logs
    if ( !( window.console && window.console.log ) ) {
        // access $.tablesorter.logs for browsers that don't have a console...
        ts.logs = [];
        /*jshint -W020 */
        console = {};
        console.log = console.warn = console.error = console.table = function() {
            var arg = arguments.length > 1 ? arguments : arguments[0];
            ts.logs[ ts.logs.length ] = { date: Date.now(), log: arg };
        };
    }

    // add default parsers
    ts.addParser({
        id : 'no-parser',
        is : function() {
            return false;
        },
        format : function() {
            return '';
        },
        type : 'text'
    });

    ts.addParser({
        id : 'text',
        is : function() {
            return true;
        },
        format : function( str, table ) {
            var c = table.config;
            if ( str ) {
                str = $.trim( c.ignoreCase ? str.toLocaleLowerCase() : str );
                str = c.sortLocaleCompare ? ts.replaceAccents( str ) : str;
            }
            return str;
        },
        type : 'text'
    });

    ts.regex.nondigit = /[^\w,. \-()]/g;
    ts.addParser({
        id : 'digit',
        is : function( str ) {
            return ts.isDigit( str );
        },
        format : function( str, table ) {
            var num = ts.formatFloat( ( str || '' ).replace( ts.regex.nondigit, '' ), table );
            return str && typeof num === 'number' ? num :
                str ? $.trim( str && table.config.ignoreCase ? str.toLocaleLowerCase() : str ) : str;
        },
        type : 'numeric'
    });

    ts.regex.currencyReplace = /[+\-,. ]/g;
    ts.regex.currencyTest = /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/;
    ts.addParser({
        id : 'currency',
        is : function( str ) {
            str = ( str || '' ).replace( ts.regex.currencyReplace, '' );
            // test for £$€¤¥¢
            return ts.regex.currencyTest.test( str );
        },
        format : function( str, table ) {
            var num = ts.formatFloat( ( str || '' ).replace( ts.regex.nondigit, '' ), table );
            return str && typeof num === 'number' ? num :
                str ? $.trim( str && table.config.ignoreCase ? str.toLocaleLowerCase() : str ) : str;
        },
        type : 'numeric'
    });

    // too many protocols to add them all https://en.wikipedia.org/wiki/URI_scheme
    // now, this regex can be updated before initialization
    ts.regex.urlProtocolTest = /^(https?|ftp|file):\/\//;
    ts.regex.urlProtocolReplace = /(https?|ftp|file):\/\/(www\.)?/;
    ts.addParser({
        id : 'url',
        is : function( str ) {
            return ts.regex.urlProtocolTest.test( str );
        },
        format : function( str ) {
            return str ? $.trim( str.replace( ts.regex.urlProtocolReplace, '' ) ) : str;
        },
        type : 'text'
    });

    ts.regex.dash = /-/g;
    ts.regex.isoDate = /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/;
    ts.addParser({
        id : 'isoDate',
        is : function( str ) {
            return ts.regex.isoDate.test( str );
        },
        format : function( str, table ) {
            var date = str ? new Date( str.replace( ts.regex.dash, '/' ) ) : str;
            return date instanceof Date && isFinite( date ) ? date.getTime() : str;
        },
        type : 'numeric'
    });

    ts.regex.percent = /%/g;
    ts.regex.percentTest = /(\d\s*?%|%\s*?\d)/;
    ts.addParser({
        id : 'percent',
        is : function( str ) {
            return ts.regex.percentTest.test( str ) && str.length < 15;
        },
        format : function( str, table ) {
            return str ? ts.formatFloat( str.replace( ts.regex.percent, '' ), table ) : str;
        },
        type : 'numeric'
    });

    // added image parser to core v2.17.9
    ts.addParser({
        id : 'image',
        is : function( str, table, node, $node ) {
            return $node.find( 'img' ).length > 0;
        },
        format : function( str, table, cell ) {
            return $( cell ).find( 'img' ).attr( table.config.imgAttr || 'alt' ) || str;
        },
        parsed : true, // filter widget flag
        type : 'text'
    });

    ts.regex.dateReplace = /(\S)([AP]M)$/i; // used by usLongDate & time parser
    ts.regex.usLongDateTest1 = /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i;
    ts.regex.usLongDateTest2 = /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i;
    ts.addParser({
        id : 'usLongDate',
        is : function( str ) {
            // two digit years are not allowed cross-browser
            // Jan 01, 2013 12:34:56 PM or 01 Jan 2013
            return ts.regex.usLongDateTest1.test( str ) || ts.regex.usLongDateTest2.test( str );
        },
        format : function( str, table ) {
            var date = str ? new Date( str.replace( ts.regex.dateReplace, '$1 $2' ) ) : str;
            return date instanceof Date && isFinite( date ) ? date.getTime() : str;
        },
        type : 'numeric'
    });

    // testing for ##-##-#### or ####-##-##, so it's not perfect; time can be included
    ts.regex.shortDateTest = /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/;
    // escaped "-" because JSHint in Firefox was showing it as an error
    ts.regex.shortDateReplace = /[\-.,]/g;
    // XXY covers MDY & DMY formats
    ts.regex.shortDateXXY = /(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/;
    ts.regex.shortDateYMD = /(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/;
    ts.convertFormat = function( dateString, format ) {
        dateString = ( dateString || '' )
            .replace( ts.regex.spaces, ' ' )
            .replace( ts.regex.shortDateReplace, '/' );
        if ( format === 'mmddyyyy' ) {
            dateString = dateString.replace( ts.regex.shortDateXXY, '$3/$1/$2' );
        } else if ( format === 'ddmmyyyy' ) {
            dateString = dateString.replace( ts.regex.shortDateXXY, '$3/$2/$1' );
        } else if ( format === 'yyyymmdd' ) {
            dateString = dateString.replace( ts.regex.shortDateYMD, '$1/$2/$3' );
        }
        var date = new Date( dateString );
        return date instanceof Date && isFinite( date ) ? date.getTime() : '';
    };

    ts.addParser({
        id : 'shortDate', // 'mmddyyyy', 'ddmmyyyy' or 'yyyymmdd'
        is : function( str ) {
            str = ( str || '' ).replace( ts.regex.spaces, ' ' ).replace( ts.regex.shortDateReplace, '/' );
            return ts.regex.shortDateTest.test( str );
        },
        format : function( str, table, cell, cellIndex ) {
            if ( str ) {
                var c = table.config,
                    $header = c.$headerIndexed[ cellIndex ],
                    format = $header.length && $header.data( 'dateFormat' ) ||
                        ts.getData( $header, ts.getColumnData( table, c.headers, cellIndex ), 'dateFormat' ) ||
                        c.dateFormat;
                // save format because getData can be slow...
                if ( $header.length ) {
                    $header.data( 'dateFormat', format );
                }
                return ts.convertFormat( str, format ) || str;
            }
            return str;
        },
        type : 'numeric'
    });

    // match 24 hour time & 12 hours time + am/pm - see http://regexr.com/3c3tk
    ts.regex.timeTest = /^(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)$|^((?:[01]\d|[2][0-4]):[0-5]\d)$/i;
    ts.regex.timeMatch = /(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i;
    ts.addParser({
        id : 'time',
        is : function( str ) {
            return ts.regex.timeTest.test( str );
        },
        format : function( str, table ) {
            // isolate time... ignore month, day and year
            var temp,
                timePart = ( str || '' ).match( ts.regex.timeMatch ),
                orig = new Date( str ),
                // no time component? default to 00:00 by leaving it out, but only if str is defined
                time = str && ( timePart !== null ? timePart[ 0 ] : '00:00 AM' ),
                date = time ? new Date( '2000/01/01 ' + time.replace( ts.regex.dateReplace, '$1 $2' ) ) : time;
            if ( date instanceof Date && isFinite( date ) ) {
                temp = orig instanceof Date && isFinite( orig ) ? orig.getTime() : 0;
                // if original string was a valid date, add it to the decimal so the column sorts in some kind of order
                // luckily new Date() ignores the decimals
                return temp ? parseFloat( date.getTime() + '.' + orig.getTime() ) : date.getTime();
            }
            return str;
        },
        type : 'numeric'
    });

    ts.addParser({
        id : 'metadata',
        is : function() {
            return false;
        },
        format : function( str, table, cell ) {
            var c = table.config,
            p = ( !c.parserMetadataName ) ? 'sortValue' : c.parserMetadataName;
            return $( cell ).metadata()[ p ];
        },
        type : 'numeric'
    });

    /*
        ██████ ██████ █████▄ █████▄ ▄████▄
          ▄█▀  ██▄▄   ██▄▄██ ██▄▄██ ██▄▄██
        ▄█▀    ██▀▀   ██▀▀██ ██▀▀█  ██▀▀██
        ██████ ██████ █████▀ ██  ██ ██  ██
        */
    // add default widgets
    ts.addWidget({
        id : 'zebra',
        priority : 90,
        format : function( table, c, wo ) {
            var $visibleRows, $row, count, isEven, tbodyIndex, rowIndex, len,
                child = new RegExp( c.cssChildRow, 'i' ),
                $tbodies = c.$tbodies.add( $( c.namespace + '_extra_table' ).children( 'tbody:not(.' + c.cssInfoBlock + ')' ) );
            for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
                // loop through the visible rows
                count = 0;
                $visibleRows = $tbodies.eq( tbodyIndex ).children( 'tr:visible' ).not( c.selectorRemove );
                len = $visibleRows.length;
                for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {
                    $row = $visibleRows.eq( rowIndex );
                    // style child rows the same way the parent row was styled
                    if ( !child.test( $row[ 0 ].className ) ) { count++; }
                    isEven = ( count % 2 === 0 );
                    $row
                        .removeClass( wo.zebra[ isEven ? 1 : 0 ] )
                        .addClass( wo.zebra[ isEven ? 0 : 1 ] );
                }
            }
        },
        remove : function( table, c, wo, refreshing ) {
            if ( refreshing ) { return; }
            var tbodyIndex, $tbody,
                $tbodies = c.$tbodies,
                toRemove = ( wo.zebra || [ 'even', 'odd' ] ).join( ' ' );
            for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ){
                $tbody = ts.processTbody( table, $tbodies.eq( tbodyIndex ), true ); // remove tbody
                $tbody.children().removeClass( toRemove );
                ts.processTbody( table, $tbody, false ); // restore tbody
            }
        }
    });

})( jQuery );

return jQuery.tablesorter;
}));
