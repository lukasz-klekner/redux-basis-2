import types from '../types';

const ratesReducer = (state=[], action) => {
    switch(action.type){
        case types.ADD_RATES:
            return [
                ...state,
                action.payload
            ]

        case types.EDIT_RATES:
            return state.map(currentRate => {
                if(currentRate.id !== action.payload.id){
                    return currentRate
                }

                const { author, comment, rate } = action.payload;

                return ({
                    id: currentRate.id,
                    author,
                    comment,
                    rate
                })
            })

        case types.DELETE_RATES:
            return state.filter(rates => rates.id !== action.payload.id)


        default:
            return state;
    }
}

export default ratesReducer;