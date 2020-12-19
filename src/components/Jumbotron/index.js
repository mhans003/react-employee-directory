import Heading from "../Heading";

function Jumbotron(props) {
    return (
        <div className="jumbotron text-center">
            <Heading>{props.text}</Heading>
        </div>
    );
}

export default Jumbotron;