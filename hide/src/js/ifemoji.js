const getTextFeature=(t,e)=>{try{var r=document.createElement("canvas"),a=(r.width=2,r.height=2,r.getContext("2d")),i=(a.textBaseline="top",a.font="100px sans-serif",a.fillStyle=e,a.scale(.01,.01),a.fillText(t,0,0),a.getImageData(0,0,2,2).data),n=[];for(let t=0;t<i.length;t++)n[t]=i[t];return 0<n.reduce((t,e)=>t+e,0)&&n.toString()}catch(t){return!1}},distribute=(t,e)=>{var r=getTextFeature(t,"#000");return e?r&&r===getTextFeature(t,"#FFF"):r},ifEmoji=t=>{var e=distribute("😁");return distribute(t,e)};