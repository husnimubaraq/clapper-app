import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const BellIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={41}
            height={45}
            viewBox="0 0 41 45"
            fill="none"
            {...props}
        >
            <Path
                d="M.987 37.688v-4.389H5.98V17.941c0-3.035 1.04-5.732 3.121-8.09 2.081-2.36 4.786-3.905 8.115-4.636V3.68c0-.914.364-1.691 1.092-2.33.728-.64 1.613-.96 2.653-.96s1.925.32 2.653.96c.728.639 1.092 1.416 1.092 2.33v1.536c3.33.732 6.034 2.277 8.115 4.635 2.08 2.359 3.12 5.056 3.12 8.09V33.3h4.994v4.388H.987zM20.96 44.27c-1.373 0-2.549-.43-3.527-1.29-.978-.858-1.467-1.892-1.467-3.098h9.988c0 1.206-.49 2.24-1.467 3.099-.978.86-2.154 1.289-3.527 1.289z"
                fill={color}
            />
        </Svg>
    )
};