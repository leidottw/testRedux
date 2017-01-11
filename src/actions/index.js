/**
 * action types
 */

export const SET_KEY_CODE = 'SET_KEY_CODE'

/**
 * action creators
 */

export function setKeyCode(key, code) {
    return {
        type: SET_KEY_CODE,
        key,
        code
    }
}
