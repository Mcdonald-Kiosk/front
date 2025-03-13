import React, { useContext } from "react";
import { SidePriceContext } from "./SidePriceContext";

function SideMenu() {
    const { prices } = useContext(SidePriceContext);

    const menuItems = [
        { name: "슈림프 스낵랩", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1736300408618.png" },
        { name: "코울슬로", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1680761626050.png" },
        { name: "상하이 치킨 스낵랩", img: "https://www.mcdonalds.co.kr/uploadFolder/product/prov_201902080435011620.png" },
        { name: "골든 모짜렐라 치즈스틱", img: "https://www.mcdonalds.co.kr/uploadFolder/product/prov_201902080435496530.png" },
        { name: "후렌치 후라이", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1723564344384.png" },
        { name: "맥너겟®", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1612402131024.png" },
        { name: "맥스파이시®치킨 텐더", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1612402252126.png" },
        { name: "해쉬 브라운", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1563759777641.png" },
        { name: "한입 초코 츄러스 3조각", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1736300038268.png" },
        { name: "베리 스트로베리 맥플러리", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1617837982953.png" },
        { name: "오레오 맥플러리", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1615378578396.png" },
        { name: "딸기 오레오 맥플러리", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1615378509519.png" },
        { name: "초코 오레오 맥플러리", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1615378451271.png" },
        { name: "스트로베리콘", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1617838125445.png" },
        { name: "아이스크림콘", img: "https://www.mcdonalds.co.kr/uploadFolder/product/prov_201902041118158920.png" },
        { name: "바닐라 선데이 아이스크림", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1657246845162.png" },
        { name: "초코 선데이 아이스크림", img: "https://www.mcdonalds.co.kr/uploadFolder/product/prov_201901290248295110.png" },
        { name: "딸기 선데이 아이스크림", img: "https://www.mcdonalds.co.kr/uploadFolder/product/prov_201902041118158920.png" },
        { name: "오레오 아포가토", img: "https://www.mcdonalds.co.kr/uploadFolder/product/prov_201901290249059690.png" }
    ];

    return (
        <div>
            {menuItems.map((side) => (
                <div key={side.name}>
                    <img src={side.img} alt={side.name} />
                    <p>{side.name}</p>
                    <p>{prices[side.name] ? `${prices[side.name]}원` : "가격 없음"}</p>
                </div>
            ))}
        </div>
    );
}

export default SideMenu;
