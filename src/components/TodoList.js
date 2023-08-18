import React, { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

//flex :1 --> 자신이 차지 할 수 있는 영역 꽉 채우도록함
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        ></TodoItem>
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
