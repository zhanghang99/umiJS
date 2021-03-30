/*
 * @Author: your name
 * @Date: 2021-02-24 16:19:01
 * @LastEditTime: 2021-03-30 15:19:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\pages\a\a.tsx
 */
import { useReducer } from 'react';
import { connect } from 'umi';
import { defaultState, reducer } from '@/models/hookUseReducer';
import { Ctx } from '@/models/createContext';
import D from '@/pages/d/d';

const A = (props) => {
  // 两种状态管理方式
  // 第三方库状态管理redux
  setTimeout(() => {
    props.dispatch({
      type: 'hero/save',
      payload: { name: '第三方库状态管理redux' },
    });
  }, 5000);
  // hooks的状态管理useReducer
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <div>
      <h2>{props.hero.name}</h2>
      <hr />
      <Ctx.Provider value={{ state, dispatch }}>
        <D />
      </Ctx.Provider>
      <button
        onClick={() =>
          dispatch({ ...state, type: 'SET_ISSHOW', conuste: state.conuste + 1 })
        }
      >
        点就完了
      </button>
    </div>
  );
};
export default connect(({ hero }) => ({ hero }))(A);
