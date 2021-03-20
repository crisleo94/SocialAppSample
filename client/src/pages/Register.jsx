import React from 'react'
import '../shared/sass/pages/register.scss'

export default function Register({handClose, show, children}) {
  const showModal = show ? 'modal display' : 'modal no_display'
  return (
    <div className={showModal}>
      <section className="register_modal">
        {children}
        <button onClick={handClose}>Close</button>
      </section>
    </div>
  )
}
