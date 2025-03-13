import React, { useContext } from 'react';
import { CoffeePriceContext } from './CoffeePriceContext';

const coffeeItems = [
    { name: "바닐라 라떼", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1677678794782.png" },
    { name: "아이스 바닐라 라떼", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1654652269651.png" },
    { name: "카페라떼", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1677680118201.png" },
    { name: "디카페인 카페라떼", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1677679216326.png" },
    { name: "아이스 카페라떼", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1610885477469.png" },
    { name: "디카페인 아이스 카페라떼", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1610887233610.png" },
    { name: "아메리카노", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1677680290018.png" },
    { name: "디카페인 아메리카노", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1677679725954.png" },
    { name: "아이스 아메리카노", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1610887631017.png" },
    { name: "디카페인 아이스 아메리카노", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1610889486625.png" },
    { name: "카푸치노", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1677679951061.png" },
    { name: "디카페인 카푸치노", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1677679486199.png" },
    { name: "드립 커피", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1677680459621.png" },
    { name: "아이스 드립 커피", img: "https://www.mcdonalds.co.kr/upload/product/pcfile/1610889861261.png" }
];

function CoffeeMenu() {
    const { prices } = useContext(CoffeePriceContext);

    return (
        <div>
            {coffeeItems.map((coffee) => (
                <div key={coffee.name}>
                    <img src={coffee.img} alt={coffee.name} />
                    <p>{coffee.name}</p>
                    <p>{prices[coffee.name] ? `${prices[coffee.name]}원` : "가격 없음"}</p>
                </div>
            ))}
        </div>
    );
}

export default CoffeeMenu;