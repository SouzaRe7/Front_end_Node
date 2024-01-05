import * as React from "react";
import styles from "./styles.module.css";
import { genericCombo } from "../modal";

type Props = {
  data: genericCombo[];
  label: string;
  stateToGetId: React.Dispatch<React.SetStateAction<string>>;
};

export default function ComboBox(props: Props) {
  return (
    <div className={styles.container}>
      <label>{props.label}</label>
      <select onChange={(e) => props.stateToGetId(e.target.value)}>
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
