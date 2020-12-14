import React from "react";
import selfie from "../../images/selfie.jpg"

function About() {
  return (
    <divabout>
      <div class="container auto p-3">
        <div class="row pb-5">
          <div class="col-md-12">
            <div class="box">
              <img class="auto float-left pt-1 pr-3 pl-3" src={selfie} alt="Selfie"></img>
        </div>
        
              <p>Hello! My name is Seth Martineau and I'm a 26 year old graduate from the University of
              Utah. I am currently enrolled in a coding bootcamp because I wanted a career change. Coding so far has been
              challenging and rewarding. I hope to learn more and am able to use these skills to better myself for
      future employment.</p>

              <p>Outside of coding, I considered myself a pretty social person. I love going out on the weekend with my friends, eating out at new restaurants,
              and shopping for clothes. I also have two Siamese cats named Moses and Ramses and I've been getting into online gaming since COVID started.
      Currently I've been playing a lot of <a href="https://na.leagueoflegends.com/en-us/">League of Legends</a>. Hopefully at the end of this journey,
      I am able to use my skills to find a job and increase my in game rank, haha, and stay slim......Anyways that's enough about me,
      if you want to know more, you'll have to look through my portfolio!</p>
            </div>

          </div>
        </div>
    </divabout>
  )
}

export default About;