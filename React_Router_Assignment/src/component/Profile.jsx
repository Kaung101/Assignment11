import { useParams } from "react-router-dom";

export default function Profile() {
  const {id} = useParams();

  return <div>The Student ID of user is {id}</div>;
}