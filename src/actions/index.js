/**
 * action types
 */

// reducer: KeyCode
export const SET_KEY_CODE = 'SET_KEY_CODE'
export const RESET_KEY_CODE = 'RESET_KEY_CODE'

// reducer: KeyEvent
export const SHOOT = 'SHOOT'

// reducer: Config
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const PLAY = 'PLAY'

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

export function resetKeyCode() {
    return {
        type: RESET_KEY_CODE
    }
}

export function shoot(point, multiple) {
    return {
        type: SHOOT,
        point,
        multiple
    }
}

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page
    }
}

export function play01(type, inOption, outOption) {
    return {
        type: PLAY,
        game: '01',
        gameConf: {
            type: type,
            inOption: inOption,
            outOption: outOption
        }
    }
}

export function playCri(type) {
    return {
        type: PLAY,
        game: 'cricket',
        gameConf: {
            type: 'STANDARD'
        }
    }
}

export function clearPlay() {
    return {
        type: PLAY,
        game: undefined,
        gameConf: undefined
    }
}
