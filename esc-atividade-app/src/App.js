//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

let initialState = [
  { id: "1", prioridade: "2", nome: 'Título 1', descricao: 'Descrição da Atividade 1' }
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e){
    e.preventDefault();

    const atividade = {
      id: document.getElementById("id").value,
      prioridade: document.getElementById("prioridade").value,
      nome: document.getElementById("nome").value,
      descricao: document.getElementById("descricao").value
    };
    
    setAtividades([...atividades, {...atividade}]);
    console.log(atividades);

    document.getElementById("id").value = '';
    document.getElementById("prioridade").value = '';
    document.getElementById("nome").value = '';
    document.getElementById("descricao").value = '';
  }

  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return 'Baixa';
      case "2":
        return 'Normal';
      case "3":
        return 'Alta';
      default:
        return 'Indefinida';
    }
  }
  function prioridadeIcon(param) {
    switch (param) {
      case "1":
        return 'smile';
      case "2":
        return 'meh';
      case "3":
        return 'frown';
      default:
        return 'meh';
    }
  }

  return (
    <>
    <form className="row g-3">
      <div className="col-md-6">
        <label className="form-label">Id</label>
        <input id="id" type="text" className="form-control" placeholder="Digite o id da atividade" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Prioridade</label>
        <select id="prioridade" className="form-select">
          <option selected defaultValue="0">Selecione...</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label">Título</label>
        <input id="nome" type="text" className="form-control" placeholder="Digite o título da atividade" />
      </div>
      <div className="col-md-6">
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
                      <i className={"me-1 fa-regular fa-face-" + prioridadeIcon(atividade.prioridade)}></i> 
                      {prioridadeLabel(atividade.prioridade)}
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
