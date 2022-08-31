import { useSelector } from "react-redux";

const Profil = () => {

  const user: any = useSelector((state: any) => state.auth.user);
  // const state: any = useSelector((state: any) => state.user);
  // const dispatch = useDispatch();
  console.log(user)
    return (
      <>
      <div className="flex justify-center items-center w-full h-full ">
       <p className="text-6xl">Profil Page</p>
       </div><div>
        <p className="flex justify-center items-center w-full h-full">{user.name}</p>
        <p className="flex justify-center items-center w-full h-full">{user.email}</p>
      </div>
      </>
    );
  };
  
  export default Profil;
  