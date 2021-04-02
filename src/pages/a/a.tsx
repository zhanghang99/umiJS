/*
 * @Author: your name
 * @Date: 2021-02-24 16:19:01
 * @LastEditTime: 2021-03-31 10:31:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\pages\a\a.tsx
 */
import { useReducer } from 'react';
import { connect, useModel } from 'umi';
import { defaultState, reducer } from '@/models/hookUseReducer';
import { Ctx } from '@/context/createContext';
import D from '@/pages/d/d';
import E from '@/pages/e/e';

const A = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const { signout, signin } = useModel('useAuthModel', (model) => ({
    signin: model.signin,
    signout: model.signout,
  }));
  return (
    <div>
      <br />
      <h2>三种状态管理：</h2>
      <br />
      <h2>一，</h2>
      <h2>{props.hero.name}</h2>
      <button
        onClick={() =>
          props.dispatch({
            type: 'hero/save',
            payload: { name: '第三方库状态管理redux' },
          })
        }
      >
        点就完了
      </button>
      <br />
      <br />
      <h2>二，</h2>
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
      <br />
      <br />
      <h2>三，</h2>
      <E />
      <button onClick={() => signin('张航')}>登录</button>
      ----
      <button onClick={() => signout('登录')}>登出</button>
      <br />
      <br />
      class组件推荐redux,函数式组件推荐@umijs/plugin-model
    </div>
  );
};
export default connect(({ hero }) => ({ hero }))(A);
