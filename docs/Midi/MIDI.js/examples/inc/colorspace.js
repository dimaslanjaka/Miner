if(void 0===Color)var Color={};void 0===Color.Space&&(Color.Space={}),function(){"use strict";var useEval=!1,functions={},shortcuts={"HEX24>HSL":"HEX24>RGB>HSL","HEX32>HSLA":"HEX32>RGBA>HSLA","HEX24>CMYK":"HEX24>RGB>CMY>CMYK","RGB>CMYK":"RGB>CMY>CMYK"},root=Color.Space=function(color,route){shortcuts[route]&&(route=shortcuts[route]);var r=route.split(">");if("object"==typeof color&&color[0]>=0){for(var type=r[0],tmp={},i=0;i<type.length;i++){var str=type.substr(i,1);tmp[str]=color[i]}color=tmp}if(functions[route])return functions[route](color);for(var f="color",pos=1,key=r[0];pos<r.length;pos++)pos>1&&(key=key.substr(key.indexOf("_")+1)),key+=(0===pos?"":"_")+r[pos],color=root[key](color),useEval&&(f="Color.Space."+key+"("+f+")");return useEval&&(functions[route]=eval("(function(color) { return "+f+" })")),color};root.RGB_W3=function(r){return"rgb("+(r.R>>0)+","+(r.G>>0)+","+(r.B>>0)+")"},root.RGBA_W3=function(r){var t="number"==typeof r.A?r.A/255:1;return"rgba("+(r.R>>0)+","+(r.G>>0)+","+(r.B>>0)+","+t+")"},root.W3_RGB=function(r){r=r.substr(4,r.length-5).split(",");return{R:parseInt(r[0]),G:parseInt(r[1]),B:parseInt(r[2])}},root.W3_RGBA=function(r){r=r.substr(5,r.length-6).split(",");return{R:parseInt(r[0]),G:parseInt(r[1]),B:parseInt(r[2]),A:255*parseFloat(r[3])}},root.HSL_W3=function(r){return"hsl("+(r.H+.5>>0)+","+(r.S+.5>>0)+"%,"+(r.L+.5>>0)+"%)"},root.HSLA_W3=function(r){var t="number"==typeof r.A?r.A/255:1;return"hsla("+(r.H+.5>>0)+","+(r.S+.5>>0)+"%,"+(r.L+.5>>0)+"%,"+t+")"},root.W3_HSL=function(r){r=r.substr(4,r.length-5).split(",");return{H:parseInt(r[0]),S:parseInt(r[1]),L:parseInt(r[2])}},root.W3_HSLA=function(r){r=r.substr(5,r.length-6).split(",");return{H:parseInt(r[0]),S:parseInt(r[1]),L:parseInt(r[2]),A:255*parseFloat(r[3])}},root.W3_HEX=root.W3_HEX24=function(r){return"#"===r.substr(0,1)&&(r=r.substr(1)),3===r.length&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),parseInt("0x"+r)},root.W3_HEX32=function(r){return"#"===r.substr(0,1)&&(r=r.substr(1)),6===r.length?parseInt("0xFF"+r):parseInt("0x"+r)},root.HEX_W3=root.HEX24_W3=function(r,t){t||(t=6),r||(r=0);for(var o=r.toString(16),n=o.length;n<t;)o="0"+o,n++;for(n=o.length;n>t;)o=o.substr(1),n--;return"#"+o},root.HEX32_W3=function(r){return root.HEX_W3(r,8)},root.HEX_RGB=root.HEX24_RGB=function(r){return{R:r>>16,G:r>>8&255,B:255&r}},root.HEX32_RGBA=function(r){return{R:r>>>16&255,G:r>>>8&255,B:255&r,A:r>>>24}},root.RGBA_HEX32=function(r){return(r.A<<24|r.R<<16|r.G<<8|r.B)>>>0},root.RGB_HEX24=root.RGB_HEX=function(r){return r.R<0&&(r.R=0),r.G<0&&(r.G=0),r.B<0&&(r.B=0),r.R>255&&(r.R=255),r.G>255&&(r.G=255),r.B>255&&(r.B=255),r.R<<16|r.G<<8|r.B},root.RGB_CMY=function(r){return{C:1-r.R/255,M:1-r.G/255,Y:1-r.B/255}},root.RGBA_HSLA=root.RGB_HSL=function(r){var t,o,n=r.R/255,e=r.G/255,u=r.B/255,a=Math.min(n,e,u),s=Math.max(n,e,u),c=s-a,i=(s+a)/2;if(0===c)t=0,o=0;else{o=i<.5?c/(s+a):c/(2-s-a);var f=((s-n)/6+c/2)/c,l=((s-e)/6+c/2)/c,B=((s-u)/6+c/2)/c;n===s?t=B-l:e===s?t=1/3+f-B:u===s&&(t=2/3+l-f),t<0&&(t+=1),t>1&&(t-=1)}return{H:360*t,S:100*o,L:100*i,A:r.A}},root.RGBA_HSVA=root.RGB_HSV=function(r){var t,o,n=r.R/255,e=r.G/255,u=r.B/255,a=Math.min(n,e,u),s=Math.max(n,e,u),c=s-a;if(0===c)t=0,o=0;else{o=c/s;var i=((s-n)/6+c/2)/c,f=((s-e)/6+c/2)/c,l=((s-u)/6+c/2)/c;n===s?t=l-f:e===s?t=1/3+i-l:u===s&&(t=2/3+f-i),t<0&&(t+=1),t>1&&(t-=1)}return{H:360*t,S:100*o,V:100*s,A:r.A}},root.CMY_RGB=function(r){return{R:Math.max(0,255*(1-r.C)),G:Math.max(0,255*(1-r.M)),B:Math.max(0,255*(1-r.Y))}},root.CMY_CMYK=function(r){var t=r.C,o=r.M,n=r.Y,e=Math.min(n,Math.min(o,Math.min(t,1)));return{C:t=Math.round((t-e)/(1-e)*100),M:o=Math.round((o-e)/(1-e)*100),Y:n=Math.round((n-e)/(1-e)*100),K:e=Math.round(100*e)}},root.CMYK_CMY=function(r){return{C:r.C*(1-r.K)+r.K,M:r.M*(1-r.K)+r.K,Y:r.Y*(1-r.K)+r.K}},root.HSLA_RGBA=root.HSL_RGB=function(r){var t,o,n,e,u,a,s=r.H/360,c=r.S/100,i=r.L/100;return 0===c?t=o=n=i:(e=2*i-(u=i<.5?i*(1+c):i+c-c*i),(a=s+1/3)<0&&(a+=1),a>1&&(a-=1),t=6*a<1?e+6*(u-e)*a:2*a<1?u:3*a<2?e+(u-e)*(2/3-a)*6:e,(a=s)<0&&(a+=1),a>1&&(a-=1),o=6*a<1?e+6*(u-e)*a:2*a<1?u:3*a<2?e+(u-e)*(2/3-a)*6:e,(a=s-1/3)<0&&(a+=1),a>1&&(a-=1),n=6*a<1?e+6*(u-e)*a:2*a<1?u:3*a<2?e+(u-e)*(2/3-a)*6:e),{R:255*t,G:255*o,B:255*n,A:r.A}},root.HSVA_RGBA=root.HSV_RGB=function(r){var t,o,n,e,u,a,s=r.H/360,c=r.S/100,i=r.V/100;if(0===c)t=o=n=Math.round(255*i);else switch(s>=1&&(s=0),e=(s*=6)-Math.floor(s),u=Math.round(255*i*(1-c)),n=Math.round(255*i*(1-c*e)),a=Math.round(255*i*(1-c*(1-e))),i=Math.round(255*i),Math.floor(s)){case 0:t=i,o=a,n=u;break;case 1:t=n,o=i,n=u;break;case 2:t=u,o=i,n=a;break;case 3:t=u,o=n,n=i;break;case 4:t=a,o=u,n=i;break;case 5:t=i,o=u,n=n}return{R:t,G:o,B:n,A:r.A}}}();