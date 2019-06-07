;(function($){function viewportToPixel(val){var percent=val.match(/\d+/)[0]/100,unit=val.match(/[vwh]+/)[0];return(unit=='vh'?$(window).height()*percent:$(window).width()*percent)+'px';}
function parseProps(props){var p,prop;for(p in props){prop=props[p];if(/[vwh]$/.test(prop)){props[p]=viewportToPixel(prop);}}
return props;}
$.fn.v2p=function(props){return this.css(parseProps(props));};}(jQuery));$(window).resize(function(){$('.cbp-spmenu').v2p({height:'100vh'});});$(window).resize();