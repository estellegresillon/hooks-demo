import React, { useState, useEffect } from 'react'
import axios from 'axios'

// class ResourceList extends React.Component {
// 	state = { resources: [] }

// 	async componentDidMount() {
// 		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
		
// 		this.setState({ resources: response.data })
// 	}

// 	async componentDidUpdate(prevProps) {
// 		if (prevProps.resource !== this.props.resource) {
// 			const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
		
// 			this.setState({ resources: response.data })
// 		}
// 	}

// 	render() {
// 		return (
// 			<div>{this.state.resources.length}</div>
// 		)
// 	}
// }

const ResourceList = ({ resource }) => {
	const [resources, setResources] = useState([])

	const fetchResource = async (resource) => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
		
		setResources(response.data)
	}

	// useEffect combines DidMount and DidUpdate
	// you can click multiple times in a row on posts or todo,
	// the request is done once anyway !
	// ultimately, it prevents from infinites re-renderings...
	useEffect(() => {
		fetchResource(resource)
	}, [resource])

	return <div>{resources.length}</div>
}

export default ResourceList