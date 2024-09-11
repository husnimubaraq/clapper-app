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
import { ConfirmationDialog } from "components/confirmation-dialog";
import { TNotification, TNotificationNew } from "types";
import { TCreateComplaint, createComplaintRequest, createNotificationNewRequest, createNotificationRequest } from "features/complaint";
import { useGetAccessToken } from "features/complaint/hooks/use-get-access-token";
import { useToastContext } from "contexts";
import { useAuthStore } from "stores";
import dayjs from "dayjs";
import { TProps } from "./type";

const channels = [
  "aman",
  "pembunuhan",
  "kebakaran",
  "bencana",
  "pencurian",
  "ternak",
]

export const CategoryList = (props: TProps) => {
  const { location } = props

  const { data } = useGetCategory()
  const { data: dataAccesToken } = useGetAccessToken()

  const auth = useAuthStore((state: any) => state.auth)
  const token = useAuthStore((state: any) => state.token)

  const { showToast } = useToastContext()

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenConfirm, setIsOpenConfirm] = useState(false)
  const [selected, setSelected] = useState<TCategory | null>(null)

  const { mutate: mutateFirebase, isLoading: isLoadingFirebase } = useMutation({
    mutationFn: (params: TNotificationNew) => createNotificationNewRequest(params, dataAccesToken?.token),
    onSuccess: async (data) => {
      setIsOpenConfirm(false)
      setIsOpen(true)
    },
    onError: (error: any) => {
      showToast(error.message, 'error')
    }
  })

  const { mutate: mutateComplaint, isLoading } = useMutation({
    mutationFn: (params: TCreateComplaint) => createComplaintRequest(params),
    onSuccess: async (data) => {
      
      const category = selected?.kategoripelaporan_nama

      const categoryFind = channels.find(x => {
        let cat = category?.split(' ').map(y => {
          let regex = /[!@#$%^&*(),.?":{}|<>]/g

          return y.replace(regex, '').toLowerCase();
        })
        return cat?.includes(x)
      })

      mutateFirebase({
        message: {
          topic: `${categoryFind}`,
          notification: {
            title: selected?.kategoripelaporan_nama ?? '',
            body: `Terjadi ${selected?.kategoripelaporan_nama}`,
          },
          data: {
            pengguna_nama: auth?.pengguna_nama,
            id: data.pelaporan_id
          },
          android: {
            notification: {
              channel_id: `${categoryFind}`,
            }
          }
        }
      })
    },
    onError: (error: any) => {
      showToast(error.message, 'error')
    }
  })

  const onSubmit = async () => {

    const datetime = dayjs().format('YYYY-MM-DD HH:mm:ss').split(' ')
    const date = datetime[0]
    const time = datetime[1]

    if(location){
      mutateComplaint({
        token,
        kategoripelaporan_id: selected?.kategoripelaporan_id ?? '',
        pelaporan_tanggal: date,
        pelaporan_jam: time,
        pelaporan_latitude: location?.coords.latitude.toString(),
        pelaporan_longitude: location?.coords.longitude.toString(),
      })
    }
  }

  const renderItem = useCallback<ListRenderItem<TCategory>>(({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      className="mb-5 px-2 mr-3"
      onPress={() => {
        setIsOpenConfirm(true)
        setSelected(item)
      }}
      style={{
        width: VW / 3.5
      }}
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

      <Text textClassName="text-white font-medium text-base mt-3 text-center ">{item.kategoripelaporan_nama}</Text>
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

      <ConfirmationDialog
        title="Konfirmasi"
        message="Apakah anda yakin ingin melakukan pelaporan ini?"
        onSubmit={onSubmit}
        isOpen={isOpenConfirm}
        onCancel={setIsOpenConfirm}
        cancelText="Batal"
        isLoading={isLoading || isLoadingFirebase}
      />
    </>
  );
};
