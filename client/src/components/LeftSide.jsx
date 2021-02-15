import React from 'react'
import '../shared/sass/components/left_side.scss'

export default function LeftSide() {
  return (
    <section width={8} className="home_left_background">
      <div className="container">
        <div className="icon">
          <img src="https://i.ibb.co/wKYxLBQ/comment.png" alt="comment" />
          <label>Comment your favorite posts.</label>
        </div>
        <div className="icon">
          <img src="https://i.ibb.co/sKY0Ljw/like.png" alt="like" />
          <label>If you like what you see don't forget to leave a like.</label>
        </div>
        <div className="icon">
          <img src="https://i.ibb.co/wsXvg6Z/idea.png" alt="idea" />
          <label>Share your thoughts with the community.</label>
        </div>
      </div>
    </section>
  )
}
