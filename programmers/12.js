function solution(s) {
    
  const splitS = s.split("")
  const abbreviation = (number) => {
      const answer = numeber;
      for(let i = number * 2; i< splitS.number - number * 2 + (number ===1? 1: 0); i++) {
          
      }
  } 
  for(let i = 1; i <= s.length/2 i ++) {
      for(let j = 0; j < i; j++) {
          if(splitS[j] !== splitS[j+i]) break
          if(j === i - 1) {
              
          }
          
      }
  }
 
  return answer;
}

function solution(skill, skill_trees) {
    const isTrue = (arr) => {
        if(skill.length === 1) return true
        let num = new Array(skill.length)
        num[0] = arr.indexOf(skill[0])
        if(num[0] === - 1) num[0] = arr.length
        console.log(num)
        
        for(let i = 1; i < skill.length; i++) {
             num[i] = arr.indexOf(skill[i])
             if(num[i] === - 1) num[i] = i + arr.length
             
             if(num[i - 1] > num[i]) {
                 break
                 return false
                 
             }
              if(i === skill.length - 1 ) return true
         }
         
    }
    
     return skill_trees.filter(x => isTrue(x)).length
 }
 function solution(d, budget) {
    var answer = 0;
    let i = 0
    const a = d.sort((a,b)=>(a-b))
    while( budget - a[i] >= 0 && i <= d.length) {
        budget -= a[i]
        answer += 1 
        i +=1
    }
    return answer
}