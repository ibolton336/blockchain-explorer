import { userdataConstants} from '../_constants';
import { blockchainService} from '../_services/blockchain.service';
 
export const userdataActions= {
    searchBlocks,
    searchTransactions,
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
function searchBlocks(searchText) {
    return dispatch => {
        dispatch(request());
        blockchainService.searchBlocks(searchText)
            .then(
                block=> dispatch(success(block.data)),
                error => {
                    dispatch(failure(error));
                }
            );
    };
 
    function request() { return { type:userdataConstants.SEARCH_BLOCKS_REQUEST} }
    function success(block) { return { type: userdataConstants.SEARCH_BLOCKS_SUCCESS, block} }
    function failure(error) { return { type: userdataConstants.SEARCH_BLOCKS_ERROR, error } }
}
function searchTransactions(searchText) {
    return dispatch => {
        dispatch(request());
        blockchainService.searchTransactions(searchText)
            .then(
                transaction=> dispatch(success(transaction.data)),
                error => {
                    dispatch(failure(error));
                }
            );
    };
 
    function request() { return { type:userdataConstants.SEARCH_TRANSACTIONS_REQUEST} }
    function success(transaction) { return { type: userdataConstants.SEARCH_TRANSACTIONS_SUCCESS, transaction} }
    function failure(error) { return { type: userdataConstants.SEARCH_TRANSACTIONS_ERROR, error } }
}
 