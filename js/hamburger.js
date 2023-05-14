function onHamb() {
  const hamb = document.querySelector(".hamb"),
    nav = document.querySelector(".nav-menu");

  hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    nav.classList.toggle("activeNav");

    document.body.classList.toggle("overflowHidden");
  });

  document.querySelectorAll(".nav-menu__item a").forEach((item) => {
    item.addEventListener("click", () => {
      hamb.classList.remove("active");
      nav.classList.remove("activeNav");

      document.body.classList.remove("overflowHidden");
    });
  });
}

export { onHamb };
