import PublicHOC from "../components/publicHOC";

export default function Home(props) {
  return (
    <PublicHOC user={props.user}>
      <div></div>
    </PublicHOC>
  );
}
