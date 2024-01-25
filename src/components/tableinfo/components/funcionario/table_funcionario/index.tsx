import * as React from "react";
import styles from "./styles.module.css";
import { format } from "date-fns";

type Props = {
  data: UserType[];
  atualizar: () => void;
};

export default function TableFuncionario(props: Props) {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<UserType>();

  const showModalFunc = (val: boolean) => {
    setShowModal(val);
  };

  return (
    <>
      {/* {showModal && (
        <ModalFuncionario
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
            <th>E-mail</th>
            <th>CEP</th>
            <th>Rua</th>
            <th>Bairro</th>
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
                  <td>{itemIterator.email}</td>
                  <td>
                    {itemIterator.cep}
                  </td>
                  <td>{itemIterator.rua}</td>
                  <td>{itemIterator.bairro}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
