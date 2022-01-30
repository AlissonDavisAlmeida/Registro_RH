// interface que representa a tabela de registro de usuários
export interface RegistroUsuario{
    id? : number,
    nome : string,
    email : string,
    celular : string,
    status? : boolean,
    cpf : string,
    Conhecimentos? : [{
      id? :number,
      nome? :string
    }]
  }
