import { ChangeEvent, useState, useEffect, useCallback } from "react";

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

  const handlePress = useCallback(() => {
    const upper = searchText.toUpperCase();
    onPress(upper);
  }, [onPress, searchText]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        // Your logic for handling Enter key press
        handlePress();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [handlePress]);

  return (
    <div className="flex items-center mt-4">
      <h3 className="ml-4 mr-4">Input DTC Code:</h3>
      <input
        type="text"
        className="w-48 h-10 border-indigo-600 border-2 rounded-lg text-center text-black"
        placeholder="Input DTC code"
        onChange={handleTextChange}
      />
      <button
        className="w-20 h-10 rounded-lg text-center bg-indigo-600 text-white ml-4 hover:bg-indigo-400 mr-8"
        onClick={handlePress}
      >
        Load
      </button>
    </div>
  );
};

export default SearchBar;
