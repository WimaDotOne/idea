import {promises as fsPromises} from "fs"
import { FilePath } from "../../Core/bCore.js"
import { ParseMovieText } from "./H/ParseMovieText.js"

async function iLoadMovie(req, res) {
  try {
    const movieId = req.body.movieId

    if(!movieId) {
      return res.json({ ok:false, error: "Movie name is missing"})
    }
    const path = FilePath(import.meta.url, `./DB/movies/${movieId}.txt`)
    const data = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )

    const pages = ParseMovieText(data)
    return res.json({
      ok: true,
      pages
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}

export {
  iLoadMovie
} 