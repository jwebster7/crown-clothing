import React from "react";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from "./error-boundary.styles";

import ErrorImage from "../../assets/error-image.png";

// there is currently no Hook equivalent to getDerivedStateFromError() so I had to use a class component here.
class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: false };
  }

  componentDidCatch(err, info) {
    console.log(err);
    console.log(info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={ErrorImage} />
          <ErrorImageText>&#x1F605; Oops! Something broke. Please try refreshing the page.</ErrorImageText>
        </ErrorImageOverlay>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
