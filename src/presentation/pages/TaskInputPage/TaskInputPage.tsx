import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAssignees } from '@/hooks/useAssignees';
import { useCategories } from '@/hooks/useCategories';
import { Button } from '@/presentation/components/Button/Button';
import { DateForm } from '@/presentation/components/DateForm/DateForm';
import { PulldownForm } from '@/presentation/components/PulldownForm/PulldownForm';
import { TextForm } from '@/presentation/components/TextForm/TextForm';
import { TextareaForm } from '@/presentation/components/TextareaForm/TextareaForm';
import {
  taskInputSchema,
  TaskInput,
  TASK_INPUT_DEFAULT_VALUE,
} from '@/schema/task';

const onValid = (data: TaskInput) => {
  console.log(data);
  alert('追加しました！');
};

function TaskInputPage() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<TaskInput>({
    resolver: zodResolver(taskInputSchema),
    defaultValues: TASK_INPUT_DEFAULT_VALUE,
  });

  const { categories } = useCategories();
  const { assignees } = useAssignees();

  return (
    <main className="flex justify-center">
      <div className="bg-white m-2 p-3 rounded w-full xl:max-w-5xl ">
        <h2 id="form-title" className="text-2xl font-bold pb-4">
          タスク入力
        </h2>
        <form
          aria-labelledby="form-title"
          className="[&>*]:mb-2"
          onSubmit={handleSubmit(onValid)}
        >
          <TextForm
            {...register('title')}
            errorMessage={errors.title?.message}
            id="title"
            label="タスク名"
            required={true}
          />
          <DateForm
            {...register('startDate')}
            errorMessage={errors.startDate?.message}
            id="start-date"
            label="開始日"
          />
          <DateForm
            {...register('endDate', { required: true })}
            errorMessage={errors.endDate?.message}
            id="end-date"
            label="期限"
            required={true}
          />
          <PulldownForm
            {...register('assigneeId')}
            errorMessage={errors.assigneeId?.message}
            id="assignee"
            label="担当者"
            items={assignees}
          />
          <PulldownForm
            {...register('categoryId')}
            errorMessage={errors.categoryId?.message}
            id="category"
            label="カテゴリ"
            items={categories}
          />
          <TextareaForm
            {...register('description')}
            errorMessage={errors.description?.message}
            id="description"
            label="詳細"
          />
          <div className="flex mt-4">
            <Button type="submit" color="secondary" disabled={!isValid}>
              追加する
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default TaskInputPage;
