
const Home = document.querySelector("#Home")
const ContactMe = document.querySelector("#ContactMe")
const aboutMe = document.querySelector("#AboutMe")
const Projects = document.querySelector("#Projects")
Home.addEventListener("click",function(){
    const hometext = `<h1>Home</h1><p>George George george of the jungle watch out for that tree</p>`
    document.querySelector("#container").innerHTML = hometext;
})
ContactMe.addEventListener("click", function(){
    const contactMe = document.querySelector("#container").innerHTML = `<h1>Email:Lukemiller4779@gmail.com</h1>
    <h2>Number:3047433312</h2><button id="send">Send</button>  <form action="input">
    <input id= "input" type="text"><input id= "input" type="text">
  </form>
    `
   
    document.querySelector("#input").value = ""
   
    document.querySelector("#container").innerHTML = contactMe
})
AboutMe.addEventListener("click", function(){
    const AboutMe = document.querySelector("#container").innerHTML = `<h1>I like to play disc golf, music, video games, and i have 5 siblings, mostly brothers. </h1>
    `  

   
    document.querySelector("#container").innerHTML = AboutMe
})
Projects.addEventListener("click", function(){
    const Projects = document.querySelector("#container").innerHTML = `<h1>Projects</h1><p>projects make me learn to code</p>
    `
    document.querySelector("#container").innerHTML = Projects
});
// In the "Contact Me" section, the user should see a form with two inputs: one for the user's name and one for their message. They should also see a button that says "Send".
// When the user clicks the "Send" button, the message inputs should clear and they should see a confirmation message below the form that says "Your message has been sent"
// const input = document.querySelector("#input")
// input.addEventListener("click", function(){
//     document.querySelector("#container").innerHTML += "Your message has been sent"
//     console.log("you clicked here")
// })
const Container = document.querySelector("#container")
Container.addEventListener("click", function(){
    if (event.target.id === "send"){
        document.querySelector("#container").innerHTML += "Your message has been sent"
    }
})