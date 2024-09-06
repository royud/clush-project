import { Button, DatePicker, Flex, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useToast from "../hook/useToast";
import dayjs from "dayjs";
import useTodos from "../hook/useTodos";

const { Title } = Typography;

const EditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const todoId = location.state.todo;

  const { addToast } = useToast();
  const { localData, updateTodo } = useTodos();

  const todo = localData.find((list) => list.id === todoId);

  const [form, setForm] = useState({
    id: 0,
    content: "",
    date: "",
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!form.date || !form.content) {
      setDisabled(true);
    } else if (JSON.stringify(form) === JSON.stringify(todo)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [form]);

  useEffect(() => {
    setForm(todo);
  }, []);

  const setContent = (value) => {
    setForm({ ...form, content: value });
  };

  const setDate = (date, dateString) => {
    setForm({ ...form, date: dateString });
  };

  const goBack = () => {
    navigate(-1);
  };

  const editTodo = () => {
    updateTodo(todo.id, form);
    addToast("수정이 완료되었습니다.");
    navigate(-1);
  };

  return (
    <Flex gap={20} vertical>
      <Title level={2}>Todo 수정</Title>
      <Input
        value={form.content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할 일"
      />
      <DatePicker value={dayjs(form.date)} onChange={setDate} />
      <Flex justify="flex-end" gap={20}>
        <Button onClick={goBack} danger>
          취소
        </Button>
        <Button onClick={editTodo} type="primary" disabled={disabled}>
          수정
        </Button>
      </Flex>
    </Flex>
  );
};
export default EditPage;
