import { css } from "@emotion/react";

export const modalOverlay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const modalContent = css`
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 400px;
    height: auto;
`;

export const modalImage = css`
    width: 100px;
    height: 100px;
    margin: 5px;
    cursor: pointer;
    object-fit: cover;
`;

export const imageGrid = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const closeButton = css`
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
`;
