/*...
 	/js/datatables/buttons/1.4.2/js/buttons.html5.min.js
*/
(function(j){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(k){return j(k,window,document)}):"object"===typeof exports?module.exports=function(k,l,t,s){k||(k=window);if(!l||!l.fn.dataTable)l=require("datatables.net")(k,l).$;l.fn.dataTable.Buttons||require("datatables.net-buttons")(k,l);return j(l,k,k.document,t,s)}:j(jQuery,window,document)})(function(j,k,l,t,s,q){function x(a){for(var c="";0<=a;)c=String.fromCharCode(a%26+65)+c,a=Math.floor(a/
26)-1;return c}function y(a,c){u===q&&(u=-1===w.serializeToString(j.parseXML(z["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));j.each(c,function(c,b){if(j.isPlainObject(b)){var e=a.folder(c);y(e,b)}else{if(u){var e=b.childNodes[0],f,g,n=[];for(f=e.attributes.length-1;0<=f;f--){g=e.attributes[f].nodeName;var h=e.attributes[f].nodeValue;-1!==g.indexOf(":")&&(n.push({name:g,value:h}),e.removeAttribute(g))}f=0;for(g=n.length;f<g;f++)h=b.createAttribute(n[f].name.replace(":","_dt_b_namespace_token_")),
h.value=n[f].value,e.setAttributeNode(h)}e=w.serializeToString(b);u&&(-1===e.indexOf("<?xml")&&(e='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+e),e=e.replace(/_dt_b_namespace_token_/g,":"));e=e.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>");a.file(c,e)}})}function p(a,c,d){var b=a.createElement(c);d&&(d.attr&&j(b).attr(d.attr),d.children&&j.each(d.children,function(a,c){b.appendChild(c)}),null!==d.text&&d.text!==q&&b.appendChild(a.createTextNode(d.text)));return b}function J(a,c){var d=
a.header[c].length,b;a.footer&&a.footer[c].length>d&&(d=a.footer[c].length);for(var e=0,f=a.body.length;e<f;e++)if(b=a.body[e][c],b=null!==b&&b!==q?b.toString():"",-1!==b.indexOf("\n")?(b=b.split("\n"),b.sort(function(a,b){return b.length-a.length}),b=b[0].length):b=b.length,b>d&&(d=b),40<d)return 52;d*=1.3;return 6<d?d:6}var m=j.fn.dataTable,r;var h="undefined"!==typeof self&&self||"undefined"!==typeof k&&k||this.content;if("undefined"===typeof h||"undefined"!==typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))r=
void 0;else{var v=h.document.createElementNS("http://www.w3.org/1999/xhtml","a"),K="download"in v,L=/constructor/i.test(h.HTMLElement)||h.safari,A=/CriOS\/[\d]+/.test(navigator.userAgent),M=function(a){(h.setImmediate||h.setTimeout)(function(){throw a;},0)},B=function(a){setTimeout(function(){"string"===typeof a?(h.URL||h.webkitURL||h).revokeObjectURL(a):a.remove()},4E4)},C=function(a){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob([String.fromCharCode(65279),
a],{type:a.type}):a},E=function(a,c,d){d||(a=C(a));var b=this,d="application/octet-stream"===a.type,e,f=function(){for(var a=["writestart","progress","write","writeend"],a=[].concat(a),c=a.length;c--;){var d=b["on"+a[c]];if("function"===typeof d)try{d.call(b,b)}catch(f){M(f)}}};b.readyState=b.INIT;if(K)e=(h.URL||h.webkitURL||h).createObjectURL(a),setTimeout(function(){v.href=e;v.download=c;var a=new MouseEvent("click");v.dispatchEvent(a);f();B(e);b.readyState=b.DONE});else if((A||d&&L)&&h.FileReader){var g=
new FileReader;g.onloadend=function(){var a=A?g.result:g.result.replace(/^data:[^;]*;/,"data:attachment/file;");h.open(a,"_blank")||(h.location.href=a);b.readyState=b.DONE;f()};g.readAsDataURL(a);b.readyState=b.INIT}else e||(e=(h.URL||h.webkitURL||h).createObjectURL(a)),d?h.location.href=e:h.open(e,"_blank")||(h.location.href=e),b.readyState=b.DONE,f(),B(e)},i=E.prototype;"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob?r=function(a,c,d){c=c||a.name||"download";d||(a=C(a));return navigator.msSaveOrOpenBlob(a,
c)}:(i.abort=function(){},i.readyState=i.INIT=0,i.WRITING=1,i.DONE=2,i.error=i.onwritestart=i.onprogress=i.onwrite=i.onabort=i.onerror=i.onwriteend=null,r=function(a,c,d){return new E(a,c||a.name||"download",d)})}m.fileSave=r;var N=function(a){var c="Sheet1";a.sheetName&&(c=a.sheetName.replace(/[\[\]\*\/\\\?\:]/g,""));return c},F=function(a){return a.newline?a.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"},G=function(a,c){for(var d=F(c),b=a.buttons.exportData(c.exportOptions),e=c.fieldBoundary,
f=c.fieldSeparator,g=RegExp(e,"g"),n=c.escapeChar!==q?c.escapeChar:"\\",j=function(a){for(var b="",c=0,d=a.length;c<d;c++)0<c&&(b+=f),b+=e?e+(""+a[c]).replace(g,n+e)+e:a[c];return b},h=c.header?j(b.header)+d:"",k=c.footer&&b.footer?d+j(b.footer):"",l=[],o=0,i=b.body.length;o<i;o++)l.push(j(b.body[o]));return{str:h+l.join(d)+k,rows:l.length}},H=function(){if(!(-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Opera")))return!1;
var a=navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);return a&&1<a.length&&603.1>1*a[1]?!0:!1};try{var w=new XMLSerializer,u}catch(O){}var z={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',
"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},
I=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(a){return a/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(a){return a/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(a){return-1*a.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(a){return-1*a.replace(/[\(\)]/g,"")}},{match:/^\-?[\d,]+$/,style:63},
{match:/^\-?[\d,]+\.\d{2}$/,style:64}];m.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(a){return a.i18n("buttons.copy","Copy")},action:function(a,c,d,b){this.processing(!0);var e=this,a=G(c,b),f=c.buttons.exportInfo(b),g=F(b),n=a.str,d=j("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0});f.title&&(n=f.title+g+g+n);f.messageTop&&(n=f.messageTop+g+g+n);f.messageBottom&&(n=n+g+g+f.messageBottom);b.customize&&(n=b.customize(n,b));b=j("<textarea readonly/>").val(n).appendTo(d);
if(l.queryCommandSupported("copy")){d.appendTo(c.table().container());b[0].focus();b[0].select();try{var h=l.execCommand("copy");d.remove();if(h){c.buttons.info(c.i18n("buttons.copyTitle","Copy to clipboard"),c.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},a.rows),2E3);this.processing(!1);return}}catch(k){}}h=j("<span>"+c.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+
"</span>").append(d);c.buttons.info(c.i18n("buttons.copyTitle","Copy to clipboard"),h,0);b[0].focus();b[0].select();var D=j(h).closest(".dt-button-info"),i=function(){D.off("click.buttons-copy");j(l).off(".buttons-copy");c.buttons.info(!1)};D.on("click.buttons-copy",i);j(l).on("keydown.buttons-copy",function(a){27===a.keyCode&&(i(),e.processing(!1))}).on("copy.buttons-copy cut.buttons-copy",function(){i();e.processing(!1)})},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1,
title:"*",messageTop:"*",messageBottom:"*"};m.ext.buttons.csvHtml5={bom:!1,className:"buttons-csv buttons-html5",available:function(){return k.FileReader!==q&&k.Blob},text:function(a){return a.i18n("buttons.csv","CSV")},action:function(a,c,d,b){this.processing(!0);a=G(c,b).str;c=c.buttons.exportInfo(b);d=b.charset;b.customize&&(a=b.customize(a,b));!1!==d?(d||(d=l.characterSet||l.charset),d&&(d=";charset="+d)):d="";b.bom&&(a="﻿"+a);r(new Blob([a],{type:"text/csv"+d}),c.filename,!0);this.processing(!1)},
filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1};m.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return k.FileReader!==q&&(t||k.JSZip)!==q&&!H()&&w},text:function(a){return a.i18n("buttons.excel","Excel")},action:function(a,c,d,b){this.processing(!0);var e=this,f=0,a=function(a){return j.parseXML(z[a])},g=a("xl/worksheets/sheet1.xml"),n=g.getElementsByTagName("sheetData")[0],
a={_rels:{".rels":a("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":a("xl/_rels/workbook.xml.rels")},"workbook.xml":a("xl/workbook.xml"),"styles.xml":a("xl/styles.xml"),worksheets:{"sheet1.xml":g}},"[Content_Types].xml":a("[Content_Types].xml")},d=c.buttons.exportData(b.exportOptions),h,l,i=function(a){h=f+1;l=p(g,"row",{attr:{r:h}});for(var b=0,c=a.length;b<c;b++){var d=x(b)+""+h,e=null;if(!(null===a[b]||a[b]===q||""===a[b])){a[b]=j.trim(a[b]);for(var i=0,k=I.length;i<k;i++){var m=I[i];if(a[b].match&&
!a[b].match(/^0\d+/)&&a[b].match(m.match)){e=a[b].replace(/[^\d\.\-]/g,"");m.fmt&&(e=m.fmt(e));e=p(g,"c",{attr:{r:d,s:m.style},children:[p(g,"v",{text:e})]});break}}e||("number"===typeof a[b]||a[b].match&&a[b].match(/^-?\d+(\.\d+)?$/)&&!a[b].match(/^0\d+/)?e=p(g,"c",{attr:{t:"n",r:d},children:[p(g,"v",{text:a[b]})]}):(m=!a[b].replace?a[b]:a[b].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""),e=p(g,"c",{attr:{t:"inlineStr",r:d},children:{row:p(g,"is",{children:{row:p(g,"t",{text:m})}})}})));l.appendChild(e)}}n.appendChild(l);
f++};j("sheets sheet",a.xl["workbook.xml"]).attr("name",N(b));b.customizeData&&b.customizeData(d);var m=function(a,b){var c=j("mergeCells",g);c[0].appendChild(p(g,"mergeCell",{attr:{ref:"A"+a+":"+x(b)+a}}));c.attr("count",c.attr("count")+1);j("row:eq("+(a-1)+") c",g).attr("s","51")},o=c.buttons.exportInfo(b);o.title&&(i([o.title],f),m(f,d.header.length-1));o.messageTop&&(i([o.messageTop],f),m(f,d.header.length-1));b.header&&(i(d.header,f),j("row:last c",g).attr("s","2"));for(var c=0,s=d.body.length;c<
s;c++)i(d.body[c],f);b.footer&&d.footer&&(i(d.footer,f),j("row:last c",g).attr("s","2"));o.messageBottom&&(i([o.messageBottom],f),m(f,d.header.length-1));c=p(g,"cols");j("worksheet",g).prepend(c);i=0;for(m=d.header.length;i<m;i++)c.appendChild(p(g,"col",{attr:{min:i+1,max:i+1,width:J(d,i),customWidth:1}}));b.customize&&b.customize(a);b=new (t||k.JSZip);d={type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};y(b,a);b.generateAsync?b.generateAsync(d).then(function(a){r(a,
o.filename);e.processing(false)}):(r(b.generate(d),o.filename),this.processing(!1))},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*"};m.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return k.FileReader!==q&&(s||k.pdfMake)},text:function(a){return a.i18n("buttons.pdf","PDF")},action:function(a,c,d,b){this.processing(!0);var e=this,a=c.buttons.exportData(b.exportOptions),f=c.buttons.exportInfo(b),c=[];
b.header&&c.push(j.map(a.header,function(a){return{text:"string"===typeof a?a:a+"",style:"tableHeader"}}));for(var g=0,d=a.body.length;g<d;g++)c.push(j.map(a.body[g],function(a){return{text:"string"===typeof a?a:a+"",style:g%2?"tableBodyEven":"tableBodyOdd"}}));b.footer&&a.footer&&c.push(j.map(a.footer,function(a){return{text:"string"===typeof a?a:a+"",style:"tableFooter"}}));c={pageSize:b.pageSize,pageOrientation:b.orientation,content:[{table:{headerRows:1,body:c},layout:"noBorders"}],styles:{tableHeader:{bold:!0,
fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}};f.messageTop&&c.content.unshift({text:f.messageTop,style:"message",margin:[0,0,0,12]});f.messageBottom&&c.content.push({text:f.messageBottom,style:"message",margin:[0,0,0,12]});f.title&&c.content.unshift({text:f.title,style:"title",margin:[0,
0,0,12]});b.customize&&b.customize(c,b);c=(s||k.pdfMake).createPdf(c);"open"===b.download&&!H()?(c.open(),this.processing(!1)):c.getBuffer(function(a){a=new Blob([a],{type:"application/pdf"});r(a,f.filename);e.processing(!1)})},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,messageTop:"*",messageBottom:"*",customize:null,download:"download"};return m.Buttons});

/*...
 	/js/datatables/buttons/1.4.2/js/buttons.print.min.js
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(e){return d(e,window,document)}):"object"===typeof exports?module.exports=function(e,c){e||(e=window);if(!c||!c.fn.dataTable)c=require("datatables.net")(e,c).$;c.fn.dataTable.Buttons||require("datatables.net-buttons")(e,c);return d(c,e,e.document)}:d(jQuery,window,document)})(function(d,e,c){var i=d.fn.dataTable,f=c.createElement("a"),l=function(a){f.href=a;a=f.host;-1===a.indexOf("/")&&
0!==f.pathname.indexOf("/")&&(a+="/");return f.protocol+"//"+a+f.pathname+f.search};i.ext.buttons.print={className:"buttons-print",text:function(a){return a.i18n("buttons.print","Print")},action:function(a,b,c,h){var a=b.buttons.exportData(d.extend({decodeEntities:!1},h.exportOptions)),c=b.buttons.exportInfo(h),f=function(b,c){for(var a="<tr>",d=0,e=b.length;d<e;d++)a+="<"+c+">"+b[d]+"</"+c+">";return a+"</tr>"},b='<table class="'+b.table().node().className+'">';h.header&&(b+="<thead>"+f(a.header,
"th")+"</thead>");for(var b=b+"<tbody>",k=0,i=a.body.length;k<i;k++)b+=f(a.body[k],"td");b+="</tbody>";h.footer&&a.footer&&(b+="<tfoot>"+f(a.footer,"th")+"</tfoot>");var b=b+"</table>",g=e.open("","");g.document.close();var j="<title>"+c.title+"</title>";d("style, link").each(function(){var b=j,a=d(this).clone()[0];"link"===a.nodeName.toLowerCase()&&(a.href=l(a.href));j=b+a.outerHTML});try{g.document.head.innerHTML=j}catch(m){d(g.document.head).html(j)}g.document.body.innerHTML="<h1>"+c.title+"</h1><div>"+
(c.messageTop||"")+"</div>"+b+"<div>"+(c.messageBottom||"")+"</div>";d(g.document.body).addClass("dt-print-view");d("img",g.document.body).each(function(a,b){b.setAttribute("src",l(b.getAttribute("src")))});h.customize&&h.customize(g);setTimeout(function(){h.autoPrint&&(g.print(),g.close())},1E3)},title:"*",messageTop:"*",messageBottom:"*",exportOptions:{},header:!0,footer:!1,autoPrint:!0,customize:null};return i.Buttons});

/*...
 	/clipone/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js
*/
/*!
 * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

(function(factory){
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){
	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method, deprecationMsg){
		return function(){
			if (deprecationMsg !== undefined) {
				$.fn.datepicker.deprecated(deprecationMsg);
			}

			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
          // Use date arithmetic to allow dates with different times to match
          if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000*60*60*24)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$.data(element, 'datepicker', this);
		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		if (this.component && this.component.length === 0)
			this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}

		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		if (this.o.calendarWeeks) {
			this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear')
				.attr('colspan', function(i, val){
					return Number(val) + 1;
				});
		}

		this._process_options({
			startDate: this._o.startDate,
			endDate: this._o.endDate,
			daysOfWeekDisabled: this.o.daysOfWeekDisabled,
			daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
			datesDisabled: this.o.datesDisabled
		});

		this._allow_update = false;
		this.setViewMode(this.o.startView);
		this._allow_update = true;

		this.fillDow();
		this.fillMonths();

		this.update();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view){
			$.each(DPGlobal.viewModes, function(i, viewMode){
				if (view === i || $.inArray(view, viewMode.names) !== -1){
					view = i;
					return false;
				}
			});

			return view;
		},

		_resolveDaysOfWeek: function(daysOfWeek){
			if (!$.isArray(daysOfWeek))
				daysOfWeek = daysOfWeek.split(/[,\s]*/);
			return $.map(daysOfWeek, Number);
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			//Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView);
			o.minViewMode = this._resolveViewName(o.minViewMode);
			o.maxViewMode = this._resolveViewName(o.maxViewMode);

			// Check view is between min and max
			o.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled||[]);
			o.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted||[]);

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = o.datesDisabled.split(',');
			}
			o.datesDisabled = $.map(o.datesDisabled, function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {
				o.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);
			} else if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){

                	///console.log(this.inputField.attr('id'));
                	var inputVal = this.inputField.val();
                	if(inputVal.length == 0)
                	{
                		this.inputField.val('');
                		this.inputField.focus;
	            		this.update();	
                	}
                	
                	var slashCheck = inputVal.match(new RegExp("/", 'g'));
                	var dashCheck = inputVal.match(new RegExp("-", 'g'));
                	var getslashlCount = (slashCheck != null ) ? slashCheck.length : 0;
                	var getdashlCount = (dashCheck != null ) ? dashCheck.length : 0;

                	if(this.inputField.val().length == 8 && getslashlCount == 0 && getdashlCount == 0)
	                {

	                    var date = parseDate(inputVal);
	                    if (! isValidDate(date)) {
	                        //create date based on momentjs (we have that)
	                        date = moment().format(sk.getMomentDateFormat().toUpperCase());
	                    }
	                    //alert(i);
	                    if(date == 'Invalid date')
	                    {
	                        date = '';
	                        sk.skNotify('Invalid date', 'danger');
	                    }
	                    else
	                    {	
		                     var startDate = '';
	       					 var patient_dob_limit = $("#id_patient_dob_limit").val();
	                    	 if(patient_dob_limit != undefined && patient_dob_limit != '')
					         {
					            if(patient_dob_limit  == 1 && (this.inputField.attr('id') == 'patient_dob' || this.inputField.attr('id') == 'claim_dob'))
					            {
			                    	 var date1 = new Date();
			                    	 var patient_dob_limit = date1.getFullYear() - 141;
			                    	 var getYear = moment(date,sk.getMomentDateFormat().toUpperCase()).year();
			                    	 if(getYear <= patient_dob_limit)
			                    	 {
			                    	   this.inputField.val('');
			                    	   sk.skNotify(' DOB: Year must be greater than or equal to '+patient_dob_limit+' ', 'danger');
			                    	 } 
			                    	 else
			                    	 {
			                    	 	 this.inputField.val(date);
			                    	 }
		                    	} else {
		                    		 this.inputField.val(date);
		                    	}
		                     } else {
		                     	 this.inputField.val(date);
		                     }
            				 this.update();
            				 this.hide();
	                    }
	                }

	                if(inputVal.length == 10 && (getslashlCount == 2 || getdashlCount == 2))
	                {
	                	var date = parseDate(inputVal);
	                    if (! isValidDate(date)) {
	                        //create date based on momentjs (we have that)
	                        date = moment().format(sk.getMomentDateFormat().toUpperCase());
	                    }
	                    //alert(i);
	                     if(date == 'Invalid date')
	                    {
	                        date = '';
	                        sk.skNotify('Invalid date', 'danger');
	                    }
	                    else
	                    {

	                         var startDate = '';
	       					 var patient_dob_limit = $("#id_patient_dob_limit").val();
	                    	 if(patient_dob_limit != undefined && patient_dob_limit != '')
					         {
					            if(patient_dob_limit  == 1 && (this.inputField.attr('id') == 'patient_dob' || this.inputField.attr('id') == 'claim_dob'))
					            {
			                    	 var date1 = new Date();
			                    	 var patient_dob_limit = date1.getFullYear() - 141;
			                    	 var getYear = moment(date,sk.getMomentDateFormat().toUpperCase()).year();
			                    	 if(getYear <= patient_dob_limit)
			                    	 {
			                    	   this.inputField.val('');
			                    	   sk.skNotify(' DOB: Year must be greater than or equal to '+patient_dob_limit+' ', 'danger');
			                    	 } 
			                    	 else
			                    	 {
			                    	 	 this.inputField.val(date);
			                    	 }
		                    	} else {
		                    		 this.inputField.val(date);
		                    	}
		                     } else {
		                     	 this.inputField.val(date);
		                     }
            				 this.update();
            				 this.hide();
	                    }
	                }


	                var isValid = false;
	                var regex = new RegExp("^[0-9?=.*!@#$%^&/*]+$");
	                isValid = regex.test($(this).val());
	                if(isValid == false)
	                {
	                  sk.skNotify('Invalid date', 'danger');
	                  return false;
	                }
	                //  	if(this.inputField.val().length == 8)
	                //  	{			
	                //  		var date = parseDate(inputVal);
	                //  		//date = moment().format(sk.getMomentDateFormat().toUpperCase());
	            			// this.inputField.val(date);
	            			// this.update();
	                //  	}
                	// if(this.inputField.val().length == 1 || this.inputField.val().length == 0)
                	// {
                	// 	this.clearDates();
                	// 	this.inputField.val(inputVal);
                	// 	//console.log('ddddd',this.inputField.val().length);
                	// }
                	//console.log('ssss',this.inputField.val().length);
                	//this.clearDates();
                    // if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                    //    this.update();
                }, this),
               // keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

			 var isValidDate = function(value, format) {
			    format = format || false;
			    if (format) {
			    value = parseDate( $(input));
			    }
			    var timestamp = Date.parse(value);
			    return isNaN(timestamp) == false;
			}

            var parseDate = function(value) {
	                var m = moment(value, sk.getMomentDateFormat().toUpperCase()).format(sk.getMomentDateFormat().toUpperCase());
	                if (m)
	                return m;
	        }

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            // component: input + button
            else if (this.component && this.inputField.length) {
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){

						//this.inputField.val('');
						if(this.inputField.val() != undefined) {
						if(this.inputField.val().length == 6)
			            {
						var inputVal = this.inputField.val();
						var vardateformat = sk.getMomentDateFormat().toUpperCase();
						if(vardateformat == 'DD/MM/YYYY') {
							var toYear = 'DDMMYY'; 
						}
						else if(vardateformat = 'DD/MM/YY') {
							var toYear = 'DDMMYY'; 
						}
						else if(vardateformat = 'MM/DD/YYYY') {
							var toYear = 'MMDDYY'; 
						}
						else if(vardateformat = 'YYYY-MM-DD') {
							var toYear = 'YYMMDD'; 
						}
						var yearTwo = moment(inputVal,toYear).format("YY");
						var MonthNew = moment(inputVal,toYear).format("MM");
						var DateNew = moment(inputVal,toYear).format("DD");
						if(yearTwo >= 19) {
							var year = 1900;
						} else {
							var year = 2000;
						}
						var fullYear = parseInt(year) + parseInt(yearTwo);
						var datenew = DateNew+'/'+MonthNew+'/'+fullYear;
						var finalDate = moment(datenew,'DD/MM/YYYY').format(sk.getMomentDateFormat().toUpperCase());
						//write program for 6 number accept bootstrap datepicker//
			                var date = parseDate(finalDate);
			                if (! isValidDate(date)) {
			                    //create date based on momentjs (we have that)
			                    date = moment().format(sk.getMomentDateFormat().toUpperCase());
			                }
			                //alert(i);
			                if(date == 'Invalid date')  {
			                    date = '';
			                    sk.skNotify('Invalid date', 'danger');
			                } else {
			                     this.inputField.val(date);
			       				 this.update();
			       				 this.hide();
			                }
			                var isValid = false;
				            var regex = new RegExp("^[0-9?=.*!@#$%^&/*]+$");
				            isValid = regex.test($(this).val());
				            if(isValid == false)
				            {
				              sk.skNotify('Invalid date', 'danger');
				              return false;
				            }
			            }
			        	}
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[this.picker, '.prev, .next', {
					click: $.proxy(this.navArrowsClick, this)
				}],
				[this.picker, '.day:not(.disabled)', {
					click: $.proxy(this.dayCellClick, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.isInline
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				viewMode: this.viewMode,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					} else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (this.inputField.prop('disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline || !this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.setViewMode(this.o.startView);

			if (this.o.forceParse && this.inputField.val())
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(e){
			var dateString;
			if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types
				&& $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {
				dateString = e.originalEvent.clipboardData.getData('text/plain');
			} else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			} else {
				return;
			}
			this.setDate(dateString);
			this.update();
			e.preventDefault();
		},

		_utc_to_local: function(utc){
			if (!utc) {
				return utc;
			}

			var local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));

			if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {
				local = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));
			}

			return local;
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (selected_date !== undefined) {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			this.inputField.val('');
			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.setDates.apply(this, $.map(args, this._utc_to_local));
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if(formatted != '')
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;
			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			return this;
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [0];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left;
			var top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					if (this.o.rtl) {
						// Default to right
						this.picker.addClass('datepicker-orient-right');
					} else {
						// Default to left
						this.picker.addClass('datepicker-orient-left');
					}
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: false,
		update: function(){
			if (!this._allow_update)
				return this;

			if(this.element.data('date') == '')
			return; 

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			} else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.o.updateViewDate) {
				if (this.dates.length)
					this.viewDate = new Date(this.dates.get(-1));
				else if (this.viewDate < this.o.startDate)
					this.viewDate = new Date(this.o.startDate);
				else if (this.viewDate > this.o.endDate)
					this.viewDate = new Date(this.o.endDate);
				else
					this.viewDate = this.o.defaultViewDate;
			}

			if (fromArgs){
				// setting date by clicking
				this.setValue();
				this.element.change();
			}
			else if (this.dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates) && fromArgs) {
					this._trigger('changeDate');
					this.element.change();
				}
			}
			if (!this.dates.length && oldDates.length) {
				this._trigger('clearDate');
				this.element.change();
			}

			this.fill();
			return this;
		},

		fillDow: function(){
      if (this.o.showWeekDays) {
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
      }
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '';
			var focused;
			for (var i = 0; i < 12; i++){
				focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = UTCToday();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with UTC today, not local today
			if (this.o.todayHighlight && isUTCEquals(date, today)) {
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');
			}
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, year, startYear, endYear, beforeFn){
			var html = '';
			var step = factor / 10;
			var view = this.picker.find(selector);
			var startVal = Math.floor(year / factor) * factor;
			var endVal = startVal + step * 9;
			var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;
			var selected = $.map(this.dates, function(d){
				return Math.floor(d.getUTCFullYear() / step) * step;
			});

			var classes, tooltip, before;
			for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {
				classes = [cssClass];
				tooltip = null;

				if (currVal === startVal - step) {
					classes.push('old');
				} else if (currVal === endVal + step) {
					classes.push('new');
				}
				if ($.inArray(currVal, selected) !== -1) {
					classes.push('active');
				}
				if (currVal < startYear || currVal > endYear) {
					classes.push('disabled');
				}
				if (currVal === focusedVal) {
				  classes.push('focused');
        }

				if (beforeFn !== $.noop) {
					before = beforeFn(new Date(currVal, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof before === 'boolean') {
						before = {enabled: before};
					} else if (typeof before === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
			}

			view.find('.datepicker-switch').text(startVal + '-' + endVal);
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
						.css('display', this.o.todayBtn === true || this.o.todayBtn === 'linked' ? 'table-cell' : 'none');
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.css('display', this.o.clearBtn === true ? 'table-cell' : 'none');
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month, 0),
				day = prevMonth.getUTCDate();
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var weekDay, clsName;
			while (prevMonth.valueOf() < nextMonth){
				weekDay = prevMonth.getUTCDay();
				if (weekDay === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek = (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				var content = prevMonth.getUTCDate();

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
					if (before.content)
						content = before.content;
				}

				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
				//Fallback to unique function for older jquery versions
				if ($.isFunction($.uniqueSort)) {
					clsName = $.uniqueSort(clsName);
				} else {
					clsName = $.unique(clsName);
				}

				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + ' data-date="' + prevMonth.getTime().toString() + '">' + content + '</td>');
				tooltip = null;
				if (weekDay === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
			}
			this.picker.find('.datepicker-days tbody').html(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('tbody span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				  var that = this;
				  $.each(months, function(i, month){
		          var moDate = new Date(year, i, 1);
		          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				prevIsDisabled,
				nextIsDisabled,
				factor = 1;
			switch (this.viewMode){
				case 4:
					factor *= 10;
					/* falls through */
				case 3:
					factor *= 10;
					/* falls through */
				case 2:
					factor *= 10;
					/* falls through */
				case 1:
					prevIsDisabled = Math.floor(year / factor) * factor <= startYear;
					nextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;
					break;
				case 0:
					prevIsDisabled = year <= startYear && month <= startMonth;
					nextIsDisabled = year >= endYear && month >= endMonth;
					break;
			}

			this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);
			this.picker.find('.next').toggleClass('disabled', nextIsDisabled);
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode){
				this.setViewMode(this.viewMode + 1);
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.setViewMode(0);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a month, year, decade, century
				if (target.hasClass('month')
						|| target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					if (this.viewMode === 1){
						month = target.parent().find('span').index(target);
						year = this.viewDate.getUTCFullYear();
						this.viewDate.setUTCMonth(month);
					} else {
						month = 0;
						year = Number(target.text());
						this.viewDate.setUTCFullYear(year);
					}

					this._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);

					if (this.viewMode === this.o.minViewMode){
						this._setDate(UTCDate(year, month, day));
					} else {
						this.setViewMode(this.viewMode - 1);
						this.fill();
					}
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				this._focused_from.focus();
			}
			delete this._focused_from;
		},

		dayCellClick: function(e){
			var $target = $(e.currentTarget);
			var timestamp = $target.data('date');
			var date = new Date(timestamp);

			if (this.o.updateViewDate) {
				if (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {
					this._trigger('changeYear', this.viewDate);
				}

				if (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {
					this._trigger('changeMonth', this.viewDate);
				}
			}
			this._setDate(date);
		},

		// Clicked on prev or next
		navArrowsClick: function(e){
			var $target = $(e.currentTarget);
			var dir = $target.hasClass('prev') ? -1 : 1;
			if (this.viewMode !== 0){
				dir *= DPGlobal.viewModes[this.viewMode].navStep * 12;
			}
			this.viewDate = this.moveMonth(this.viewDate, dir);
			this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);
			this.fill();
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if ((!which && this.o.updateViewDate) || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			this.inputField.trigger('change');
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					} else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					} else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					} else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				this.inputField.trigger('change');
			}
		},

		setViewMode: function(viewMode){
			this.viewMode = viewMode;
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
      this._trigger('changeViewMode', new Date(this.viewDate));
		}
	};

	var DateRangePicker = function(element, options){
		$.data(element, 'datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		this.keepEmptyValues = options.keepEmptyValues;
		delete options.keepEmptyValues;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $.data(i, 'datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		clearDates: function(){
			$.each(this.pickers, function(i, p){
				p.clearDates();
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $.data(e.target, 'datepicker');

			if (dp === undefined) {
				return;
			}

			var new_date = dp.getUTCDate(),
				keep_empty_values = this.keepEmptyValues,
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate() && (p === dp || !keep_empty_values))
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			} else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		destroy: function(){
			$.map(this.pickers, function(p){ p.destroy(); });
			$(this.inputs).off('changeDate', this.dateUpdated);
			delete this.element.data().datepicker;
		},
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keepEmptyValues: false,
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		updateViewDate: true,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&#x00AB;',
			rightArrow: '&#x00BB;'
		},
        onClose: function(dateText, inst) {
            console.log('dateText',dateText);
            console.log('inst',inst);

        },
    showWeekDays: true
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		viewModes: [
			{
				names: ['days', 'month'],
				clsName: 'days',
				e: 'changeMonth'
			},
			{
				names: ['months', 'year'],
				clsName: 'months',
				e: 'changeYear',
				navStep: 1
			},
			{
				names: ['years', 'decade'],
				clsName: 'years',
				e: 'changeDecade',
				navStep: 10
			},
			{
				names: ['decades', 'century'],
				clsName: 'decades',
				e: 'changeCentury',
				navStep: 100
			},
			{
				names: ['centuries', 'millennium'],
				clsName: 'centuries',
				e: 'changeMillennium',
				navStep: 1000
			}
		],
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
				return format.toValue(date, format, language);
			var fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				parts, part, dir, i, fn;
			if (date in dateAliases){
				date = dateAliases[date];
			}
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(date)){
				parts = date.match(/([\-+]\d+)([dmwy])/gi);
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = parts[i].match(/([\-+]\d+)([dmwy])/i);
					dir = Number(part[1]);
					fn = fn_map[part[2].toLowerCase()];
					date = Datepicker.prototype[fn](date, dir);
				}
				return Datepicker.prototype._zero_utc_time(date);
			}

			parts = date && date.match(this.nonpunctuation) || [];

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['yy'] = setters_map['yyyy'];
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">'+defaults.templates.leftArrow+'</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">'+defaults.templates.rightArrow+'</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.8.0';

	$.fn.datepicker.deprecated = function(msg){
		var console = window.console;
		if (console && console.warn) {
			console.warn('DEPRECATED: ' + msg);
		}
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));

/*...
 	/clipone/js/global_javascript.js
*/

var global_js = {
    print_font_size: 12,
    datatableSelected: false,
    patient_maps_autocomplete: null,
    font_size: 0,
    local_fontSize: 0,
    fontChkStatus: true,
    duplicatedscArr : [],
    enter: true,
    Init: function () {

        global_js.error_filed_highlighter();

        $(document).on("dialogopen", ".ui-dialog", function (event, ui) {

            $('.ui-dialog-titlebar-close').html('<i class="clip-cancel-circle sk-dialog-close"></i>')/*.css('margin-right', '155px')*/.css('opacity', '1').prepend('<i class="text-info">To Exit hit Esc or Click >> </i>');
        });

        $.ui.dialog.prototype._allowInteraction = function (e) {
            return !!$(e.target).closest('.ui-dialog, .ui-datepicker, .select2-drop').length;
        };

        setTimeout(function () {
            var currentPage = window.location.href;
            currentPage = currentPage.replace('https://', '').replace('http://', '');
            currentPage = currentPage.split('/');
            currentPage = currentPage[1].split('?');
            if ($.inArray(currentPage[0], ['past_claim', 'totalsReporting', 'ohip', 'invoices', 'appointment_search', 'appointment_stage_track', 'provider', 'location', 'general_schedule', 'build_schedule', 'vacation', 'referring_doctor']) > -1) {
                global_js.mainMenu('minall');
            } else if (currentPage[0] == 'appointment_book') {
                switch (sk.appt_book_sidemenu_position) {
                    case 'min':
                        global_js.mainMenu('min');
                        break;
                    case 'max':
                        $("#new_toggler").unbind('hover');
                        global_js.mainMenu('max');
                        break;
                    case 'minall':
                        global_js.mainMenu('minall');
                        break;
                    case 'maxall':
                        $("#new_toggler").unbind('hover');
                        global_js.mainMenu('maxall');
                        break;
                }
            } else {
                global_js.mainMenu('maxall');
            }
        }, 500);



    },
    miniColor: function () {
        $('#text_color').minicolors({
            control: $(this).attr('data-control') || 'hue',
            defaultValue: $(this).attr('data-defaultValue') || '',
            format: $(this).attr('data-format') || 'hex',
            keywords: $(this).attr('data-keywords') || '',
            inline: $(this).attr('data-inline') === 'true',
            letterCase: $(this).attr('data-letterCase') || 'lowercase',
            opacity: $(this).attr('data-opacity'),
            position: $(this).attr('data-position') || 'bottom',
            swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
            change: function (value, opacity) {
                if (!value)
                    return;
                if (opacity)
                    value += ', ' + opacity;
            },
            theme: 'bootstrap'
        });

        $('#font-setting-buttons').easyView({
            container: '*',
            increaseSelector: '.increase-me',
            decreaseSelector: '.decrease-me',
            normalSelector: '.reset-me',
            contrastSelector: '.change-me'
        });

        $("#resetColor").click(function () {
            var color = null;
            var font_size = global_js.font_size;


            /*quickClaim.showOverlayMessage('Saving Content Settings...');
            $.ajax({
                url: '/default/savecontentsetting',
                type: "POST",
                data: {text_color: color, font_size: font_size},
                success: function (res) {
                    quickClaim.hideOverlayMessage();
                    window.location.reload();
                }
            })*/

            // alert(sessionStorage.color);
            // alert(sessionStorage.fontSize);
            if(typeof(Storage) !== "undefined") {
                window.location.reload();
            }


        });

        $("#contentUpdateBtn").click(function () {
            var color = $("#text_color").val();
            var font_size = global_js.font_size;
            // quickClaim.showOverlayMessage('Saving Content Settings...');
            // sessionStorage.color = $("#text_color").val();
            window.sessionStorage.setItem("color", color);
            // sessionStorage.fontSize = global_js.font_size;
            window.sessionStorage.setItem("fontSize", font_size);

            if(typeof(Storage) !== "undefined") {

                $("p,span,small,h1,h2,h3,h4,h5,h6,ul li,div,input[type='text'],textarea,select,.sk-datatable th, .sk-datatable td, .sk-datatable td div, .sk-datatable div, .title, .table, td,th")
                            .not('.styletype')
//                                                    .not('.message')
                            .not('.alert')
                            .not('.alert-heading')
                            .not('.side_text1')
//                                                    .not('.title')
                            .not('.fs12')
                            .not('.maintainColor')
                            .not('#generate_cal th')
                            .not('.ui-state-highlight')
                            .not('.ui-button-text')
                            .not('.dt-button span i')
                            .not('.dt-button span')
                            .not('.dt-button')
                            .not('li.btn-primary')
                            .not('span.ui-button-text')
                            .not('.main-navigation-menu li')
                            .not('.main-navigation-menu a')
                            .not('.main-navigation-menu span')
                            .css('color', color);
            }
            /*$.ajax({
                url: '/default/savecontentsetting',
                type: "POST",
                data: {text_color: color, font_size: font_size},
                success: function (res) {
                    quickClaim.hideOverlayMessage();
                    $("p,span,small,h1,h2,h3,h4,h5,h6,ul li,div,input[type='text'],textarea,select,.sk-datatable th, .sk-datatable td, .sk-datatable td div, .sk-datatable div, .title, .table, td,th")
                            .not('.styletype')
//                                                    .not('.message')
                            .not('.alert')
                            .not('.alert-heading')
                            .not('.side_text1')
//                                                    .not('.title')
                            .not('.ui-state-highlight')
                            .not('.ui-button-text')
                            .not('.dt-button span i')
                            .not('.dt-button span')
                            .not('.dt-button')
                            .not('li.btn-primary')
                            .not('span.ui-button-text')
                            .not('.main-navigation-menu span')
                            .css('color', color);

                }
            })*/
        });
    },
    todayDate: function (date = null) {
        var dt = date != null ? date : new Date();
        var newDate;
        switch (quickClaim.dateFormat) {
            case 'd/m/Y':
                newDate = dt.getDate() + '/' + (dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1) + '/' + dt.getFullYear();
                break;
            case 'dd/mm/yy':
                newDate = dt.getDate() + '/' + (dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1) + '/' + dt.getFullYear().toString().substr(-2);
                break;
            case 'm/d/Y':
                newDate = (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear();
                break;
            case 'Y-m-d':
                newDate = dt.getFullYear() + '-' + (dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1) + '-' + dt.getDate();
                break;
            default:
                newDate = dt.getFullYear() + '-' + (dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1) + '-' + dt.getDate();
                break;
        }
        return newDate;
    },
    getNewMomentFormat: function () {
        var newFormat = quickClaim.dateFormat;
        switch (quickClaim.dateFormat) {
            case 'd/m/Y':
                newFormat = 'DD/MM/YYYY';
                break;
            case 'dd/mm/yy':
                newFormat = 'DD/MM/YY';
                break;
            case 'm/d/Y':
                newFormat = 'MM/DD/YYYY';
                break;
            case 'Y-m-d':
                newFormat = 'YYYY-MM-DD';
                break;
        }
        return newFormat;
    },
    getNewMomentFormatDateTime: function () {
        var newFormat = quickClaim.dateFormat;
        var time = quickClaim.timeFormat.replace('a', 'A').replace('ii', 'mm');
        switch (quickClaim.dateFormat) {
            case 'd/m/Y':
                newFormat = 'DD/MM/YYYY';
                break;
            case 'dd/mm/yy':
                newFormat = 'DD/MM/YY';
                break;
            case 'm/d/Y':
                newFormat = 'MM/DD/YYYY';
                break;
            case 'Y-m-d':
                newFormat = 'YYYY-MM-DD';
                break;
        }
        return newFormat + ' ' + time;
    },
    getNewDateFormat: function () {
        var newFormat = quickClaim.dateFormat;
        switch (quickClaim.dateFormat) {
            case 'd/m/Y':
                newFormat = 'dd/mm/yyyy';
                break;
            case 'dd/mm/yy':
                newFormat = 'dd/mm/yy';
                break;
            case 'm/d/Y':
                newFormat = 'mm/dd/yyyy';
                break;
            case 'Y-m-d':
                newFormat = 'yyyy-mm-dd';
                break;
        }
        return newFormat;
    },
    getFormattedDate: function (date) {
        var newDate;
        switch (quickClaim.dateFormat) {
            case 'd/m/Y':
                var splittedDate = date.split("/");
                newDate = splittedDate[2] + '-' + splittedDate[1] + '-' + splittedDate[0];
                break;
            case 'dd/mm/yy':
                var splittedDate = date.split("/");
                newDate = splittedDate[2] + '-' + splittedDate[1] + '-' + splittedDate[0];
                break;
            case 'm/d/Y':
                var splittedDate = date.split("/");
                newDate = splittedDate[2] + '-' + splittedDate[0] + '-' + splittedDate[1];
                break;
            case 'Y-m-d':
                var splittedDate = date.split("-");
                newDate = splittedDate[0] + '-' + splittedDate[1] + '-' + splittedDate[2];
                break;
        }
        return moment.tz(newDate, 'EST').format();
    },
    getDateFormatForAppt: function () {
        var newFormat = quickClaim.dateFormat;
        switch (quickClaim.dateFormat) {
            case 'd/m/Y':
                newFormat = 'dd/mm/yy';
                break;
            case 'dd/mm/yy':
                newFormat = 'dd/mm/y';
                break;
            case 'm/d/Y':
                newFormat = 'mm/dd/yy';
                break;
            case 'Y-m-d':
                newFormat = 'yy-mm-dd';
                break;
        }
        return newFormat;
    },
    customDataTable: function (tableId, filterFirst = false, showPrint = false, showPdf = false, showExcel = false) {
        var custBtn;
        if ($(".custActionBtns" + tableId).length > 0) {
            custBtn = $(".custActionBtns" + tableId).html();
        } else {

        }
        var buttons = [];
        if (showPrint) {
            buttons.push({
                "extend": 'print',
                "text": '<i class="fa-print fa"></i> Print',
                "className": 'btn btn-blue btn-squared'
            });
        }
        if (showPdf) {
            buttons.push({
                "extend": 'pdf',
                "text": '<i class="clip-file-pdf"></i> PDF',
                "className": 'btn btn-danger btn-squared',
                extend: 'pdfHtml5',
                orientation: 'landscape',
                pageSize: 'LEGAL'
            });
        }
        if (showExcel) {
            buttons.push({
                "extend": 'excel',
                "text": '<i class="clip-file-excel"></i> Excel',
                "className": 'btn btn-info btn-squared'
            });
        }
        var table = $("#" + tableId).DataTable({
            "paging": true,
            "lengthMenu": [10, 25, 50, 100, 200, 250, 500],
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "order": [[0, "asc"]],
            "info": true,
            "autoWidth": false,
            "scrollX": true,
            "scrollY": true,
            "responsive": false,
            "select": true,
            "keys": true,
            "dom": 'Bfrtip',
            "buttons": buttons,
            "oLanguage": {
                "sSearch": "",
                "sLengthMenu": "Per page _MENU_",
                "oPaginate": {
                    "sNext": "<i class='clip-chevron-right'></i>",
                    "sPrevious": "<i class='clip-chevron-left'></i>"
                },
                "sInfo": "_START_ to _END_ rows out of _TOTAL_",
            },
            "sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv' + tableId + '"> <"col-sm-4 printBtnDiv" Bl > <"col-sm-12" <"row well customWell" <"col-sm-4 customSearchInput' + tableId + '" f> <"col-sm-1 customSearchField' + tableId + '">  <"col-sm-7 CustomPagination' + tableId + '"ip> > > >  >rt<"clear">>',
//            "sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv"> <"col-sm-4 printBtnDiv" l > <"col-sm-12" <"row well customWell" <"col-sm-4 customSearchInput" f> <"col-sm-8 CustomPagination"ip> > > >  >rt<"clear">>',
            initComplete: function () {

                //$("#patient_service_history_results_table_length").append('<button type="button" id="printVacationTable1"  class="btn btn-danger btn-squared"><i class="fa fa-print"></i> Print</button>');
                $(".CustomPagination" + tableId).prepend('<div style="float:left"><button data-toggle="tooltip" title="Filters" type="button" class="btn btn-primary filterToggle' + tableId + '"><i class="fa fa-filter"></i></button></div>');

                $("#" + tableId).find(".entireClickable").click(function () {
                    if ($(this).find('input').prop('checked')) {
                        $(this).find('input').prop('checked', false);
                        $(this).removeClass('highlight');
                    } else {
                        $(this).find('input').prop('checked', true);
                        $(this).addClass('highlight');
                    }
                })

                var inputHtml = '<div class="input-group">' +
                        '<input type="text" placeholder="Contains..." data-focus="true" class="form-control DatatableAllRounderSearch' + tableId + '" />' +
                        '<span class="input-group-addon cursorPointer btnClearSearchTxt' + tableId + '"> ' +
                        '<i class="clip-cancel-circle-2 "></i>' +
                        '</span>' +
                        '<span class="input-group-addon cursorPointer"> ' +
                        '<i class="clip-search-2"></i>' +
                        '</span>' +
                        '</div>';

                $(".customSearchInput" + tableId).html(inputHtml);

                var searchoptions = $("#" + tableId + " tfoot").html();
                $("#" + tableId + " thead").append(searchoptions);
                $("#" + tableId + " tfoot").remove();

                var aa = 0;
                this.api().columns().every(function () {
                    var column = this;
                    var columnText = $.trim($(column.header())[0].innerText);
                    if ($(column.header())[0].column != 0 || filterFirst == true) {
                        if (($.trim($(column.header())[0].innerText) == 'Description' && tableId == 'explCodeTable')) {
                            $('<input type="text" placeholder="Search" class="form-control btn-squared" />')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('keyup change', function () {
                                        if (column.search() !== this.value) {
                                            column
                                                    .search(this.value)
                                                    .draw();
                                        }
                                    });
                        } else {
                            var select = $('<select class="selectRsltTbl' + tableId + '"><option value=""></option><option value="">All</option><option value="^$">No '+columnText+'</option></select>')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('change', function () {
                                        var val = //$.fn.dataTable.util.escapeRegex(
                                                $(this).val().trim();
                                        //);

                                         column.search(val, true, false).draw();
                                    });

                            column.data().unique().sort().each(function (d, j) {
                                if (columnText == 'Permissions' && tableId == 'user_type_table') {
                                    var arr = d.trim();
                                    arr = arr.split(',');

                                    for (var i in arr) {
                                        select.append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
                                    }
                                } else {
                                     if(d != '') {
                                       select.append('<option value="' + d + '">' + d + '</option>');
                                       }
                                }

                            });
                        }

                    }
                    aa++;
                });


                $(".filterToggle" + tableId).click(function () {
                    $("#" + tableId + " thead tr:eq(1)").toggle();
                });
                //$(".filterToggle" + tableId).trigger("click");
                $(".selectRsltTbl" + tableId).select2({
                    placeholder: "Search",
                    allowClear: true,
                    selectOnClose: true,
                    dropdownAutoWidth: true,
//                    maximumInputLength: 20,
                    width: '98%'
                });
                $(".custActionBtns" + tableId).detach().appendTo(".actionButtonsDiv" + tableId);
                $(".actionButtonsDiv" + tableId).attr('style', 'padding-left:0px');

//                $(".actionButtonsDiv" + tableId).parent('div').css('padding-left','0px');

                //
                global_js.triggerFocusField();
            }
        });


        $(".DatatableAllRounderSearch" + tableId).keyup(function () {
            table.search($(this).val(), true).draw();
        });

        $(".btnClearSearchTxt" + tableId).click(function () {
            $(".DatatableAllRounderSearch" + tableId).val('');
            table.search('', true).draw();
        });
        setTimeout(function () {
            $(".dataTables_length select").select2('destroy');
            $("#" + tableId).find('.select2-arrow').hide();
            $("#" + tableId + " thead tr:eq(1)").toggle();
        }, 200);
        $("#tabs").on("tabsactivate", function (event, ui) {
            if ($("#" + tableId + " thead tr:eq(1)").is(":visible")) {
                $("#" + tableId + " thead tr:eq(1)").toggle();
            }
        });

        $('div.dataTables_filter input').addClass('form-control');
        $('div.dataTables_filter input').attr('placeholder', 'Search');
        $(".DTsearchlabel").html('<i class="clip-search"></i>');
        $('.dataTables_filter').attr('style', 'width:100%');
        $('.dataTables_filter label').attr('style', 'width:100%');
        $('.dataTables_length select').attr('style', 'font-size: 12px;padding: 5px 3px;background: #fff;');
        $('div.dataTables_filter input').attr('style', 'float:right;width:100%');
        $(".dataTables_wrapper .dataTables_paginate .paginate_button").attr('style', 'background:#fff !important;color:#444444 !important; border-radius: 0;');

//        table.on('responsive-display', function (e, datatable, row, showHide, update) {
//            $('td ul').attr('style', 'width:100% !important');
//            $('td ul').addClass('row');
//            $('td ul li').addClass('col-sm-4');
//            $(".dropdown-menu li").removeClass('col-sm-4');
//        });

    },
    customFooterDataTable: function (tableId, filterFirst = false, showPrint = false, showPdf = false, showExcel = false, className) {
        var buttons = [];
        
        if (showPdf) {
            buttons.push({
                /*"extend": 'pdf',
                "text": '<i class="clip-file-pdf"></i> PDF',
                "className": 'btn btn-danger btn-squared skApptPrint',
                extend: 'pdfHtml5',
                orientation: 'landscape',*/
                text: '<i class="clip-file-pdf"></i> PDF',
                className: 'btn btn-danger btn-squared '+className,
                // pageSize: 'LEGAL',

                customize: function (doc) {
                    doc.defaultStyle.fontSize = global_js.print_font_size;
                }
            });
        }
        if (showExcel) {
            buttons.push({
                "extend": 'excel',
                "id": 'btnExport',
                "text": '<i class="clip-file-excel"></i> Excel',
                "className": 'btn btn-info btn-squared'
            });
        }
        if (showPrint) {
            buttons.push({
                "extend": 'print',
                "text": '<i class="fa-print fa"></i> Print',
                "className": 'btn btn-blue btn-squared'
            });
        }
        if (filterFirst == false) {
            var coldef = [{"targets": 0, "orderable": false}];
        } else {
            var coldef = {};
        }
        var table = $("#" + tableId).DataTable({
            "paging": true,
            "lengthMenu": [10, 25, 50, 100, 200, 250, 500],
            "lengthChange": true,
            "pageLength": sk.skdt_page_size,
            "searching": true,
            "ordering": true,
            "order": [[0, "asc"]],
            "info": true,
            "autoWidth": false,
            "responsive": false,
            "dom": 'Bfrtip',
            "buttons": buttons,
            "columnDefs": coldef,
            "oLanguage": {
                "sSearch": "",
                "sLengthMenu": "Per page _MENU_",
                "oPaginate": {
                    "sNext": "<i class='clip-chevron-right'></i>",
                    "sPrevious": "<i class='clip-chevron-left'></i>"
                },
                "sInfo": "_START_ to _END_ rows out of _TOTAL_",
            },
            "sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv' + tableId + '"> <"col-sm-4 printBtnDiv" Bl > <"col-sm-12" <"row well customWell" <"col-sm-4 customSearchInput' + tableId + '" f> <"col-sm-1 customSearchField' + tableId + '">  <"col-sm-7 CustomPagination' + tableId + '"ip> > > >  >rt<"clear">>',
            //"sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv"> <"col-sm-4 printBtnDiv" l > <"col-sm-12" <"row well customWell" <"col-sm-4 customSearchInput" f> <"col-sm-8 CustomPagination"ip> > > >  >rt<"clear">>',
            initComplete: function () {
                //$("#patient_service_history_results_table_length").append('<button type="button" id="printVacationTable1"  class="btn btn-danger btn-squared"><i class="fa fa-print"></i> Print</button>');
                $(".CustomPagination" + tableId).prepend('<div style="float:left"><button data-toggle="tooltip" title="Filters" type="button" class="btn btn-primary filterToggle' + tableId + '"><i class="fa fa-filter"></i></button></div>');

                $("#" + tableId).find(".entireClickable").click(function () {
                    if ($(this).find('input').prop('checked')) {
                        $(this).find('input').prop('checked', false);
                        $(this).removeClass('highlight');
                    } else {
                        $(this).find('input').prop('checked', true);
                        $(this).addClass('highlight');
                    }
                })

                var inputHtml = '<div class="input-group">' +
                        '<input type="text" placeholder="Contains..." data-focus="true" class="form-control DatatableAllRounderSearch' + tableId + '" />' +
                        '<span class="input-group-addon cursorPointer btnClearSearchTxt' + tableId + '"> ' +
                        '<i class="clip-cancel-circle-2 "></i>' +
                        '</span>' +
                        '<span class="input-group-addon cursorPointer"> ' +
                        '<i class="clip-search-2"></i>' +
                        '</span>' +
                        '</div>';

                $(".customSearchInput" + tableId).html(inputHtml);

                var searchoptions = $("#" + tableId + " thead tr:eq(0) th");
                var customfilterinputs = '<tr>';
                for (var j = 0; j < searchoptions.length; j++) {
                    customfilterinputs += '<th></th>';
                }
                customfilterinputs += '</tr>';
                $("#" + tableId + " thead").append(customfilterinputs);
                //$("#" + tableId + " tfoot").remove();

                var aa = 0;
                this.api().columns().every(function () {
                    var column = this;
                    var columnText = $.trim($(column.header())[0].innerText);
                    if ($(column.header())[0].cellIndex != 0 || filterFirst == true) {
                        if (($.trim($(column.header())[0].innerText) == 'Description' && tableId == 'explCodeTable')) {
                            $('<input type="text" placeholder="Search" class="form-control btn-squared" />')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('keyup change', function () {
                                        if (column.search() !== this.value) {
                                            column
                                                    .search(this.value)
                                                    .draw();
                                        }
                                    });
                        } 
                        else if (columnText == 'Current Doctor Schedule') {
                            $('<input type="text" placeholder="Enter keyword for search." class="form-control btn-squared" />')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('keyup change', function () {
                                        if (column.search() !== this.value) {
                                            column
                                                    .search(this.value)
                                                    .draw();
                                        }
                                    });
                        } 
                        else {
                            var select = $('<select class="selectRsltTbl' + tableId + '"><option value=""></option><option value="">All</option><option value="^$">No '+columnText+'</option></select>')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('change', function () {
                                        var val = //$.fn.dataTable.util.escapeRegex(
                                                $(this).val().trim();
                                        //);
                                        column.search(val, true, false).draw();
                                    });

                            column.data().unique().sort().each(function (d, j) {
                                if (columnText == 'Permissions' && tableId == 'user_type_table') {
                                    var arr = d.trim();
                                    arr = arr.split(',');
                                    for (var i in arr) {
                                        select.append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
                                    }
                                } else {
                                    if (columnText == 'Locations' && tableId == 'GeneralSchduleTable') {
                                           var locationdoctor = $('.doctor_location').text();
                                           var ss = locationdoctor.split(',');
                                           for(i in ss)  {   
                                                if($.inArray(ss[i], global_js.duplicatedscArr) != -1) {
                                                     global_js.duplicatedscArr.push(ss[i]);
                                                } else {
                                                    if(ss[i] != '') {
                                                        select.append('<option value="' + ss[i] + '">' + ss[i] + '</option>');
                                                        global_js.duplicatedscArr.push(ss[i]);
                                                    }
                                                }
                                           } 

                                    } else {
                                        if(d != '') {
                                        select.append('<option value="' + d + '">' + d + '</option>');
                                        }
                                    }
                                }

                            });
                        }

                    }
                    aa++;
                });


                $(".filterToggle" + tableId).click(function () {
                    $("#" + tableId + " thead tr:eq(1)").toggle();
                });
                //$(".filterToggle" + tableId).trigger("click");
                $(".selectRsltTbl" + tableId).select2({
                    placeholder: "Search",
                    selectOnClose: true,
                    allowClear: true,
                    dropdownAutoWidth: true,
                    //maximumInputLength: 20,
                    width: '98%'
                });
                $(".custActionBtns" + tableId).detach().appendTo(".actionButtonsDiv" + tableId);
                $(".actionButtonsDiv" + tableId).attr('style', 'padding-left:0px');
                //$(".actionButtonsDiv" + tableId).parent('div').css('padding-left','0px');
                //
                global_js.triggerFocusField();
            }
        });

        // save page length 
        $(".DatatableAllRounderSearch" + tableId).on('length.dt', function () {
            var info = $(".DatatableAllRounderSearch" + tableId).DataTable().page.info();
            sk.setClientParam('dt_page_size', info.length);
        });

        $(".DatatableAllRounderSearch" + tableId).keyup(function () {
            table.search($(this).val(), true).draw();
        });

        $(".btnClearSearchTxt" + tableId).click(function () {
            $(".DatatableAllRounderSearch" + tableId).val('');
            table.search('', true).draw();
        });
        setTimeout(function () {
            $(".dataTables_length select").select2('destroy');
            $("#" + tableId).find('.select2-arrow').hide();
            $("#" + tableId + " thead tr:eq(1)").toggle();
        }, 200);
        $("#tabs").on("tabsactivate", function (event, ui) {
            if ($("#" + tableId + " thead tr:eq(1)").is(":visible")) {
                $("#" + tableId + " thead tr:eq(1)").toggle();
            }
        });

        $('div.dataTables_filter input').addClass('form-control');
        $('div.dataTables_filter input').attr('placeholder', 'Search');
        $(".DTsearchlabel").html('<i class="clip-search"></i>');
        $('.dataTables_filter').attr('style', 'width:100%');
        $('.dataTables_filter label').attr('style', 'width:100%');
        $('.dataTables_length select').attr('style', 'font-size: 12px;padding: 5px 3px;background: #fff;');
        $('div.dataTables_filter input').attr('style', 'float:right;width:100%');
        $(".dataTables_wrapper .dataTables_paginate .paginate_button").attr('style', 'background:#fff !important;color:#444444 !important; border-radius: 0;');

        table.on('responsive-display', function (e, datatable, row, showHide, update) {
            $('td ul').attr('style', 'width:100% !important');
            $('td ul').addClass('row');
            $('td ul li').addClass('col-sm-4');
            $(".dropdown-menu li").removeClass('col-sm-4');
        });
    }, error_filed_highlighter: function () {
        $(".error_list").closest('input').attr('style', 'border-color:red');
    },
    customFooterDataTableWithOptions: function (tableId, filterFirst = false, ActionsBtns = [], select = true) {


       
        //alert($.fn.DataTable.isDataTable( '#'+tableId ));
        $("#"+tableId).dataTable().fnDestroy();
        if ( ! $.fn.DataTable.isDataTable( '#'+tableId ) ) {

        var buttons = [];
        for (var s in ActionsBtns) {
            switch (ActionsBtns[s]) {
                case 'print':
                    buttons.push({
                        "extend": 'print',
                        "text": '<i class="fa-print fa"></i> Print',
                        "className": 'btn btn-blue btn-squared'
                    });
                    break;
                case 'excel':
                    buttons.push({
                        "extend": 'excel',
                        "text": '<i class="clip-file-excel"></i> Excel',
                        "className": 'btn btn-info btn-squared'
                    });
                    break;
                case 'pdf':
                    buttons.push({
                        extend: 'pdf',
                        text: '<i class="clip-file-pdf"></i> PDF',
                        className: 'btn btn-danger btn-squared',
                        extend: 'pdfHtml5',
                        orientation: $('input[name="stage_track[pdf_option_orientation]"]:checked').val() == "P" ? 'portrait' : 'landscape',
                        title: $("#stage_track_pdf_option_header").val() != '' ? $("#stage_track_pdf_option_header").val() : 'Appointment Stage Search',
                        messageTop: $("#stage_track_pdf_option_subheader").val() != '' ? $("#stage_track_pdf_option_subheader").val() : '',

                        customize: function (doc) {

                            doc.defaultStyle.fontSize = global_js.print_font_size;
                            if (doc.content[2]) {
                                doc.content[2].table.widths = Array(doc.content[2].table.body[0].length + 1).join('*').split('');
                            }
                            doc.styles.title = {
                                fontSize: '16',
                                alignment: 'left',
                                margin: [425, -50, 0, 10],
                            };

                            doc.content.splice(1, 0, {
                                margin: [0, -50, 0, 12],
                                alignment: 'right',
                                width: 250,
                                image: 'data:image/png;base64,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'
                            });

                            doc['footer'] = (function (page, pages) {
                                return {
                                    columns: [
                                        {
                                            alignment: 'left',
                                            text: [
                                                {text: 'Printed on:' + moment().format(sk.getMomentDatetimeFormat())}
                                            ]
                                        },
                                        {
                                            alignment: 'right',
                                            text: [
                                                'Page ',
                                                {text: page.toString(), italics: true},
                                                ' of ',
                                                {text: pages.toString(), italics: true}
                                            ]
                                        }
                                    ],
                                    margin: [10, 0]
                                }
                            });
                        },
                        exportOptions: {
                            columns: "thead th:not(.actions)",
                            format: {
                                body: function (data, column, row) {
                                    if (row == 11) {
                                        var spanTxt = $(data).find('span').text();
                                        var allTxt = $(data).find('li').text();

                                        console.log(allTxt.replace(spanTxt, ''));
                                        return allTxt.replace(spanTxt, '');
                                    } else {
                                        return data;
                                    }
                                }
                            }
                        }
                    });
                    break;
                case 'share':
                    buttons.push({
                        "text": '<i class="clip-share"></i> Share',
                        "className": 'btn btn-primary btn-squared'
                    });
                    break;
            }
        }

        if (filterFirst == false) {
            var coldef = [{"targets": 0, "orderable": false}];
        } else {
            var coldef = {};
        }
        var order = '';
        //alert(tableId);
        //[[0, "asc"]]
        if(tableId == 'patient_service_history_results_table'){
            var indexservicedate = $('th:contains("Service Date")').index();
            if(indexservicedate == '') {
                var serviceindex = 8;
            } else {
                var serviceindex = indexservicedate;
            }
            order = [[serviceindex, "desc"]];
        }
        else if(tableId == 'patientHistoryTable'){
            order = [[4, "desc"]];
        }  else {
            order = [[0, "desc"]];
        }
        //alert(tableId);
        var table = $("#" + tableId).DataTable({
            "paging": true,
            "lengthMenu": [10, 25, 50, 100, 200, 250, 500],
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "order": order,
            "info": true,
            "autoWidth": false,
            "responsive": false,
            "select": select,
            "keys": true,
            "dom": 'Bfrtip',
            "buttons": buttons,
            "columnDefs": coldef,
            "oLanguage": {
                "sSearch": "",
                "sLengthMenu": "Per page _MENU_",
                "oPaginate": {
                    "sNext": "<i class='clip-chevron-right'></i>",
                    "sPrevious": "<i class='clip-chevron-left'></i>"
                },
                "sInfo": "_START_ to _END_ rows out of _TOTAL_,",
            },
            "sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv' + tableId + '"> <"col-sm-4 printBtnDiv" Bl > <"col-sm-12" <"row well customWell" <"col-sm-4 customSearchInput' + tableId + '" f> <"col-sm-1 customSearchField' + tableId + '">  <"col-sm-7 CustomPagination' + tableId + '"ip> > > >  >rt<"clear">>',
//            "sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv"> <"col-sm-4 printBtnDiv" l > <"col-sm-12" <"row well customWell" <"col-sm-4 customSearchInput" f> <"col-sm-8 CustomPagination"ip> > > >  >rt<"clear">>',
            initComplete: function () {

$.fn.dataTableExt.oSort["dateField-desc"] = function (x, y) {
                var a = moment(x, sk.getMomentDateFormat().toUpperCase());
                var b = moment(y, sk.getMomentDateFormat().toUpperCase());
                return (a.diff(b));
            };

            $.fn.dataTableExt.oSort["dateField-asc"] = function (x, y) {
                var a = moment(x, sk.getMomentDateFormat().toUpperCase());
                var b = moment(y, sk.getMomentDateFormat().toUpperCase());
                return (b.diff(a));
            }
                //$("#patient_service_history_results_table_length").append('<button type="button" id="printVacationTable1"  class="btn btn-danger btn-squared"><i class="fa fa-print"></i> Print</button>');
                $(".CustomPagination" + tableId).prepend('<div style="float:left"><button data-toggle="tooltip" title="Filters" type="button" class="btn btn-primary filterToggle' + tableId + '"><i class="fa fa-filter"></i></button></div>');

                $("#" + tableId).find(".entireClickable").click(function () {
                    if ($(this).find('input').prop('checked')) {
                        $(this).find('input').prop('checked', false);
                        $(this).removeClass('highlight');
                    } else {
                        $(this).find('input').prop('checked', true);
                        $(this).addClass('highlight');
                    }
                })

                var inputHtml = '<div class="input-group">' +
                        '<input type="text" placeholder="Contains..." data-focus="true" class="form-control DatatableAllRounderSearch' + tableId + '" />' +
                        '<span class="input-group-addon cursorPointer btnClearSearchTxt' + tableId + '"> ' +
                        '<i class="clip-cancel-circle-2 "></i>' +
                        '</span>' +
                        '<span class="input-group-addon cursorPointer"> ' +
                        '<i class="clip-search-2"></i>' +
                        '</span>' +
                        '</div>';

                $(".customSearchInput" + tableId).html(inputHtml);

                var searchoptions = $("#" + tableId + " thead tr:eq(0) th");
                var customfilterinputs = '<tr>';
                for (var j = 0; j < searchoptions.length; j++) {
                    customfilterinputs += '<th></th>';
                }
                customfilterinputs += '</tr>';
                $("#" + tableId + " thead").append(customfilterinputs);
//                $("#" + tableId + " tfoot").remove();

                var aa = 0;
                this.api().columns().every(function () {
                    var column = this;
                    var columnText = $.trim($(column.header())[0].innerText);
                    if ($(column.header())[0].cellIndex != 0 || filterFirst == true) {
                        if (columnText != 'Actions') {
                            if (($.trim($(column.header())[0].innerText) == 'Description' && tableId == 'explCodeTable')) {
                                $('<input type="text" placeholder="Search" class="form-control btn-squared" />')
                                        .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                        .on('keyup change', function () {
                                            if (column.search() !== this.value) {
                                                column
                                                        .search(this.value)
                                                        .draw();
                                            }
                                        });
                            } else {
                                var select = $('<select class="selectRsltTbl' + tableId + '"><option value=""></option><option value="">All</option><option value="^$">No '+columnText+'</option></select>')
                                        .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                        .on('change', function () {
                                            var val = //$.fn.dataTable.util.escapeRegex(
                                                    $(this).val().trim();
                                            //);
                                            column.search(val, true, false).draw();
                                        });

                                column.data().unique().sort().each(function (d, j) {
                                    if (columnText == 'Permissions' && tableId == 'user_type_table') {
                                        var arr = d.trim();
                                        arr = arr.split(',');
                                        for (var i in arr) {
                                            select.append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
                                        }
                                    } else {
                                        if (columnText == 'Explanation code' && tableId == 'errorReportDetailsTable') {
                                            var dd = $(d);
                                            dd.find('span').remove();
                                            d = dd.text();
                                        }
                                         if(d != '') {
                                         select.append('<option value="' + d + '">' + d + '</option>');
                                         }
                                    }

                                });
                            }

                        }
                    }
                    aa++;
                });


                $(".filterToggle" + tableId).click(function () {
                    $("#" + tableId + " thead tr:eq(1)").toggle();
                });
                //$(".filterToggle" + tableId).trigger("click");
                $(".selectRsltTbl" + tableId).select2({
                    placeholder: "Search",
                    selectOnClose: true,
                    allowClear: true,
                    dropdownAutoWidth: true,
//                    maximumInputLength: 20,
                    width: '98%'
                });
                $(".custActionBtns" + tableId).detach().appendTo(".actionButtonsDiv" + tableId);
                $(".actionButtonsDiv" + tableId).attr('style', 'padding-left:0px');
//                $(".actionButtonsDiv" + tableId).parent('div').css('padding-left','0px');
                //
                global_js.triggerFocusField();
            }
        });

        $(".DatatableAllRounderSearch" + tableId).keyup(function () {
            table.search($(this).val(), true).draw();
        });

        $(".btnClearSearchTxt" + tableId).click(function () {
            $(".DatatableAllRounderSearch" + tableId).val('');
            if (tableId == 'facilitiesTable') {
                $("#facilitiesResetButton").trigger('click');
            }
            table.search('', true).draw();
        });
        setTimeout(function () {
            $(".dataTables_length select").select2('destroy');
            $("#" + tableId).find('.select2-arrow').hide();
            $("#" + tableId + " thead tr:eq(1)").toggle();
        }, 200);
        $("#tabs").on("tabsactivate", function (event, ui) {
            if ($("#" + tableId + " thead tr:eq(1)").is(":visible")) {
                $("#" + tableId + " thead tr:eq(1)").toggle();
            }
        });

        $('div.dataTables_filter input').addClass('form-control');
        $('div.dataTables_filter input').attr('placeholder', 'Search');
        $(".DTsearchlabel").html('<i class="clip-search"></i>');
        $('.dataTables_filter').attr('style', 'width:100%');
        $('.dataTables_filter label').attr('style', 'width:100%');
        $('.dataTables_length select').attr('style', 'font-size: 12px;padding: 5px 3px;background: #fff;');
        $('div.dataTables_filter input').attr('style', 'float:right;width:100%');
        $(".dataTables_wrapper .dataTables_paginate .paginate_button").attr('style', 'background:#fff !important;color:#444444 !important; border-radius: 0;');

        table.on('responsive-display', function (e, datatable, row, showHide, update) {
            $('td ul').attr('style', 'width:100% !important');
            $('td ul').addClass('row');
            $('td ul li').addClass('col-sm-4');
            $(".dropdown-menu li").removeClass('col-sm-4');
        });


       }

    },

    customBgDataTable: function (tableId, filterFirst = false, ActionsBtns = [], select = true) {
        var buttons = [];
        for (var s in ActionsBtns) {
            switch (ActionsBtns[s]) {
                case 'print':
                    buttons.push({
                        "extend": 'print',
                        "text": '<i class="fa-print fa"></i> Print',
                        "className": 'btn btn-blue btn-squared'
                    });
                    break;
                case 'excel':
                    buttons.push({
                        "extend": 'excel',
                        "text": '<i class="clip-file-excel"></i> Excel',
                        "className": 'btn btn-info btn-squared'
                    });
                    break;
                case 'pdf':
                    buttons.push({
                        "extend": 'pdf',
                        "text": '<i class="clip-file-pdf"></i> PDF',
                        "className": 'btn btn-danger btn-squared',
                        extend: 'pdfHtml5',
                        orientation: 'landscape',
                        pageSize: 'LEGAL'
                    });
                    break;
                case 'share':
                    buttons.push({
                        "text": '<i class="clip-share"></i> Share',
                        "className": 'btn btn-primary btn-squared'
                    });
                    break;
            }
        }

        if (filterFirst == false) {
            var coldef = [{"targets": 0, "orderable": false}];
        } else {
            var coldef = {};
        }
        var table = $("#" + tableId).DataTable({
            "paging": true,
            "lengthMenu": [10, 25, 50, 100, 200, 250, 500],
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "order": [[0, "asc"]],
            "info": true,
            "select": select,
            "keys": true,
            "dom": 'Bfrtip',
            "buttons": buttons,
            "columnDefs": coldef,
            "oLanguage": {
                "sSearch": "",
                "sLengthMenu": "Per page _MENU_",
                "oPaginate": {
                    "sNext": "<i class='clip-chevron-right'></i>",
                    "sPrevious": "<i class='clip-chevron-left'></i>"
                },
                "sInfo": "_START_ to _END_ rows out of _TOTAL_,",
            },
            "sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv' + tableId + '"> <"col-sm-4 printBtnDiv" Bl > <"col-sm-12" <"sk-light-gray progressBarCont" <"sk-blue ProgressBarMain">><"row well customWell" <"col-sm-4 customSearchInput' + tableId + '" f> <"col-sm-1 customSearchField' + tableId + '">  <"col-sm-7 CustomPagination' + tableId + '"ip> > > >  >rt<"clear">>',

            initComplete: function () {

                $(".CustomPagination" + tableId).prepend('<div style="float:left"><button data-toggle="tooltip" title="Filters" type="button" class="btn btn-primary filterToggle' + tableId + '"><i class="fa fa-filter"></i></button></div>');

                $("#" + tableId).find(".entireClickable").click(function () {
                    if ($(this).find('input').prop('checked')) {
                        $(this).find('input').prop('checked', false);
                        $(this).removeClass('highlight');
                    } else {
                        $(this).find('input').prop('checked', true);
                        $(this).addClass('highlight');
                    }
                })

                var inputHtml = '<div class="input-group">' +
                        '<input type="text" placeholder="Contains..." data-focus="true" class="form-control DatatableAllRounderSearch' + tableId + '" />' +
                        '<span class="input-group-addon cursorPointer btnClearSearchTxt' + tableId + '"> ' +
                        '<i class="clip-cancel-circle-2 "></i>' +
                        '</span>' +
                        '<span class="input-group-addon cursorPointer"> ' +
                        '<i class="clip-search-2"></i>' +
                        '</span>' +
                        '</div>';

                $(".customSearchInput" + tableId).html(inputHtml);

                var searchoptions = $("#" + tableId + " thead tr:eq(0) th");
                var customfilterinputs = '<tr>';
                for (var j = 0; j < searchoptions.length; j++) {
                    customfilterinputs += '<th></th>';
                }
                customfilterinputs += '</tr>';
                $("#" + tableId + " thead").append(customfilterinputs);

                var aa = 0;
                this.api().columns().every(function () {
                    var column = this;
                    var columnText = $.trim($(column.header())[0].innerText);
                    if ($(column.header())[0].cellIndex != 0 || filterFirst == true) {
                        if (($.trim($(column.header())[0].innerText) == 'Description' && tableId == 'explCodeTable')) {
                            $('<input type="text" placeholder="Search" class="form-control btn-squared" />')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('keyup change', function () {
                                        if (column.search() !== this.value) {
                                            column
                                                    .search(this.value)
                                                    .draw();
                                        }
                                    });
                        } else {
                            var select = $('<select class="selectRsltTbl' + tableId + '"><option value=""></option></select>')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('change', function () {
                                        var val = $(this).val().trim();
                                        column
                                                .search(val)
                                                .draw();
                                    });

                            column.data().unique().sort().each(function (d, j) {
                                if (columnText == 'Permissions' && tableId == 'user_type_table') {
                                    var arr = d.trim();
                                    arr = arr.split(',');
                                    for (var i in arr) {
                                        select.append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
                                    }
                                } else {
                                    select.append('<option value="' + d + '">' + d + '</option>');
                                }

                            });
                        }

                    }
                    aa++;
                });


                $(".filterToggle" + tableId).click(function () {
                    $("#" + tableId + " thead tr:eq(1)").toggle();
                });
                $(".selectRsltTbl" + tableId).select2({
                    placeholder: "Search",
                    allowClear: true,
                    selectOnClose: true,
                    dropdownAutoWidth: true,
                    width: '98%'
                });
                $(".custActionBtns" + tableId).detach().appendTo(".actionButtonsDiv" + tableId);
                $(".actionButtonsDiv" + tableId).attr('style', 'padding-left:0px');
                global_js.triggerFocusField();
            }
        });

        $(".DatatableAllRounderSearch" + tableId).keyup(function () {
            table.search($(this).val(), true).draw();
        });

        $(".btnClearSearchTxt" + tableId).click(function () {
            $(".DatatableAllRounderSearch" + tableId).val('');
            table.search('', true).draw();
        });
        setTimeout(function () {
            $(".dataTables_length select").select2('destroy');
            $("#" + tableId).find('.select2-arrow').hide();
            $("#" + tableId + " thead tr:eq(1)").toggle();
        }, 200);
        $("#tabs").on("tabsactivate", function (event, ui) {
            if ($("#" + tableId + " thead tr:eq(1)").is(":visible")) {
                $("#" + tableId + " thead tr:eq(1)").toggle();
            }
        });

        $('div.dataTables_filter input').addClass('form-control');
        $('div.dataTables_filter input').attr('placeholder', 'Search');
        $(".DTsearchlabel").html('<i class="clip-search"></i>');
        $('.dataTables_filter').attr('style', 'width:100%');
        $('.dataTables_filter label').attr('style', 'width:100%');
        $('.dataTables_length select').attr('style', 'font-size: 12px;padding: 5px 3px;background: #fff;');
        $('div.dataTables_filter input').attr('style', 'float:right;width:100%');
        $(".dataTables_wrapper .dataTables_paginate .paginate_button").attr('style', 'background:#fff !important;color:#444444 !important; border-radius: 0;');

    },
    simpleDatatable: function (tableId) {

        if(tableId == 'patientHistoryTableShort'){
            $("#" + tableId).DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "order": [[4, "desc"]],
                "info": false,
            })
        }else{
            $("#" + tableId).DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "ordering": false,
                "info": false,
            })
        }        

    },

    configTimePicker: function () {
        $('.SkTimePicker').timePicker({
            'twelve_hour': true,
            'enable_buttons': false,
            'autohide': true,
            'positon': 'top'
        });
    },
    customSelect2: function (className = 'Select2') {
        $('.' + className).removeClass('form-control');
        $('.' + className).select2({
            placeholder: "-- select --",
            allowClear: true,
            selectOnClose: true,
            width: '100%'
        });
    },
    bootstrapDatepicker: function (ref) {
//        $(ref).bootstrapDP({
//            todayBtn: 'linked',
//            autoclose: true,
//            todayHighlight: true,
//            clearBtn: true,
//            format: global_js.getNewDateFormat(),
//            changeMonth: true
//        })
    },
    bootstrapDatepickerwithmultiselect: function (ref) {
        $(ref).bootstrapDP({
            todayBtn: 'linked',
            multidate: true,
            autoclose: false,
            todayHighlight: true,
            clearBtn: true,
            format: global_js.getNewDateFormat(),
            changeMonth: true
        })
    },
    dataTableWithLoader: function (tableId, filterFirst = false, ActionsBtns = [], select = true, colHeader = []) {
        var buttons = [];
        for (var s in ActionsBtns) {
            switch (ActionsBtns[s]) {
                case 'print':
                    buttons.push({
                        "extend": 'print',
                        "text": '<i class="fa-print fa"></i> Print',
                        "className": 'btn btn-blue btn-squared'
                    });
                    break;
                case 'excel':
                    buttons.push({
                        "extend": 'excel',
                        "text": '<i class="clip-file-excel"></i> Excel',
                        "className": 'btn btn-info btn-squared'
                    });
                    break;
                case 'pdf':

                    buttons.push({
                        extend: 'pdf',
                        text: '<i class="clip-file-pdf"></i> PDF',
                        className: 'btn btn-danger btn-squared pdfHtml5Btn',
                        extend: 'pdfHtml5',
//                        orientation: 'landscape',
                        filename: 'batchesSummary',
                        pageSize: 'LEGAL',
                        customize: function (doc) {
                            doc.content[1].table.widths = ['25%', '15%', '15%', '15%', '10%', '10%', '10%'];
                            doc.styles.tableBodyOdd.alignment = 'left';
                            doc.styles.tableBodyOdd.noWrap = true;
                            doc.styles.tableHeader.alignment = 'left';
                            doc.styles.tableHeader.fontSize = 10;
                            doc.defaultStyle.fontSize = 8;
                            doc.styles.title = {
                                fontSize: '20',
                                alignment: 'left',
                                margin: [425, -50, 0, 10],
                            };
                            doc.content.splice(1, 0, {
                                margin: [0, -50, 0, 12],
                                alignment: 'right',
                                width: 250,
                                image: 'data:image/png;base64,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'
                            });
                            doc['footer'] = (function (page, pages) {
                                return {
                                    columns: [
                                        {
                                            alignment: 'left',
                                            text: [
                                                {text: 'Printed on:' + moment().format(sk.getMomentDatetimeFormat())}
                                            ]
                                        },
                                        {
                                            alignment: 'right',
                                            text: [
                                                'Page ',
                                                {text: page.toString(), italics: true},
                                                ' of ',
                                                {text: pages.toString(), italics: true}
                                            ]
                                        }
                                    ],
                                    margin: [10, 0]
                                }
                            });
                        },
                        exportOptions: {
                            columns: [3, 2, 8, 7, 10, 11, 12],
                            format: {
                                header: function (data, row, column, node) {
                                    var rtn;
                                    switch (row) {
                                        case 3:
                                            rtn = 'Doctor';
                                            break;
                                        case 8:
                                            rtn = 'Date';
                                            break;
                                        case 7:
                                            rtn = "Batch ID";
                                            break;
                                        case 10:
                                            rtn = "# Claims";
                                            break;
                                        case 11:
                                            rtn = "# Records";
                                            break;
                                        default:
                                            rtn = data;
                                    }
                                    return rtn;
                                },
                                body: function (data, row, column, node) {

                                    if (column === 0) {
                                        var dr = data.split('-');
                                        return dr[2];
                                    } else {
                                        return data;
                                    }
                                }
                            }
                        }
                    });

                    buttons.push({
                        extend: 'pdf',
                        text: '<i class="clip-file-pdf"></i> PDF',
                        className: 'btn btn-danger btn-squared pdfHtml5BtnSingle',
                        extend: 'pdfHtml5',
                        filename: function () {
                            return 'batchesSummary' + batches.batchId;
                        },
                        pageSize: 'LEGAL',
                        customize: function (doc) {
                            doc.defaultStyle.fontSize = global_js.print_font_size;
                            doc.content[1].table.widths = ['25%', '15%', '15%', '15%', '10%', '10%', '10%'];
                            doc.styles.tableBodyOdd.alignment = 'left';
                            doc.styles.tableBodyOdd.noWrap = true;
                            doc.styles.tableHeader.alignment = 'left';
                            doc.styles.tableHeader.fontSize = 10;
                            doc.defaultStyle.fontSize = 8;
                            doc.styles.title = {
                                fontSize: '20',
                                alignment: 'left',
                                margin: [425, -50, 0, 10],
                            };
                            doc.content.splice(1, 0, {
                                margin: [0, -50, 0, 12],
                                alignment: 'right',
                                width: 250,
                                image: 'data:image/png;base64,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'
                            });
                            doc['footer'] = (function (page, pages) {
                                return {
                                    columns: [
                                        {
                                            alignment: 'left',
                                            text: [
                                                {text: 'Printed on:' + moment().format(sk.getMomentDatetimeFormat())}
                                            ]
                                        },
                                        {
                                            alignment: 'right',
                                            text: [
                                                'Page ',
                                                {text: page.toString(), italics: true},
                                                ' of ',
                                                {text: pages.toString(), italics: true}
                                            ]
                                        }
                                    ],
                                    margin: [10, 0]
                                }
                            });

                        },
                        exportOptions: {
                            modifier: {
                                selected: true
                            },
                            columns: [3, 2, 8, 7, 10, 11, 12],
                            format: {
                                header: function (data, row, column, node) {
                                    var rtn;
                                    switch (row) {
                                        case 3:
                                            rtn = 'Doctor';
                                            break;
                                        case 8:
                                            rtn = 'Date';
                                            break;
                                        case 7:
                                            rtn = "Batch ID";
                                            break;
                                        case 10:
                                            rtn = "# Claims";
                                            break;
                                        case 11:
                                            rtn = "# Records";
                                            break;
                                        default:
                                            rtn = data;
                                    }
                                    return rtn;
                                },
                                body: function (data, row, column, node) {
                                    if (column === 0) {
                                        var dr = data.split('-');
                                        return dr[2];
                                    } else {
                                        return data;
                                    }
                                    return column === 0 ?
                                            'Doctor' :
                                            data;
                                }
                            }
                        }
                    });
                    break;
                case 'share':
                    buttons.push({
                        "text": '<i class="clip-share"></i> Share',
                        "className": 'btn btn-primary btn-squared'
                    });
                    break;
            }
        }

        if (filterFirst == false) {
            var coldef = [{"targets": 0, "orderable": false}];
        } else {
            var coldef = {};
        }
        var table = $("#" + tableId).DataTable({
            "paging": true,
            "lengthMenu": [10, 25, 50, 100, 200, 250, 500],
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "order": [[0, "asc"]],
            "info": true,
            "autoWidth": false,
            "responsive": false,
            "select": select,
            "keys": true,
            "dom": 'Bfrtip',
            "buttons": buttons,
            "columnDefs": coldef,
            "columns": colHeader,
            "oLanguage": {
                "sSearch": "",
                "sLengthMenu": "Per page _MENU_",
                "oPaginate": {
                    "sNext": "<i class='clip-chevron-right'></i>",
                    "sPrevious": "<i class='clip-chevron-left'></i>"
                },
                "sInfo": "_START_ to _END_ rows out of _TOTAL_",
            },
            "sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv' + tableId + '"> <"col-sm-4 printBtnDiv" Bl > <"col-sm-12" <"sk-progress" <"sk-blue indeterminate skl' + tableId + '">><"row well customWell" <"col-sm-4 customSearchInput' + tableId + '" f> <"col-sm-1 customSearchField' + tableId + '">  <"col-sm-7 CustomPagination' + tableId + '"ip> > > >  >rt<"clear">>',
//            "sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv"> <"col-sm-4 printBtnDiv" l > <"col-sm-12" <"row well customWell" <"col-sm-4 customSearchInput" f> <"col-sm-8 CustomPagination"ip> > > >  >rt<"clear">>',
            initComplete: function () {

                //$("#patient_service_history_results_table_length").append('<button type="button" id="printVacationTable1"  class="btn btn-danger btn-squared"><i class="fa fa-print"></i> Print</button>');
                $(".CustomPagination" + tableId).prepend('<div style="float:left"><button data-toggle="tooltip" title="Filters" type="button" class="btn btn-primary filterToggle' + tableId + '"><i class="fa fa-filter"></i></button></div>');

                $("#" + tableId).find(".entireClickable").click(function () {
                    if ($(this).find('input').prop('checked')) {
                        $(this).find('input').prop('checked', false);
                        $(this).removeClass('highlight');
                    } else {
                        $(this).find('input').prop('checked', true);
                        $(this).addClass('highlight');
                    }
                })

                var inputHtml = '<div class="input-group">' +
                        '<input type="text" placeholder="Contains..." data-focus="true" class="form-control DatatableAllRounderSearch' + tableId + '" />' +
                        '<span class="input-group-addon cursorPointer btnClearSearchTxt' + tableId + '"> ' +
                        '<i class="clip-cancel-circle-2 "></i>' +
                        '</span>' +
                        '<span class="input-group-addon cursorPointer"> ' +
                        '<i class="clip-search-2"></i>' +
                        '</span>' +
                        '</div>';

                $(".customSearchInput" + tableId).html(inputHtml);

                global_js.triggerFocusField();

                var searchoptions = $("#" + tableId + " thead tr:eq(0) th");
                var customfilterinputs = '<tr>';
                for (var j = 0; j < searchoptions.length; j++) {
                    customfilterinputs += '<th></th>';
                }
                customfilterinputs += '</tr>';
                $("#" + tableId + " thead").append(customfilterinputs);
                var aa = 0;
                this.api().columns().every(function () {
                    var column = this;
                    var columnText = $.trim($(column.header())[0].innerText);

                    if ($(column.header())[0].cellIndex != 0 || filterFirst == true) {

                        if (($.trim($(column.header())[0].innerText) == 'Description' && tableId == 'explCodeTable')) {
                            $('<input type="text" placeholder="Search" class="form-control btn-squared" />')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('keyup change', function () {
                                        if (column.search() !== this.value) {
                                            column
                                                    .search(this.value)
                                                    .draw();
                                        }
                                    });
                        } else {
                            var select = $('<select class="selectRsltTbl' + tableId + '"><option value=""></option><option value="">All</option><option value="^$">No '+columnText+'</option></select>')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('change', function () {
                                        var val = //$.fn.dataTable.util.escapeRegex(
                                                $(this).val().trim();
                                        //);
                                        column
                                                .search(val,true, false)
                                                .draw();
                                    });

                            column.data().unique().sort().each(function (d, j) {
                                if (columnText == 'Permissions' && tableId == 'user_type_table') {
                                    var arr = d.trim();
                                    arr = arr.split(',');
                                    for (var i in arr) {
                                        select.append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
                                    }
                                } else {
                                    if(d != '') {
                                    select.append('<option value="' + d + '">' + d + '</option>');
                                    }
                                }

                            });
                        }

                    }
                    aa++;
                });


                $(".filterToggle" + tableId).click(function () {
                    $("#" + tableId + " thead tr:eq(1)").toggle();
                });
                //$(".filterToggle" + tableId).trigger("click");
                $(".selectRsltTbl" + tableId).select2({
                    placeholder: "Search",
                    allowClear: true,
                    selectOnClose: true,
                    dropdownAutoWidth: true,
//                    maximumInputLength: 20,
                    width: '98%'
                });
                $(".custActionBtns" + tableId).detach().appendTo(".actionButtonsDiv" + tableId);
                $(".actionButtonsDiv" + tableId).attr('style', 'padding-left:0px');
            }
        });

        $(".DatatableAllRounderSearch" + tableId).keyup(function () {
            table.search($(this).val(), true).draw();
        });

        $(".btnClearSearchTxt" + tableId).click(function () {
            $(".DatatableAllRounderSearch" + tableId).val('');
            table.search('', true).draw();
        });
        setTimeout(function () {
            $(".dataTables_length select").select2('destroy');
            $("#" + tableId).find('.select2-arrow').hide();
            $("#" + tableId + " thead tr:eq(1)").toggle();
        }, 200);
        $("#tabs").on("tabsactivate", function (event, ui) {
            if ($("#" + tableId + " thead tr:eq(1)").is(":visible")) {
                $("#" + tableId + " thead tr:eq(1)").toggle();
            }
        });

        $('div.dataTables_filter input').addClass('form-control');
        $('div.dataTables_filter input').attr('placeholder', 'Search');
        $(".DTsearchlabel").html('<i class="clip-search"></i>');
        $('.dataTables_filter').attr('style', 'width:100%');
        $('.dataTables_filter label').attr('style', 'width:100%');
        $('.dataTables_length select').attr('style', 'font-size: 12px;padding: 5px 3px;background: #fff;');
        $('div.dataTables_filter input').attr('style', 'float:right;width:100%');
        $(".dataTables_wrapper .dataTables_paginate .paginate_button").attr('style', 'background:#fff !important;color:#444444 !important; border-radius: 0;');

        table.on('responsive-display', function (e, datatable, row, showHide, update) {
            $('td ul').attr('style', 'width:100% !important');
            $('td ul').addClass('row');
            $('td ul li').addClass('col-sm-4');
            $(".dropdown-menu li").removeClass('col-sm-4');
        });

        return table;
    },
    dtLoader: function (tblid, status = 'stop') {
        if (status == 'start') {
            $(".skl" + tblid).addClass('indeterminate').removeClass('sk-progressfull');
        } else if (status == 'stop') {
            $(".skl" + tblid).addClass('sk-progressfull').removeClass('indeterminate');
    }
    },
    initCheckbox: function (tblId) {
        var allChk = $("#" + tblId + ' thead input[type="checkbox"]');
        global_js.toggleAllChk(tblId);
        // on change events
        $("#" + tblId + ' tbody input[type="checkbox"]').on('change', function () {
            global_js.toggleAllChk(tblId);
        });

        allChk.on('change', function () {
            if ($(this).is(':checked')) {
                $("#" + tblId + ' tbody input[type="checkbox"]').prop('checked', true);
            } else {
                $("#" + tblId + ' tbody input[type="checkbox"]').prop('checked', false);
            }
        });

    },
    toggleAllChk: function (tblId) {
        var allChk = $("#" + tblId + ' thead input[type="checkbox"]');
        if ($("#" + tblId + ' tbody input[type="checkbox"]:checked').length == $("#" + tblId + ' tbody input[type="checkbox"]').length) {
            allChk.prop('checked', true);
        } else {
            allChk.prop('checked', false);
        }
    },
    triggerFocusField: function () {
        $('input[data-focus="true"]').focus();
    },
    datatableDinit: function (id) {
        // datatable destroy function
        $("#" + id).dataTable().fnDestroy();

        // update search reset filter in datatable
        $("#" + id + " thead tr:eq(1)").remove();
    },
    datatableFilterInit: function (tableId) {
        var apiDt = $("#" + tableId).dataTable().api();
        var aa = 0;
        apiDt.columns().every(function () {
            var column = this;
            $("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")").html('');

            if (($.trim($(column.header())[0].innerText) == 'Date & Time') || ($.trim($(column.header())[0].innerText) == 'Due Date') || ($.trim($(column.header())[0].innerText) == 'Date created')) {
                var date = $('<select data-width="60" class="selectRsltTbl' + tableId + ' dateSelectDT"><option value=""></option></select>')
                        .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                        .on('change', function () {
                            global_js._dtFilterSelectOnChange($(this), column, 'date');
                        });

                var time = $('<select data-width="40" class="selectRsltTbl' + tableId + ' timeSelectDT"><option value=""></option></select>')
                        .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                        .on('change', function () {
                            global_js._dtFilterSelectOnChange($(this), column, 'time');
                        });

                if (column.search() != '') {
                    var search = column.search();
                    var srch = search.trim();
                    srch = srch.split(' ');
                }

                var uniqueDate = [], uniqueTime = [];
                column.data().unique().sort().each(function (d, j) {
                    var arr = d.trim();
                    arr = arr.split(' ');
                    if (typeof srch != 'undefined') {
                        if (arr[0] == srch[0]) {
                            date.append('<option selected value="' + arr[0] + '">' + arr[0] + '</option>');
                        } else {
                            date.append('<option value="' + arr[0] + '">' + arr[0] + '</option>');
                        }
                        if (arr[1] == srch[1]) {
                            time.append('<option selected value="' + arr[1] + '">' + arr[1] + '</option>');
                        } else {
                            time.append('<option value="' + arr[1] + '">' + arr[1] + '</option>');
                        }
                    } else {

                        if ($.inArray(arr[0], uniqueDate) == -1)
                            date.append('<option value="' + arr[0] + '">' + arr[0] + '</option>');
                        if ($.inArray(arr[1], uniqueTime) == -1)
                            time.append('<option value="' + arr[1] + '">' + arr[1] + '</option>');
                        uniqueDate.push(arr[0]);
                        uniqueTime.push(arr[1]);
                    }
                });

            } else if (($.trim($(column.header())[0].innerText) != 'Next Status') || ($.trim($(column.header())[0].innerText) != 'Actions')) {
                var select = $('<select class="selectRsltTbl"><option value=""></option></select>')
                        .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")")/*$("#" + pastClaims.resultsTable + " thead tr:nth-child(2)")*/ /*$(column.header())[1].column*/)
                        .on('change', function () {
                            var val = $.fn.dataTable.util.escapeRegex(
                                    $(this).val()
                                    );

                            column
                                    .search(val ? '^' + val + '$' : '', true, false)
                                    .draw();
                        });

                column.data().unique().sort().each(function (d, j) {
                    if (column.search() != '') {
                        var search = column.search().slice(1, -1).replace(/\\/g, "");
                        if (search == d) {
                            select.append('<option selected value="' + d + '">' + d + '</option>');
                        } else {
                            select.append('<option value="' + d + '">' + d + '</option>');
                        }
                    } else {
                        select.append('<option value="' + d + '">' + d + '</option>');
                    }

                });
            }
            aa++;
        });

        $("#" + tableId + " select").each(function () {

            var width = $(this).attr('data-width') ? $(this).attr('data-width') : '98';
            $(this).select2({
                placeholder: "Search",
                allowClear: true,
                selectOnClose: true,
                dropdownAutoWidth: true,
                width: width + '%'
            });
        })

        $('#' + tableId + ' .select2-arrow').hide();

        global_js.datatableDateTimeSort(tableId);
        global_js.dtLoader(tableId, 'stop');
    },
    _dtFilterSelectOnChange: function ($this, column, type) {
        var date = '', time = '', value = '';
        date = $('.dateSelectDT').select2('data');
        time = $('.timeSelectDT').select2('data');
        if (!date === false)
            date = date.text;
        if (!time === false)
            time = time.text;
        if (date === null)
            date = '';
        if (time === null)
            time = '';
        value = date + ' ' + time;
        column.search(value).draw();
    },
    datatableDateTimeSort: function (tableId) {
        var newFormat = quickClaim.dateFormat;
        switch (quickClaim.dateFormat) {
            case 'd/m/Y':
                newFormat = 'DD/MM/YYYY';
                break;
            case 'dd/mm/yy':
                newFormat = 'DD/MM/YY';
                break;
            case 'm/d/Y':
                newFormat = 'MM/DD/YYYY';
                break;
            case 'Y-m-d':
                newFormat = 'YYYY-MM-DD';
                break;
        }
        var newTime = quickClaim.timeFormat;
        newTime = newTime.replace('a', 'A');
        newTime = newTime.replace('ii', 'mm');
        var newDTformat = newFormat + ' ' + newTime;
        global_js.DTCustomSortFunction(newDTformat);

    },
    DTCustomSortFunction: function (newDTformat = global_js.getNewMomentFormatDateTime()) {

        $.fn.dataTableExt.oSort["rank-desc"] = function (x, y) {
            var a = moment(x, newDTformat);
            var b = moment(y, newDTformat);
            return (a.diff(b));
        };

        $.fn.dataTableExt.oSort["rank-asc"] = function (x, y) {
            var a = moment(x, newDTformat);
            var b = moment(y, newDTformat);
            return (b.diff(a));
        }

        $.fn.dataTableExt.oSort["dateTimeField-desc"] = function (x, y) {
            var a = moment(x, newDTformat);
            var b = moment(y, newDTformat);
            return (a.diff(b));
        };

        $.fn.dataTableExt.oSort["dateTimeField-asc"] = function (x, y) {
            var a = moment(x, newDTformat);
            var b = moment(y, newDTformat);
            return (b.diff(a));
        }

        var dateFormat = newDTformat.split('_');
        $.fn.dataTableExt.oSort["dateField-desc"] = function (x, y) {
            var a = moment(x, dateFormat[0]);
            var b = moment(y, dateFormat[0]);
            return (a.diff(b));
        };

        $.fn.dataTableExt.oSort["dateField-asc"] = function (x, y) {
            var a = moment(x, dateFormat[0]);
            var b = moment(y, dateFormat[0]);
            return (b.diff(a));
        }

        var newTime = quickClaim.timeFormat;
        newTime = newTime.replace('a', 'A');
        newTime = newTime.replace('ii', 'mm');
        $.fn.dataTableExt.oSort["timeField-desc"] = function (x, y) {
            var a = moment(x, newTime);
            var b = moment(y, newTime);
            return (a.diff(b));
        };

        $.fn.dataTableExt.oSort["timeField-asc"] = function (x, y) {
            var a = moment(x, newTime);
            var b = moment(y, newTime);
            return (b.diff(a));
    }

    },
    mainMenu: function (status = 'max') {
        switch (status) {
            case 'max':
                rightSingle();
                break;
            case 'min':
                leftSingle();
                break;
            case 'maxall':
                rightAll();
                break;
            case 'minall':
                leftAll();
                break;
        }
        function leftAll() {
            $('body').addClass('navigation-small1');
            $('body').addClass('navigation-small');
        }
        function rightAll() {
            $('body').removeClass('navigation-small1');
            $('body').removeClass('navigation-small');
        }

        function leftSingle() {
            $('body').addClass('navigation-small');
        }
        function rightSingle() {
            $('body').removeClass('navigation-small');
    }
    },
    docSearchDatatable: function (tableId, filterFirst = false, showPrint = false, showPdf = false, showExcel = false, className) {

        

        if (filterFirst == false) {
            var coldef = [{"targets": 0, "orderable": false}];
        } else {
            var coldef = {};
        }
        
        var table = $("#" + tableId).DataTable({
            "paging": true,
            "lengthMenu": [10, 25, 50, 100, 200, 250, 500],
            "lengthChange": true,
            "pageLength": sk.skdt_page_size,
            "searching": true,
            "ordering": true,
            "order": [[0, "asc"]],
            "info": true,
            "autoWidth": false,
            "responsive": false,
            "dom": 'Bfrtip',
            "buttons":[],
            "columnDefs": coldef,
            "oLanguage": {
                "sSearch": "",
                "sLengthMenu": "Per page _MENU_",
                "oPaginate": {
                    "sNext": "<i class='clip-chevron-right'></i>",
                    "sPrevious": "<i class='clip-chevron-left'></i>"
                },
                "sInfo": "_START_ to _END_ rows out of _TOTAL_",
            },
            "sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv' + tableId + '"> <"col-sm-4 printBtnDiv" Bl > <"col-sm-12" <"row well customWell" <"col-sm-4 customSearchInput' + tableId + '" f> <"col-sm-1 customSearchField' + tableId + '">  <"col-sm-7 CustomPagination' + tableId + '"ip> > > >  >rt<"clear">>',
            drawCallback:function(settings){
                var found = 0;
                if($('select.'+tableId+'_search').length != 0){
                    $('select.'+tableId+'_search').each(function(){
                            if($(this).val().trim() != ''){
                                found = 1;
                                return false;    
                            }
                    });
                }
                if($('.DatatableAllRounderSearch'+tableId).length != 0){
                    if($('.DatatableAllRounderSearch'+tableId).val().trim() != ''){
                        found = 1;
                    }
                }

                if(found == 0){
                    $('#'+tableId+'_info').hide();
                    $('#'+tableId+'_paginate').hide();
                    $('#'+tableId+' tbody tr').hide();
                }
                else{
                    $('#'+tableId+'_info').show();
                    $('#'+tableId+'_paginate').show();
                    $('#'+tableId+' tbody tr').show();
                }

                $('#'+tableId+' tbody tr').removeClass('sel_tr_doctor');
                $('#'+tableId+' tbody tr').each(function(){
                    if($(this).attr('data-doctor-id') == window[tableId+'_sel_doc_id'] && $(this).attr('data-location-id') == window[tableId+'_sel_loc_id']){
                        $(this).addClass('sel_tr_doctor');
                        return false;
                    }
                })
                

              
            },
            initComplete: function () {
          

                var inputHtml = '<div class="input-group">' +
                        '<input type="text" placeholder="Contains..." data-focus="true" class="form-control DatatableAllRounderSearch' + tableId + '" />' +
                        '<span class="input-group-addon cursorPointer btnClearSearchTxt' + tableId + '"> ' +
                        '<i class="clip-cancel-circle-2 "></i>' +
                        '</span>' +
                        '<span class="input-group-addon cursorPointer"> ' +
                        '<i class="clip-search-2"></i>' +
                        '</span>' +
                        '</div>';

                $(".customSearchInput" + tableId).html(inputHtml);

                var searchoptions = $("#" + tableId + " thead tr:eq(0) th");
                var customfilterinputs = '<tr>';
                for (var j = 0; j < searchoptions.length; j++) {
                   var style= $("#DoctorProfileTable thead tr:eq(0) th:eq("+j+")").attr('style')
                    customfilterinputs += '<th style="'+style+';padding: 5px 0  !important;"></th>';
                }
                customfilterinputs += '</tr>';
                $("#" + tableId + " thead").append(customfilterinputs);
      

                var aa = 0;
                this.api().columns().every(function () {
                    var column = this;
                    var columnText = $.trim($(column.header())[0].innerText);
                   
                        if (($.trim($(column.header())[0].innerText) == 'Description' && tableId == 'explCodeTable')) {
                            $('<input type="text" placeholder="Search" class="form-control btn-squared '+tableId+'_search" />')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('keyup change', function () {
                                        if (column.search() !== this.value) {
                                            column
                                                    .search(this.value)
                                                    .draw();
                                        }
                                    });
                        } 
                        else if (columnText == 'Current Doctor Schedule') {
                            $('<input type="text" placeholder="Enter keyword for search." class="form-control btn-squared '+tableId+'_search" />')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('keyup change', function () {
                                        if (column.search() !== this.value) {
                                            column
                                                    .search(this.value)
                                                    .draw();
                                        }
                                    });
                        } 
                        else {
                            var select = $('<select style="width:100% !important;" class="selectRsltTbl' + tableId + ' '+tableId+'_search"><option value=""></option><option value="">All</option><option value="^$">No '+columnText+'</option></select>')
                                    .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                    .on('change', function () {
                                        var val = //$.fn.dataTable.util.escapeRegex(
                                                $(this).val().trim();
                                        //);
                                        column.search(val, true, false).draw();
                                    });

                            column.data().unique().sort().each(function (d, j) {
                                if (columnText == 'Permissions' && tableId == 'user_type_table') {
                                    var arr = d.trim();
                                    arr = arr.split(',');
                                    for (var i in arr) {
                                        select.append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
                                    }
                                } else {
                                    if (columnText == 'Locations' && tableId == 'GeneralSchduleTable') {
                                           var locationdoctor = $('.doctor_location').text();
                                           var ss = locationdoctor.split(',');
                                           for(i in ss)  {   
                                                if($.inArray(ss[i], global_js.duplicatedscArr) != -1) {
                                                     global_js.duplicatedscArr.push(ss[i]);
                                                } else {
                                                    if(ss[i] != '') {
                                                        select.append('<option value="' + ss[i] + '">' + ss[i] + '</option>');
                                                        global_js.duplicatedscArr.push(ss[i]);
                                                    }
                                                }
                                           } 

                                    } else {
                                        if(d != '') {
                                        select.append('<option value="' + d + '">' + d + '</option>');
                                        }
                                    }
                                }

                            });
                        }

                  
                    aa++;
                });


                $(".filterToggle" + tableId).click(function () {
                    $("#" + tableId + " thead tr:eq(1)").toggle();
                });
                 setTimeout(function(){
                     $("#" + tableId + " thead tr:eq(1)").show();
                 })
                
                //$(".filterToggle" + tableId).trigger("click");
                $(".selectRsltTbl" + tableId).select2({
                    placeholder: "Search",
                    selectOnClose: true,
                    allowClear: true,
                    dropdownAutoWidth: true,
                    //maximumInputLength: 20,
                    width: '94%'
                });
                $(".custActionBtns" + tableId).detach().appendTo(".actionButtonsDiv" + tableId);
                $(".actionButtonsDiv" + tableId).attr('style', 'padding-left:0px');
                
                global_js.triggerFocusField();
                setTimeout(function(){
                    $("#" + tableId + " thead tr:eq(1)").show();
                 },500)
                setTimeout(function(){
                    $("#" + tableId + " thead tr:eq(1)").show();
                 },1000)
            }
        });
     
        // save page length 
        $(".DatatableAllRounderSearch" + tableId).on('length.dt', function () {
            var info = $(".DatatableAllRounderSearch" + tableId).DataTable().page.info();
            sk.setClientParam('dt_page_size', info.length);
        });

        $(".DatatableAllRounderSearch" + tableId).keyup(function () {
            table.search($(this).val(), true).draw();
        });

        $(".btnClearSearchTxt" + tableId).click(function () {
            $(".DatatableAllRounderSearch" + tableId).val('');
            table.search('', true).draw();
        });
        setTimeout(function () {
            $(".dataTables_length select").select2('destroy');
            $("#" + tableId).find('.select2-arrow').hide();
            $("#" + tableId + " thead tr:eq(1)").toggle();
        }, 200);
       
        $('div.dataTables_filter input').addClass('form-control');
        $('div.dataTables_filter input').attr('placeholder', 'Search');
        $(".DTsearchlabel").html('<i class="clip-search"></i>');
        $('.dataTables_filter').attr('style', 'width:100%');
        $('.dataTables_filter label').attr('style', 'width:100%');
        $('.dataTables_length select').attr('style', 'font-size: 12px;padding: 5px 3px;background: #fff;');
        $('div.dataTables_filter input').attr('style', 'float:right;width:100%');
        $(".dataTables_wrapper .dataTables_paginate .paginate_button").attr('style', 'background:#fff !important;color:#444444 !important; border-radius: 0;');
        
        return table;

    }, error_filed_highlighter: function () {
        $(".error_list").closest('input').attr('style', 'border-color:red');
    },
}

global_js.Init();
