import { css } from "@emotion/react";

export const container = css`
    display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const logoContainer = css`
    position: absolute;
    top: 20px;
    left: 20px;

    & img {
        width: 80px;
        height: 80px;
    }
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
    margin-bottom: 20px;
    text-align: center;
`;

export const formContainer = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const inputBox = css`
    width: 100%;
    height: 60px;
    padding: 10px;
    font-size: 1rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
`;

export const rightContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-left: 30px;
`;

export const socialLoginTitle = css`
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
`;

export const socialLoginBox = css`
    display: flex;
    gap: 10px;
    
    & > img {
        width: 80px;
        height: 80px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const buttonContainer = css`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 20px;  /* OAuth2 버튼과 간격 확보 */
`;

export const button = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 4rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 8px;

    &:hover {
        background-color: #0056b3;
    }
`;
