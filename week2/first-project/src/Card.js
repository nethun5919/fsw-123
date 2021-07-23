




function Card(props){

    return(
        <div  style ={{backgroundColor: props.bgColor,width: props.width}}>
            <h1>{props.title}</h1>
        </div>
        
    )
}


export default Card;