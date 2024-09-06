import { useRecoilState } from "recoil";
import { todosStore } from "../store/todo";
import { useEffect } from "react";

const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosStore);
  const localData = JSON.parse(localStorage.getItem("todo"));

  const getTodos = () => {
    if (localData) {
      const dateList = {};
      for (let i = 0; i < localData.length; i++) {
        const newKey = localData[i].date;
        const keys = Object.keys(dateList);

        if (!keys.includes(newKey)) {
          dateList[newKey] = [localData[i]];
        } else {
          dateList[newKey] = [...dateList[newKey], localData[i]];
        }
      }

      setTodos(dateList);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = (newTodo) => {
    if (localData) {
      localStorage.setItem("todo", JSON.stringify([newTodo, ...localData]));
    }

    if (!localData) {
      localStorage.setItem("todo", JSON.stringify([newTodo]));
    }
  };

  const updateTodo = (id, form) => {
    const targetTodoIdx = localData.findIndex((todo) => todo.id === id);
    localData.splice(targetTodoIdx, 1, form);

    localStorage.setItem("todo", JSON.stringify(localData));
  };

  const deleteTodo = (id) => {
    const targetTodoIdx = localData.findIndex((todo) => todo.id === id);
    localData.splice(targetTodoIdx, 1);

    localStorage.setItem("todo", JSON.stringify(localData));
    getTodos();
  };

  return { todos, localData, addTodo, updateTodo, deleteTodo };
};

export default useTodos;
