!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.initCheckboxGroup=e()}}(function(){return function e(n,o,t){function r(f,u){if(!o[f]){if(!n[f]){var d="function"==typeof require&&require;if(!u&&d)return d(f,!0);if(i)return i(f,!0);var c=new Error("Cannot find module '"+f+"'");throw c.code="MODULE_NOT_FOUND",c}var l=o[f]={exports:{}};n[f][0].call(l.exports,function(e){var o=n[f][1][e];return r(o?o:e)},l,l.exports,e,n,o,t)}return o[f].exports}for(var i="function"==typeof require&&require,f=0;f<t.length;f++)r(t[f]);return r}({1:[function(e,n,o){(function(e){function o(e,n){var o,i=r(e),f=r(n),u=f.$getAttribute("target-checkbox").getReturn();o=u?"input[name="+u+"]":"input[name]",f.$addEventListener("click",function(e){var n=this.checked;console.log(n),i.$querySelector(o).forEach(function(e){e.checked=n})}),i.$on("click",o,function(){var e=t(i,o);1===e?n.checked=!0:n.checked=!1})}function t(e,n){var o=e.$querySelector(n).length,t=e.$querySelector(n+":checked").length;return 0===t?0:t===o?1:-1}var r="undefined"!=typeof window?window.Noodle:"undefined"!=typeof e?e.Noodle:null;n.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});
//# sourceMappingURL=bundle.js.map
