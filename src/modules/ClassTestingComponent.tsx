import ErrorBoundaryClass from "../components/ErrorBoundaryClass";

const ClassTestingComponent = () => {
  return (
    <ErrorBoundaryClass>
      <ErrorComponent />
    </ErrorBoundaryClass>
  );
};

export default ClassTestingComponent;

const ErrorComponent = () => {
  // throw new Error("Something went wrong");

  return (
    <>
      <h1>{"NO ERROR , YOU ARE IN SAFE HANDS :)"}</h1>
    </>
  );
};
