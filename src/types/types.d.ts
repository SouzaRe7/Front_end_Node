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
  nome: string;
  dataNascimento: Date;
  rua: string;
  obs?: string;
  bairro: string;
  cep: string;
  foto?: string;
  ativo?: Boolean;
}
