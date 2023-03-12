function onHamb() {
  const hamb = document.querySelector(".hamb"),
    nav = document.querySelector(".navbar-list");

  hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    nav.classList.toggle("activeNav");

    document.body.classList.toggle("overflowHidden");
  });

  document.querySelectorAll(".list-item__link").forEach((item) => {
    item.addEventListener("click", () => {
      hamb.classList.remove("active");
      nav.classList.remove("activeNav");

      document.body.classList.remove("overflowHidden");
    });
  });
}

export { onHamb };
