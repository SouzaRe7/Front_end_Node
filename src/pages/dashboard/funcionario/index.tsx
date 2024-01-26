import Sidebar from "@/components/sidebar";
import { SidebarType } from "@/components/sidebar";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import React from "react";
import Navbar from "@/components/navbar";
import TableInfo, { typeTable } from "@/components/tableinfo";
import Graphs from "@/components/graphs";

function Funcionario() {
  const router = useRouter();

  React.useEffect(() => {
    const loggedInfo = sessionStorage.getItem("user_id");
    if (!loggedInfo) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles.containerPage}>
      <Sidebar title="Funcionários" type={SidebarType.funcionario}/>
      <div style={{ width: "100%" }}>
        <Navbar />
        <TableInfo type={typeTable.funcionario} />
        <Graphs />
      </div>
    </div>
  );
}

export default Funcionario;
