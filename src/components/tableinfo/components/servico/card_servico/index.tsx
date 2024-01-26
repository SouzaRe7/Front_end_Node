import React, { useState } from "react";
import styles from "./styles.module.css";
import ModalServico from "@/components/modals/modal_servico";

type Props = {
  data: ServicoTypeReturned[];
  atualizar: () => void;
};

function CardServico({ data, atualizar }: Props) {
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
        <ModalServico
          setIsOpen={showModalFunc}
          data={selectedItem}
          isEditing={true}
          atualizar={atualizar}
        />
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
