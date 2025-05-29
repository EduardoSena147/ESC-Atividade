import React from 'react'

export default function AtividadeForm(props) {
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-6">
          <fieldset disabled>
          <label className="form-label">Id</label>
          <input id="id" type="text" className="form-control" value={props.retornaProximosId()}/>
          </fieldset>
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="prioridade" className="form-select">
            <option defaultValue="0">Selecione...</option>
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
          <button  onClick={props.addAtividade} className="btn btn-outline-secondary">+ Atividade</button>
        </div>
      </form>
    </div>
    
  )
}
