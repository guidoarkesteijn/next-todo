interface TodoPageProps {
  params: {
    todoId: string;
  };
}

export default function Todo({ params }: TodoPageProps) {
  return "Todo: " + params.todoId;
}
