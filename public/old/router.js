
var datastore  = new Datastore()
class Router {
  constructor(routes) {
    this.routes     = routes
    this.location   = null
    this.path       = null
    this.parameter  = null
    this.component  = null
    this.user       = new User()
  }

  setLocation(url = '/') {
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

  setComponent(datastore) {
    var parentEl = 'appEl'
    if (!this.user.email) {
      this.path = '/auth'
      parentEl = 'authEl'
    }
    var Component = this.routes[this.path] || ErrorComponent
    var params = {
      parameter: this.parameter,
      parentEl,
      datastore
    }
    this.component = new Component(params)
    return this
  }

  render() {
    this.component.render()
    return this
  }

  run() { this.component.run() }
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
    '/course-profile': CourseProfile,
    '/auth': Auth
  }
  new Router(routes)
    .setLocation()
    .setPath()
    .setParameter()
    .setComponent(datastore)
    .render()
    .run()
}

window.addEventListener('hashchange', initializeRouter)
window.addEventListener('load', initializeRouter)