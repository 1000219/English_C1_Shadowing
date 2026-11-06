(() => {
 'use strict';
 const s=document.getElementById('unit-progress');
 if(!s)return;
 let state=null;
 try{state=JSON.parse(localStorage.getItem('english-c1-speaking-unit1-v2')||'null')}catch(e){}
 const d=new Date(),day=[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
 const today=state?.days?.[day];
 const allDays=Object.values(state?.days||{});
 const totalListens=allDays.reduce((acc,entry)=>acc+Object.values(entry?.plays||{}).reduce((x,v)=>x+(Number(v)||0),0),0);
 const seen=Object.keys(state?.srs||{}).length;
 if(seen||totalListens){s.textContent=`Tu recorrido: ${seen} expresiones revisadas · ${totalListens} escuchas completas. Puedes continuar donde lo dejaste.`;}
 const daily=document.getElementById('daily-selection');
 if(daily&&today?.selected?.length)daily.textContent=`${today.selected.length} expresiones en tu sesión de hoy`;
})();
