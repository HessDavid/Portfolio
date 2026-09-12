var i18n = {
  en: {
    whoami: "~$ whoami",
    role_dev: "Software Development",
    role_linux: "Linux",
    role_os: "Open Source",
    role_dsp: "DSP",
    intro:
      "I write low-level software — drivers, audio DSP, the occasional plugin. Most of it starts because something didn't work and I wanted to know why.",
    nav_github: "github",
    nav_email: "email",
    nav_resume: "resume",
    sec_projects: "Selected Projects",
    sec_contribs: "Contributions",
    contribs_intro: "Projects where I made smaller contributions.",
    sec_about: "About",
    sec_contact: "Contact",
    p1_tag: "Linux driver",
    p1_label_story: "the story",
    p1_story: `The MT7630E wifi chip lost mainline kernel support years ago, leaving a pile of old laptops with dead wifi. I picked up the abandoned out-of-tree driver, ported it against current kernel APIs, and fixed the DMA and interrupt handling that had rotted out.`,
    p1_label_result: "the result",
    p1_result: `It builds cleanly on modern kernels and a handful of people with old ThinkPads have wifi again. Small fix, but it's the kind of unglamorous maintenance that keeps hardware usable past its "official" lifespan.`,
    p2_tag: "Audio DSP",
    p2_label_story: "the story",
    p2_story: `I wanted a distortion plugin that didn't just clip a waveform, but let you shape the harmonic character directly. That turned into a few months of reading DSP papers and re-deriving waveshaping math I only half-understood on the first pass.`,
    p2_label_tech: "technical details",
    p2_tech: `Runs multiple waveshaping stages with 4x oversampling to keep aliasing under control, a tone stage built from cascaded biquad filters, and a wet/dry path designed to stay phase-coherent. Written in C++ against the JUCE framework.`,
    p3_tag: "Audio plugin",
    p3_label_story: "the story",
    p3_story: `My first real audio plugin, built before I understood most of the constraints that matter for real-time audio. It taught me why allocations on the audio thread are a bad idea, the hard way.`,
    p3_label_reflect: "honest reflection",
    p3_reflect: `It works, and people have used it, but the UI code is a mess and the CPU usage is higher than it should be. I keep it around unpolished on purpose — it's a useful reminder of where I started.`,
    p4_tag: "Small web experiment",
    p4_text: `A weekend build to drill musical scales in the browser. Nothing deep — just a fun break from systems work.`,
    link_source: "source",
    link_github: "GitHub",
    about_p1: `I'm a computer science student who spends most of my free time in C++ — usually somewhere between the hardware and the application, where things are either drivers or audio. I like projects that force me to actually understand what's happening underneath, rather than trusting a library to handle it.`,
    about_p2: `Outside of code, I'm slowly getting better at admitting when a project didn't turn out the way I planned — most of the ones above are examples of that.`,
    footer: "built with plain html & css · catppuccin mocha",
  },
  de: {
    whoami: "~$ whoami",
    role_dev: "Softwareentwicklung",
    role_linux: "Linux",
    role_os: "Open Source",
    role_dsp: "DSP",
    intro:
      "Ich schreibe hardwarenahe Software — Treiber, Audio-DSP, gelegentlich ein Plugin. Meistens fängt es damit an, dass etwas nicht funktioniert hat und ich wissen wollte, warum.",
    nav_github: "github",
    nav_email: "e-mail",
    nav_resume: "lebenslauf",
    sec_projects: "Ausgewählte Projekte",
    sec_contribs: "Beiträge",
    contribs_intro: "Projekte, zu denen ich kleinere Beiträge geleistet habe.",
    sec_about: "Über mich",
    sec_contact: "Kontakt",
    p1_tag: "Linux-Treiber",
    p1_label_story: "die Geschichte",
    p1_story: `Der MT7630E-WLAN-Chip verlor vor Jahren die Unterstützung im Mainline-Kernel, wodurch etliche alte Laptops ohne funktionierendes WLAN dastanden. Ich habe den verwaisten Out-of-Tree-Treiber übernommen, auf aktuelle Kernel-APIs portiert und das DMA- und Interrupt-Handling repariert, das mit der Zeit verrottet war.`,
    p1_label_result: "das Ergebnis",
    p1_result: `Er lässt sich sauber gegen aktuelle Kernel bauen, und ein paar Leute mit alten ThinkPads haben wieder WLAN. Ein kleiner Fix, aber genau die unglamouröse Wartungsarbeit, die Hardware über ihre "offizielle" Lebensdauer hinaus nutzbar hält.`,
    p2_tag: "Audio-DSP",
    p2_label_story: "die Geschichte",
    p2_story: `Ich wollte ein Distortion-Plugin, das nicht einfach eine Wellenform kappt, sondern den harmonischen Charakter direkt formbar macht. Daraus wurden ein paar Monate DSP-Paper lesen und Waveshaping-Mathematik neu herleiten, die ich beim ersten Versuch nur halb verstanden hatte.`,
    p2_label_tech: "technische Details",
    p2_tech: `Mehrere Waveshaping-Stufen mit 4-facher Überabtastung gegen Aliasing, eine Klangregelstufe aus kaskadierten Biquad-Filtern und ein Wet/Dry-Pfad, der phasenkohärent bleibt. Geschrieben in C++ mit dem JUCE-Framework.`,
    p3_tag: "Audio-Plugin",
    p3_label_story: "die Geschichte",
    p3_story: `Mein erstes richtiges Audio-Plugin, gebaut bevor ich die meisten Einschränkungen verstanden hatte, die bei Echtzeit-Audio wichtig sind. Es hat mir auf die harte Tour beigebracht, warum Allokationen im Audio-Thread eine schlechte Idee sind.`,
    p3_label_reflect: "ehrliche Reflexion",
    p3_reflect: `Es funktioniert, und Leute haben es benutzt, aber der UI-Code ist unaufgeräumt und die CPU-Last höher als sie sein sollte. Ich lasse es absichtlich unpoliert — eine nützliche Erinnerung daran, wo ich angefangen habe.`,
    p4_tag: "Kleines Web-Experiment",
    p4_text: `Ein Wochenendprojekt, um Tonleitern im Browser zu üben. Nichts Tiefgründiges — einfach eine kleine Abwechslung zur Systemprogrammierung.`,
    link_source: "quellcode",
    link_github: "GitHub",
    about_p1: `Ich studiere Informatik und verbringe die meiste Freizeit mit C++ — meist irgendwo zwischen Hardware und Anwendung, bei Treibern oder Audio. Ich mag Projekte, bei denen ich wirklich verstehen muss, was darunter passiert, statt einer Bibliothek blind zu vertrauen.`,
    about_p2: `Abseits von Code werde ich langsam besser darin, zuzugeben, wenn ein Projekt nicht so gelaufen ist wie geplant — die meisten oben sind Beispiele dafür.`,
    footer: "gebaut mit reinem html & css · catppuccin mocha",
  },
};

(function () {
  var root = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");
  var langButtons = document.querySelectorAll(".lang-btn");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeToggle.setAttribute(
      "aria-pressed",
      theme === "light" ? "true" : "false",
    );
  }

  function applyLang(lang) {
    var dict = i18n[lang] || i18n.en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    root.setAttribute("lang", lang);
    langButtons.forEach(function (btn) {
      btn.setAttribute(
        "aria-pressed",
        btn.dataset.lang === lang ? "true" : "false",
      );
    });
  }

  // Initial theme: follow system preference, default dark
  var prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(prefersLight ? "light" : "dark");

  themeToggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    applyTheme(current === "light" ? "dark" : "light");
  });

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.dataset.lang);
    });
  });

  applyLang("de");
})();
