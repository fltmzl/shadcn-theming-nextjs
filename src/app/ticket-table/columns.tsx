"use client";

import ActionsCellIcon from "@/components/table/ActionsCellIcon";
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeadert";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type Ticket = {
  id: string;
  refNum: string;
  status: "open" | "waiting" | "closed";
  assignedTo: string;
};

export const columns: ColumnDef<Ticket>[] = [
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
    header: "Ref Number",
    id: "refNum",
    accessorFn: (data) => data.refNum,
    cell: ({ row }) => {
      return <p>{row.original.refNum}</p>;
    }
  },
  {
    header: "Status",
    accessorKey: "status"
  },
  {
    header: "Assigned To",
    accessorKey: "assignedTo"
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
