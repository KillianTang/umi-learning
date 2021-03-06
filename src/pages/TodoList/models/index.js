import { fetchTodoList } from "../services";

export default {
  namespace: "todoList",
  state: {
    data: []
  },
  effects: {
    fetchTodoList: function*({ payload }, { call, put }) {
      const res = yield call(fetchTodoList, payload);

      const { data = [] } = res;

      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Time out");
        }, 1000);
      });

      yield put({ type: "setTodoList", payload: { data } });

      return res;
    }
  },
  reducers: {
    setTodoList: function(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
