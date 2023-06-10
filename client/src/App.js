import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Switch>
        
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup}/>
          <Route exact path="/home" component={Home} />
          <Route path="/addContact" component={AddEdit} />
          <Route path="/update/:id" component={AddEdit} />
          <Route path="/view/:id" component={View} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
