import React from "react";
import './portfolio.css'
import carshop from '../../assets/carshop.png'
const Portfolio=()=>{

const portfoiloItems=[
{
    id:1,
    image:carshop,
    title:'car shop website',
    github:"https://github.com/manalamro/car-shop"
},
{
    id:2,
    image:carshop,
    title:'car shop website',
    github:"https://github.com/manalamro/car-shop"
},
{
    id:3,
    image:carshop,
    title:'car shop website',
    github:"https://github.com/manalamro/car-shop"
}
]

return(

<section id="portfolio">
<h5>My Recent Work</h5>
<h2>Portfoilo</h2>
<div className="container portfoilo-container">
    {
        portfoiloItems.map(({id,image,title,github})=>{
            return(
    <article key={id} className="portofolio-item">
    <div className="portfolio-item-image">
    <img src={image} alt={title} />
    </div>
    <h3>{title}</h3>
    <div className="portofolio-item-cta">
    <a href={github} className="btn" target="_parent">Github</a>
    </div>

</article>
            )
        })
    }

</div>
</section>
)}

export default Portfolio;