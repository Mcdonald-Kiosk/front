import { api } from "../configs/axiosConfig";

// 메뉴 데이터를 가져오는 함수
export const fetchMenuData = async () => {
    const response = await api.get("/user/menu");
    return response.data;  // axios는 응답을 .data로 제공
};

// 특정 메뉴 가져오기
export const fetchMenuDetail = async (menuId) => {
  const response = await api.get(`/user/menu/${menuId}`);
  return response.data;
};

// 메뉴 추가
export const addMenuData = async (formData) => {
  const token = localStorage.getItem("accessToken"); // JWT 토큰 가져오기

  const data = new FormData();
  data.append("menuName", formData.menuName);
  data.append("menuCategory", formData.menuCategory);
  data.append("menuSequence", formData.menuSequence);
  data.append("isExposure", formData.isExposure);
  data.append("prices", JSON.stringify(formData.prices));

  if (formData.singleImg) data.append("singleImg", formData.singleImg);
  if (formData.setImg) data.append("setImg", formData.setImg);

  // 🚀 JWT 토큰을 헤더에 추가
  const response = await api.post("/admin/menu", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`, // ✅ JWT 토큰 추가
    },
  });

  return response.data;
};

// 메뉴 삭제
export const deleteMenuData = async (menuId) => {
  const response = await api.delete(`/admin/menu/${menuId}`);
  return response.data;
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