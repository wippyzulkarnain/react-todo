import React from 'react';

const TodoListDetail = props => {
    return(
        <div>
            Todo : {props.name} <br />
            <button onClick={() => props.deleteTodo(props.index)}>Delete</button> <br /> <hr />
        </div>
    )
}
export default TodoListDetail;