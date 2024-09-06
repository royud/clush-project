import { Button, DatePicker, Flex, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useToast from "../hook/useToast";
import useTodos from "../hook/useTodos";

const { Title } = Typography;

const WritePage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    content: "",
    date: "",
  });
  const [disabled, setDisabled] = useState(true);

  const { addToast } = useToast();
  const { addTodo } = useTodos();

  useEffect(() => {
    if (!form.content || !form.date) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [form]);

  const setContent = (value) => {
    setForm({ ...form, content: value });
  };
  const setDate = (date, dateString) => {
    setForm({ ...form, date: dateString });
  };

  const goBack = () => {
    navigate(-1);
  };

  const save = () => {
    const newTodo = {
      id: Date.now(),
      content: form.content,
      date: form.date,
      completed: false,
    };
    addTodo(newTodo);
    addToast("생성이 완료되었습니다.");
    navigate(-1);
  };

  return (
    <Flex gap={20} vertical>
      <Title level={2}>Todo 작성</Title>
      <Input
        value={form.content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할 일"
      />
      <DatePicker onChange={setDate} />
      <Flex justify="flex-end" gap={20}>
        <Button onClick={goBack} danger>
          취소
        </Button>
        <Button onClick={save} type="primary" disabled={disabled}>
          생성
        </Button>
      </Flex>
    </Flex>
  );
};
export default WritePage;
