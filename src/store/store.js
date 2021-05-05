import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ratesReducer from '../reducers/reducers';

const store = createStore(ratesReducer, composeWithDevTools());

export default store;