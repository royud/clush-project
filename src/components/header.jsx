import { useNavigate } from "react-router";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <div className="wrap">
        <div className="logo" onClick={() => navigate("/")}>
          CLUSH
        </div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.header`
  height: var(--length-height-header);
  box-shadow: 0px 0px 5px 0px gray;
  .wrap {
    width: var(--length-width);
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .logo {
    font-weight: 700;
    font-size: 30px;
    cursor: pointer;
    color: var(--color-main);
  }
  nav {
    display: flex;
    gap: 10px;
  }
  margin-bottom: 30px;
`;

export default Header;
