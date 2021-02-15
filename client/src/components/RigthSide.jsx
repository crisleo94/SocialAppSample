import React from 'react'
import '../shared/sass/components/rigth_side.scss'

export default function RigthSide() {
  return (
    <section width={8} className="home_right_side">
      <div className="home_logo">
        <img
          src="https://i.ibb.co/F02xQvT/login-mobile-logo.png"
          alt="home_logo"
        />
      </div>
      <div className="button_group">
        <button className="btn btn_register">
          <span>Register</span>
        </button>
        <button className="btn btn_login">
          <span>Login</span>
        </button>
      </div>
    </section>
  )
}
