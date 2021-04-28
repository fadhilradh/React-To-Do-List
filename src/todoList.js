import "./todoList.css";

const ToDoList = (props) => {
   const lists = props.toDoList.map((list, index) => {
      return (
         <li key={index} className="point">
            {list}
         </li>
      );
   });
   return (
      <div className="container">
         <ul>{lists}</ul>
      </div>
   );
};

export default ToDoList;
