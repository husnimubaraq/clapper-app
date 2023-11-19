import { useMutation } from "react-query";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity, FlatList, ListRenderItem, Image } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { VH, VW } from "utils";
import { TCategory, categories, useGetCategory } from 'features/clapper'
import { BackspaceIcon, LocationIcon } from "components/icons";
import { colors, spacing } from "themes";
import { MessagePopup, Text } from "components/base";
import * as Notifications from 'expo-notifications';

export const CategoryList = () => {

  const { data } = useGetCategory()

  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<TCategory | null>(null)

  const containerInsets = useSafeAreaInsets()

  const schedulePushNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
        sound: 'suara1.mp3',
        vibrate: [0, 250, 250, 250]
      },
      trigger: { 
        seconds: 2,
        channelId: 'new-emails',
      },
    });
  }

  const renderItem = useCallback<ListRenderItem<TCategory>>(({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      className="mb-5 px-2"
      // onPress={() => {
      //   setSelected(item)
      //   setIsOpen(true)
      // }}
      onPress={schedulePushNotification}
    >
      <Image
        source={{ uri: item.kategoripelaporan_icon }}
        className=" shadow-md"
        style={{
          height: VW / 3.5,
          width: VW / 4
        }}
        borderRadius={5}
      />

      <Text textClassName="text-white font-medium text-base mt-3 text-center">{item.kategoripelaporan_nama}</Text>
    </TouchableOpacity>
  ), [])

  return (
    <>
      <FlatList
        data={data?.data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={{
          paddingHorizontal: spacing.medium,
          paddingTop: spacing.medium
        }}
      />

      <MessagePopup
        isOpen={isOpen}
        onCancel={setIsOpen}
        title="Sukses"
        message="Terimakasih, Aduan anda berhasil disimpan. Silahkan tunggu tanggapan dari warga !"
      />
    </>
  );
};
