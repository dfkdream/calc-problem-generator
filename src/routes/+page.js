export async function load({ url }){
	return {
		host: url.hostname,
		origin: url.origin
	};
}
