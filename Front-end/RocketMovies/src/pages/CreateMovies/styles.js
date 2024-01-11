import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";


    >body{

        grid-area: "content";
        margin: 20px auto;
        width: 1137px;
        height: 77vh;
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding-bottom: 20px;
        
        overflow-y: scroll;
        
        
        >#initial{
            display: flex;
            gap: 40px;
        }
        >#notes{
            display: flex;
            background-color: ${({theme}) => theme.COLORS.BLACK};
            border-radius: 9px;
            align-items: center;
            align-content: center;
            padding:12px 8px 5px 8px;
            gap: 40px;

        
        }
        >#buttons{
            display: flex;
            gap: 40px;

            button:nth-child(1){
                background-color: ${({theme}) => theme.COLORS.BLACK};
                color: ${({theme}) => theme.COLORS.ROSE};
            }
        }



        body::-webkit-scrollbar {
            width: 12px;             /* width of the entire scrollbar */
            
        }
        
        body::-webkit-scrollbar-track {
            background: none;        /* color of the tracking area */
            
        }
        
        body::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.COLORS.ROSE};    /* color of the scroll thumb */
            border-radius: 20px;       /* roundness of the scroll thumb */
            border: 5px solid ${({theme}) => theme.COLORS.BACKGROUND_800};  /* creates padding around scroll thumb */
        }
    }
`;

export const SubHeader = styled.div`

    grid-area: "header";
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    >a {
            color: ${({theme}) => theme.COLORS.ROSE};

        }

`;