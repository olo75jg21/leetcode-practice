/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let result = -Infinity;

  for (const customer of accounts) {
    const sum = customer.reduce((acc, wealth) => acc + wealth, 0);
    if (sum > result) {
      result = sum;
    }
  }

  return result;
};

maximumWealth([[1, 2, 3], [3, 2, 1]])

// Better solution:

// /**
//  * @param {number[][]} accounts
//  * @return {number}
//  */
// var maximumWealth = function(accounts) {
//   arr=[]
//   for(let i=0;i<accounts.length;i++){
//       arr.push(accounts[i].reduce((acc,cur)=> acc+cur,0))
//   }
//   max = Math.max(...arr)
//   return max
// };