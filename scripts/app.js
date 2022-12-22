const hiddenItems = document.querySelectorAll("section");

const observer = new IntersectionObserver((e) => {
  e.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenItems.forEach((e) => {
  observer.observe(e);
});
