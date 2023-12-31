import { userRepo } from "../repository";

export default class UserService {
  async findUserById(userId: string): Promise<UserType | undefined> {
    const gettingUserById = userRepo.findUserById(userId);
    return gettingUserById;
  }
  async findAllClient(): Promise<UserType[] | undefined>{
    return userRepo.findAllCliente();
  }
}
