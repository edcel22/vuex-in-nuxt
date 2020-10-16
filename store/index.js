export const state = () => ({
	members: [
		{
			id: '1',
			name: 'edcel',
			email: 'edcel@gmail.com',
			age: '22'
		},
		{
			id: '2',
			name: 'edmar',
			email: 'edmar@gmail.com',
			age: '23'
		},
		{
			id: '3',
			name: 'JES',
			email: 'jes@gmail.com',
			age: '33'
		},
	]
})

//mutation is an object that will handle a bunch of methods
//mutation have 2 parameters the state and payload
// payload is the data that we will pa in to the state
export const mutations = {
	
	addUser(state, payload) {
		state.members.push(payload)
	}
}