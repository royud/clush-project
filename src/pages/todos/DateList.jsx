import { Flex, Pagination } from "antd";
import { TodoList } from "./TodoList";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useTodos from "../../hook/useTodos";

export const DateList = () => {
  const { todos } = useTodos();

  const [dateList, setDateList] = useState([]);

  useEffect(() => {
    if (todos) {
      const date = Object.keys(todos);
      setDateList(date);
    }
  }, [todos]);

  const [nowPage, setNowPage] = useState(1);

  const onChange = (e) => {
    setNowPage(e);
  };

  return (
    <>
      <ListBox>
        <StyledDateList $nowpage={nowPage}>
          {dateList.sort().map((date) => (
            <TodoList date={date} todos={todos[date]} />
          ))}
          {dateList.length === 0 && <>Todo를 등록해보세요!</>}
        </StyledDateList>
      </ListBox>
      <Flex justify="center">
        <Pagination
          onChange={onChange}
          simple
          defaultCurrent={1}
          pageSize={4}
          total={dateList.length}
        />
      </Flex>
    </>
  );
};
const ListBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const StyledDateList = styled.ul`
  height: 100%;
  display: flex;
  gap: 50px;
  transition: transform 0.3s;
  transform: translateX(${({ $nowpage }) => `${1400 * -($nowpage - 1)}`}px);
`;
