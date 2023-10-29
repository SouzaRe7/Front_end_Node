import * as React from "react";
import Input from "@/components/input";
import styles from "./styles.module.css";
import Image from "next/image";
import Button from "@/components/button";
import { AuthService } from "@/modules/auth/service";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

export default function Login() {
  const [email, setEmail] = React.useState<string>("");
  const [senha, setSenha] = React.useState<string>("");
  const router = useRouter();

  const valorEmail = (str: string) => {
    setEmail(str);
  };
  const valorSenha = (str: string) => {
    setSenha(str);
  };

  React.useEffect(() => {
    const loggedInfo = sessionStorage.getItem("loggedin");
    if (loggedInfo === "true") {
      router.push("/dashboard");
    }
  }, []);

  const loginFunc = React.useCallback(async () => {
    const loginInfo = await AuthService.Login({ email: email, senha: senha });
    if (loginInfo) {
      const decodingToken: TokenDecode = jwtDecode(loginInfo.token);
      sessionStorage.setItem("loggedin", "true");
      sessionStorage.setItem("email", loginInfo.email);
      sessionStorage.setItem("token", loginInfo.token);
      sessionStorage.setItem("user_id", decodingToken.id);
      router.push("/dashboard");
    }
  }, [email, senha]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerLogin}>
        <div className={styles.containerLogoTitle}>
          <Image
            src={"/logo_service_01.png"}
            alt="logo do login"
            width={70}
            height={70}
          />
          <h1 className={styles.titleService}>Services</h1>
        </div>
        <div className={styles.containerInputs}>
          <Input
            label="Email"
            value={email}
            onChange={valorEmail}
            alt={"Input do email"}
            width={450}
            labelWeight={700}
            placeholder={"ex: exemplo@gmail.com"}
          />
          <Input
            label="Senha"
            value={senha}
            onChange={valorSenha}
            alt={"Input do senha"}
            width={450}
            type="password"
            customStyle={{ marginTop: "2rem" }}
            labelWeight={700}
          />
        </div>
        <div className={styles.containerBtnForgetPass}>
          <Button
            onClick={loginFunc}
            backgroundColor="#081225"
            padding={[13, 75, 13, 75]}
            borderRadius
            color="#B5C2CA"
            fontSize={19}
            fontWeight={500}
          >
            Fazer Login
          </Button>
          <p className={styles.forgetPass}>Esqueceu sua senha?</p>
        </div>
      </div>
    </div>
  );
}
