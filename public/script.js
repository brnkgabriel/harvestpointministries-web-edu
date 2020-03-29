const HomeComponent   = {
  render: () =>  `<h1>Home</h1>`,
  run: HomeFn
}
const AllTeachers     = {
  render: () =>  `<h1>All Teachers</h1>`,
  run: AllTeachersFn
}
const AddTeacher      = {
  render: () =>  `<div class="-add-teacher"><div class="-title">add teacher</div><div class="-tabs -inline_block -vamiddle"><div class="-tab -inlineblock -posrel -vamiddle active"> <span>basic information</span></div><div class="-tab -inlineblock -posrel -vamiddle"> <span>account information</span></div><div class="-tab -inlineblock -posrel -vamiddle"> <span>social information</span></div></div><div class="-tab-contents"><div class="-tab-content active"><form><div class="form-group -inlineblock -vatop -w50"> <input type="text" required="required" /> <label for="input" class="control-label">Full Name</label><i class="bar"></i></div><div class="form-group -inlineblock -vatop -w50"> <input type="text" required="required" /> <label for="input" class="control-label">Address</label><i class="bar"></i></div><div class="form-group -inlineblock -vatop -w50"> <input type="number" required="required" /> <label for="input" class="control-label">Mobile Number</label><i class="bar"></i></div><div class="form-group -inlineblock -vatop -w50"> <input type="text" required="required" /> <label for="input" class="control-label">Full Name</label><i class="bar"></i></div><div class="form-group -inlineblock -vatop -w50"><textarea required="required"></textarea><label for="textarea" class="control-label">Description</label><i class="bar"></i></div><div class="form-group -inlineblock -vatop -w50"> <select id="gender"><option value="male">Male</option><option value="female">Female</option> </select> <label for="select" class="control-label">Gender</label><i class="bar"></i></div></form></div><div class="-tab-content">account information</div><div class="-tab-content">social information</div></div></div>`,
  run: AddTeacherFn
}
const EditTeacher     = {
  render: () =>  `<h1>Edit Teacher</h1>`,
  run: EditTeacherFn
}
const TeacherProfile  = {
  render: () =>  `<h1>Teacher Profile</h1>`,
  run: TeacherProfileFn
}
const AllStudents     = {
  render: () =>  `<h1>All Students</h1>`,
  run: AllStudentsFn
}
const AddStudent      = {
  render: () =>  `<h1>Add Student</h1>`,
  run: AddStudentFn
}
const EditStudent     = {
  render: () =>  `<h1>Edit Student</h1>`,
  run: EditStudentFn
}
const StudentProfile  = {
  render: () =>  `<h1>Student Profile</h1>`,
  run: StudentProfileFn
}
const AllCourse       = {
  render: () =>  `<h1>All Course</h1>`,
  run: AllCourseFn
}
const AddCourse       = {
  render: () =>  `<h1>Add Course</h1>`,
  run: AddCourseFn
}
const EditCourse      = {
  render: () =>  `<h1>Edit Course</h1>`,
  run: EditCourseFn
}
const CourseProfile   = {
  render: () =>  `<h1>Course Profile</h1>`,
  run: CourseProfileFn
}

const Page1Component = {
  render: () => {
    return `
      <section>
        <h1>Page 1</h1>
      </section>
    `
  }
}

const Page2Component = {
  render: () => {
    return `
      <section>
        <h1>Page 2</h1>
      </section>
    `
  }
}

const ErrorComponent = {
  render: () => {
    return `
      <section>
        <h1>Error</h1>
        <p>This is just a test</p>
      </section>
    `
  }
}

// Routes
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/page1', component: Page1Component },
  { path: '/page2', component: Page2Component },
  { path: '/all-teachers', component: AllTeachers },
  { path: '/add-teacher', component: AddTeacher },
  { path: '/edit-teacher', component: EditTeacher },
  { path: '/teacher-profile', component: TeacherProfile },
  { path: '/all-students', component: AllStudents },
  { path: '/add-student', component: AddStudent },
  { path: '/edit-student', component: EditStudent },
  { path: '/student-profile', component: StudentProfile },
  { path: '/all-course', component: AllCourse },
  { path: '/add-course', component: AddCourse },
  { path: '/edit-course', component: EditCourse },
  { path: '/course-profile', component: CourseProfile },
]

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'

const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined

const router = () => {
  // Find the component based on the current path
  const path = parseLocation()
  
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {}

  document.getElementById('app').innerHTML = component.render()
  component.run()
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)