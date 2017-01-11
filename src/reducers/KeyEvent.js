import { SHOOT } from '../actions'

export default function KeyEvent(state = [], action) {
    let config = {
        colorMode: 'dartslive'
    }

    let colorZone = {
        'a': [2, 3, 7, 8, 10, 12, 13, 14, 18, 20, 25],
        'b': [1, 4, 5, 6, 9, 11, 15, 16, 17, 19]
    }

    let dartsliveColor = {
        a: ['#000000', '#ff0000'],
        b: ['#ffffff', '#0000ff']
    }

    let grandboardColor = {
        a: ['#000000', '#ff0000'],
        b: ['#ffffff', '#00ff00']
    }

    let color = dartsliveColor;
    if(config.colorMode !== 'dartslive') {
        color = grandboardColor;
    }

    function getZone(point) {
        let isA = !colorZone.a.every((num) => {
            return num !== point
        });

        if(isA) {
            return 'a';
        } else {
            return 'b';
        }
    }

    function getColor(point, multiple) {
        if(point !== 'bull') {
            switch(multiple) {
                case 1:
                    return color[getZone(point)][0]
                default:
                    return color[getZone(point)][1]
            }
        } else {
            switch(multiple) {
                case 1:
                    return color[getZone(point)][1]
                default:
                    return color[getZone(point)][0]
            }
        }
    }

    switch(action.type) {
        case SHOOT:
            return [
                ...state,
                {
                    point: action.point,
                    multiple: action.multiple,
                    color: getColor(action.point, action.multiple),
                    sum: action.point * action.multiple
                }
            ]
        default:
            return state
    }
}
