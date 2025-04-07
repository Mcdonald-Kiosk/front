/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UsePointModal from "../../../components/Modal/UsePointModal/UsePointModal";
import { getPointApi } from '../../../apis/pointApi';
import { useRecoilValue } from 'recoil';
import { selectedLanguageState } from '../../../atoms/selectedLanguage/selectedLanguage';

const languageTexts = {
    한국어: {
        instruction: "전화번호를 입력하고 포인트 조회하기",
        placeholder: "전화번호 입력",
        checkPoint: "포인트 조회",
        back: "뒤로 가기",
        notRegistered: "입력하신 번호는 등록된 번호가 아닙니다.",
        needEleven: "전화번호 11자리를 입력해주세요."
    },
    영어: {
        instruction: "Enter phone number to check point",
        placeholder: "Enter phone number",
        checkPoint: "Check Point",
        back: "Go Back",
        notRegistered: "The number you entered is not registered.",
        needEleven: "Please enter an 11-digit phone number."
    }
};

const UsePoint = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const language = useRecoilValue(selectedLanguageState);
    const t = languageTexts[language];

    const [input, setInput] = useState("");
    const [point, setPoint] = useState(location.state?.point || 0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const formatPhoneNumber = (value) => {
        value = value.replace(/[^0-9]/g, "");
        if (value.length <= 3) return value;
        if (value.length <= 7) return `${value.slice(0, 3)}-${value.slice(3)}`;
        return `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    };

    const handleKeypadClick = (key) => {
        if (key === "×") {
            setInput((prev) => prev.slice(0, -1));
        } else {
            setInput((prev) => formatPhoneNumber(prev + key));
        }
    };

    const handleBackOnClick = () => {
        navigate("/prePayment")
    };

    const handlePointCheck = async () => {
        const formattedPhoneNumber = input.replace(/-/g, "");
        const phoneNumberWithHyphen = formatPhoneNumber(formattedPhoneNumber);

        if (formattedPhoneNumber.length === 11) {
            try {
                const pointData = await getPointApi(phoneNumberWithHyphen);
                setPoint(pointData);
                setIsModalOpen(true);
                setErrorMessage("");
            } catch (error) {
                setErrorMessage(t.notRegistered);
                setIsModalOpen(false);
            }
        } else {
            setErrorMessage(t.needEleven);
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <div css={s.container}>
                <img src="https://cdn-icons-png.flaticon.com/512/99/99656.png" alt="" css={s.img} />
                <p css={s.p}>{t.instruction}</p>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(formatPhoneNumber(e.target.value))}
                    css={s.input}
                    placeholder={t.placeholder}
                />
                <div css={s.keypad}>
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "×", "0"].map((key) => (
                        <button
                            key={key}
                            onClick={() => handleKeypadClick(key)}
                            css={s.button}
                        >
                            {key}
                        </button>
                    ))}
                </div>
                <div css={s.foott}>
                    <button css={s.footer} onClick={handlePointCheck}>{t.checkPoint}</button>
                    <button css={s.footer} onClick={handleBackOnClick}>{t.back}</button>
                </div>

                {errorMessage && <p css={s.errorMessage}>{errorMessage}</p>}
            </div>

            {isModalOpen && <UsePointModal phoneNumber={input} point={point} closeModal={() => setIsModalOpen(false)} />}
        </>
    );
};

export default UsePoint;
