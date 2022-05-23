//this is to catch Javascript errors 

import React from "react";
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log error info somewhere
  }

  render() {
    if (this.state.errorInfo) {
      return <p>Something went wrong with {this.props.errMessage}! Please reload or contact the developer</p>;
    }
    return this.props.children;
  }
}