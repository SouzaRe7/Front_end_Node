import authRepo from "../repository/Auth";

export default class AuthService {
  async Login(LoginDTO: Login): Promise<TokenResponse | undefined> {
    return authRepo.Login(LoginDTO);
  }
}
