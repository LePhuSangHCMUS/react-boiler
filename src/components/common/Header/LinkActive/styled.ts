import styled from 'styled-components/macro'

const NavItem = styled("li")`
  list-style-type: none;
  padding: 5px;
  margin-right: 10px;
  a {
    color: black;
    font-family: "Roboto-Bold";
    font-weight: bold;
  }

  ${(props:any) =>
    props.isActive &&
    `
    border-bottom: 1px solid rgb(14, 117, 252);
    a{
        color:rgb(14, 117, 252) ;
    }
    `}
` as any;

export { NavItem };
