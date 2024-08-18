import React from "react";
import { Button } from "@/components/ui/button";
import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { DeleteModalConfirmation } from "../modal/DeleteModalConfirmation";
import useModal from "@/hooks/useModal";

type Props<TData> = {
  itemId: string;
  originalItem?: TData;
};

export default function ActionsCellIcon<TData>({
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
      <div className="flex gap-1">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`${itemId}`} className="flex items-center">
            <EyeIcon className="size-4" />
          </Link>
        </Button>

        <Button variant="ghost" size="icon" asChild>
          <Link href={`edit/${itemId}`} className="">
            <PencilIcon className="size-4" />
          </Link>
        </Button>

        <Button variant="ghost" size="icon">
          <Trash2Icon className="size-4" onClick={openModal} />
        </Button>
      </div>

      <DeleteModalConfirmation
        idForDelete={itemId}
        closeModal={closeModal}
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      />
    </>
  );
}
