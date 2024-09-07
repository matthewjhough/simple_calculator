import {FlexContainer} from "./FlexContainer";
import {Text} from "react-native";
import React from "react";
import {useCalculatorActions} from "../hooks/useCalculatorActions";

export function CalculatorResults({children}: any) {
    const { state } = useCalculatorActions();
    const {result, currentVariable, evalStr} = state;

    return (
        <FlexContainer justifyContent="flex-end" flexDirection="column" alignItems="flex-end" flex={1} style={styles.container}>
            <Text style={styles.result}>{evalStr}</Text>
            <Text style={{
                ...styles.result,
                fontSize: 44
            }}>{currentVariable || result}</Text>
        </FlexContainer>
    )
}

const styles = {
    container: {
        padding: 25,
        height: 150,
        width: '100%'
    },
    result: {
        color: '#fff',
        fontSize: 24
    }
}