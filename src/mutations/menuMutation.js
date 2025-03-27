import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addMenuApi, deleteMenuApi, updateMenuApi } from '../apis/menuApi';
import axios from "axios";

// 메뉴 추가
export const useAddMenuMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addMenuApi,
        onSuccess: () => {
            console.log("✅ [useAddMenuMutation] 메뉴 추가 성공");
            queryClient.invalidateQueries(["menuData"]);
        },
        onError: (error) => {
            console.error("❌ [useAddMenuMutation] 메뉴 추가 실패:", error);
        },
    });
};

// 메뉴 수정
export const useUpdateMenuMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ menuId, formData }) => updateMenuApi(menuId, formData),
        onSuccess: () => {
            console.log("✅ [useUpdateMenuMutation] 메뉴 수정 성공");
            queryClient.invalidateQueries(["menuData"]);
        },
        onError: (error) => {
            console.error("❌ [useUpdateMenuMutation] 메뉴 수정 실패:", error);
        },
    });
};

// 메뉴 삭제
export const useDeleteMenuMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteMenuApi, // api에서 delete 요청 보냄
        onSuccess: () => {
            console.log("✅ [useDeleteMenuMutation] 메뉴 삭제 성공");
            queryClient.invalidateQueries(["menuData"]); // 캐시 갱신
        },
        onError: (error) => {
            console.error("❌ [useDeleteMenuMutation] 메뉴 삭제 실패:", error);
        },
    });
};

export const getAllMenuMutation = () => useMutation({
    mutationKey: ["getAllMenuMutation"],
    mutationFn: adminFetchMenuApi,
    retry: 0,
});
