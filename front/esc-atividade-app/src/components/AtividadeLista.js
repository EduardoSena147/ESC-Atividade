import React from 'react'
import Atividade from './Atividade';

export default function AtividadeLista(props) {
  return (
    <div>
      <div className="mt-3">
            {props.atividades.map((atividade) => (
              <Atividade 
                key={atividade.id}
                atividade={atividade}
                deletarAtividade={props.deletarAtividade}
                editarAtividade={props.editarAtividade}
                prioridadeLabel={props.prioridadeLabel}
                prioridadeIcon={props.prioridadeIcon}
                prioridadeClass={props.prioridadeClass}
              />
            ))}
      </div>
    </div>
  )
}
