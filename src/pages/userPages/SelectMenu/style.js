import { css } from "@emotion/react";

export const smImage = css`
    display: flex;
    width: 100%;
    height: 40%;
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

export const whereText = css`
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
`

export const smChoice = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 1rem;
    /* background-color: #0d4e18; */
`;

export const smHow = css`
    position: relative;
    display: flex;
    font-size: 2rem;
    width: 100%;
    height: 15rem;
    justify-content: center;
    margin-top: 2rem;
    gap: 4rem;
    
    & > span {
        display: flex;
        border-radius: 1rem;
        width: 20rem;
        height: 23rem;
        box-shadow: 0 0 0.6rem 0.1rem #455a64;
        justify-content: center;
        align-items: center;
        background-color: #0d4e18;

        & > img {
            display: flex;
            width: 80%;
            height: 80%;
        }
    }
`;

export const langText = css`
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    margin-top: 14rem;
    margin-bottom: 3rem;
`

export const smLanguage = css`
    display: flex;
    font-size: 2rem;
    width: 100%;
    height: 7rem;
    justify-content: center;
    margin-bottom: 6rem;
    gap: 2rem;

    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 0.6rem 0.1rem #455a64;
        width: 14rem;
        height: 5rem;
        font-size: 2rem;
        font-weight: 800;
        color: #dbdbdb;
        border-radius: 1rem;
        background-color: #0d4e18;
    }

`;

export const selectedLanguage = css`
    border: 2px solid #455a64;
    box-shadow: inset 0 0 5px rgba(38, 50, 56, 0.4), 0 0 5px rgba(69, 90, 100, 0.7);
    background-color: #eceff1;
    color: #263238;
    font-weight: 600;

    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;

    width: 14rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
`;




