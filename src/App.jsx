import "./App.css";
import PersonDetails from "./components/PersonDetails";
import BooksTable from "./components/BooksTable";
import Person from "./components/Person";

function App() {
  return (
    <div>
      <PersonDetails />
      <BooksTable />
      <Person />
    </div>
  );
}

export default App;
