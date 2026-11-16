import Child from "./Child";
import ChildGrade from "./ChildGrade";

function Person() {
  return (
    <div>
      <h1>Person</h1>
      <p>Name: Naama</p>
      <p>Age: 19</p>
      <Child />
      <ChildGrade />
    </div>
  );
}

export default Person;
