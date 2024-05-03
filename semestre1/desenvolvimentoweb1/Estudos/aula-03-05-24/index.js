const cities = [
    'indaiatuba',
    'Salto', 
    'Itu',
    'Rio de Janeiro',
    'hortolandia',
    'Sorocaba',
    'Campinas',
    'Sumaré'
]

console.log(cities)

for(let i = 0; i < cities.length; i++){
    console.log(cities[i]);
}

cities.forEach((c, i, sa) =>{
    console.log(c);
    console.log(i);
    console.log(sa);
})

cities.map((city, index) => {
    console.log(city);
    console.log(index);
})

// let citiesByIndex = []
//
//    cities.forEach((city, index, sourceArray) => {
//    citiesByIndex.push({
//        index,
//       city
//    })
//    })

console.log(citiesByIndex)

const citiesByIndex = cities.map((city, index) => `${city} na posição ${index}`)

console.log(citiesByIndex)

const filteredCities = cities.filter((city) => city === "indaiatuba")

console.log(filteredCities)