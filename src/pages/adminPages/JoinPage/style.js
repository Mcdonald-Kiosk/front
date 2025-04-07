import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const logoContainer = css`
    display: flex;
    justify-content: start;
    align-items: end;
    margin-left: -80%;
    flex-grow: 1;

    & img {
        width: 20rem;
    }
`;

export const test1 = css`
    display: flex;
    flex-grow: 5;
`;

export const formWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 400px;
`;

export const title = css`
    font-size: 5rem;
    font-weight: 700;
    margin: .5rem 0 2rem 0;
    text-align: center;
`;

export const formContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    
`;

export const buttonContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 5rem;
    width: 100%;
`;


export const button = css`
    box-sizing: border-box;
    border: none;
    padding: 0.5rem 0;
    font-size: 2rem;
    font-weight: 700;
    color: #777777;
    background-color: transparent;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-align: center;
    width: 100%;
    cursor: pointer;

    &:hover {
        text-shadow: 0 0 3rem #333333;
    }
`;



export const rightContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 3rem;
`;

export const socialLoginTitle = css`
    width: max-content;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
`;

export const socialLoginBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & > img {
        margin-bottom: 1rem;
        width: 7rem;
        height: 7rem;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.15);
        }
    }
`;