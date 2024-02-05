import { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState<string>("");

  const ChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  console.log(text);

  return (
    <div className="flex items-center mt-4">
      <h3 className="ml-4 mr-4">Input DTC Code:</h3>
      <input
        type="text"
        className="w-48 h-10 border-blue-700 border-2 rounded-lg text-center text-black"
        placeholder="Input DTC code"
        onChange={ChangeText}
      />
    </div>
  );
};

export default SearchBar;
