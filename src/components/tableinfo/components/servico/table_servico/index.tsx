import * as React from "react";
import styles from "./styles.module.css";
import ModalServico from "@/components/modals/modal_servico";

type Props = {
  data: ServicoTypeReturned[];
  atualizar: () => void;
};

export default function TableServico(props: Props) {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<ServicoTypeReturned>();
  
  const retStatus = (val: number): string => {
    switch (val) {
      case 0:
        return "Agendado";
      case 1:
        return "Em atendimento";
      case 2:
        return "Finalizado";
      case 3:
        return "Cancelado";
      default:
        return "";
    }
  };

  const showModalFunc = (val: boolean) => {
    setShowModal(val);
  };

  return (
    <>
      {showModal && (
        <ModalServico
          setIsOpen={showModalFunc}
          data={selectedItem}
          isEditing={true}
          atualizar={props.atualizar}
        />
      )}
      <div style={{ height: "200px" }}>
        <table className={styles.tableContainer}>
          <thead>
            <th>Nome</th>
            <th>Funcionario</th>
            <th>Cliente</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Descrição</th>
          </thead>
          <tbody>
            {props.data.map((itemIterator, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    setSelectedItem(itemIterator);
                    setShowModal(true);
                  }}
                >
                  <td>{itemIterator.nome}</td>
                  <td>{itemIterator.funcionario?.nome}</td>
                  <td>{itemIterator.cliente?.nome}</td>
                  <td>
                    {itemIterator.valor.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td>{retStatus(itemIterator.status)}</td>
                  <td>{itemIterator.descricao ?? "..."}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
