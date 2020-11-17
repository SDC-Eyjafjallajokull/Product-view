import React from 'react';

var Location = function() {
  return(
    <div>
      <div id="pickup">
        <span className="pickup">Pick up today</span> at
        <div>
          <span><a href="https://www.target.com" className="text"><small>Edit Store</small></a></span>
          &nbsp;
          <button  id="button1"  className="button">Pick it up</button>
        </div>
        <div className="locationtext">Ready to be picked up in 4 hours!</div>
      </div>

      <br/>

      <div id="sameday">
        <span className="sameday">Same Day Delivery</span> to
        <button id="button2"className="button">Deliver It</button>
        <div><a href="https://www.target.com"className="text"><small>Edit zip code</small></a></div>
      </div>
      <br/>
      <div id="deliver">
        <span       className="pickup">Deliver</span> to
        <div>
          <span><a href="https://www.target.com"className="text"><small>Edit zip code</small></a></span>
        </div>
          &nbsp;
        <div>
        <button id="button3"className="button">Ship it</button>
         </div>
      </div>
    </div>
  )
}

export default Location;