const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com',
		'X-RapidAPI-Key': 'edb00c534emshd0fc20f297448fep1d50acjsn4942f8bad6aa'
	}
};

fetch('https://videogames-news2.p.rapidapi.com/videogames_news/recent', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        console.log(response.content)
    })
	.catch(err => console.error(err)); 