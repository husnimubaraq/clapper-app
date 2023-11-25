import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type TProps = {
    color?: string
} & SvgProps

export const PictureIcon = (props: TProps) => {
    const { color } = props

    return (
        <Svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            {...props}>
            <Path
                d="M18.7084 4.43755C18.375 4.70838 17.8855 4.65629 17.6042 4.33338C17.25 3.89588 16.7292 3.64587 16.1667 3.64587H5.51047C4.48963 3.64587 3.64587 4.47922 3.64587 5.51047V16.1667C3.64587 16.6667 3.84379 17.1355 4.19796 17.4896C4.50004 17.7917 4.50004 18.2813 4.19796 18.5938C4.04171 18.7396 3.84379 18.823 3.64587 18.823C3.43754 18.823 3.23963 18.7396 3.09379 18.5938C2.43754 17.9375 2.08337 17.0834 2.08337 16.1667V5.51047C2.08337 3.62505 3.62505 2.08337 5.51047 2.08337H16.1667C17.1979 2.08337 18.1667 2.54172 18.8125 3.33339C19.0938 3.66672 19.0417 4.16672 18.7084 4.43755Z"
                fill={color}
            />
            <Path
                d="M4.19796 17.4896C4.50004 17.7917 4.50004 18.2813 4.19796 18.5938C4.04171 18.7396 3.84379 18.823 3.64587 18.823C3.43754 18.823 3.23963 18.7396 3.09379 18.5938C2.43754 17.9375 2.08337 17.0834 2.08337 16.1667V5.51047C2.08337 3.62505 3.62505 2.08337 5.51047 2.08337H16.1667C17.1979 2.08337 18.1667 2.54172 18.8125 3.33339C19.0938 3.66672 19.0417 4.16672 18.7084 4.43755C18.375 4.70838 17.8855 4.65629 17.6042 4.33338C17.25 3.89588 16.7292 3.64587 16.1667 3.64587H5.51047C4.48963 3.64587 3.64587 4.47922 3.64587 5.51047V16.1667C3.64587 16.6667 3.84379 17.1355 4.19796 17.4896Z"
                fill={color}
            />
            <Path
                d="M19.4896 5.40625H8.83334C6.94793 5.40625 5.40625 6.94793 5.40625 8.83334V19.4896C5.40625 21.375 6.94793 22.9167 8.83334 22.9167H19.4896C21.375 22.9167 22.9167 21.375 22.9167 19.4896V8.83334C22.9167 6.94793 21.375 5.40625 19.4896 5.40625ZM10.8438 8.77084C11.6354 8.77084 12.2813 9.41666 12.2813 10.2187C12.2813 11.0208 11.6354 11.6667 10.8438 11.6667C10.0417 11.6667 9.39582 11.0208 9.39582 10.2187C9.39582 9.41666 10.0417 8.77084 10.8438 8.77084ZM21.3542 19.4896C21.3542 20.5208 20.5208 21.3542 19.4896 21.3542H8.83334C7.80209 21.3542 6.96875 20.5208 6.96875 19.4896V19.1771L9.79166 16.3646C9.99999 16.1458 10.3542 16.1458 10.5625 16.3646L11.3438 17.1458C12.1354 17.9375 13.5312 17.9375 14.3229 17.1458L17.7604 13.7083C17.9687 13.5 18.3333 13.5 18.5417 13.7083L21.3542 16.5208V19.4896Z"
                fill={color}
            />
        </Svg>
    )
};