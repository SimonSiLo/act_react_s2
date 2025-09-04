import styles from './TarjetaModulo.module.css';

interface TarjetaModuloProps {
  nombre: string;
  descripcion: string;
  categoria: string;
  variante?: 'primaria' | 'secundaria' | 'exito';
}

export default function TarjetaModulo({ 
  nombre, 
  descripcion, 
  categoria,
  variante = 'primaria' 
}: TarjetaModuloProps) {
  const claseVariante = styles[`tarjeta${variante.charAt(0).toUpperCase() + variante.slice(1)}`];
  
  return (
    <div className={`${styles.tarjeta} ${claseVariante}`}>
      <div className={styles.encabezado}>
        <h3 className={styles.titulo}>{nombre}</h3>
        <span className={styles.categoria}>{categoria}</span>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
}