"use client";

import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  PaginationState,
  SortingState,
  ColumnFiltersState,
  VisibilityState
} from "@tanstack/react-table";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { DataTablePagination } from "@/components/table/DataTablePagination";
import { DataTableViewOptions } from "@/components/table/DataTableViewOptions";
import DataTableMain from "@/components/table/DataTableMain";
import ListToolbar from "./ListToolbar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  console.log({ rowSelection });

  const table = useReactTable({
    // main table
    data,
    columns,
    // rowCount: 10, // total data/row, used for Server side pagination
    // pageCount: 2, // total page, used for Server side pagination
    getCoreRowModel: getCoreRowModel(),

    // pagination
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    manualPagination: false, // default: false (set "true" to use server side pagination)

    // sorting
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    manualSorting: false, // default: false (set "true" to use server side sorting)

    // filter/search column
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    manualFiltering: false, // default: false (set "true" to use server side filtering)

    // column visibilty
    onColumnVisibilityChange: setColumnVisibility,

    // row selection
    onRowSelectionChange: setRowSelection,

    state: {
      pagination,
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <div className="flex items-center gap-2">
          {table.getFilteredSelectedRowModel().rows.length ? (
            <ListToolbar />
          ) : (
            <DataTableViewOptions table={table} />
          )}
        </div>
      </div>

      <div className="rounded-md border">
        <DataTableMain table={table} columns={columns} />
      </div>

      <div className="mt-5">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
