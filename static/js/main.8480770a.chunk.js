(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(e,t,n){e.exports=n(43)},18:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),l=n.n(c),o=(n(18),n(1)),i=n.n(o),u=n(12),s=n(2),m=n(3);n(42);var p=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)("Click Start to transcode"),o=Object(s.a)(l,2),p=o[0],d=o[1],f=Object(a.useState)([]),b=Object(s.a)(f,2),g=b[0],h=b[1],E=Object(a.useState)([]),j=Object(s.a)(E,2),v=j[0],O=j[1],w=Object(m.createFFmpeg)({log:!0}),y=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==g.length&&0!==v.length){e.next=3;break}return d("Please select at least one audio and one image file."),e.abrupt("return");case 3:return d("Loading ffmpeg-core.js"),e.next=6,w.load();case 6:return d("Start rendering video"),t=g[0],n=v[0],e.t0=w,e.next=12,Object(m.fetchFile)(URL.createObjectURL(t));case 12:return e.t1=e.sent,e.t0.FS.call(e.t0,"writeFile","audio.mp3",e.t1),e.t2=w,e.next=17,Object(m.fetchFile)(URL.createObjectURL(n));case 17:return e.t3=e.sent,e.t2.FS.call(e.t2,"writeFile","image.jpg",e.t3),a=["-loop","1","-framerate","2","-i","image.jpg","-i","audio.mp3","-c:v","libx264","-preset","slow","-tune","stillimage","-crf","18","-c:a","aac","-b:a","192k","-shortest","output.mp4"],console.log("Running ffmpeg command:",a.join(" ")),e.next=23,w.run.apply(w,a);case 23:d("Complete rendering video"),r=w.FS("readFile","output.mp4"),c(URL.createObjectURL(new Blob([r.buffer],{type:"video/mp4"})));case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("input",{type:"file",multiple:!0,onChange:function(e){var t=Array.from(e.target.files),n=t.filter((function(e){return e.type.startsWith("audio/")})),a=t.filter((function(e){return e.type.startsWith("image/")}));h(n),O(a)}}),r.a.createElement("div",null,r.a.createElement("h3",null,"Audio Files"),r.a.createElement("table",null,r.a.createElement("tbody",null,g.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name))}))))),r.a.createElement("div",null,r.a.createElement("h3",null,"Image Files"),r.a.createElement("table",null,r.a.createElement("tbody",null,v.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name))}))))),r.a.createElement("video",{src:n,controls:!0}),r.a.createElement("br",null),r.a.createElement("button",{onClick:y},"Render Video"),r.a.createElement("p",null,p))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8480770a.chunk.js.map