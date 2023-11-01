import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const LogoutIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}>
            <Path
                d="M10.026 11.625h1.249v2.5c0 1.034-.84 1.875-1.874 1.875H1.874A1.877 1.877 0 010 14.125V1.875C0 .841.84 0 1.874 0H9.4c1.033 0 1.874.841 1.874 1.875v2.5h-1.25v-2.5a.625.625 0 00-.624-.625H1.874a.626.626 0 00-.625.625v12.25c0 .345.28.625.625.625H9.4c.344 0 .625-.28.625-.625v-2.5zm3.03-6.571l-.884.884 1.436 1.437h-8.08v1.25h8.08l-1.436 1.438.883.883L16 8l-2.945-2.946z"
                fill="#E30016"
            />
        </Svg>
    )
};