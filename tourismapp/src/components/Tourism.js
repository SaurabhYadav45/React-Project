

import Cards from './Cards';


const Tourism = ({tours,removeTour}) =>{


    return(
        <div className='container'>
            <h2 className='heading'>Plan With Family</h2>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Cards {...tour} key={tour.id} removeTour={removeTour}></Cards>
                    })
                    //key={tour.id}: The unique identifier for each Cards component, which helps React efficiently update the list when it changes.
                }
            </div>
        </div>
    );
}

export default Tourism;