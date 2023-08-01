async function load () { 
    const lista = document.getElementById("4165");
    const link = `https://pokeapi.co/api/v2/pokemon?limit=1008`
    const _fetch = await fetch(link).then(async (_) => _.json());
    const pokemon = await Promise.all(_fetch.results.map(async ({ name, url }) => {
        const pokemonReal = await fetch(url).then(async (i) => i.json());
        const at = (pokemonReal.abilities.map((i) => i.ability.name[0].toUpperCase() + i.ability.name.slice(1))).join(" ");
        const nome = name[0].toUpperCase() + name.slice(1);
        
        const preço = (((Math.random() * pokemonReal.base_experience)) * Math.random() * 45).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return `<li class="product-box"><img src="${pokemonReal.sprites.front_default}" alt="${at}"><div class="product-name">${nome}<p>${at}</div><div class="product-price">${preço}</div></li>`
    }))

    
    lista.innerHTML = pokemon    
}
