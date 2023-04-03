import axios from 'axios'

const allCharacters = async (state) => {
    const req = await axios.get('https://rickandmortyapi.com/api/character')
    state(req.data.results)
}

export {
    allCharacters
}