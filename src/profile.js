// Name
const header = {
  name: "Seth Martineau",
}
const background = {
  // Options: Snow or Particle
  type: "Snow"
}
// About Me
const section2title = "About Me"
const about = {
  paragraph: `Hello! My name is Seth Martineau and I'm a 26 year old graduate from the University of Utah.
    I just recently completed a full stack web development course from the University of Utah because I wanted a career change.
    Coding so far has been challenging and rewarding.
    I hope to learn more and am able to use these skills to better myself for future employment.`
}
// Skills
const skillsBar = [
  {
    name: "Bootstrap",
    value: 85
  }, {
    name: "Bulma",
    value: 75
  }, {
    name: "Command Line",
    value: 90
  }, {
    name: "CSS",
    value: 75
  }, {
    name: "Express",
    value: 85
  }, {
    name: "Git",
    value: 90
  }, {
    name: "Handlebars",
    value: 75
  }, {
    name: "Heroku",
    value: 75
  }, {
    name: "HTML",
    value: 90
  }, {
    name: "Javascript",
    value: 90
  }, {
    name: "JQuery",
    value: 80
  }, {
    name: "MongoDB",
    value: 80
  }, {
    name: "Mongoose",
    value: 80
  }, {
    name: "MySQL",
    value: 75
  }, {
    name: "Node",
    value: 80
  }, {
    name: "React",
    value: 90
  }, {
    name: "Passport",
    value: 85
  },
]
// Projects
const section3Title = "Portfolio"
const projects = [
  {
    id: "project1",
    name: "Resume",
    description: ["My current resume"],
    url: "https://drive.google.com/file/d/161wuigjwGEKLS_rWN84rr4vTDAXKfLe7/view?usp=sharing"
  },
  {
    id: "project2",
    name: "GetPetVet",
    description: ["An application for your pet, vet, and yourself, involving a simple video chat."],
    url: "https://evening-stream-63366.herokuapp.com/"
  },
  {
    id: "project3",
    name: "The Smartest Among Us",
    description: [`A simple trivia site based on the pop culture phenom "Among Us".`],
    url: "https://the-smartest-amoung-us.herokuapp.com/"
  },
  {
    id: "project4",
    name: "QR-Aid Codes",
    description: ["Plan a raid session with your gamer friends and send them a QR Code to add it to their phone calendar."],
    url: "https://diegopie.github.io/QR-aid-Codes/"
  }
]
// Miscellaneous Activities
// const section4Title = ""
// const miscellaneous = [
//   {
//     id: "misc1",
//     name: "",
//     url: ""
//   }
// ]
// Contact
const section5Title = "Contact"
const contact = {
  pitch: "seth.r.martineau@gmail.com",
  copyright: "Seth Martineau",
  contactUrl: ''
}
// Social Media
const social = {
  github: 'https://github.com/slothings',
  linkedin: 'https://www.linkedin.com/in/sethmartineau/',
  // resume:
}

export { header, background, about, skillsBar, projects, contact, social, section2title, section3Title , section5Title}