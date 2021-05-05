import types from '../types';

const addRates = ({ author, comment, rate}) => ({
    type: types.ADD_RATES,
    payload: {
        author,
        comment,
        rate,
        id: Math.floor(Math.random()*1111)
    }
})

const editRates = ({ author, comment, rate, id}) => ({
    type: types.EDIT_RATES,
    payload: {
        author,
        comment,
        rate,
        id
    }
})

const deleteRates = id => ({
    type: types.DELETE_RATES,
    payload: {
        id
    }
})

export default {
    addRates,
    editRates,
    deleteRates
}