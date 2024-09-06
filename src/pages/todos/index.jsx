import { Button, Flex, Typography } from "antd";
import { useNavigate } from "react-router";
import { DateList } from "./DateList";

const { Title } = Typography;

const TodosPage = () => {
  const navigate = useNavigate();

  const goToWrite = () => {
    navigate("/write");
  };

  return (
    <>
      <Flex justify="space-between" align="center">
        <Title level={2}>Todo 목록</Title>
        <Button onClick={goToWrite} type="primary">
          Todo 생성
        </Button>
      </Flex>

      <DateList />
    </>
  );
};

export default TodosPage;
