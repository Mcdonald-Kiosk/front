// getMenuHooks.js
import { useQuery } from '@tanstack/react-query'; // react-query v5는 @tanstack/react-query로 패키지명이 변경됨
import { adminFetchMenuData, fetchMenuDetail } from '../../apis/menuApi';  // menuApi에서 요청 함수 가져오기

// 메뉴 데이터를 가져오는 커스텀 훅
const useMenuData = () => {
    // useQuery 훅을 사용하여 서버에서 메뉴 데이터를 가져옴
    const { data, error, isLoading } = useQuery({
        queryKey: ['menuData'],  // queryKey를 배열로 수정
        queryFn: adminFetchMenuData,
        staleTime: 5 * 60 * 1000,  // 5분 동안 캐싱 (불필요한 요청 방지)

    });
    
    console.log("🔥 [useMenuData] 전체 메뉴 응답: ", data);
    console.error("❌ [useMenuData] 오류 발생: ", error);
    // data, error, isLoading 값을 반환
    return { data, error, isLoading };
};

// 특정 메뉴 가져오기 (GET)
export const useMenuDetail = (menuId) => {
    const { data, error } = useQuery({
        queryKey: ['menuDetail', menuId],
        queryFn: () => fetchMenuDetail(menuId),
        enabled: !!menuId,
    });

    console.log(`🔥 [useMenuDetail] 선택한 메뉴(${menuId}) 응답: `, data);
    console.error("❌ [useMenuDetail] 오류 발생: ", error);

    return { data, error };
};
export default useMenuData;