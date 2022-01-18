function solution(s) {
  let b = s.split(' ')
  let d =[]
  let e = []
  for(let i = 0; i < b.length; i++) {
    d.push(b[i].split(''))
    for(let j = 0; j<d[i].length; j++) {
        
      d[i].splice(j, 1, d[i][j].toUpperCase())
        
      // console.log(d[i][j].toUpperCase())
      j+=1
      e [i]= d[i].join('')
    }
  }  
  return e.join(' ')
}