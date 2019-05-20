const callback = function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry.isIntersecting);
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function(target) {
  observer.observe(target);
});
