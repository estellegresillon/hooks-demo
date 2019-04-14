import React from 'react'
import useResources from './use_resources'

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
	const resources = useResources(resource)

	return (
		<ul>
			{resources.map(record => 
				<li>{record.title}</li>
			)}
		</ul>
	)
}

export default ResourceList