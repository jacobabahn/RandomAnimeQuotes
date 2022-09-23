import { useEffect, useState, useRef } from "react"
import { Gradient } from "./Gradient"
import "./App.css"
import axios from "axios"

const gradient = new Gradient()

const App = () => {
  const [data, setData] = useState()
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      gradient.initGradient('#gradient-canvas')
      console.log("Hi", ref)
    }


    if (!data) {
      console.log(data)
      getData()
    }

  }, [ref.current, data])

  const getData = async () => {
    try {
      const response = await axios.get("https://animechan.vercel.app/api/random")
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className="main">
      <canvas ref={ref} id="gradient-canvas" data-transition-in></canvas>
      <h1 className="title">Random Anime Quotes</h1>
      <div className="content">
        <h6 className="quote">{data.quote} <br></br>-{data.character}</h6>
        <div className="info">
          <h6 className="anime">Character: {data.character}</h6>
          <h6 className="anime">Anime: {data.anime}</h6>
        </div>
      </div>
    </div>
  )
}

export default App
