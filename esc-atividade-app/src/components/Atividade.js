import React from 'react'

export default function Atividade(props) {
  return (
    <div>
      <div key={props.atividade.id} className={"card mb-3 border-" + props.prioridadeClass(props.atividade.prioridade) + " border-2 shadow-sm"}>
        <div className={"card-body text-" + props.prioridadeClass(props.atividade.prioridade)}>
          <div className="d-flex justify-content-between">
            <h5 className="card-title">
              <span className="badge bg-secondary me-1 ">{props.atividade.id}</span>
              <span className="text-black">{props.atividade.nome}</span>
            </h5>
            <h6> 
              <span className="ms-1 text-black">Prioridade:</span> 
              <span className="ms-1">
                <i className={"me-1 fa-regular fa-face-" + props.prioridadeIcon(props.atividade.prioridade) + " text-" + props.prioridadeClass(props.atividade.prioridade)}></i> 
                {props.prioridadeLabel(props.atividade.prioridade)}
              </span>
            </h6>
          </div>
          <p className="card-text text-black">{props.atividade.descricao}</p>
          <div className="d-flex justify-content-end border-top pt-2">
            <button 
            className="btn btn-outline-secondary"
            onClick={() => props.editarAtividade(props.atividade.id)}>
              <i className="fa-solid fa-pen-to-square me-1"></i>Editar
            </button>
            <button 
              className="btn btn-outline-danger ms-1" 
              onClick={() => props.deletarAtividade(props.atividade.id)}>
              <i className="fa-solid fa-trash-can me-1"></i>Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
