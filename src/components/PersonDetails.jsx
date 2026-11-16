import CourseDetails from "./CourseDetails";
function PersonDetails({
  name = "Naama",
  age = 22,
  courses = [
    { courseName: "React", grade: 95 },
    { courseName: "Java", grade: 88 },
  ],
}) {
  return (
    <div>
      <h1>Personal Details</h1>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <h2>My Courses:</h2>

      {courses.map((course) => (
        <CourseDetails
          key={course.courseName}
          courseName={course.courseName}
          grade={course.grade}
        />
      ))}
    </div>
  );
}

export default PersonDetails;
