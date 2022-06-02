import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"


const App = () => {
	const [data, setData] = useState()

	useEffect(() => {
		getData()
		console.log(data)
	}, [])

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
			<div className="header">
				<h1 className="title">Random Anime Quotes</h1>
			</div>
			<div className="content">
				<h6 className="quote">{data.quote} <br></br>-{data.character}</h6>
			</div>
			<div className="info">
				{/* <h6>Anime: {data.anime}</h6> */}
				{/* <h6>Character: {data.character}</h6> */}
			</div>
		</div>
	)
}

export default App
