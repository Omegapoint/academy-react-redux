export const getUsers = () => {
	return fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.catch(err => { throw new Error('api to get users failed...') })
};

export const getUser = (userId) => {
	return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
		.then(res => res.json())
		.catch(err => { throw new Error('api to get user failed...') })
};
