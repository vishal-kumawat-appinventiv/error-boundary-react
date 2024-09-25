import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import { useEffect } from "react";

const ErrorFallback = () => {
  return (
    <div style={{ padding: "1rem", margin: "1rem", border: "1px solid red" }}>
      <h1>{"Error: Something went wrong"}</h1>
    </div>
  );
};

const ComponentThatMayFail = () => {
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    try {
      throw new Error("An error occurred!");
    } catch (error) {
      showBoundary(error);
    }
  }, [showBoundary]);

  return (
    <div>
      <h1>{"NO ERROR , YOU ARE IN SAFE HANDS :)"}</h1>
    </div>
  );
};

const FuncTestingComponent = () => (
  <ErrorBoundary fallback={<ErrorFallback />}>
    <ComponentThatMayFail />
  </ErrorBoundary>
);

export default FuncTestingComponent;
