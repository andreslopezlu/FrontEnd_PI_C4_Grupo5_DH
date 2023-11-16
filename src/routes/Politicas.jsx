import React from 'react';

const Politicas = () => {
  return (
    <div className="politicas-container">
      <div className="politicas-title">
        <h2>Políticas de AlquiConstruye</h2>
      </div>

      <div className="politicas-content">
        {/* Política 1 */}
        <div className="politica">
          <h3>Política de Alquiler</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>

        {/* Política 2 */}
        <div className="politica">
          <h3>Devoluciones</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Agrega más políticas según sea necesario */}

      </div>
    </div>
  );
};

export default Politicas;
