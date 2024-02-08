import Heading from "./components/Heading/Heading.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import DataList from "./components/DataList/DataList.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { test, type dataFormat } from "./assets/test.tsx";
import { useState, useCallback } from "react";

function App() {
  const [loadedData, setLoadedData] = useState<dataFormat[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  const filterData = useCallback((text: string): void => {
    const filteredData = test.filter((dataItem) => dataItem.dtc.includes(text));
    const isDataFound = filteredData.length > 0;
    if (isDataFound) {
      setLoadedData(filteredData);
    }

    setIsDataLoaded(isDataFound);
  }, []);

  return (
    <>
      <Heading />
      <SearchBar onPress={filterData} initialText="" />
      {isDataLoaded && <DataList data={loadedData} />}
      <Footer />
    </>
  );
}

export default App;
