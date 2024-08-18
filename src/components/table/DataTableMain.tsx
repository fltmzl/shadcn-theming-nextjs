import React from "react";
import {
  Table as TableType,
  flexRender,
  ColumnDef
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import clsx from "clsx";
import { ChevronsUpDown, ChevronUp, ChevronDown } from "lucide-react";

type Props<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  table: TableType<TData>;
};

export default function DataTableMain<TData, TValue>({
  table,
  columns
}: Props<TData, TValue>) {
  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : (
                    <>
                      <div
                        className={clsx("flex items-center", {
                          "cursor-pointer select-none":
                            header.column.getCanSort()
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <span>
                          {/* Initial Sort Icon  */}
                          {/* Only show when header is Sortable via "enableSorting" in table column definition */}
                          {header.column.getCanSort() &&
                            !header.column.getIsSorted() && (
                              <ChevronsUpDown className="ml-2 h-4 w-4" />
                            )}

                          {/* Sort Asc Icon */}
                          {header.column.getIsSorted() === "asc" && (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          )}

                          {/* Sort Desc Icon */}
                          {header.column.getIsSorted() === "desc" && (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          )}
                        </span>
                      </div>
                    </>
                  )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
