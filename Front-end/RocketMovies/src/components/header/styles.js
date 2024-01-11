import styled from 'styled-components';


export const Container = styled.header`

    grid-area: header ;


    height: 105px;
    width: 100%;
    border-bottom-width:1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 24px 80px;

    >img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-left: -48px;
    }

    h2 {
        margin-right: 64px;
        margin-top: +6px;
        color: ${({theme}) => theme.COLORS.ROSE};
    }


`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    align-content: space-between;


    

    > div{
        display: flex;
        flex-direction: column;
        margin-left: 64px;
        line-height: 24px;
        width: 200px;

        span {
            font-size:16px;
            color:${({ theme }) => theme.COLORS.GRAY_100};

        }
        

    }
`;

export const Logout = styled.button`

    border: none;
    background: none;


    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 13px;



`;
