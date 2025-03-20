import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const header = css`
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem;
    

    & > span {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-grow: 4;
        min-width: 12rem;
        font-size: 3rem;
        font-weight: 600;
    }
    & > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-grow: 1;
        min-width: 12rem;
    }
`;

export const title = css`
    margin: 0.5rem 0 0 1.5rem;
    font-size: 2rem;
    font-weight: 500;
`;

export const buttons = css`
    padding: 0.4rem 1.5rem;
    box-sizing: border-box;
    border: 0.2rem solid #77ac58;
    border-radius: 0.5rem;
    font-size: 2.3rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #00000011;
    }

    &:active {
        background-color: #00000033;
    }
`;

export const menuListContainer = css`
    margin: 0 2.5rem;
    padding: 0;

    & li {
        display: flex;
        justify-content: start;
        border-bottom: 0.1rem solid #000000;

        
        & div {
            justify-content: center;
            align-items: center;
            align-content: center;
            margin: 1rem 4rem 1rem 0;
            text-align: center;
            font-size: 2rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex-grow: 1;
        }
    }
`;

export const numBox = css`
    width: 4rem;
`;

export const nameBox = css`
    width: 15rem;
`;

export const priceBox = css`
    width: 6rem;
`;

export const exBox = css`
    display: flex;

    margin: 0;
    padding: 0;
    width: 7rem;

`;


export const footer = css`
    display: flex;
    justify-content: center;
    margin: 2rem 0 2rem 0;

    & button {
        padding: 1rem;
        border: none;
        border-radius: 1rem;
        background-color: transparent;
        cursor: pointer;
    }

    & button:disabled {
        opacity: 0;
        cursor: default;
    }
`;

export const pageNum = (isSelect) => css`

    font-size: 1.5rem;
    font-weight: 600;
    /* color: ${isSelect ? "#ffffff" : "#000000"}!important; */
    background-color: ${isSelect ? "#bbbbbb" : "#ffffff00"}!important;
`;




