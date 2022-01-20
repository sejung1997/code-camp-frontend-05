export default function typecriptPage() {



  //타입추론
  let aaa = '안녕하세요'
  // aaa = 3

  //문자타입
  let bbb: String;
  // bbb = 123
  bbb = '반갑습니다'

  //숫자타입
  let ccc = 5
  ccc = 8
  // ccc = 'ddsd'

  //불린타입
  let ddd: boolean
  ddd = true

  //배열타입
  // let eee: number[] = [1,2,3,4,5,'d']
  let fff: String[] = ['d','d',]
  let ggg: (String | number) [] = [1,2,3,4,'d','x']
  let hhh: String[] | number[] = ["z",'3','6']

  hhh = ["2",'5']
  

  //객체타입
  interface IProfile {
    name: String
    age: number | String
    school: String
  }
  const profile = {
    name: '철',
    age: ['9',2],
    school: 'd'
  }

  return (
    <div>
      타입스크립트 연습
    </div>
  )
}


