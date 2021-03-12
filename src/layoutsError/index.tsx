/*
 * @Author: your name
 * @Date: 2021-02-24 16:06:26
 * @LastEditTime: 2021-03-05 11:08:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\layouts\index.tsx
 */
import './index.less';

export default function(props) {
    
    return (
      <>
        <div className="error">
            { props.children }
            </div>
      </>
    );
  }