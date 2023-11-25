import React from "react";
import { View } from "react-native";
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';

import { Navigation, navigateReset } from "layouts/default";
import { ToastProvider } from "contexts";
import { StatusBar } from "expo-status-bar";
import { colors } from "themes";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AxiosError } from "axios";
import { useAuthStore } from "stores";

export type IAppWrapperProps = {};

const AppWrapper: React.FC<IAppWrapperProps> = ({ }) => {

  const setAuthState = useAuthStore((state: any) => state.setAuthState)
  const setToken = useAuthStore((state: any) => state.setToken)

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        const response = error as Response
        
        if(response.status === 401){
          navigateReset('Login')
          setAuthState({})
          setToken("")
        }
      },
    }),
  });


  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View className="flex-1 bg-slate-600">
            <StatusBar
              backgroundColor={colors.palette.primary}
            />
            <Navigation />
          </View>
        </GestureHandlerRootView>
      </ToastProvider>
    </QueryClientProvider>
  );
};

export { AppWrapper };
