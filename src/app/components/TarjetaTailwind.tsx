interface TarjetaTailwindProps {
  titulo: string;
  descripcion: string;
  imagen?: string;
  etiqueta?: string;
}

export default function TarjetaTailwind({
  titulo,
  descripcion,
  imagen,
  etiqueta
}: TarjetaTailwindProps) {
  return (
    <div className="flex flex-col w-64 bg-white border border-gray-200 rounded-lg shadow-lg 
                   transition-all duration-300 hover:shadow-xl hover:scale-105 m-4">
      
      {imagen && (
        <img 
          src={imagen} 
          alt={titulo}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      
      <div className="p-4 flex flex-col flex-1">
        {etiqueta && (
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 
                         rounded-full self-start mb-2">
            {etiqueta}
          </span>
        )}
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {titulo}
        </h3>
        
        <p className="text-gray-600 flex-1">
          {descripcion}
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="text-blue-600 hover:text-blue-800 font-medium 
                           transition-colors duration-200">
            Ver más →
          </button>
        </div>
      </div>
    </div>
  );
}