import { useQuery } from "@tanstack/react-query";
import { fetchMenuInfoApi } from "../../apis/menuInfo";

export const useMenuInfo = (menuId) => {
    return useQuery({
        queryKey: ["menuInfo", menuId],
        queryFn: async () => {
            if (!menuId) return null;
            try {
                const data = await fetchMenuInfoApi(menuId);
                return data;
            } catch (err) {
                return null;
            }
        },
        enabled: !!menuId,
        staleTime: 1000 * 60 * 5, // 5분 동안 캐싱
    });
};