import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/presentation/components/Button/Button';
import { TextForm } from '@/presentation/components/TextForm/TextForm';
import {
  contactSchema,
  Contact,
  CONTACT_DEFAULT_VALUE,
} from '@/schema/contact';

const onValid = (contact: Contact) => {
  console.log('contact', contact);
  alert('送信しました！');
};

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: CONTACT_DEFAULT_VALUE,
  });

  return (
    <main className="flex justify-center justify-items-center">
      <div className="bg-white m-2 p-3 rounded sm:w-96">
        <h2 id="formTitle" className="text-2xl font-bold pb-4">
          連絡先入力
        </h2>
        <form
          aria-labelledby="formTitle"
          className="[&>*]:mb-2"
          onSubmit={handleSubmit(onValid)}
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
    </main>
  );
}
export default ContactPage;
