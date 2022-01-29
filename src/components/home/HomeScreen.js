import { Link } from "react-router-dom"

export const HomeScreen = () =>{
    return (
        <div className="container-fluid">
        <div className="hero-section hero" style={{ backgroundImage: "url(./banner-bg.png)"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center zindex-1">
              <h1 className="mb-3">CODERS<br />
                Red Social</h1>
              <p className="mb-4">Conecta con desarrolladores y crece tu red de contactos<br />
                Gracias a Coders sus usuarios pueden promocionarse y hacer networking.</p>
              <Link to="login" className="btn btn-secondary btn-lg">¡Únete ahora!</Link>
               </div>
          </div>
        </div>

        <div id="scene">
            <img className="img-fluid hero-bg-1 up-down-animation" src={("./feature-bg-2.png")}/>            
            <img className="img-fluid hero-bg-2 left-right-animation" src={("./seo-ball-1.png")}/>            
            <img className="img-fluid hero-bg-4 up-down-animation" src={("./green-dot.png")}/>            
            <img className="img-fluid hero-bg-5 left-right-animation" src={("./blue-half-cycle.png")}/>
         </div> 
      </div>
      
   
      
      <section className="section-lg team" id="team">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Nuestro Equipo</h2>
              <p className="mb-100">Nuestro equipo está compuesto por expertos globales, profesionales apasionados<br /> 
              cuya motivación y dedicación a su trabajo es vital para el éxito  </p>
            </div>
          </div>
          <div className="col-10 mx-auto">
            <div className="team-slider">

              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                  <img className="rounded-circle img-fluid" src={("./marcos.jpg")}/>            
                  </div>
                  <div className="align-self-center">
                    <h4>Marcos Miranda</h4>
                    <h6 className="text-color">Fullstack Developer</h6>
                  </div>
                </div>
                <p>Full-Stack developer with 5 years of experience leading both front-end and back-end
                 development. Led teams of 20 people across technology, business and design departments.</p>
              </div>
              
              <div className="team-member">
                <div className="d-flex mb-4">
                  <div className="mr-3">
                  <img className="rounded-circle img-fluid" src={("./gaby.png")}/>          

                  </div>
                  <div className="align-self-center">
                    <h4>Gabriela Muñoz</h4>
                    <h6 className="text-color">Fullstack Developer</h6>
                  </div>
                </div>
                <p>Full-Stack developer with 5 years of experience leading both front-end and back-end
                 development. Led teams of 20 people across technology, business and design departments.</p>
              </div>
             </div>
          </div>
        </div>
        <img className="img-fluid team-bg" src={("./team-bg.png")}/>  
        <img className="team-bg-shape-1 up-down-animation" src={("./seo-ball-1.png")}/>  
        <img className="team-bg-shape-2 left-right-animation" src={("./seo-ball-1.png")}/>  
        <img className="team-bg-shape-3 left-right-animation" src={("./team-bg-triangle.png")}/> 
        <img className="team-bg-shape-4 up-down-animation" src={("./team-bg-dots.png")}/>  
       
      </section>
      </div>  
    )}
