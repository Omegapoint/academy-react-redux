export const getUsers = () => {
	return fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.catch(err => { throw new Error('api to get users failed...') })
};
