import React from 'react'

function DroneGrid({ srcFirst, srcSecond, srcThird, srcForth, srcFifth, srcSixth, srcSeventh, srcEighth, srcNinth, srcTenth, srcEleventh, srcTwelfth, srcThirteenth }) {
    return (
        <div className="image__grid">
            <img src={srcFirst} className="img-grid-col-1 img-grid-row-3" />
            <img src={srcSecond} className="img-grid-col-1 img-grid-row-2" />
            <img src={srcThird} />
            <img src={srcForth} className="img-grid-col-1 img-grid-row-2" />
            <img src={srcFifth} />
            <img src={srcSixth} className="img-grid-col-1 img-grid-row-2" />
            <img src={srcSeventh} className="img-grid-col-1 img-grid-row-3" />
            <img src={srcEighth} />
            <img src={srcNinth} />
            <img src={srcTenth} />
            <img src={srcEleventh} className="img-grid-col-1 img-grid-row-2" />
            <img src={srcTwelfth} />
            <img className="img-grid-col-1 img-grid-row-3" src={srcThirteenth} />

        </div>
    )
}

export default DroneGrid;