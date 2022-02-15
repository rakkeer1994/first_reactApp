import './series.css'



function SingleDiv(props){
    return(
        <>
        
    
        <div className='main_div'>
            <img src={props.imgSrc} alt="there is no image" />
            <span className='name'>Name: {props.name}</span> <br />
            <button className='btn'><a href={props.webLink} className='links'> Click Me</a></button>
        </div>
        
        </>
    )
}

export default SingleDiv;