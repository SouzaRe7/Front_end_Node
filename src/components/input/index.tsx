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
    customStyle?: React.CSSProperties|undefined; 
};

export default function Input(props: Props){
    const style = {
        width: props.width,
        height: props.height,
        ...props.customStyle,
    };
    return (
        <div>
            {/* {props.label ? <label style={{color: props.labelColor ?? "#081225", fontWeight: props.labelWeight ?? "normal",}} className={style.label}>{props.label}</label> : <></>} */}
            
            {props.label ? <label style={{color: props.labelColor ?? "#081225", fontWeight: props.labelWeight ?? "normal",}} >{props.label}</label> : <></>}

            <input type={props.type ? props.type : "text"} value={props.value} alt={props.alt} onChange={(ev) => props.onChange(ev.target.value)} />
        </div>
    );
}