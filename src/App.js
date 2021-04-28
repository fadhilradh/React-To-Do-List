import React from "react";
import "./App.css";
import Title from "./title.js";
import ToDoList from "./todoList.js";
import Form from "./form.js";

class App extends React.Component {
   state = {
      toDoList: [],
   };

   handleSubmit = (todo) => {
      this.setState({
         toDoList: [...this.state.toDoList, todo],
      });
   };

   render() {
      const toDoList = this.state.toDoList;
      return (
         <div className="App">
            <Title />
            <ToDoList toDoList={toDoList} />
            <Form onSubmit={this.handleSubmit} />
         </div>
      );
   }
}

export default App;
