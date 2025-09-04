import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaTailwind from './components/TarjetaTailwind';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Demo de Métodos de Estilizado</h1>
      
      {/* Sección CSS Global */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">CSS Global</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TarjetaGlobal 
            titulo="Tarjeta con CSS Global" 
            contenido="Este componente usa estilos globales definidos en globals.css. Los estilos se aplican mediante clases CSS tradicionales."
            color="#0070f3"
          />
          <TarjetaGlobal 
            titulo="Ventajas del CSS Global" 
            contenido="Reutilización de estilos, fácil mantenimiento, y consistencia visual en toda la aplicación."
            color="#17c964"
          />
        </div>
      </section>

      {/* Sección Módulos CSS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-purple-600">Módulos CSS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TarjetaModulo 
            nombre="Tarjeta Primaria"
            descripcion="Variante primaria con módulos CSS. Los estilos están encapsulados y son específicos para este componente."
            categoria="Demo"
            variante="primaria"
          />
          <TarjetaModulo 
            nombre="Tarjeta Secundaria"
            descripcion="Variante secundaria con diferentes colores y estilos mediante composición de clases."
            categoria="Módulo"
            variante="secundaria"
          />
          <TarjetaModulo 
            nombre="Tarjeta Éxito"
            descripcion="Variante de éxito que demuestra la flexibilidad de los módulos CSS con múltiples variantes."
            categoria="CSS"
            variante="exito"
          />
        </div>
      </section>

      {/* Sección Estilos en Línea */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-600">Estilos en Línea</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TarjetaDinamica 
            titulo="Tarjeta Dinámica"
            contenido="Estilos completamente dinámicos mediante props. Colores y dimensiones configurables."
            colorFondo="#f0f9ff"
            colorTexto="#0369a1"
            ancho="100%"
          />
          <TarjetaDinamica 
            titulo="Estado Activo"
            contenido="Esta tarjeta muestra el estado activo con cambios visuales condicionales."
            colorFondo="#fff"
            colorTexto="#333"
            ancho="100%"
            activo={true}
          />
          <TarjetaDinamica 
            titulo="Personalización Total"
            contenido="Máxima flexibilidad con estilos en línea para casos específicos y dinámicos."
            colorFondo="#fef3c7"
            colorTexto="#92400e"
            ancho="100%"
          />
        </div>
      </section>

      {/* Sección Tailwind CSS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600">Tailwind CSS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <TarjetaTailwind 
            titulo="Tarjeta Moderna"
            descripcion="Diseño moderno y responsive utilizando únicamente clases de Tailwind CSS."
            etiqueta="Nuevo"
          />
          <TarjetaTailwind 
            titulo="Componente con Imagen"
            descripcion="Incluye imagen y etiqueta, demostrando las capacidades de diseño de Tailwind."
            imagen="https://cdn-icons-png.flaticon.com/256/6656/6656266.png"
            etiqueta="Popular"
          />
          <TarjetaTailwind 
            titulo="Tailwind CSS"
            descripcion="Framework utility-first que permite crear diseños rápidos y consistentes."
            etiqueta="Trending"
          />
        </div>
      </section>
    </div>
  );
}