document.addEventListener("DOMContentLoaded", () => {
  // 1) Load saved (or defaults)
  const mode  = localStorage.getItem("bgMode")     || "dark";
  const color = localStorage.getItem("titleColor") || "#f3e6e6";
  const size  = localStorage.getItem("titleSize")  || "38";

  // 2) Apply on EVERY page
  applyBg(mode);
  setVar("--title-color", color);
  setVar("--title-size", size + "px");



  
  // (Dark / Light)
  if (bgMode) {
    bgMode.addEventListener("change", () => {
      localStorage.setItem("bgMode", bgMode.value);
      applyBg(bgMode.value); /*ISKART*/ 
    });
  }

  // color
  if (titleColor) {
    titleColor.addEventListener("input", () => {
      localStorage.setItem("titleColor", titleColor.value);
      setVar("--title-color", titleColor.value);
    });
  }

  // size
  if (titleSize) {
    titleSize.addEventListener("input", () => {
      localStorage.setItem("titleSize", titleSize.value);
      setVar("--title-size", titleSize.value + "px"); 
      if (titleSizeValue) titleSizeValue.textContent = titleSize.value + "px";
    });
  }
});

// kad nerasyti pilnai
function setVar(name, value) {
  document.documentElement.style.setProperty(name, value);
}

// background theme
function applyBg(mode) {
  if (mode === "light") {
    setVar("--page-bg", "#1a2b52");
    setVar("--card-bg", "#252f68");
    setVar("--pill-bg", "#55588b");
    setVar("--input-bg", "#1a2b44");
  } else {
    setVar("--page-bg", "var(--bg-2)");
    setVar("--card-bg", "var(--card)");
    setVar("--pill-bg", "#0f1a30");
    setVar("--input-bg", "#0d172b");
  }
}
