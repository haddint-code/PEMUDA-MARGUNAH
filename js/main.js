(function(){
const PAGES=[["index.html","Home","01"],["memories.html","Memories","02"],["merchandise.html","Merchandise","03"],["identity.html","Identity","04"]];
const cur=document.body.dataset.page;
const $=(s,r=document)=>r.querySelector(s),el=(h)=>{const t=document.createElement("template");t.innerHTML=h.trim();return t.content.firstChild};
const esc=s=>String(s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* header & footer */
document.body.prepend(el(`<header class="hd"><div class="wrap"><a class="brand" href="index.html"><img src="assets/brand/logo.webp" alt="Logo Pemuda Margunah Brotherhood"><span>Margunah</span></a>
<button class="bg" aria-label="Menu">MENU</button><nav class="nav">${PAGES.map(p=>`<a href="${p[0]}" class="${p[0]===cur?"on":""}">${p[1]}</a>`).join("")}</nav></div></header>`));
document.body.append(el(`<footer><div class="wrap"><img src="assets/brand/logo.webp" alt=""><span>Pemuda Margunah Brotherhood — Arsip digital komunitas</span><span>Dari pemuda untuk pemuda pemudi</span></div></footer>`));
const hd=$(".hd"),nav=$(".nav");
$(".bg").onclick=()=>nav.classList.toggle("o");
nav.onclick=e=>{if(e.target.tagName==="A")nav.classList.remove("o")};
const sc=()=>hd.classList.toggle("s",scrollY>30);sc();addEventListener("scroll",sc,{passive:true});

/* lightbox */
const dlg=el(`<dialog><button>TUTUP ✕</button><div class="in"><div><img alt=""><p></p></div></div></dialog>`);document.body.append(dlg);
const open=(src,t)=>{$("img",dlg).src=src;$("img",dlg).alt=t||"";$("p",dlg).textContent=t||"";dlg.showModal()};
dlg.onclick=e=>{if(e.target!==$("img",dlg))dlg.close()};
document.addEventListener("click",e=>{const z=e.target.closest("[data-zoom]");if(z)open(z.dataset.zoom,z.dataset.cap)});

/* renderers */
const photo=(i,full)=>`<figure class="ph-i rv" style="aspect-ratio:${i.ratio}" data-zoom="${i.src}" data-cap="${esc(i.caption||i.alt)}"><img src="${i.src}" alt="${esc(i.alt)}" loading="lazy">${i.caption?`<figcaption>${esc(i.caption)}</figcaption>`:""}</figure>`;
const RAT=["4/5","1/1","3/4","4/3","3/4","1/1"];
const slot=(n,r,label)=>`<div class="slot rv" style="aspect-ratio:${r}"><span><b>${String(n).padStart(2,"0")}</b>${label}</span></div>`;

const M=$("#memories");
if(M){M.innerHTML=MEMORIES.map(y=>{
  const n=y.items.length,fill=Math.max(0,y.slots-n);
  return `<section class="year sec" id="y${y.year}"><div class="wrap"><div class="big" aria-hidden="true">${y.year}</div>
  <div class="row"><h2>Tahun ${y.year}</h2><div><p style="color:var(--mute)">${esc(y.note)}</p><span class="cnt">${n} foto · ${fill} slot kosong</span></div></div>
  <div class="mas">${y.items.map(i=>photo(i)).join("")}${Array.from({length:fill},(_,k)=>slot(n+k+1,RAT[(n+k)%RAT.length],"Slot foto")).join("")}</div></div></section>`}).join("");
  const yn=$("#yn");if(yn)yn.innerHTML=MEMORIES.map(y=>`<a href="#y${y.year}">${y.year}</a>`).join("");}

const MC=$("#merch");
if(MC){MC.innerHTML=MERCH.map(c=>{
  const fill=Math.max(0,(c.slots||0)-c.items.length);
  const cards=c.items.map(i=>`<article class="card rv"><div class="im" style="aspect-ratio:${i.ratio}" data-zoom="${i.src}" data-cap="${esc(i.name)}"><img src="${i.src}" alt="${esc(i.name)}" loading="lazy"></div><div class="tx"><h3>${esc(i.name)}</h3><p>${esc(i.desc)}</p></div></article>`).join("");
  const empty=Array.from({length:fill},(_,k)=>`<div class="card slot rv" style="aspect-ratio:4/5"><span><b>${String(c.items.length+k+1).padStart(2,"0")}</b>Slot foto produk</span></div>`).join("");
  const v=c.video?`<div class="vid rv"><video controls preload="metadata" playsinline poster="${c.video.poster}" src="${c.video.src}"></video><div><span class="eyebrow">Video</span><h3>${esc(c.video.title)}</h3><p>${esc(c.video.desc)}</p></div></div>`
    :`<div class="vid rv"><div class="slot"><span>Slot video</span></div><div><span class="eyebrow">Video</span><h3>Video segera hadir</h3><p>Tambahkan video lewat <code>js/data.js</code> pada bagian <code>video</code>.</p></div></div>`;
  return `<div class="cat" id="${c.id}"><div class="sech"><h2>${esc(c.title)}</h2><p>${esc(c.intro)}</p></div><div class="mgrid">${cards}${empty}</div>${v}</div>`}).join("");}

const F=$("#featured");if(F){F.innerHTML=FEATURED.map(i=>photo(MEMORIES[0].items[i])).filter(Boolean).join("")}
const MP=$("#merchPreview");if(MP){MP.innerHTML=MERCH[0].items.map(i=>`<article class="card rv"><a href="merchandise.html#kaos"><div class="im" style="aspect-ratio:1/1.15"><img src="${i.src}" alt="${esc(i.name)}" loading="lazy"></div><div class="tx"><h3>${esc(i.name)}</h3></div></a></article>`).join("")}

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(n=>io.observe(n));
})();
