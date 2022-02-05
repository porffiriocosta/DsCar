import './styles.css';

const ButtonSearch = () => {
  return (
    <div className="btn-container-search">
      <input placeholder="Digite sua busca" />
      <button className="btn">
        <h6>Buscar</h6>
      </button>
    </div>
  );
};

export default ButtonSearch;
