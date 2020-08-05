import { INCREASE, DECREASE } from '../actionTypes';

export default  {
    increase: () => ({ type: INCREASE}),
    decrease: () => ({ type: DECREASE})
};