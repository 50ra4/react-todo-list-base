import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button/Button';
import { TextForm } from '@/components/TextForm/TextForm';
import {
  contactSchema,
  Contact,
  CONTACT_DEFAULT_VALUE,
} from 'src/schema/contact';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: CONTACT_DEFAULT_VALUE,
  });

  return (
    <div className="bg-white m-2 p-3 rounded sm:w-96">
      <h2 id="formTitle" className="text-2xl font-bold pb-4">
        連絡先入力
      </h2>
      <form
        aria-labelledby="formTitle"
        className="[&>*]:mb-2"
        onSubmit={handleSubmit((d) => console.log(d))}
      >
        <TextForm
          {...register('name')}
          errorMessage={errors.name?.message}
          id="name"
          label="名前"
        />
        <TextForm
          {...register('kana')}
          id="kana"
          label="名前(カナ)"
          errorMessage={errors.kana?.message}
        />
        <TextForm
          {...register('mail')}
          id="mail"
          type="email"
          label="メールアドレス"
          errorMessage={errors.mail?.message}
        />
        <TextForm
          {...register('tel')}
          id="tel"
          type="tel"
          label="電話番号"
          errorMessage={errors.tel?.message}
        />
        <div className="flex justify-center mt-4">
          <Button type="submit" color="secondary">
            送信する
          </Button>
        </div>
      </form>
    </div>
  );
}

function TaskInputPage() {
  return (
    <main className="flex justify-center justify-items-center">
      <ContactForm />
    </main>
  );
}
export default TaskInputPage;
