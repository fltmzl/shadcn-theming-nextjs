import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { useState } from "react";

interface Props extends DialogProps {
  idForDelete: string;
  closeModal: () => void;
}

export function DeleteModalConfirmation({
  idForDelete,
  closeModal,
  ...props
}: Props) {
  const handleDeleteItem = () => {
    console.log("Delete item " + idForDelete);
    closeModal();
  };

  return (
    <Dialog {...props}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Confirmation</DialogTitle>
          <DialogDescription>Delete item permanently</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          Are you sure to delete this item? This action will delete item
          permanently.
        </div>
        <DialogFooter>
          <Button
            onClick={handleDeleteItem}
            type="submit"
            variant="destructive"
          >
            Delete
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
