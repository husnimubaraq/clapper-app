import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const PromoIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            {...props}>
            <Path
                d="M19.632 0h-8.35a.644.644 0 00-.455.189L.692 10.323a2.371 2.371 0 000 3.35l7.636 7.635c.446.446 1.04.692 1.674.692.634 0 1.229-.246 1.675-.692L21.81 11.174a.645.645 0 00.189-.456v-8.35A2.371 2.371 0 0019.632 0zm1.079 10.45l-9.946 9.947a1.07 1.07 0 01-.763.314c-.29 0-.56-.112-.763-.314l-7.635-7.636a1.08 1.08 0 010-1.526l9.945-9.946h8.083c.595 0 1.079.484 1.079 1.08v8.082z"
                fill="#848484"
            />
        </Svg>
    )
};