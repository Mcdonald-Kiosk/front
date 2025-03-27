import { api } from "../configs/axiosConfig";

// 메뉴 데이터를 가져오는 함수
export const fetchMenuData = async () => {
    const response = await api.get("/user/menu");

    // 받아온 데이터 가공 (menuPrice를 size 기준으로 정렬)
    const sortedData = response.data.map((item) => ({
        ...item,
        menuPrice: item.menuPrice.sort((a, b) => {
            const sizeOrder = ["M", "L"];  // 원하는 size 순서 정의
            return sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size);  // M이 L보다 먼저 오도록 정렬
        })
    }));

    return sortedData;
};


// 관리자용 전체 메뉴 목록 가져오기
export const adminFetchMenuApi = async () => {
    try {
        const response = await api.get("/api/admin/menus");
        console.log("🔥 [adminFetchMenuApi] 전체 메뉴 응답:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ [adminFetchMenuApi] API 요청 실패:", error);
        throw error;
    }
};


// 특정 메뉴 상세 정보 가져오기
export const fetchMenuDetailApi = async (menuId) => {
    if (!menuId) {
        console.warn("⚠️ [fetchMenuDetail] menuId가 없습니다.");
        return null;
    }

    try {
        const response = await api.get(`/api/admin/menus/${menuId}`);
        console.log(`🔥 [fetchMenuDetail] 선택한 메뉴(${menuId}) 응답:`, response.data);
        return response.data;
    } catch (error) {
        console.error("❌ [fetchMenuDetail] API 요청 실패:", error);
        throw error;
    }
};

// 페이지네이션용 이미지 + 메뉴명 가지고오기
export const fetchAllMenuImages = async () => {
    const response = await api.get("/api/admin/menus/images");
    return response.data;
};

// 메뉴 추가
export const addMenuApi = async (formData) => {
    const token = localStorage.getItem("AccessToken");
    if (!token) throw new Error("❌ 인증 정보 없음! 다시 로그인해주세요.");

    const payload = {
        menuName: formData.menuName,
        menuCategory: formData.menuCategory,
        menuSequence: formData.menuSequence,
        singleImg: formData.singleImg,
        setImg: formData.setImg,
        isExposure: formData.isExposure,
        prices: formData.prices.map((p) => ({
            size: p.size,
            price: Number(p.price),
            discountPrice: p.discountPrice ? Number(p.discountPrice) : 0,
        })),
    };

    try {
        const response = await api.post("/api/admin/menus", payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log("✅ [addMenuApi] 메뉴 추가 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ [addMenuApi] 메뉴 추가 실패:", error);
            throw error;
    }
};

// 메뉴 수정
export const updateMenuApi = async (menuId, formData) => {
    const token = localStorage.getItem("AccessToken");
    if (!token) throw new Error("❌ 인증 정보 없음! 다시 로그인해주세요.");

    const payload = {
        menuName: formData.menuName,
        menuCategory: formData.menuCategory,
        menuSequence: formData.menuSequence,
        singleImg: formData.singleImg,
        setImg: formData.setImg,
        isExposure: formData.isExposure,
        prices: formData.prices.map((p) => ({
            size: p.size,
            price: Number(p.price),
            discountPrice: p.discountPrice ? Number(p.discountPrice) : 0,
        })),
    };

    try {
        const response = await api.put(`/api/admin/menus/${menuId}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },});
        console.log("✅ [updateMenuApi] 메뉴 수정 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ [updateMenuApi] 메뉴 수정 실패:", error);
        throw error;
    }
};

// 메뉴 삭제
export const deleteMenuApi = async (menuId) => {
    const token = localStorage.getItem("AccessToken");
    if (!token) throw new Error("❌ 인증 정보 없음! 다시 로그인해주세요.");

    const response = await api.delete(`/api/admin/menus/${menuId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    console.log(`✅ [deleteMenuApi] 메뉴(${menuId}) 삭제 성공:`, response.data);
    return response.data;
};
