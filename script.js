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
    p1_sect1_label: "The Story",
    p1_sect1: `A friend of mine wanted to switch their old laptop to Linux, but it had an MT7630E Wi-Fi chip. The vendor completely abandoned the chip and the out-of-tree driver lost its only maintainer in the Linux 4.0 era, with the last commit completely breaking on modern kernels.`,
    p1_sect2_label: "The Result",
    p1_sect2: `It builds cleanly on modern kernels without breaking. Now people with certain models of ThinkPads can use up-to-date distros without losing access to Wi-Fi.`,
    p2_tag: "Dispersion Audio Effect",
    p2_sect1_label: "The Story",
    p2_sect1: `There is a really popular audio effect on Windows called "Disperser" from Kilohearts, but it's rather expensive and doesn't work natively on Linux. I wanted to use that specific sound in my own setup, so I decided to write my own clone from scratch.`,
    p2_sect2_label: "Technical Details",
    p2_sect2: `The plugin is written in modern C++23 using the JUCE framework and supports VST3, LV2, AU, and CLAP formats across Windows, Mac, and Linux. It also uses GitHub Actions to automatically handle cross-platform builds on every commit.`,
    p3_tag: "Distortion Audio Effect",
    p3_sect1_label: "The Story",
    p3_sect1: `Plasma started as my first serious C++ audio project, built to learn how audio plugins and real-time DSP work by making a distortion plugin from scratch. I designed it primarily for aggressive electronic music, experimenting with different distortion algorithms, filtering, and sound design along the way.`,
    p3_sect2_label: "Technical Details",
    p3_sect2: `The plugin is written in modern C++23 using the JUCE framework and supports VST3, LV2, AU, and CLAP formats across Windows, macOS, and Linux. As one of my first C++ projects, the codebase reflects my limited experience at the time and makes larger changes difficult. I still maintain the project with occasional updates and bug fixes.`,
    p4_tag: "Interactive Guitar Trainer",
    p4_sect1_label: "The Story",
    p4_sect1: `When I started learning to play on an 8-string guitar, I struggled to find digestible and modern-looking learning material for more advanced scales. So I decided to solve this issue for myself by building this web app, which makes exploring scales on guitar more intuitive. It's especially useful when experimenting with sounds outside of classical music theory, particularly for contemporary music like metal.`,
    p4_sect2_label: "Technical Details",
    p4_sect2:
      "Built with Svelte and Tailwind CSS, using the Catppuccin color theme. It features an interactive fretboard with custom tunings, different string counts, scale visualization, and the ability to create custom scales by selecting scale degrees manually.",
    p5_tag: "Multiplayer Bingo Game",
    p5_sect1_label: "The Story",
    p5_sect1: `A multiplayer Bingo game built for a university cross-platform development course. Players can create custom Bingo cards for memes, jokes, inside jokes, or whatever else, then invite friends using a game code.`,
    p5_sect2_label: "Technical Details",
    p5_sect2: `I handled the backend and database, using Express.js, MongoDB, and Socket.IO. REST APIs handle authentication and game management, while WebSockets keep players synchronized in real time. The frontend uses Flutter and runs on web, mobile, and desktop.`,
    p6_tag: "Hyprland configuration and Quickshell taskbar.",
    p6_sect1_label: "PLACEHOLDER",
    p6_sect1: `My personal dotfiles, including a custom zsh prompt, vim config, and some scripts to make my life easier. Mostly just a collection of things I find useful.`,
    p6_sect2_label: "PLACEHOLDER",
    p6_sect2: "PLACEHOLDER",
    link_source: "source",
    link_github: "GitHub",
    aria_zoom: "Enlarge image",
    aria_close: "Close",
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
    p1_sect1_label: "Die Entstehung",
    p1_sect1: `Ein Freund von mir wollte mit seinem alten Laptop auf Linux wechseln, aber das Gerät hatte einen MT7630E-WLAN-Chip. Der Hersteller hat den Support komplett eingestellt, und der Out-of-Tree-Treiber verlor in der Linux-4.0-Ära seinen einzigen Maintainer. Der letzte Commit führte unter modernen Kerneln zu unzähligen Fehlern.`,
    p1_sect2_label: "Das Ergebnis",
    p1_sect2: `Der Treiber lässt sich unter modernen Kerneln fehlerfrei kompilieren. Dadurch können Besitzer bestimmter ThinkPad-Modelle wieder aktuelle Distributionen nutzen, ohne auf WLAN verzichten zu müssen.`,
    p2_tag: "Dispersion Audio Effekt",
    p2_sect1_label: "Die Geschichte",
    p2_sect1: `Es gibt diesen super beliebten Audio-Effekt für Windows namens "Disperser" von Kilohearts, aber er ist ziemlich teuer und läuft nicht nativ unter Linux. Ich wollte den Sound unbedingt in meinem eigenen Setup nutzen, also habe ich kurzerhand meinen eigenen Klon von Grund auf selbst geschrieben.`,
    p2_sect2_label: "Technische Details",
    p2_sect2: `Das Plugin ist in modernem C++23 mit dem JUCE-Framework geschrieben und unterstützt die Formate VST3, LV2, AU und CLAP für Windows, Mac und Linux. Außerdem nutzt es GitHub Actions, um bei jedem Commit automatisch plattformübergreifende Builds zu erstellen.`,
    p3_tag: "Distortion Audio Effekt",
    p3_sect1_label: "Die Geschichte",
    p3_sect1: `Plasma begann als mein erstes richtiges C++ Projekt. Ich wollte lernen, wie Audio-Plugins und Echtzeit-DSP funktionieren, indem ich ein Distortion-Plugin von Grund auf selbst baue. Ich habe es hauptsächlich für aggressive elektronische Musik entwickelt und dabei mit verschiedenen Distortion-Algorithmen, Filtern und Sounddesign experimentiert.`,
    p3_sect2_label: "Technische Details",
    p3_sect2: `Das Plugin ist in modernem C++23 mit dem JUCE-Framework geschrieben und unterstützt die Formate VST3, LV2, AU und CLAP für Windows, Mac und Linux. Als eines meiner ersten C++-Projekte spiegelt der Code meine damals noch begrenzte Erfahrung wider und macht größere Änderungen schwierig. Ich pflege das Projekt aber weiterhin mit gelegentlichen Updates und Bugfixes.`,
    p4_tag: "Interaktiver Gitarren-Trainer",
    p4_sect1_label: "Die Geschichte",
    p4_sect1: `Als ich angefangen habe eine 8-saitigen Gitarre zu lernen, hatte ich Schwierigkeiten, verständliches und modern aufbereitetes Lernmaterial für fortgeschrittenere Tonleitern zu finden. Deshalb habe ich beschlossen, das Problem selbst zu lösen und diese Web-App zu entwickeln, die das Erkunden von Tonleitern auf der Gitarre intuitiver macht. Besonders nützlich ist sie beim Experimentieren mit Tonleiterns abseits der klassischen Musiktheorie, insbesondere für moderne Musik wie Metal.`,
    p4_sect2_label: "Technische Details",
    p4_sect2:
      "Entwickelt mit Svelte und Tailwind CSS und mit dem Catppuccin-Farbschema gestaltet. Die App bietet ein interaktives Griffbrett mit Unterstützung für individuelle Stimmungen, unterschiedliche Saitenanzahlen, Skalenvisualisierung und die Möglichkeit, eigene Skalen durch manuelle Auswahl der Skalentöne zu erstellen.",
    p5_tag: "Multiplayer Bingo Spiel",
    p5_sect1_label: "Die Geschichte",
    p5_sect1: `Ein Multiplayer-Bingo-Spiel, das im Rahmen eines Hochschulkurses zur Crossplattform-Entwicklung entstanden ist. Spieler können eigene Bingo-Karten für Memes, Witze, Insider oder andere kreative Ideen erstellen und Freunde über einen Spielcode einladen.`,
    p5_sect2_label: "Technische Details",
    p5_sect2: `Ich war hauptsächlich für das Backend und die Datenbank zuständig. Der Server nutzt Express.js, MongoDB und Socket.IO. REST-APIs übernehmen Authentifizierung und Spielverwaltung, während WebSockets die Spieler in Echtzeit synchronisieren. Das Frontend basiert auf Flutter und läuft im Web, auf Mobile und Desktop.`,
    p6_tag: "Hyprland, Quickshell und mehr",
    p6_sect1_label: "PLACEHOLDER",
    p6_sect1: `Meine persönlichen Dotfiles, einschließlich eines benutzerdefinierten zsh-Prompts, vim-Konfiguration und einiger Skripte, die mir das Leben erleichtern. Meistens nur eine Sammlung von Dingen, die ich nützlich finde.`,
    p6_sect2_label: "PLACEHOLDER",
    p6_sect2: "PLACEHOLDER",
    link_source: "quellcode",
    link_github: "GitHub",
    aria_zoom: "Bild vergrößern",
    aria_close: "Schließen",
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
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
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

(function () {
  var root = document.documentElement;

  function currentLang() {
    return root.getAttribute("lang") || "de";
  }

  function label(key) {
    var dict = i18n[currentLang()] || i18n.en;
    return dict[key] || "";
  }

  // Build the lightbox overlay once and reuse it for every preview image.
  var overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML =
    '<figure class="lightbox-figure">' +
    '<img class="lightbox-img" src="" alt="" />' +
    '<button type="button" class="lightbox-close" data-i18n-aria="aria_close" aria-label="Close">' +
    '<svg class="icon"><use href="#icon-close" /></svg>' +
    "</button>" +
    "</figure>";
  document.body.appendChild(overlay);

  var overlayImg = overlay.querySelector(".lightbox-img");
  var closeButton = overlay.querySelector(".lightbox-close");

  var lastFocused = null;

  function open(figure) {
    var img = figure.querySelector("img");
    if (!img) return;
    overlayImg.src = img.currentSrc || img.src;
    overlayImg.alt = img.alt;
    lastFocused = document.activeElement;
    overlay.setAttribute("aria-hidden", "false");
    overlay.classList.add("open");
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  }

  function close() {
    if (!overlay.classList.contains("open")) return;
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    if (lastFocused && typeof lastFocused.focus === "function")
      lastFocused.focus();
  }

  // Add a small "enlarge" button to the top-right of every preview.
  document.querySelectorAll(".project-preview").forEach(function (figure) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "preview-zoom";
    btn.setAttribute("data-i18n-aria", "aria_zoom");
    btn.setAttribute("aria-label", label("aria_zoom"));
    btn.innerHTML = '<svg class="icon"><use href="#icon-expand" /></svg>';
    btn.addEventListener("click", function () {
      open(figure);
    });
    figure.appendChild(btn);
  });

  // Localize the close button label for the current language on load.
  overlay.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    el.setAttribute("aria-label", label(el.getAttribute("data-i18n-aria")));
  });

  // A click on the backdrop closes; clicks starting on the close button don't.
  overlay.addEventListener("click", function (e) {
    if (e.target.closest(".lightbox-close")) return;
    close();
  });

  closeButton.addEventListener("click", function () {
    close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();
