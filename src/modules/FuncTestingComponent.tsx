import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import { useEffect, useState } from "react";

const ErrorFallback = ({ ErrorMsg }: { ErrorMsg: string }) => {
  return (
    <div style={{ padding: "1rem", margin: "1rem", border: "1px solid red" }}>
      <h1>{`${ErrorMsg}`}</h1>
    </div>
  );
};

const ComponentThatMayFail = ({ setErrorMsg }: { setErrorMsg: any }) => {
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    try {
      throw new Error("Something went wrong");
    } catch (error) {
      setErrorMsg(error);
      showBoundary(error);
    }
  }, [showBoundary]);

  return (
    <div>
      <h1>{"NO ERROR , YOU ARE IN SAFE HANDS :)"}</h1>
    </div>
  );
};

const FuncTestingComponent = () => {
  const [ErrorMsg, setErrorMsg] = useState<string>("");

  console.log("ErrorMSG: ", ErrorMsg);

  return (
    <ErrorBoundary fallback={<ErrorFallback ErrorMsg={ErrorMsg} />}>
      <ComponentThatMayFail setErrorMsg={setErrorMsg} />
    </ErrorBoundary>
  );
};

export default FuncTestingComponent;
