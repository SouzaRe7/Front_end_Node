export default class UserRepo {
  async findUserById(userId: string): Promise<UserType | undefined> {
    const token = sessionStorage.getItem("token");

    if (!token) return;

    const header = new Headers({
      "Content-Type": "application/json",
      authorization: token,
    });

    const options: RequestInit = {
      method: "GET",
      headers: header,
      mode: "cors",
    };

    const response = await fetch(
      `http://localhost:3003/funcionario/${userId}`,
      options
    );

    if (response.ok) {
      return (await response.json()) as UserType;
    } else {
      return undefined;
    }
  }

  async findAllFunc(): Promise<UserType[] | undefined> {
    const token = sessionStorage.getItem("token");

    if (!token) return;

    const header = new Headers({
      "Content-Type": "application/json",
      authorization: token,
    });

    const options: RequestInit = {
      method: "GET",
      headers: header,
      mode: "cors",
    };

    const response = await fetch("http://localhost:3003/funcionario", options);

    if (response.ok){
        return (await response.json()) as UserType[];
    } else {
      return undefined;
    }
  }
}
