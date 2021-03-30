/*
 * @Author: porter_zhang
 * @Date: 2021-03-05 14:00:29
 * @LastEditTime: 2021-03-30 17:56:55
 */
import TopMenu from '../components/TopMenu/TopMenu';
import LeftMent from '../components/LeftMenu/LeftMenu';
import './index.less';
export default function (props) {
  return (
    <>
      <TopMenu />
      <div className="main-layout">
        <LeftMent />
        <h2>一级路由展示区----</h2>
        <div>
          <h3>二级路由布局区</h3>
          {props.children}
        </div>
      </div>
    </>
  );
}
