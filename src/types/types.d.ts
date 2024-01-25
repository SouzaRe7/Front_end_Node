interface Login {
  email: string;
  senha: string;
}

type TokenResponse = {
  email: string;
  token: string;
};

type TokenDecode = {
  id: string;
  iat: number;
};

interface UserType {
  _id: string;
  nome: string;
  email: string;
  dataNascimento: Date;
  dataAdmisao?: Date;
  dataDemisao?: Date;
  obsDemisao?: string;
  rua: string;
  bairro: string;
  cep: string;
  foto?: string;
  ativo?: boolean;
  salario: number;
  admin?: boolean;
}

interface FuncionarioType {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: Date;
  dataAdmisao?: Date;
  dataDemisao?: Date;
  obsDemisao?: string;
  rua: string;
  bairro: string;
  cep: string;
  foto?: string;
  ativo?: boolean;
  salario: number;
  admin?: boolean;
}

interface ClienteType {
  _id: string;
  nome: string;
  dataNascimento: Date;
  rua: string;
  obs?: string;
  bairro: string;
  cep: string;
  foto?: string;
  ativo?: Boolean;
}

interface ServicoType {
  nome: string;
  descricao?: string;
  valor: number;
  tempoServico?: number;
  ativo?: boolean;
  funcionario: string;
  cliente: string;
  status: number; // 0-> aguardando 1->em andamento 2->cancelado 3->finalizado
}

interface ServicoTypeReturned {
  _id: string;
  nome: string;
  descricao?: string;
  valor: number;
  tempoServico?: number;
  ativo?: boolean;
  funcionario: UserType;
  cliente: ClienteType;
  status: number; // 0-> aguardando 1->em andamento 2->cancelado 3->finalizado
}