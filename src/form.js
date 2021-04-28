import React from "react";
import "./form.css";

class Form extends React.Component {
   initialState = {
      todo: "",
   };

   state = this.initialState;
   submitForm = () => {
      this.props.onSubmit(this.state.todo);
      this.setState(this.initialState);
   };

   handleChange = (event) => {
      const { name, value } = event.target;

      this.setState({
         [name]: value,
      });
   };
   render() {
      const { todo } = this.state;
      return (
         <form className="form">
            <label htmlFor="todo">Add To Do</label>
            <input
               className="input"
               type="text"
               id="todo"
               name="todo"
               value={todo}
               onChange={this.handleChange}
            />
            <input type="button" value="Submit" onClick={this.submitForm} />
         </form>
      );
   }
}

export default Form;
