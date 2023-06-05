import React, { useEffect, useState } from "react";
import TodoForm from "../../../components/todoForm/TodoForm";
import TodoList from "../../../components/todoList/TodoList";
import { main } from "./styles.module.scss";
import MainLayout from "../../../components/MainLayout/MainLayout";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const localStorageTasks = localStorage.getItem("task");
      return localStorageTasks ? JSON.parse(localStorageTasks) : [];
    } catch (error) {
      return [];
    }
  });

  const [task, setTask] = useState({
    id: Math.random() * (99999999999 - 0) + 0,
    titulo: "",
    descripcion: "",
  });

  const { title, description } = task;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    const newtasks = [...tasks].filter((task) => task.id !== id);
    setTasks(newtasks);
  };

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      alert("Debes completar los dos campos");
    } else {
      addTask(task);
      setTask({
        id: Math.random() * (99999999999 - 0) + 0,
        title: "",
        description: "",
      });
    }
  };

  return (
    <>
      <MainLayout>
        <main className={main}>
          <TodoForm onSubmit={onSubmit} onChange={onChange} task={task} />
          <TodoList tasks={tasks} removeTask={removeTask} />
        </main>
      </MainLayout>
    </>
  );
}

export default Todo;