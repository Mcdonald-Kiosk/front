/**@jsxImportSource @emotion/react */
import React from 'react';
import menuForUser from '../../../../hooks/menu/menuForUser';
import { selectedLanguageState } from '../../../../atoms/selectedLanguage/selectedLanguage';
import { useRecoilValue } from 'recoil';

const languageTexts = {
    한국어: {
        none: "가격 없음",
        currency: "원"
    },
    영어: {
        none: "No price",
        currency: "KRW"
    }
};

function MenuCategory({ selectedCategory, onMenuItemClick }) {
    const { data: menuData, error, isLoading } = menuForUser();

    const language = useRecoilValue(selectedLanguageState);
    const t = languageTexts[language];

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error("메뉴 데이터를 가져오는 데 실패했습니다:", error);
        return <div>메뉴 데이터를 가져오는 데 실패했습니다.</div>;
    }

    console.log(menuData);

    return (
        <div>
            {(menuData || [])
                .filter((menu) => menu.menuCategory === selectedCategory && menu.isExposure === 1)
                .sort((a, b) => a.menuSequence - b.menuSequence) // seq 낮은 순 정렬
                .map((menu) => (
                    <div 
                        key={menu.menuId} 
                        onClick={() => onMenuItemClick({
                            name: language === '영어' ? menu.menuNameEng : menu.menuName, // 언어에 따라 menuName 또는 menuNameEng 선택
                            category: menu.menuCategory,
                            seq: menu.menuSequence,
                            img: menu.singleImg, 
                            img2: menu.setImg,
                            size: menu.size,
                            price1: menu.menuPrice[0]?.menuPrice || 0,
                            price2: menu.menuPrice.length > 1 ? menu.menuPrice[1].menuPrice : 0,
                        })}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={menu.singleImg} alt={menu.menuName} />
                        <p>{language === '영어' ? menu.menuNameEng : menu.menuName}</p> {/* 여기서도 조건에 따라 메뉴명 변경 */}
                        <p>{menu.menuPrice?.[0]?.menuPrice ? `${menu.menuPrice[0].menuPrice}${t.currency}` : `${t.none}`}</p>
                    </div>
                ))}
        </div>
    );
}

export default MenuCategory;
