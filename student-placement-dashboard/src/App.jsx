import "./App.css";
import ImportData from "./components/crud/ImportData";
import StudentsList from "./components/crud/StudentsList";

function App() {
  return (
    <>
      <div className="container m-1">
        <ImportData />
        <StudentsList />
      </div>
    </>
  );
}

export default App;
