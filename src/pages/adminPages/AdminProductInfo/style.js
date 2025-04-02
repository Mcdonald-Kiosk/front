import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

export const productContainer = css`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 2rem;
    `;

export const imageCon = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const imageBox = css`
    width: 20rem;
    height: 20rem;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #f9f9f9;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `;

export const menuGroup = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `;
    
export const dropdownContainer = css`
    margin-bottom: 1.5rem;
    `;

export const dropdown = css`
    padding: 0.5rem;
    font-size: 1.6rem;
    `;

export const label = css`
    margin-bottom: 0.3rem;
    font-size: 1.6rem;
    font-weight: 500;
    margin-right: 2rem;
    `;

export const input = css`
    padding: 0.5rem;
    font-size: 1.6rem;
    width: 20rem;
`;

export const table = css`
    width: 100%;
    border-collapse: collapse;
    margin-top: 1.5rem;
`;

export const caption = css`
    caption-side: top;
    margin-bottom: 0.5rem;
    font-weight: bold;
`;

export const th = css`
    border: 1px solid #ddd;
    padding: 0.5rem;
    background-color: #f1f1f1;
    font-size: 0.9rem;
`;

export const td = css`
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
`;

export const evenRow = css`
    background-color: #f9f9f9;
`;
