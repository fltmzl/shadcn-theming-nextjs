"use client";

import ActionsCellIcon from "@/components/table/ActionsCellIcon";
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeadert";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    header: "Status",
    id: "status",
    accessorFn: (data) => data.status,
    cell: ({ row }) => {
      return <p>{row.original.status}</p>;
    }
  },
  {
    accessorKey: "email",
    // header: ({ column }) => {
    //   return (
    //     // <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
    //     <Button variant="ghost" onClick={() => column.toggleSorting()}>
    //       Email
    //       {!column.getIsSorted() && <ChevronsUpDown className="ml-2 h-4 w-4" />}
    //       {column.getIsSorted() === "asc" && (
    //         <ChevronUp className="ml-2 h-4 w-4" />
    //       )}
    //       {column.getIsSorted() === "desc" && (
    //         <ChevronDown className="ml-2 h-4 w-4" />
    //       )}
    //     </Button>
    //   );
    // },
    header: "Email"
  },
  {
    accessorKey: "amount",
    header: "Amount"
  },
  {
    accessorKey: "amount",
    id: "amount_test_custom_header",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    )
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      // action with icons
      return <ActionsCellIcon itemId={item.id} />;

      // action with dropdown
      // return <ActionsCellDropdown itemId={item.id} />;
    }
  }
];
