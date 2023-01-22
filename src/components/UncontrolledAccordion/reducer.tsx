
export type ActionType = {
    type: string

}
export type StateType = {
    collapsed: boolean
}
export const TOGGLE = "TOGGLE"

export const reducer = (state:StateType, action: ActionType):StateType => {
    if(action.type == TOGGLE){
        return {...state, collapsed: !state.collapsed}
    }

    return state
}
