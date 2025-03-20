import { useMutation } from "@tanstack/react-query";
import { joinApi, loginApi } from "../apis/authApi";
import { addMenuData, deleteMenuData, fetchMenuData, fetchMenuDetail } from "../apis/menuApi";

export const useJoinMutation = () => useMutation({
    mutationKey: ["joinMutation"],
    mutationFn: joinApi,
    retry: 0,
});

export const useLoginMutation = () => useMutation({
    mutationKey: ["loginMutation"],
    mutationFn: loginApi,
    retry: 0,
});