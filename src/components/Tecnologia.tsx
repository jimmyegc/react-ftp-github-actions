import React from "react"

const Tecnologia: React.FC = () => {
  return (
    <section className="section">
      <h2>Tecnología e Innovación</h2>

      <p>
        Japón lidera avances en robótica, transporte y cultura digital.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Shinkansen</h3>
          <p>
            El tren bala japonés es uno de los sistemas de transporte más
            rápidos y seguros del mundo.
          </p>
        </div>

        <div className="card">
          <h3>Robótica</h3>
          <p>
            Japón es líder mundial en robots industriales y humanoides.
          </p>
        </div>

        <div className="card">
          <h3>Anime y Videojuegos</h3>
          <p>
            Japón ha influenciado la cultura pop global con anime y videojuegos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Tecnologia