import DataRow from "./DataRow.tsx";
import { type dataFormat } from "../../assets/test.tsx";
import { FC } from "react";

export type DataListProps = {
  data: dataFormat[];
};

const DataList: FC<DataListProps> = ({ data }) => {
  return (
    <table className="w-full border-none border-collapse mt-4">
      <thead>
        <tr className="text-xl h-20 bg-indigo-400 dark:bg-gray-900">
          <td className="pl-4 border-r-2 border-slate-800 pr-2">DTC Code</td>
          <td className="pl-2 pr-2">Description</td>
          <td className="hidden md:table-cell border-x-2 pl-2 border-slate-800 pr-2">
            Type
          </td>
          <td className="hidden md:table-cell pl-2 pr-2">System</td>
          <td className="hidden md:table-cell border-x-2 pl-2 border-slate-800 pr-2">
            Item
          </td>
          <td className="hidden md:table-cell pl-2 pr-2">Detail</td>
        </tr>
      </thead>
      <tbody>
        {data.map((dat: dataFormat) => (
          <DataRow
            key={dat.dtc}
            dtc={dat.dtc}
            description={dat.description}
            type={dat.type}
            system={dat.system}
            item={dat.item}
            detail={dat.detail}
            className="hover:bg-indigo-500 hover:dark:bg-gray-950 dark:even:bg-gray-900 even:bg-indigo-400 h-20"
          />
        ))}
      </tbody>
    </table>
  );
};

export default DataList;
