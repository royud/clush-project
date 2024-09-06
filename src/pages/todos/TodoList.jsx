import { CloseOutlined, EditFilled } from "@ant-design/icons";
import { Checkbox, Flex, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import useTodos from "../../hook/useTodos";

const { Title } = Typography;

const Todo = ({ todo }) => {
  const { localData, deleteTodo } = useTodos();
  const [checked, setChecked] = useState(false);

  const onChecked = (e) => {
    localData.splice(
      localData.findIndex((item) => item.id === todo.id),
      1,
      {
        ...todo,
        completed: e.target.checked,
      }
    );

    localStorage.setItem("todo", JSON.stringify(localData));

    setChecked(e.target.checked);
  };

  useEffect(() => {
    setChecked(todo.completed);
  }, []);

  const navigate = useNavigate();
  const [isShowButton, setIsShowButton] = useState(false);

  const showButton = () => {
    setIsShowButton(true);
  };
  const hiddenButton = () => {
    setIsShowButton(false);
  };

  return (
    <Flex
      onMouseOver={showButton}
      onMouseOut={hiddenButton}
      align="center"
      justify="space-between"
    >
      <Checkbox checked={checked} onChange={onChecked}>
        <StyledSentence $checked={checked}>{todo.content}</StyledSentence>
      </Checkbox>
      {isShowButton && (
        <Flex align="center" gap={10}>
          <EditFilled
            onClick={() => navigate("/edit", { state: { todo: todo.id } })}
          />
          <CloseOutlined
            onClick={() => deleteTodo(todo.id)}
            style={{ color: `var(--color-danger)` }}
          />
        </Flex>
      )}
    </Flex>
  );
};

export const TodoList = ({ date, todos }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

  const yyyy_mm_dd = `${year}-${month}-${day}`;

  return (
    <Flex vertical>
      <Title level={3}>{date === yyyy_mm_dd ? "오늘" : date}</Title>
      <StyledTodoList>
        {todos?.map((todo) => (
          <Todo todo={todo} />
        ))}
      </StyledTodoList>
    </Flex>
  );
};
const StyledTodoList = styled.ul`
  width: 300px;
  height: 100%;
  padding: 10px;
  border-left: 1px solid var(--color-gray);
  transition: border-left 0.3s;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &:hover {
    border-left: 1px solid var(--color-main);
  }
`;
const StyledSentence = styled.span`
  transition: all 0.3s;
  ${({ $checked }) =>
    $checked &&
    `
    color: var(--color-gray);
    text-decoration: line-through;
  `}
`;
