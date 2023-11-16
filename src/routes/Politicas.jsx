const Politicas = () => {
  return (
    <div className="politicas-container">
      <div className="politicas-title">
        <h2>Políticas de AlquiConstruye</h2>
      </div>

      <div className="politicas-content">
        {/* Política 1 */}
        <div className="politica">
          <h3>Duración del Alquiler</h3>
          <p>
            La tarifa de alquiler se basa en periodos de 24 horas. Se aplicarán tarifas adicionales por retrasos.
          </p>
        </div>

        {/* Política 2 */}
        <div className="politica">
          <h3>Reservas</h3>
          <p>
            Le recomendamos reservar las herramientas con anticipación para garantizar su disponibilidad. Las reservas se pueden realizar en línea o en nuestras instalaciones.
          </p>
        </div>

        {/* Política 3 */}
        <div className="politica">
          <h3>Entrega y Recogida</h3>
          <p>
            Ofrecemos servicios de entrega y recogida. Consulte las tarifas y disponibilidad en su área.
          </p>
        </div>

        {/* Política 4 */}
        <div className="politica">
          <h3>Condiciones de Uso</h3>
          <p>
            Utilice las herramientas según las especificaciones del fabricante. Cualquier daño resultante de un mal uso puede estar sujeto a tarifas adicionales.
          </p>
        </div>

        {/* Política 5 */}
        <div className="politica">
          <h3>Cuidado y Mantenimiento</h3>
          <p>
            Devuelva las herramientas en el mismo estado en que las recibió. Se aplicarán tarifas por limpieza y mantenimiento si es necesario.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Politicas;