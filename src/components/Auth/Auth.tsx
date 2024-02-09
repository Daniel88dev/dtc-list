import React, { useRef, useState } from "react";
import { Psw } from "../SearchBar/Psw.ts";

interface AuthProps {
  authenticate: (value: boolean) => void;
}
const Auth: React.FC<AuthProps> = ({ authenticate }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [border, setBorder] = useState("border-black");

  const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (inputRef.current && inputRef.current.value === Psw) {
      authenticate(true);
    } else {
      setBorder("border-red-500");
    }
  };

  return (
    <form className="flex flex-col items-center mt-48">
      <h2 className="text-xl">Enter password to use:</h2>
      <input
        type="password"
        ref={inputRef}
        className={`text-black border-2 rounded-lg text-center mt-4 ${border}`}
        placeholder="Enter Password:"
      />
      <button
        onClick={HandleClick}
        className="w-20 h-10 rounded-lg text-center bg-indigo-600 text-white hover:bg-indigo-400 mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default Auth;
