(function () {
  var settings  = document.querySelector('.-header .-settings')
  var detail    = document.querySelector('.-header .-settings .-detail')

  toggle()

  function toggle() {
    settings.addEventListener('click', function () {
      var fn = detail.classList;
      fn.contains('active') ? fn.remove('active') : fn.add('active')
    })
  }
})();

// hamburger script
(function () {
  var nav_icon = document.getElementById('nav-icon')

  listen()

  function listen() {
    nav_icon.addEventListener('click', function () {
      var fn = nav_icon.classList;
      fn.contains('open') ? fn.remove('open') : fn.add('open')

      // toggle aside
      var aside = document.querySelector('.-aside')
      var fna=  aside.classList
      fna.contains('-offscreen') ? fna.remove('-offscreen') : fna.add('-offscreen')
    })
  }
})()