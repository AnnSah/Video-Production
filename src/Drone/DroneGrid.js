import React from 'react'

function DroneGrid({ srcFirst, srcSecond, srcThird, srcForth, srcFifth, srcSixth, srcSeventh, srcEighth, srcNinth, srcTenth, srcEleventh, srcTwelfth, srcThirteenth }) {
    return (
        <div className="image__grid">
            <img src={srcFirst} className="img-grid-col-1 img-grid-row-3" />
            <img src={srcSecond} className="img-grid-col-1 img-grid-row-2" />
            <img src={srcThird} src="./images/wedding.jpg" />
            <img src={srcForth} className="img-grid-col-1 img-grid-row-2" src="./images/sunset.jpg" />
            <img src={srcFifth} src="./images/landscape.jpg" />
            <img src={srcSixth} className="img-grid-col-1 img-grid-row-2" src="./images/daytime.jpg" />
            <img src={srcSeventh} className="img-grid-col-1 img-grid-row-3" src="./images/sea.jpg" />
            <img src={srcEighth} src="./images/landscape.jpg" />
            <img src={srcNinth} src="./images/landscape.jpg" />
            <img src={srcTenth} src="./images/landscape.jpg" />
            <img src={srcEleventh} className="img-grid-col-1 img-grid-row-2" src="./images/park.jpg" />
            <img src={srcTwelfth} src="./images/landscape.jpg" />
            <img className="img-grid-col-1 img-grid-row-3" src={srcThirteenth} src="./images/italy.jpg" />

        </div>
    )
}

export default DroneGrid;