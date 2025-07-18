export default function Entry(props){
    console.log(props)
    return (
        <article className="MenuPage">
            <div className= "Photo1_container">
                <img className="Photo1" 
                src={props.img}
                alt = "Tikka Masala"/>
            </div>
            <div>
                <a href={props.link}>View Price On Site! </a>
                <h4 className="style">{props.name}</h4>
                 <p className="style-of-p">{props.description}</p>
            </div>
            
       

        </article>
    )
}