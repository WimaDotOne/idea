import express from "express"
import { iLoadWords } from "./B/iLoadWords.js"
const RosettaStoneRouter = express.Router()


RosettaStoneRouter.post('/LoadWords', iLoadWords)


export {
  RosettaStoneRouter
}