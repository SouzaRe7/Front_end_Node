interface Login {
  email: string;
  senha: string;
}

type TokenResponse = {
  email: string;
  token: string;
}

type TokenDecode = {
  id: string;
  iat: number;
}

interface UserType {
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