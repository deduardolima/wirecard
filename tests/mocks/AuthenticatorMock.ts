

 interface AuthenticationData {
    id: string;
    email: string;
  }


export class AuthenticatorMock {
    public generateToken = (input: AuthenticationData): string => {
        return "token"
    }

    public getData(token: string) {
        return {
            id: "id_mock",
            email: "diego@email.com"
        }
    }
}