import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "../components/header";
import { useRecoilValue } from "recoil";
import { toastListStore } from "../store/toast";
import ToastList from "../components/TostList";

const Layout = () => {
  const toastList = useRecoilValue(toastListStore);
  return (
    <Wrap>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <ToastList list={toastList} />
    </Wrap>
  );
};

const Wrap = styled.div`
  overflow: hidden;
`;

const StyledMain = styled.main`
  margin: 0 auto;
  width: var(--length-width);
  height: calc(
    100vh - var(--length-height-header) - var(--length-margin-header)
  );
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export default Layout;
