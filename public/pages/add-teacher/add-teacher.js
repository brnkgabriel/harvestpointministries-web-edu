var AddTeacher = function () {
  var tab_contents  = document.querySelectorAll('.-tab-content')
  var tabs          = document.querySelectorAll('.-tab')

  init()

  function init() {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', function () {
        tab_contents.forEach(tab_content => tab_content.classList.remove('active'))
        tabs.forEach(tab => tab.classList.remove('active'))

        tab_contents[idx].classList.add('active')
        tab.classList.add('active')
      })
    })
  }
}