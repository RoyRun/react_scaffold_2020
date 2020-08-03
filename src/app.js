import React, { Suspense } from "react";
import Page from "./views/Page";

class App extends React.Component {
  state = {
    randomCode: 0,
  };

  componentDidMount() {
    console.log(
      "sdkfjslkfjlksjflkajl;dja;lskjdfl;askjdf;laskdjflksdlkssl;cjlskdjclksjclajscljsldkcjslkcjslkjcklsjckaljdclksjclksdjcksjclksjcksdjcsdklcjdk"
    );
  }

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
