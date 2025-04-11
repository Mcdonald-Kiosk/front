import React from 'react';
/**@jsxImportSource @emotion/react */
import * as s from './style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addedCart } from '../../../atoms/addedCart/addedCart';
import { useNavigate } from 'react-router-dom';
import { selectedLanguageState } from '../../../atoms/selectedLanguage/selectedLanguage';


const languageTexts = {
    한국어: {
        title: "주 문",
        set: "세트",
        delete: "삭제",
        total: "총합",
        usePoint: "포인트 사용",
        payMethod: "결제방법",
        goBack: "돌아가기",
        currency: "원"
    },
    영어: {
        title: "Order",
        set: "Set",
        delete: "Delete",
        total: "Total",
        usePoint: "Use Point",
        payMethod: "Payment",
        goBack: "Back",
        currency: "KRW"
    }
};

function  PrePayment() {
    const navi = useNavigate();
    const language = useRecoilValue(selectedLanguageState);
    const t = languageTexts[language];

    const [addedCartState, setAddedCartState] = useRecoilState(addedCart);

    const handleRemoveFromCart = (index) => {
        setAddedCartState(prevCart => prevCart.filter((_, i) => i !== index));
    };

    const handleUpFromCart = (index) => {
        setAddedCartState(prevCart =>
            prevCart.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDownFromCart = (index) => {
        setAddedCartState(prevCart =>
            prevCart.map((item, i) =>
                i === index && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const totalPrice = addedCartState.reduce((total, item) => {
        return total + (item.detailPrice * item.quantity);
    }, 0);

    const handleCompletePayment = () => {
        navi("/payment");
    };

    const handleReturn = () => {
        navi("/order");
    };

    const handleUsePoint = () => {
        navi("/usePoint");
    };

    return (
        <>
            <header css={s.header}>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec545603-cf4e-48e0-936d-5376ea12fdc0/dh1vv57-b11b6232-616f-4266-8bb2-388aa1f1c548.png" alt="" />
                <p>{t.title}</p>
            </header>
            <main css={s.pay}>
                {addedCartState.map((item, index) => (
                    <div css={s.xUpDown} key={index}>
                        <div>
                            <li>
                                {item.detailMenu}
                                <span style={{ marginLeft: "auto" }}>
                                    {item.isSet && ` ${t.set}`}
                                </span>
                                - {item.detailPrice}{t.currency} × {item.quantity}
                            </li>
                        </div>
                        <div>
                            <span>
                                <button onClick={() => handleRemoveFromCart(index)}>{t.delete}</button>
                            </span>
                            <div>
                                <button onClick={() => handleUpFromCart(index)}>▲</button>
                                <button onClick={() => handleDownFromCart(index)}>▼</button>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
            <footer css={s.footer}>
                <div>
                    <p>{t.total} : {totalPrice}{t.currency}</p>
                </div>
                <div>
                    <div onClick={handleUsePoint}>{t.usePoint}</div>
                    <div onClick={handleCompletePayment}>{t.payMethod}</div>
                    <div onClick={handleReturn}>{t.goBack}</div>
                </div>
            </footer>
        </>
    );
}

export default PrePayment;
