import {FlexContainer} from "../../components/FlexContainer";
// @ts-ignore
import React from "react";
import {NumberPad} from "../../components/NumberPad";
import {CalculatorResults} from "../../components/CalculatorResults";
import {OperationButton} from "../../components/OperationButton";
import {Operations} from "../../components/Operations";

export default function TabTwoCalculator() {
    return (
        <FlexContainer
            flex={1}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={styles.container}
        >
            <FlexContainer>
                <CalculatorResults />
            </FlexContainer>
            <FlexContainer
                justifyContent="space-between"
                alignItems="center">
                <NumberPad />
                <Operations />
            </FlexContainer>
        </FlexContainer>
    );
}

const styles = {
    text: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
    },
    container: {
        backgroundColor: '#1c1c1c'
    },
}