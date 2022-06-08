function solution (n) {
    let HnW = Array.from({length: 27}, () => Array(9).fill(0))
    for(let i = 0; i <9; i++ ){
       for(let j = 0; j <9; j++ ){
           HnW[i][n[i][j]-1] = 1
           HnW[9+j][n[i][j]-1] = 1 
           let a = Math.floor(i/3) 
           let b = Math.floor(j/3)
           HnW[18 + a*3 +b][n[i][j]-1] = 1
       }    
    }
    return console.log(HnW.filter((el) => el.includes(0)).length >0? 'NO' : 'YES')
        
}
solution([[1,4,3,6,2,8,5,7,9],[5,7,2,1,3,9,4,6,8],[9,8,6,7,5,4,2,3,1],[3,9,1,5,4,2,7,8,6],[4,6,8,9,1,7,3,5,2],[7,2,5,8,6,3,9,1,4],[2,3,7,4,8,1,6,9,5],[6,1,9,2,7,5,8,4,3],[8,5,4,3,9,6,1,2,7]])

function solution (n) {
  let answer = 0
  for(let i = 0; i<7; i++) {
      if(n[i][4] === n[i][0] && n[i][3] === n[i][1])  answer++
      if(n[i][5] === n[i][1] && n[i][4] === n[i][2])  answer++
      if(n[i][6] === n[i][2] && n[i][5] === n[i][3])  answer++
      if(n[4][i] === n[0][i] && n[3][i] === n[1][i])  answer++
      if(n[5][i] === n[1][i] && n[4][i] === n[2][i])  answer++
      if(n[6][i] === n[2][i] && n[5][i] === n[3][i])  answer++
      
  }
  console.log(answer)
}
solution([[2, 4, 1, 5, 3, 2, 6], [3, 5, 1, 8, 7, 1, 7], [8, 3, 2, 7, 1, 3, 8], [6, 1, 2, 3, 2, 1, 1], [1, 3, 1, 3, 5, 3, 2], [1, 1, 2, 5, 6, 5, 2], [1, 2, 2, 2, 2, 1, 5]
])