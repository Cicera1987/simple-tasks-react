import { useForm } from "react-hook-form";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import type { TaskFormValues } from "../../types/types";


interface TaskFormProps {
  defaultValues?: TaskFormValues;
  onSubmit: (data: TaskFormValues) => void;
  onCancel?: () => void;
}

export const TaskForm = ({
  defaultValues,
  onSubmit,
  onCancel,
}: TaskFormProps) => {
  const { register, handleSubmit, reset } = useForm<TaskFormValues>({
    defaultValues,
  });

  const submitHandler = (data: TaskFormValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-2"
    >
      <Input {...register("title", { required: true })} placeholder="Título" />
      <Textarea
        {...register("description", { required: true })}
        placeholder="Descrição"
      />
      <div className="flex gap-2 mt-2">
        <Button type="submit">Salvar</Button>
        {onCancel && (
          <Button type="button" onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </div>
    </form>
  );
};
