import React from "react"

const Gastronomia: React.FC = () => {
  return (
    <section className="section alt">
      <h2>Gastronomía Japonesa</h2>

      <p>
        La comida japonesa es famosa por su equilibrio, presentación y sabor.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Sushi</h3>
          <p>
            Arroz sazonado acompañado de pescado fresco y otros ingredientes.
          </p>
        </div>

        <div className="card">
          <h3>Ramen</h3>
          <p>
            Sopa de fideos con caldo intenso y muchas variaciones regionales.
          </p>
        </div>

        <div className="card">
          <h3>Comida Callejera</h3>
          <p>
            Takoyaki, okonomiyaki y otros platillos populares en festivales.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Gastronomia