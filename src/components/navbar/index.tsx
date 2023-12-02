import * as React from "react";
import Input from "../input";
import styles from "./styles.module.css";
import Button from "../button";

export default function Navbar() {
  const [search, setSearch] = React.useState<string>("");

  const handleChengeSearch = (str: string) => {
    setSearch(str);
  };

  const handleChengeLayout = () => {
    console.log("changelayout on redux");
  };

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
      <div>
        <Button
          onClick={handleChengeLayout}
          backgroundColor={"#081225"}
          padding={[8, 50, 8, 50]}
          borderRadius
          color="#B5C2CA"
          fontSize={19}
          fontWeight={500}
        >
          Blocos
        </Button>
      </div>
    </div>
  );
}
