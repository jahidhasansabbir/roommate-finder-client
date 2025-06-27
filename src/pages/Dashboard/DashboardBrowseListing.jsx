import { useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext/GeneralContext";
import TableRow from "../../components/DashboardBrowseListing/TableRow";

const DashboardBrowseListing = () => {
  const { data, isLoading } = useContext(GeneralContext);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <p className="text-lg text-gray-400 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-11/12 mx-auto shadow-2xl ring-1 ring-base-100 ring-opacity-30 backdrop-blur-md bg-base-200 rounded-lg">
      <table className="text-sm sm:text-base w-full border-separate border-spacing-0 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-600 shadow-md">
            <th className="px-4 sm:px-6 py-4 text-left font-semibold text-white uppercase rounded-tl-lg">
              Title
            </th>
            <th className="px-4 sm:px-6 py-4 text-left font-semibold text-white uppercase">
              Location
            </th>
            <th className="px-4 sm:px-6 py-4 text-left font-semibold text-white uppercase">
              Rent
            </th>
            <th className="px-4 sm:px-6 py-4 text-right font-semibold text-white uppercase rounded-tr-lg">
              {/* For See More or Action buttons */}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-base-200">
          {data?.map((item, index) => (
            <TableRow key={item.id || index} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardBrowseListing;
