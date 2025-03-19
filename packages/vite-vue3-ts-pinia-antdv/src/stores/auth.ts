/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
    const token = ref("");
    const user = ref({
        name: "张三",
        userType: "anonymous",
    });

    const setToken = (value: string) => {
        token.value = value;
    };

    const setUser = (value: any) => {
        user.value = value;
    };

    return {
        token,
        user,
        setToken,
        setUser,
    };
});
