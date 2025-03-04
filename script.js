const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlists');

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like =${searchTerm}`
    fetch(url)
          .then((response) => response.json())
          .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylists.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {  
        console.log(element.name)
        artistName.innerText = element.name;
        artistImage.src = element.urlImg
    })

    resultArtists.classList.remove('hidden');
}

document.addEventListener('input', function() {
      const  searchTerm = searchInput.value.toLowerCase();
      if (searchTerm === ''){
         resultPlaylists.classList.add('hidden');
         resultArtists.classList.remove('hidden')
         return;


      }

      requestApi(searchTerm);
})
