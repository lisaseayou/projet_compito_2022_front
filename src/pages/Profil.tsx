import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import Modal from "../components/Modal";

const Profil = () => {
  const user: any = useSelector((state: any) => state.auth.user);
  const [edition, setEdition] = useState(false);
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
  });

  const handleEdition = () => {
    setEdition(true);
  };

  const handleChange = (e: any) => {
    setForm((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
  };

  const handleClick = async () => {};

  return (
<>
    <div className="pl-20 pr-5">
   
        <div></div>
        <h1 className="flex justify-center text-4xl font-paytone-one text-violet-800 p-2">
        Profil Page
        </h1>
        </div>
        <>
          <div>
            <p className="flex justify-center items-center w-full h-full">
              {user.name}
            </p>
            <p className="flex justify-center items-center w-full h-full">
              {user.email}
            </p>
          </div>
        </>
   
        <div className="flex justify-center items-center m-5">
            <Modal />
        </div>
    </>

  );
};

export default Profil;
