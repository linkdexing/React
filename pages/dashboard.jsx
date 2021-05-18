import PrivateHOC from "../components/PrivateHOC";

const DashboardPage = (props) => {
  return (
    <PrivateHOC user={props.user}>
      <div>dashboard</div>
    </PrivateHOC>
  );
};

export default DashboardPage;
