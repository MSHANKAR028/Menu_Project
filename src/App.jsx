// App.jsx
import Header from './components/Header'; 
import Entry from './components/Entry';

export default function App() {
 const time = new Date().getHours()
 let day 
 if(time < 12){
    day = "morning"
 }
 else if(time > 12 && time < 17){
    day =  "afternoon"
 }
 else if(time < 21){
    day =  "evening"
 }
 else 
  day =  "night";

  return (
    <div>
      <Header />
      <Entry 
       img ="src/Tikka_Masala.jpg"
       name = "Butter Chicken"
       link = "https://cabiryani.com/tracy-menu.html"
       description= "Boneless pieces of Chicken Tikka cooked in rich tomato sauce and sweetened by honey and topped with cream and butter"
      />
      <Entry 
        img = "src/Paneer.jpg"
        name = "Paneer Tikka Masala"
        link="https://cabiryani.com/tracy-menu.html"
        description="Fresh Indian cheese cubes cooked in special gravy with cream"
      />
      <Entry 
       img = "src/garlic-naan.jpg"
       name = "Garlic Naan"
       link="https://cabiryani.com/tracy-menu.html"
       description =  "It's a warm, pillowy, tandoor-baked flatbread, generously infused with fragrant garlic and fresh cilantro, and finished with a brush of butter"

      />
      <Entry 
      img = "src/briyani.jpg"
      name = "Briyani"
      link= "https://cabiryani.com/tracy-menu.html"
      description =  "A fragrant masterpiece where long-grain basmati rice is slow-cooked with a harmonious blend of exotic spices, fresh herbs, and a savory protein (or vegetables), creating a truly aromatic and satisfying experience that's both rich in flavor and deeply comforting."

      />  
    </div>
  )
}