import userStyles from "/sass/modules/_User.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

export default function UserProfile(props) {
  return (
    <div className={userStyles.UserPage}>
      <h3>Welcome, {props.user}</h3>
      <p>You still haven't purchased any tickets</p>
      <a href="/tickets" className={generalStyles.cta}>
        Get tickets
      </a>
    </div>
  );
}
