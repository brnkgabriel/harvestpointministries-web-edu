class Component {
  constructor(parameter) {
    this.users = null
    this.parameter = parameter

    this.app = document.getElementById('app')

    window.addEventListener('firestore', (e) => { this.update(e) })
  }

  update() {
    if (e.msg === 'success') this.users = e.detail
    else {}
    // update visual with this.users
  }

  render() {
    this.app.innerHTML = MinifiedHTML[this.name]
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

class ErrorComponent extends Component {
  constructor(path, parameter) {
    super(path, parameter)
    this.name = 'Error'
  }
}