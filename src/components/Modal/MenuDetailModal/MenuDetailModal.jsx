import React from 'react';
import { css } from '@emotion/react';
/**@jsxImportSource @emotion/react */
import * as s from './style';


/*
이거 아님 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
밑에 코드는 임시로 짜놓은 것
*/
const MenuDetailModal = ({ menu, onClose }) => {
    return (
        <div css={modalOverlay}>
            <div css={modalContent}>
                <h2>{menu.name}</h2>
                <img src={menu.img} alt={menu.name} css={modalImage} />
                <p>{menu.description}</p>
                <p>{menu.price}원</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
}

const modalOverlay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const modalContent = css`
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
`;

const modalImage = css`
    width: 100%;
    max-width: 300px;
    margin: 20px 0;
`;

export default MenuDetailModal;
