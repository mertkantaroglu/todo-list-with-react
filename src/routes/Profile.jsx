import Header from "../components/Header";
import { useAuthContext } from "../context/AuthContext";
import styles from "../styles/Profile.module.css";

const Profile = () => {
  const { user } = useAuthContext() || {}; // add fallback object to avoid destructuring null

  return (
    <div>
      <Header>
        <h1>Profile.</h1>
      </Header>
      <div className={styles.profile}>
        <h2>
          Hello,
          {user || " Guest"}
          {/* check if user is null */}
        </h2>
      </div>
    </div>
  );
};

export default Profile;
