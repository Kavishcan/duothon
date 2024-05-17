import Map from "./Map";
import styles from "./LandingPage.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Map />
    </div>
  );
}

export default AppLayout;
