const HomeComponent   = { render: () =>  `<h1>Home</h1>` }
const AllTeachers     = { render: () =>  `<h1>All Teachers</h1>` }
const AddTeacher      = { render: () =>  `<h1>Add Teacher</h1>` }
const EditTeacher     = { render: () =>  `<h1>Edit Teacher</h1>` }
const TeacherProfile  = { render: () =>  `<h1>Teacher Profile</h1>` }
const AllStudents     = { render: () =>  `<h1>All Students</h1>` }
const AddStudent      = { render: () =>  `<h1>Add Student</h1>` }
const EditStudent     = { render: () =>  `<h1>Edit Student</h1>` }
const StudentProfile  = { render: () =>  `<h1>Student Profile</h1>` }
const AllCourse       = { render: () =>  `<h1>All Course</h1>` }
const AddCourse       = { render: () =>  `<h1>Add Course</h1>` }
const EditCourse      = { render: () =>  `<h1>Edit Course</h1>` }
const CourseProfile   = { render: () =>  `<h1>Course Profile</h1>` }

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
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)