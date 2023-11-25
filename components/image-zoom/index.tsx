import React from "react";
import { View, Image, Modal } from "react-native";
import { TProps } from "./type";
import { VH, VW } from "utils";
import ImageZoomCustom from 'react-native-image-pan-zoom';

export const ImageZoom = (props: TProps) => {
    const { url, isOpen, onCancel } = props

    return (
        <Modal 
            animationType="fade" 
            transparent 
            visible={isOpen}
            onRequestClose={() => {
                onCancel && onCancel(false)
            }}
            onDismiss={() => {
                onCancel && onCancel(false)
            }}
        >
            <View
                className='absolute bottom-0 top-0 justify-center w-full'
                style={{
                    backgroundColor: 'rgba(30, 30, 30, 0.8)'
                }}
            >
                {/** @ts-ignore */}
                <ImageZoomCustom 
                    cropWidth={VW}
                    cropHeight={VH}
                    imageWidth={VW * 2}
                    imageHeight={VW * 1.3}
                >
                    <Image 
                        style={{
                            width:VW * 2, 
                            height:VW * 1.3
                        }}
                        source={{uri: url}}
                        resizeMode="contain"
                    />
                </ImageZoomCustom>
            </View>
        </Modal>
    );
};