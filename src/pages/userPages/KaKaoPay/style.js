import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 71.1rem;
    border: 0.2rem solid black;
    background-color: #EEEEEE;
    justify-content: center;
    align-items: center;
`;

export const header = css`
    display: flex;
    width: 85%;
    height: 90%;
    border: 0.1rem solid black;
    background-color: white;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0,0.25); 
    
    & > div {
        display: flex;
        height: 10rem;
        width: 10rem;
        margin: 1.2rem; 
            
        & > img {
            display: flex;
            height: 100%;
            width: 100%;
        }
    }
`;