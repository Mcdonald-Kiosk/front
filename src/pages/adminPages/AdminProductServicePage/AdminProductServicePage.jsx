/**@jsxImportSource @emotion/react */
import * as s from './style';
import { Select } from '@mui/material';
import React from 'react';

function AdminProductServicePage(props) {

    const adminSelectOptions = [
        {label: "빅맥", value: "bigMac"},
        {label: "감자튀김", value: "frenchFries"},
        {label: "맥크리스피 디럭스버거", value: "McCrispyDeluxe"},
        {label: "제로 콜라", value: "CoCaColaZero"},
    ];

    return (
        <div>
            <div css={s.selectOption}>
                <Select
                    options={adminSelectOptions}
                    styles={{
                        control: (style) => ({
                            ...style,
                            width: "11rem",
                            minHeight: "3rem",
                        }),
                        dropdownIndicator: (style) => ({
                            ...style,
                            padding: "0.3rem",
                        }),
                    }}
                    />
                    <button>메뉴 추가</button>
            </div>
        </div>
    );
}

export default AdminProductServicePage;