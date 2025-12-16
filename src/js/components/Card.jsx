import React from "react";

const Card = () => {

    const myArray = ["1", "2", "1", "1",];

    return (
        // style={{"width: 18rem;"}}
        <>
            <div className="container-fluid text-center">
                <div className="row justify-content-center">

                    { myArray.map((card, index) => (
                        <div key={index} className="col-10 col-sm-6 col-lg-3 d-flex justify-content-center">
                            <div className="card mb-5" >
                                <img src="./src/img/rigo-baby.jpg" className="card-img-top" alt=".." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title </h5>
                                    <p className="card-text">{card}</p>
                                </div>
                                <div className="card-body">
                                    <a href="#" className="card-link">Card link</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>


    );
}

export default Card;