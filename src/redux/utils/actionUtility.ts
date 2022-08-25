import {eventTypes} from '../events/index';


export const makeBaseAction = <T extends eventTypes>(type: T) => () => {
    return {type}
};

export const makeResultAction = <T extends eventTypes, P>(type: T) => (payload: P) => {
    return {
        type,
        payload
    }
}

export const makeAction = <T extends eventTypes, P>(type: T) => (payload: P) => {
    return {
        type,
        payload
    }
}

interface IStringMap<T>{
    [key: string]: T
}

type IAnyFunction = (...args: any[]) => any;

export type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>