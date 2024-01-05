import * as React from "react";
import styles from "./styles.module.css";
import { IoMdClose } from "react-icons/io";
import Input from "../input";
import { userService } from "@/modules/user/service";
import { clienteService } from "@/modules/cliente/service";
import ComboBox from "../combo_box";

type Props = {
  setIsOpen: (param: boolean) => void;
};

export interface genericCombo {
  id: string;
  nome: string;
}

export default function Modal(props: Props) {
  const [name, setName] = React.useState<string>("");
  const [valor, setValor] = React.useState<string>("");
  const [descricao, setDescricao] = React.useState<string>("");
  const [tempoServico, setTempoServico] = React.useState<string>("");
  const [funcionarios, setFuncionarios] = React.useState<genericCombo[]>([]);
  const [idFuncionarioToSend, setIdFuncionarioToSend] = React.useState<string>("");
  const [clientes, setClientes] = React.useState<genericCombo[]>([]);
  const [idClienteToSend, setIdClienteToSend] = React.useState<string>("");
  const [statusId, setStatusId] = React.useState<string>("");
  const mockedDataStatus: genericCombo[] = [
    { id: "0", nome: "Agendado" },
    { id: "1", nome: "Em atendimento" },
    { id: "2", nome: "Finalizado" },
    { id: "3", nome: "Cancelado" },
  ];

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
    let auxToSave: genericCombo[] = [];
    if (allData) {
      // Mapeando os dados interados
      allData.forEach((item, index) => {
        auxToSave.push({ id: item._id, nome: item.nome });
      });
      // Salvando no estado
      setFuncionarios(auxToSave);
    }
  };

  const getCliente = async () => {
    const allData = await clienteService.findAllClient();
    let auxToSave: genericCombo[] = [];
    if (allData) {
      // Mapeando os dados interados
      allData.forEach((item, index) => {
        auxToSave.push({ id: item._id, nome: item.nome });
      });
      // Salvando no estado
      setClientes(auxToSave);
    }
  };

  React.useEffect(() => {
    getFuncionario();
    getCliente();
  }, []);

  const submitData = async () => {
    
  };

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
              <ComboBox
                data={funcionarios}
                label="Funcionário"
                stateToGetId={setIdFuncionarioToSend}
              />
              <ComboBox
                data={clientes}
                label="Cliente"
                stateToGetId={setIdClienteToSend}
              />
              <ComboBox
                data={mockedDataStatus}
                label="Status"
                stateToGetId={setStatusId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
