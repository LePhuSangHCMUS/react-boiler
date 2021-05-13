//Mixins
import { css } from "styled-components";

const linkMixin = css`
  text-decoration: none;
`;


const scrollStyle = css`
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(169, 169, 169);
    outline: 1px solid slategrey;
  }
`;

export { linkMixin ,scrollStyle};
