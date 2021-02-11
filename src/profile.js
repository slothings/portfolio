// Change your display name on tha landing display
const header = {
  name: "Seth Martineau",
}
const background = {
  // Options: Snow or Particle
  type: "Snow"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me"
const about = {
  paragraph: `Hello! My name is Seth Martineau and I'm a 26 year old graduate from the University of Utah.
    I just recently completed a full stack web development course from the University of Utah because I wanted a career change.
    Coding so far has been challenging and rewarding.
    I hope to learn more and am able to use these skills to better myself for future employment.`
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Bootstrap",
    value: 85
  }, {
    name: "Bulma",
    value: 75
  }, {
    name: "Command Line",
    value: 70
  }, {
    name: "CSS",
    value: 75
  }, {
    name: "Express",
    value: 85
  }, {
    name: "Git",
    value: 75
  }, {
    name: "Handlebars",
    value: 70
  }, {
    name: "Heroku",
    value: 75
  }, {
    name: "HTML",
    value: 85
  }, {
    name: "Javascript",
    value: 75
  }, {
    name: "JQuery",
    value: 70
  }, {
    name: "MongoDB",
    value: 75
  }, {
    name: "Mongoose",
    value: 85
  }, {
    name: "MySQL",
    value: 75
  }, {
    name: "Node",
    value: 70
  }, {
    name: "React",
    value: 75
  }, {
    name: "Passport",
    value: 85
  },
]
// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you don't have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects"
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "GetPetVet",
    description: ["An application for your pet, vet, and yourself, involving a simple video chat."],
    url: "https://evening-stream-63366.herokuapp.com/"
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "The Smartest Among Us",
    description: [`A simple trivia site based on the pop culture phenom "Among Us".`],
    url: "https://the-smartest-amoung-us.herokuapp.com/"
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "QR-Aid Codes",
    description: ["Plan a raid sesh with your gamer friends and send them a QR Code to add it to their phone calendar."],
    url: "https://diegopie.github.io/QR-aid-Codes/"
  }
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you don't have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Resume"
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Resume",
    url: "https://drive.google.com/file/d/1Mx83KJ6WixSzfHFXLRQKQFV6yp2kSJjX/view?usp=sharing"
  }
]
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Contact"
const contact = {
  pitch: "You can reach me at these portals.",
  copyright: "Seth Martineau",
  contactUrl: ''
}
// Paste your respective social media links. You can omit any if you don't have it
// Upload your resume in your drive, get the shareable link and paste it in the resume section
const social = {
  github: 'https://github.com/slothings',
  linkedin: 'https://www.linkedin.com/in/sethmartineau/',
  // resume:
}
// Don't change anything here
export { header, background, about, skillsBar, projects, miscellaneous, contact, social, section2title, section3Title, section4Title, section5Title }