import {useState} from 'react'

const Search = () => {
    const history = useHistory();

    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = ({target}) => {
        setQuery(target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`${API_URL}&s=${query}`)
            .then(res => {
                console.log(res.data.Search);
                setFilms(res.data.Search);
            }).catch(error => {
                console.log.error(error);
                setError(error);
            })
    }

    const getDetails = (id) => {
        console.log(id);
        history.push(`/OMDB/Details/${id}`);
    }

    return (
        <>
        <SearchBar query={query} handleChange={handleChange} search={handleSearch} />
        {error ?<div className="alert alert-danger">{error}</div>
        :
        <SearchResults films={films} getDetails={getDetails} />
    }
        </>
    )

}

export default Search;