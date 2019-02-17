import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";
//test
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import "./styles.css";
const baseUrl = "http://localhost:3333";

class App extends React.Component {
  // add constructor and CDM
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: {
        description: "",
        imageUrl: "",
        name: "",
        price: "",
        shipping: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get(`${baseUrl}/items`)
      .then(res => {
        console.log(res.data);
        this.setState({
          items: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChanges = e => {
    console.log(e.target);
    e.persist();
    this.setState(prevState => {
      return {
        newItem: {
          ...prevState.newItem,
          [e.target.name]: e.target.value
        }
      };
    });
  };
  //Create
  addItem = e => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/items`, this.state.newItem)
      .then(res => {
        this.setState({ items: res.data });
        this.props.history.push("/shop");
      })
      .catch(err => console.log(err));
  };
  //Delete
  deleteItem = (e, itemId) => {
    e.preventDefault();
    axios
      .delete(`${baseUrl}/items/${itemId}`)
      .then(res => {
        this.setState({ items: res.data });
        this.props.history.push("/shop");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Dustin's Trinkets</h1>
          <div className="nav-links">
            {/* Build a link that takes me to the '/' */}
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/item-form">New Item</NavLink>
          </div>
        </nav>
        {/* Home route - renders a Home component, at the path '/' */}
        <Route exact path="/" component={Home} />
        {/* shop route - renders a Shop component, at the path '/shop' */}
        <Route
          exact
          path="/shop"
          render={props => <Shop {...props} itemList={this.state.items} />}
        />
        {/* {...props} => same as history={props.history} match={props.match} location={props.location}*/}
        <Route
          path="/shop/:itemId"
          render={props => (
            <Item
              {...props}
              deleteItem={this.deleteItem}
              itemList={this.state.items}
            />
          )}
        />
        {/* the : tells react-router that this is a param */}
        <Route
          path="/item-form"
          render={props => (
            <ItemForm
              {...props}
              addItem={this.addItem}
              newItem={this.state.newItem}
              handleChanges={this.handleChanges}
            />
          )}
        />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  rootElement
);
