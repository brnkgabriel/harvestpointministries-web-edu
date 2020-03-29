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
})()