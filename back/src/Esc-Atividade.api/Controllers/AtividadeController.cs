using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Esc_Atividade.api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Esc_Atividade.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<Atividade> Atividade = new List<Atividade>
            {
                new Atividade { Id = 1, Titulo = "Atividade 1", Descricao = "Descrição da Atividade 1", Prioridade = "Alta" },
                new Atividade { Id = 2, Titulo = "Atividade 2", Descricao = "Descrição da Atividade 2", Prioridade = "Média" },
                new Atividade { Id = 3, Titulo = "Atividade 3", Descricao = "Descrição da Atividade 3", Prioridade = "Baixa" }
            };

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return Atividade;
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return $"You requested the Atividade with ID: {id}";
        }

        [HttpPost]
        public string Post()
        {
            return "This is a POST request to the Atividade API!";
        }

        [HttpPut]
        public string Put()
        {
            return "This is a PUT request to the Atividade API!";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"This is a PUT request to the Atividade API for ID: {id}";
        }

        [HttpDelete]
        public string Delete()
        {
            return "This is a DELETE request to the Atividade API!";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"This is a DELETE request to the Atividade API for ID: {id}";
        }
    }
}