import preFixStyled from "@Configs/styled-components/";
const styled=preFixStyled("PAGE_NOT_FOUND");



const MainContent = styled("div")`
 width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding:5rem 10%;
    text-align: center;
`;

export {MainContent}