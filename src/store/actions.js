

export const fetchData = () => {
    return dispatch => {
        return fetch('../data.json')
                //.then( res => res.json())
                .then( resJson => {
                    console.log(resJson);
                    dispatch(setData(resJson));
                }).catch( err => {
                    console.log(err);
                })
    };
};

export const setData = (res_data) => {
    return {
        type: 'setData',
        data: res_data
    }
}