import styled from "styled-components";

export const Container = styled.div`
    border-radius: 5px;
    padding: 32px;

    background: rgba(255, 133, 155, 0.05);
    width: 99%;
    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 10px;
    }
    > p{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-bottom: 15px;
        
    }
    margin-left: .7px;
    padding: 32px;
`;