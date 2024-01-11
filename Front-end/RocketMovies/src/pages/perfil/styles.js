import styled from "styled-components"


export const Container = styled.div`
    display: grid;
    grid-template-columns: "header" "content";
    > header {
        grid-area: "header";
        width: 100%;
        height: 144px;

        background: rgba(255, 133, 155, 0.05);

        padding-top: 68px;
        padding-left: 100px;

        
        >a{
        color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }


`;
export const Form = styled.form`
    grid-area: "content";
    width: 340px;
    display: flex;
    flex-direction: column;
    margin: -70px auto;
    
    >div:nth-child(4){         //espaço entre o input email e senha
        margin-top: 16px ;
    }


`;
export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;

    width: 186px;
    height: 186px;

    >img{
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }

    >label {
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.ROSE};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;
        }

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;

            color: ${({theme}) => theme.COLORS.BACKGROUND_800} ;
        }

`;