/*
 * @Author: your name
 * @Date: 2021-02-24 17:17:49
 * @LastEditTime: 2021-03-05 10:51:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\models\hero.tsx
 */
import { Effect, Reducer } from 'umi';

export interface HeroModelState {
  name: string;
}

export interface HeroModelType {
  namespace: 'hero';
  state: HeroModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<HeroModelState>;
  };
}

const HeroModel: HeroModelType = {
  namespace: 'hero',

  state: {
    name: 'hero123',
  },

  // 有副作用的时候使用effects来触发reducers修改state
  effects: {
    *query({ payload }, { call, put }) {
    },
  },
  // 无副作用的时候直接使用effects来触发reducers修改state
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default HeroModel;