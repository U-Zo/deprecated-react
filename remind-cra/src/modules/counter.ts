export const INCREASE_COUNT = 'counter/INCREASE_COUNT';
export const DECREASE_COUNT = 'counter/DECREASE_COUNT';

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

export interface CounterState {
  count: number;
}

type CounterAction =
  | ReturnType<typeof increaseCount>
  | ReturnType<typeof decreaseCount>;

const initialState: CounterState = {
  count: 0,
};

const reducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
