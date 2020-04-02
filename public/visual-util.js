// This script manipulates elements after they're placed in the DOM
var Util = function () {
  var tab_contents  = document.querySelectorAll('.-tab-content')
  var tabs          = document.querySelectorAll('.-tab')

  init()

  function init() {
    tabListener()
  }

  function tabListener() {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', function () {
        removeAddActive(tab_contents, tab_contents[idx])
        removeAddActive(tabs, tab)
      })
    })
  }

  function removeAddActive(toRemove, toAdd) {
    toRemove.forEach(each => each.classList.remove('active'))
    toAdd.classList.add('active')
  }
}