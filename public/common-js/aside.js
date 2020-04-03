(function() {
  var show_hide = document.querySelector('.-aside .-foot .-show-hide')
  var aside     = document.querySelector('.-aside')
  var mid_items = document.querySelectorAll('.-aside .-mid .-mid-item:not(.-logo)')
  
  init()

  function init() {
    show_hide.addEventListener('click', () => { toggle(aside, '-icons-only') })

    mid_items.forEach((mid_item, idx) => {
      var item = mid_item.querySelector('.-item')
      var other_mid_items = Array.from(mid_items).filter((_, index) => index != idx)

      item.addEventListener('click', () => {
        other_mid_items.map(mi => mi.classList.remove('active'))
        toggle(mid_item, 'active')
      })
    })
  }

  function toggle(item, $class) {
    var fn = item.classList;
    fn.contains($class) ? fn.remove($class) : fn.add($class)
  }
  
})()