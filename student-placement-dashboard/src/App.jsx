import "./App.css";
import ImportData from "./components/crud/ImportData";
import StudentsList from "./components/crud/StudentsList";

import PlacedStudentsList from "./components/placed/PlacedStudentsList";
function App() {
  return (
    <>
      <ImportData />
      <StudentsList />
      <PlacedStudentsList />
    </>
  );
}

export default App;
