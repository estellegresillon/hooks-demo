import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = (resource) => {
	const [resources, setResources] = useState([])

	// const fetchResource = async (resource) => {
	// 	const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
		
	// 	setResources(response.data)
	// }

	// useEffect combines DidMount and DidUpdate
	// you can click multiple times in a row on posts or todo,
	// the request is done once anyway !
	// ultimately, it prevents from infinites re-renderings...
	useEffect(() => {
		// fetchResource(resource)
		(async (resource) => {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
			
			setResources(response.data)
		})(resource) // (() => console.log("hi"))() directly prints hi in the console
	}, [resource])

	return resources
}

export default useResources