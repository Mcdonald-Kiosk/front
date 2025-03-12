import React, { useContext } from 'react';
import { BurgerPriceContext } from './BurgerPriceContext';

function BurgerMenu() {
    const { prices } = useContext(BurgerPriceContext);

    const burgers = [
        { name: "맥스파이시® 상하이 투움바", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1740440064324.png" },
        { name: "슈비 투움바", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1740439854281.png" },
        { name: "더블 쿼터파운더® 치즈", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727501907.png" },
        { name: "맥스파이시® 상하이 버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1717486375819.png" },
        { name: "토마토 치즈 비프 버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1717567315213.png" },
        { name: "쿼터파운더® 치즈", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583728200175.png" },
        { name: "빅맥", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727855319.png" },
        { name: "맥크리스피™ 디럭스 버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1653436847042.png" },
        { name: "맥크리스피™ 클래식 버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1653436587840.png" },
        { name: "트리플 치즈버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1621834846208.png" },
        { name: "1955® 버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1599119647587.png" },
        { name: "맥치킨® 모짜렐라", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727649835.png" },
        { name: "맥치킨®", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583730334543.png" },
        { name: "더블 불고기 버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727313256.png" },
        { name: "불고기 버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727805044.png" },
        { name: "슈슈 버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727999760.png" },
        { name: "슈비 버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727918778.png" },
        { name: "베이컨 토마토 디럭스", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727707216.png" },
        { name: "치즈버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583728101061.png" },
        { name: "더블 치즈버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583727413936.png" },
        { name: "트리플 치즈버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1695717107656.png" },
        { name: "햄버거", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583728282358.png" }
    ];

    return (
        <div>
            {burgers.map((burger) => (
                <div key={burger.name}>
                    <img src={burger.img} alt={burger.name} />
                    <p>{burger.name}</p>
                    <p>{prices[burger.name] ? `${prices[burger.name]}원` : "가격 없음"}</p>
                </div>
            ))}
        </div>
    );
}

export default BurgerMenu;