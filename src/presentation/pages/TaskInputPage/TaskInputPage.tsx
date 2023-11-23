import { zodResolver } from '@hookform/resolvers/zod';
import React, { useCallback, useRef } from 'react';
import { FieldPath, useForm } from 'react-hook-form';
import { z } from 'zod';
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
  const errorsRef = useRef([] as FieldPath<z.output<typeof taskInputSchema>>[]);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setFocus,
  } = useForm<TaskInput>({
    resolver: (data, context, options) => {
      const result = taskInputSchema.safeParse(data);
      const error = result.success
        ? []
        : result.error.errors.map(
            ({ path }) =>
              path.join('.') as FieldPath<z.output<typeof taskInputSchema>>,
          );
      errorsRef.current = error;
      console.log({ error, data, context, options });
      return zodResolver(taskInputSchema)(data, context, options);
    },
    defaultValues: TASK_INPUT_DEFAULT_VALUE,
  });

  const { categories } = useCategories();
  const { assignees } = useAssignees();

  const overrideRegister: typeof register = useCallback(
    (...args) => {
      const { onBlur, onChange, ...restProps } = register(...args);
      const onChangeHandler: typeof onChange = (e) => {
        console.log(e);
        return onChange(e);
      };
      return { onChange: onChangeHandler, onBlur, ...restProps };
    },
    [register],
  );

  return (
    <main className="flex justify-center">
      <div className="bg-white m-2 p-3 rounded w-full xl:max-w-5xl ">
        <h2 id="form-title" className="text-2xl font-bold pb-4">
          タスク入力
        </h2>
        <form
          aria-labelledby="form-title"
          className="[&>*]:mb-2"
          onSubmit={handleSubmit(onValid, (...args) => {
            console.log(args);
            const [path] = errorsRef.current;
            setFocus(path);
          })}
        >
          <TextForm
            {...overrideRegister('title')}
            errorMessage={errors.title?.message}
            id="title"
            label="タスク名"
            required={true}
          />
          <DateForm
            {...overrideRegister('startDate')}
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
            {...overrideRegister('assigneeId')}
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
            <Button type="submit" color="secondary">
              追加する
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default TaskInputPage;
