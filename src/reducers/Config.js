import { CHANGE_PAGE, PLAY } from '../actions'

export default function KeyCode(state = {
    playerList: [{
        name: 'Ray'
    }],
    theme: 'dartslive', // dartslive, grandbaord
    scroingMethod: 'soft', // soft, steel
    page: 'Start',
    game: undefined, // 01, cricket, countup,
    gameConf: undefined
}, action) {
    switch(action.type) {
        case CHANGE_PAGE:
            return Object.assign({}, state, {
                page: action.page
            });
        case PLAY:
            return Object.assign({}, state, {
                game: action.game,
                gameConf: action.gameConf
            });
        default:
            return state
    }
}
