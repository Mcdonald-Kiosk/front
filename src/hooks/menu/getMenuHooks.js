// getMenuHooks.js
import { useQuery } from '@tanstack/react-query'; // react-query v5는 @tanstack/react-query로 패키지명이 변경됨
import { adminFetchMenuData, fetchMenuDetail } from '../../apis/menuApi';  // menuApi에서 요청 함수 가져오기

// 메뉴 데이터를 가져오는 커스텀 훅
const useMenuData = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['menuData'],
        queryFn: async () => {
            try {
                const response = await adminFetchMenuData();
                if (!response) throw new Error("서버에서 데이터를 가져오지 못함");
                return response;
            } catch (err) {
                console.error("❌ [useMenuData] API 요청 실패: ", err);
                return null;
            }
        },
        staleTime: 5 * 60 * 1000, // 5분 동안 캐싱
    });

    console.log("🔥 [useMenuData] 전체 메뉴 응답: ", data);
    if (error) console.error("❌ [useMenuData] 오류 발생: ", error);

    return { data, error, isLoading };
};

// 특정 메뉴 가져오기 (GET)
export const useMenuDetail = (menuId) => {
    const { data, error } = useQuery({
        queryKey: ['menuDetail', menuId],
        queryFn: async () => {
            if (!menuId) return null; // ✅ menuId가 없으면 API 요청하지 않음.
            try {
                const response = await fetchMenuDetail(menuId);
                if (!response) throw new Error("서버에서 데이터를 가져오지 못함");
                return response;
            } catch (err) {
                console.error("❌ [useMenuDetail] API 요청 실패: ", err);
                return null;
            }
        },
        enabled: !!menuId,
    });

    console.log(`🔥 [useMenuDetail] 선택한 메뉴(${menuId}) 응답: `, data);
    if (error) console.error("❌ [useMenuDetail] 오류 발생: ", error);

    return { data, error };
};


export default useMenuData;