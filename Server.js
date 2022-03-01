import dotenv from "dotenv"
import express from "express"
import cookieParser from "cookie-parser"
import { ConnectDb, DevCors, FilePath
} from "./ideas/Core/bCore.js"
import { bConfig } from "./ideas/bConfig.js"
import { AnalyticsRouter } from "./ideas/Analytics/bAnalytics.js"
import { LoginRouter } from "./ideas/StripeLogin/bLogin.js"

dotenv.config()
ConnectDb(process.env.MONGO_DB)

const server = express()
server.use(express.json())
server.use(cookieParser())

DevCors(server)

server.use(bConfig.bRoute1+"/login", LoginRouter)
server.use(bConfig.bRoute1+"/analytics", AnalyticsRouter)
// server.use(bConfig.bRoute1+"/rosettastone", RosettaStoneRouter)

server.use(express.static(FilePath(import.meta.url, "./out")))

server.use("/", (_, res)=>{
  return res.sendFile(FilePath(import.meta.url, "./ideas/Core/404.html"))
})

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>{
  console.log(`Server listens at port ${PORT} on ${new Date()}`)
})
