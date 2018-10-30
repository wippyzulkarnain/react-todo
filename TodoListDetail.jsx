import React from 'react';

const TodoListDetail = props => {
    return(
        <div>
            Todo : {props.todo} <br />
            <button>Delete</button>
        </div>
    )
}