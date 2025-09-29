// js/main.js - small UI behaviors
document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // mobile menu toggle
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=> {
      nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '8px';
    });
  }

  // simple play/pause for embedded YouTube (note: limited control due to cross-origin)
  const playBtn = document.getElementById('play');
  if(playBtn){
    playBtn.addEventListener('click', ()=> {
      // naive: toggle play/pause by reloading with autoplay param (demo only)
      const iframe = document.getElementById('ytplayer');
      if(!iframe) return;
      let src = iframe.src;
      if(src.includes('autoplay=1')){
        iframe.src = src.replace('autoplay=1','autoplay=0');
        playBtn.textContent = '▶';
      } else {
        if(src.includes('?')) src += '&autoplay=1'; else src += '?autoplay=1';
        iframe.src = src;
        playBtn.textContent = '⏸';
      }
    });
  }
});
