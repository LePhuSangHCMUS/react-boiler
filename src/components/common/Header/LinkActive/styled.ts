import preFixStyled from "@Configs/styled-components/";
const styled = preFixStyled("NAV_ITEM");

const NavItem = styled("li")`
  list-style-type: none;
  padding: 5px;
  margin-right: 10px;
  a {
    color: black;
    font-family: "Roboto-Bold";
    font-weight: bold;
  }

  ${(props) =>
    props.isActive &&
    `
    border-bottom: 1px solid rgb(14, 117, 252);
    a{
        color:rgb(14, 117, 252) ;
    }
    `}
`;

export { NavItem };
