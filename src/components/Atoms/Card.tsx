import React, { FC, PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';


interface Props extends PropsWithChildren {
    centerAligned?: boolean;
    center?: boolean;
    row?: boolean;
    color?: string;
    even?: boolean;
    spaceBetween?: boolean;
    pTop?: number;
    pBottom?: number;
    pLeft?: number;
    pRight?: number;
    mTop?: number;
    mBottom?: number;
    mLeft?: number;
    mRight?: number;
    radius?: number;
    reverse?: boolean;
    height?: number | string;
    width?: number | string;
    radiusBottom?: number;
    radiusTop?: number;
    flex?: number
    end?: boolean;
    justifyCenter?: boolean;
    overflow?: 'visible' | 'hidden' | 'scroll';
    bottomLeftRadius?: number;
    bottomRightRadius?: number;
    fill?: boolean,
    absolute?: boolean,
    avoidTouch?: boolean,
    topLeftRadius?: number;
    topRightRadius?: number;
    borderWidth?: number,
    borderColor?: string,
    backgroundColor?: string,
    cardStyle?: Record<string, string | number>;
}

export const Card: FC<Props> = ({ children,
    center,
    centerAligned,
    row,
    color,
    even,
    spaceBetween,
    pTop,
    pBottom,
    pLeft,
    pRight,
    mTop,
    mBottom,
    mLeft,
    mRight,
    radius,
    reverse,
    height,
    width,
    flex,
    end,
    justifyCenter,
    overflow,
    bottomLeftRadius,
    bottomRightRadius,
    fill,
    topLeftRadius,
    topRightRadius,
    absolute,
    avoidTouch,
    cardStyle,
    borderWidth,
    borderColor }) => {
    return (
        <View
            pointerEvents={avoidTouch ? 'none' : 'auto'}
            style={[{
                ...row && styles.row,
                ...centerAligned && styles.centerAligned,
                ...center && styles.center,
                ...even && styles.evenSpaced,
                ...spaceBetween && styles.spaceBetween,
                ...reverse && styles.reverse,
                ...end && styles.end,
                ...justifyCenter && styles.justifyCenter,
                ...flex && { flex: flex },
                ...fill && { flex: 1 },
                ...bottomLeftRadius && { borderBottomLeftRadius: bottomLeftRadius },
                ...bottomRightRadius && { borderBottomRightRadius: bottomRightRadius },
                ...topLeftRadius && { borderTopLeftRadius: topLeftRadius },
                ...topRightRadius && { borderTopRightRadius: topRightRadius },
                backgroundColor: color || 'transparent',
                ...absolute && { position: 'absolute', top: pTop, bottom: pBottom, left: pLeft, right: pRight },
                ...pBottom && { paddingBottom: pBottom },
                ...pLeft && { paddingLeft: pLeft },
                ...pRight && { paddingRight: pRight },
                ...pTop && { paddingTop: pTop },
                marginBottom: mBottom || 0,
                marginLeft: mLeft || 0,
                marginRight: mRight || 0,
                marginTop: mTop || 0,
                borderRadius: radius || 0,
                overflow: overflow || 'visible',
                height: height,
                width: width,
                borderWidth: borderWidth || 0,
                borderColor: borderColor || 'transparent',
                ...cardStyle && cardStyle
            },

            ]}
        >
            {children}
        </View >
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    centerAligned: {
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    evenSpaced: {
        justifyContent: 'space-evenly'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    reverse: {
        alignContent: 'flex-end'
    },
    end: {
        justifyContent: "flex-end"
    },
    justifyCenter: {
        justifyContent: 'center'
    }
});

export default Card