/*
 * @Author: your name
 * @Date: 2021-02-24 16:19:05
 * @LastEditTime: 2021-04-01 10:22:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\pages\c\c.tsx
 */
import { useModel } from 'umi';

export default function E() {
  const { user } = useModel('useAuthModel');
  return (
    <div>
      <h2>umi提供的插件@umijs/plugin-model：{user}</h2>
    </div>
  );
}
