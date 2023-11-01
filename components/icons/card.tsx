import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const CardIcon = (props: TProps) => {
    const { color = '#fff' } = props

    return (
        <Svg
            width={28}
            height={21}
            viewBox="0 0 28 21"
            fill="none"
            {...props}>
            <Rect x={1} y={1} width={26} height={19} rx={2} stroke={color} />
            <Path
                d="M3.88 3H3v15h.88V3zM6.52 3H5.2v12.727h1.32V3zM8.72 3h-.88v12.727h.88V3zM10.92 3H9.6v12.727h1.32V3zM12.68 3h-.88v12.727h.88V3zM14.44 3h-.88v15h.88V3zM18.84 3h-1.32v12.727h1.32V3zM21.04 3h-.88v12.727h.88V3zM23.24 3h-1.32v12.727h1.32V3zM25 3h-.88v15H25V3zM5.64 16.637h-.88V18h.88v-1.363zM7.4 16.637h-.88V18h.88v-1.363zM9.16 16.637h-.88V18h.88v-1.363zM10.92 16.637h-.88V18h.88v-1.363zM12.68 16.637h-.88V18h.88v-1.363zM16.2 16.637h-.88V18h.88v-1.363zM17.96 16.637h-.88V18h.88v-1.363zM19.72 16.637h-.88V18h.88v-1.363zM21.48 16.637h-.88V18h.88v-1.363zM23.24 16.637h-.88V18h.88v-1.363zM16.64 3h-.88v12.727h.88V3z"
                fill={color}
            />
        </Svg>
    )
};