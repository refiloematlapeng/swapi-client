import UserProfile from '../components/UserProfile';
import { useHistory } from "react-router-dom";

const Details: React.FC<{}> = () => {
  const { location } = useHistory();
  return <UserProfile {...location} />;
}

export default Details;
