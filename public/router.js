

var datastore = new Datastore()
var ui = new firebaseui.auth.AuthUI(datastore.auth);
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  // signInFlow: 'popup',
  signInSuccessUrl: '#/',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID, 
  ],
  // // Terms of service url.
  // tosUrl: '<your-tos-url>',
  // // Privacy policy url.
  // privacyPolicyUrl: '<your-privacy-policy-url>'
};
ui.start('#firebaseui-auth-container', uiConfig);
// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     {
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       requireDisplayName: false
//     },
//             firebase.auth.GoogleAuthProvider.PROVIDER_ID, 
//   ]
// });
class Router {
  constructor(routes) {
    this.routes = routes
    this.location = null
    this.path = null
    this.parameter = null
    this.component = null
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

  setComponent() {
    var Component = this.routes[this.path] || ErrorComponent
    this.component = new Component(this.parameter)
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