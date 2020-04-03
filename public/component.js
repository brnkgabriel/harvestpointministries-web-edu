class Component {
  constructor(path, parameter) {
    this.path = new FormatPath(path)
      .replaceAll('/', '')
      .camelCase()
    this.parameter = parameter
  }

  render() {

  }

  run() {

  }
}

class Home extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}

class AllTeachers extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}

class AddTeacher extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}

class TeacherProfile extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}

class AllStudents extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}

class AddStudent extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}

class StudentProfile extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}

class AllCourse extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}

class AddCourse extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}

class CourseProfile extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}

class Error extends Component {
  constructor(path, parameter) {
    super(path, parameter)
  }
}