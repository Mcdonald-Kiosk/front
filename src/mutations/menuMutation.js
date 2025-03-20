import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addMenuData, deleteMenuData } from '../apis/menuApi';

// 메뉴 추가 (POST) → useMutation 사용
export const useAddMenuMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addMenuData,
        onSuccess: () => {
            queryClient.invalidateQueries(['menuData']); // 추가 후 메뉴 목록 갱신
        },
    });
};

// 메뉴 삭제 (DELETE) → useMutation 사용
export const useDeleteMenuMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteMenuData,
        onSuccess: () => {
            queryClient.invalidateQueries(['menuData']); // 삭제 후 메뉴 목록 갱신
        },
    });
};
