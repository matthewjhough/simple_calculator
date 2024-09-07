import {TouchableOpacity, View, Text} from "react-native";
import React from "react";
import type { PropsWithChildren, ReactElement } from 'react';

type NumberButtonProps = PropsWithChildren<{
    textStyles: {} | any;
    style: {} | any;
    children: any;
}>

export function NumberButton({children, textStyles = {}, style = {}, ...restProps}: NumberButtonProps) {
    return (
        <View style={{...styles.container, ...style }}>
            <TouchableOpacity style={styles.button} {...restProps}>
                <Text style={{...styles.text, ...textStyles }}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

export const SIZE_DIMENSIONS = 65;

const styles = {
    container: {
        height: SIZE_DIMENSIONS,
        width: SIZE_DIMENSIONS,
        borderRadius: 100,
        backgroundColor: '#505050',
        margin: 5,
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff'
    },
}