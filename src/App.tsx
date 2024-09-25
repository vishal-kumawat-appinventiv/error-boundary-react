import ClassTestingComponent from "./modules/ClassTestingComponent";
import FuncTestingComponent from "./modules/FuncTestingComponent";

const App = () => {
  return (
    <>
      <h1>Class Component</h1>
      <ClassTestingComponent />
      <br />
      <br />
      <br />
      <h1>Functional Component</h1>
      <FuncTestingComponent />
    </>
  );
};

export default App;
