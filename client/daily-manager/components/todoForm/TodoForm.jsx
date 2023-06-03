import React from 'react';
import {
  form,
  titleInput,
  descriptionInput,
  inputsContainer,
  add,
  formContainer,
} from './styles.module.scss';

const TodoForm = ({onSubmit, onChange, task}) => {
  const {title, description} = task;

  return (
    <div className={formContainer}>
      <h2>Todo List</h2>
      <form className={form} onSubmit={e => onSubmit (e)}>
        <h3>Add Task</h3>
        <div className={inputsContainer}>
          <input
            autoComplete="off"
            className={titleInput}
            onChange={e => onChange (e)}
            name="title"
            value={title}
            placeholder="Title..."
          />
          <textarea
            autoComplete="off"
            className={descriptionInput}
            onChange={e => onChange (e)}
            name="description"
            value={description}
            placeholder="Description..."
          />
          <button className={add}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
