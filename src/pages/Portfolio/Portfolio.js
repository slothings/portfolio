import React from "react";
import resume from "../../images/resume.png";
import smartestAmongUs from "../../images/smartestAmongUs.png";
import qrAidCodes from "../../images/qrAidCodes.gif";
import readmeGenerator from "../../images/readmeGenerator.JPG";
import noteTaker from "../../images/noteTaker.JPG";
import teamProfileGenerator from "../../images/teamProfileGenerator.JPG";
import passwordGenerator from "../../images/passwordGenerator.JPG";
import workDayScheduler from "../../images/workDayScheduler.JPG";
import resumePDF from "../../images/ResumePDF.pdf";

function Portfolio() {
  return (
    <divportfolio>

      <div1 class="card-deck auto p-3 text-center paper">
        <div class="card">
          <img src={resume} class="card-img-top" alt="Resume"></img>
          <div class="card-body text-center text-white lavendar">
            <h5 class="card-title text-center">Resume</h5>
            <p><a class="card-text text-center text-white" href={resumePDF}>View</a></p>
          </div>
        </div>
        <div class="card">
          <img src={smartestAmongUs} class="card-img-top" alt="Smartest Among Us"></img>
          <div class="card-body text-center text-white overcast">
            <h5 class="card-title text-center">Smartest Among Us</h5>
            <p><a class="card-text text-center text-white text-white" href="https://the-smartest-amoung-us.herokuapp.com/">Live Site</a></p>
            <p><a class="card-text text-center text-white text-white" href="https://github.com/slothings/the-smartest-among-us">GitHub Repository</a></p>
          </div>
        </div>
        <div class="card">
          <img src={qrAidCodes} class="card-img-top" alt="QR-Aid-Codes"></img>
          <div class="card-body text-center text-white lavendar">
            <h5 class="card-title text-center">QR-Aid-Codes</h5>
            <p><a class="card-text text-center text-white" href="https://diegopie.github.io/QR-aid-Codes/">Live Site</a></p>
            <p><a class="card-text text-center text-white" href="https://github.com/slothings/qr-aid-codes">GitHub Repository</a></p>
          </div>
        </div>
        <div class="card">
          <img src={readmeGenerator} class="card-img-top" alt="README Generator"></img>
          <div class="card-body text-center text-white overcast">
            <h5 class="card-title text-center">README Generator</h5>
            <p><a class="card-text text-center text-white" href="https://drive.google.com/file/d/1TNf6tot9HryqUInftu65i-4acMOm0ygH/view">Tutorial Video</a></p>
            <p><a class="card-text text-center text-white" href="https://github.com/slothings/readme-generator">GitHub Repository</a></p>
          </div>
        </div>
      </div1>

      <div2 class="card-deck auto p-3 text-center paper">
        <div class="card">
          <img src={noteTaker} class="card-img-top" alt="Note Taker"></img>
          <div class="card-body text-center text-white overcast">
            <h5 class="card-title text-center">Note Taker</h5>
            <p><a class="card-text text-center text-white" href="https://vast-island-67845.herokuapp.com/">Live Site</a></p>
            <p><a class="card-text text-center text-white" href="https://github.com/slothings/note-taker">GitHub Repository</a></p>
          </div>
        </div>
        <div class="card">
          <img src={teamProfileGenerator} class="card-img-top" alt="Team Profile Generator"></img>
          <div class="card-body text-center text-white lavendar">
            <h5 class="card-title text-center">Team Profile Generator</h5>
            <p><a class="card-text text-center text-white" href="https://drive.google.com/file/d/1nGHiDMc6LsH1qZbPwOeMPSxv4mOBGq0y/view">Tutorial Video</a></p>
            <p><a class="card-text text-center text-white" href="https://github.com/slothings/team-profile-generator">GitHub Repository</a></p>
          </div>
        </div>
        <div class="card">
          <img src={passwordGenerator} class="card-img-top" alt="Password Generator"></img>
          <div class="card-body text-center text-white overcast">
            <h5 class="card-title text-center">Password Generator</h5>
            <p><a class="card-text text-center text-white" href="https://slothings.github.io/password-generator/">Live Site</a></p>
            <p><a class="card-text text-center text-white" href="https://github.com/slothings/password-generator">GitHub Repository</a></p>
          </div>
        </div>
        <div class="card">
          <img src={workDayScheduler} class="card-img-top" alt="Work Day Scheduler"></img>
          <div class="card-body text-center text-white lavendar">
            <h5 class="card-title text-center">Work Day Scheduler</h5>
            <p><a class="card-text text-center text-white" href="https://slothings.github.io/work-day-scheduler/">Live Site</a></p>
            <p><a class="card-text text-center text-white" href="https://github.com/slothings/work-day-scheduler">GitHub Repository</a></p>
          </div>
        </div>
      </div2>

    </divportfolio>
  )
}

export default Portfolio;