"use client";

import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { LucideDisc, LucideDisc2, LucideLoader, LucidePencil, LucidePlus, LucideSave, PencilIcon, PlusIcon } from "lucide-react";
import { experimental_useOptimistic, useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import { updateTodo } from "@/actions/actions-todo";
import { useToast } from "../ui/use-toast";

interface IProps
{
  id : string
  title : string
}

export default function DialogEditTodo(props : IProps) {
  const [title] = useState(props.title);
  const [isMounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [optimisticEdit, setOptimisticEdit] = experimental_useOptimistic(
    false,
    (state, value: boolean) => (state = value),
  );

  useEffect(() => {
    setMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    return (
      <Skeleton
        className={buttonVariants({ variant: "ghost", size: "icon" }) + " text-muted"}
      >
        Add
        <PlusIcon className="bg-muted" />
      </Skeleton>
    );
  }

  async function editTodoElement(formdata: FormData): Promise<void> {
    const title = formdata.get("title") as string;

    setOptimisticEdit(true);

    const result = await updateTodo(props.id, title);

    if (!result) {
      return;
    }

    toast({
      title: "Todo Added",
      description: "Title: " + title,
    });

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={buttonVariants({ variant: "secondary", size: "icon" })}>
        <PencilIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-3" action={editTodoElement}>
          <h3 className="text-xl">Title</h3>
          <Input name="title" defaultValue={title} required />
          <h3 className="text-xl"></h3>
          <Button disabled={optimisticEdit}>
            {optimisticEdit ? (
              <>
                <LucideLoader />
              </>
            ) : (
              <>
                Save <LucidePencil />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
