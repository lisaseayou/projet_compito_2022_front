import { useDispatch, useSelector } from "react-redux";
import { userIncrement } from "../context/actions/user.actions";
import { INCREMENT_BY_AMOUNT } from "./../context/actions";

const Home = () => {
  const state: any = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center w-full h-full ">
      <h1 className="text-6xl">Home Page</h1>
      <div>{state.value}</div>
      <button onClick={() => dispatch(userIncrement())}>+1</button>
      <button onClick={() => dispatch({type: INCREMENT_BY_AMOUNT, payload: 10})}>+10</button>
      <button onClick={() => dispatch({type: INCREMENT_BY_AMOUNT, payload: 5})}>+5</button>
    </div>
  );
};

export default Home;
