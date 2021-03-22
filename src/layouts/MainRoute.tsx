/*
 * @Author: your name
 * @Date: 2021-02-24 16:06:26
 * @LastEditTime: 2021-03-22 15:54:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\layouts\index.tsx
 */

import { Login, MockGet, MockPost } from '@/servers/service';
import { Vconsole } from '../utils/utils';
import TopMenu from '../components/TopMenu/TopMenu';
import LeftMent from '../components/LeftMenu/LeftMenu';
import './index.less';

// 是否显示vconsole
Vconsole();

export default function (props) {
  Login();
  MockGet();
  MockPost();
  return (
    <>
      {/* 页面整体布局区 */}
      <TopMenu />
      <div className="main-layout">
        <LeftMent />
        {/* 一级路由布局区 */}
        {props.children}
      </div>
    </>
  );
}
