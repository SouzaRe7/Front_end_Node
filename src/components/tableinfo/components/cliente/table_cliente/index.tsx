import * as React from "react";
import styles from "./styles.module.css";
import { format } from "date-fns";

type Props = {
  data: ClienteType[];
  atualizar: () => void;
};

export default function TableCliente(props: Props) {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<ClienteType>();

  const showModalFunc = (val: boolean) => {
    setShowModal(val);
  };

  return (
    <>
      {/* {showModal && (
        <ModalCliente
          setIsOpen={showModalFunc}
          data={selectedItem}
          isEditing={true}
          atualizar={props.atualizar}
        />
      )} */}
      <div style={{ height: "200px" }}>
        <table className={styles.tableContainer}>
          <thead>
            <th>Nome</th>
            <th>Data nascimento</th>
            <th>CEP</th>
            <th>Rua</th>
            <th>Bairro</th>
            <th>Observação</th>
          </thead>
          <tbody>
            {props.data.map((itemIterator, index) => {
                const dataNascimentoFormatada = format(new Date(itemIterator.dataNascimento), 'dd/MM/yyyy');
              return (
                <tr
                  key={index}
                  onClick={() => {
                    setSelectedItem(itemIterator);
                    setShowModal(true);
                  }}
                >
                  <td>{itemIterator.nome}</td>
                  <td>{dataNascimentoFormatada}</td>
                  <td>
                    {itemIterator.cep}
                  </td>
                  <td>{itemIterator.rua}</td>
                  <td>{itemIterator.bairro}</td>
                  <td>{itemIterator.obs ?? "..."}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
