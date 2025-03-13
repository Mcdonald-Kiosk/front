import { createContext } from 'react';

// 가격정보는 현재 임의로 넣은 값, 나중에 백엔드에서 가져와야 한다.
// 가격 말고도 영양정보, 원산지 등등?
export const BurgerPriceContext = createContext({
    prices: {
        "맥스파이시® 상하이 투움바": 5900,
        "슈비 투움바": 6200,
        "더블 쿼터파운더® 치즈": 7200,
        "맥스파이시® 상하이 버거": 5400,
        "토마토 치즈 비프 버거": 6500,
        "쿼터파운더® 치즈": 6000,
        "빅맥": 5500,
        "맥크리스피™ 디럭스 버거": 5700,
        "맥크리스피™ 클래식 버거": 5200,
        "트리플 치즈버거": 6900,
        "1955® 버거": 6300,
        "맥치킨® 모짜렐라": 5300,
        "맥치킨®": 4000,
        "더블 불고기 버거": 4500,
        "불고기 버거": 3500,
        "슈슈 버거": 4900,
        "슈비 버거": 5200,
        "베이컨 토마토 디럭스": 5900,
        "치즈버거": 2900,
        "더블 치즈버거": 3900,
        "트리플 치즈버거": 4900,
    }
});
