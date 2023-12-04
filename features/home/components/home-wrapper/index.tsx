import { useMutation } from "react-query";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeHeader, News } from "features/home";
import { VH } from "utils";
import { useGetCheckSchedule } from "features/complaint";
import { MessagePopup } from "components/base";

const HomeWrapper = () => {

  const { data } = useGetCheckSchedule()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if(data){
      setIsOpen(data?.status === 'success' ? true : false)
    }
  }, [data])

  console.log('data: ', data)

  const containerInsets = useSafeAreaInsets()

  return (
    <SafeAreaView style={{ flex: 1, top: containerInsets.top }}>
      <SafeAreaProvider>
        <View 
          className="flex-1 bg-[#E4ECEF]"
        >
          <HomeHeader/>

          <News/>
        </View>

        <MessagePopup
          isOpen={isOpen}
          onCancel={setIsOpen}
          title="Jadwal Ronda"
          message={data?.pesan}
        />
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default HomeWrapper
