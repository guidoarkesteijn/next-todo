"use client";

import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { LucideLoader, LucidePlus, PlusIcon } from "lucide-react";
import { useOptimistic, useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { addTodo } from "@/actions/actions-todo";
import { useToast } from "../ui/use-toast";

export default function DialogAddTodo() {
  const [isMounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [optimisticAdd, setOptimisticAdd] = useOptimistic(
    false,
    (state, value: boolean) => (state = value),
  );

  useEffect(() => {
    setMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    return (
      <Button disabled={true} variant="default">
        Add
        <PlusIcon />
      </Button>
    );
  }

  async function addTodoElement(formdata: FormData): Promise<void> {
    const title = formdata.get("title") as string;

    setOptimisticAdd(true);

    const result = await addTodo(title);

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
      <DialogTrigger className={buttonVariants({ variant: "default" })}>
        Add
        <PlusIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-3" action={addTodoElement}>
          <h3 className="text-xl">Title</h3>
          <Input name="title" required />
          <h3 className="text-xl"></h3>
          <Button disabled={optimisticAdd}>
            {optimisticAdd ? (
              <>
                <LucideLoader />
              </>
            ) : (
              <>
                Add <LucidePlus />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
