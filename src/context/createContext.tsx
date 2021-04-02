/*
 * @Author: porter_zhang
 * @Date: 2021-03-30 14:56:56
 * @LastEditTime: 2021-03-30 15:01:43
 */
// 集中创建createContext供共享Reducer
import { createContext } from 'react';

const Ctx = createContext();

export { Ctx };
