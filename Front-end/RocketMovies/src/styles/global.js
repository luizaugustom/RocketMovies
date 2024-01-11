import { createGlobalStyle } from "styled-components";
import theme from './theme';

export default createGlobalStyle `

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        color: ${({ theme }) => theme.COLORS.WHITE} ;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        -webkit-font-smoothing: antialiased;
    }
    body, input, button ,textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }
    a {
        text-decoration: none;
        
    }
    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
    button:hover , a:hover{
        filter: brightness(0.9);
    }
    
    
    body::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
      }
      
      body::-webkit-scrollbar-track {
        background: none;        /* color of the tracking area */
      }
      
      body::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.COLORS.ROSE};    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 4px solid ${({theme}) => theme.COLORS.BACKGROUND_800};  /* creates padding around scroll thumb */
      }
    



      main::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
      }
      
      main::-webkit-scrollbar-track {
        background: none;        /* color of the tracking area */
      }
      
      main::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.COLORS.ROSE};    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid ${({theme}) => theme.COLORS.BACKGROUND_800};  /* creates padding around scroll thumb */

      }

`;

