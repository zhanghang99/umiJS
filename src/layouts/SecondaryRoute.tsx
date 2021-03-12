/*
 * @Author: porter_zhang
 * @Date: 2021-03-05 14:00:29
 * @LastEditTime: 2021-03-05 14:31:15
 */
import TopMenu from '../components/TopMenu/TopMenu';
import LeftMent from '../components/LeftMenu/LeftMenu';

export default function(props) {
    console.log(props,'---props1---');
    return (
      <>
        <h2>一级路由展示区----</h2>
        <div>
            <h3>二级路由布局区</h3>
            { props.children }
        </div>
      </>
    );
  }