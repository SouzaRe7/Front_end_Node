import * as React from "react";
import Sidebar from "@/components/sidebar";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import TableInfo, { typeTable } from "@/components/tableinfo";
import Graphs from "@/components/graphs";
import { SidebarType } from "@/components/sidebar";

export default function Dashboard() {
  const router = useRouter();

  React.useEffect(() => {
    const loggedInfo = sessionStorage.getItem("user_id");
    if (!loggedInfo) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles.containerPage}>
      <Sidebar title="Serviços" type={SidebarType.servico}/>
      <div style={{ width: "100%" }}>
        <Navbar />
        <TableInfo type={typeTable.servico} />
        <Graphs />
      </div>
    </div>
  );
}
