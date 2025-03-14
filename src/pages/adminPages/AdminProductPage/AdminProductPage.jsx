/**@jsxImportSource @emotion/react */
import { MdInfoOutline, MdOutlineCategory, MdProductionQuantityLimits } from 'react-icons/md';
import * as s from './style';
import React from 'react';

function AdminProductPage(props) {
    return (
        <div css={s.mainContainer}>
            <div css={s.mainLayout}>
                <div css={s.conBox}>
                    <div><h2>제품관리</h2></div>
                    <div css={s.mainCon}>
                        <div>
                            <MdProductionQuantityLimits/>
                            <h6>상품 관리</h6>
                            
                        </div>
                        <div>
                            <MdOutlineCategory />
                            <h6>카테고리 관리</h6>
                        </div>
                        <div>
                            <MdInfoOutline />
                            <h6>영양정보/원산지 관리</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProductPage;