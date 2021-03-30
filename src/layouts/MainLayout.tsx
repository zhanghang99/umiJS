/*
 * @Author: your name
 * @Date: 2021-02-24 16:06:26
 * @LastEditTime: 2021-03-30 18:01:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\layouts\index.tsx
 */

import { Login, MockGet, MockPost } from '@/servers/service';

export default function (props) {
  Login();
  MockGet();
  MockPost();
  return <>{props.children}</>;
}
