import Tour from './Tour'
 const Tours = ({tours, removeTour}) => {

    return(
        <section>
            <div className="title">
                <h2>Our tours</h2>
                <div className="underline"></div>
                {tours.map((item) => {
                    return(
                        <Tour  item = {item} {...item}  removeTour={removeTour} />
                   );
                })};
            </div>
        </section>
    );
 };

 export default Tours;