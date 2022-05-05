import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
