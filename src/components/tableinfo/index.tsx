import * as React from "react";
import styles from "./styles.module.css";
import Button from "../button";
import TableServico from "./components/servico/table_servico";
import ModalServico from "../modals/modal_servico";
import { useSelector } from "react-redux";
import { getLayoutDisposition } from "@/redux/dataSlice";
import { servicoService } from "@/modules/service_module/service";
import { clienteService } from "@/modules/cliente/service";
import { userService } from "@/modules/user/service";
import CardServico from "./components/servico/card_servico";
import CardFuncionario from "./components/funcionario/card_funcionario";
import TableFuncionario from "./components/funcionario/table_funcionario";
import TableCliente from "./components/cliente/table_cliente";
import CardCliente from "./components/cliente/card_cliente";

export enum typeTable {
  servico = "servico",
  funcionario = "funcionario",
  cliente = "cliente",
}

type Props = {
  type: typeTable;
};

export default function TableInfo(props: Props) {
  const [openModal, setOpenModal] = React.useState<boolean>();
  const currentLayoutState: any = useSelector(getLayoutDisposition);

  const [clienteData, setClienteData] = React.useState<ClienteType[]>([]);
  const [funcionarioData, setFuncionarioData] = React.useState<UserType[]>([]);
  const [servicoData, setServicoData] = React.useState<ServicoTypeReturned[]>(
    []
  );
  const [atualizar, setAtualizar] = React.useState<boolean>(false);

  const getService = async () => {
    const servico = await servicoService.getAllService();

    if (servico && servico.length > 0) {
      servico.reverse();
      setServicoData(servico);
    }
  };

  const getCliente = async () => {
    const cliente = await clienteService.findAllClient();

    if (cliente && cliente.length > 0) {
      setClienteData(cliente);
    }
  };

  const getUser = async () => {
    const user = await userService.findAll();

    if (user && user.length > 0) {
      user.reverse();
      setFuncionarioData(user);
    }
  };

  React.useEffect(() => {
    switch (props.type) {
      case typeTable.servico:
        getService();
        break;
      case typeTable.cliente:
        getCliente();
        break;
      case typeTable.funcionario:
        getUser();
        break;
    }
  }, [atualizar]);

  const atualizandoRender = () => {
    setAtualizar(!atualizar);
  };

  switch (props.type) {
    case typeTable.servico:
      const handleAddServico = (value: boolean) => {
        setOpenModal(value);
      };
      return (
        <>
          {openModal ? (
            <ModalServico
              setIsOpen={handleAddServico}
              atualizar={atualizandoRender}
            />
          ) : (
            <></>
          )}
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <div>
                <p className={styles.title}>Serviços cadastrados</p>
                <p>{servicoData.length} cadastrados</p>
              </div>
              <Button
                onClick={() => handleAddServico(true)}
                backgroundColor={"#081225"}
                padding={[8, 50, 8, 50]}
                borderRadius
                color="#B5C2CA"
                fontSize={19}
                fontWeight={500}
              >
                Cadastrar Serviço
              </Button>
            </div>
            {currentLayoutState ? (
              <TableServico data={servicoData} atualizar={atualizandoRender} />
            ) : (
              <CardServico data={servicoData} atualizar={atualizandoRender} />
            )}
          </div>
        </>
      );
    case typeTable.cliente:
      const handleAddCliente = (value: boolean) => {
        setOpenModal(value);
      };
      return (
        <>
          {openModal ? (
            <ModalServico
              setIsOpen={handleAddCliente}
              atualizar={atualizandoRender}
            />
          ) : (
            <></>
          )}
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <div>
                <p className={styles.title}>Clientes cadastrados</p>
                <p>{clienteData.length} cadastrados</p>
              </div>
              <Button
                onClick={() => handleAddServico(true)}
                backgroundColor={"#081225"}
                padding={[8, 50, 8, 50]}
                borderRadius
                color="#B5C2CA"
                fontSize={19}
                fontWeight={500}
              >
                Cadastrar Cliente
              </Button>
            </div>
            {currentLayoutState ? (
              <TableCliente
                data={clienteData}
                atualizar={atualizandoRender}
              />
            ) : (
              <CardCliente
                data={clienteData}
                atualizar={atualizandoRender}
              />
            )}
          </div>
        </>
      );
    case typeTable.funcionario:
      const handleAddFuncionario = (value: boolean) => {
        setOpenModal(value);
      };
      return (
        <>
          {openModal ? (
            <ModalServico
              setIsOpen={handleAddFuncionario}
              atualizar={atualizandoRender}
            />
          ) : (
            <></>
          )}
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <div>
                <p className={styles.title}>Funcionários cadastrados</p>
                <p>{funcionarioData.length} cadastrados</p>
              </div>
              <Button
                onClick={() => handleAddServico(true)}
                backgroundColor={"#081225"}
                padding={[8, 50, 8, 50]}
                borderRadius
                color="#B5C2CA"
                fontSize={19}
                fontWeight={500}
              >
                Cadastrar Funcionário
              </Button>
            </div>
            {currentLayoutState ? (
              <TableFuncionario
                data={funcionarioData}
                atualizar={atualizandoRender}
              />
            ) : (
              <CardFuncionario
                data={funcionarioData}
                atualizar={atualizandoRender}
              />
            )}
          </div>
        </>
      );
  }
}
