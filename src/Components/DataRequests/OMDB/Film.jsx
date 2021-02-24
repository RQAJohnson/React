import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const Film = (props) => {
    return (
        <>
        <Card>
            <CardImg src={props.Poster}/>
            <CardBody>
                <CardTitle>{props.Title}</CardTitle>
                <CardSubtitle>Year: {props.Year}</CardSubtitle>
                <button className="btn btn-outline-info" onClick={() => props.getDetails(props.imdbID)}>Details</button>
            </CardBody>
        </Card>
        </>
    )
}

export default Film;