import preFixStyled from "@Configs/styled-components/";
const styled = preFixStyled("HEADER");

const HeaderWrapper = styled("div")`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10% 0 10%;
  box-shadow: ${({ theme }) => theme.cssVariable.boxShadow};
`;
const NavigatorWrapper = styled("div")`
  display: flex;
`;
const SwitchLanguageWrapper = styled("div")``;

export { NavigatorWrapper, HeaderWrapper, SwitchLanguageWrapper };
