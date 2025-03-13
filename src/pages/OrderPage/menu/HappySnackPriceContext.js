import { createContext } from "react";

export const HappySnackPriceContext = createContext({
    prices: {
        "아이스 드립 커피 Medium": 2000,
        "아이스 드립 커피 Large": 2500,
        "한입 초코 츄러스 3조각": 1500,
        "슈림프 스낵랩": 3500,
        "바닐라 쉐이크 Medium": 2500,
        "토마토 치즈 비프 버거": 4800,
        "한입 초코 츄러스 라지 커피 콤보": 3800,
        "슈림프 스낵랩 라지 커피 콤보": 5500
    }
});
