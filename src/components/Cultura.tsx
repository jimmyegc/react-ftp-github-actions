import React from "react"

const Cultura: React.FC = () => {
  return (
    <section className="section">
      <h2>Cultura Tradicional</h2>

      <p>
        Japón conserva tradiciones que han sobrevivido siglos: ceremonias del
        té, templos, artes marciales y la filosofía samurái.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Samuráis</h3>
          <p>
            Guerreros legendarios que definieron el código de honor japonés.
          </p>
        </div>

        <div className="card">
          <h3>Ceremonia del Té</h3>
          <p>
            Un ritual que representa armonía, respeto y tranquilidad.
          </p>
        </div>

        <div className="card">
          <h3>Templos y Santuarios</h3>
          <p>
            Miles de templos budistas y santuarios sintoístas forman parte del
            paisaje japonés.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cultura