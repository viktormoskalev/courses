function isolatedpopup133(){const e=document.querySelectorAll(".popup133");for(let n=0;n<e.length;n++)e[n].addEventListener("click",t),e[n].addEventListener("keypress",t);function t(){this.classList.add("popup133-open")}}try{isolatedpopup133()}catch{}function isolatedswitchcard(){let e=document.querySelectorAll(".card-switch");function t(e){let t=window.innerHeight;(window.scrollY||window.pageYOffset)+t>e.getBoundingClientRect().top+scrollY&&e.classList.add("animated")}document.addEventListener("scroll",(function(){for(let n=0;n<e.length;n++)t(e[n])}));for(let n=0;n<e.length;n++)t(e[n]),e[n].addEventListener("click",(function(){e[n].classList.add("card-switch-open")})),e[n].addEventListener("keypress",(function(){e[n].classList.add("card-switch-open")}))}try{isolatedswitchcard()}catch{}function intervievFormContainer(e,t,n,r){let i=document.querySelector("."+r);const l=i.querySelector(".interview-question-number"),o=i.querySelector(".interview-question-text"),s=i.querySelector(".interview-answers"),c=i.querySelector(".interview-info-text"),a=i.querySelector(".interview-modal-error"),d=i.querySelector(".interview-modal-error-close"),u=i.querySelector(".interview-modal-continue"),p=i.querySelector(".interview-modal-continue-title"),y=i.querySelector(".interview-modal-continue-description"),f=i.querySelector(".interview-modal-continue-button");let v=0,L=0,g=[];function h(){if(t[v]){if("stop"!==t[v][0]){s.innerHTML="";for(let e=0;e<t[v].length-1;e++)s.innerHTML+=`  <input class="interview-answers-input"  type="radio" id="answer${e}" name="answers">`,s.innerHTML+=` <label class="interview-answers-label"  for="answer${e}">  ${t[v][e]} </label>`}"stop"==t[v][0]&&(s.innerHTML=t[v][1])}n[v]&&(c.innerHTML=n[v]),e[v]?(l.innerHTML=v+1,o.innerHTML=e[v],v++):s.innerHTML=g}f.addEventListener("click",(function(){u.style.opacity="0",u.style.pointerEvents="none","Continue"==f.innerHTML?(h(),L=0):(L++,L>1&&(h(),L=0))})),d.addEventListener("click",(function(){a.style.display="none"}));try{h()}catch(e){console.log(e+" no answers")}function w(e){e?(p.innerText="Correct",y.innerHTML="That is right. <br> You selected the correct response.",f.innerText="Continue",u.style.opacity="1",u.style.pointerEvents="all"):(p.innerText="Incorrect",y.innerHTML="That is incorrect. <br> Please try again",f.innerText="Try again",u.style.opacity="1",u.style.pointerEvents="all")}i.querySelector(".interview-button").addEventListener("click",(function(){let e=s.querySelectorAll("input"),n=!1;for(let t=0;t<e.length;t++)e[t].checked&&(n=t+1);n?n==t[v-1][t[v-1].length-1]?(g[v]=v+" Правильно  <br>",w(!0)):(g[v]=v+" Неправильно  <br>",w(!1)):a.style.display="flex"}));try{!function(){console.log("start");const e=i.querySelectorAll(".interview-drop-place"),t=i.querySelectorAll(".interview-drop");for(let t=0;t<e.length;t++)e[t].addEventListener("dragover",(function(e){e.preventDefault()})),e[t].addEventListener("drop",(function(e){let t=document.querySelector("."+e.dataTransfer.getData("class"));t.style.opacity=1,this.appendChild(t)}));for(let e=0;e<t.length;e++)t[e].addEventListener("dragstart",r);let n=0;function r(e){console.log(this.classList[this.classList.length-1]),e.dataTransfer.setData("class",this.classList[this.classList.length-1])}i.addEventListener("touchstart",(function(r){if(r.target.classList.contains("interview-drop")){for(let e=0;e<t.length;e++)t[e].classList.remove("fly-block"),t[e].classList.remove("fly-text");n=r.target,"P"!==r.target.tagName?r.target.classList.add("fly-block"):r.target.classList.add("fly-text");for(let r=0;r<e.length;r++)console.log(r),e[r].classList.add("place-animation"),e[r].addEventListener("touchstart",(function(r){r.target.appendChild(n);for(let e=0;e<t.length;e++)t[e].classList.remove("fly-block"),t[e].classList.remove("fly-text");for(let t=0;t<e.length;t++)e[t].classList.remove("place-animation")}))}r.target.classList.contains("interview-drop")&&console.log(1234)}))}()}catch(e){console.log("drag and drop: "+e)}}