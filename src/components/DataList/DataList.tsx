import DataRow from "./DataRow.tsx";
import { type dataFormat } from "../../assets/test.tsx";

export type DataListProps = {
  data: dataFormat[];
};

const DataList: React.FC<DataListProps> = ({ data }) => {
  return (
    <table className="w-full border-none border-collapse">
      <thead>
        <tr className="text-xl h-20">
          <td className="pl-4">DTC Code</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        {data.map((dat: dataFormat) => (
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
