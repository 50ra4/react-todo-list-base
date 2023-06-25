import React from 'react';
import { Button } from '@/components/Button/Button';
import { TextForm } from '@/components/TextForm/TextForm';

const preventDefault = (e: React.FormEvent<HTMLElement>) => {
  e.preventDefault();
};

function ContactForm() {
  return (
    <div className="bg-white m-2 p-3 rounded sm:w-96">
      <h2 id="formTitle" className="text-2xl font-bold pb-4">
        連絡先入力
      </h2>
      <form
        aria-labelledby="formTitle"
        className="[&>*]:mb-2"
        onSubmit={preventDefault}
      >
        <TextForm id="name" name="name" label="名前" />
        <TextForm id="katakana-name" name="katakana name" label="名前(カナ)" />
        <TextForm id="mail" type="email" name="mail" label="メールアドレス" />
        <TextForm id="tel" type="tel" name="tel" label="電話番号" />
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
