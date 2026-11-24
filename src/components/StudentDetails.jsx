function StudentDetails(props) {
  const handleExit = () => {
    const exitTime = new Date().toLocaleTimeString();
    console.log(`${props.student.name} - יצאת בשעה ${exitTime}`);
    props.onExit();
  };

  return (
    <div>
      <h2>פרטי תלמיד</h2>

      <p>שם: {props.student.name}</p>
      <p>גיל: {props.student.age}</p>
      <p>ממוצע ציונים: {props.student.average}</p>

      {props.student.average > 90 && <p>תלמיד מצטיין</p>}

      {props.student.average < 60 && <p>טעון שיפור</p>}

      <button onClick={handleExit}>יציאה מבית הספר</button>

      <hr />
    </div>
  );
}
export default StudentDetails;
