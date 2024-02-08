interface DataRowProps {
  dtc: string;
  description: string;
  type: string;
  system: string;
  item: string;
  detail: string;
  className: string;
}

const DataRow = ({
  dtc,
  description,
  type,
  system,
  item,
  detail,
  className,
}: DataRowProps) => {
  return (
    <tr className={className}>
      <td className="pl-4 border-r-2 border-slate-800 pr-2">{dtc}</td>
      <td className="pl-2 pr-2">{description}</td>
      <td className="hidden md:table-cell border-x-2 pl-2 border-slate-800 pr-2">
        {type}
      </td>
      <td className="hidden md:table-cell pl-2 pr-2">{system}</td>
      <td className="hidden md:table-cell border-x-2 pl-2 border-slate-800 pr-2">
        {item}
      </td>
      <td className="hidden md:table-cell pl-2 pr-2">{detail}</td>
    </tr>
  );
};

export default DataRow;
