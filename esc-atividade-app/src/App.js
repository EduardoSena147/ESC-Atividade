//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

let initialState = [
  { id: 1, nome: 'Título 1', descricao: 'Descrição da Atividade 1' },
  { id: 2, nome: 'Título 2', descricao: 'Descrição da Atividade 2' },
  { id: 3, nome: 'Título 3', descricao: 'Descrição da Atividade 3' }
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e){
    e.preventDefault();

    const atividade = {
      id: document.getElementById("id").value,
      nome: document.getElementById("nome").value,
      descricao: document.getElementById("descricao").value
    };
    
    setAtividades([...atividades, {...atividade}]);

    document.getElementById("id").value = '';
    document.getElementById("nome").value = '';
    document.getElementById("descricao").value = '';
  }

  return (
    <>
    <form className="row g-3">
      <div className="col-md-3">
        <label className="form-label">Id</label>
        <input id="id" type="text" className="form-control" placeholder="Digite o id da atividade" />
      </div>
      <div className="col-md-3">
        <label className="form-label">Título</label>
        <input id="nome" type="text" className="form-control" placeholder="Digite o título da atividade" />
      </div>
      <div className="col-md-3">
        <label className="form-label">Descrição</label>
        <input id="descricao" type="text" className="form-control" placeholder="Digite a descrição da atividade" />
      </div>
      <div className="col-12">
        <button  onClick={addAtividade} className="btn btn-outline-secondary">+ Atividade</button>
      </div>
      
    </form>

    <hr/>
    <div className="mt-3">
          {atividades.map((atividade) => (
            <div key={atividade.id} className="card mb-2 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">
                    <span className="badge bg-secondary me-1">{atividade.id}</span>
                    {atividade.nome}
                  </h5>
                  <h6> 
                    Prioridade: 
                    <span className="ms-1 text-black">
                      <i className="me-1 fa-regular fa-face-meh"></i> 
                      Normal
                    </span>
                  </h6>
                </div>
                <p className="card-text">{atividade.descricao}</p>
                <div className="d-flex justify-content-end border-top pt-2">
                  <button className="btn btn-outline-secondary">
                    <i className="fa-solid fa-pen-to-square me-1"></i>Editar
                  </button>
                  <button className="btn btn-outline-danger ms-1">
                    <i className="fa-solid fa-trash-can me-1"></i>Deletar
                  </button>
                </div>
              </div>
            </div>
          ))}
    </div>
    </>
  );
}

export default App;
