import { api } from "../configs/axiosConfig";

// 메뉴 데이터를 가져오는 함수
export const fetchMenuData = async () => {
    const response = await api.get("/user/menu");
    return response.data;  // axios는 응답을 .data로 제공
};

/*
[
  {
    "menuId": 1,
    "menuName": "버거",
    "menuCategory": "세트",
    "menuSequence": 1,
    "singleImg": "burger.jpg",
    "setImg": "burger_set.jpg",
    "menuPrice": {
      "menuPriceId": 1,
      "menuId": 1,
      "menuPrice": 5000,
      "menuSetPrice": 7000,
      "menuSetLunchPrice": 6500,
      "menuLargePrice": 8000
    }
  },
  {
    "menuId": 2,
    "menuName": "치킨",
    "menuCategory": "단품",
    "menuSequence": 2,
    "singleImg": "chicken.jpg",
    "setImg": null,
    "menuPrice": {
      "menuPriceId": 2,
      "menuId": 2,
      "menuPrice": 7000,
      "menuSetPrice": null,
      "menuSetLunchPrice": null,
      "menuLargePrice": null
    }
  }
]
*/