import { userdataConstants} from '../_constants';
import { blockchainService} from '../_services/blockchain.service';
 
export const userdataActions= {
    // searchBlocks,
    // searchTransactions,
    getLatest 
};
 

function getLatest() {
    return dispatch => {
        dispatch(request());
        let payload
        blockchainService.getLatest(payload)
            .then(
                block=> dispatch(success(block.data)),
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error))
                }
            );
    };
 
    function request() { return { type:userdataConstants.GET_LATEST_REQUEST} }
    function success(block) { return { type: userdataConstants.GET_LATEST_SUCCESS, block} }
    function failure(error) { return { type: userdataConstants.GET_LATEST_ERROR, error } }
}
// function searchBlocks() {
//     return dispatch => {
//         dispatch(request());
//         let payload
//         blockchainService.getLatest(payload)
//             .then(
//                 block=> dispatch(success(block.data)),
//                 error => {
//                     dispatch(failure(error));
//                     dispatch(alertActions.error(error))
//                 }
//             );
//     };
 
//     function request() { return { type:userdataConstants.GET_LATEST_REQUEST} }
//     function success(block) { return { type: userdataConstants.GET_LATEST_SUCCESS, block} }
//     function failure(error) { return { type: userdataConstants.GET_LATEST_ERROR, error } }
// }
// function searchTransactions() {
//     return dispatch => {
//         dispatch(request());
//         let payload
//         blockchainService.getLatest(payload)
//             .then(
//                 block=> dispatch(success(block.data)),
//                 error => {
//                     dispatch(failure(error));
//                     dispatch(alertActions.error(error))
//                 }
//             );
//     };
 
//     function request() { return { type:userdataConstants.GET_LATEST_REQUEST} }
//     function success(block) { return { type: userdataConstants.GET_LATEST_SUCCESS, block} }
//     function failure(error) { return { type: userdataConstants.GET_LATEST_ERROR, error } }
// }
 