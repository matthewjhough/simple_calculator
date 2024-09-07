import {useCalculatorContext} from "./useCalculatorContext"
import {CALCULATOR_ACTIONS} from "../constants/CalculatorActions";

export function useCalculatorActions() {
    const {state, dispatch} = useCalculatorContext();

    // TODO: ADD PROPER TYPES FOR FUNCTION RETURNS
    const addVariable = (n: number) => dispatch({
        type: CALCULATOR_ACTIONS.ADD_VARIABLE,
        payload: n
    });

    const setCurrentVariable = (n: number) => dispatch({
        type: CALCULATOR_ACTIONS.SET_CURRENT_VARIABLE,
        payload: n,
    });

    const setCurrentOperation = (o: string) => dispatch({
        type: CALCULATOR_ACTIONS.SET_OPERATION,
        payload: o,
    });

    const calculateResult = () => dispatch({
        type: CALCULATOR_ACTIONS.CALCULATE_RESULT,
    })

    const clearCalculator = () => dispatch({
        type: CALCULATOR_ACTIONS.CLEAR_CALCULATOR
    });


    return {
        addVariable,
        clearCalculator,
        setCurrentVariable,
        setCurrentOperation,
        calculateResult,
        state
    };
}