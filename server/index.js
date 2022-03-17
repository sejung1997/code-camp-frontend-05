const express = require("express")
const app = express()
const http = require("http")
const cors = require("cors")
const { Server } = require("socket.io")
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
   cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
   }
})

io.on("connection", (socket)=>{
   console.log(`유저가 연결되었습니다: ${socket.id}`)

   socket.on("join_room", (data) => {
      socket.join(data) // emit으로 넘긴 join_room의 room
      console.log(`유저 ID : ${socket.id} 접속 채팅방 : ${data}`)
   })

   socket.on("send_message", (data)=>{
      // console.log(data)
      socket.to(data.room).emit("receive_message", data)
      // 클라이언트한테 받은 메세지 정보를 다시 클라이언트(해당 room)에게 넘기기
   })

   socket.on("disconnect", () => {
      console.log(`유저가 퇴장했습니다: ${socket.id}`)
   })
})


server.listen(3001, ()=> {
   console.log("SERVER RUNNING")
})