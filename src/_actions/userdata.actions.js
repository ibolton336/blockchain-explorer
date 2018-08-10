import { userdataConstants} from '../_constants';
 
export const userdataActions= {
    update
};
 
function update(payload) {
    return { type: userdataConstants.UPDATE_DATA, payload};
}

 