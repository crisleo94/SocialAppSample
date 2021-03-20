import React, {useState} from 'react'
import Register from '../pages/Register'
import '../shared/sass/components/rigth_side.scss'

export default function RigthSide() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <section width={8} className="home_right_side">
      <div className="home_logo">
        <img
          src="https://i.ibb.co/F02xQvT/login-mobile-logo.png"
          alt="home_logo"
        />
      </div>
      <div className="button_group">
        <button className="btn btn_register" onClick={toggleModal}>
          <span>Register</span>
        </button>
        <button className="btn btn_login">
          <span>Login</span>
        </button>
      </div>
      <Register show={isOpen} handClose={toggleModal} />
    </section>
  )
}
