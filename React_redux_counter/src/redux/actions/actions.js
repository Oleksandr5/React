import {ADD, SUB, AddSomeNumber, SubSomeNumber, ADD2, SUB2} from './actionTypes'

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function addSomeNumber(number) {
    return {
        type: AddSomeNumber,
        payload: number
    }
}

export function subSomeNumber(number) {
    return {
        type: SubSomeNumber,
        payload: number
    }
}

export function add2(number) {
    return {
        type: ADD2,
        payload: number
    }
}

export function sub2(number) {
    return {
        type: SUB2,
        payload: number
    }
}

export function asyncAdd(number) {
    return dispatch => {
        setTimeout(() => {
            dispatch(addSomeNumber(number))
        }, 3000)
    }
}
