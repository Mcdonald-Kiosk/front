import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const head = css`
    display: flex;

    & div {
        margin: 0 10rem 0 0;
    }
`;

export const body = css`
    display: flex;
    margin: 0 10rem 0 0;

    & div {
        margin: 0 10rem 0 0;
    }
`;

export const footer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;