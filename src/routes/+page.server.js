/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const random = Math.floor(Math.random() * 10000);
	console.log('Server Trigger! The random number is', random);
	return {
		number: random
	};
}
