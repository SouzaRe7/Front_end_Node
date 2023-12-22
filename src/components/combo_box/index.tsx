import * as React from "react";
import styles from "./styles.module.css";

interface keyValueIdNome {
  id: string;
  name: string;
}

type Props = {
  data: keyValueIdNome[];
  label: string;
};

export default function ComboBox(props: Props) {
  return (
    <select>
      {props.data.map((itemIterator, index) => (
        <option>{itemIterator.name}</option>
      ))}
    </select>
  );
}
