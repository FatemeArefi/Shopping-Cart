import styles from "./Loader.module.css";
import { RotatingLines } from "react-loader-spinner";
function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="3"
        strokeColor="#0e0be1f0"
      />
    </div>
  );
}

export default Loader;
