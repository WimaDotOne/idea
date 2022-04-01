import express from "express"
import { iLoadDrinks } from "./B/iLoadDrinks.js"

const BarnesNobleRouter = express.Router()


BarnesNobleRouter.post('/LoadDrinks', iLoadDrinks)


export {
  BarnesNobleRouter
}