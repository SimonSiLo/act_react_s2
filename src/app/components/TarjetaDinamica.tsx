import { CSSProperties } from 'react';

interface TarjetaDinamicaProps {
  titulo: string;
  contenido: string;
  colorFondo?: string;
  colorTexto?: string;
  ancho?: string;
  activo?: boolean;
}

export default function TarjetaDinamica({
  titulo,
  contenido,
  colorFondo = '#ffffff',
  colorTexto = '#333333',
  ancho = '300px',
  activo = false
}: TarjetaDinamicaProps) {
  const estilosTarjeta: CSSProperties = {
    backgroundColor: activo ? '#e3f2fd' : colorFondo,
    color: colorTexto,
    width: ancho,
    padding: '1.5rem',
    margin: '1rem',
    border: activo ? '2px solid #2196f3' : '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: activo 
      ? '0 4px 12px rgba(33, 150, 243, 0.2)' 
      : '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const estilosTitulo: CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: '600',
    margin: '0 0 1rem 0',
    color: activo ? '#1976d2' : colorTexto
  };

  const estilosContenido: CSSProperties = {
    lineHeight: '1.5',
    margin: '0'
  };

  return (
    <div style={estilosTarjeta}>
      <h3 style={estilosTitulo}>{titulo}</h3>
      <p style={estilosContenido}>{contenido}</p>
    </div>
  );
}