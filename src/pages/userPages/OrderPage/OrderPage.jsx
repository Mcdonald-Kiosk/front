/**@jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import * as s from './style';
import CallManagerModal from '../../../components/Modal/CallManagerModal/CallManagerModal';
import MenuDetailModal from '../../../components/Modal/MenuDetailModal/MenuDetailModal';
import MenuModifyModal from '../../../components/Modal/MenuModifyModal/MenuModifyModal';
import { addedCart } from '../../../atoms/addedCart/addedCart';
import { useRecoilState } from 'recoil';
import MenuCategory from './menu/MenuCategory';
import menuForUser from '../../../hooks/menu/menuForUser';
import { disabledCategoriesState } from '../../../atoms/disabledCategories/disabledCategories';

function OrderPage(props) {
    const navi = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("버거");
    const [addedCartState, setAddedCartState] = useRecoilState(addedCart);
    const [editingItem, setEditingItem] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(null);

    const { data: menuData, error, isLoading } = menuForUser(); 
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        if (menuData) {
            // 메뉴 데이터에서 중복을 제거한 카테고리 리스트 만들기
            const uniqueCategories = [...new Set(menuData.map(menu => menu.menuCategory))];
            setCategories(uniqueCategories);
        }
    }, [menuData]);

    const [disabledCategories] = useRecoilState(disabledCategoriesState); // atom 사용

    const handleMenuCategoryOnClick = (category) => {
        if (selectedCategory !== category) {
            setSelectedCategory(category);
        }
    }
    
    const handleBackMenuOnClick = () => {
        navi("/menu");
    }
    const handlePaymentOnClick = () => {
        navi("/prePayment")
    }

    const handleMenuItemClick = (menu) => {
        setSelectedMenu(menu);
    }

    const handleCloseMenuDetailModal = () => {
        setSelectedMenu(null);
    }

    const handleRemoveFromCart = (index) => {
        setAddedCartState(prevCart => prevCart.filter((_, i) => i !== index));
    };

    const handleModifyFromCart = (index) => {
        setEditingItem({ ...addedCartState[index], index });
    };

    const handleSaveModifiedItem = (updatedItem) => {
        setAddedCartState(prevCart => prevCart.map((item, i) => (i === updatedItem.index ? updatedItem : item)));
        setEditingItem(null);
    };

    const handleUpFromCart = (index) => {
        setAddedCartState(prevCart => prevCart.map((item, i) =>
            i === index ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDownFromCart = (index) => {
        setAddedCartState(prevCart => prevCart.map((item, i) =>
            i === index && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

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
                    {categories
                        .filter(category => !disabledCategories.includes(category)) // 비활성화된 카테고리는 필터링
                        .map(category => (
                            <div key={category} onClick={() => handleMenuCategoryOnClick(category)}>
                                {category}
                            </div>
                        ))}
                </div>
                <div css={s.menu}>
                    <MenuCategory selectedCategory={selectedCategory} onMenuItemClick={handleMenuItemClick} />
                </div>
            </main>

            <footer css={s.pay}>
                <div>
                    {addedCartState.length > 0 ? (
                        <ul>
                            {addedCartState.map((item, index) => (
                                <div css={s.xUpDown} key={index}>
                                    <div>
                                        <li>
                                            {item.detailMenu} 
                                            <span style={{ marginLeft: "auto" }}>
                                                {item.isSet && " 세트"}
                                            </span>
                                            - {item.detailPrice}원 × {item.quantity}
                                        </li>   
                                    </div>
                                    <div>
                                        <span>
                                            {(item.isSet) && (
                                                <button onClick={() => handleModifyFromCart(index)}>수정</button>
                                            )}
                                            <button onClick={() => handleRemoveFromCart(index)}>삭제</button>
                                        </span>
                                        <div>
                                            <button onClick={() => handleUpFromCart(index)}>▲</button>
                                            <button onClick={() => handleDownFromCart(index)}>▼</button>
                                        </div>
                                    </div>
                                </div>
                            ))} 
                        </ul>
                    ) : (
                        <p>장바구니에 아무것도 없습니다.</p>
                    )}
                </div>
                <span>
                    <p onClick={handlePaymentOnClick}>주문하기</p>
                    <p>상품권</p>
                </span>
            </footer>

            {selectedMenu && <MenuDetailModal menu={selectedMenu} onClose={handleCloseMenuDetailModal} />}
            {editingItem && <MenuModifyModal menu={editingItem} onClose={() => setEditingItem(null)} onSave={handleSaveModifiedItem} />}
        </div>
    );
}

export default OrderPage;