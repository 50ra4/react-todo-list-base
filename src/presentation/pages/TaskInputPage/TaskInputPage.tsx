import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  taskInputSchema,
  TaskInput,
  TASK_INPUT_DEFAULT_VALUE,
} from 'src/schema/task';

function TaskInputPage() {
  const { handleSubmit } = useForm<TaskInput>({
    resolver: zodResolver(taskInputSchema),
    defaultValues: TASK_INPUT_DEFAULT_VALUE,
  });

  return (
    <main>
      <div>
        <h2>タスク入力</h2>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div>TBD</div>
        </form>
      </div>
    </main>
  );
}

export default TaskInputPage;
