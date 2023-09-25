import {Link} from "react-router-dom"
function Menu(){
    return(
        <div>
             <Link to="/">Home| </Link>
            <Link to="about">About| </Link>
            <Link to="service">Service| </Link>
            <Link to="contact">Contact| </Link> 
             <Link to="student">Student| </Link>
             <Link to="trainees">Trainees| </Link>
            <Link to="events">Events| </Link>
            <Link to="counter">Counter| </Link>
            <Link to="hooks">Hooks| </Link>
            <Link to="hooks1">Hooks1| </Link>
            <Link to="products1">Productss1| </Link>
            <Link to="newproducts1">Newproducts1| </Link>
            <Link to="productcard">Productcard| </Link>
            <Link to="productcard">categorydd| </Link>
        </div>
    )
}
export default Menu;