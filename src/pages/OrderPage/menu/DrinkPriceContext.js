import { createContext } from "react";

export const DrinkPriceContext = createContext({
    prices: {
        "코카-콜라": 2000,
        "코카-콜라 제로": 2000,
        "스프라이트": 2000,
        "환타": 2000,
        "바닐라 쉐이크 Medium": 2500,
        "딸기 쉐이크 Medium": 2500,
        "초코 쉐이크 Medium": 2500,
        "오렌지 주스": 2500,
        "생수": 1500
    }
});