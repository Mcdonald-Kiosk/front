import { api } from "../configs/axiosConfig";

// 영양정보 및 원산지 단건 조회
export const fetchMenuInfoApi = async (menuId) => {
    if (!menuId) return null;

    try {
        const response = await api.get(`/api/admin/menuInfo/${menuId}`);
        return response.data;
    } catch (error) {
        console.error("❌ [fetchMenuInfoApi] API 요청 실패:", error);
        throw error;
    }
};
