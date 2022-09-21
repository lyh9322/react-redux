//  export function addAction(num){
//     return {
//         type:'ADD_NUMBER',
//         num:num
//     }
//  }

// export const addAction = (num) => {
//   return {
//     type: "ADD_NUMBER",
//     num,
//   };
// };

import { ADD_NUMBER, SUB_NUMBER } from "./constant.js";

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});
