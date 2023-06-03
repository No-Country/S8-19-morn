import React from 'react';
import {tasksContainer} from './styles.module.scss';
import Task from '../task/Task';

const TodoList = ({tasks, removeTask}) => {
  return (
    <div className={tasksContainer}>
      {tasks &&
        tasks.map (({id, title, description}) => (
          <Task
            key={id}
            removetask={() => removeTask (id)}
            title={title}
            description={description}
          />
        ))}
    </div>
  );
};

export default TodoList;
