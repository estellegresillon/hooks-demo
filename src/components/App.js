import React, { useState } from 'react'

import ResourceList from './resource_list'

const App = () => {
	// resource = current value 
	// setResource = function to call to rerender (just like setState)
	// function from react
	// 'posts' is an initial value
	const [resource, setResource] = useState('posts')

	return (
		<div>
			<div>
				<button onClick={() => setResource('posts')}>
					Posts
				</button>
				<button onClick={() => setResource('todos')}>
					Todos
				</button>
			</div>
			<ResourceList resource={resource} />
		</div>
	)
}

export default App

// useState : use a component-level state
// useEffect : use a lifecycle method
// useContext : use the context system
// useRef : use the ref system (dom element)
// useReducer...