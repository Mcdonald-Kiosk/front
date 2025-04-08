import { css } from "@emotion/react";

export const container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const logoContainer = css`
    margin-left: -80%;

    & img {
        width: 20rem;
    }
`;

export const title = css`
    font-size: 5rem;
    font-weight: 700;
    margin: .5rem 0 2rem;
    text-align: center;
`;

export const groupBox = css`
    box-sizing: border-box;
    display: flex;
    padding: 0.6rem 0;
`;

export const textInput = css`
    box-sizing: border-box;
    outline: none;
    margin-bottom: 1rem;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.5rem;
    padding: 0.5rem 5rem;
    width: 50rem;
    height: 8rem;
    background-color: #dbdbdb;

    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: 0.1rem;

    &:focus {
        box-shadow: 0rem 0rem 0.2rem 0.2rem #7edaff;
    }
`;

export const accountMessage = css`
    font-size: 2rem;
    color: #777777;
    font-weight: 700;
    cursor: default;

    & a {
        text-decoration: none;
        color: inherit; /* 링크 색상을 기본 텍스트 색상과 같게 */
    }

    &:hover {
        text-shadow: 0 0 3rem #333333;
    }
`;


export const accountButton = css`
    box-sizing: border-box;
    border: none;
    font-size: 2rem;
    font-weight: 700;
    color: #777777;
    background-color: transparent; /* 버튼 배경 투명 */
    letter-spacing: 0.1rem;
    cursor: pointer;

    &:hover {
        text-shadow: 0 0 3rem #333333;
    }
`;


export const footerbox = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;


export const socialBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const socialLoginTitle = css`
    width: max-content;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
`;

export const socialLoginImege = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    
    & > img {
        width: 7rem;
        height: 7rem;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.15);
        }
    }
`;