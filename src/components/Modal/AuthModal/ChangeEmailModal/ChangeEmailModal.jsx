/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useEffect, useState, useRef } from 'react';
import { RiCloseCircleFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import Swal from 'sweetalert2';
import { useQueryClient } from '@tanstack/react-query';
import { useSendVerifyEmailMutation, useUpdateEmailMutation } from '../../../../mutations/accountMutation';

function ChangeEmailModal({ setOpen }) {
    const queryClient = useQueryClient();
    const verifyEmailMutation = useSendVerifyEmailMutation();
    const updateEmailMutation = useUpdateEmailMutation();

    const [emailValue, setEmailValue] = useState("");
    const [time, setTime] = useState(60 * 5);
    const [isSend, setSend] = useState(false);
    const [verifyInputValue, setVerifyInputValue] = useState({
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: "",
        sixth: "",
    });
    const [verifyCode, setVerifyCode] = useState("");

    // 입력 필드를 참조하는 배열
    const inputRefs = useRef([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [isSend]);

    useEffect(() => {
        if (time === 0) {
            Swal.fire({
                showConfirmButton: true,
                confirmButtonText: "확인",
                titleText: "인증 시간이 만료되었습니다.",
            }).then(() => {
                setOpen(false);
            });
        }
    }, [time]);

    const handleEmailInputOnChange = (e) => {
        setEmailValue(e.target.value);
    };

    const handleSendMailOnClick = async () => {
        setTime(60 * 5);
        setSend(true);
        const response = await verifyEmailMutation.mutateAsync(emailValue);
        setVerifyCode(response.data.toString().padStart(6, '0'));
    };

    const handleVerifyInputOnChange = (e) => {
        setVerifyInputValue(prev => {
            const { name, value } = e.target;
            if (/^[0-9]?$/.test(value)) {
                return { ...prev, [name]: value };
            }
            return { ...prev };
        });
    };

    const handleSetButtonOnClick = async () => {
        const inputCode =
            verifyInputValue.first +
            verifyInputValue.second +
            verifyInputValue.third +
            verifyInputValue.fourth +
            verifyInputValue.fifth +
            verifyInputValue.sixth;

        if (verifyCode.toString() !== inputCode) {
            await Swal.fire({
                titleText: "인증번호가 일치하지 않습니다.",
                confirmButtonText: "확인",
                confirmButtonColor: "#d02121",
            });
            return;
        }
        await updateEmailMutation.mutateAsync(emailValue);
        await Swal.fire({
            titleText: "이메일 변경 완료",
            confirmButtonText: "확인",
        });
        await queryClient.invalidateQueries({ queryKey: ["userMeQuery"] });
        setOpen(false);
    };

    // 자동으로 다음 입력 박스로 포커스 이동
    const handleVerifyInputOnKeyUp = (e, nextInputIndex) => {
        if (e.target.value.length === 1 && nextInputIndex < inputRefs.current.length) {
            inputRefs.current[nextInputIndex].focus();
        }
    };

    const handleCloseButtonOnClick = () => {
        setOpen(false);
    };

    return (
        <div>
            <div css={s.modalTop}>
                <div onClick={handleCloseButtonOnClick}><RiCloseCircleFill /></div>
            </div>
            <div css={s.header}>
                <div css={s.headerIcon}><CgMail /></div>
                <h2 css={s.headerTitle}>Set a email address</h2>
                <p css={s.headerMessage}>변경할 이메일 주소를 입력하세요. 이후 인증 절차를 통해 이메일 변경이 가능합니다.</p>
            </div>
            <div>
                <div css={s.inputGroup}>
                    <label>Enter a new email</label>
                    <div css={s.emailInputAndSendButton}>
                        <input
                            type="email"
                            name="newEmail"
                            disabled={isSend}
                            value={emailValue}
                            onChange={handleEmailInputOnChange}
                        />
                        {isSend ? (
                            <span>
                                {Math.floor(time / 60).toString().padStart(2, "0")}:
                                {(time % 60).toString().padStart(2, "0")}
                            </span>
                        ) : (
                            <button onClick={handleSendMailOnClick}>전송</button>
                        )}
                    </div>
                </div>
                {isSend && (
                    <div css={s.inputGroup}>
                        <div css={s.verifyInput}>
                            <input
                                type="number"
                                name="first"
                                value={verifyInputValue.first}
                                onChange={handleVerifyInputOnChange}
                                onKeyUp={(e) => handleVerifyInputOnKeyUp(e, 1)}
                                ref={(el) => inputRefs.current[0] = el}
                            />
                            <input
                                type="number"
                                name="second"
                                value={verifyInputValue.second}
                                onChange={handleVerifyInputOnChange}
                                onKeyUp={(e) => handleVerifyInputOnKeyUp(e, 2)}
                                ref={(el) => inputRefs.current[1] = el}
                            />
                            <input
                                type="number"
                                name="third"
                                value={verifyInputValue.third}
                                onChange={handleVerifyInputOnChange}
                                onKeyUp={(e) => handleVerifyInputOnKeyUp(e, 3)}
                                ref={(el) => inputRefs.current[2] = el}
                            />
                            <input
                                type="number"
                                name="fourth"
                                value={verifyInputValue.fourth}
                                onChange={handleVerifyInputOnChange}
                                onKeyUp={(e) => handleVerifyInputOnKeyUp(e, 4)}
                                ref={(el) => inputRefs.current[3] = el}
                            />
                            <input
                                type="number"
                                name="fifth"
                                value={verifyInputValue.fifth}
                                onChange={handleVerifyInputOnChange}
                                onKeyUp={(e) => handleVerifyInputOnKeyUp(e, 5)}
                                ref={(el) => inputRefs.current[4] = el}
                            />
                            <input
                                type="number"
                                name="sixth"
                                value={verifyInputValue.sixth}
                                onChange={handleVerifyInputOnChange}
                                ref={(el) => inputRefs.current[5] = el}
                            />
                        </div>
                    </div>
                )}
                <button
                    css={s.setButton}
                    disabled={!emailValue || Object.values(verifyInputValue).includes("")}
                    onClick={handleSetButtonOnClick}
                >
                    Set a email address
                </button>
            </div>
        </div>
    );
}

export default ChangeEmailModal;
