import types from '../types';

const INITIAL_STATE = [
    {
        author: 'Lukasz Klekner',
        comment: 'Lubie Twoje ksiazki!',
        rate: 5,
        id: 1,
    },
    {
        author: 'Mateusz',
        comment: 'Lubie Twoje ksiazki!',
        rate: 5,
        id: 2,
    },
]

const ratesReducer = (state = INITIAL_STATE, action) => {
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
            return [
                ...state
            ];
    }
}

export default ratesReducer;