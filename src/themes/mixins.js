//Mixins
import { css } from "styled-components";
import { breakpoints } from './variables';

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
//===========================Responsive Mixin=======================================
//Define
 const respondToMixin = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

//Usage
// import { respondTo } from '@themes/mixin';

// // Background color changes to
// // aqua from breakpoint sm (768px)
// export const ExampleComponent = styled.div`
//   background-color: lime;

//   ${respondTo.sm`
//     background-color: aqua;
//   `}
// `;




export { linkMixin, respondToMixin, scrollStyle };

