import {NumberButton} from "./NumberButton";
import React from "react";


export function OperationButton({children, ...restProps}: any) {
    return (
        <NumberButton textStyles={{...styles.text, }} style={styles.operation} {...restProps}>
            {children}
        </NumberButton>
    );
}

const styles = {
    text: {
        fontSize: 35
    },
    operation: {
        backgroundColor: '#ff9500',
    },
}