import data from "../constants/tabledata";
import DataTable from "./DataTable";

const BiilingHistory = () => {
  return (
    <div className="container mx-auto mt-6 text-[#000]">
      <DataTable data={data} />
    </div>
  );
};

export default BiilingHistory;
