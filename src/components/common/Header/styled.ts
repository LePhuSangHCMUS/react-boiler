import styled from 'styled-components/macro'

const HeaderWrapper = styled("div")`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10% 0 10%;
  box-shadow: ${({ theme }) => theme.cssVariable.boxShadow};
` as any;
const NavigatorWrapper = styled("div")`
  display: flex;
`  as any;
const SwitchLanguageWrapper = styled("div")`` as any;

export { NavigatorWrapper, HeaderWrapper, SwitchLanguageWrapper };
