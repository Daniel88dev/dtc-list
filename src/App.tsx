import Heading from "./components/Heading/Heading.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import DataList from "./components/DataList/DataList.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { test, type dataFormat } from "./assets/test.tsx";
import { useState, useCallback, useEffect } from "react";
import Auth from "./components/Auth/Auth.tsx";

function App() {
  const [loadedData, setLoadedData] = useState<dataFormat[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const filterData = useCallback((text: string): void => {
    const filteredData = test.filter((dataItem) => dataItem.dtc.includes(text));
    const isDataFound = filteredData.length > 0;
    if (isDataFound) {
      setLoadedData(filteredData);
    }
    setIsDataLoaded(isDataFound);
  }, []);

  const HandleAuthentication = useCallback((isAuthenticated: boolean) => {
    setAuthenticated(isAuthenticated);
    localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  }, []);

  useEffect(() => {
    const check = localStorage.getItem("auth");
    if (check === "true") {
      setAuthenticated(true);
    }
  }, []);

  return (
    <>
      <Heading />
      {!authenticated && <Auth authenticate={HandleAuthentication} />}
      {authenticated && <SearchBar onPress={filterData} initialText="" />}
      {authenticated && isDataLoaded && <DataList data={loadedData} />}
      <Footer />
    </>
  );
}

export default App;
