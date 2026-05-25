import styles from './TarjetaContacto.module.css';

function TarjetaContacto({ nombre, email, puesto, foto }) {
  return (
    <div>
      <div className="card text-center">
        <img 
          src={foto} 
          className={styles.avatar} 
          alt={nombre} 
        />

        <div className="card-body">
          <h6>{nombre}</h6>
          <p className="mb-1">{puesto}</p>
          <small>{email}</small>
        </div>
      </div>
    </div>
  );
}

export default TarjetaContacto;