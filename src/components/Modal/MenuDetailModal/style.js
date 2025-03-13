import { css } from "@emotion/react";

export const modalOverlay = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const modalContent = css`
    position: fixed;
    width: 32rem;
    max-height: 60rem;
    display: flex;
    /* flex-direction: column; */
    padding: 2rem 1rem 0 1rem;
    border-radius: 1rem;
    background: white;

    & > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

`;

export const modalBasich3 = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1px;
    font-size: 2rem;
    margin-bottom: 5rem;
`;

export const temp = css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const modalBuguerSetImage = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40%; /* 각 이미지의 너비를 48%로 설정해 두 이미지가 한 줄에 배치되도록 함 */
    height: auto;
    

    & > div {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: end;
        width: 100%;
        height: 12.8rem;
        border: 1px solid black;
        border-radius: 10px;
        box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0,0.25); 

        font-size: 15px;
        font-weight: 500;

        &:hover {
            background-color: #f0f0f0; 
            box-shadow: 0.3rem 0.3rem 0.4rem rgba(0, 0, 0, 0.35); 
        }

        & > img {
            position: absolute;
            width: 100%;
            max-width: 30rem; /* 이미지 크기 제한 */
            object-fit: cover;
            bottom: 30px;
        }
    }
`;

export const nextAndClose = css`
    display: flex;
    justify-content: space-evenly;
    margin: 30px 10px 10px 10px;

    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        text-justify: center;
        text-align: center;
        font-size: 2rem;
        font-weight: 500;
        width: 13rem;
        height: 5rem;
        border-radius: 10px;
        color: white;
        background-color: #EE4545;

        :nth-last-of-type(1) {
            background-color: #5CC6F3;
        }
    }
`;