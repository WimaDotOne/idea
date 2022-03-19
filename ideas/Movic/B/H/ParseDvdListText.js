
export function ParseDvdListText(data) {
  const lines = data.split("\n")
  const json = []
  const pageStart = "==="
  let page = []
  let dvd = {}
  for(let i=0; i<lines.length; i++) {
    const line = lines[i].trim()
    if(!line) continue

    if(line.includes(pageStart)) {
      page = []
      json.push(page)
      continue
    }

    const dvdInfo = line.split("|")
    const movieId = dvdInfo[0]
    let illustration = (dvdInfo[1] || "").trim()
    if(!illustration) {
      illustration = movieId+".jpg"
    }
    page.push({movieId, illustration})
  }

  return json
}