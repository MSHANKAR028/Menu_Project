
import Header from './components/Header'; 
import Entry from './components/Entry';
import Tikka_Masala from "./Tikka_Masala.jpg"
import Paneer from "./Paneer.jpg"
import Naan from "./garlic-naan.jpg"
import briyani from "./briyani.jpg"


export default function App() {
  return (
    <div>
      <Header />
      <Entry 
       img ={Tikka_Masala}
       name = "Butter Chicken"
       link = "https://cabiryani.com/tracy-menu.html"
       description= "Boneless pieces of Chicken Tikka cooked in rich tomato sauce and sweetened by honey and topped with cream and butter"
      />
      <Entry 
        img = {Paneer}
        name = "Paneer Tikka Masala"
        link="https://cabiryani.com/tracy-menu.html"
        description="Fresh Indian cheese cubes cooked in special gravy with cream"
      />
      <Entry 
       img = {Naan}
       name = "Garlic Naan"
       link="https://cabiryani.com/tracy-menu.html"
       description =  "It's a warm, pillowy, tandoor-baked flatbread, generously infused with fragrant garlic and fresh cilantro, and finished with a brush of butter"

      />
      <Entry 
      img = {briyani}
      name = "Briyani"
      link= "https://cabiryani.com/tracy-menu.html"
      description =  "A fragrant masterpiece where long-grain basmati rice is slow-cooked with a harmonious blend of exotic spices, fresh herbs, and a savory protein (or vegetables), creating a truly aromatic and satisfying experience that's both rich in flavor and deeply comforting."

      />  
    </div>
  )
}