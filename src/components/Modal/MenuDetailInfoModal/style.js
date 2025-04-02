import { css } from "@emotion/react";

export const modalhead = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div > img {
        border-radius: 1.5rem;
        width: 100%;
        height: auto;
        object-fit: contain;
        max-height: 21rem;
    }

    & > span {
        padding: 1rem 0 2rem 0;
        font-size: 2rem;
        font-weight: 600;
    }
`;

export const text1 = css`
    margin: 1rem 0 1rem 0rem;
    border-bottom: 0.5rem dashed #00000022;
    padding-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    width: 10em;
`;


export const modalbody = css`
    display: flex;
    flex-direction: column;
`;

export const bodyup = css`
    display: flex;
    margin: 1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    .line {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 0.1rem dashed #00000055;
        font-size: 2rem;
        width: 100%;
        text-align: center;

        & div {
            padding: .2rem .5rem;
        }

    }

    .line:nth-of-type(1) {
        padding-right: 2rem;
        font-size: 2rem;
        font-weight: 600;
        border-right: 0.3rem solid #00000055;
    
    }
    .line:nth-last-of-type(1) {
        border: none;
    }
`;

export const bodydown = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0;
    font-size: 2.5rem;


`;

export const origin = css`
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    padding: 1rem;
    overflow-x: auto;
    text-overflow: ellipsis;
    max-width: 100%;
    &::-webkit-scrollbar {
        display: none;  /* 스크롤바 숨기기 */
    }


    & div {
        border-left: 0.1rem dashed #00000055;
        padding: 0 2rem;
        white-space: nowrap;
    }

    & div:nth-of-type(1) {
        border: none;
    }



`;

export const text2 = css`
    margin: 1rem 0 1rem 0rem;
    border-bottom: 0.5rem dashed #00000022;
    padding-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    width: 10em;
`;


export const footer = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        box-sizing: border-box;
        border: none;
        border-radius: 1.4rem;
        padding: 2rem 3rem;
        font-size: 1.8rem;
        font-weight: 700;
        color: #fafafa;
        background-color: #f13709;
    }
`;