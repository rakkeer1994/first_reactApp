
import listItem from './data'
import SingleDiv from './Component';

function ndiv(val){
   return (
    <SingleDiv 
    imgSrc={val.imgSrc}
    name={val.name}
    webLink={val.webLink}
    />
   )
}
function App(){
    return(
        <>
        <h1 className='heading'>List of top five Webseries here</h1>
        {listItem.map(ndiv)}
        </>
    )
}

export  default App;