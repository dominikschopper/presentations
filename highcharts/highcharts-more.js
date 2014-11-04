/*
 Highcharts JS v4.0.4-modified ()

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(m,D){function K(a,b,c){this.init.call(this,a,b,c)}var P=m.arrayMin,Q=m.arrayMax,t=m.each,G=m.extend,o=m.merge,R=m.map,q=m.pick,y=m.pInt,p=m.getOptions().plotOptions,i=m.seriesTypes,u=m.extendClass,L=m.splat,r=m.wrap,M=m.Axis,z=m.Tick,I=m.Point,S=m.Pointer,T=m.CenteredSeriesMixin,A=m.TrackerMixin,v=m.Series,x=Math,E=x.round,B=x.floor,N=x.max,U=m.Color,s=function(){};G(K.prototype,{init:function(a,b,c){var d=this,e=d.defaultOptions;d.chart=b;if(b.angular)e.background={};d.options=a=o(e,a);
(a=a.background)&&t([].concat(L(a)).reverse(),function(a){var g=a.backgroundColor,b=c.userOptions,a=o(d.defaultBackgroundOptions,a);if(g)a.backgroundColor=g;a.color=a.backgroundColor;c.options.plotBands.unshift(a);b.plotBands=b.plotBands||[];b.plotBands.unshift(a)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:-Number.MAX_VALUE,
innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var H=M.prototype,z=z.prototype,V={getOffset:s,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:s,setCategories:s,setTitle:s},O={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,
labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){a=this.options=o(this.defaultOptions,this.defaultRadialOptions,a);if(!a.plotBands)a.plotBands=[]},getOffset:function(){H.getOffset.call(this);this.chart.axisOffset[this.side]=0;this.center=this.pane.center=T.getCenter.call(this.pane)},getLinePath:function(a,
b){var c=this.center,b=q(b,c[2]/2-this.offset);return this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],b,b,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){H.setAxisTranslation.call(this);if(this.center)this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0},beforeSetTickPositions:function(){this.autoConnect&&
(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){H.setAxisSize.call(this);if(this.isRadial){this.center=this.pane.center=m.CenteredSeriesMixin.getCenter.call(this.pane);if(this.isCircular)this.sector=this.endAngleRad-this.startAngleRad;this.len=this.width=this.height=this.center[2]*q(this.sector,1)/2}},getPosition:function(a,b){return this.postTranslate(this.isCircular?this.translate(a):0,q(this.isCircular?b:this.translate(a),this.center[2]/2)-this.offset)},
postTranslate:function(a,b){var c=this.chart,d=this.center,a=this.startAngleRad+a;return{x:c.plotLeft+d[0]+Math.cos(a)*b,y:c.plotTop+d[1]+Math.sin(a)*b}},getPlotBandPath:function(a,b,c){var d=this.center,e=this.startAngleRad,f=d[2]/2,g=[q(c.outerRadius,"100%"),c.innerRadius,q(c.thickness,10)],h=/%$/,l,n=this.isCircular;this.options.gridLineInterpolation==="polygon"?d=this.getPlotLinePath(a).concat(this.getPlotLinePath(b,!0)):(n||(g[0]=this.translate(a),g[1]=this.translate(b)),g=R(g,function(a){h.test(a)&&
(a=y(a,10)*f/100);return a}),c.shape==="circle"||!n?(a=-Math.PI/2,b=Math.PI*1.5,l=!0):(a=e+this.translate(a),b=e+this.translate(b)),d=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],g[0],g[0],{start:a,end:b,innerR:q(g[1],g[0]-g[2]),open:l}));return d},getPlotLinePath:function(a,b){var c=this,d=c.center,e=c.chart,f=c.getPosition(a),g,h,l;c.isCircular?l=["M",d[0]+e.plotLeft,d[1]+e.plotTop,"L",f.x,f.y]:c.options.gridLineInterpolation==="circle"?(a=c.translate(a))&&(l=c.getLinePath(0,a)):
(t(e.xAxis,function(a){a.pane===c.pane&&(g=a)}),l=[],a=c.translate(a),d=g.tickPositions,g.autoConnect&&(d=d.concat([d[0]])),b&&(d=[].concat(d).reverse()),t(d,function(f,c){h=g.getPosition(f,a);l.push(c?"L":"M",h.x,h.y)}));return l},getTitlePosition:function(){var a=this.center,b=this.chart,c=this.options.title;return{x:b.plotLeft+a[0]+(c.x||0),y:b.plotTop+a[1]-{high:0.5,middle:0.25,low:0}[c.align]*a[2]+(c.y||0)}}};r(H,"init",function(a,b,c){var j;var d=b.angular,e=b.polar,f=c.isX,g=d&&f,h,l;l=b.options;
var n=c.pane||0;if(d){if(G(this,g?V:O),h=!f)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else if(e)G(this,O),this.defaultRadialOptions=(h=f)?this.defaultRadialXOptions:o(this.defaultYAxisOptions,this.defaultRadialYOptions);a.call(this,b,c);if(!g&&(d||e)){a=this.options;if(!b.panes)b.panes=[];this.pane=(j=b.panes[n]=b.panes[n]||new K(L(l.pane)[n],b,this),n=j);n=n.options;b.inverted=!1;l.chart.zoomType=null;this.startAngleRad=b=(n.startAngle-90)*Math.PI/180;this.endAngleRad=l=(q(n.endAngle,
n.startAngle+360)-90)*Math.PI/180;this.offset=a.offset||0;if((this.isCircular=h)&&c.max===D&&l-b===2*Math.PI)this.autoConnect=!0}});r(z,"getPosition",function(a,b,c,d,e){var f=this.axis;return f.getPosition?f.getPosition(c):a.call(this,b,c,d,e)});r(z,"getLabelPosition",function(a,b,c,d,e,f,g,h,l){var n=this.axis,j=f.y,k=f.align,w=(n.translate(this.pos)+n.startAngleRad+Math.PI/2)/Math.PI*180%360;n.isRadial?(a=n.getPosition(this.pos,n.center[2]/2+q(f.distance,-25)),f.rotation==="auto"?d.attr({rotation:w}):
j===null&&(j=n.chart.renderer.fontMetrics(d.styles.fontSize).b-d.getBBox().height/2),k===null&&(k=n.isCircular?w>20&&w<160?"left":w>200&&w<340?"right":"center":"center",d.attr({align:k})),a.x+=f.x,a.y+=j):a=a.call(this,b,c,d,e,f,g,h,l);return a});r(z,"getMarkPath",function(a,b,c,d,e,f,g){var h=this.axis;h.isRadial?(a=h.getPosition(this.pos,h.center[2]/2+d),b=["M",b,c,"L",a.x,a.y]):b=a.call(this,b,c,d,e,f,g);return b});p.arearange=o(p.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}});i.arearange=u(i.area,{type:"arearange",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(a){var b=this.chart,c=this.xAxis.postTranslate(a.rectPlotX,this.yAxis.len-a.plotHigh);a.plotHighX=c.x-b.plotLeft;a.plotHigh=c.y-b.plotTop},getSegments:function(){var a=this;t(a.points,function(b){if(!a.options.connectNulls&&
(b.low===null||b.high===null))b.y=null;else if(b.low===null&&b.high!==null)b.y=b.high});v.prototype.getSegments.call(this)},translate:function(){var a=this,b=a.yAxis;i.area.prototype.translate.apply(a);t(a.points,function(a){var d=a.low,e=a.high,f=a.plotY;e===null&&d===null?a.y=null:d===null?(a.plotLow=a.plotY=null,a.plotHigh=b.translate(e,0,1,0,1)):e===null?(a.plotLow=f,a.plotHigh=null):(a.plotLow=f,a.plotHigh=b.translate(e,0,1,0,1))});this.chart.polar&&t(this.points,function(c){a.highToXY(c)})},
getSegmentPath:function(a){var b,c=[],d=a.length,e=v.prototype.getSegmentPath,f,g;g=this.options;var h=g.step;for(b=HighchartsAdapter.grep(a,function(a){return a.plotLow!==null});d--;)f=a[d],f.plotHigh!==null&&c.push({plotX:f.plotHighX||f.plotX,plotY:f.plotHigh});a=e.call(this,b);if(h)h===!0&&(h="left"),g.step={left:"right",center:"center",right:"left"}[h];c=e.call(this,c);g.step=h;g=[].concat(a,c);this.chart.polar||(c[0]="L");this.areaPath=this.areaPath.concat(a,c);return g},drawDataLabels:function(){var a=
this.data,b=a.length,c,d=[],e=v.prototype,f=this.options.dataLabels,g=f.align,h,l=this.chart.inverted;if(f.enabled||this._hasPointLabels){for(c=b;c--;)if(h=a[c],h.y=h.high,h._plotY=h.plotY,h.plotY=h.plotHigh,d[c]=h.dataLabel,h.dataLabel=h.dataLabelUpper,h.below=!1,l){if(!g)f.align="left";f.x=f.xHigh}else f.y=f.yHigh;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments);for(c=b;c--;)if(h=a[c],h.dataLabelUpper=h.dataLabel,h.dataLabel=d[c],h.y=h.low,h.plotY=h._plotY,h.below=!0,l){if(!g)f.align="right";
f.x=f.xLow}else f.y=f.yLow;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments)}f.align=g},alignDataLabel:function(){i.column.prototype.alignDataLabel.apply(this,arguments)},getSymbol:s,drawPoints:s});p.areasplinerange=o(p.arearange);i.areasplinerange=u(i.arearange,{type:"areasplinerange",getPointSpline:i.spline.prototype.getPointSpline});(function(){var a=i.column.prototype;p.columnrange=o(p.column,p.arearange,{lineWidth:1,pointRange:null});i.columnrange=u(i.arearange,{type:"columnrange",translate:function(){var b=
this,c=b.yAxis,d;a.translate.apply(b);t(b.points,function(a){var f=a.shapeArgs,g=b.options.minPointLength,h;a.tooltipPos=null;a.plotHigh=d=c.translate(a.high,0,1,0,1);a.plotLow=a.plotY;h=d;a=a.plotY-d;a<g&&(g-=a,a+=g,h-=g/2);f.height=a;f.y=h})},trackerGroups:["group","dataLabelsGroup"],drawGraph:s,pointAttrToOptions:a.pointAttrToOptions,drawPoints:a.drawPoints,drawTracker:a.drawTracker,animate:a.animate,getColumnMetrics:a.getColumnMetrics})})();p.gauge=o(p.line,{dataLabels:{enabled:!0,defer:!1,y:15,
borderWidth:1,borderColor:"silver",borderRadius:3,crop:!1,style:{fontWeight:"bold"},verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});A={type:"gauge",pointClass:u(I,{setState:function(a){this.state=a}}),angular:!0,drawGraph:s,fixedBox:!0,forceDL:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var a=this.yAxis,b=this.options,c=a.center;this.generatePoints();t(this.points,function(d){var e=o(b.dial,d.dial),f=y(q(e.radius,80))*c[2]/200,g=y(q(e.baseLength,
70))*f/100,h=y(q(e.rearLength,10))*f/100,l=e.baseWidth||3,n=e.topWidth||1,j=b.overshoot,k=a.startAngleRad+a.translate(d.y,null,null,null,!0);j&&typeof j==="number"?(j=j/180*Math.PI,k=Math.max(a.startAngleRad-j,Math.min(a.endAngleRad+j,k))):b.wrap===!1&&(k=Math.max(a.startAngleRad,Math.min(a.endAngleRad,k)));k=k*180/Math.PI;d.shapeType="path";d.shapeArgs={d:e.path||["M",-h,-l/2,"L",g,-l/2,f,-n/2,f,n/2,g,l/2,-h,l/2,"z"],translateX:c[0],translateY:c[1],rotation:k};d.plotX=c[0];d.plotY=c[1]})},drawPoints:function(){var a=
this,b=a.yAxis.center,c=a.pivot,d=a.options,e=d.pivot,f=a.chart.renderer;t(a.points,function(c){var b=c.graphic,l=c.shapeArgs,e=l.d,j=o(d.dial,c.dial);b?(b.animate(l),l.d=e):c.graphic=f[c.shapeType](l).attr({stroke:j.borderColor||"none","stroke-width":j.borderWidth||0,fill:j.backgroundColor||"black",rotation:l.rotation}).add(a.group)});c?c.animate({translateX:b[0],translateY:b[1]}):a.pivot=f.circle(0,0,q(e.radius,5)).attr({"stroke-width":e.borderWidth||0,stroke:e.borderColor||"silver",fill:e.backgroundColor||
"black"}).translate(b[0],b[1]).add(a.group)},animate:function(a){var b=this;if(!a)t(b.points,function(a){var d=a.graphic;d&&(d.attr({rotation:b.yAxis.startAngleRad*180/Math.PI}),d.animate({rotation:a.shapeArgs.rotation},b.options.animation))}),b.animate=null},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);v.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(a,b){v.prototype.setData.call(this,
a,!1);this.processData();this.generatePoints();q(b,!0)&&this.chart.redraw()},drawTracker:A&&A.drawTrackerPoint};i.gauge=u(i.line,A);p.boxplot=o(p.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-0.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",
whiskerWidth:2});i.boxplot=u(i.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:s,translate:function(){var a=this.yAxis,b=this.pointArrayMap;i.column.prototype.translate.apply(this);t(this.points,function(c){t(b,function(b){c[b]!==null&&(c[b+"Plot"]=a.translate(c[b],0,1,0,1))})})},drawPoints:function(){var a=
this,b=a.points,c=a.options,d=a.chart.renderer,e,f,g,h,l,n,j,k,w,i,m,J,p,o,r,u,v,s,x,y,A,z,F=a.doQuartiles!==!1,C=parseInt(a.options.whiskerLength,10)/100;t(b,function(b){w=b.graphic;A=b.shapeArgs;m={};o={};u={};z=b.color||a.color;if(b.plotY!==D)if(e=b.pointAttr[b.selected?"selected":""],v=A.width,s=B(A.x),x=s+v,y=E(v/2),f=B(F?b.q1Plot:b.lowPlot),g=B(F?b.q3Plot:b.lowPlot),h=B(b.highPlot),l=B(b.lowPlot),m.stroke=b.stemColor||c.stemColor||z,m["stroke-width"]=q(b.stemWidth,c.stemWidth,c.lineWidth),m.dashstyle=
b.stemDashStyle||c.stemDashStyle,o.stroke=b.whiskerColor||c.whiskerColor||z,o["stroke-width"]=q(b.whiskerWidth,c.whiskerWidth,c.lineWidth),u.stroke=b.medianColor||c.medianColor||z,u["stroke-width"]=q(b.medianWidth,c.medianWidth,c.lineWidth),j=m["stroke-width"]%2/2,k=s+y+j,i=["M",k,g,"L",k,h,"M",k,f,"L",k,l],F&&(j=e["stroke-width"]%2/2,k=B(k)+j,f=B(f)+j,g=B(g)+j,s+=j,x+=j,J=["M",s,g,"L",s,f,"L",x,f,"L",x,g,"L",s,g,"z"]),C&&(j=o["stroke-width"]%2/2,h+=j,l+=j,p=["M",k-y*C,h,"L",k+y*C,h,"M",k-y*C,l,"L",
k+y*C,l]),j=u["stroke-width"]%2/2,n=E(b.medianPlot)+j,r=["M",s,n,"L",x,n],w)b.stem.animate({d:i}),C&&b.whiskers.animate({d:p}),F&&b.box.animate({d:J}),b.medianShape.animate({d:r});else{b.graphic=w=d.g().add(a.group);b.stem=d.path(i).attr(m).add(w);if(C)b.whiskers=d.path(p).attr(o).add(w);if(F)b.box=d.path(J).attr(e).add(w);b.medianShape=d.path(r).attr(u).add(w)}})}});p.errorbar=o(p.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
whiskerWidth:null});i.errorbar=u(i.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:i.arearange?i.arearange.prototype.drawDataLabels:s,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||i.column.prototype.getColumnMetrics.call(this)}});p.waterfall=o(p.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333",dataLabels:{inside:!0},states:{hover:{lineWidthPlus:0}}});
i.waterfall=u(i.column,{type:"waterfall",upColorProp:"fill",pointArrayMap:["low","y"],pointValKey:"y",translate:function(){var a=this.options,b=this.yAxis,c,d,e,f,g,h,l,n,j,k=a.threshold,w=a.stacking;i.column.prototype.translate.apply(this);l=n=k;d=this.points;for(c=0,a=d.length;c<a;c++){e=d[c];h=this.processedYData[c];f=e.shapeArgs;j=(g=w&&b.stacks[(this.negStacks&&h<k?"-":"")+this.stackKey])?g[e.x].points[this.index+","+c]:[0,h];if(isNaN(e.y))e.y=h;g=N(l,l+e.y)+j[0];f.y=b.translate(g,0,1);e.isSum?
(f.y=b.translate(j[1],0,1),f.height=b.translate(j[0],0,1)-f.y):e.isIntermediateSum?(f.y=b.translate(j[1],0,1),f.height=b.translate(n,0,1)-f.y,n=j[1]):l+=h;f.height<0&&(f.y+=f.height,f.height*=-1);e.plotY=f.y=E(f.y)-this.borderWidth%2/2;f.height=N(E(f.height),0.001);e.yBottom=f.y+f.height;f=e.plotY+(e.negative?f.height:0);this.chart.inverted?e.tooltipPos[0]=b.len-f:e.tooltipPos[1]=f}},processData:function(a){var b=this.yData,c=this.points,d,e=b.length,f,g,h,l,n,j;g=f=h=l=this.options.threshold||0;
for(j=0;j<e;j++)n=b[j],d=c&&c[j]?c[j]:{},n==="sum"||d.isSum?b[j]=g:n==="intermediateSum"||d.isIntermediateSum?b[j]=f:(g+=n,f+=n),h=Math.min(g,h),l=Math.max(g,l);v.prototype.processData.call(this,a);this.dataMin=h;this.dataMax=l},toYData:function(a){if(a.isSum)return a.x===0?null:"sum";else if(a.isIntermediateSum)return a.x===0?null:"intermediateSum";return a.y},getAttribs:function(){i.column.prototype.getAttribs.apply(this,arguments);var a=this.options,b=a.states,c=a.upColor||this.color,a=m.Color(c).brighten(0.1).get(),
d=o(this.pointAttr),e=this.upColorProp;d[""][e]=c;d.hover[e]=b.hover.upColor||a;d.select[e]=b.select.upColor||c;t(this.points,function(a){if(a.y>0&&!a.options.color)a.pointAttr=d,a.color=c})},getGraphPath:function(){var a=this.data,b=a.length,c=E(this.options.lineWidth+this.borderWidth)%2/2,d=[],e,f,g;for(g=1;g<b;g++)f=a[g].shapeArgs,e=a[g-1].shapeArgs,f=["M",e.x+e.width,e.y+c,"L",f.x,e.y+c],a[g-1].y<0&&(f[2]+=e.height,f[5]+=e.height),d=d.concat(f);return d},getExtremes:s,drawGraph:v.prototype.drawGraph});
p.polygon=o(p.scatter,{marker:{enabled:!1}});i.polygon=u(i.scatter,{type:"polygon",fillGraph:!0,getSegmentPath:function(a){return v.prototype.getSegmentPath.call(this,a).concat("z")},drawGraph:v.prototype.drawGraph,drawLegendSymbol:m.LegendSymbolMixin.drawRectangle});p.bubble=o(p.scatter,{dataLabels:{formatter:function(){return this.point.z},inside:!0,style:{color:"white",textShadow:"0px 0px 3px black"},verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",states:{hover:{halo:{size:5}}},
tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0});A=u(I,{haloPath:function(){return I.prototype.haloPath.call(this,this.shapeArgs.r+this.series.options.states.hover.halo.size)}});i.bubble=u(i.scatter,{type:"bubble",pointClass:A,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],bubblePadding:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(a){var b=
this.options.marker,c=q(b.fillOpacity,0.5),a=a||b.fillColor||this.color;c!==1&&(a=U(a).setOpacity(c).get("rgba"));return a},convertAttribs:function(){var a=v.prototype.convertAttribs.apply(this,arguments);a.fill=this.applyOpacity(a.fill);return a},getRadii:function(a,b,c,d){var e,f,g,h=this.zData,l=[],n=this.options.sizeBy!=="width";for(f=0,e=h.length;f<e;f++)g=b-a,g=g>0?(h[f]-a)/(b-a):0.5,n&&g>=0&&(g=Math.sqrt(g)),l.push(x.ceil(c+g*(d-c))/2);this.radii=l},animate:function(a){var b=this.options.animation;
if(!a)t(this.points,function(a){var d=a.graphic,a=a.shapeArgs;d&&a&&(d.attr("r",1),d.animate({r:a.r},b))}),this.animate=null},translate:function(){var a,b=this.data,c,d,e=this.radii;i.scatter.prototype.translate.call(this);for(a=b.length;a--;)c=b[a],d=e?e[a]:0,c.negative=c.z<(this.options.zThreshold||0),d>=this.minPxSize/2?(c.shapeType="circle",c.shapeArgs={x:c.plotX,y:c.plotY,r:d},c.dlBox={x:c.plotX-d,y:c.plotY-d,width:2*d,height:2*d}):c.shapeArgs=c.plotY=c.dlBox=D},drawLegendSymbol:function(a,b){var c=
y(a.itemStyle.fontSize)/2;b.legendSymbol=this.chart.renderer.circle(c,a.baseline-c,c).attr({zIndex:3}).add(b.legendGroup);b.legendSymbol.isMarker=!0},drawPoints:i.column.prototype.drawPoints,alignDataLabel:i.column.prototype.alignDataLabel});M.prototype.beforePadding=function(){var a=this,b=this.len,c=this.chart,d=0,e=b,f=this.isXAxis,g=f?"xData":"yData",h=this.min,l={},n=x.min(c.plotWidth,c.plotHeight),j=Number.MAX_VALUE,k=-Number.MAX_VALUE,i=this.max-h,m=b/i,p=[];this.tickPositions&&(t(this.series,
function(b){var g=b.options;if(b.bubblePadding&&(b.visible||!c.options.chart.ignoreHiddenSeries))if(a.allowZoomOutside=!0,p.push(b),f)t(["minSize","maxSize"],function(a){var b=g[a],f=/%$/.test(b),b=y(b);l[a]=f?n*b/100:b}),b.minPxSize=l.minSize,b=b.zData,b.length&&(j=q(g.zMin,x.min(j,x.max(P(b),g.displayNegative===!1?g.zThreshold:-Number.MAX_VALUE))),k=q(g.zMax,x.max(k,Q(b))))}),t(p,function(a){var b=a[g],c=b.length,n;f&&a.getRadii(j,k,l.minSize,l.maxSize);if(i>0)for(;c--;)typeof b[c]==="number"&&
(n=a.radii[c],d=Math.min((b[c]-h)*m-n,d),e=Math.max((b[c]-h)*m+n,e))}),p.length&&i>0&&q(this.options.min,this.userMin)===D&&q(this.options.max,this.userMax)===D&&(e-=b,m*=(b+d-e)/b,this.min+=d/m,this.max+=e/m))};(function(){function a(a,b,c){a.call(this,b,c);if(this.chart.polar)this.closeSegment=function(a){var b=this.xAxis.center;a.push("L",b[0],b[1])},this.closedStacks=!0}function b(a,b){var c=this.chart,d=this.options.animation,e=this.group,j=this.markerGroup,k=this.xAxis.center,i=c.plotLeft,m=
c.plotTop;if(c.polar){if(c.renderer.isSVG)d===!0&&(d={}),b?(c={translateX:k[0]+i,translateY:k[1]+m,scaleX:0.001,scaleY:0.001},e.attr(c),j&&j.attr(c)):(c={translateX:i,translateY:m,scaleX:1,scaleY:1},e.animate(c,d),j&&j.animate(c,d),this.animate=null)}else a.call(this,b)}var c=v.prototype,d=S.prototype,e;c.toXY=function(a){var b,c=this.chart,d=a.plotX;b=a.plotY;a.rectPlotX=d;a.rectPlotY=b;d=(d/Math.PI*180+this.xAxis.pane.options.startAngle)%360;d<0&&(d+=360);a.clientX=d;b=this.xAxis.postTranslate(a.plotX,
this.yAxis.len-b);a.plotX=a.polarPlotX=b.x-c.plotLeft;a.plotY=a.polarPlotY=b.y-c.plotTop};c.orderTooltipPoints=function(a){if(this.chart.polar&&(a.sort(function(a,b){return a.clientX-b.clientX}),a[0]))a[0].wrappedClientX=a[0].clientX+360,a.push(a[0])};i.area&&r(i.area.prototype,"init",a);i.areaspline&&r(i.areaspline.prototype,"init",a);i.spline&&r(i.spline.prototype,"getPointSpline",function(a,b,c,d){var e,j,k,i,m,p,o;if(this.chart.polar){e=c.plotX;j=c.plotY;a=b[d-1];k=b[d+1];this.connectEnds&&(a||
(a=b[b.length-2]),k||(k=b[1]));if(a&&k)i=a.plotX,m=a.plotY,b=k.plotX,p=k.plotY,i=(1.5*e+i)/2.5,m=(1.5*j+m)/2.5,k=(1.5*e+b)/2.5,o=(1.5*j+p)/2.5,b=Math.sqrt(Math.pow(i-e,2)+Math.pow(m-j,2)),p=Math.sqrt(Math.pow(k-e,2)+Math.pow(o-j,2)),i=Math.atan2(m-j,i-e),m=Math.atan2(o-j,k-e),o=Math.PI/2+(i+m)/2,Math.abs(i-o)>Math.PI/2&&(o-=Math.PI),i=e+Math.cos(o)*b,m=j+Math.sin(o)*b,k=e+Math.cos(Math.PI+o)*p,o=j+Math.sin(Math.PI+o)*p,c.rightContX=k,c.rightContY=o;d?(c=["C",a.rightContX||a.plotX,a.rightContY||a.plotY,
i||e,m||j,e,j],a.rightContX=a.rightContY=null):c=["M",e,j]}else c=a.call(this,b,c,d);return c});r(c,"translate",function(a){a.call(this);if(this.chart.polar&&!this.preventPostTranslate)for(var a=this.points,b=a.length;b--;)this.toXY(a[b])});r(c,"getSegmentPath",function(a,b){var c=this.points;if(this.chart.polar&&this.options.connectEnds!==!1&&b[b.length-1]===c[c.length-1]&&c[0].y!==null)this.connectEnds=!0,b=[].concat(b,[c[0]]);return a.call(this,b)});r(c,"animate",b);r(c,"setTooltipPoints",function(a,
b){this.chart.polar&&G(this.xAxis,{tooltipLen:360});return a.call(this,b)});if(i.column)e=i.column.prototype,r(e,"animate",b),r(e,"translate",function(a){var b=this.xAxis,c=this.yAxis.len,d=b.center,e=b.startAngleRad,j=this.chart.renderer,k,i;this.preventPostTranslate=!0;a.call(this);if(b.isRadial){b=this.points;for(i=b.length;i--;)k=b[i],a=k.barX+e,k.shapeType="path",k.shapeArgs={d:j.symbols.arc(d[0],d[1],c-k.plotY,null,{start:a,end:a+k.pointWidth,innerR:c-q(k.yBottom,c)})},this.toXY(k),k.tooltipPos=
[k.plotX,k.plotY],k.ttBelow=k.plotY>d[1]}}),r(e,"alignDataLabel",function(a,b,d,e,i,j){if(this.chart.polar){a=b.rectPlotX/Math.PI*180;if(e.align===null)e.align=a>20&&a<160?"left":a>200&&a<340?"right":"center";if(e.verticalAlign===null)e.verticalAlign=a<45||a>315?"bottom":a>135&&a<225?"top":"middle";c.alignDataLabel.call(this,b,d,e,i,j)}else a.call(this,b,d,e,i,j)});r(d,"getIndex",function(a,b){var c,d=this.chart,e;d.polar?(e=d.xAxis[0].center,c=b.chartX-e[0]-d.plotLeft,d=b.chartY-e[1]-d.plotTop,c=
180-Math.round(Math.atan2(c,d)/Math.PI*180)):c=a.call(this,b);return c});r(d,"getCoordinates",function(a,b){var c=this.chart,d={xAxis:[],yAxis:[]};c.polar?t(c.axes,function(a){var e=a.isXAxis,f=a.center,i=b.chartX-f[0]-c.plotLeft,f=b.chartY-f[1]-c.plotTop;d[e?"xAxis":"yAxis"].push({axis:a,value:a.translate(e?Math.PI-Math.atan2(i,f):Math.sqrt(Math.pow(i,2)+Math.pow(f,2)),!0)})}):d=a.call(this,b);return d})})()})(Highcharts);