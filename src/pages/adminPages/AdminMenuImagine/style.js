/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const modalOverlay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const modalContent = css`
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    max-width: 120rem;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    position: relative;
`;

export const closeButton = css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        background: #c0392b;
    }
`;

export const imageGrid = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 5개씩 */
	grid-template-rows: repeat(4, auto);   /* 세로 4칸 */
    gap: 1.6rem;
    margin-top: 2rem;
`;

export const imageBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const modalImage = css`
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease, border 0.2s ease;
    border: 2px solid transparent;

    &:hover {
        transform: scale(1.05);
        border: 2px solid #3498db;
    }
`;

export const selectedImage = css`
    border: 3px solid #e67e22;
`; 

export const imageLabel = css`
    margin-top: 0.6rem;
    font-size: 1.4rem;
    color: #555555;
    text-align: center;
`;

export const pagination = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.4rem;
    gap: 1.2rem;

    button {
        padding: 0.6rem 1.4rem;
        border: none;
        background-color: #3498db;
        color: white;
        font-weight: bold;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s ease;
    
        &:hover:enabled {
            background-color: #2980b9;
        }
    
        &:disabled {
            background-color: #bdc3c7;
            cursor: not-allowed;
        }
    }
    
    span {
        font-weight: bold;
        font-size: 1.6rem;
    }
`;
