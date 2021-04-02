/*
 * @Author: your name
 * @Date: 2021-02-24 16:19:05
 * @LastEditTime: 2021-03-31 10:33:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\pages\c\c.tsx
 */
import { useContext } from 'react';
import { Ctx } from '@/context/createContext';

export default function D() {
  const {
    state: { conuste },
  } = useContext(Ctx);
  return (
    <div>
      <h2>hooks的状态管理useReducer搭配useContext：{conuste}</h2>
    </div>
  );
}
