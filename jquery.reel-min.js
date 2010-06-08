/*
 Copyright (c) 2009-2010 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 http://jquery.vostrel.cz/reel
 Version: "Dancer" (will be 1.1 on release)
 Updated: 2010-06-08

 Requires jQuery 1.4.x
*/
(function(i){function ba(m){return"<"+m+"/>"}function x(m){return"."+m}function ca(m){return"url("+m+")"}function O(m,a){return+a.toFixed(m)}function da(m,a,F){return B(m,ea(a,F))}function za(m,a){return m*a>0?a:-a}function Aa(m){function a(){i.fn[this]||(i.fn[this]=function(){return this})}i.each(m,a)}var Ba={footage:6,frame:1,frames:36,hint:"",horizontal:true,hotspot:undefined,indicator:0,klass:"",loops:true,reversed:false,saves:false,sensitivity:20,spacing:0,stitched:undefined,suffix:"-reel",tooltip:"",
delay:-1,friction:0.9,image:undefined,images:[],inertial:true,loading:"Loading...",monitor:undefined,path:"",preloader:true,rebound:0.5,revolution:undefined,speed:0,step:undefined,steps:undefined,tempo:25,timeout:2};i.fn.reel=function(m){var a=i.extend({},Ba,m);m=function(c){var e=[];c.each(function(){var g=i(this),u=a.images.length&&a.images||a.image||g.attr(fa),w=G(g.css(ga)),z=G(g.css(ha));!u||u==H||!w||!z||e.push(g)});c.filter(ia+x(P)).each(function(){e.push(i(this))});return i(e)}(this);var F=
[];I=I||function(){return setInterval(function(){C.trigger(Q)},1E3/a.tempo)}();m.each(function(){var c=i(this),e=function(d,b){c.data(d,b);c.trigger("store");return b},g=function(d){c.trigger("recall");return c.data(d)},u={setup:function(){if(!c.hasClass(P)){var d=c.attr(fa),b=c.attr(R),f=c.attr(ja),h=c.attr("style"),k=a.images,o={x:G(c.css(ga)),y:G(c.css(ha))},l=i(J).attr(ja,f).addClass(P).addClass(a.klass),t=ka||!a.saves?{display:"none"}:{opacity:0};F.push((c=c.attr(R,H).wrap(l).css(t).parent().attr(R,
b).bind(u).css({display:"block",width:o.x+q,height:o.y+q}))[0]);e(S,k.length&&k.length||a.image||d.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2"));e(A,a.frame);e(D,k.length||a.frames);e(la,a.spacing);e(K,o);e(p,0);e(L,a.steps||a.frames);e("resolution",B(a.steps,a.frames));e(ma,a.speed<0);e(na,{id:b,"class":f||H,style:h||H});I&&C.bind(Q,u.tick);c.trigger("start")}},teardown:function(){c=c.unbind(u).find([x(T),x(U),x(oa),V+x(pa)].join(", ")).remove().end().find(V).attr(c.data(na)).unwrap().bind("setup",
function(){c.unbind("setup");u.setup()});I&&C.unbind(Q,u.tick)},start:function(){c.css({position:"relative"});var d=a.hotspot||c,b=g(K),f=g(D),h=B(f,g(L));h=e(p,1/h*((a.step||a.frame)-1));e(A,h*f+1);f=g(S);h=a.images;var k=0,o=a.loading,l=!h.length?[f]:h,t;ka?d.css({WebkitUserSelect:"none"}).each(function(){function r(s,y){i.each(y,function(Ca){s.addEventListener(Ca,this,false)})}function j(s){return s.cancelable&&s.preventDefault()||false}function n(s){var y=s.touches[0];c.trigger("down",[y.clientX,
y.clientY,true]);return j(s)}function Da(s){var y=s.touches[0];c.trigger("drag",[y.clientX,y.clientY,true]);return j(s)}function qa(s){c.trigger("up",[true]);return j(s)}r(this,{touchstart:n,touchmove:Da,touchend:qa,touchcancel:qa})}):d.css({cursor:"url("+ra+"), "+W}).mouseenter(function(){c.trigger("enter")}).mouseleave(function(){c.trigger("leave")}).mousemove(function(r){c.trigger("over",[r.pageX,r.pageY])}).mousewheel(function(r,j){c.trigger("wheel",[j]);return false}).dblclick(function(){c.trigger("animate")}).mousedown(function(r){c.trigger("down",
[r.clientX,r.clientY])}).disableTextSelect();(a.hint||a.tooltip)&&d.attr(Ea,a.hint||a.tooltip);a.monitor&&c.append(i(J,{className:U,css:{position:X,left:0,top:0}}));a.indicator&&c.append(i(J).addClass(T).css({width:a.indicator+q,height:a.indicator+q,top:b.y-a.indicator+q,position:X,backgroundColor:Fa}));i(function(){a.preloader&&c.append(t=i(J,{className:oa,css:{position:X,right:0,top:0}}).text(o+M+k+"/"+l.length));setTimeout(function(){i.each(l,function(r,j){i(ba(V),{src:a.path+j,className:pa}).appendTo(c).hide().load(function(){i(this).remove();
k++;t.text(o+M+k+"/"+l.length);k==l.length&&t.remove()})})},10)});c.trigger("frameChange")},animate:function(){},tick:function(){var d=a.speed,b=a.friction/a.tempo,f=g(E),h=f<0;f-=f*b;f=sa=f==sa?0:f;f=(h?ea:B)(0,O(3,f))||0;f=e(E,f);step=(d+f)/a.tempo;i(x(U),c).text(g(a.monitor));ta(0);w&&w++;if(!(w&&!f)){if(g(Y))return z();e(p,g(p)+step);c.trigger("fractionChange")}},down:function(d,b,f,h){z();d=a.hotspot||c;e(Y,true);e(ua,b);e(E,0);e(Z,e(va,g(p)));!h&&C.mousemove(function(k){c.trigger("drag",[k.clientX,
k.clientY])}).mouseup(function(){c.trigger("up")})&&d.css({cursor:ca(Ga)+", "+W})},up:function(d,b){d=a.hotspot||c;e(Y,false);var f=v[1]+v[2]!=0,h=(v[0]+v[1]+v[2])/v.length/(b?15:20),k=(a.reversed?-1:1)*(a.stitched?-1:1);e(E,a.inertial&&f?h*k:0);wa();w=0;!b&&C.unbind("mousemove mouseup")&&d.css({cursor:"url("+ra+"), "+W})},drag:function(d,b){z();d=g(ua);var f=g(va),h=a.stitched,k=g(K);e(p,f+(a.reversed?-1:1)*(h?-1:1)/(a.revolution||h/2||k.x)*(b-d));ta(b-xa);xa=b;c.trigger("fractionChange")},wheel:function(d,
b){z();e(E,0);d=g(p);var f=1/B(g(D),g(L)),h=$(Ha(Ia(b))/2);h=b<0?-h:h;e(p,d+h*f);c.trigger("fractionChange");return false},fractionChange:function(d,b){b=!b?g(p):e(p,b);d=g(Z);d=a.speed=za(b-d,a.speed);b=a.loops?b-(b<0?$:ya)(b):da(0,1,b);a.speed=!a.loops&&a.rebound&&aa==a.rebound*1E3/a.tempo?-d:d;b=!a.loops?b:b>=0?b:1+b;b=e(Z,e(p,O(6,b)));e(A,b*(g(D)-1)+1);!w&&(aa=b==0||b==1?aa+1:0);c.trigger("frameChange")},frameChange:function(d,b){var f=g(D);d=!b?g(p):e(p,O(6,(b-1)/(f-1)));b=!b?g(A):e(A,b);b=e(A,
N(b));var h=g(S),k=a.images,o=g(K);g(L);var l=g(la),t=g(ma);if(a.stitched){l=a.loops?a.stitched:a.stitched-o.x;j=N(d*l);n=0;t=[-j+q,n+q]}else{j=ya(b/a.footage);n=b-j*a.footage-1;j=n==-1?j+n:j;n=n==-1?a.footage+n:n;var r=a.horizontal?o.y:o.x,j=-j*(l+r),n=-n*(l+(a.horizontal?o.x:o.y));f=$(f/a.footage);l=f*r+(f-1)*l;j=t&&a.horizontal?j-l:j;n=t&&!a.horizontal?n-l:n;t=k.length?[0,0]:a.horizontal?[n+q,j+q]:[j+q,n+q]}b=k[b-1]||h;l=o.x-a.indicator;d=da(0,l,N(d*(l+2))-1);b={background:ca(a.path+b)+M+t.join(M)};
c.css(b).find(x(T)).css({left:d+q})}},w=a.delay>0?-N(a.delay*a.tempo):0,z=function(){return w=-a.timeout*a.tempo},aa=0,xa=0,sa=0,ta=function(d){v.push(d)&&v.shift()},wa=function(){return v=[0,0,0]},v=wa();c.ready(u.setup)});return i(F)};Aa("mousewheel disableTextSelect".split(/ /));var P="jquery-reel",T="indicator",oa="preloader",pa="preloaded_frame",U="monitor",Q="tick.reel",C=i(document),ka=/iphone|ipod|ipad|android/i.test(navigator.userAgent),W="w-resize",I,ra="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7",
Ga="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==",N=Math.round,ya=Math.floor,$=Math.ceil,ea=Math.min,B=Math.max,Ia=Math.abs,Ha=Math.sqrt,G=parseInt,na="backup",Y="clicked",ua="clicked_location",va="clicked_on",K="dimensions",p="fraction",A="frame",D="frames",S="image",Z="last_fraction",ma="reversed",la="spacing",L="steps",E="velocity",H="",M=" ",X="absolute",ja="class",ia="div",J=ba(ia),ha="height",
Fa="#000",R="id",V="img",q="px",fa="src",Ea="title",ga="width"})(jQuery);
