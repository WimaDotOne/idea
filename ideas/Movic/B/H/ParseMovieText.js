
export function ParseMovieText(data) {
  const lines = data.split("\n")
  const json = []
  const pageStart = "==="
  const momentStart = "---"
  const narrativeLead = "#"
  let page = []
  let moment = { narrative: "", lines: [], illustration: ""}
  for(let i=0; i<lines.length; i++) {
    const line = lines[i].trim()
    if(!line) continue

    if(line.includes(pageStart)) {
      page = []
      json.push(page)
      continue
    }

    if(line.includes(momentStart)) {
      moment = {}
      const parts = line.split("-")
      const lastPart = parts[parts.length-1]
      if(lastPart) {
        moment.illustration = lastPart.trim()
      }
      page.push(moment)
      continue
    } 
    
    if(line.includes(narrativeLead)) {
      moment.narrative = line.split(narrativeLead)[1]
    } else {
      if(!moment.lines) {moment.lines = []}
      moment.lines.push(line)
    }
  }

  return json
}