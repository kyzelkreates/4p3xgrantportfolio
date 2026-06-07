
'use strict';

const projects = [
  {title:'4P3X Intelligent AI\u2122 Base Core Refactorable Project',url:'https://basev0.vercel.app/',status:'Fully working deployed demo/live product base',desc:'The original reusable modular foundation. Already refactored into 10 deployed variants. Can become a live system with backend configuration.'},
  {title:'TherapyLink\u2122',url:'https://therapylinkos.vercel.app/4p3x_carelink/ap3x/demo/index.html',status:'Live deployed demo/live product',desc:'Care, therapy support, check-in, and wellbeing workflow demonstration with demo/live product pathway. Grant fit: health, welfare, community support.'},
  {title:'AutoSkill OS\u2122',url:'https://autoskillos.vercel.app/ap3x/demo/index.html',status:'Live deployed demo/live product',desc:'Learning, automotive skills, training, progression, and structured knowledge platform variant. Grant fit: education, skills, training access.'},
  {title:"Big V's Best Routes Fleet OS\u2122",url:'https://bigvsfleetos.vercel.app/',status:'Live deployed demo/live product',desc:'Fleet, route, legal-safety, driver PWA, and compliance-oriented navigation system. Grant fit: transport safety, bridge-strike prevention, fleet compliance.'},
  {title:'ResponseLink OS\u2122',url:'https://responselinkosv1.vercel.app/',status:'Live deployed demo/live product',desc:'Community welfare, responder coordination, service-user check-in, and safety-first mobile support platform. Grant fit: welfare coordination, community response.'},
  {title:'CareerLink OS\u2122',url:'https://4p3xaiclos.vercel.app/',status:'Live deployed demo/live product',desc:'Career support, employment pathway, skills tracking, and AI-guided progression system. Grant fit: employment support, digital skills, career transitions.'},
  {title:'Recharge Burnout Recovery\u2122',url:'https://burnout-mh.vercel.app/ap3x/companion/index.html',status:'Live deployed demo/live product',desc:'Burnout recovery companion PWA showing wellbeing support, personal tracking, and guided support flows. Grant fit: mental health, wellbeing, prevention.'},
  {title:'Four Paws Training and Enrichment Academy\u2122',url:'https://fourpawsdemo.vercel.app/ap3x/demo/index.html#deploy',status:'Live deployed demo/live product',desc:'Dog training LMS, learning progression, course content, enrichment, and education platform pathway. Grant fit: education, specialist training, accessibility.'},
  {title:'Quantum Compliance OS\u2122',url:'https://4p3xaiqc.netlify.app/',status:'Live deployed demo/live product',desc:'Quantum readiness, audit, compliance, reporting, and business risk preparation platform. Grant fit: compliance, evidence capture, public-sector audit.'},
  {title:'TrustSheild OS\u2122',url:'https://4p3xaitsos.netlify.app/#/welcome',status:'Live deployed demo/live product',desc:'Reputation monitoring, crisis response, control dashboard, and PWA-driven response workflow platform. Grant fit: public safety, crisis coordination, safeguarding.'},
  {title:'Kyzel Clarity\u2122',url:'https://4p3xkyzelclarityai.netlify.app/',status:'Live deployed AI explainer PWA',desc:'Built to explain complex projects clearly. Dataset can be changed to support different products, subjects, organisations, or knowledge domains. Grant fit: digital inclusion, neurodivergent support, accessibility.'}
];

const uses = [
  {title:'Learning &amp; Training Platforms',text:'LMS systems, course portals, staff training, certification platforms, onboarding academies, and education products.',grantRoute:'Education &amp; skills grants, FE partnerships, apprenticeship providers.',links:[['V1 Base','https://basev0.vercel.app/'],['AutoSkill OS\u2122','https://autoskillos.vercel.app/ap3x/demo/index.html'],['Four Paws','https://fourpawsdemo.vercel.app/ap3x/demo/index.html#deploy']]},
  {title:'Health, Wellbeing &amp; Support Systems',text:'Therapy support, burnout recovery, welfare check-ins, service-user support, community response, and care coordination systems.',grantRoute:'Health, wellbeing, and mental health innovation grants.',links:[['TherapyLink\u2122','https://therapylinkos.vercel.app/4p3x_carelink/ap3x/demo/index.html'],['Recharge\u2122','https://burnout-mh.vercel.app/ap3x/companion/index.html'],['ResponseLink\u2122','https://responselinkosv1.vercel.app/']]},
  {title:'Fleet, Route &amp; Compliance Systems',text:'Driver PWAs, route planning, fleet compliance, bridge-strike prevention, vehicle profiles, and safety/legal route support.',grantRoute:'Transport safety grants, fleet safety pilots, local authority route safety.',links:[["Big V's Fleet OS\u2122",'https://bigvsfleetos.vercel.app/'],['V4 20 Base','https://4p3xv20base.vercel.app/#what']]},
  {title:'Business Operations &amp; Control Dashboards',text:'Operations dashboards, project rescue systems, task control, workflow centres, team coordination tools, and client systems.',grantRoute:'Business innovation, SME digitalisation, productivity improvement grants.',links:[['V3 10 Base','https://4p3x10base.vercel.app/'],['V4 20 Base','https://4p3xv20base.vercel.app/#what']]},
  {title:'AI Knowledge Assistants &amp; Explainer Systems',text:'Investor assistants, product explainers, onboarding bots, internal knowledge bases, education assistants, and public-facing AI guides.',grantRoute:'Digital inclusion, accessibility, neurodivergent support, public information grants.',links:[['Kyzel Clarity\u2122','https://4p3xkyzelclarityai.netlify.app/'],['V1 Base','https://basev0.vercel.app/']]},
  {title:'Compliance, Audit &amp; Evidence Systems',text:'Audit dashboards, evidence capture, legal-readiness, safeguarding records, compliance reporting, and reputation monitoring.',grantRoute:'Compliance innovation, public-sector audit, safeguarding systems grants.',links:[['Quantum Compliance\u2122','https://4p3xaiqc.netlify.app/'],['TrustSheild\u2122','https://4p3xaitsos.netlify.app/#/welcome'],['V5 50 Base','https://4p3x50base.vercel.app/']]},
  {title:'Multi-Agent AI Operating Systems',text:'Orchestrated AI systems where multiple bounded agents monitor data, explain risk, guide users, create reports, and support decisions.',grantRoute:'AI innovation grants, public-sector AI pilots, responsible AI programmes.',links:[['V5 50 Base','https://4p3x50base.vercel.app/'],['V6 100 Base','https://4p3x100baseconcept.vercel.app/#top']]},
  {title:'Public-Benefit Grant Pilots',text:'Any of the above variants can be turned into a grant-funded pilot. Demo mode becomes live mode with backend configuration, partner support, and grant funding.',grantRoute:'All major grant categories depending on sector selected.',links:[['Grant Plan','#grant'],['Public Benefit','#public-benefit'],['Safety','#safety']]},
  {title:'Council / Charity / Community Response',text:'Welfare visit coordination, community safety systems, digital inclusion tools, accessible information platforms, and local public-service workflows.',grantRoute:'Community resilience, charity tech, council innovation, digital inclusion.',links:[['ResponseLink\u2122','https://responselinkosv1.vercel.app/'],['Kyzel Clarity\u2122','https://4p3xkyzelclarityai.netlify.app/']]},
  {title:'Transport Safety / Bridge-Strike Prevention',text:'Specialist transport safety systems, vehicle profile management, route risk review, driver check-in, evidence capture, and supervisor oversight.',grantRoute:'Transport safety, rail infrastructure, local authority fleet safety, haulage training.',links:[["Big V's Fleet OS\u2122",'https://bigvsfleetos.vercel.app/'],['Safety Section','#safety']]}
];

// Render project grid
const projectGrid = document.getElementById('projectGrid');
if (projectGrid) {
  projectGrid.innerHTML = projects.map(p => `
    <article class="project-card card">
      <p class="status">${p.status}</p>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a href="${p.url}" target="_blank" rel="noopener noreferrer">Open live deployment \u2192</a>
    </article>`).join('');
}

// Render uses list
const usesList = document.getElementById('usesList');
if (usesList) {
  usesList.innerHTML = uses.map(u => `
    <article class="use-card card">
      <h3>${u.title}</h3>
      <p>${u.text}</p>
      <p class="small" style="color:var(--gold);margin-top:.5rem"><strong>Grant/pilot route:</strong> ${u.grantRoute}</p>
      <div class="use-links">${u.links.map(l => `<a href="${l[1]}" ${l[1].startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${l[0]}</a>`).join('')}</div>
    </article>`).join('');
}

// Mobile menu
document.querySelector('[data-menu-toggle]')?.addEventListener('click', () => {
  const nav = document.querySelector('[data-nav]');
  nav?.classList.toggle('open');
});

// AI Agent
const agentProfiles = {
  guide: {
    name: 'Portfolio Guide AI\u2122',
    intro: 'I can guide grant reviewers, investors, and partners around the 4P3X Verse\u2122 ecosystem. Ask me about the grant plan, public benefit, safety use cases, architecture, timeline, live projects, demo/live mode, or the founder story.'
  },
  contact: {
    name: 'Contact Capture AI\u2122',
    intro: 'I help capture serious interest from grant reviewers, funders, investors, partners, employers, clients, and technical reviewers. The contact form below stores your details locally in demo mode. Fields: name, organisation, email, phone, interest type, project interest, message, and consent.'
  },
  notify: {
    name: 'TextBee Notification AI\u2122',
    intro: 'I prepare lead notification workflows. In production, TextBee must be configured safely through Vercel environment variables and serverless routes. Do NOT expose API keys in frontend code. Set TEXTBEE_API_KEY, TEXTBEE_DEVICE_ID, and TEXTBEE_RECIPIENT as Vercel env vars. Deploy /api/textbee-lead.js for secure notifications.'
  }
};

let activeAgent = 'guide';
const output = document.getElementById('agentOutput');

function renderAgentIntro() {
  if (!output) return;
  output.innerHTML = `<div class="agent-msg"><strong>${agentProfiles[activeAgent].name}</strong><br>${agentProfiles[activeAgent].intro}</div>`;
  output.scrollTop = output.scrollHeight;
}
renderAgentIntro();

document.querySelectorAll('[data-agent]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-agent]').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed','true');
    activeAgent = btn.dataset.agent;
    renderAgentIntro();
  });
});

function agentReply(q) {
  const t = q.toLowerCase();
  if (activeAgent === 'contact') return 'The contact form below captures: name, organisation, email, phone, interest type (grant, safety pilot, partnership, etc.), project interest, message, and consent. In demo mode it stores locally. Configure TextBee + backend via Vercel env vars for live notifications.';
  if (activeAgent === 'notify') return 'TextBee notifications use /api/textbee-lead.js with TEXTBEE_API_KEY, TEXTBEE_DEVICE_ID, and TEXTBEE_RECIPIENT stored as Vercel environment variables only. Never expose keys in frontend code.';
  if (t.includes('grant')) return 'The grant plan is at the top of this portfolio. 4P3X Verse\u2122 is grant-ready for safety (transport, bridge-strike prevention), welfare coordination (ResponseLink OS\u2122), digital inclusion and accessible AI (Kyzel Clarity\u2122), training access, and community support. Deployed demos are already live \u2014 grant funding converts them into real pilots.';
  if (t.includes('safety') || t.includes('bridge')) return "Big V's Best Routes\u2122 is the safety-led grant case. Network Rail reported 1,666 bridge strikes in 2024/25 \u2014 roughly one every 5 hours, causing 120+ days of delays and ~\u00a312m in costs. The system supports vehicle profile checks, route risk review, driver advisory warnings, evidence capture, and supervisor dashboards. Advisory only \u2014 does not replace legal compliance or driver responsibility.";
  if (t.includes('public benefit') || t.includes('community')) return 'Public benefit focus areas include community safety, digital inclusion, accessible AI, evidence capture, training and skills development, welfare coordination, transport risk reduction, and reusable architecture across sectors. See the Public Benefit section for proposed pilot metrics.';
  if (t.includes('about') || t.includes('ciaran') || t.includes('founder')) return 'Ciaran / Kyzel Kreates\u2122 is a neurodivergent creator and systems thinker who built the 4P3X Verse\u2122 through rapid self-directed learning, AI-assisted workflows, and a deep-work, noise-sensitive approach to structured problem solving. Kyzel Clarity\u2122 was created to make complex systems understandable for others.';
  if (t.includes('demo') || t.includes('live mode')) return 'Demo Mode shows the product without real data or users. Live Mode runs the product with a real backend. Switch by connecting Supabase, Firebase, or another backend. Once live, systems support real users, persistent records, authentication, live dashboards, installable PWAs, and real-time dashboard-to-PWA communication.';
  if (t.includes('product') || t.includes('project') || t.includes('deployed')) return 'The portfolio includes 11 deployed links: Base V1, TherapyLink\u2122, AutoSkill OS\u2122, Big V\u2019s Best Routes\u2122, ResponseLink OS\u2122, CareerLink OS\u2122, Recharge Burnout Recovery\u2122, Four Paws Academy\u2122, Quantum Compliance OS\u2122, TrustSheild OS\u2122, and Kyzel Clarity\u2122.';
  if (t.includes('architecture') || t.includes('diagram')) return 'The architecture section shows: V1\u2192V6 evolution, one base to 10 deployed variants, demo-to-live mode conversion, dashboard\u2194backend\u2194PWA flow, AI agent orchestration, grant opportunity flow, and the safety pilot flow for Big V\u2019s Best Routes\u2122.';
  if (t.includes('invest')) return 'The investor section is secondary to the grant plan. It covers the commercial pathways: paid prototype builds, live product conversion, licensing/white-label, pilots and grants, partnerships, and employment/contract opportunities. No fake revenue claims \u2014 traction is proven by live deployments.';
  if (t.includes('install') || t.includes('pwa')) return 'This portfolio is installable as a PWA. Click Install Portfolio PWA in the Install PWA section, or use the browser\'s install prompt. Works offline after first load. The service worker caches the core shell, styles, scripts, and logo assets.';
  if (t.includes('clarity') || t.includes('kyzel clarity')) return 'Kyzel Clarity\u2122 is an installable AI-powered PWA that explains complex systems in plain language. Its knowledge base can be swapped for any subject \u2014 making it reusable for grant programmes, training providers, councils, charities, onboarding, and digital inclusion initiatives.';
  return '4P3X Verse\u2122 is a modular AI-powered public-benefit software ecosystem: one reusable architecture, 10 live deployed product variants, and a clear pathway from demo mode to funded live pilot systems. Ask me about the grant plan, safety case, public benefit, specific products, architecture, or the founder story.';
}

document.getElementById('agentSend')?.addEventListener('click', sendAgent);
document.getElementById('agentInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') sendAgent(); });

function sendAgent() {
  const input = document.getElementById('agentInput');
  const q = (input?.value || '').trim();
  if (!q) return;
  if (output) {
    output.innerHTML += `<div class="agent-msg user">${q}</div><div class="agent-msg"><strong>${agentProfiles[activeAgent].name}</strong><br>${agentReply(q)}</div>`;
    output.scrollTop = output.scrollHeight;
  }
  if (input) input.value = '';
}

// Contact form
document.getElementById('leadForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const lead = Object.fromEntries(fd.entries());
  if (!lead.consent) { document.getElementById('leadStatus').textContent = 'Please check the consent box to submit.'; return; }
  lead.createdAt = new Date().toISOString();
  lead.source = '4P3X Verse Grant Portfolio';
  const leads = JSON.parse(localStorage.getItem('4p3xGrantLeads') || '[]');
  leads.push(lead);
  localStorage.setItem('4p3xGrantLeads', JSON.stringify(leads));
  document.getElementById('leadStatus').textContent = 'Thank you — your interest has been saved to the demo lead inbox. In live mode, a notification can be sent securely via TextBee.';
  renderLeads();
  e.target.reset();
  // Attempt live notification
  try {
    const res = await fetch('/api/textbee-lead', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(lead) });
    const data = await res.json();
    if (data.ok) document.getElementById('leadStatus').textContent = 'Interest saved and notification sent.';
  } catch(_) { /* TextBee not configured in demo mode */ }
});

function renderLeads() {
  const box = document.getElementById('leadInbox');
  if (!box) return;
  const leads = JSON.parse(localStorage.getItem('4p3xGrantLeads') || '[]');
  if (!leads.length) { box.innerHTML = '<p class="small" style="color:var(--muted);padding:.5rem">No leads captured yet.</p>'; return; }
  box.innerHTML = leads.map((l,i) => `<div class="lead-entry"><strong>${i+1}. ${l.name||'Unknown'}</strong> &mdash; ${l.company||''} &mdash; ${l.email||''}<br><span style="color:var(--green)">${l.interest||''}</span> | ${l.project||''}<br><span style="font-size:.78rem">${l.createdAt||''}</span></div>`).join('');
}
renderLeads();

// Export JSON
document.getElementById('exportLeads')?.addEventListener('click', () => {
  const leads = JSON.parse(localStorage.getItem('4p3xGrantLeads') || '[]');
  const blob = new Blob([JSON.stringify(leads, null, 2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = '4p3x-grant-leads.json'; a.click();
});

// Export CSV
document.getElementById('exportCSV')?.addEventListener('click', () => {
  const leads = JSON.parse(localStorage.getItem('4p3xGrantLeads') || '[]');
  if (!leads.length) return;
  const keys = Object.keys(leads[0]);
  const csv = [keys.join(','), ...leads.map(l => keys.map(k => '"' + String(l[k]||'').replace(/"/g,'""') + '"').join(','))].join('\n');
  const blob = new Blob([csv], {type:'text/csv'}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = '4p3x-grant-leads.csv'; a.click();
});

// Clear leads
document.getElementById('clearLeads')?.addEventListener('click', () => {
  if (!confirm('Clear all demo leads? This cannot be undone.')) return;
  localStorage.removeItem('4p3xGrantLeads');
  renderLeads();
  document.getElementById('leadStatus').textContent = 'Demo leads cleared.';
});

// Live mode toggle
document.getElementById('liveModeToggle')?.addEventListener('change', e => {
  const note = document.getElementById('liveModeNote');
  const status = document.getElementById('adminModeStatus');
  if (e.target.checked) {
    if(note) note.textContent = 'Live Mode enabled. Ensure Supabase/Firebase backend and TextBee are configured via Vercel environment variables before deploying. Do not expose secrets in frontend code.';
    if(status) status.innerHTML = 'Mode: <strong style="color:var(--green)">Live Mode (backend required)</strong>';
  } else {
    if(note) note.textContent = '';
    if(status) status.innerHTML = 'Mode: <strong>Demo Mode</strong>';
  }
});

// TextBee test
document.getElementById('testTextbee')?.addEventListener('click', async () => {
  const phone = document.getElementById('testPhone')?.value;
  const status = document.getElementById('testTextbeeStatus');
  if (!phone) { if(status) status.textContent = 'Enter a recipient phone number first.'; return; }
  if(status) status.textContent = 'Sending test...';
  try {
    const res = await fetch('/api/textbee-lead', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name:'Test', email:'test@test.com', interest:'Test notification', source:'Admin test panel'}) });
    const data = await res.json();
    if(status) status.textContent = data.ok ? 'Test notification sent successfully.' : 'TextBee not configured. Set environment variables in Vercel.';
  } catch(_) { if(status) status.textContent = 'TextBee not configured. Deploy the serverless route with Vercel environment variables.'; }
});

// PWA Install
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('installPwaBtn');
  if(btn) { btn.textContent = 'Install Portfolio PWA'; btn.style.display = 'inline-flex'; }
  const status = document.getElementById('pwaStatus');
  if(status) status.textContent = 'Your browser supports installation. Click Install to add this portfolio to your device.';
});

document.getElementById('installPwaBtn')?.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    deferredPrompt = null;
    const status = document.getElementById('pwaStatus');
    if(status) status.textContent = result.outcome === 'accepted' ? 'Portfolio PWA installed successfully.' : 'Installation dismissed. You can install later from your browser menu.';
  } else {
    const status = document.getElementById('pwaStatus');
    if(status) status.textContent = 'To install: use Chrome or Edge on desktop, or Chrome on Android. On iOS Safari, tap Share then Add to Home Screen.';
  }
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(() => {
      // SW registered
    }).catch(() => {
      // SW registration failed silently
    });
  });
}

// Download info pack
document.getElementById('downloadInfoPack')?.addEventListener('click', () => {
  fetch('./4p3x-verse-investor-info-pack.json')
    .then(r => r.blob())
    .then(blob => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = '4p3x-verse-grant-info-pack.json'; a.click(); })
    .catch(() => { alert('Info pack not found. Ensure 4p3x-verse-investor-info-pack.json is in the project root.'); });
});
