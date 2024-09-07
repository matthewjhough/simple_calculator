// @ts-ignore
import React, { createContext, useContext, useReducer } from 'react';
import {CALCULATOR_ACTIONS} from "../constants/CalculatorActions";
// @ts-ignore
import type { PropsWithChildren, ReactElement } from 'react';
const CalculatorContext = createContext({});

export type CalculatorState = {
    result: number;
    evalStr: string;
    currentVariable: number;
    operation: string | undefined;
}

const initialState: CalculatorState = {
    result: 0,
    evalStr: "",
    currentVariable: 0,
    operation: undefined
};

const calculatorReducer = (
   state: CalculatorState,
   action: {
        type: any;
        payload: any;
}) => {
    const currVar = state.currentVariable === 0 ? '' : state.currentVariable;

    switch (action.type) {
        case CALCULATOR_ACTIONS.CLEAR_CALCULATOR:
            return initialState;
        case CALCULATOR_ACTIONS.ADD_VARIABLE:
            return {
                ...state,
                evalStr: state.evalStr + action.payload
            };
        case CALCULATOR_ACTIONS.SET_OPERATION:
            return {
                ...state,
                evalStr:  state.evalStr + currVar + action.payload,
                currentVariable: 0,
                operation: action.payload
            }
        case CALCULATOR_ACTIONS.CALCULATE_RESULT:
            const updatedEvalStr = state.evalStr + currVar;
            return {
                ...state,
                evalStr: updatedEvalStr,
                result: eval(updatedEvalStr),
                currentVariable: 0
            };
        case CALCULATOR_ACTIONS.SET_CURRENT_VARIABLE:
            return {
                ...state,
                currentVariable: parseInt(`${state.currentVariable}` + `${action.payload}`)
            };
        default:
            return state;
    }
};

export type CalculatorProviderProps = PropsWithChildren<{
    children: ReactElement;
}>

export const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);
    const actions = {state, dispatch}

    return (
        <CalculatorContext.Provider value={actions}>
            {children}
        </CalculatorContext.Provider>
    );
};

export const useCalculatorContext = () => useContext(CalculatorContext);