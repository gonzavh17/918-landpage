import React from 'react'

function Specifications() {
  return (
    <div className='specifications' id='specs'>
              <div className="specs-container">
        <p className="specs-title">Specifications</p>

        <div className="specs-list">

          <div className="spec-item">
            <p className="spec-name">Fuel engine</p>
            <p className="spec-spec">V8 @ 4.6L @ 608hp</p>
          </div>

          <div className="spec-item">
            <p className="spec-name">Electrical engine</p>
            <p className="spec-spec">286hp</p>
          </div>

          <div className="spec-item">
            <p className="spec-name">Maximum power</p>
            <p className="spec-spec">887hp @ 8700 rpm</p>
          </div>

          <div className="spec-item">
            <p className="spec-name">Maximum torque</p>
            <p className="spec-spec">1280nm @ 6600 rpm</p>
          </div>

          <div className="spec-item">
            <p className="spec-name">Drive type</p>
            <p className="spec-spec">AWD</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specifications