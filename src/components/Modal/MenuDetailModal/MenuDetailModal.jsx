/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';

const MenuDetailModal = ({ menu, onClose }) => {
    const [step, setStep] = useState(1);
    const [isSet, setIsSet] = useState(false);
    const [side, setSide] = useState("");
    const [drink, setDrink] = useState("");

    const sideOptions = ["감자튀김", "치즈스틱", "콘샐러드"];
    const drinkOptions = ["콜라", "사이다", "환타"];

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const handleIsSetOnClick = (boolean) => {
        setIsSet(boolean);
        console.log("handleIsSetOnClick~~");
    }

    const handleAddToCart = () => {
        const orderDetails = {
            menu: menu.name,
            side: isSet ? side : null,
            drink: isSet ? drink : null,
            price: isSet ? menu.price + 2000 : menu.price
        };
        console.log("장바구니에 담을 아이템 :", orderDetails);
        // addToCart(orderDetails); // 장바구니에 추가하는 함수 호출,아직 미개발
        onClose(); // 모달 닫기
    };

    return (
        <div css={s.modalOverlay}>
            <div css={s.modalContent}>

                {step === 1 && (
                    <div>
                        <h3 css={s.modalBasich3}>세트 여부 선택</h3>
                        <div css={s.temp}>
                            <div css={s.modalBuguerSetImage}>
                                <div onClick={() => handleIsSetOnClick(false)} > 단품 ( +0원 )
                                    <img src={menu.img} alt={menu.name}  />
                                </div>
                            </div>
                            <div css={s.modalBuguerSetImage}>
                                <div onClick={() => handleIsSetOnClick(true)} > 세트 ( +2000원 ) 
                                    <img src={menu.img2} alt={menu.name} />
                                </div>
                            </div>
                        </div>
                        <div css={s.nextAndClose}>
                            <span onClick={handleNext}>다 음</span>
                            <span onClick={onClose}>닫 기</span>
                        </div>
                    </div>
                )}

                {/* 여기부터 시작@@@@@@@@@@@@@ */}
                {step === 2 && (
                    <div>
                        <h3 css={s.modalBasich3}>사이드 선택</h3>
                        <select onChange={(e) => setSide(e.target.value)} value={side}>
                            <option value="">선택 안함</option>
                            {sideOptions.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                        <div css={s.nextAndClose}>
                            <span onClick={handleNext}>다 음</span>
                            <span onClick={onClose}>닫 기</span>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h3>음료 선택</h3>
                        <select onChange={(e) => setDrink(e.target.value)} value={drink}>
                            <option value="">선택 안함</option>
                            {drinkOptions.map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                        <button onClick={handleAddToCart}>장바구니에 담기</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuDetailModal;