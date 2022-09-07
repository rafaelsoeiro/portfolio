import React from 'react'
import CV from '../../assets/rafaelSilveiraSoeiro_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'> Convese comigo</a>
    </div>
  )
}

export default CTA
