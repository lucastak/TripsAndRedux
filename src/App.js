import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import history from "./services/history";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
