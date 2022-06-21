//export default (_, context) => context.json({ msg: 'hello word' });
/*
export default async (request, context) => {
	console.log(request.headers);
	const joke = await fetch('https://www.youtube-nocookie.com/embed/81B2SoSrZrQ');

	const jsonData = await joke.text();
	return context.json(jsonData);
};  */

export default async (req) => {
	const url = new URL(req.url);
	console.log(url);
	const urlParams = url.searchParams;
	const urlTo = urlParams.get('urlTo');
	//console.log(youtube);
	const getUrl = await fetch(`${urlTo}`);
	//const getUrl = await fetch(`https://www.youtube.com/embed/81B2SoSrZrQ`);
	const text = await getUrl.text();
	console.log(urlTo);
	return new Response(urlTo);
};
