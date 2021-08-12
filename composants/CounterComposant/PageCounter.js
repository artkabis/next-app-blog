import { useDispatch } from "react-redux";
import useInterval from "../../lib/useInterval";
import Clock from "./Clock";
import Counter from "./Counter";
import Nav from "./Nav";

export default function PageCounter() {
  const dispatch = useDispatch();

  // Tick the time every second
  useInterval(() => {
    dispatch({
      type: "TICK",
      light: true,
      lastUpdate: Date.now(),
    });
  }, 1000);

  return (
    <>
      <Nav />
      <Clock />
      <Counter />
    </>
  );
}
