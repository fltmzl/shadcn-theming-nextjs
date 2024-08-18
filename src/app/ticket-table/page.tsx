import { DataTable } from "@/components/table/DataTable";
import { Ticket, columns } from "./columns";

const tickets: Ticket[] = [
  {
    id: "728ed52f",
    status: "open",
    refNum: "813750751-136163",
    assignedTo: "CS Internal"
  },
  {
    id: "489e1d42",
    status: "closed",
    refNum: "813750751-136163",
    assignedTo: "CS Internal"
  },
  {
    id: "489e1d42",
    status: "closed",
    refNum: "813750751-136163",
    assignedTo: "CS Internal"
  },
  {
    id: "489e1d42",
    status: "open",
    refNum: "813750751-136163",
    assignedTo: "CS Internal"
  },
  {
    id: "489e1d42",
    status: "waiting",
    refNum: "813750751-136163",
    assignedTo: "CS Internal"
  },
  {
    id: "489e1d42",
    status: "waiting",
    refNum: "813750751-136163",
    assignedTo: "CS Internal"
  },
  {
    id: "489e1d42",
    status: "waiting",
    refNum: "813750751-136163",
    assignedTo: "CS Internal"
  },
  {
    id: "489e1d42",
    status: "waiting",
    refNum: "813750751-136163",
    assignedTo: "CS Internal"
  },
  {
    id: "489e1d42",
    status: "open",
    refNum: "813750751-136163",
    assignedTo: "Admin Internal"
  },
  {
    id: "489e1d42",
    status: "open",
    refNum: "813750751-136163",
    assignedTo: "Admin Internal"
  },
  {
    id: "489e1d42",
    status: "open",
    refNum: "813750751-136163",
    assignedTo: "Admin Internal"
  },
  {
    id: "489e1d42",
    status: "open",
    refNum: "813750751-136163",
    assignedTo: "Admin Internal"
  }
  // ...
];
const getData = async (): Promise<Ticket[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tickets);
    }, 1000);
  });
};

export default async function DataTablePage() {
  const data = await getData();

  return (
    <div className="container py-10">
      <h1 className="mb-10">Ticket Table</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
