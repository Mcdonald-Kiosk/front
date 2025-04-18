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

function PrePayment() {
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
                <img src="https://t3.ftcdn.net/jpg/05/60/17/66/240_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg" alt="" />
                <p>{t.title}</p>
            </header>
            <main css={s.pay}>
                <div>
                    {addedCartState.length > 0 ? (
                        <ul>
                            {addedCartState.map((item, index) => (
                                <li key={index}>
                                    <div css={s.cartList}>
                                        {index + 1}. {item.detailMenu} 
                                        <span style={{ marginLeft: "auto" }}>
                                            {item.isSet && `${languageTexts[language].set}`}
                                        </span>
                                        - {item.detailPrice}{languageTexts[language].currency} x {item.quantity}
                                    </div>
                                    <div css={s.cartListButtons}>
                                        <div>
                                            <button onClick={() => handleUpFromCart(index)}>▲</button>
                                            <button onClick={() => handleDownFromCart(index)}>▼</button>
                                        </div>
                                        <span>
                                            <button onClick={() => handleRemoveFromCart(index)}>{languageTexts[language].delete}</button>
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <></>
                    )}
                </div>
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
