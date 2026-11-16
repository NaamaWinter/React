function CourseDetails(props) {
  return (
    <div>
      <h3>Course: {props.courseName}</h3>
      <p>Grade: {props.grade}</p>
    </div>
  );
}

export default CourseDetails;
