/**@jsxImportSource @emotion/react */
import { useLocation, useNavigate } from 'react-router-dom';
import * as s from './style';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedLanguageState } from '../../../atoms/selectedLanguage/selectedLanguage';

const languageTexts = {
    한국어: {
        title: "결 제",
        cardPay: "카드결제",
        smartPay: "간편결제",
        voucher: "상품권",
        back: "이전 단계"
    },
    영어: {
        title: "Payment",
        cardPay: "Card Payment",
        smartPay: "Smart Pay",
        voucher: "Voucher",
        back: "Back"
    }
};

function Payment(props) {
    const navi = useNavigate();
    const location = useLocation();

    const language = useRecoilValue(selectedLanguageState);
    const t = languageTexts[language];

    const [usePoint, setUsePoint] = useState(location.state?.usePoint || 0);
    const [phoneNumber, setPhoneNumber] = useState(location.state?.phoneNumber || "");

    const handleEasyPay = () => {
        navi("/selectPayMethod", {
            state: {
                usePoint: usePoint,
                phoneNumber: phoneNumber
            }
        });
    };

    const handleBack = () => {
        navi("/prePayment");
    };

    return (
        <>
            <header css={s.header}>
                <img src="https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/mobile-payment-2.png" alt="" />
                <p>{t.title}</p>
            </header>
            <main css={s.main}>
                <div css={s.method}>
                    <div>
                        <img src="https://png.pngtree.com/png-vector/20221113/ourmid/pngtree-credit-card-payment-png-image_6443984.png" alt="" />
                        <div>
                            <p>{t.cardPay}</p>
                            <p>(CreditCard)</p>
                        </div>
                    </div>
                    <div onClick={handleEasyPay}>
                        <img src="https://img.khan.co.kr/news/2023/11/23/news-p.v1.20231123.9a9908bef5904a3cab46a5afc2bce234_P1.jpg" alt="" />
                        <div>
                            <p>{t.smartPay}</p>
                            <p>(SmartPay)</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/premium-vector/gift-card-icon-flat-style-discount-coupon-vector-illustration-isolated-background-bonus-certificate-sign-business-concept_157943-712.jpg" alt="" />
                        <div>
                            <p>{t.voucher}</p>
                            <p>(Voucher)</p>
                        </div>
                    </div>
                </div>
            </main>
            <div css={s.foot}>
                <footer css={s.footer} onClick={handleBack}>
                    {t.back}
                </footer>
            </div>
        </>
    );
}

export default Payment;
