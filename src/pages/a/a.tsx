/*
 * @Author: your name
 * @Date: 2021-02-24 16:19:01
 * @LastEditTime: 2021-03-12 17:59:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\pages\a\a.tsx
 */
import React, { useReducer,createContext } from "react";
import { connect, HeroModelState, ConnectProps } from 'umi';
import { defaultState, reducer  } from '@/models/hookUseReducer';
import D from '@/pages/d/d';

interface PageProps extends ConnectProps {
    hero: HeroModelState;
}
//可以抽离出去
export const Ctx = createContext();

const A = (props) =>{
    // 两种状态管理方式
    // 第三方库状态管理redux
    setTimeout(()=>{
        props.dispatch({
            type:'hero/save',
            payload:{name:'第三方库状态管理redux'}
        })
    },5000)
    // hooks的状态管理useReducer
    const [state, dispatch] = useReducer(reducer, defaultState)
    return (
        <div>
            <h2>{props.hero.name}</h2>
            <hr />
            {/* <h1>useReducer: countInfo {JSON.stringify(countInfo)}</h1> */}
            <Ctx.Provider value={{state,dispatch}}>
                <D/>
            </Ctx.Provider>
            <button onClick={() => dispatch({ ...state,type: "SET_ISSHOW", conuste: state.conuste+1 })}>点就完了</button>
        </div>
    );
}
export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(A);