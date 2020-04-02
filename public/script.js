
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

window.addEventListener('hashchange', router)
window.addEventListener('load', router)