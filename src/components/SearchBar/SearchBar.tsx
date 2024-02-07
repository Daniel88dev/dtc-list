import { ChangeEvent, useState } from "react";

const SearchBar = ({
  onPress,
  initialText = "",
}: {
  onPress: (text: string) => void;
  initialText?: string;
}) => {
  const [searchText, setSearchText] = useState<string>(initialText);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handlePress = () => {
    onPress(searchText);
  };

  return (
    <div className="flex items-center mt-4">
      <h3 className="ml-4 mr-4">Input DTC Code:</h3>
      <input
        type="text"
        className="w-48 h-10 border-blue-700 border-2 rounded-lg text-center text-black"
        placeholder="Input DTC code"
        onChange={handleTextChange}
      />
      <button onClick={handlePress}>Load</button>
    </div>
  );
};

export default SearchBar;
