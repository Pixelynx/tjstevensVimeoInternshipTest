(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(51),s=a.n(o),i=(a(66),a(67),a(14)),c=a(15),l=a(19),m=a(16),d=a(20),u=a(126),p=a(127),b=a(129),g=a(25),f=a.n(g),y=a(52),h=a(53),v=a.n(h),E=a(54),k=a(21),w=a(128),j=(a(122),a(55)),x=a.n(j),N=new E.Vimeo("3fbb58c54de613941453b8fbcca97d85a2665b35","LRNvYuIp1letA+TGu9/uiJ9U8FAjVtf0dfGPeLcBrtEEXAqqz1GwYtY6paHKwK5I8xOdl4RhNkNQZJdq9Y+S1DfcAgK7G0NVZ2X7tAqQJ4d8Tz2SXB2Mye6NDMGnmU8J","b3805de5e91ae298edd4a695e0b62a7b"),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={carouselContent:[]},a.componentDidMount=Object(y.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.request({method:"GET",path:"/tags/cats/videos"},(function(e,t,n,r){e&&console.log(e);var o=t.data.map((function(e){return e}));a.setState({carouselContent:o})})),console.log(a.state);case 2:case"end":return e.stop()}}),e)}))),a.retriveMovies=function(){v.a.get("https://api.vimeo.com/ondemand/genres/13").then((function(e){console.log(e.data)}))},a.displayCarouselContent=function(){return a.state.carouselContent.map((function(e){var t={backgroundImage:"url(".concat(e.bgFilter,")"),backgroundRepeat:"noRepeat",backgroundSize:"cover"},a={backgroundColor:"rgba(".concat(e.filterColor,", 0.8)"),border:"none",fontWeight:"bold"};return r.a.createElement(k.a.Item,{key:e.id,style:t},r.a.createElement(u.a,{style:{backgroundColor:"rgba(".concat(e.filterColor,", 0.5)")},className:"indv-carousel-item d-flex justify-content-md-start justify-content-center"},r.a.createElement(p.a,{className:"d-none d-md-block",xs:{order:1,span:1},sm:{order:1,span:1},lg:{order:1,span:1},xl:{order:1,span:1}}),r.a.createElement(p.a,{className:"carsl-img d-flex justify-content-md-end justify-content-start",xs:{order:2,span:4},sm:{order:2,span:4},md:{order:2,span:3},lg:{order:2,span:3},xl:{order:2,span:3}},r.a.createElement("img",{className:"posterImg",src:e.img,alt:"".concat(e.title," poster")})),r.a.createElement(p.a,{className:"carsl-desc",xs:{order:3,span:10},sm:{order:2,span:10},md:{order:3,span:6},lg:{order:3,span:6},xl:{order:3,span:6}},r.a.createElement(k.a.Caption,{className:"carsl-cap d-flex justify-items-start"},r.a.createElement("h3",{className:"d-none d-md-block"},e.title),r.a.createElement("p",{style:{color:"rgba(237, 237, 237, 0.6)"},className:"d-none d-md-block"},e.description),r.a.createElement("div",{className:"bw-btns d-flex justify-content-md-start justify-content-center"},r.a.createElement(w.a,{style:a,className:"buy-btn"},r.a.createElement("img",{id:"buy-btn-icon",src:x.a,alt:" "}),"Buy Now"),r.a.createElement(w.a,{style:{backgroundColor:"transparent",border:"1px solid",borderColor:"rgba(255, 255, 255, 0.6)",fontWeight:"bold"},className:"watch-btn"},"Watch Trailer"))))))}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,null)}}]),t}(n.Component),O=(a(123),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={movies:[{id:1,img:"https://i.vimeocdn.com/video/595198868_505x160.jpg",title:"MONSOON III",description:"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm..."},{id:2,img:"https://i.vimeocdn.com/video/589972810_530x315.jpg",title:"BEAMS",description:"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm..."},{id:3,img:"https://i.vimeocdn.com/video/590587169_530x315.jpg",title:"Move 2",description:"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm..."}]},a.detectResize=function(e){window.addEventListener("resize",(function(){console.log(window.innerWidth)}))},a.displayMovies=function(){return a.state.movies.map((function(e){return e.id%2?r.a.createElement(u.a,{key:e.id,id:1===e.id||2===e.id?"starting":null,className:1===e.id?"top-item movie-block justify-content-center justify-content-xl-start":"movie-block nxt-movies justify-content-center justify-content-xl-start"},r.a.createElement(p.a,{className:"movie-text-block",xs:11,md:11,lg:{order:1,span:10},xl:{order:2,span:5}},r.a.createElement("b",{id:"movie-title"},e.title),r.a.createElement("p",null,e.description)),r.a.createElement(p.a,{className:" movie-img-block  align-items-center  justify-content-xl-end justify-content-center",xs:12,md:12,lg:{order:2,span:11},xl:{order:1,span:6}},r.a.createElement("img",{id:"movie-img",src:e.img,alt:"".concat(e.title)}))):r.a.createElement(u.a,{key:e.id,id:1===e.id||2===e.id?"starting":null,className:2===e.id?"second-item nxt-movies movie-block justify-content-center":"movie-block nxt-movies justify-content-center"},r.a.createElement(p.a,{className:"movie-text-block",xs:11,md:11,lg:{order:1,span:10},xl:{order:1,span:5}},r.a.createElement("b",{id:"movie-title"},e.title),r.a.createElement("p",null,e.description)),r.a.createElement(p.a,{className:"movie-img-block align-items-center justify-content-xl-start justify-content-center",xs:12,md:12,lg:{order:2,span:11},xl:{order:2,span:5}},r.a.createElement("img",{id:"movie-img",src:e.img,alt:"".concat(e.title)})))}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:"layout-container"},this.displayMovies()),r.a.createElement(z,null))}}]),t}(n.Component)),S=(a(124),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,a){e.exports=a.p+"static/media/vimeo_buy_icon.41cda66b.png"},61:function(e,t,a){e.exports=a(125)},67:function(e,t,a){},94:function(e,t){},96:function(e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.169b3d97.chunk.js.map