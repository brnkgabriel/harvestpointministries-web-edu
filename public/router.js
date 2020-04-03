
// const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'

// const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined

// const router = () => {
//   // Find the component based on the current path
//   const parsedLocation = parseLocation()
//   const splitLocation = parsedLocation.split('?')
//   const path = splitLocation[0]
//   const param = splitLocation[1]

//   // If there's no matching route, get the "Error" component
//   const { component = ErrorComponent } = findComponentByPath(path, routes) || {}

//   // render below to be replaced by run because we're assigning the component function to it
//   document.getElementById('app').innerHTML = component.render(path, param)
//   // component.run(path, param)
//   // Util should always run after component script so dom elements load before Javascript starts
//   Util()
// }

class Router {
  constructor(routes) {
    this.routes = routes
    this.location = null
    this.path = null
    this.parameter = null
    this.component = null
  }

  setLocation() {
    this.location = location.hash.slice(1).toLowerCase() || '/'
    return this
  }

  setPath() {
    this.path = this.location.split('?')[0]
    return this
  }

  setParameter() {
    this.parameter = this.location.split('?')[1]
    return this
  }

  setComponent() {
    var Component = this.routes[this.path]
    this.component = new Component(this.path, this.parameter)
    return this
  }

  render() {
    this.component.render()
    return this
  }

  run() {
    this.component.run()
  }
}

function initializeRouter() {
  var routes = {
    '/': Home,
    '/all-teachers': AllTeachers,
    '/add-teacher': AddTeacher,
    '/teacher-profile': TeacherProfile,
    '/all-students': AllStudents,
    '/add-student': AddStudent,
    '/student-profile': StudentProfile,
    '/all-course': AllCourse,
    '/add-course': AddCourse,
    '/course-profile': CourseProfile
  }

  new Router(routes)
    .setLocation()
    .setPath()
    .setParameter()
    .setComponent()
    .render()
    .run()
}

window.addEventListener('hashchange', initializeRouter)
window.addEventListener('load', initializeRouter)