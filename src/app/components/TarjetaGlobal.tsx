interface TarjetaGlobalProps {
  titulo: string;
  contenido: string;
  color?: string;
}

export default function TarjetaGlobal({ titulo, contenido, color = '#f0f0f0' }: TarjetaGlobalProps) {
  return (
    <div className="tarjeta-global" style={{ borderColor: color }}>
      <h3 className="titulo-global">{titulo}</h3>
      <p className="contenido-global">{contenido}</p>
    </div>
  );
}