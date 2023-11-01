import React from "react";
import { View } from "react-native";
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';

import { Navigation } from "layouts/default";
import { ToastProvider } from "contexts";
import { StatusBar } from "expo-status-bar";
import { colors } from "themes";

export type IAppWrapperProps = {};

const AppWrapper: React.FC<IAppWrapperProps> = ({ }) => {

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {

      },
    }),
  });


  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <View className="flex-1 bg-slate-600">
          <StatusBar
            backgroundColor={colors.palette.primary}
          />
          <Navigation />
        </View>
      </ToastProvider>
    </QueryClientProvider>
  );
};

export { AppWrapper };
