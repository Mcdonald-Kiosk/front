import React, { useContext } from "react";
import { DrinkPriceContext } from "./DrinkPriceContext";


function DrinkMenu() {
    const { prices } = useContext(DrinkPriceContext);

    const drinks = [
        { name: "코카-콜라", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583889967380.png" },
        { name: "코카-콜라 제로", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1583890021601.png" },
        { name: "스프라이트", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1703512982605.png" },
        { name: "환타", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1631160688795.png" },
        { name: "바닐라 쉐이크 Medium", img: "https://www.mcdonalds.co.kr/uploadFolder/product/prov_201901290255488970.png" },
        { name: "딸기 쉐이크 Medium", img: "https://www.mcdonalds.co.kr/uploadFolder/product/prov_201901290257347040.png" },
        { name: "초코 쉐이크 Medium", img: "https://www.mcdonalds.co.kr/uploadFolder/product/prov_201901290257444650.png" },
        { name: "오렌지 주스", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1734681316004.png" },
        { name: "생수", img: "https://www.mcdonalds.co.kr/uploadFolder/product/prov_201901290258201760.png" },
    ];

    return (
        <div>
            {drinks.map((drink) => (
                <div key={drink}>
                    <img src={drink.img} alt={drink.name} />
                    <p>{drink.name}</p>
                    <p>{prices[drink.name] ? `${prices[drink.name]}원` : "가격 없음"}</p>
                </div>
            ))}
        </div>
    );
}

export default DrinkMenu;
