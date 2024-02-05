interface DataRowProps {
  dtc: string;
  description: string;
  className: string;
}

const DataRow = ({ dtc, description, className }: DataRowProps) => {
  return (
    <tr className={className}>
      <td className="pl-4 hover:underline hover:cursor-pointer">{dtc}</td>
      <td>{description}</td>
    </tr>
  );
};

export default DataRow;
