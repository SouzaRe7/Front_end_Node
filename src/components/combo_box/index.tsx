import * as React from "react";
import styles from "./styles.module.css";
import { genericCombo } from "../modals/modal_servico";

type Props = {
  data: genericCombo[];
  label: string;
  stateToGetId: React.Dispatch<React.SetStateAction<string>>;
  currentValue?: string;
};

export default function ComboBox(props: Props) {
  const [chooseData, setChooseData] = React.useState<string>("");
  return (
    <div className={styles.container}>
      <label>{props.label}</label>
      <select
        value={props.data.find((iten) => iten.id === props.currentValue)?.nome}
        onChange={(e) => {
          props.stateToGetId(e.target.value);
        }}
      >
        <option selected disabled hidden>
          Selecione
        </option>
        {props.data.map((itemIterator, index) => (
          <option
            key={index}
            value={itemIterator.id}
            onClick={() => props.stateToGetId(itemIterator.id)}
          >
            {itemIterator.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
