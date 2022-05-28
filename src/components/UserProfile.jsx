import userStyles from "/sass/modules/_User.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

export default function UserProfile(props) {
  return <p>welcome {props.user}</p>;
}
