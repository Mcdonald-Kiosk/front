/**@jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import BurgerMenu from './menu/BurgerMenu';
import DrinkMenu from './menu/DrinkMenu';
import HappySnackMenu from './menu/HappySnackMenu';
import RecommendMenu from './menu/RecommendMenu';
import SideMenu from './menu/SideMenu';
import * as s from './style';
import React, { useState } from 'react';
import CoffeeMenu from './menu/CoffeeMenu';
import CallManagerModal from '../../components/Modal/CallManagerModal';



function OrderPage(props) {
    const navi = useNavigate();


    // 선택된 카테고리 상태 추가
    const [selectedCategory, setSelectedCategory] = useState("추천메뉴");

    const handleMenuCategoryOnClick = (category) => {
        if (selectedCategory !== category) {
            setSelectedCategory(category);
        }
    }

    const handleBackMenuOnClick = () => {
        navi("/menu");
    }





    return (
        <div css={s.container}>
            <header css={s.logoAnd2button}>
                <div css={s.mcdonaldLogo}>
                    <img src="https://pngimg.com/uploads/mcdonalds/mcdonalds_PNG17.png" alt="" />
                </div>
                <div css={s.buttons}>
                    <div onClick={handleBackMenuOnClick}>처음으로</div>
                    <CallManagerModal />
                </div>
            </header>

            <main css={s.body}>
                <div css={s.category}>
                    <div onClick={() => handleMenuCategoryOnClick("추천메뉴")}>✨ 추천메뉴</div>
                    <div onClick={() => handleMenuCategoryOnClick("버거")}>🍔 버거</div>
                    <div onClick={() => handleMenuCategoryOnClick("해피스낵")}>🍟 해피스낵</div>
                    <div onClick={() => handleMenuCategoryOnClick("사이드")}>🍗 사이드</div>
                    <div onClick={() => handleMenuCategoryOnClick("음료")}>🥤 음료</div>
                    <div onClick={() => handleMenuCategoryOnClick("커피")}>☕ 커피</div>
                </div>
                <div css={s.menu}>
                    {/* 선택된 카테고리에 따라 div 렌더링 */}
                    {selectedCategory === "추천메뉴" && <RecommendMenu />}
                    {selectedCategory === "버거" && <BurgerMenu />}
                    {selectedCategory === "해피스낵" && <HappySnackMenu />}
                    {selectedCategory === "사이드" && <SideMenu />}
                    {selectedCategory === "음료" && <DrinkMenu />}
                    {selectedCategory === "커피" && <CoffeeMenu />}
                </div>
            </main>

            <footer css={s.pay}>
                
            </footer>
        </div>
    );
}

export default OrderPage;