//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';

let initialState = [
  { id: "1", prioridade: "1", nome: 'Título 1', descricao: 'Descrição da Atividade 1' },
  { id: "2", prioridade: "2", nome: 'Título 2', descricao: 'Descrição da Atividade 2' },
  { id: "3", prioridade: "3", nome: 'Título 3', descricao: 'Descrição da Atividade 3' }
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

  function deletarAtividade(id) {
    const novasAtividades = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...novasAtividades]);
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

  function prioridadeClass(param) {
    switch (param) {
      case "1":
        return 'success';
      case "2":
        return 'warning';
      case "3":
        return 'danger';
      default:
        return 'secondary';
    }
  }

  function retornaProximosId() {
    if (atividades.length === 0) {
      return 1;
    }
    const ultimoId = atividades[atividades.length - 1].id;
    return parseInt(ultimoId) + 1;
  }

  return (
    <>
    <div className='container'>
      <h1 className="mt-3">Gerenciador de Atividades</h1>
      <p className="lead">Adicione, edite e remova atividades facilmente.</p>
      <hr/>
      
      <AtividadeForm
        addAtividade={addAtividade}
        retornaProximosId={retornaProximosId}
        prioridadeLabel={prioridadeLabel}
        prioridadeIcon={prioridadeIcon}
        prioridadeClass={prioridadeClass}
      />

      <hr/>
      <div className="mt-3">
            {atividades.map((atividade) => (
              <div key={atividade.id} className={"card mb-3 border-" + prioridadeClass(atividade.prioridade) + " border-2 shadow-sm"}>
                <div className={"card-body text-" + prioridadeClass(atividade.prioridade)}>
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">
                      <span className="badge bg-secondary me-1 ">{atividade.id}</span>
                      <span className="text-black">{atividade.nome}</span>
                    </h5>
                    <h6> 
                      <span className="ms-1 text-black">Prioridade:</span> 
                      <span className="ms-1">
                        <i className={"me-1 fa-regular fa-face-" + prioridadeIcon(atividade.prioridade) + " text-" + prioridadeClass(atividade.prioridade)}></i> 
                        {prioridadeLabel(atividade.prioridade)}
                      </span>
                    </h6>
                  </div>
                  <p className="card-text text-black">{atividade.descricao}</p>
                  <div className="d-flex justify-content-end border-top pt-2">
                    <button className="btn btn-outline-secondary">
                      <i className="fa-solid fa-pen-to-square me-1"></i>Editar
                    </button>
                    <button 
                      className="btn btn-outline-danger ms-1" 
                      onClick={() => deletarAtividade(atividade.id)}>
                      <i className="fa-solid fa-trash-can me-1"></i>Deletar
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
    </>
  );
}

export default App;
