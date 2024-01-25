import * as React from "react";
import Input from "../input";
import styles from "./styles.module.css";
import Button from "../button";
import { getLayoutDisposition } from "@/redux/dataSlice";
import { useSelector } from "react-redux";
import { setLayoutState } from "@/redux/dataSlice";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const [search, setSearch] = React.useState<string>("");
  const currentLayoutState: any = useSelector(getLayoutDisposition);
  const dispatch = useDispatch();

  const handleChengeSearch = (str: string) => {
    setSearch(str);
  };

  const handleChengeLayoutCard = () => {
    handleChengeLayout(false);
  };

  const handleChengeLayoutTable = () => {
    handleChengeLayout(true);
  };

  const handleChengeLayout = (val: boolean) => {
    dispatch(setLayoutState(val));
  };
  
  console.log(currentLayoutState);
  
  return (
    <div className={styles.navbarWrapper}>
      <Input
        value={search}
        alt={"search"}
        onChange={handleChengeSearch}
        width={450}
        placeholder="ex: Search"
        labelWeight={700}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "30%",
        }}
      >
        <Button
          onClick={handleChengeLayoutTable}
          backgroundColor={"#081225"}
          padding={[8, 50, 8, 50]}
          borderRadius
          color="#B5C2CA"
          fontSize={19}
          fontWeight={500}
        >
          Table
        </Button>
        <Button
          onClick={handleChengeLayoutCard}
          backgroundColor={"#081225"}
          padding={[8, 50, 8, 50]}
          borderRadius
          color="#B5C2CA"
          fontSize={19}
          fontWeight={500}
        >
          Card
        </Button>
      </div>
    </div>
  );
}
