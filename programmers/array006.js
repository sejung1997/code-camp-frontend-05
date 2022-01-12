//1
let fruits = ["사과", "바나나"]
function delicious(item) {
  return ["맜있는", item].join("")
}
fruits = fruits.map(delicious) 

fruits[0] = "맛있는 " + fruits[0]
fruits[1] = "맛있는 " + fruits[1]

//2
const number = "01012345678"

function phoneNum(array) {
const arr = []
arr[0] = array.slice(0,3) 
arr[1] = array.slice(3,7)
arr[2] = array.slice(7,11)
return arr
}
phoneNum(number)


let arr = []
arr.push(number.slice(0,3))
arr.push(number.slice(3,7))
arr.push(number.slice(7,11))


let arr = [number.slice(0,3), number.slice(3,7), number.slice(7,11)]

//3
const student = {
	name: "철수",
	age: 8,
  school: {}
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이"
};
const student.school = school <x>
//객체 안에 이름 할달할때 선언 안해도 됨
student.school = school
student['school'] = school