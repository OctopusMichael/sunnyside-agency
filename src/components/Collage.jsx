import React, { useState } from 'react'
import collage from '../data/collage.json'



function Collage( ) {
  const [newCollage, setNewCollage] = useState(collage);
  return (
    <>
      <section className='container-fluid section-container-collage g-0'>
      <div className='row'>

        {newCollage.map(element => {
          return (
           
              <div key={element.id}  className='col-6  col-lg-3 g-0'>
                <div  className={element.section}/>
              </div>
           
          )
        })}

      </div>
      </section>
    </>
  )
}

export default Collage