document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".nav_depth1 .list_depth1").forEach((e,t)=>{e.addEventListener("mouseenter",function(){this.classList.add("active")}),e.addEventListener("mouseleave",function(){this.classList.remove("active")})});var e=document.querySelector(".btn_open_search"),t=document.querySelector(".search_close");let n=document.querySelector(".search_area"),a=document.querySelector("header"),i=!1,s=e=>{e?(i=e,n.classList.add("active"),a.classList.add("dimed")):(i=e,n.classList.remove("active"),a.classList.remove("dimed"))};e.addEventListener("click",()=>s(!0)),t.addEventListener("click",()=>s(!1));new Swiper(".banner",{slidesPerView:1,loop:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})});