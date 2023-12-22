import * as React from "react";
import styles from "./styles.module.css";
import { IoMdClose } from "react-icons/io";
import Input from "../input";
import { userService } from "@/modules/user/service";

type Props = {
  setIsOpen: (param: boolean) => void;
};

export default function Modal(props: Props) {
  const [name, setName] = React.useState<string>("");
  const [valor, setValor] = React.useState<string>("");
  const [descricao, setDescricao] = React.useState<string>("");
  const [tempoServico, setTempoServico] = React.useState<string>("");
  const onChangeName = (val: string) => {
    setName(val);
  };
  const onChangeValor = (val: string) => {
    setValor(val);
  };
  const onChangeDescricao = (val: string) => {
    setDescricao(val);
  };
  const onChangeTempoServico = (val: string) => {
    setTempoServico(val);
  };
  const getFuncionario = async () => {
    const allData = await userService.findAll();
    console.log(allData);
  };
  React.useEffect(() => {
    getFuncionario();
  }, []);
  const getCliente = async () => {};
  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button
            className={styles.closerBtn}
            onClick={() => props.setIsOpen(false)}
          >
            <IoMdClose style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.wrappInputs}>
              <Input
                label="Nome"
                labelVersion={2}
                value={name}
                onChange={onChangeName}
                alt={"Input do nome"}
                width={230}
                placeholder={"ex: Renan de Souza"}
                customStyle={{ marginBottom: "0.7rem" }}
              />
              <Input
                label="Valor"
                labelVersion={2}
                value={valor}
                onChange={onChangeValor}
                alt={"Input do valor"}
                width={230}
                placeholder={"ex: Renan de Souza"}
                customStyle={{ marginBottom: "0.7rem" }}
              />
              <Input
                label="Descrição"
                labelVersion={2}
                value={descricao}
                onChange={onChangeDescricao}
                alt={"Input da descrição"}
                width={230}
                placeholder={"ex: Renan de Souza"}
                customStyle={{ marginBottom: "0.7rem" }}
              />
              <Input
                label="Tempo de serviço"
                labelVersion={2}
                value={descricao}
                onChange={onChangeTempoServico}
                alt={"Input tempo de serviço"}
                width={230}
                placeholder={"ex: Renan de Souza"}
                customStyle={{ marginBottom: "0.7rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
