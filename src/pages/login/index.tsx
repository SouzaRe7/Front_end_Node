import * as React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Login(){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.conteainerLogin}>
                <div className={styles.containerLogoTitle}>
                    <Image src={"/logo_service_01.png"} alt="logo do login" width={70} height={70}/>
                    <h1 className={styles.titleService}>Services</h1>
                </div>
                <div className={styles.containerInputs}>
                    {/* <Input />
                    <Input /> */}
                </div>
            </div>
        </div>
    );
}