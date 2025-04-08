import React from 'react';
/**@jsxImportSource @emotion/react */
import * as s from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { addedCart } from '../../../atoms/addedCart/addedCart';  // Recoil 상태 import
import { selectedLanguageState } from '../../../atoms/selectedLanguage/selectedLanguage';
import { useRecoilValue } from "recoil";

const languageTexts = {
    한국어: {
        wait: "대기번호",
        export: "영수증을 출력하시겠습니까?",
        yes: "예",
        no: "아니오",
    },
    영어: {
        wait: "Waiting Number",
        export: "Would you like to print the receipt?",
        yes: "Yes",
        no: "No",
    }
};

function ExportOrderId(props) {
    const navi = useNavigate();

    const language = useRecoilValue(selectedLanguageState);
    const t = languageTexts[language];

    const location = useLocation();
    const [, setAddedCartState] = useRecoilState(addedCart);  // Recoil 상태 업데이트용

    const handleGoFirst = () => {
        // Recoil 상태를 비워줍니다 (장바구니 비우기)
        setAddedCartState([]);  // 장바구니 비우기

        // 메뉴 페이지로 이동
        navi("/menu");
    };

    return (
        <>
            <div css={s.head}>{t.wait}</div>
            <div css={s.num}>
                {location.state?.orderId}
            </div>
            <div css={s.ask}>{t.export}</div>
            <div css={s.twice}>
                <div onClick={handleGoFirst}>{t.yes}</div>
                <div onClick={handleGoFirst}>{t.no}</div>
            </div>
        </>
    );
}

export default ExportOrderId;
