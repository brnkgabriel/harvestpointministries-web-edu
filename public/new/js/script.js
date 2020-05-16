class FAB {
  constructor() {
    this.popout = document.querySelector('.popout')
    this.panel = document.querySelector('.popout .-panel')
    this.btn = document.querySelector('.popout .-btn')
  }

  listen() {
    this.btn.addEventListener('click', () => {
      this.btn.classList.toggle('active')
      this.panel.classList.toggle('active')
    })
  }

  reset() {
    this.btn.classList.remove('active')
    this.panel.classList.remove('active')
  }
}

new FAB().listen()