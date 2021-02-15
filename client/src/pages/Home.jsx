import React from 'react'
import Footer from '../components/Footer'
import LeftSide from '../components/LeftSide'
import RigthSide from '../components/RigthSide'
import '../shared/sass/pages/home.scss'

export default function Login() {
  return (
    <div className="home_container">
      <LeftSide />
      <RigthSide />
      <Footer />
    </div>
  )
}
