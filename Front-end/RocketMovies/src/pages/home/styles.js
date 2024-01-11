import styled from "styled-components";


export const Container = styled.div`
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";


`;
export const SubHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    grid-area: "header";
    > button {
        width: 207px;
        height: 48px;
    
    };
    > h2 {
        width: 184px;
    }

    
    

`;
export const Content = styled.div`
    padding-top: 15px;
    margin: 0 auto;
    width: 80%;

    
    > main {
        grid-area: "content";
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        height: 68vh;
        gap: 15px;
        margin-bottom: 25px;

        border-radius: 1px;


    }
    
`;
