import { Alert } from "antd";
import styled from "styled-components";

const ToastList = ({ list }) => {
  return (
    <StyledToastList>
      {list.map((toast) => (
        <li>
          <Alert message={toast.message} type={toast.type} />
        </li>
      ))}
    </StyledToastList>
  );
};

export default ToastList;

const StyledToastList = styled.ul`
  position: fixed;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
