import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { DeleteModalConfirmation } from "../modal/DeleteModalConfirmation";
import useModal from "@/hooks/useModal";

type Props<TData> = {
  itemId: string;
  originalItem?: TData;
};

export default function ActionsCellDropdown<TData>({
  itemId,
  originalItem
}: Props<TData>) {
  const {
    isOpen: isDeleteDialogOpen,
    setIsOpen: setIsDeleteDialogOpen,
    openModal,
    closeModal
  } = useModal();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link href={itemId} className="flex items-center w-full">
              <EyeIcon className="mr-2 h-4 w-4" />
              <span>View</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href={`edit/${itemId}`} className="flex items-center w-full">
              <PencilIcon className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="text-destructive focus:text-destructive focus:bg-red-100 cursor-pointer"
            onClick={openModal}
          >
            <Trash2Icon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteModalConfirmation
        idForDelete={itemId}
        closeModal={closeModal}
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      />
    </>
  );
}
