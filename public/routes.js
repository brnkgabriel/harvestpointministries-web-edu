const HomeComponent   = {
  render: () =>  `<h1>Home</h1>`,
  // run: HomeFn
}
const AllTeachers     = {
  render: () =>  `<h1>All Teachers</h1>`,
  // run: AllTeachersFn
}
const AddTeacher      = {
  render: () =>  MinifiedHTML['AddTeacher'],
  // run: AddTeacherFn
}
const TeacherProfile  = {
  render: () =>  `<h1>Teacher Profile</h1>`,
  // run: TeacherProfileFn
}
const AllStudents     = {
  render: () =>  MinifiedHTML['AllStudents'],
  // run: AllStudentsFn
}
const AddStudent      = {
  render: () =>  MinifiedHTML['AddStudent'],
  // run: AddStudentFn
}
const StudentProfile  = {
  render: StudentProfileFn
  // run: StudentProfileFn
}
const AllCourse       = {
  render: () =>  `<h1>All Course</h1>`,
  // run: AllCourseFn
}
const AddCourse       = {
  render: () =>  `<h1>Add Course</h1>`,
  // run: AddCourseFn
}
const CourseProfile   = {
  render: () =>  `<h1>Course Profile</h1>`,
  // run: CourseProfileFn
}

const ErrorComponent  = {
  render: () => MinifiedHTML['Page404'],
  // run: Page404Fn
}

// Routes
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/all-teachers', component: AllTeachers },
  { path: '/add-teacher', component: AddTeacher },
  { path: '/teacher-profile', component: TeacherProfile },
  { path: '/all-students', component: AllStudents },
  { path: '/add-student', component: AddStudent },
  { path: '/student-profile', component: StudentProfile },
  { path: '/all-course', component: AllCourse },
  { path: '/add-course', component: AddCourse },
]