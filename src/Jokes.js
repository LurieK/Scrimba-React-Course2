function Jokes(props){

    return (
        <>
        <h3>{props.setup}</h3>
        {props.punchline && <h4>{props.punchline}</h4>}
        </>
    )
}

export default Jokes