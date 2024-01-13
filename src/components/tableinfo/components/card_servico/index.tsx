import React, { useState } from "react";
import styles from "./styles.module.css";
import Modal from "@/components/modal";

type Props = {
  data: ServicoTypeReturned[];
};

function CardServico({ data }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [selectedItem, setSelectedItem] = useState<ServicoTypeReturned>();

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
        <Modal setIsOpen={showModalFunc} data={selectedItem} isEditing={true} />
      )}
      <div className={styles.wrapper}>
        {data.map((itemIterator, index) => {
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
              <p className={styles.paragraph}>
                {itemIterator.funcionario?.nome}
              </p>
              <p className={styles.paragraph}>{itemIterator.cliente?.nome}</p>

              <p className={styles.paragraph}>
                {itemIterator.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p className={styles.paragraph}>
                {retStatus(itemIterator.status)}
              </p>
              <p className={styles.paragraph}>
                {itemIterator.descricao ?? "..."}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardServico;
