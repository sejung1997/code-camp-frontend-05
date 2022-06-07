// function solution (n) {

//     const check = (el) => {
//         const strArr = el.toLowerCase()
//         let result = 'YES'
//         for(let i =1; i <= strArr.length /2; i++) {
//             if(strArr[i-1] !== strArr[strArr.length-i]) result = 'NO'
//         }
//         return result
//     }
//     const answer = n.map((el) => {
//         return check(el)
//     })
//     console.log(answer)

// }

// solution(['5', 'level','moon','abcba','soon','gooG'])

// function solution (s) {
//     console.log(s.split(""))
//     const d = Number(s.split("").filter((el) => !isNaN(el)).join(""))
//     let num = 1
//     for(let i =2; i<=d/2; i++) {
//         if(d % num === 0) num++
//     }
//     console.log(d,num * 2)
// }

// solution('g0en2Ts8eSoft')

// function solution (a) {
//     let state = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//     const setState = (nextArr) => {
//         const former = state.slice(0,nextArr[0] -1)
//         const latter = state.slice(nextArr[1])
//         const middle = state.slice(nextArr[0]-1,nextArr[1]).reverse()

//         state = [...former,...middle,...latter]

//     }

//    for(let i = 0; i < a.length; i++) {
//       setState(a[i])
//    }
//      console.log(state)

// }
// solution([[5, 10],[9, 13],[1, 2],[3, 4],[5, 6],[1, 2],[3, 4],[5, 6],[1, 20],[1, 20]])

// function solution(arr1,arr2) {
//     let nw = [...arr1,...arr2]
//         .sort((a,b) => a-b)
//     console.log(nw)
// }
// solution([1, 3, 5],[2, 3, 6, 7, 9])

// function solution(n,m) {
//     const plus = (i) => {
//         let all = n[i]

//         while(all<=m) {
//             if(all === m) return true
//             else {
//                 i++
//                 all +=n[i]
//             }
//         }

//     }
//     console.log(n.filter((_,index) => plus(index)).length)

// }
// solution([1, 2, 1, 3, 1, 1, 1, 2],3)

// function solution (n) {
//     let w = [0,0,0,0,0]
//     let h = [0,0,0,0,0]
//     let c = [0,0]
//     for(let i = 0; i <5; i++) {
//         c[0] += n[i][i]
//         c[1] += n[4-i][4-i]
//         for(let j =0; j <5; j++) {
//              w[i] += n[i][j]
//              h[j] += n[i][j]

//         }
//     }
//     console.log(Math.max(...w,...h,...c))
// }
// solution([[10, 13, 10, 12, 15],[12 ,39 ,30 ,23 ,11],[11 ,25 ,50 ,53 ,15],[19 ,27 ,29 ,37 ,27],[19 ,13 ,30 ,13 ,19]])

// function solution(n) {
//     const L = n.length;
//     let answer = 0;
//     for(let i = 0; i < L/2; i++) {
//         for(let j = i; j <=L -i -1; j++) {
//                if(i === 0) answer += n[(L-1)/2][j]
//                else  {
//                    answer += n[(L-1)/2 + i][j]
//                    answer += n[(L-1)/2 - i][j]
//                }
//         }
//     }
//     console.log(answer)
// }
// solution([[10, 13, 10, 12, 15],[12 ,39 ,30 ,23 ,11],[11 ,25 ,50 ,53 ,15],[19 ,27 ,29 ,37 ,27],[19 ,13 ,30 ,13 ,19]])

// function solution (n,m) {
//     const L = n.length;
//     let answer = 0;
//     const change = (x,right,q) => {
//         let temp=[]
//         for(let i = 0; i<L; i++) {
//             let index = 0
//             if(right) {
//             index = (i + q) % L
//             temp[index] = n[x-1][i]
//             }
//             else {
//             index = i - q >=0? i -q : i -q + L
//             temp[index] = n[x-1][i]
//             }
//         }
//         n[x-1] = temp
//     }
//     m.forEach((el) => change(...el))
//     console.log(n)

//     for(let i = 0; i < L/2; i++) {
//         for(let j = i; j <=L -i -1; j++) {
//                if(i === (L-1)/2) answer += n[i][i]
//                else  {
//                    answer += n[i][j]
//                    answer += n[L-1-i][j]
//                }
//         }
//     }
//     console.log(answer)

// }

// solution([[10, 13, 10, 12, 15],[12, 39, 30, 23, 11],[11, 25, 50, 53, 15],[19, 27, 29, 37, 27],[19, 13, 30, 13, 19]],[[2, 0, 3],[5, 1, 2],[3, 1, 4]])

function solution(n) {
  let answer = 0;
  let ab = [];
  const check = (x, y) => {
    const obj = n[x][y];

    let valid = true;
    const move = [-1, 1];
    for (let i of move) {
      for (let j of move) {
        if (
          x + i < 0 ||
          x + i > n.length - 1 ||
          y + j < 0 ||
          y + j > n.length - 1
        )
          continue;
        console.log(obj, x + i, y + j);
        if (obj > n[x + i][y]) {
          ab.push([x + i, y]);
        } else valid = false;
        if (obj > n[x][y + i]) {
          ab.push([x, y + i]);
        } else valid = false;
      }
    }
    return valid;
  };
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      console.log(ab);
      console.log(ab.includes([i, j]), [i, j]);
      if (ab.includes([i, j])) continue;
      else if (check(i, j)) answer++;
    }
  }
  console.log(answer);
}
solution([
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]);
