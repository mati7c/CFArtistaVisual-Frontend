import React from 'react';
import "../styles/statement.css";
import Layout from './Layout'; // Importa el Layout

const Statement = () => (
  <Layout>
  <div className="statement-container">
    <div className="overlay"></div>
    <div className="statement-content">
      <p className="statement-title">Statement</p> {/* Añade una clase para el título */}
      <p>Cecilia Ferreyra</p>
      <p>En mi práctica, habito el proceso. </p>
      <p>Desde una conexión profunda con la naturaleza, lo pictórico y la materialidad se abren como puentes entre
      mi mundo interno y el externo. Afuera y adentro dialogan con lo matérico desde una dimensión sensible. En
      esa experiencia, la percepción intuitiva expande lo procesual, y la exploración genera nuevas búsquedas. </p>
      <p>A través de la pintura, el dibujo, el lienzo, el tejido/bordado, los pigmentos y elementos naturales, aparece lo
      gestual, lo informe, lo imprevisible. Así la representación comienza a dar más lugar a la materialidad. El
      lenguaje de la materia se presenta incluso antes, surgiendo lo primigenio. </p>
      <p>A veces trabajo en el interior del taller, otras veces en el entorno mismo, donde el mantillo natural o el flujo
      del curso de un arroyo se convierten en soportes de exploración, participando además otros factores, como
      el viento, la lluvia, la tierra, el sol. El soporte va tomando diferentes dimensiones, como también los espacios
      en los que interviene. Allí la fotografía se suma como registro de un instante/acción efímera, y como
      posibilidad de expansión de este recorrido</p>
      <p>El monte, el río, la montaña, los diferentes paisajes por los que transito, me impulsan a conectarme conmigo
      misma y a percibir el territorio como espacio habitado. Entretejiendo ese tiempo, y siendo presencia en el
      hacer.</p>
    </div>
  </div>
  </Layout>
);

export default Statement;