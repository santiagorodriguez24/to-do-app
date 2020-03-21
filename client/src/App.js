import React, { Component } from 'react';
import './styles/app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import TodosListContainer from './containers/TodosListContainer';
import TodoContainer from './containers/TodoContainer';
import NewTodoContainer from './containers/NewTodoContainer';
import NotFoundPage from './components/NotFoundPage';

class App extends Component {

  renderHome = () => <HomeContainer />;

  renderTodoContainer = () => <TodoContainer />

  renderTodoListContainer = () => <TodosListContainer />;

  renderTodoNewContainer = () => <NewTodoContainer />;

  render() {
    return (
      <Router>
        <Switch>
          {/* 
            Switch es necesario para que se muestre solo una de las rutas, ya que /new se interpreta como /:id sin Switch
            se muestran ambas rutas. Toma siempre la primera coincidencia por eso se debe poner la ruta /new antes que /:id
            como regla siempre se debe poner la ruta mas especifica primero, la que tiene mas concatenaciones y menos wildcats
            por ejemplo /todos/new debe ir antes que /todos
            */}
          <Route exact path="/" component={this.renderHome}></Route>
          <Route exact path="/todos" component={this.renderTodoListContainer}></Route>
          <Route path="/todos/new" component={this.renderTodoNewContainer}></Route>
          <Route
            path="/todos/:id"
            render={props => <TodoContainer id={props.match.params.id} />} // en props tengo match, location y history
          >
          </Route>
          <Route
            render={props => <NotFoundPage {...props} />}
          >
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default App;
