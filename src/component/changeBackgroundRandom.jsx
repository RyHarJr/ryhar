const handleColor = () => {
  document.root.style = `background-color: ${getRandomColor()}`
}

function getRandomColor() {
  const color = [
    "#281ECD", "#B85093", "#11516E", "#0B85C4", "#9E4BAF",
    "#371036", "#797EF7", "#6D171C", "#99EF75", "#11CDDD",
    "#041CB9", "#E4DBFB", "#0566EF", "#7114B7", "#681C2E",
    "#A89845", "#7D318B", "#7E7903", "#6DBB0D", "#2716ED"
  ]
  const random = Math.floor(Math.random() * color.length)
  return color[random]
}

function changeBackgroundRandom() {
  return (
    <div>
      <button onClick={handleColor}>Change Background Color To Random ( Challenge )</button>
    </div>
  )
}

export default changeBackgroundRandom