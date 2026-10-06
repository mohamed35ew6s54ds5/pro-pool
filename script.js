/* ================= DATA ================= */


const testimonials = [
  {name:{ar:'user 1',en:'Eng. Fahad Al-Anzi'}, loc:{ar:'فيلا خاصة، الجهراء',en:'Private Villa, Jahra'}, img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80', q:{ar:'تجربة بروبول كانت استثنائية من أول اجتماع حتى تسليم المسبح. الدقة في التنفيذ والالتزام بالمواعيد أمر نادر.', en:'The PROPOOL experience was exceptional from our first meeting to handover. The precision and commitment to deadlines is rare to find.'}},
  {name:{ar:'user 2',en:'Mona Al-Rashid'}, loc:{ar:'السالمية',en:'Salmiya'}, img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80', q:{ar:'فريق محترف ولمسة تصميم فاخرة حقًا. مسبحنا أصبح نقطة الجذب الأساسية في المنزل.', en:'A truly professional team with a genuinely luxurious design touch. Our pool has become the centerpiece of the home.'}},
  {name:{ar:'user 3',en:'Eng. Abdullah Al-Sabah'}, loc:{ar:'بيان',en:'Bayan'}, img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80', q:{ar:'خدمة الصيانة الدورية غيّرت تجربتنا بالكامل، المياه دائمًا نقية والفريق دقيق جدًا في مواعيده.', en:'The recurring maintenance service completely changed our experience — the water is always crystal clear and the team is punctual.'}}
];

const pricing = [
  {name:{ar:'أساسية',en:'Basic'}, desc:{ar:'مناسبة للمسابح المنزلية الصغيرة',en:'Suited for small home pools'}, price:'25', feat:[{ar:'زيارة شهرية واحدة',en:'One monthly visit'},{ar:'فحص جودة المياه',en:'Water quality testing'},{ar:'تنظيف سطحي',en:'Surface cleaning'},{ar:'فحص المعدات الأساسي',en:'Basic equipment check'}]},
  {name:{ar:'احترافية',en:'Professional'}, desc:{ar:'الأكثر طلبًا لدى فلل الكويت',en:'Most popular for Kuwait villas'}, price:'45', featured:true, feat:[{ar:'زيارتان أسبوعيًا',en:'Two visits weekly'},{ar:'فحص شامل لجودة المياه',en:'Full water quality testing'},{ar:'تنظيف عميق للمسبح',en:'Deep pool cleaning'},{ar:'فحص وصيانة المعدات',en:'Equipment inspection & upkeep'},{ar:'تقرير شهري مفصل',en:'Detailed monthly report'}]},
  {name:{ar:'بريميوم',en:'Premium'}, desc:{ar:'للفلل والمنتجعات الفاخرة',en:'For luxury villas & resorts'}, price:'75', feat:[{ar:'زيارات غير محدودة',en:'Unlimited visits'},{ar:'فحص متقدم للمياه والكيمياء',en:'Advanced water chemistry testing'},{ar:'تنظيف وتلميع كامل',en:'Full cleaning & polishing'},{ar:'صيانة شاملة للمعدات',en:'Comprehensive equipment care'},{ar:'أولوية دعم 24/7',en:'Priority 24/7 support'}]}
];

const blogPosts = [
  {img:'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png', cat:{ar:'تصميم المسابح',en:'Pool Design'}, title:{ar:'5 اتجاهات تصميم تتصدر مسابح 2026',en:'5 Design Trends Leading Pools in 2026'}, date:{ar:'12 يونيو 2026',en:'June 12, 2026'}},
  {img:'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png', cat:{ar:'نصائح الصيانة',en:'Maintenance Tips'}, title:{ar:'كيف تحافظ على نقاء مياه مسبحك صيفًا',en:'Keeping Your Pool Water Pristine in Summer'}, date:{ar:'2 يونيو 2026',en:'June 2, 2026'}},
  {img:'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png', cat:{ar:'الحياة الفاخرة',en:'Luxury Outdoor Living'}, title:{ar:'كيف تحوّل حديقتك إلى منتجع خاص',en:'Turning Your Backyard into a Private Resort'}, date:{ar:'24 مايو 2026',en:'May 24, 2026'}},
  {img:'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png', cat:{ar:'تقنيات المسابح',en:'Pool Technology'}, title:{ar:'أنظمة الفلترة الذكية: مستقبل صيانة المسابح',en:'Smart Filtration: The Future of Pool Care'}, date:{ar:'10 مايو 2026',en:'May 10, 2026'}}
];

const galleryImgs = [
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png',
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png',
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png',
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png',
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png',
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png',
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png',
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png',
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png',
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png',
  'ChatGPT Image Jul 9, 2026, 11_05_08 PM.png'
];

const faqs = [
  {q:{ar:'كم يستغرق بناء مسبح فاخر في الكويت؟',en:'How long does it take to build a luxury pool in Kuwait?'}, a:{ar:'تتراوح المدة عادة بين 6 إلى 10 أسابيع حسب حجم المسبح والتشطيبات المطلوبة والظروف الجوية.', en:'It typically takes 6 to 10 weeks depending on pool size, finishing requirements and weather conditions.'}},
  {q:{ar:'هل تقدمون ضمانًا على أعمال الإنشاء؟',en:'Do you offer a warranty on construction work?'}, a:{ar:'نعم، نقدم ضمانًا شاملًا يغطي الهيكل الإنشائي والعزل والمعدات لمدة تصل إلى 10 سنوات.', en:'Yes, we offer a comprehensive warranty covering structure, waterproofing and equipment for up to 10 years.'}},
  {q:{ar:'هل يمكنكم ترميم مسبح قديم بدلًا من إنشاء مسبح جديد؟',en:'Can you renovate an old pool instead of building a new one?'}, a:{ar:'بالتأكيد، لدينا فريق متخصص في ترميم المسابح القديمة وتحديث التشطيبات والأنظمة بالكامل.', en:'Absolutely, we have a dedicated team specialized in renovating old pools and fully upgrading finishes and systems.'}},
  {q:{ar:'كيف تعمل خطط الصيانة الشهرية؟',en:'How do the monthly maintenance plans work?'}, a:{ar:'نقوم بزيارات دورية حسب الخطة المختارة تشمل فحص المياه، التنظيف، وصيانة المعدات مع تقرير دوري.', en:'We conduct scheduled visits per your chosen plan, including water testing, cleaning and equipment maintenance with regular reporting.'}},
  {q:{ar:'هل تقدمون استشارة تصميم مجانية؟',en:'Do you offer a free design consultation?'}, a:{ar:'نعم، نوفر استشارة أولية مجانية لفهم احتياجاتك وتقديم مقترح تصميم مبدئي.', en:'Yes, we provide a free initial consultation to understand your needs and present an initial design proposal.'}}
];

/* ================= RENDER ================= */
let currentLang = document.documentElement.lang;

function svgIcon(path){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"/></svg>`;}

function renderServices(){
  document.getElementById('servicesGrid').innerHTML = services.map(s=>`
    <div class="service-card reveal">
      <div class="service-icon">${svgIcon(s.icon)}</div>
      <h3 data-ar="${s.ar}" data-en="${s.en}">${currentLang==='ar'?s.ar:s.en}</h3>
      <p data-ar="${s.dar}" data-en="${s.den}">${currentLang==='ar'?s.dar:s.den}</p>
    </div>`).join('');
}

function renderProjects(){
  document.getElementById('projectsGrid').innerHTML = projects.map(p=>`
    <div class="project-card reveal">
      <img src="${p.img}" alt="${p.title.en}" loading="lazy">
      <div class="project-overlay">
        <span class="project-tag" data-ar="${p.tag.ar}" data-en="${p.tag.en}">${currentLang==='ar'?p.tag.ar:p.tag.en}</span>
        <h3 data-ar="${p.title.ar}" data-en="${p.title.en}">${currentLang==='ar'?p.title.ar:p.title.en}</h3>
        <div class="project-meta">
          <span data-ar="${p.loc.ar}" data-en="${p.loc.en}">📍 ${currentLang==='ar'?p.loc.ar:p.loc.en}</span>
          <span data-ar="${p.type.ar}" data-en="${p.type.en}">${currentLang==='ar'?p.type.ar:p.type.en}</span>
          <span>${p.date}</span>
        </div>
      </div>
    </div>`).join('');
}

function renderTestimonials(){
  document.getElementById('testTrack').innerHTML = testimonials.map(t=>`
    <div class="test-card reveal">
      <div class="stars">★★★★★</div>
      <div class="test-quote">"</div>
      <p data-ar="${t.q.ar}" data-en="${t.q.en}">${currentLang==='ar'?t.q.ar:t.q.en}</p>
      <div class="test-person">
        <img src="${t.img}" alt="${t.name.en}">
        <div>
          <div class="name" data-ar="${t.name.ar}" data-en="${t.name.en}">${currentLang==='ar'?t.name.ar:t.name.en}</div>
          <div class="loc" data-ar="${t.loc.ar}" data-en="${t.loc.en}">${currentLang==='ar'?t.loc.ar:t.loc.en}</div>
        </div>
      </div>
    </div>`).join('');
}

function renderPricing(){
  document.getElementById('pricingGrid').innerHTML = pricing.map(p=>`
    <div class="price-card reveal ${p.featured?'featured':''}">
      ${p.featured?`<div class="price-badge" data-ar="الأكثر طلبًا" data-en="Most Popular">الأكثر طلبًا</div>`:''}
      <div class="price-name" data-ar="${p.name.ar}" data-en="${p.name.en}">${currentLang==='ar'?p.name.ar:p.name.en}</div>
      <div class="price-desc" data-ar="${p.desc.ar}" data-en="${p.desc.en}">${currentLang==='ar'?p.desc.ar:p.desc.en}</div>
      <div class="price-amount">${p.price} <span>KWD</span></div>
      <div class="price-per" data-ar="شهريًا" data-en="per month">شهريًا</div>
      <ul class="price-features">
        ${p.feat.map(f=>`<li>${svgIcon('m9 12 2 2 4-4')}<span data-ar="${f.ar}" data-en="${f.en}">${currentLang==='ar'?f.ar:f.en}</span></li>`).join('')}
      </ul>
      <a href="#contact" class="btn ${p.featured?'btn-ghost':'btn-dark'} price-cta" data-ripple>
        <span data-ar="اختر هذه الخطة" data-en="Choose Plan">اختر هذه الخطة</span>
      </a>
    </div>`).join('');
}

function renderBlog(){
  document.getElementById('blogGrid').innerHTML = blogPosts.map(b=>`
    <a href="#" class="blog-card reveal">
      <div class="blog-img"><img src="${b.img}" alt="${b.title.en}" loading="lazy"></div>
      <div class="blog-body">
        <div class="blog-cat" data-ar="${b.cat.ar}" data-en="${b.cat.en}">${currentLang==='ar'?b.cat.ar:b.cat.en}</div>
        <h3 data-ar="${b.title.ar}" data-en="${b.title.en}">${currentLang==='ar'?b.title.ar:b.title.en}</h3>
        <div class="blog-date">${currentLang==='ar'?b.date.ar:b.date.en}</div>
      </div>
    </a>`).join('');
}

function renderGallery(){
  document.getElementById('masonryGrid').innerHTML = galleryImgs.map((g,i)=>`
    <div class="g-item reveal" data-idx="${i}">
      <img src="${g}" alt="Gallery ${i+1}" loading="lazy">
      <div class="g-overlay">${svgIcon('M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z')}</div>
    </div>`).join('');
}

function renderFaq(){
  document.getElementById('faqList').innerHTML = faqs.map((f,i)=>`
    <div class="faq-item reveal">
      <div class="faq-q"><span data-ar="${f.q.ar}" data-en="${f.q.en}">${currentLang==='ar'?f.q.ar:f.q.en}</span><div class="plus"></div></div>
      <div class="faq-a"><p data-ar="${f.a.ar}" data-en="${f.a.en}">${currentLang==='ar'?f.a.ar:f.a.en}</p></div>
    </div>`).join('');
  document.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click',()=>{
      const item=q.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });
}

function renderAll(){
  renderTestimonials(); renderPricing(); renderBlog(); renderGallery(); renderFaq();
  observeReveal();
  bindLightbox();
}

/* ================= I18N ================= */
function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang==='ar' ? 'rtl' : 'ltr';
  document.getElementById('langLabel').textContent = lang==='ar' ? 'English' : 'العربية';

  document.querySelectorAll('[data-ar]').forEach(el=>{
    const val = lang==='ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    if(val!==null) el.textContent = val;
  });
  document.querySelectorAll('[data-ar-ph]').forEach(el=>{
    const val = lang==='ar' ? el.getAttribute('data-ar-ph') : el.getAttribute('data-en-ph');
    if(val!==null) el.setAttribute('placeholder', val);
  });
  renderAll();
  localStorage.setItem('propool-lang', lang);
}

const langLabelEl = document.getElementById('langLabel');
if(langLabelEl) langLabelEl.textContent = lang==='ar' ? 'English' : 'العربية';
/* ================= THEME ================= */
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  const themeLabelEl = document.getElementById('themeLabel');
  if(themeLabelEl){
    themeLabelEl.setAttribute('data-ar', theme==='dark' ? 'الوضع الفاتح':'الوضع الداكن');
    themeLabelEl.setAttribute('data-en', theme==='dark' ? 'Light Mode':'Dark Mode');
    themeLabelEl.textContent = currentLang==='ar'
      ? (theme==='dark' ? 'الوضع الفاتح':'الوضع الداكن')
      : (theme==='dark' ? 'Light Mode':'Dark Mode');
  }
  localStorage.setItem('propool-theme', theme);
}
document.getElementById('themeToggle').addEventListener('click',()=>{
  const cur = document.documentElement.getAttribute('data-theme');
  applyTheme(cur==='dark' ? 'light' : 'dark');
});

/* ================= NAV ================= */
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll',()=>{
  mainNav.classList.toggle('scrolled', window.scrollY>20);
  document.getElementById('backTop').classList.toggle('show', window.scrollY>500);
  const bg = document.getElementById('heroBg');
  if(window.scrollY < window.innerHeight){
    bg.style.transform = `scale(1.08) translateY(${window.scrollY*0.25}px)`;
  }
});
document.getElementById('backTop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const menuFloat = document.getElementById('menuFloat');
const menuFloatPanel = document.getElementById('menuFloatPanel');
if(menuFloat && menuFloatPanel){
  const closeFloatMenu = ()=>{
    menuFloat.classList.remove('active');
    menuFloatPanel.classList.remove('open');
  };

  window.addEventListener('scroll',()=>{
    menuFloat.classList.toggle('show', window.scrollY>500);
    closeFloatMenu(); // يقفل القائمة مع أي سكرول
  },{passive:true});

  menuFloat.addEventListener('click',(e)=>{
    e.stopPropagation();
    menuFloat.classList.toggle('active');
    menuFloatPanel.classList.toggle('open');
  });

  // الضغط على أي مكان في الشاشة (برّه القائمة) يقفلها
  document.addEventListener('click',(e)=>{
    if(!menuFloatPanel.contains(e.target) && !menuFloat.contains(e.target)){
      closeFloatMenu();
    }
  });

  // اللمس على الموبايل
  document.addEventListener('touchstart',(e)=>{
    if(!menuFloatPanel.contains(e.target) && !menuFloat.contains(e.target)){
      closeFloatMenu();
    }
  },{passive:true});

  menuFloatPanel.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeFloatMenu));
}const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click',()=>{
  navLinks.classList.toggle('open');
  burger.classList.toggle('active');
});navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

/* ================= REVEAL ON SCROLL ================= */
function observeReveal(){
  const els = document.querySelectorAll('.reveal:not(.in), .reveal-scale:not(.in)');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.15});
  els.forEach(el=>io.observe(el));
}

/* ================= COUNTERS ================= */
function animateCounters(){
  document.querySelectorAll('.stat-num').forEach(el=>{
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix')||'';
    let cur = 0;
    const step = Math.max(1, Math.round(target/60));
    const timer = setInterval(()=>{
      cur += step;
      if(cur>=target){ cur=target; clearInterval(timer);}
      el.textContent = cur + suffix;
    },20);
  });
}
const statsIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ animateCounters(); statsIO.disconnect(); } });
},{threshold:.4});
statsIO.observe(document.querySelector('.stats'));

/* ================= BEFORE / AFTER SLIDER ================= */
const baWrap = document.getElementById('baWrap');
const baHandle = document.getElementById('baHandle');
const baAfter = document.querySelector('.ba-after');
let dragging=false;
function moveBa(x){
  const rect = baWrap.getBoundingClientRect();
  let pct = ((x-rect.left)/rect.width)*100;
  pct = Math.max(2,Math.min(98,pct));
  baHandle.style.left = pct+'%';
  if(document.documentElement.dir==='rtl'){
    baAfter.style.clipPath = `inset(0 ${100-pct}% 0 0)`;
  } else {
    baAfter.style.clipPath = `inset(0 0 0 ${pct}%)`;
  }
}
baHandle.addEventListener('mousedown',()=>dragging=true);
window.addEventListener('mouseup',()=>dragging=false);
window.addEventListener('mousemove',e=>{ if(dragging) moveBa(e.clientX); });
baHandle.addEventListener('touchstart',()=>dragging=true);
window.addEventListener('touchend',()=>dragging=false);
window.addEventListener('touchmove',e=>{ if(dragging) moveBa(e.touches[0].clientX); });

/* ================= LIGHTBOX ================= */
let lbIndex=0;
function bindLightbox(){
  document.querySelectorAll('.g-item').forEach(item=>{
    item.addEventListener('click',()=>{
      lbIndex = parseInt(item.getAttribute('data-idx'));
      openLightbox();
    });
  });
}
function openLightbox(){
  document.getElementById('lbImg').src = galleryImgs[lbIndex];
  document.getElementById('lightbox').classList.add('open');
}
document.getElementById('lbClose').addEventListener('click',()=>document.getElementById('lightbox').classList.remove('open'));
document.getElementById('lightbox').addEventListener('click',e=>{ if(e.target.id==='lightbox') e.currentTarget.classList.remove('open'); });
document.getElementById('lbNext').addEventListener('click',()=>{ lbIndex=(lbIndex+1)%galleryImgs.length; openLightbox(); });
document.getElementById('lbPrev').addEventListener('click',()=>{ lbIndex=(lbIndex-1+galleryImgs.length)%galleryImgs.length; openLightbox(); });

/* ================= FILTER BAR ================= */
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ================= RIPPLE ================= */
document.addEventListener('click',e=>{
  const btn = e.target.closest('[data-ripple]');
  if(!btn) return;
  const rect = btn.getBoundingClientRect();
  const circle = document.createElement('span');
  const size = Math.max(rect.width,rect.height);
  circle.style.width = circle.style.height = size+'px';
  circle.style.left = (e.clientX-rect.left-size/2)+'px';
  circle.style.top = (e.clientY-rect.top-size/2)+'px';
  circle.classList.add('ripple');
  btn.appendChild(circle);
  setTimeout(()=>circle.remove(),700);
});
/* ================= FORM → WHATSAPP ================= */
/* ================= FORM → GOOGLE SHEET + WHATSAPP ================= */
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('cfName').value.trim();
    const phone = document.getElementById('cfPhone').value.trim();
    const email = document.getElementById('cfEmail').value.trim();
    const message = document.getElementById('cfMessage').value.trim();

    // رابط Web App بتاع Google Apps Script
const sheetURL = 'https://script.google.com/macros/s/AKfycbwOGESaRMaBJdEWOrFyzqO1BcMTMMpL_uKcxEpIsEshk4bAMblXf-Rmdr7739ii9qvG/exec';
    fetch(sheetURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ name, phone, email, message })
    }).catch(err => console.log('Sheet error:', err));

    const text =
`مرحبًا propool، أنا ${name}
📱 الهاتف: ${phone}
✉️ البريد: ${email}
📝 الرسالة: ${message}`;

const whatsappNumber = '201024391262'; // ⚠️ رقم تجريبي مؤقت — رجّع 96555571687 بعد الاختبار
     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  });
}

/* ================= INIT ================= */
window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('preloader').classList.add('hide'),600);
});

renderAll();
applyLang(document.documentElement.lang);
applyTheme('light');
