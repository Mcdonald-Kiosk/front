/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';

function AdminMenuPage(props) {
    return (
        <div css={s.container}>
            <div css={s.header}>
                메뉴관리
                <div>
                    <button>단품</button>    
                    <button>세트</button>    
                </div>
            </div>
            <div>바디</div>
            <div>-12345-</div>
        </div>
    );
}

export default AdminMenuPage;