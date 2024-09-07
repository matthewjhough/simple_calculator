import {NumberButton, SIZE_DIMENSIONS} from "./NumberButton";
import React from "react";
import {FlexContainer} from "./FlexContainer";
import {useCalculatorActions} from "../hooks/useCalculatorActions";


export function NumberPad() {
    const {setCurrentVariable, clearCalculator, state} = useCalculatorActions();
    const numbers = Array.apply(null, Array(9))
        .map((n, i) => {
            const number = i + 1;

            return (
                <NumberButton
                    onPress={() => {
                        setCurrentVariable(number);
                    }}
                    key={`number-${number}`}>
                        {number}
                </NumberButton>
            );
        }).reverse();

    const flexProps = {
        justifyContent: "flex-start",
        alignItems: "flex-start"
    };

    return (
        <FlexContainer
            flex={1}
            style={styles.container}
            {...flexProps}
            flexDirection="column">
            <FlexContainer>
                <NumberButton
                    onPress={() => clearCalculator()}
                    textStyles={styles.miscOperations}
                    style={styles.miscOperations}>
                    C
                </NumberButton>
                {/* ran out of time before i could get to these operations */}
                <NumberButton
                    textStyles={styles.miscOperations}
                    style={styles.miscOperations}>
                    - / +
                </NumberButton>
                <NumberButton
                    textStyles={styles.miscOperations}
                    style={styles.miscOperations}>
                    %
                </NumberButton>
            </FlexContainer>
            {/* number pad numbers */}
            <FlexContainer {...flexProps} style={styles.digitContainer}>
                {numbers}
            </FlexContainer>
            <FlexContainer>
                <NumberButton onPress={() => setCurrentVariable(0)} style={{width: SIZE_DIMENSIONS * 2}}>0</NumberButton>
                <NumberButton>.</NumberButton>
            </FlexContainer>
        </FlexContainer>
    );
}

const styles = {
    container: {
        padding: 5,
        flexWrap: "wrap",
    },
    miscOperations: {
        backgroundColor: '#d4d4d2',
        color: '#000',
    },
    digitContainer: {
        flexWrap: "wrap",
    },
};