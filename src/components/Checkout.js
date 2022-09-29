import React from 'react';
import kermit from '../../public/kermit.jpg';

export default function Checkout() {
  return (
    <div className='content'>Congrats you have check out!
      <img src={kermit} alt='kermit the frog' width='100%'/>
    </div>
  )
}
