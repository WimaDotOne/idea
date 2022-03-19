import express from "express"
import { iLoadMovie } from "./B/iLoadMovie.js"
import { iLoadDvdList } from "./B/iLoadDvdList.js"

const MovicRouter = express.Router()


MovicRouter.post('/LoadMovie', iLoadMovie)
MovicRouter.post('/LoadDvdList', iLoadDvdList)


export {
  MovicRouter
}