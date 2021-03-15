/*
 * @Author: porter_zhang
 * @Date: 2021-03-12 17:09:06
 * @LastEditTime: 2021-03-12 17:58:21
 */
const defaultState = {

  conuste: 0
}

const reducer = (state = defaultState, action: { type: any; conuste: any; }) => {
  switch (action.type) {
    case 'SET_ISSHOW':
      return {
        ...state,
        conuste: action.conuste
      }

    default:
      return state
  }
}

export {
  defaultState, reducer
}