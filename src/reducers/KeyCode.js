import { SET_KEY_CODE, RESET_KEY_CODE } from '../actions'

const keyCode = '{"_1SI":64,"_1SO":105,"_1T":61,"_1D":90,"_2SI":50,"_2T":48,"_2SO":44,"_2D":91,"_3SI":65,"_3T":97,"_3SO":72,"_3D":78,"_4SI":60,"_4T":75,"_4SO":89,"_4D":47,"_5SI":102,"_5T":59,"_5SO":54,"_5D":103,"_6SI":40,"_6T":81,"_6SO":100,"_6D":69,"_7SI":108,"_7T":51,"_7SO":53,"_7D":80,"_8SI":42,"_8T":37,"_8SO":67,"_8D":52,"_9SI":39,"_9T":38,"_9SO":71,"_9D":110,"_10SI":88,"_10T":86,"_10SO":46,"_10D":76,"_11SI":99,"_11T":114,"_11SO":45,"_11D":63,"_12SI":112,"_12T":55,"_12SO":79,"_12D":111,"_13SI":33,"_13T":113,"_13SO":95,"_13D":57,"_14SI":116,"_14T":93,"_14SO":106,"_14D":83,"_15SI":58,"_15T":92,"_15SO":36,"_15D":74,"_16SI":70,"_16T":62,"_16SO":68,"_16D":84,"_17SI":77,"_17T":49,"_17SO":94,"_17D":104,"_18SI":34,"_18T":43,"_18SO":56,"_18D":35,"_19SI":101,"_19T":66,"_19SO":85,"_19D":107,"_20SI":115,"_20T":98,"_20SO":87,"_20D":73,"_bullS":82,"_bullD":109}';

export default function KeyCode(state = JSON.parse(keyCode), action) {
    switch(action.type) {
        case SET_KEY_CODE:
            let obj = {}
            obj[action.key] = action.code
            return Object.assign({}, state, obj)
        case RESET_KEY_CODE:
            return JSON.parse(keyCode)
        default:
            return state
    }
}
