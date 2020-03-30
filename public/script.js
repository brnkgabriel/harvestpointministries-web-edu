const HomeComponent   = {
  render: () =>  `<h1>Home</h1>`,
  run: HomeFn
}
const AllTeachers     = {
  render: () =>  `<h1>All Teachers</h1>`,
  run: AllTeachersFn
}
const AddTeacher      = {
  render: () =>  MinifiedHTML['AddTeacher'],
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
  render: () =>  MinifiedHTML['AddStudent'],
  run: AddStudentFn
}
const EditStudent     = {
  render: () =>  MinifiedHTML['EditStudent'],
  run: EditStudentFn
}
const StudentProfile  = {
  render: () =>  MinifiedHTML['StudentProfile'],
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

// Routes
const routes = [
  { path: '/', component: HomeComponent },
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
  // Util should always run after component script so dom elements load before Javascript starts
  Util()
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)