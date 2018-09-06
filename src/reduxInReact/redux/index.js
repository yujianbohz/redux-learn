// 定义成常量，尽量避免使用魔法值
const HIRE = 'hireEmployee'
const FIRE = 'fireEmployee'

// 导出并且定义reducer
export function manageCompany(total = 1, action) {
  switch (action.type) {
    case HIRE:
      return total + 1;
    case FIRE:
      return total - 1;
    default:
      return 10;
  }
}

// type为HIRE的action
export function hire() {
  return {type : HIRE}
}
// type为FIRE的action
export function fire() {
  return {type : FIRE}
}