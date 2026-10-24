// =============================================
// script.js — Jade Portfolio (dark violet redesign)
// =============================================

/* ---------- DATA ---------- */
const SOCIALS = [
  { name: 'Facebook',  icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/Jade.Ricafort6/' },
  { name: 'LinkedIn',  icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/rosella-jade-asetre-ricafort-169676296/' },
  { name: 'Instagram', icon: 'fab fa-instagram',  url: 'https://instagram.com/jadiellarose' },
  { name: 'TikTok',    icon: 'fab fa-tiktok',     url: 'https://www.tiktok.com/@strikersmileyjade' },
  { name: 'Discord',   icon: 'fab fa-discord',    url: 'https://discord.com/users/viperjaderose' },
  { name: 'GitHub',    icon: 'fab fa-github',     url: 'https://github.com/viperestjade' }
];

const SKILLS = [
  { title: 'UI/UX Design',          tools: [['Figma','figma'],['Canva','canva'],['Picsart','picsart'],['Mockup','mockup']] },
  { title: 'Graphic Design',        tools: [['Canva','canva'],['Picsart','picsart']] },
  { title: 'Programming Tools',     tools: [['VS Code','vscode'],['GitHub','github'],['RStudio','rstudio']] },
  { title: 'Programming Languages', tools: [['C++','c++'],['Java','java'],['Python','python']] },
  { title: 'Web Development',       tools: [['HTML','html'],['CSS','css'],['JavaScript','js'],['Django','django']] },
  { title: 'App Development',       tools: [['Flutter','flutter'],['Dart','dart'],['Android Studio','androidstudio']] },
  { title: 'Game Development',      tools: [['GameMaker Studio · GML','gamemaker']] },
  { title: 'Image Editing',         tools: [['Picsart','picsart'],['Snapseed','snapseed'],['Lightroom','lightroom']] },
  { title: 'Video Editing',         tools: [['CapCut','capcut'],['Filmora','filmora']] }
];

const PROJECT_GROUPS = [
  { category: 'Webpage Designs (Collaboration)', items: ['reelchoice', 'adnu-dekusu', 'pinmart'] },
  { category: 'Application Design (Collaboration)', items: ['explorific', 'emotion-diary'] },
  { category: 'StartUp Design (Solo)', items: ['stray'] },
  { category: 'Game Development Design (Collaboration)', items: ['echoes'] }
];

const projectData = {
  'reelchoice': {
    title: 'ReelChoice', tag: 'Webpage Design · Collaboration', banner: 'proj/reelchoice.png',
    desc: 'ReelChoice is a smart platform designed to simplify movie and TV show selection by recommending content based on user preferences, mood, and trusted ratings helping viewers avoid decision fatigue and save time.',
    links: [['View Project Presentation', 'https://canva.link/vhs3eculan331vq']],
    sections: [
      { heading: 'Overview', text: 'ReelChoice is a smart platform designed to simplify movie and TV show selection by recommending content based on user preferences, mood, and trusted ratings.' },
      { heading: 'Problem', text: 'Users spend excessive time browsing streaming platforms without deciding what to watch — commonly known as "decision fatigue." Existing platforms lack personalized, mood-based filtering.' },
      { heading: 'Solution', items: ['Mood-based recommendation engine', 'Integration of trusted rating aggregators (IMDb, Rotten Tomatoes)', 'Personalized watchlist and preference learning', 'Clean, distraction-free UI to reduce cognitive load'] },
      { heading: 'Key Features', items: ['Mood selector on homepage', 'Smart filters by genre, length, and rating', 'Collaborative watchlists for groups', 'Cross-platform streaming availability checker'] },
      { heading: 'Tools Used', text: 'Figma · Prototyping · UX Research · User Testing' }
    ]
  },
  'adnu-dekusu': {
    title: 'ADNU Dekusu', tag: 'Webpage Design · Collaboration', banner: 'proj/dekusu.png',
    desc: 'A centralized platform that improves campus navigation, communication, and access to information through an interactive map, reachable contacts, real-time updates, and organized FAQs.',
    links: [['View Project Presentation', 'https://canva.link/efp6smgg2cb75yu']],
    sections: [
      { heading: 'Overview', text: 'A centralized platform that improves campus navigation, communication, and access to information through an interactive map, reachable contacts, real-time updates, and organized FAQs.' },
      { heading: 'Problem', text: 'New students and visitors at ADNU struggle to locate offices, find contact information, and stay updated on campus announcements — all scattered across different channels.' },
      { heading: 'Solution', items: ['Interactive campus map with searchable locations', 'Centralized directory of offices and personnel', 'Real-time announcements and bulletin board', 'Organized FAQ system by department'] },
      { heading: 'Key Features', items: ['Clickable building map with room-level detail', 'Search bar for contacts, rooms, and FAQs', 'Mobile-responsive for on-the-go use', 'Admin panel for real-time content updates'] },
      { heading: 'Tools Used', text: 'Figma · Information Architecture · UX Research' }
    ]
  },
  'pinmart': {
    title: 'PinMart', tag: 'Webpage Design · Collaboration', banner: 'proj/pinmart.png',
    desc: 'PinMart is a platform where users discover, save, and shop furniture inspiration. It allows users to bookmark photos and videos into personalized collections for future reference. With its marketplace features, users can easily turn ideas into actual purchases.',
    links: [['View Project Presentation', 'https://canva.link/v9t5zss8aq5mekl']],
    sections: [
      { heading: 'Overview', text: 'PinMart is a platform where users discover, save, and shop furniture inspiration. Users can bookmark photos and videos into personalized collections and directly purchase items.' },
      { heading: 'Problem', text: 'Interior design inspiration is fragmented across Pinterest, Instagram, and e-commerce sites. Users cannot directly purchase items they discover on mood boards.' },
      { heading: 'Solution', items: ['Unified inspiration and shopping experience', 'Pinboard collections linked directly to product listings', 'Visual search to find similar furniture items', 'Integrated checkout without leaving the platform'] },
      { heading: 'Key Features', items: ['Drag-and-drop mood board builder', 'Shop-the-look feature on saved pins', 'Seller marketplace for local furniture shops', 'Price tracking and wishlist alerts'] },
      { heading: 'Tools Used', text: 'Figma · Interaction Design · E-commerce UX' }
    ]
  },
  'explorific': {
    title: 'Explorific', tag: 'Application Design · Collaboration', banner: 'proj/explorific.png',
    desc: 'Explorific is a smart travel guide for Naga City, helping users discover the best places to eat, drink, and relax through an interactive map, GPS navigation, and filtered searches by category, ratings, and amenities.',
    links: [['View Project Presentation', 'https://canva.link/mt54wl5ra127hki']],
    sections: [
      { heading: 'Overview', text: 'Explorific is a smart travel guide for Naga City, helping users discover the best places to eat, drink, and relax through an interactive map, GPS navigation, and filtered searches.' },
      { heading: 'Problem', text: 'Tourists and locals in Naga City lack a dedicated, up-to-date guide to discover establishments by category, ratings, or specific amenities.' },
      { heading: 'Solution', items: ['Category-based discovery (food, cafes, recreation)', 'GPS-powered navigation to any listed spot', 'Filter by ratings, distance, and amenities', 'User-submitted reviews and photos'] },
      { heading: 'Key Features', items: ['Interactive map with real-time location', 'Curated "Best of Naga" collections', 'Offline access for saved places', 'Business profile pages with full details'] },
      { heading: 'Tools Used', text: 'Figma · Mobile UX · Map Integration Design' }
    ]
  },
  'emotion-diary': {
    title: 'Emotion Diary', tag: 'Application Design · Collaboration', banner: 'proj/emotiondiary.png',
    desc: 'Emotion Diary is a mood-tracking app that helps users monitor their emotional well-being. It lets users select emotions and add short personal messages, and includes a History View to review past entries, track patterns, and reflect over time.',
    links: [['View Figma Design', 'https://www.figma.com/design/lcmtFOlbQIP1E3n2sak60v/DailyMoodApp_Group4?node-id=0-1&t=EwC1P9FOp2PbfE3L-1']],
    sections: [
      { heading: 'Overview', text: 'Emotion Diary is a mood-tracking app that helps users monitor their emotional well-being by logging emotions, adding personal notes, and reviewing patterns over time.' },
      { heading: 'Problem', text: 'Many people struggle to identify and articulate their emotions daily. Existing journaling apps are text-heavy and lack visual emotional pattern tracking.' },
      { heading: 'Solution', items: ['Visual emotion selector with intuitive iconography', 'Optional short message per entry for context', 'History view with timeline and pattern insights', 'Minimal, calming UI to reduce journaling friction'] },
      { heading: 'Key Features', items: ['Daily emotion check-in with one tap', 'Weekly and monthly mood trend charts', 'Private entries with passcode lock', 'Gentle reminders to log emotions'] },
      { heading: 'Tools Used', text: 'Figma · Mental Health UX · Interaction Design' }
    ]
  },
  'stray': {
    title: 'STRAY', tag: 'StartUp Design · Solo', banner: 'proj/stray.png',
    desc: 'STRAY is a web and app platform dedicated to rescuing, treating, and rehoming stray animals, building a better future for animals and communities.',
    links: [['View Branding', 'https://canva.link/518gb3fa5p3v6hh'], ['View Presentation', 'https://canva.link/3mbeo6dyzguyeso']],
    sections: [
      { heading: 'Overview', text: 'STRAY is a web and app platform dedicated to rescuing, treating, and rehoming stray animals, building a better future for animals and communities.' },
      { heading: 'Problem', text: 'Stray animal rescue efforts are disorganized and siloed. Rescuers, veterinarians, and adopters have no unified platform to coordinate care, track animals, or facilitate adoptions.' },
      { heading: 'Solution', items: ['Centralized rescue coordination and case tracking', 'Adoption listings with animal profiles and medical history', 'Volunteer and donor management system', 'Community reporting for stray sightings'] },
      { heading: 'Key Features', items: ['Animal profile cards with health and rescue status', 'Map-based stray sighting reports', 'Adoption matching based on lifestyle preferences', 'Fundraising module for medical treatments'] },
      { heading: 'Tools Used', text: 'Figma · End-to-end Product Design · Social Impact UX' }
    ]
  },
  'echoes': {
    title: 'Echoes of Hope', tag: 'Game Development Design · Collaboration', banner: 'proj/echoesofhope.png',
    desc: 'Echoes of Hope is a game where a student must decide how to face a three-day struggle with depression, revealing the power of choices, empathy, and seeking help.',
    links: [['View Poster', 'https://canva.link/f26dss3zilih76f']],
    sections: [
      { heading: 'Overview', text: 'Echoes of Hope is a narrative game where a student must decide how to face a three-day struggle with depression, revealing the power of choices, empathy, and seeking help.' },
      { heading: 'Problem', text: 'Mental health conversations among students are still stigmatized. Traditional awareness campaigns fail to create genuine emotional engagement or behavioral change.' },
      { heading: 'Solution', items: ['Story-driven gameplay where choices have real consequences', 'Multiple endings based on whether the character seeks help', 'Empathy-building through first-person perspective', 'Post-game resources and mental health hotlines'] },
      { heading: 'Key Features', items: ['Branching narrative with 3 distinct endings', 'Day-by-day emotional arc with decision points', 'Visual novel art style for emotional immersion', 'In-game journaling mechanic reflecting character thoughts'] },
      { heading: 'Tools Used', text: "Figma · Game UI Design · Narrative Design · Ren'Py" }
    ]
  }
};

/* ---------- RENDER ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

// socials
const socialsHTML = SOCIALS.map(s =>
  `<a href="${s.url}" class="social-icon" target="_blank" rel="noopener" aria-label="${s.name}"><i class="${s.icon}"></i></a>`
).join('');
['heroSocials', 'contactSocials', 'footerSocials'].forEach(id => { const el = document.getElementById(id); if (el) el.innerHTML = socialsHTML; });

// skills
$('#skillsGrid').innerHTML = SKILLS.map((g, i) => `
  <div class="glass-card skill-group reveal reveal-delay-${(i % 3) + 1}">
    <h3>${g.title}</h3>
    <div class="tool-list">
      ${g.tools.map(([name, file]) => `
        <div class="tool"><img src="applogo/icon-${file}.png" alt="${name}" onerror="this.style.visibility='hidden'" /><span>${name}</span></div>`).join('')}
    </div>
  </div>`).join('');

// projects
$('#projectsWrap').innerHTML = PROJECT_GROUPS.map(g => `
  <h3 class="projects-category reveal">${g.category}</h3>
  <div class="projects-list">
    ${g.items.map((id, i) => {
      const p = projectData[id];
      return `
      <div class="glass-card project-card reveal reveal-delay-${(i % 3) + 1}" data-project="${id}">
        <div class="project-thumb"><img src="${p.banner}" alt="${p.title}" onerror="this.style.display='none'" /></div>
        <div class="project-body">
          <h4 class="project-name">${p.title}</h4>
          <p class="project-desc">${p.desc}</p>
          <div class="project-links">
            ${p.links.map(([label, url]) => `<a href="${url}" class="project-link" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${label}</a>`).join('')}
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`).join('');

// galleries (duplicated once for seamless loop)
$$('.gallery-track').forEach(track => {
  const { folder, prefix, count } = track.dataset;
  const cards = Array.from({ length: +count }, (_, i) =>
    `<div class="gallery-card"><img src="${folder}/${prefix}${i + 1}.png" alt="" loading="lazy" onerror="this.parentElement.style.display='none'" /></div>`
  ).join('');
  track.innerHTML = cards + cards;
});

/* ---------- THEME ---------- */
const themeIcon = $('#themeIcon');
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeIcon.textContent = '☀';
}
$('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  themeIcon.textContent = light ? '☀' : '☾';
  localStorage.setItem('theme', light ? 'light' : 'dark');
});

/* ---------- MISC ---------- */
$('#year').textContent = new Date().getFullYear();

const navLinks = $('#navLinks');
$('#hamburger').addEventListener('click', () => navLinks.classList.toggle('open'));
$$('a', navLinks).forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => revealObserver.observe(el));
$$('#home .reveal').forEach(el => el.classList.add('visible'));

// shortcuts
const NAV_OFFSET = 90;
$$('.shortcut-btn').forEach(btn => btn.addEventListener('click', () => {
  const t = document.getElementById(btn.dataset.target);
  if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - NAV_OFFSET + 60, behavior: 'smooth' });
}));

// scroll spy + scroll-top
const sections = $$('section[id]');
const navItems = $$('.nav-links a[href^="#"]');
const shortcutBtns = $$('.shortcut-btn');
const scrollTopBtn = $('#scrollTop');
const navMap = { education: 'about', experiences: 'skills' }; // sub-sections highlight their parent tab

function onScroll() {
  let current = 'home';
  sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - NAV_OFFSET - 40) current = sec.id; });
  const navTarget = navMap[current] || current;
  navItems.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + navTarget));
  shortcutBtns.forEach(b => b.classList.toggle('active-shortcut', b.dataset.target === current));
  scrollTopBtn.classList.toggle('show', window.scrollY > 300);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// coming soon fallback
const csImg = $('.coming-soon img'), csFallback = $('.coming-soon-fallback');
csImg.addEventListener('error', () => { csImg.style.display = 'none'; csFallback.style.display = 'block'; });
if (csImg.complete && csImg.naturalWidth === 0) csImg.dispatchEvent(new Event('error'));

/* ---------- DOWNLOAD MODAL ---------- */
const downloadModal = $('#downloadModal');
const closeDownload = () => { downloadModal.classList.remove('active'); document.body.style.overflow = ''; };
$('#resumeBtn').addEventListener('click', () => { downloadModal.classList.add('active'); document.body.style.overflow = 'hidden'; });
$('#modalCancel').addEventListener('click', closeDownload);
downloadModal.addEventListener('click', e => { if (e.target === downloadModal) closeDownload(); });
$('#downloadResumeBtn').addEventListener('click', () => { $('#resumeDownloadLink').click(); closeDownload(); });
$('#downloadCvBtn').addEventListener('click', () => { $('#cvDownloadLink').click(); closeDownload(); });

/* ---------- PROJECT MODAL ---------- */
const projModal = $('#projModal');
function openProject(id) {
  const d = projectData[id];
  if (!d) return;
  $('#projTitle').textContent = d.title;
  $('#projTag').textContent = d.tag;
  const img = $('#projBanner');
  img.style.display = 'block';
  img.src = d.banner;
  img.alt = d.title;
  $('#projSections').innerHTML = d.sections.map(s => `
    <div class="proj-section">
      <h4>${s.heading}</h4>
      ${s.text ? `<p>${s.text}</p>` : ''}
      ${s.items ? `<ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
    </div>`).join('');
  projModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeProject() { projModal.classList.remove('active'); document.body.style.overflow = ''; }

$('#projectsWrap').addEventListener('click', e => {
  if (e.target.closest('a')) return; // let links open normally
  const card = e.target.closest('.project-card');
  if (card) openProject(card.dataset.project);
});
$('#projClose').addEventListener('click', closeProject);
projModal.addEventListener('click', e => { if (e.target === projModal) closeProject(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeProject(); closeDownload(); } });
