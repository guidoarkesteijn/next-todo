"use client";

import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { LucideLoader, LucidePencil } from "lucide-react";
import { useOptimistic, useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { updateTodo } from "@/actions/actions-todo";
import { useToast } from "../ui/use-toast";

interface IProps {
  id: string;
  title: string;
}

export default function DialogEditTodo(props: IProps) {
  const [isMounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [optimisticEdit, setOptimisticEdit] = useOptimistic(
    false,
    (state, value: boolean) => (state = value),
  );

  console.log("Title: " + props.title);

  useEffect(() => {
    setMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    return (
      <Button variant="secondary" size="icon" disabled={true}>
        <LucidePencil />
      </Button>
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
      title: "Todo Updated",
      description: "Title: " + title,
    });

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        title="Edit"
        className={buttonVariants({ variant: "secondary", size: "icon" })}
      >
        <LucidePencil />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-3" action={editTodoElement}>
          <h3 className="text-xl">Title</h3>
          <Input name="title" defaultValue={props.title} required />
          <h3 className="text-xl"></h3>
          <Button title="Save" disabled={optimisticEdit}>
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
