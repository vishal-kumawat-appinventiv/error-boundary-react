import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface ErrorState {
  isError: boolean;
  message: string;
}

class ErrorBoundaryClass extends Component<Props, ErrorState> {
  constructor(props: Props) {
    super(props);
    this.state = { isError: false, message: "" };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ isError: true, message: error.toString() });
  }

  render() {
    if (this.state.isError) {
      return (
        <div
          style={{ padding: "1rem", margin: "1rem", border: "1px solid red" }}
        >
          <h1>{this.state.message}</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaryClass;
