// This script manipulates elements before they're placed in the DOM

class SuperString {
  constructor(path) {
    this.path = path
  }

  replaceAll(searchValue, replaceValue) {
    this.path = this.path.replace(new RegExp(searchValue, 'g'), replaceValue)
    return this
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  camelCase() {
    var camel = this.path.split('-').map(str => this.capitalize(str)).join('')
    return camel === '' ? 'Home' : camel
  }
}

// How to use BuildElement
// var prop = {
//   sku: ['div', { class: '-sku' }, { style: 'background-color:yellow;' }, 'this is a div']
// }

// var sku = new Tag(prop['sku']).get()

class Tag {
  constructor(properties) {
    this.tag = properties[0]
    this.attributes = properties[1]
    this.styles = properties[2]
    this.textContent = properties[3]
    this.element = null
  }

  get() {
    return this.create()
      .setAttributes()
      .setStyle()
      .setHTML()
      .getElement()
  }

  create() {
    this.element = document.createElement(this.tag)
    return this
  }

  assignAttribute(object) {
    var keys = Object.keys(object)
    keys.forEach(key => {
      var value = object[key]
      this.element.setAttribute(key, value)
    })
  }

  setAttributes() {
    this.assignAttribute(this.attributes)
    return this
  }

  setStyle() {
    this.assignAttribute(this.styles)
    return this
  }

  setHTML() {
    this.element.innerHTML = this.textContent
    return this
  }

  getElement() {
    return this.element
  }

  static appendMany2One(many, one) {
    many.forEach(each => one.appendChild(each))
  }

}

class Listeners {
  constructor() {

  }

  tabListener() {
    var tab_contents = document.querySelectorAll('.-tab-content')
    var tabs = document.querySelectorAll('.-tab')
    tabs.forEach((tab, idx) => this.tabListen(tab, tab_contents, idx))
    return this
  }

  tabListen(tab, tab_contents, idx) {
    var self = this
    tab.addEventListener('click', function () {
      self.removeAddActive(tab_contents, tab_contents[idx])
      self.removeAddActive(tabs, tab)
    })
  }

  removeAddActive(toRemove, toAdd) {
    toRemove.forEach(each => each.classList.remove('active'))
    toAdd.classList.add('active')
  }

  modalListener() {
    return this
  }
}