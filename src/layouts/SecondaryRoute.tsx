/*
 * @Author: porter_zhang
 * @Date: 2021-03-05 14:00:29
 * @LastEditTime: 2021-03-22 10:50:22
 */
export default function (props) {
  return (
    <>
      <h2>一级路由展示区----</h2>
      <div>
        <h3>二级路由布局区</h3>
        {props.children}
      </div>
    </>
  );
}
