/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { getPointApi } from "../../../apis/pointApi";
import { usePointMutation } from '../../../mutations/useProcessPointMutation';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { selectedLanguageState } from '../../../atoms/selectedLanguage/selectedLanguage';

const languageTexts = {
    한국어: {
        title: "포인트 조회",
        phone: "전화번호",
        currentPoint: "조회된 포인트",
        inputPlaceholder: "사용할 포인트",
        cancel: "취소하기",
        confirm: "확인",
        alertInvalidUnit: "포인트는 100단위로만 사용 가능합니다.",
        alertMinPoint: "최소 사용 포인트는 2000점입니다.",
        alertInvalid: "사용할 포인트가 유효하지 않습니다.",
        unit: "점"
    },
    영어: {
        title: "Point Inquiry",
        phone: "Phone Number",
        currentPoint: "Available Point",
        inputPlaceholder: "Enter point to use",
        cancel: "Cancel",
        confirm: "OK",
        alertInvalidUnit: "Points can only be used in units of 100.",
        alertMinPoint: "Minimum point usage is 2000.",
        alertInvalid: "Invalid point usage.",
        unit: "pt"
    }
};

function UsePointModal({ phoneNumber, closeModal }) {
    const navigate = useNavigate();
    const language = useRecoilValue(selectedLanguageState);
    const t = languageTexts[language];

    const [point, setPoint] = useState(0);
    const [usePoint, setUsePoint] = useState(0);

    const { mutateAsync: usePointmutation } = usePointMutation();

    const { mutateAsync: getPoint } = useMutation({
        mutationFn: getPointApi,
        onSuccess: (response) => {
            setPoint(response.point);
        },
        onError: (error) => {
            alert(error.message || "포인트 조회 실패");
        },
    });

    useEffect(() => {
        if (phoneNumber) {
            getPoint(phoneNumber);
        }
    }, [phoneNumber, getPoint]);

    const handleKeypadClick = (key) => {
        if (key === "×") {
            setUsePoint(prev => Math.floor(prev / 10));
        } else if (key === t.confirm) {
            handleUsePoint();
        } else {
            setUsePoint(prev => prev * 10 + parseInt(key));
        }
    };

    const handleUsePoint = async () => {
        if (usePoint % 100 !== 0) {
            alert(t.alertInvalidUnit);
            return;
        }

        if (usePoint < 2000) {
            alert(t.alertMinPoint);
            return;
        }

        if (usePoint > 0 && usePoint <= point) {
            closeModal();
            navigate("/payment", {
                state: {
                    usePoint: usePoint,
                    phoneNumber: phoneNumber
                }
            });
        } else {
            alert(t.alertInvalid);
        }
    };

    return (
        <div css={s.modalBackdrop}>
            <div css={s.modalContainer}>
                <h1>{t.title}</h1>
                <p>{t.phone}: {phoneNumber}</p>
                <p>{t.currentPoint}: {point}{t.unit}</p>

                <div>
                    <input
                        type="text"
                        value={usePoint}
                        readOnly
                        placeholder={t.inputPlaceholder}
                    />
                </div>

                <div css={s.keypad}>
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "×", "0", t.confirm].map((key) => (
                        <button
                            key={key}
                            onClick={() => handleKeypadClick(key)}
                            css={s.button}
                        >
                            {key}
                        </button>
                    ))}
                </div>

                <button css={s.footer} onClick={closeModal}>{t.cancel}</button>
            </div>
        </div>
    );
}

export default UsePointModal;
