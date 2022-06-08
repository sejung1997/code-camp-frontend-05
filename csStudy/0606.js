function solution (N,K) {
 
    let arr=[1]
    for(let i = 2; i<= N/2; i++) {
        if(N % i === 0) {
            arr.push(i)
        }   
    }
    arr.push(N)
    return console.log(arr[K - 1]? arr[K-1]: -1)
}

solution(100,8)


function solution (n,s,e,k) {
    // const order = n.slice(s,2)
    return console.log(n.slice(s -1,e).sort((a,b) => a-b)[k-1])

}
solution([2,4,1,5,0,6],2,5,3)

function solution (n,k) {
    const a = n.sort((a,b) => b -a)
    let index = k
    let max = 0
    for(let i = 0; i<a.length; i++) {
        for(let j = i+1; j<a.length; j++) {
            for(let y = j+1; y<a.length; y++) {
                if(index === 0) break
                if(max !==a[i]+a[j]+a[y]) {
                    max = a[i]+a[j]+a[y]
                    index--
                }
            }
        }
    }
    console.log(max)
}
solution([13, 15,15, 34, 23, 45, 65, 33, 11, 26, 42],3)

function solution (n,a) {
  let answer = []
  let all = 0
  a.forEach((el) => {
      all+=el
  })

  all = Math.round(all/n)
  let minD = Math.abs(a[0] - all)
  
  for(let i = 1; i<a.length; i++) {
    const D = Math.abs(a[i] - all)
    if(minD >D || (minD ===D && answer[0] < a[i])) {
        minD = D
        answer = [a[i],i +1]
       
    }
  }
 console.log(answer)



}
solution(10,[45, 73, 66, 87, 92, 67, 75, 79, 75, 80])


function solution (n,m) {
    let  firstEnd,endFirst
    let answer = []
    if(n > m) {
       firstEnd = n + 1
       endFirst = m + 1
    }
    else {
       firstEnd = m + 1
       endFirst = n + 1
    }
    for(let i = endFirst; i <= firstEnd; i++) {
        answer.push(i)
    } 
    console.log(...answer)
}   
solution(4,6)

function  solution(n){
    const digit_sum = (x) =>{
        const str= String(x)
        let num=0
        for(let i = 0; i< str.length; i++) {
            num += Number(str[i])
        }
        return num
    }
    console.log(n.map((el) => digit_sum(el)))

solution([125, 15232, 97])

function isPrime(n) {
    let arr = [2]
    for(let i = 3; i<=n; i++) {
        for(let j =0; j <arr.length; j++) {
            if(i % arr[j] ===0) break
            if(j === arr.length - 1) {
                arr.push(i)
            }
        }
    }
    console.log(arr)
}
isPrime(200000)

function solution (n) {
    const reverse = (x) => {
        return Number(String(x).split("").reverse().join(""))
    }
    function isPrime(n) {
    let arr = [2]
    for(let i = 3; i<=n; i++) {
        for(let j =0; j <arr.length; j++) {
            if(i % arr[j] ===0) break
            if(j === arr.length - 1) {
                arr.push(i)
            }
        }
    }

    return arr
}
    
    const reversed = n.map((el) => reverse(el))
    const primeArr = isPrime(Math.max(...reversed))

    // .fillter((el) => primeArr.includes(el))
    
    console.log(reversed)
    console.log(primeArr)
     console.log(...reversed.filter((el) => primeArr.includes(el)))
 }
solution([32, 55, 62, 3700, 250])

function solution (n) {
    const point = (nums) => {
        if(nums[0] === nums[1] && nums[0] ===nums[2] && nums[2] === nums[1]) {
               return 10000 + nums[0] * 1000 
        }
        else if(nums[0] === nums[1]) return 1000 + nums[0] * 100
        else if(nums[0] === nums[2]) return 1000 + nums[0] * 100
        else if(nums[2] === nums[1]) return 1000 + nums[2] * 100
        else return Math.max(...nums) * 100
    }
    const answer = n.map((el) => point(el))
    console.log(Math.max(...answer))
    
 }

solution([[3, 3, 6],[2, 2, 2],[6, 2, 5]])

function solution (n) {
    let point = 0, allPoint = 0
    n.forEach((el) => {
        if(el) {
            point++ 
            allPoint +=point 
        }
        else {
            point = 0
        }
    })
    console.log(allPoint)
}
solution ([1, 1, 1, 1, 1, 1, 1, 1, 1, 0])