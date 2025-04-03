import { css } from "@emotion/react";

export const smImage = css`
    display: flex;
    width: 100%;
    height: 37%;
    overflow: hidden;
    justify-content: center;
    position: relative;
`;

export const imageStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;  /* 슬라이딩 효과를 부드럽게 적용 */
`;

export const smChoice = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 1rem;
    margin-top: 3rem;
`;

export const smLanguage = css`
    display: flex;
    font-size: 2rem;
    width: 100%;
    height: 7rem;
    justify-content: space-evenly;
    margin-bottom: 7rem;
    
    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.2rem solid black;
        border-radius: 2rem;
        width: 15rem;
        height: 10rem;
        font-size: 2rem;
        font-weight: 800;
    }
`;

export const selectedLanguage = css`
    box-shadow: 0 0 0.6rem 0.1rem #4296e5e1;
`;

export const smHow = css`
    position: relative;
    display: flex;
    font-size: 2rem;
    width: 100%;
    height: 15rem;
    justify-content: space-evenly;

    & > span {
        display: flex;
        border: 0.2rem solid black;
        border-radius: 1rem;
        width: 17rem;
        height: 17rem;
        box-shadow: 0.5rem 0.5rem 0.5rem rgba(0,0,0,0.25);
        justify-content: center;
        align-items: center;

        & > img {
            display: flex;
            width: 80%;
            height: 80%;
        }
    }
`;