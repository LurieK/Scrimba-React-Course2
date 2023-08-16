function Jokes(props){

    return (
        <>
        <h3>{props.setup}</h3>
        {props.punchline && <h4>{props.punchline}</h4>}
        {props.isPun ? <p>It's a Pun! </p>: <p>Not a Pun</p>}
        </>
    )
}

export default Jokes