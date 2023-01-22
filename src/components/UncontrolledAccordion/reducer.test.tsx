import {reducer, StateType, TOGGLE} from "./reducer";
import {action} from "@storybook/addon-actions";


test("reducer test", ()=>{
    //data
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: TOGGLE})

    //expect
    expect(newState.collapsed).toBe(true)
})