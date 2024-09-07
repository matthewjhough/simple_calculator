import {OperationButton} from "./OperationButton";
// @ts-ignore
import React from "react";
import {FlexContainer} from "./FlexContainer";
import {useCalculatorActions} from "../hooks/useCalculatorActions";

// TODO: ADD TYPES FOR COMPONENTS
export function Operations() {
    const {setCurrentOperation, calculateResult, state} = useCalculatorActions();
    return (
        <FlexContainer justifyContent="flex-start" alignItems="flex-start" flexDirection="column">
            <OperationButton onPress={() => {
                setCurrentOperation('/')
            }}>
                &#247;
            </OperationButton>
            <OperationButton onPress={() => {
                setCurrentOperation('*')
            }}>
                x
            </OperationButton>
            <OperationButton onPress={() => {
                setCurrentOperation('-')
            }}>
                -
            </OperationButton>
            <OperationButton onPress={() => {
                setCurrentOperation('+')
            }}>
                +
            </OperationButton>
            <OperationButton onPress={() => {
                calculateResult()
            }}>
                =
            </OperationButton>
        </FlexContainer>
    );
}