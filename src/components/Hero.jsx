import "./Hero.css"

function Hero(props) {
  return (
    <div className="Hero" style={{backgroundImage: `url(${props.background})`,
    backgroundPosition:`${props.position}`
    }}>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <p>CANACINTRA RÍO BRAVO</p>
    </div>
  )
}

export default Hero;