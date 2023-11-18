
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';
import { TAuth } from 'features/auth';

export const useAuthStore = create(persist(
    (set) => ({
        auth: {} as TAuth,
        token: "" as string,
        setAuthState: (data: any) => set(() => ({ auth: { ...data } })),
        setToken: (data: any) => set(() => ({ token: data })),
    }),
    {
        name: 'authStore',
        storage: createJSONStorage(() => AsyncStorage),
    },
));