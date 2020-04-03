
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'

const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined

const router = () => {
  // Find the component based on the current path
  const parsedLocation = parseLocation()
  const splitLocation = parsedLocation.split('?')
  const path = splitLocation[0]
  const param = splitLocation[1]

  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {}

  // render below to be replaced by run because we're assigning the component function to it
  document.getElementById('app').innerHTML = component.render(path, param)
  // component.run(path, param)
  // Util should always run after component script so dom elements load before Javascript starts
  Util()
}

class Router {
  constructor(routes) {
    this.routes = routes
    this.location = null
    this.path = null
    this.parameter = null
    this.component = null
  }

  parseLocation(location = '/') {
    this.location = location
    return this
  }

  setPath() {
    this.path = this.location.split('?')[0]
    return this
  }

  setParameter() {
    this.param = this.location.split('?')[1]
    return this
  }

  setComponent() {
    var Component = this.routes[this.path]
    this.component = new Component(this.path, this.param)
    return this
  }

  render() {
    this.component.render()
    return
  }

  run() {
    this.component.run()
  }
}

function initializeRouter() {
  var parsedLocation = location.hash.slice(1).toLowerCase()
  new Router()
    .parseLocation(parsedLocation)
    .setPath()
    .setParameter()
    .setComponent()
    .render()
    .run()
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)