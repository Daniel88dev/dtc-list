import DataRow from "./DataRow.tsx";

const EXAMPLE_DATA = [
  {
    dtc: "P1000",
    description: "Some text",
  },
  {
    dtc: "P2000",
    description: "Additional text",
  },
  {
    dtc: "P3000",
    description: "Example",
  },
];

const DataList = () => {
  return (
    <table className="w-full border-none border-collapse">
      <thead>
        <tr className="text-xl h-20">
          <td className="pl-4">DTC Code</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        {EXAMPLE_DATA.map((dat) => (
          <DataRow
            key={dat.dtc}
            dtc={dat.dtc}
            description={dat.description}
            className="hover:bg-blue-800 even:bg-blue-300 even:dark:hover:bg-blue-800 even:dark:bg-blue-950 h-20"
          />
        ))}
      </tbody>
    </table>
  );
};

export default DataList;
