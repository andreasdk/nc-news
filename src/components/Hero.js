import "./Hero.css"
import "../App.css"

export default function Hero() {
    return (
    <section className="hero">
        <div className="hero__container">
            
            <img className="hero__container__image" alt="Man reading newspaper" src={process.env.PUBLIC_URL + 'assets/images/hero.jpg'} />
        </div>
        <div className="hero__text">
            <h1 className="hero__heading">
                <span className="heading-primary-main">NC News</span>
                <span className="heading-primary-sub">Lorus Ipsum Text</span>
            </h1>
        </div>
    </section>    
    );
}

