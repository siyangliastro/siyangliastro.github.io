/* Header image drifts and dims as the page scrolls; sections fade in.
   Both are skipped when the visitor asks for reduced motion. */
(function () {
  var sky = document.getElementById('sky');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (sky) {
    var update = function () {
      var h = window.innerHeight, y = window.scrollY, s = Math.min(y / h, 1);
      sky.style.opacity = (1 - 0.75 * s).toFixed(3);
      if (!reduce) sky.style.transform = 'translateY(' + (-y * 0.25).toFixed(1) + 'px) scale(' + (1 + 0.06 * s).toFixed(3) + ')';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }
  var els = document.querySelectorAll('.is-home .hl, .is-home .col-side, .is-home #about');
  if (reduce || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  els.forEach(function (e) { e.classList.add('reveal'); io.observe(e); });
})();
