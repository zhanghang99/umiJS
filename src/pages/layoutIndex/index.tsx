/*
 * @Author: your name
 * @Date: 2021-02-24 10:59:58
 * @LastEditTime: 2021-02-24 15:53:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\pages\layoutIndex\index.tsx
 */
import styles from './index.less';
// import LeftMenu from './components/LeftMenu/index'

export default function IndexPage(props) {
  return (
    <div>
        <h1 className={styles.title}>Page index</h1>
        <div style={{ padding: 20 }}>{ props.children }</div>
    </div>
  );
}
