// This script manipulates elements before they're placed in the DOM

class FormatPath {
  constructor(path) {
    this.path = path
  }

  replaceAll(searchValue, replaceValue) {
    this.path = this.path.replace(new RegExp(searchValue, g), replaceValue)
    return this
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + this.slice(1)
  }

  camelCase() {
    return this.path.split('-').map(str => this.capitalize(str)).join('')
  }
}

function setAttributes (el, obj) {
  Object.keys(obj).forEach(key => el.setAttribute(key, obj[key]))
}

function create(props) {
  var tag = props[0], attributes = props[1], styles = props[2], textContent = props[3]
  var el = document.createElement(tag); setAttributes(el, attributes);
  setAttributes(el, styles); textContent ? el.innerHTML = textContent : ''
  return el
}

function appendMany2One (many, one) {
  many.forEach(each => one.appendChild(each))
}