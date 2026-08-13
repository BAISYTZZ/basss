const projects = [
  {title:"Temuap — Digital Brand", desc:"Landing page modern untuk brand dengan fokus visual identity, responsive layout, dan conversion.", tags:["HTML","CSS","JavaScript"]},
  {title:"Network Dashboard", desc:"Konsep dashboard monitoring jaringan dengan statistik, status device, dan komponen data yang reusable.", tags:["React","UI/UX","API"]},
  {title:"Portfolio OS", desc:"Personal portfolio dengan nuansa developer, dark interface, micro-interactions, dan architecture siap dikembangkan.", tags:["Next.js","Design","Database"]}
];

const grid = document.querySelector("#projectGrid");
projects.forEach((p,i)=>{
  grid.insertAdjacentHTML("beforeend", `<article class="project reveal"><div class="project-index">0${i+1}</div><h3>${p.title}</h3><p>${p.desc}</p><div class="project-meta">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div></article>`);
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelector("#themeToggle").addEventListener("click",()=>{
  document.body.classList.toggle("light");
  document.querySelector("#themeToggle").textContent=document.body.classList.contains("light")?"☀":"☾";
});

const form=document.querySelector("#contactForm");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const data=Object.fromEntries(new FormData(form));
  const saved=JSON.parse(localStorage.getItem("portfolio_messages")||"[]");
  saved.push({...data,createdAt:new Date().toISOString()});
  localStorage.setItem("portfolio_messages",JSON.stringify(saved));
  document.querySelector("#formMessage").textContent="Pesan tersimpan. Backend API dapat dihubungkan ke database pada tahap berikutnya.";
  form.reset();
});

document.addEventListener("mousemove",e=>{
  const g=document.querySelector(".cursor-glow");
  g.style.left=e.clientX+"px";g.style.top=e.clientY+"px";
});
