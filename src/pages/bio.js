import React from 'react';
import imagen1 from '../images/bio1.jpg'; // Importa las imágenes
import imagen2 from '../images/bio2.jpg';
import imagen3 from '../images/bio3.jpg';
import imagen4 from '../images/bio4.jpg';
import Layout from './Layout'; // Importa el Layout
import '../styles/bio.css';

const Bio = () => (
  <Layout>
    <div className="biografia">
      <h2 className="biografia-h2">Biografía</h2>
      <div className="contenido">
        {/* Primera fila: Texto1 e Imagen1 */}
        <div className="fila">
          <div className="texto">
            <p>
              Cecilia Ferreyra, artista que vive y trabaja en las Sierras Chicas de Córdoba, nace en Paraná, Entre Ríos en el año ´83. Durante su infancia su familia se muda a Río Ceballos, Córdoba, donde vive hasta la actualidad. 
              Estudió en la Facultad de Filosofía y Humanidades de la U.N.C, recibiendo los títulos de Profesora Superior en Artes Plásticas-Pintura, y Licenciada en Pintura, en 2006 y 2009 respectivamente. Su Trabajo Final “Pintura y Silencio” fue seleccionado para representar a la U.N.C, participando en la 1° Feria Univ. UNIART, Ctro. C. Borges, en Bs As.
            </p>
          </div>
          <div className="imagen">
            <img src={imagen1} alt="Imagen1" />
          </div>
        </div>

        {/* Segunda fila: Imagen2 y Texto2 */}
        <div className="fila">
          <div className="imagen">
            <img src={imagen2} alt="Imagen2" />
          </div>
          <div className="texto">
            <p>
              Ha realizado varios cursos de posgrado, dictado talleres en espacios públicos y se ha desempeñado desde 2007 a la actualidad, como docente titular de Artes Visuales en diferentes instituciones educativas. Ha participado en numerosas muestras colectivas e individuales, concursos, encuentros, murales colectivos, obteniendo algunos premios y menciones. También hizo Clínicas de Obra con el artista Marcos Acosta.
            </p>
          </div>
        </div>

        {/* Tercera fila: Texto3 e Imagen3 */}
        <div className="fila">
          <div className="texto">
            <p>
              Entre las muestras se destacan “Naturaleza Habitada”(individual), que recorrió dos espacios expositivos, en Río Ceballos y La Calera. “Pequeña Maduración” (colectiva), en el Museo R. Pedroni; “El amor cambia sus disfraces” muestra colectiva en galería El Paraíso, Museo Mujica Lainez, de La Cumbre. Participación con libro de artista colectivo en Arts Libris Madrid. Instantes Gráficos. Muestra colectiva “Desandando la Huella de la Violencia” en Casona Ismería Agua de Oro, Cba.  
              “Diálogos Pictóricos” muestra individual en Espacio Marcantoni Arte, Río Ceballos y la última muestra, en Diciembre de 2024 “Atravesar el Paisaje” (individual) en Museo De La Ciudad Luis Biondi, Jesús María.
            </p>
          </div>
          <div className="imagen">
            <img src={imagen3} alt="Imagen3" />
          </div>
        </div>

        {/* Cuarta fila: Imagen4 y Texto4 */}
        <div className="fila">
          <div className="imagen">
            <img src={imagen4} alt="Imagen4" />
          </div>
          <div className="texto">
            <p>
              Creó Espacio de Arte "Aguaribay", en su Estudio de Río Ceballos. Allí da clases y trabaja en la producción de su Obra.  
              De Diciembre de 2023 a Febrero 2024 vivió en España y viajó también a Italia, lo que promovió expandir su proceso de obra nutriéndose de esa experiencia.  
              Actualmente cursa la Especialización en Producción Artística Contemporánea en la FA, UNC. Y continúa en permanente formación e investigación sobre su proceso creativo y su profunda relación con la Naturaleza que la rodea, integra e inspira su Obra.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Bio;