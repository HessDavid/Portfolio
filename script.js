var i18n = {
  en: {
    whoami: "~$ whoami",
    role_dev: "Software Development",
    role_linux: "Linux",
    role_os: "Open Source",
    role_dsp: "DSP",
    intro:
      "I build software that I’d love to use myself. I’m most interested in topics like Linux desktop software, audio DSP and modern interfaces.",
    nav_github: "github",
    nav_email: "email",
    nav_resume: "resume",
    sec_projects: "Selected Projects",
    sec_contribs: "Contributions",
    contribs_intro: "Projects where I made smaller contributions.",
    sec_about: "About",
    sec_contact: "Contact",
    p1_tag: "Linux Driver for MT7630E",
    p1_label_story: "The story",
    p1_story: `A friend of mine wanted to switch their old laptop to Linux, but it had an MT7630E Wi-Fi chip. The vendor completely abandoned the chip and the out-of-tree driver lost its only maintainer in the Linux 4.0 era, with the last commit completely breaking on modern kernels.`,
    p1_label_result: "The result",
    p1_result: `It builds cleanly on modern kernels without breaking. Now people with certain models of ThinkPads can use up-to-date distros without losing access to Wi-Fi.`,
    p2_tag: "Audio Effects Plugin",
    p2_label_story: "The story",
    p2_story: `There is a really popular audio effect on Windows called "Disperser" from Kilohearts, but it's rather expensive and doesn't work natively on Linux. I wanted to use that specific sound in my own setup, so I decided to write my own clone from scratch.`,
    p2_label_tech: "Technical details",
    p2_tech: `The plugin is written in modern C++23 using the JUCE framework and supports VST3, LV2, AU, and CLAP formats across Windows, Mac, and Linux. It also uses GitHub Actions to automatically handle cross-platform builds on every commit.`,
    p3_tag: "Audio plugin",
    p3_label_story: "The story",
    p3_story: `My first real audio plugin, built before I understood most of the constraints that matter for real-time audio. It taught me why allocations on the audio thread are a bad idea, the hard way.`,
    p3_label_reflect: "Hoonest reflection",
    p3_reflect: `It works, and people have used it, but the UI code is a mess and the CPU usage is higher than it should be. I keep it around unpolished on purpose — it's a useful reminder of where I started.`,
    p4_tag: "Small web experiment",
    p4_text: `A weekend build to drill musical scales in the browser. Nothing deep — just a fun break from systems work.`,
    p5_tag: "Multiplayer Bingo Game",
    p5_text: `A small multiplayer bingo game built with Node.js and Socket.IO. Players can join a game room and mark off numbers as they are called out. The first player to complete a line wins!`,
    p6_tag: "Hyprland configuration and Quickshell taskbar.",
    p6_text: `My personal dotfiles, including a custom zsh prompt, vim config, and some scripts to make my life easier. Mostly just a collection of things I find useful.`,
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
      "Ich bastle Software, die ich selbst gerne benutzen würde. Am liebsten irgendwo zwischen Linux-Desktop, Audio-DSP und modernen Interfaces.",
    nav_github: "github",
    nav_email: "e-mail",
    nav_resume: "lebenslauf",
    sec_projects: "Ausgewählte Projekte",
    sec_contribs: "Beiträge",
    contribs_intro: "Projekte, zu denen ich kleinere Beiträge geleistet habe.",
    sec_about: "Über mich",
    sec_contact: "Kontakt",
    p1_tag: "Linux-Treiber für MT7630E",
    p1_label_story: "Die Entstehung",
    p1_story: `Ein Freund von mir wollte mit seinem alten Laptop auf Linux wechseln, aber das Gerät hatte einen MT7630E-WLAN-Chip. Der Hersteller hat den Support komplett eingestellt, und der Out-of-Tree-Treiber verlor in der Linux-4.0-Ära seinen einzigen Maintainer. Der letzte Commit führte unter modernen Kerneln zu unzählig-Fehlern.`,
    p1_label_result: "Das Ergebnis",
    p1_result: `Der Treiber lässt sich unter modernen Kerneln fehlerfrei kompilieren. Dadurch können Besitzer bestimmter ThinkPad-Modelle wieder aktuelle Distributionen nutzen, ohne auf WLAN verzichten zu müssen.`,
    p2_tag: "Audio Effekt Plugin",
    p2_label_story: "Die Geschichte",
    p2_story: `Es gibt diesen super beliebten Audio-Effekt für Windows namens "Disperser" von Kilohearts, aber er ist ziemlich teuer und läuft nicht nativ unter Linux. Ich wollte den Sound unbedingt in meinem eigenen Setup nutzen, also habe ich kurzerhand meinen eigenen Klon von Grund auf selbst geschrieben.`,
    p2_label_tech: "Technische Details",
    p2_tech: `Das Plugin ist in modernem C++23 mit dem JUCE-Framework geschrieben und unterstützt die Formate VST3, LV2, AU und CLAP für Windows, Mac und Linux. Außerdem nutzt es GitHub Actions, um bei jedem Commit automatisch plattformübergreifende Builds zu erstellen.`,
    p3_label_story: "Die Geschichte",
    p3_story: `Mein erstes richtiges Audio-Plugin, gebaut bevor ich die meisten Einschränkungen verstanden hatte, die bei Echtzeit-Audio wichtig sind. Es hat mir auf die harte Tour beigebracht, warum Allokationen im Audio-Thread eine schlechte Idee sind.`,
    p3_label_reflect: "ehrliche Reflexion",
    p3_reflect: `Es funktioniert, und Leute haben es benutzt, aber der UI-Code ist unaufgeräumt und die CPU-Last höher als sie sein sollte. Ich lasse es absichtlich unpoliert — eine nützliche Erinnerung daran, wo ich angefangen habe.`,
    p4_tag: "Kleines Web-Experiment",
    p4_text: `Ein Wochenendprojekt, um Tonleitern im Browser zu üben. Nichts Tiefgründiges — einfach eine kleine Abwechslung zur Systemprogrammierung.`,
    p5_tag: "Multiplayer-Bingo-Spiel",
    p5_text: `Ein kleines Multiplayer-Bingo-Spiel, gebaut mit Node.js und Socket.IO. Spieler können einem Spielraum beitreten und Zahlen abhaken, während sie aufgerufen werden. Der erste Spieler, der eine Reihe vervollständigt, gewinnt!`,
    p6_tag: "Hyprland-Konfiguration und Quickshell-Taskleiste",
    p6_text: `Meine persönlichen Dotfiles, einschließlich eines benutzerdefinierten zsh-Prompts, vim-Konfiguration und einiger Skripte, die mir das Leben erleichtern. Meistens nur eine Sammlung von Dingen, die ich nützlich finde.`,
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
