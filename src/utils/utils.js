/*
 * @Author: porter_zhang
 * @Date: 2021-03-22 09:37:06
 * @LastEditTime: 2021-03-30 18:02:35
 */
/**
 * 获取url参数值
 * @method getUrlParam
 * @param { url key } 参数名
 * @return { url value } 参数值
 * @example
 *
 */
export const getUrlParam = (name) => {
  let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  let r = location.search.substr(1).match(reg);
  if (r != null) {
    try {
      r[2] = decodeURIComponent(r[2]);
    } catch (e) {}
    return r[2];
  }
  return null;
};

/**
 * 判断设备是PC端还是移动端
 * @method IsPC
 * @param { url key } 参数名
 * @return { url value } 参数值
 * @example
 *
 */
export const IsPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array(
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  );
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

/**
 * 是否显示vconsole
 * @method Vconsole
 * @param { url key } 参数名
 * @return { url value } 参数值
 * @example
 *
 */
export const Vconsole = () => {
  if (!IsPC() && process.env.ENV == 'dev') {
    import('vConsole').then((vConsole) => {
      new vConsole.default();
    });
  }
};
