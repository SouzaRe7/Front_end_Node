import * as React from "react";
import styles from "./styles.module.css";

type Props = {
  label?: string;
  placeholder?: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  alt: string;
  onChange: (currentVal: string) => void;
  labelColor?: string;
  width?: number;
  height?: number;
  labelWeight?: number;
  backgroudColor?: string;
  customStyle?: React.CSSProperties | undefined;
  labelVersion?: number;
};

export default function Input(props: Props) {
  const style = {
    width: props.width,
    height: props.height,
    ...props.customStyle,
  };
  const decideLabel = (typeOffLabel: number): string => {
    switch (typeOffLabel) {
      case 1:
        return styles.versionOne;
      case 2:
        return styles.versionTwo;
      default:
        return "";
    }
  };
  return (
    <div className={styles.containerInput} style={{ ...style }}>
      {props.label ? (
        <label
          style={props.labelVersion ? {} : {
            color: props.labelColor ?? "#081225",
            fontWeight: props.labelWeight ?? "normal",
          }}
          className={
            props.labelVersion ? decideLabel(props.labelVersion) : styles.label
          }
        >
          {props.label}
        </label>
      ) : (
        <></>
      )}

      <input
        type={props.type ? props.type : "text"}
        value={props.value}
        alt={props.alt}
        onChange={(ev) => props.onChange(ev.target.value)}
        className={styles.input}
        style={{ backgroundColor: props.backgroudColor }}
        placeholder={props.placeholder ?? ""}
      />
    </div>
  );
}
