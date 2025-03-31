
import { DataTable } from "@/components/data-table/DataTable";
import { Sidebar } from "@/components/sidebar/Sidebar";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1">
        <DataTable />
      </main>
    </div>
  );
};

export default Index;
