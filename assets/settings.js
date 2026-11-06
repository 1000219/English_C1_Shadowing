/* Ajustes compartidos: no requieren cuenta ni conexión. */
(() => {
  'use strict';
  const THEME_KEY='shadowing-theme-v1';
  const SIZE_KEY='shadowing-font-v1';
  const sizes=[100,112,125,138,150,175,200];
  const safeGet=(key)=>{try{return localStorage.getItem(key)}catch(e){return null}};
  const safeSet=(key,val)=>{try{localStorage.setItem(key,val)}catch(e){}};
  let theme=safeGet(THEME_KEY)==='dark'?'dark':'light';
  let size=Number(safeGet(SIZE_KEY))||100;
  if(!sizes.includes(size)) size=100;
  const apply=()=>{
    const root=document.documentElement;
    root.dataset.theme=theme;
    root.style.fontSize=size+'%';
    root.style.colorScheme=theme;
    document.querySelectorAll('[data-theme-toggle]').forEach(b=>{
      b.setAttribute('aria-pressed',String(theme==='dark'));
      b.textContent=theme==='dark'?'☀ Modo claro':'☾ Modo oscuro';
      b.setAttribute('aria-label',theme==='dark'?'Activar modo claro':'Activar modo oscuro');
    });
    document.querySelectorAll('[data-font-level]').forEach(el=>el.textContent=size+' %');
    document.querySelectorAll('[data-font-dec]').forEach(b=>b.disabled=size===sizes[0]);
    document.querySelectorAll('[data-font-inc]').forEach(b=>b.disabled=size===sizes[sizes.length-1]);
  };
  document.addEventListener('click',event=>{
    const btn=event.target.closest('button'); if(!btn)return;
    if(btn.hasAttribute('data-theme-toggle')){
      theme=theme==='dark'?'light':'dark';safeSet(THEME_KEY,theme);apply();
    }
    if(btn.hasAttribute('data-font-inc') || btn.hasAttribute('data-font-dec')){
      let i=sizes.indexOf(size)+(btn.hasAttribute('data-font-inc')?1:-1);
      size=sizes[Math.max(0,Math.min(i,sizes.length-1))];safeSet(SIZE_KEY,size);apply();
    }
    if(btn.hasAttribute('data-font-reset')){size=100;safeSet(SIZE_KEY,size);apply()}
  });
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true}); else apply();
})();
