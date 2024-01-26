import React, { useState } from "react";
import styles from "./styles.module.css";
import { format } from "date-fns";
import ModalFuncionario from "@/components/modals/modal_funcionario";

type Props = {
  data: UserType[];
  atualizar: () => void;
};

function CardFuncionario({ data, atualizar }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [selectedItem, setSelectedItem] = useState<UserType>();

  const showModalFunc = (val: boolean) => {
    setShowModal(val);
  };

  return (
    <>
      {showModal && (
        <ModalFuncionario
          setIsOpen={showModalFunc}
          data={selectedItem}
          isEditing={true}
          atualizar={atualizar}
        />
      )}
      <div className={styles.wrapper}>
        {data.map((itemIterator, index) => {
          const dataNascimentoFormatada = format(
            new Date(itemIterator.dataNascimento),
            "dd/MM/yyyy"
          );
          return (
            <div
              key={index}
              className={styles.card}
              onClick={() => {
                setSelectedItem(itemIterator);
                setShowModal(true);
              }}
            >
              <p className={styles.paragraph}>{itemIterator.nome}</p>
              <p className={styles.paragraph}>{dataNascimentoFormatada}</p>
              <p className={styles.paragraph}>{itemIterator.email}</p>
              <p className={styles.paragraph}>{itemIterator.cep} </p>
              <p className={styles.paragraph}>{itemIterator.rua}</p>
              <p className={styles.paragraph}>{itemIterator.bairro}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardFuncionario;
