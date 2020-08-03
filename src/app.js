import React, { Suspense } from "react";
import Page from "./views/Page";

class App extends React.Component {
  state = {};

  componentDidMount() {}

  clickBtn = () => {};

  render() {
    return (
      <div>
        <Suspense fallback="loading">
          <Page />
        </Suspense>
      </div>
    );
  }
}
export default App;
