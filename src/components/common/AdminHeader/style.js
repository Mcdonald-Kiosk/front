import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 1rem 3rem 2rem;
    width: 100%;

    & > h1 {
        font-size: 2.5rem;
        cursor: default;
    }

`;