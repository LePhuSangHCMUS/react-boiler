
import preFixStyled from "@Configs/styled-components/";
const styled=preFixStyled("LOGIN_PAGE");



const MainContent = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets//images/Common/background-images.svg") center
    no-repeat;
  background-size: 100% auto;
  // width: 100%;
  min-height: 100vh;
`;

export {MainContent}