!function n(e,a,r){function t(i,s){if(!a[i]){if(!e[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(o)return o(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=a[i]={exports:{}};e[i][0].call(c.exports,(function(n){var a=e[i][1][n];return t(a||n)}),c,c.exports,n,e,a,r)}return a[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)t(r[i]);return t}({1:[function(n,e,a){function r(n,e,a){var r=$(e);$("#close-modal");r.bind("click",(function(e){var t=$("body");t.addClass(`${a}`);var o=$(n).clone(),i=$('<div id="nav-overlay" tabindex="-1" aria-label="Overlay"><a href="#" id="close-modal" class="mobile-nav-trigger mobile" aria-expanded="false"><span class="visually-hidden>Close</span>"</a></div>');t.prepend(i.append(o)),setTimeout((function(){t.addClass("overlay-open")})),"false"==r.attr("aria-expanded")?r.attr("aria-expanded",!0):r.attr("aria-expanded",!1),$("#nav-overlay").focus(),$("#close-modal").on("click",(function(n){t.removeClass("overlay-open"),setTimeout((function(){var n=document.querySelector("#nav-overlay");n.parentNode.removeChild(n),t.removeClass(`${a}`)}),500)}))}))}function t(n){var e=$(n),a=e.find(".copy"),r=e.find(".images"),t=a.children().length;t==r.children().length?t>1&&(r.slick({dots:!0,prevArrow:!1,nextArrow:!1,asNavFor:".content-slider .copy"}),a.on("init",(function(n){$(n.target).prepend($(n.target).children("ul.paging"))})),a.slick({asNavFor:r,dots:!0,dotsClass:"paging",customPaging:function(n,e){return"<p>"+(e+1)+" <span>of</span> "+n.slideCount+"</p>"}})):new Error("Copy & Content need to share the same number of items")}!function(){new r("#main-nav","#main-nav-trigger","main-nav-transition");if($("#subcat-nav"))new r("#subcat-nav",".subcat-nav-trigger","subcat-nav-transition");$(".content-slider").each((function(n,e){new t(e)}))}()},{}]},{},[1]);