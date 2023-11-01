import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const SuccessIcon = (props: TProps) => {
    const { color = "#27AE60" } = props

    return (
        <Svg
        width={81}
        height={80}
        viewBox="0 0 81 80"
            fill="none"
            {...props}>
            <Path
                d="M40.5 6.667C22.133 6.667 7.166 21.633 7.166 40c0 18.367 14.967 33.333 33.334 33.333 18.367 0 33.333-14.966 33.333-33.333 0-18.367-14.966-33.333-33.333-33.333zM52.467 35.3L40.733 47.033c-.5.5-1.133.734-1.766.734-.634 0-1.3-.234-1.767-.734l-5.867-5.866c-1-.967-1-2.567 0-3.534a2.515 2.515 0 013.534 0l4.1 4.1 9.966-9.966c.967-.967 2.534-.967 3.534 0a2.515 2.515 0 010 3.533z"
                fill={color}
            />
        </Svg>
    )
};