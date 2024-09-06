(function(){var j,q,y,w,z,A,B,x,u,C,D;j=function(){function c(c,d){var g;f?a.push([c,d]):(g=document.createElement("li"),g.textContent=c.charAt(0).toUpperCase()+c.slice(1),g.className=d||"",b.insertBefore(g,b.firstChild),b.scrollTop=0)}var b=document.getElementById("log"),a=[],f=!1;c.async=function(a){f=a};c.clearQueue=function(){a.forEach(function(a){c(a[0],a[1])});a=[]};return c}();q=function(){function c(a,c,g,e,l,t){var s,i,r;f||(f=new b);s=f.currentTime+0.01;g=s+g*e/1E3;i=f.createOscillator();
r=f.createGain();i.type=["square","sawtooth","triangle","sine"][t||0];r.gain.value=0;i.connect(r);r.connect(f.destination);i.start();i.frequency.setValueAtTime(a,s);i.frequency.linearRampToValueAtTime(a+c*e,g);r.gain.setValueAtTime(l,s);r.gain.linearRampToValueAtTime(0,g);i.stop(g+0.01)}var b=window.AudioContext||window.webkitAudioContext,a=document.getElementById("sound"),f;return function(f){if(b&&a.checked)switch(f){case "move":c(100,-10,15,15,0.7,2);break;case "item":c(510,0,15,20,0.1);setTimeout(function(){c(2600,
1,10,50,0.2)},80);break;case "ranged":c(160,10,15,10,0.1);c(250,-20,30,10,0.1,1);c(1500,-150,30,10,0.1,1);break;case "hit":c(100,-10,10,25,0.5);c(125,-5,20,45,0.1,1);c(40,2,20,20,1,2);c(200,-4,10,100,0.25,2);break;case "strong":c(220,15,20,15,0.3,2);break;case "weak":c(440,-15,20,15,0.3,2)}}}();y=function(){function c(a,b){a=Math.ceil(a);b=Math.floor(b);return Math.floor(a+Math.random()*(b+1-a))}function b(a,b,f,h,e){function o(a,b){var f,c;for(f=0;f<a.w;f++)for(c=0;c<a.h;c++)k[c+a.y+1][f+a.x+1]=
b}var m,n,l,k=[];for(n=0;n<g+2;n++){l=[];for(m=0;m<d+2;m++)l.push("#");k.push(l)}for(n=0;n<b.length;n++)o(b[n]," ");for(n=0;n<a.length;n++)o(a[n],".");k[h+1][f+1]="<";n=a.length===1?0:c(1,a.length-1);e?(m=Math.floor(a[n].w/2)+a[n].x,n=Math.floor(a[n].h/2)+a[n].y):(m=c(0,a[n].w-1)+a[n].x,n=c(0,a[n].h-1)+a[n].y);k[n+1][m+1]=">";return k.map(function(a){return a.join("")}).join("\n")}function a(a,b,f){var h,e,o,m=[],n,l;n=1+b%2;l=1+f%2;for(e=0;e<g+2;e++){o=[];for(h=0;h<d+2;h++)o.push("#");m.push(o)}for(h=
0;h<a.length;h++)m[a[h][1]+l][a[h][0]+n]=".";m[f+1][b+1]="<";h=2*c(0,(d-12)/2)+b%2;Math.abs(b-h)<=5&&(h+=10);e=2*c(0,(g-12)/2)+f%2;Math.abs(f-e)<=5&&(e+=10);m[e+1][h+1]=">";return m.map(function(a){return a.join("")}).join("\n")}function f(a,b,f){var h,d,e;Math.random()<0.5?(h=a,a=b):h=b;for(b=0;b<l;b++){d=2*c(h.x/2,(h.x+h.w-1)/2);e=2*c(a.y/2,(a.y+a.h-1)/2);var m;a:{m=f;for(var g=d,j=e,k=void 0,k=0;k<m.length;k++)if((g===m[k].x-1||g===m[k].x+m[k].w)&&m[k].y-1<=j&&j<=m[k].y+m[k].h||(j===m[k].y-1||
j===m[k].y+m[k].h)&&m[k].x-1<=g&&g<=m[k].x+m[k].w){m=!0;break a}m=!1}if(!m)break}f={x:d,y:Math.min(h.y,e),w:1,h:Math.abs(h.y-e)+1};d={x:Math.min(a.x,d),y:e,w:Math.abs(a.x-d)+1,h:1};return[f,d]}function h(a,b){var f,h,d=[],e=[],m=[],g={},l,k;for(f=0;f<a;f++)for(h=0;h<b;h++)f%2===0&&h%2===0?(e.push([f,h]),g[f+","+h]=e.length):f%2===0||h%2===0?m.push([f,h]):d.push([f,h]);for(;m.length;)f=c(0,m.length-1),f=m.splice(f,1)[0],f[0]%2?(l=f[0]-1+","+f[1],k=f[0]+1+","+f[1]):(l=f[0]+","+(f[1]-1),k=f[0]+","+(f[1]+
1)),l=g[l],k=g[k],l===k?d.push(f):(e.push(f),Object.keys(g).forEach(function(a){g[a]===k&&(g[a]=l)}));return e}var d=50,g=20,e=0.3*d*g,l=1E4;return function(l,j,i,r){l===-1?(l=c(0,d-1),j=c(0,g-1)):(l--,j--);if(i)return i=h(d-1-d%2,g-1-g%2),a(i,l,j);var i=[],p,o,m;a:{p=l;m=j;var n;for(o=0;o<1E4;o++)if(n={x:c(0,p),y:c(0,m),w:c(4,12),h:c(4,8)},n.x+n.w<=d&&n.y+n.h<=g&&n.x+n.w>p&&n.y+n.h>m){o=n;break a}o={x:p,y:m,w:1,h:1}}m=o.w*o.h;i.push(o);for(p=0;p<1E4;p++){a:{o=i;var v=n=void 0;n={x:c(0,d-4),y:c(0,
g-4),w:c(4,12),h:c(4,8)};if(!(n.x+n.w>d)&&!(n.y+n.h>g)){for(v=0;v<o.length;v++){var k;k=o[v];var q=n;k=Math.abs(k.x-q.x)>(k.x<q.x?k.w:q.w)?!1:Math.abs(k.y-q.y)>(k.y<q.y?k.h:q.h)?!1:!0;if(k){o=void 0;break a}}o=n}else o=void 0}if(o&&(m+=o.w*o.h,i.push(o),m>=e))break}m=[];for(p=1;p<i.length;p++)m=m.concat(f(i[c(0,p-1)],i[p],i));return b(i,m,l,j,r)}}();w=function(){function c(){this.canvas=document.getElementById("canvas");this.ctx=this.canvas.getContext("2d",{alpha:!1});this.cover=document.getElementById("cover");
this.coverCtx=this.cover.getContext("2d")}c.animations=[];c.addAnimation=function(b,a,f,h,d){c.animations.push({x0:b,y0:a,x1:f,y1:h,h:d})};c.prototype.loadSprites=function(b){var a=new Image;this.sprites=[];a.onload=function(){var f,c,d;for(f=0;f<19;f++)c=document.createElement("canvas"),c.width=16,c.height=16,d=c.getContext("2d"),d.drawImage(a,f*16,0,16,16,0,0,16,16),this.sprites.push(c);this.prepareInv();b()}.bind(this);a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAAAQCAMAAACm/tNDAAAAAXNSR0IArs4c6QAAADZQTFRFAAAAAAAAAHcAAKoAQh8fREREXywRZgBmiAAAiACIiEQAiIiIqgCqu2YAzAAAzMzM3d0A////qlkdZwAAAAF0Uk5TAEDm2GYAAAOnSURBVFjDnZiLYoMgDEXFjg2xsPr/P7uEBPJAO7c4H1ic5fTeEF2+XXxAtA1tv3+LhSKlxcSKsVxFxljehP84QCy346SzP+Pb/vu7KKX0w/8C++SV71ePZHE9Hg9N7LlpGgXDMjEIJ6A3gEmPMPf2Z3w71Zre4Xq9XuWPwDqg0cZgYAnuB3eUWyIuJCa8ntumeCExWLPmBd8pa6KG2B2F9S5hBhZqgD/773QX+v6XvF4tyjkwHwfFADTaorB0HLWOW6IVPbAnAmNimdRFOwFWFLFcVljy9QCvgAXa1zNBqTOBAAbhFSr8pbe8roBZfX18AJyqAfl2syMAa2tCXg8yZPPk2nkhsE146QMFjImxZbVhbXPf9ytioYexVG6/kOWngVUnsTrz+jOwGCMBq0hHLMl3I5UlEhensJXS2LMD24hM6ViyBqYklr1hF+/fnM+QEYOZWMk4slxuWxJ51ep4Fcr8N4HFBigCMMIjCmNg/UdaWVsEDV35FGCbGbo5xEYWT2rxwbLojFZIgEQsjM3IYhOxTEPL2pLVWTJoS9aGqxpDFlYZc9r3qxxGgGJTWIyTJcGQAxd8lMSNnMaeGth2DownAUn0ZsqERY+/MDQihuf1/Mj7qK4IHZhwrUElsYQJzCYxHI3N+OV1AczICzZswRkYWzJ1Px4MbHUKY1JfFKglNRmanCWUTBWX8yyZPDRmPhGJxYbsFFgIXWHUITVYIWhXzsBeDpgpKywwZ8lJYSOBsSfXnsO4FNPAtK7MgclRtoobvBhAIVxw0IC9YHH1V/iOWmMWWAiiMOyQqiiMidWWwapL+veBHTbpu7IimWB5sCtp0AKs5yu3P+MlxHJgZJyqciiq8JZpUZA2YELMA5Mc1oAlyWG9lGzyOgFWbtRhjcs+t3XhCvP8ceyXI146MJO6OqSphuhFSb/eKYxSvpokJ17NkpGo7XPSH7UH5z6gw7NkVdWEVBblPTAjLyr1P92E0Nr20cgAWyXjCzHFKzOwtp94lTJ4k46gBw2wcLrvmxmYPhXjOPUvYFeV2B1gJ4+RFtiOLt0HL36YVM+SCGyxJYPfCzDK+XA1AxONXZWrwXfo/FiUv9ZhPZ28eZbslesNYOc+1ZZUwPr05t5WbF+67LT74l9cwBSLK9su4zS57LeASQ/Qz94rNF/pcy0itkZYKZ0+PqjS796z5L23Fft4WHnzUucqphc9WMjjOuowHNw5rkWs1Q6MxIQeHOrrfRtgtfVG/ABPYmmKABRnQQAAAABJRU5ErkJggg=="};
c.prototype.prepareInv=function(){var b=document.getElementById("inv"),a;a=this.sprites[7];a.style.display="none";a.title="horseshoe";b.appendChild(a);a=this.sprites[8];a.style.display="none";a.title="flashlight";b.appendChild(a);a=this.sprites[6];a.style.display="none";a.title="lucky charm";b.appendChild(a);b.appendChild(document.createElement("span"));a=this.sprites[4];a.style.display="none";a.title="lucky mushroom";a.className="mushroom";b.appendChild(a);a=document.createElement("span");a.className=
"mushroom";b.appendChild(a)};c.prototype.setSize=function(b,a){var f=b*16,c=a*16,d,g,e;d=Math.max(1,Math.min((window.innerWidth-20)/f,(window.innerHeight-80)/c));g=f*d+"px";e=c*d+"px";if(this.canvas.width!==f)this.canvas.width=f,this.canvas.height=c,this.cover.width=f,this.cover.height=c;if(this.f!==d)this.f=d,this.canvas.style.width=g,this.canvas.style.height=e,this.cover.style.width=g,this.cover.style.height=e};c.prototype.getTile=function(b,a){var f=this.canvas.getBoundingClientRect(),b=(b-f.left)/
this.f,a=(a-f.top)/this.f,b=Math.floor(b/16),a=Math.floor(a/16);return[b,a]};c.prototype.showTarget=function(b,a,f){b=b*16+8;a=a*16+8;this.coverCtx.fillStyle="rgba(255,255,255,0.75)";this.coverCtx.fillRect(b,a,8,8);this.coverCtx.font="10px monospace";this.coverCtx.textAlign="center";this.coverCtx.fillStyle="#000";this.coverCtx.fillText(f,b+4,a+8)};c.prototype.clearTargets=function(){this.coverCtx.clearRect(0,0,this.cover.width,this.cover.height)};c.prototype.showAnimation=function(b,a,f,c,d,g){var e;
e=g*Math.PI*4;d&&(g=g>0.5?2-2*g:2*g);b+=(f-b)*g;a+=(c-a)*g;this.coverCtx.save();this.coverCtx.translate(b*16+8,a*16+8);this.coverCtx.rotate(e);this.coverCtx.drawImage(this.sprites[d?7:17],-8,-8);this.coverCtx.restore()};c.prototype.runAnimations=function(){var b=window.requestAnimationFrame||window.mozRequestAnimationFrame,a,f;c.animations.length!==0&&(f=function(h){var d,g;a||(a=h);this.clearTargets();d=(h-a)/200;if(d<=1){for(h=0;h<c.animations.length;h++)g=c.animations[h],this.showAnimation(g.x0,
g.y0,g.x1,g.y1,g.h,d);b(f)}else c.animations=[]}.bind(this),b(f))};return c}();z=function(){function c(b){this.type=b;this.seen=!1}c.draw={".":function(b){b.fillStyle="rgba(128,128,128,0.75)";b.fillRect(0,0,16,16)}," ":function(b,a){b.drawImage(a[0],0,0)},"#":function(b,a){b.drawImage(a[1],0,0)},">":function(b,a){b.drawImage(a[2],0,0)},"<":function(b,a){b.drawImage(a[3],0,0)},F:function(b,a){b.drawImage(a[0],0,0);b.drawImage(a[4],0,0)},"%":function(b,a){b.drawImage(a[0],0,0);b.drawImage(a[5],0,0)},
"*":function(b,a){b.drawImage(a[0],0,0);b.drawImage(a[6],0,0)},")":function(b,a){b.drawImage(a[0],0,0);b.drawImage(a[7],0,0)},"(":function(b,a){b.drawImage(a[0],0,0);b.drawImage(a[8],0,0)},"?":function(b,a){b.drawImage(a[0],0,0);b.drawImage(a[18],0,0)}};c.prototype.draw=function(b,a){if(a)this.seen=!0;if(this.seen&&(c.draw[this.type](b.ctx,b.sprites),!a))c.draw["."](b.ctx)};c.prototype.isOpen=function(){return this.type!=="#"};c.prototype.isSeen=function(){return this.seen};c.prototype.getType=function(){return this.type};
c.prototype.takeItem=function(b){this.type=b||" "};return c}();A=function(){function c(a,b){this.tiles=a.split("\n").map(function(a){return a.split("").map(function(a){return new z(a)})});this.npc=[];this.depth=b}function b(a,b,c,d,g){function e(c,e,d){for(var c={x:c,y:e,prev:d,g:d?d.g+1:0,h:Math.max(Math.abs(c-a),Math.abs(e-b))},h,d=c.g+c.h,e=0;e<l.length;e++)if(h=l[e].g+l[e].h,d<h||d===h&&c.h<l[e].h){l.splice(e,0,c);return}l.push(c)}var l=[],j={},s,i;for(e(c,d);l.length;)if(c=l.shift(),d=c.x+","+
c.y,!j[d]){j[d]=c;if(c.x===a&&c.y===b)break;s=g(c.x,c.y);for(i=0;i<s.length;i++)d=s[i][0]+","+s[i][1],j[d]||e(s[i][0],s[i][1],c)}if(c=j[a+","+b]){for(g=[];c;)g.push([c.x,c.y]),c=c.prev;return g}}c.prototype.draw=function(a,b){var c=this.tiles.length,d=this.tiles[0].length,g,e,l=!1;a.setSize(d,c);a.ctx.fillStyle="#000";a.ctx.fillRect(0,0,d*16,c*16);for(g=0;g<d;g++)for(e=0;e<c;e++)a.ctx.save(),a.ctx.translate(g*16,e*16),this.tiles[e][g].draw(a,b.canSee(g,e)),a.ctx.restore();this.visibleMonsters=[];
for(c=0;c<this.npc.length;c++)d=this.npc[c],g=d.x,e=d.y,b.canSee(g,e)?(a.ctx.save(),a.ctx.translate(g*16,e*16),d.draw(a),a.ctx.restore(),d.seen||j(d.seenBefore?"you see "+d.getDesc(!0)+" again.":"you see "+d.getDesc()+"."),d.seen=!0,l=d.seenBefore=!0,this.visibleMonsters.push(d)):d.seen=!1;a.ctx.save();a.ctx.translate(b.x*16,b.y*16);b.draw(a);a.ctx.restore();b.showLuck();return l};c.prototype.isOpen=function(a,b){return a<0||a>=this.tiles[0].length||b<0||b>=this.tiles.length?!1:this.tiles[b][a].isOpen()};
c.prototype.hasBeenSeen=function(a,b){return a<0||a>=this.tiles[0].length||b<0||b>=this.tiles.length?!1:this.tiles[b][a].isSeen()};c.prototype.getType=function(a,b){return this.tiles[b][a].getType()};c.prototype.takeItem=function(a,b,c){return this.tiles[b][a].takeItem(c)};c.prototype.monsterAt=function(a,b){var c,d;for(c=0;c<this.npc.length;c++)if(d=this.npc[c],d.x===a&&d.y===b)return d};c.prototype.findFirst=function(a){var b,c;for(b=0;b<this.tiles[0].length;b++)for(c=0;c<this.tiles.length;c++)if(this.tiles[c][b].getType()===
a)return[b,c]};c.prototype.findFreeTile=function(a){var b,c,d;for(b=0;b<1E4;b++)if(c=Math.floor(Math.random()*this.tiles[0].length),d=Math.floor(Math.random()*this.tiles.length),this.isOpen(c,d)&&!this.monsterAt(c,d)&&!a.canSee(c,d))return[c,d]};c.prototype.findFreeTileNear=function(a,b,c){for(var d=0,g,e;;){for(g=a-d;g<=a+d;g++)for(e=b-d;e<=b+d;e++)if(this.isOpen(g,e)&&!this.monsterAt(g,e)&&!c.canSee(g,e))return[g,e];d++}};c.prototype.addMonster=function(a,b,c){a.place(b,c,this);this.npc.push(a)};
c.prototype.removeMonster=function(a){this.npc.splice(this.npc.indexOf(a),1)};c.prototype.leave=function(){var a;for(a=0;a<this.npc.length;a++)this.npc[a].seen=!1};c.prototype.findPath=function(a,c,h,d,g){var e=this;return b(a,c,h,d,function(a,b){return[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]].map(function(c){return[a+c[0],b+c[1]]}).filter(function(a){return e.isOpen(a[0],a[1])&&(!g||e.hasBeenSeen(a[0],a[1]))})})};c.prototype.autoexplore=function(a){var b=Infinity,c,d,g,e,l;for(e=0;e<
this.tiles[0].length;e++)for(l=0;l<this.tiles.length;l++)this.isOpen(e,l)&&!this.hasBeenSeen(e,l)&&(g=Math.max(Math.abs(a.x-e),Math.abs(a.y-l)),g<b&&(c=e,d=l,b=g));if(b!==Infinity&&(a=this.findPath(a.x,a.y,c,d))){for(b=0;b<a.length;b++)if(!this.hasBeenSeen(a[b][0],a[b][1])){a.length=b+1;break}return a}};return c}();B=function(){function c(b){this.prepare(b);this.levels=[this.createLevel(3,3,0)];this.currentLevel=0;this.henchmen=[]}c.prototype.prepare=function(b){function a(a){var b=Object.keys(a),
c,f=0;for(c=0;c<b.length;c++)f+=a[b[c]];for(c=0;c<b.length;c++)a[b[c]]/=f;return a}var c,h,d,g,e,l,j;c=[[0,0,2,2,2,0],[0,0,0,1,1,1,1,1,1,1,1,1,0]];h=[[0,0,3,5,7,8],[0,0,0,2,3,4,6,7,8,10,11,12,13]];d=[[0,1,2,3,4,5],[0,1,1,2,2,2,3,3,3,4,4,4,5]];g=[a({":1":4,":2":2,":3":1}),a({":1":4,":2":2,":3":1,f1:1,B1:1,n:1}),a({":1":1,":2":2,":3":1,f1:2,f2:1,f3:1,B1:2,B2:1,B3:1,n:3,"&1":1.5}),a({":1":1,":2":1,":3":2,f1:1,f2:2,f3:1,B1:1,B2:2,B3:1,n:3,"&1":1.5}),a({":2":0.5,":3":1,f1:1,f2:1,f3:2,B1:1,B2:1,B3:2,n:3,
"&1":1.5}),a({":2":0.5,":3":1,f1:1,f2:2,f3:4,B1:1,B2:2,B3:4,n:4})];this.levelData=[];for(e=0;e<c[b].length;e++){this.levelData.push({items:[]});j=2+Math.floor(Math.random()*3);for(l=0;l<j;l++)this.levelData[e].items.push("%");j=1+Math.floor(Math.random()*2);for(l=0;l<j;l++)this.levelData[e].items.push("F");this.levelData[e].h0=c[b][e];this.levelData[e].h1=h[b][e];this.levelData[e].p=g[d[b][e]]}for(e=0;e<5;e++)this.levelData[e].items.push("?");this.levelData[Math.floor(Math.random()*2)].items.unshift(")");
this.levelData[Math.floor(Math.random()*2)+(b===1?1:0)].items.unshift("(");j=b===1?3:2;this.levelData[0].items.unshift("*");this.elc=[1,j];for(e=0;e<5;e++)l=Math.floor(Math.random()*(this.levelData.length-1)),this.levelData[l].items.unshift("*"),l<j&&this.elc[0]++;this.levelData[j].c=!0;b===0?this.levelData[3+Math.floor(2*Math.random())].m=!0:(this.levelData[4+Math.floor(8*Math.random())].m=!0,this.levelData[4+Math.floor(8*Math.random())].m=!0)};c.prototype.init=function(b){b.place(3,3,this.levels[0]);
b.elc=this.elc;this.initMonsters(b)};c.prototype.createLevel=function(b,a,c){function h(a){var b,c;for(b=0;b<1E4;b++)if(c=Math.floor(Math.random()*d.length),d.charAt(c)==="."){d=d.slice(0,c)+a+d.slice(c+1);return}d=d.replace(/./,a)}for(var d=y(b,a,this.levelData[c].m,c===this.levelData.length-1),b=0;b<this.levelData[c].items.length;b++)h(this.levelData[c].items[b]);d=d.replace(/\./g," ");c===0&&(d=d.replace("<"," "));return new A(d,c)};c.prototype.goUp=function(b){j("you climb up the ladder.");this.levels[this.currentLevel].leave();
this.currentLevel--;b.level=this.levels[this.currentLevel];document.getElementById("level").textContent="Level "+(this.currentLevel+1)};c.prototype.goDown=function(b){var a;j("you climb down the ladder.");this.levels[this.currentLevel].leave();this.currentLevel++;this.levels[this.currentLevel]||(a=this.createLevel(b.x,b.y,this.currentLevel),this.levels.push(a));b.level=this.levels[this.currentLevel];document.getElementById("level").textContent="Level "+(this.currentLevel+1);a&&this.initMonsters(b)};
c.prototype.createHenchman=function(){var b;if(this.henchmen.length===this.maxHenchmen)return new u("n");b=new u("&1");this.henchmen.push(b);b.desc[1]+=this.henchmen.length;return b};c.prototype.createMonster=function(b){return b==="&1"?this.createHenchman():new u(b)};c.prototype.createRandomMonster=function(b){for(var a=Object.keys(b),c=Math.random();a.length>1&&b[a[0]]<c;)c-=b[a[0]],a.shift();return this.createMonster(a[0])};c.prototype.addRandomMonster=function(b,a){var c,h=this.levels[this.currentLevel];
(c=h.findFreeTile(b))&&h.addMonster(a?this.createHenchman():this.createRandomMonster(this.levelData[this.currentLevel].p),c[0],c[1])};c.prototype.initMonsters=function(b){var a,c,h=this.levels[this.currentLevel];c=this.levelData[this.currentLevel];c.c&&(a=h.findFirst("<"),h.isOpen(a[0]-1,a[1])?a[0]--:a[0]++,h.addMonster(new u("@2"),a[0],a[1]));this.maxHenchmen=c.h1;if(this.currentLevel===this.levelData.length-1){c=h.findFirst(">");h.takeItem(c[0],c[1]);h.addMonster(new u("&2"),c[0],c[1]);for(this.transferHenchmen(c[0],
c[1],b,h);this.henchmen.length<this.maxHenchmen;)a=h.findFreeTileNear(c[0],c[1],b),h.addMonster(this.createHenchman(),a[0],a[1])}else for(a=0;a<c.h0;a++)this.addRandomMonster(b,!0);for(a=0;a<3+Math.floor(3*this.currentLevel/(this.levelData.length-1));a++)this.addRandomMonster(b)};c.prototype.spawnMonster=function(b){Math.random()>0.02+0.03*this.currentLevel/(this.levelData.length-1)||this.addRandomMonster(b)};c.prototype.transferHenchmen=function(b,a,c,h){var d,g,e;e=!1;if(!this.henchmenTransferred){for(d=
0;d<this.henchmen.length;d++)g=this.henchmen[d],g.health!==0&&(e=h.findFreeTileNear(b,a,c),g.level.removeMonster(g),h.addMonster(g,e[0],e[1]),e=!0);e&&(j("you sense that all of Lord Balsekil\u2019s henchmen rushed to his help.","b"),q("ranged"));this.henchmenTransferred=!0}};return c}();x=function(){function c(){}c.draw={"@":function(b,a,c){if(c)b.fillStyle="#fa8",b.fillRect(3,0,9,16);b.drawImage(a[9],0,0)},"@2":function(b,a){b.drawImage(a[10],0,0)},":1":function(b,a){b.drawImage(a[11],0,0)},":2":function(b,
a){b.drawImage(a[11],0,0)},":3":function(b,a){b.drawImage(a[11],0,0)},f1:function(b,a){b.drawImage(a[12],0,0)},f2:function(b,a){b.drawImage(a[12],0,0)},f3:function(b,a){b.drawImage(a[12],0,0)},B1:function(b,a){b.drawImage(a[13],0,0)},B2:function(b,a){b.drawImage(a[13],0,0)},B3:function(b,a){b.drawImage(a[13],0,0)},n:function(b,a){b.drawImage(a[14],0,0)},"&1":function(b,a){b.drawImage(a[15],0,0)},"&2":function(b,a){b.drawImage(a[16],0,0)}};c.prototype.init=function(b){this.health=b.health||10;this.maxHealth=
b.health||10;this.experience=b.experience||1;this.block=b.block||0.1;this.minAttack=b.minAttack||1;this.maxAttack=b.maxAttack||2;if(b.speed)this.speed=1/b.speed;this.aiMode=b.aiMode;if(b.desc)this.desc=JSON.parse(JSON.stringify(b.desc));this.attackName=b.attackName};c.prototype.place=function(b,a,c){this.x=b;this.y=a;this.level=c};c.prototype.drawHealth=function(b,a,c){var h=this.health/this.maxHealth,d;d="hsl("+Math.round(140*h*h)+",100%,30%)";b.fillStyle=d;b.fillRect(0,0,a,c);b.fillStyle="#000";
h=Math.round((a-2)*(1-h));b.fillRect(a-h-1,1,h,c-2);return d};c.prototype.draw=function(b){c.draw[this.type](b.ctx,b.sprites,this.luckyMushroomTimeout);!this.isPlayer&&this.health<this.maxHealth&&(b.ctx.translate(2,2),this.drawHealth(b.ctx,12,4))};c.prototype.moveTo=function(b,a){var c;this.x=b;this.y=a;this.isPlayer&&(c=this.level.getType(b,a),c!==" "&&(c=this.handleItem(c))&&this.level.takeItem(b,a))};c.prototype.moveRel=function(b,a){var c=this.x+b,h=this.y+a,d;if(d=this.level.monsterAt(c,h))return this.attack(d),
!0;return this.level.isOpen(c,h)?(this.moveTo(c,h),!0):!1};c.prototype.rangedFails=function(b){return Math.random()<(Math.pow(1.3,b/2)-1)/this.experience};c.prototype.blockAttack=function(){return Math.random()<this.block*this.experience*(this.hasHorseshoe&&!this.usesHorseshoe?3:1)};c.prototype.getAttackDamage=function(){return Math.round((this.minAttack+Math.random()*(this.maxAttack-this.minAttack))*this.experience)};c.prototype.improveExperience=function(b){this.luckyMushroomTimeout&&(this.experience/=
2);b=this.experience*Math.pow(2,b/1200);b>2&&(b=2);Math.floor(b*10)!==Math.floor(this.experience*10)&&j("you feel more experienced now.","b");this.experience=b;this.luckyMushroomTimeout&&(this.experience*=2)};c.prototype.getAttackName=function(b,a){var c;return this.isPlayer?(c=b?this.hasHorseshoe?"throw your horseshoe at":"yell your lucky number at":"hit",a&&(c="try to "+c),"you "+c+" "):(c=this.attackName?this.attackName[a?0:1]:a?"tries to attack":"attacks",this.getDesc(!0)+" "+c+" ")};c.prototype.attack=
function(b,a){function c(a,b){var f=a.x-b.x,e=a.y-b.y;return Math.sqrt(f*f+e*e)}b.health!==0&&(a&&(w.addAnimation(this.x,this.y,b.x,b.y,this.hasHorseshoe),q("ranged")),a&&this.rangedFails(c(b,this))?this.isPlayer?j(this.getAttackName(!0,!0)+b.getDesc(!0)+", but miss."):j(this.getAttackName(!0,!0)+"you, but misses."):a&&this.hasHorseshoe&&b.type==="n"?(j("uh-oh! The mirror-monster shatters!","b"),b.level.removeMonster(b),this.reduceHealth(20)):b.blockAttack()?this.isPlayer?j(this.getAttackName(a,!0)+
b.getDesc(!0)+", but your attack is blocked."):j(this.getAttackName(a,!0)+"you, but you block the attack."):(q("hit"),this.isPlayer?j(this.getAttackName(a)+b.getDesc(!0)+"."):(j(this.getAttackName(a)+"you."),this.type.charAt(0)==="B"&&Math.random()<0.3&&(j(this.getDesc(!0)+" hits your eyes."),b.makeBlind())),b.reduceHealth(this.getAttackDamage())&&this.isPlayer&&this.improveExperience(b.maxHealth)))};c.prototype.reduceHealth=function(b){this.health-=b;if(this.health<=0)return this.health=0,this.die(),
!0};c.prototype.die=function(){this.isPlayer||(j(this.getDesc(!0)+" vanishes.","b"),this.type==="&2"&&(this.level.takeItem(this.x,this.y,"*"),j(this.getDesc(!0)+" left back a lucky charm!","b")),this.level.removeMonster(this))};return c}();u=function(){function c(b){this.type=b;this.seenBefore=this.seen=!1;this.init(c.data[b])}c.prototype=new x;c.data={":1":{desc:["a small newt","the small newt"],attackName:["tries to touch","touches"],speed:0.5,maxAttack:1,health:5},":2":{desc:["a newt","the newt"],
attackName:["tries to touch","touches"],speed:0.75},":3":{desc:["a large newt","the large newt"],attackName:["tries to touch","touches"]},B1:{desc:["a small crow","the small crow"],attackName:["tries to peck","pecks"],maxAttack:1,health:5},B2:{desc:["a crow","the crow"],attackName:["tries to peck","pecks"],speed:1.25,maxAttack:1,health:5},B3:{desc:["a large crow","the large crow"],attackName:["tries to peck","pecks"],speed:1.5,health:5},f1:{desc:["a small black cat","the small black cat"],attackName:["tries to hiss at",
"hisses at"],maxAttack:1,aiMode:"ranged"},f2:{desc:["a black cat","the black cat"],attackName:["tries to hiss at","hisses at"],maxAttack:1,aiMode:"ranged"},f3:{desc:["a large black cat","the large black cat"],attackName:["tries to hiss at","hisses at"],aiMode:"ranged"},n:{desc:["a mirror monster","the mirror monster"],attackName:["tries to cast an evil look at","casts an evil look at"],aiMode:"ranged",block:0},"&1":{desc:["one of Balsekil\u2019s henchmen","Henchman No. "],aiMode:"meleeRanged",block:0.125,
health:20,minAttack:1,maxAttack:3,experience:1.25},"&2":{desc:["Lord Balsekil","Lord Balsekil"],aiMode:"meleeRanged",block:0.2,health:30,minAttack:1,maxAttack:5,experience:1.75},"@2":{desc:["a chimney sweep","the chimney sweep"],aiMode:"hint",block:1}};c.prototype.getDesc=function(b){return this.desc[b?1:0]};c.prototype.walkRandom=function(b){var a,c;do a=Math.floor(Math.random()*3)-1,c=Math.floor(Math.random()*3)-1;while(!this.level.isOpen(this.x+a,this.y+c));!this.level.monsterAt(this.x+a,this.y+
c)&&!(b.x===this.x+a&&b.y===this.y+c)&&this.moveRel(a,c)};c.prototype.huntPlayer=function(b){var a=this.level.findPath(this.x,this.y,b.x,b.y);!a||a.length<2||this.level.monsterAt(a[1][0],a[1][1])?this.walkRandom(b):this.moveRel(a[1][0]-a[0][0],a[1][1]-a[0][1])};c.prototype.meleeAI=function(b){Math.abs(b.x-this.x)<=1&&Math.abs(b.y-this.y)<=1?this.attack(b):this.seen?this.huntPlayer(b):this.walkRandom(b)};c.prototype.rangedAI=function(b){this.seen||Math.abs(b.x-this.x)<=1&&Math.abs(b.y-this.y)<=1?this.attack(b,
!0):Math.random()<0.5?this.walkRandom(b):this.huntPlayer(b)};c.prototype.meleeRangedAI=function(b){var a=b.x-this.x,c=b.y-this.y;Math.abs(a)<=1&&Math.abs(c)<=1?this.attack(b):this.seen&&a*a+c*c<=4?this.attack(b,!0):this.seen?Math.random()<0.5?this.attack(b,!0):this.huntPlayer(b):this.rangedAI(b)};c.prototype.hintAI=function(b){var a;if(this.seen)a=b.getHint(),this.lastHint!==a?(j(this.getDesc(!0)+": \u201c"+a+"\u201d","b"),this.lastHint=a):this.walkRandom(b)};c.prototype.monsterAI=function(b){if(this.seenBefore)switch(this.aiMode){case "ranged":this.rangedAI(b);
break;case "meleeRanged":this.meleeRangedAI(b);break;case "hint":this.hintAI(b);break;default:this.meleeAI(b)}};return c}();C=function(){function c(a){this.type="@";this.isPlayer=!0;this.dungeon=a;a.init(this);this.sightRadius=4;this.init({health:77,maxAttack:2});this.maxDepth=this.steps=0;this.hasHorseshoe=this.hasLamp=!1;this.luckyMushroomTimeout=this.luckyMushrooms=this.luckyCharms=0;this.blind=!1;this.blindTimeout=0}function b(a,b,c,d,g){for(var e=a,j=b,q=Math.abs(c-a),a=a<c?1:-1,s=-Math.abs(d-
b),b=b<d?1:-1,i=q+s,r;e!==c||j!==d;){if(!g(e,j))return!1;r=i*2;r>s&&(i+=s,e+=a);r<q&&(i+=q,j+=b)}return!0}c.prototype=new x;c.prototype.showLuck=function(){if(!this.luckOutput)this.luckOutput=document.getElementById("luck"),this.luckCanvas=document.getElementById("luck-canvas").getContext("2d",{alpha:!1}),this.luckCanvas.canvas.width=100,this.luckCanvas.canvas.height=10;this.luckOutput.style.color=this.drawHealth(this.luckCanvas,100,10);this.luckOutput.textContent=this.health+"/"+this.maxHealth};
c.prototype.showInv=function(){var a=document.getElementById("inv").childNodes;if(this.hasHorseshoe)a[0].style.display="";if(this.hasLamp)a[1].style.display="";if(this.luckyCharms)a[2].style.display="",a[3].textContent="\u00d7"+this.luckyCharms;this.luckyMushrooms?(a[4].style.display="",a[5].textContent="\u00d7"+this.luckyMushrooms):(a[4].style.display="none",a[5].textContent="")};c.prototype.getHint=function(){return!this.hasHorseshoe?"You should go back and get the horseshoe before proceeding further.":
!this.hasLamp?"You should go back and get the flashlight before proceeding further.":this.elc[0]===1?"You should go back and get the lucky charm before proceeding further.":this.elc[0]?"You should go back and get the "+this.elc[0]+" lucky charms before proceeding further.":"Well done so far! Now find the remaining lucky charms, and find and defeat Lord Balsekil who has the seventh lucky charm."};c.prototype.getResult=function(){var a=this.experience,b;this.luckyMushroomTimeout&&(a/=2);a=Math.round(100*
(a-1));b=this.luckyCharms*1E3+(this.maxDepth+1)*50+Math.round(a/2)+this.health;return"After "+this.steps+" steps you found "+(this.luckyCharms===1?"one lucky charm":(this.luckyCharms||"no")+" lucky charms")+", reached a depth of "+(this.maxDepth+1)+", and increased your experience by "+a+" %. For this you earn "+b+" points."};c.prototype.canSee=function(a,c){var h=a-this.x,d=c-this.y,g=this.level;this.level.isOpen(a,c)||(h>0?h-=0.5:h<0&&(h+=0.5),d>0?d-=0.5:d<0&&(d+=0.5));return h*h+d*d>this.sightRadius*
this.sightRadius?!1:b(this.x,this.y,a,c,function(b,d){return g.isOpen(b,d)||a===b&&c===d})};c.prototype.handleItem=function(a){var b=!1,c="Never throw your horseshoe at a mirror monster!;Beware of crows, they are fast and can blind you for some time!;Try to get rid of as many of Lord Balsekil\u2019s henchmen as possible before you finally meet him!;Avoid ladders up unless you really have to use them.;Balsekil is Volap\u00fck and means thirteen.;The highest possible score is 7777.;Thank you for playing!".split(";");
if(a===">"&&this.level.depth===0)j("you found the ladder down to the second level.");else if(a==="<")Math.random()<0.3&&(j("you accidentally walked below the ladder.","b"),this.reduceHealth(2),q("hit"));else if(a==="%"){a="you found a four-leave clover, ";if(this.health===this.maxHealth)a+="but you leave it here for later.";else{b=!0;this.health+=7;if(this.health>this.maxHealth)this.health=this.maxHealth;a+="which"+(this.health===this.maxHealth?"":" partially")+" restores your luck."}j(a)}else if(a===
"*")this.level.depth<this.elc[1]&&this.elc[0]--,this.luckyCharms++,b=!0,j("you found a lucky charm.","b");else if(a==="F")this.luckyMushrooms++,b=!0,j("you found a lucky mushroom"+(this.luckyMushrooms===1?", which you can eat to make you very strong for a short time":"")+".",this.luckyMushrooms===1?"b":"");else if(a==="("){this.hasLamp=b=!0;if(!this.blind)this.sightRadius=6;j("you found a flashlight.","b")}else a===")"?(this.hasHorseshoe=b=!0,this.minAttack=2,this.maxAttack=4,j("you found a horseshoe. From now on you will use it for attacks (it will return like a boomerang), and to defend against attacks (but only if you did not just throw it).",
"b")):a==="?"&&(b=!0,j("you found a fortune cookie. It tastes delicious and has a paper inside: "+c[Math.floor(Math.random()*c.length)],"b"));b&&(q("item"),this.showInv());return b};c.prototype.eat=function(){if(this.luckyMushrooms===0)return!1;this.luckyMushrooms--;this.showInv();this.luckyMushroomTimeout===0&&(this.experience*=2,j("you feel very strong!","b"),q("strong"));this.luckyMushroomTimeout+=Math.floor(4+Math.random()*5);return!0};c.prototype.makeBlind=function(){if(this.blindTimeout===0)this.blind=
!0,this.sightRadius=1.5,j("you can hardly see!");this.blindTimeout+=Math.floor(10+Math.random()*12)};c.prototype.handleTimeouts=function(){this.luckyMushroomTimeout>0&&(this.luckyMushroomTimeout--,this.luckyMushroomTimeout===0&&(this.experience/=2,j("you feel normal again.","b"),q("weak")));if(this.blindTimeout>0&&(this.blindTimeout--,this.blindTimeout===0))this.sightRadius=this.hasLamp?6:4,j("your eyes are better again.")};c.prototype.goUp=function(){if(this.level.getType(this.x,this.y)==="<")return this.dungeon.goUp(this),
!0};c.prototype.goDown=function(){if(this.level.getType(this.x,this.y)===">")return this.dungeon.goDown(this),this.maxDepth=Math.max(this.maxDepth,this.level.depth),!0};return c}();D=function(){function c(a,b,c){var d;if(c){c=i.x+a;for(d=i.y+b;i.level.isOpen(c,d);)e.push(["move",a,b]),c+=a,d+=b}else e.push(["move",a,b])}function b(a){var b,c,d;for(b=0;b<a.length;b++)b>0&&e.push(["move",a[b][0]-c,a[b][1]-d]),c=a[b][0],d=a[b][1]}function a(a){var b;for(b=0;b<(a?10:1);b++)e.push(["wait"]);a&&e.push(["autowait"])}
function f(b){var d;if(!b.ctrlKey&&!b.altKey){if(b.key&&b.key!=="Unidentified")d={Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown"}[b.key]||b.key;else if(!(d={12:"Clear",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown"}[b.which])){d=b.shiftKey;var f=String.fromCharCode(b.which).toLowerCase();d&&(f={"<":">"}[f]||f.toUpperCase());d=f}e=[];t&&(t[d]&&e.push(t[d]),t=!1,p.clearTargets(),d="");switch(d){case "1":case "End":case "b":case "B":c(-1,
1,b.shiftKey);break;case "2":case "ArrowDown":case "j":case "J":c(0,1,b.shiftKey);break;case "3":case "PageDown":case "n":case "N":c(1,1,b.shiftKey);break;case "4":case "ArrowLeft":case "h":case "H":c(-1,0,b.shiftKey);break;case "5":case "Clear":case ".":case "w":case "W":a(b.shiftKey);break;case "6":case "ArrowRight":case "l":case "L":c(1,0,b.shiftKey);break;case "7":case "Home":case "y":case "Y":c(-1,-1,b.shiftKey);break;case "8":case "ArrowUp":case "k":case "K":c(0,-1,b.shiftKey);break;case "9":case "PageUp":case "u":case "U":c(1,
-1,b.shiftKey);break;case "<":e.push(["goUp"]);break;case ">":e.push(["goDown"]);break;case "e":e.push(["eat"]);break;case "f":e.push(["attack"]);break;case "m":e.push(["sound"]);break;case "Q":e.push(["quit"]);break;case "x":e.push(["autoexplore"])}b.preventDefault();g()}}function h(a){var c,d,f;r||(c=p.getTile(a.clientX,a.clientY),a=c[0],c=c[1],e=[],i.level.hasBeenSeen(a,c)?i.level.isOpen(a,c)?i.canSee(a,c)&&i.level.monsterAt(a,c)?Math.abs(a-i.x)<=1&&Math.abs(c-i.y)<=1?e.push(["move",a-i.x,c-i.y]):
e.push(["attack",a,c]):i.x===a&&i.y===c?(d=i.level.getType(a,c),d!=="<"&&d!==">"&&e.push(["wait"])):(d=i.level.getType(a,c),f=i.level.findPath(i.x,i.y,a,c,!0)):j("you cannot go there."):j("you don\u2019t know how to go there."),f&&b(f),d===">"?e.push(["goDown"]):d==="<"&&e.push(["goUp"]),g())}function d(a){a.target.className==="mushroom"&&(e.push(["eat"]),g())}function g(){var c,d=!1,f,h,k;for(clearTimeout(l);!d;){if(e.length===0)return;c=e.shift();if(r&&!(c[0]==="sound"||c[0]==="quit"))return;switch(c[0]){case "move":(d=
i.moveRel(c[1],c[2]))&&q("move");break;case "goUp":d=i.goUp();break;case "goDown":d=i.goDown();break;case "eat":d=i.eat();break;case "attack":if(c[1])for(f=0;f<i.level.visibleMonsters.length;f++)if(k=i.level.visibleMonsters[f],k.x===c[1]&&k.y===c[2])break;else k=null;else if(i.level.visibleMonsters.length>1){t={};for(f=0;f<i.level.visibleMonsters.length;f++)k=i.level.visibleMonsters[f],h=f<9?String(f+1):String.fromCharCode(97+f-9),t[h]=["attack",k.x,k.y],p.showTarget(k.x,k.y,h);k=null;j("pick the target (1\u2013"+
h+").")}else k=i.level.visibleMonsters[0];if(k){i.attack(k,!0);if(i.hasHorseshoe)i.usesHorseshoe=!0;d=!0}break;case "wait":d=!0;break;case "autowait":j("still waiting, press c to cancel.");a(!0);break;case "autoexplore":(c=i.level.autoexplore(i))?(b(c),e.push(["autoexplore"])):j("level completely explored.");break;case "sound":h=document.getElementById("sound");h.checked=!h.checked;break;case "quit":location.reload()}}j.async(!0);i.steps++;i.dungeon.spawnMonster(i);for(f=0;f<i.level.npc.length;f++)if(k=
i.level.npc[f],k.speed)for(k.movesLeft=(k.movesLeft||0)+1;k.movesLeft>=k.speed;)k.monsterAI(i),k.movesLeft-=k.speed;else k.monsterAI(i);i.handleTimeouts();i.usesHorseshoe=!1;j.async(!1);d=i.level.draw(p,i);p.runAnimations();j.clearQueue();d&&(e=[]);i.luckyCharms===7&&(j("you found all lucky charms and win the game.","b"),r=!0);!r&&i.health===0&&(j("you are out of luck and lose the game.","b"),r=!0);r&&(e=[],j(i.getResult()));e.length>0&&(l=setTimeout(g,s))}var e=[],l,t,s=200,i,r=!1,p=new w;return{init:function(a){p.loadSprites(function(){i=
a;document.addEventListener("keydown",f);p.canvas.addEventListener("click",h);document.getElementById("inv").addEventListener("click",d);i.level.draw(p,i);j("welcome. Find all seven lucky charms to win.","b")})}}}();(function(){function c(c){c=new B(c);c=new C(c);b.hidden=!0;a.hidden=!1;D.init(c)}var b=document.getElementById("start"),a=document.getElementById("game");document.getElementById("game-0").addEventListener("click",function(){c(0)});document.getElementById("game-1").addEventListener("click",
function(){c(1)})})()})();
