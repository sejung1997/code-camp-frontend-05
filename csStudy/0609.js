function solution(priorities, location) {
  let print = [];
  let answer=0 
  let p = priorities.map((el,index) => [el,index])
  const setPrint = (el,index) => {
      if(index === location) answer = print.length + 1
      else print.push(el)
  }
  for(let index = 0; index <p.length; index++) {
    
      for(let i = index + 1; i<p.length; i++) {
          if(p[index][0] < p[i][0]) {
              p.push(p[index])
              break
          }
          else if(i ===p.length - 1) setPrint(...p[index])  
      } 
      if(index ===p.length - 1) setPrint(...p[index])  
  }
  return answer

 
}