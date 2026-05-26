const LANG_EN = {
  _meta: { code: "en", label: "EN", dir: "ltr" },

  // Nav
  nav_cta: "Clone repository",

  // Hero
  hero_eyebrow: "OPEN SOURCE // MIT LICENSE",
  hero_h1_1: "Your AI marketing",
  hero_h1_2: "team lives in the",
  hero_h1_3: "terminal.",
  hero_sub: "9 agents. 20+ skills. Video, carousels, landing pages, SEO — orchestrated by one command. Free forever.",
  hero_cta_primary: "Clone repository",
  hero_cta_secondary: "GitHub",

  // Metrics
  metric_agents: "Agents",
  metric_skills: "Skills",
  metric_servers: "MCP Servers",
  metric_compositions: "Compositions",
  metric_price: "Forever",

  // Problem
  problem_h2_1: "You built something great.",
  problem_h2_2: "Nobody knows it exists.",
  problem_p1: "Your code is clean. Your architecture is solid. Your product solves a real problem.",
  problem_p2: 'But your landing page is a README. Your social presence is a pinned tweet from 6 months ago. Your "marketing strategy" is hoping someone finds you on Product Hunt.',
  problem_p3_pre: "You're not alone — ",
  problem_p3_bold: "73% of developer side projects",
  problem_p3_post: " never get a single paying user. Not because they're bad. Because nobody saw them.",

  // Agitation
  agit_h2_1: "Meanwhile, your competitors",
  agit_h2_2: "are shipping content.",
  agit_p1: "They have landing pages that convert. Social posts that engage. SEO that compounds. Videos that explain their product in 60 seconds.",
  agit_p2: "Not because they're better developers. Because they solved the marketing problem.",
  agit_p3: "Every week you delay, the gap widens.",

  // Solution
  sol_eyebrow: "WHAT IF YOU HAD",
  sol_h2_1: "a full marketing team",
  sol_h2_2: "inside Claude Code?",
  sol_p: "growthOS is an open-source plugin that turns Claude Code into an autonomous marketing engine. Strategy, content, SEO, video, carousels, landing pages — orchestrated by 9 AI agents through a single command.",
  sol_term_comment: "# Everything starts here",
  sol_term_cmd1: '"create a launch strategy for my SaaS"',
  sol_term_out1: "→ CMO routing intent...",
  sol_term_out2: "→ Growth Strategist activated",
  sol_term_out3: "→ Analyzing market, competitors, positioning...",
  sol_term_ok1: "✓ Strategy document generated. 3 campaign variants ready.",
  sol_term_cmd2: '"build a landing page for the launch"',
  sol_term_out4: "→ Visual Designer + Growth Engineer activated",
  sol_term_out5: "→ Running 8-phase pipeline: discovery → research → design → build...",
  sol_term_ok2: "✓ Landing page built. 32KB. Lighthouse 96. WCAG AA.",

  // Showcase
  showcase_label: "BUILT WITH GROWTHOS",
  showcase_h2: "See what it builds.",
  showcase_item1_label: "Landing page — conversion-optimized, 8-phase pipeline",
  showcase_item1_title: "growthOS // landing page",
  showcase_item1_caption: "Skill: sales-page-builder // 8-phase pipeline // design intelligence directed",
  showcase_item2_label: "Instagram carousel — 6 templates, 1080×1350",
  showcase_item2_title: "growthOS // carousel",
  showcase_item2_caption: "Skill: instagram-carousel // 6 HTML templates // auto-export PNG",
  showcase_item3_label: "Remotion video — 11 compositions, scripted by AI",
  showcase_item3_title: "growthOS // video",
  showcase_item3_caption: "Skill: remotion-video // 11 compositions // storyboard → render",
  showcase_item4_label: "Growth strategy — frameworks, OKRs, campaign plans",
  showcase_item4_title: "growthOS // strategy",
  showcase_item4_caption: "Skill: marketing-strategy // AARRR funnels // competitive intel",

  // How it works
  how_h2: "Three commands. That's it.",
  how_step1_title: "Clone",
  how_step1_desc_code: "git clone + ./install.sh",
  how_step1_desc: " — one symlink, zero dependencies for core.",
  how_step2_title: "Configure",
  how_step2_desc_code: "/grow setup",
  how_step2_desc: " — brand name, tone, platforms. Two minutes.",
  how_step3_title: "Create",
  how_step3_desc_code: '/grow "what you need"',
  how_step3_desc: " — the CMO routes to the right specialist.",

  // Architecture
  arch_h2: "Meet your team.",
  arch_p: "9 agents, each with a clear role. The CMO routes every request to the right specialist. Pure markdown + YAML — portable, inspectable, forkable.",
  arch_cmo: "// router",
  arch_agent1: "Growth Strategist", arch_role1: "frameworks, OKRs",
  arch_agent2: "Content Creator", arch_role2: "blog, newsletter",
  arch_agent3: "Intelligence Analyst", arch_role3: "competitors, trends",
  arch_agent4: "Visual Designer", arch_role4: "landing pages, carousels",
  arch_agent5: "Social Publisher", arch_role5: "5 platforms",
  arch_agent6: "Growth Engineer", arch_role6: "SEO, technical",
  arch_agent7: "Video Producer", arch_role7: "remotion, 11 templates",
  arch_agent8: "Carousel Designer", arch_role8: "6 formats",

  // Safety
  safety_h2: "Built for safety. Open by design.",
  safety_1_label: "DRY-RUN DEFAULT",
  safety_1_desc: "Nothing publishes without your explicit approval.",
  safety_2_label: "KILL SWITCH",
  safety_2_desc: "Revoke all autonomous permissions instantly.",
  safety_3_label: "MIT LICENSE",
  safety_3_desc: "Fork it. Modify it. No strings. No lock-in.",
  safety_4_label: "PURE MARKDOWN",
  safety_4_desc: "Skills are portable text files. Take them anywhere.",

  // FAQ
  faq_label: "# frequently_asked",
  faq_q1: "Does it work without Claude Code?",
  faq_a1: "Core skills are pure markdown — portable to any LLM framework. The agent orchestration needs Claude Code's plugin system, but your content and strategies go wherever you go.",
  faq_q2: "I'm not a marketer. Will I know what to do?",
  faq_a2_pre: "That's the point. Describe what you need: ",
  faq_a2_code: '/grow "I need content for my product launch"',
  faq_a2_post: ". The CMO agent figures out which specialists to activate.",
  faq_q3: "What about the optional dependencies?",
  faq_a3_pre: "Node for video rendering, Python for MCP servers. But the core — skills, agents, commands — is zero-dependency markdown. Install takes one command, uninstall takes one ",
  faq_a3_code: "rm",
  faq_a3_post: ".",
  faq_q4: "Why is it free?",
  faq_a4: "Because marketing shouldn't be a competitive disadvantage for solo developers. MIT license, open source, community-driven. The design intelligence base grows with every project.",

  // Final CTA
  final_h2_1: "Start",
  final_h2_2: "growing.",
  final_sub: "Free. Open source. One command away.",
  final_cta_primary: "Clone repository",
  final_cta_secondary: "GitHub",
  final_cta_docs: "Read the docs",

  // Footer
  footer_license: "MIT License",
  footer_rendered: "rendered from code",
};
