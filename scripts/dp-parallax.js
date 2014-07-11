(function() {
  'use strict';
  function dpParallax() {
    var queries = document.querySelectorAll('.dp-parallax'),
        i = 0,
        obj = null,
        pos = null,
        scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    while (i < queries.length) {
      obj = queries[i];
      pos = scrollTop - obj.offsetTop;
      if (obj.className.indexOf('dp-parallax-fixed') >= 0) {
        obj.style.backgroundAttachment = 'scroll';
      } else {
        pos = pos * 0.3;
      }
      obj.style.backgroundPosition = '50% ' + parseInt(pos) + 'px';
      i++;
    }
    obj = null;
    pos = null;
    scrollTop = null;
  }

  window.addEventListener('scroll', dpParallax);
  window.setTimeout(dpParallax, 50);
})();

