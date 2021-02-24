import {useEffect, UseState} from "react";
import axios from 'axios';
import {Spinner} from 'reactsrap';

const Superdrug = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [info, setInfo] = useState([]);

    useEffect( () => {
        setTimeout( () => {
            axios.get('')
            .then((response) => {
                setLoaded(true);
                setInfo(response.data.data);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            })
        }, 5000)
    }, [])

    if (error) {
        return <p>Oops.. something went wrong! {error.message}</p>
    } else if (!isLoaded) {
        return (
            <>
                <p>
                    Please wait.. we are loading your information!
                </p>
                <Spinner animation="border" role="status"/>
            </>
        )
    } else {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name:</th>
                        <th>Age:</th>
                        <th>Salary:</th>
                    </tr>
                    {info.map((person) => (
                        <tr>
                            <Employee person={person} />
                        </tr>
                    ))}
                </tbody>
            </table>
              )
            }
    
}

export default Superdrug;