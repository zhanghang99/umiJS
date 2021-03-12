/*
 * @Author: your name
 * @Date: 2021-02-24 16:19:01
 * @LastEditTime: 2021-03-05 15:03:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\pages\a\a.tsx
 */
import { connect, HeroModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
    hero: HeroModelState;
}
const A = (props) =>{
    setTimeout(()=>{
        props.dispatch({
            type:'hero/save',
            payload:{name:'用redux换的名字'}
        })
    },5000)
return (
    <div>
        <h2>This is {props.hero.name}</h2>
    </div>
);
}
export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(A);