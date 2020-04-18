class Component {
  constructor(json) {
    this.users      = null
    this.parameter  = json['parameter']
    this.appEl      = document.getElementById('app')
    this.authEl     = document.getElementById('auth')
    this.modal      = document.getElementById('modal')
    this.pages      = document.getElementById('pages')
    this.user       = new User()
    this.datastore  = json['datastore']
    this.parentEl   = json['parentEl']

    window.addEventListener('firestore', (e) => { this.update(e) })
  }

  update() {
    if (e.msg === 'success') this.users = e.detail
    else {}
  }

  render() {
    // this.appEl.innerHTML = MinifiedHTML[this.name]
    if (this.user.email) {
      [this.modal, this.pages].map(el => el.classList.remove('-hide'))
      this.authEl.classList.add('-hide')
    } else {
      [this.modal, this.pages].map(el => el.classList.add('-hide'))
      this.authEl.classList.remove('-hide')
    }
    // this[this.parentEl].innerHTML = MinifiedHTML[this.name]
    this[this.parentEl].innerHTML = All[`${this.name}Component`].render()
    console.log('hey name is', this.name)
  }

  tabListener() {
    var self = this
    var tab_contents  = document.querySelectorAll('.-tab-content')
    var tabs          = document.querySelectorAll('.-tab')
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', function () {
        self.removeAddActive(tab_contents, tab_contents[idx])
        self.removeAddActive(tabs, tab)
      })
    })
  }

  removeAddActive(toRemove, toAdd) {
    toRemove.forEach(each => each.classList.remove('active'))
    toAdd.classList.add('active')
  }

  run() {
    this.tabListener()
  }
}

class Auth extends Component {
  // todo: create validateEmail function and put the appropriate error element in the form
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'Auth'
  }

  run() {
    super.run()
    this.loginListener()
  }

  loginListener() {
    // the login, password and submit elements are initialized here
    // because the run function executes after the they've been rendered
    // if they were put in the constructor they wouldn't have been rendered and so
    // will be null
    this.login    = document.getElementById('login')
    this.password = document.getElementById('password')
    this.submit   = document.getElementById('submit')
    var self = this
    // this.submit.addEventListener('click', function () {
    //   var username = self.login.value
    //   var password = self.password.value
    // })
    this.submit.addEventListener('click', () => this.signIn(self.login.value, self.password.value))
  }

  signIn(email, password) {
    this.datastore.auth.signInWithEmailAndPassword(email, password)
    .then(function (result) {
      localStorage.setItem('firebaseui::rememberedAccounts', result['user']['email'])
      location.reload()
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('errorCode', errorCode, 'errorMessage', errorMessage)
    });
  }
}

class Home extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'Home'
  }
}

class AllTeachers extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'AllTeachers'
  }
}

class AddTeacher extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'AddTeacher'
  }
}

class TeacherProfile extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'TeacherProfile'
  }
}

class AllStudents extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'AllStudents'
  }

  run() {
    var allStudents = document.querySelectorAll('.-table .-row:not(.-head)')
    var rGraph = document.querySelector('r-graph')
    allStudents.forEach(student => {
      student.addEventListener('click', function () {
        var aggregate = student.getAttribute('data-agg')
        rGraph.setAttribute('vertices', aggregate)
      })
    })
  }
}

class AddStudent extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'AddStudent'
  }
}

class StudentProfile extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'StudentProfile'
  }
}

class AllCourse extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'AllCourse'
  }
}

class AddCourse extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'AddCourse'
  }
}

class CourseProfile extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'CourseProfile'
  }
}

class Error extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'Error'
  }
}
