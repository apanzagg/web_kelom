document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    main.style.opacity = 0;
    setTimeout(() => {
      main.style.transition = "opacity 0.5s ease-in";
      main.style.opacity = 1;
    }, 100);
  });
  