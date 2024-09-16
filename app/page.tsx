"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../app/components/elements/Button';


// フォームデータの型を定義
interface LoginForm {
    name: string;
    email: string;
    password: string;
};

const inputClass = () => 'block flex-1 border border-gray-400 rounded-md p-2';


export default function Home() {
	const { register, handleSubmit, formState: { errors },} = useForm<LoginForm>({ mode: 'onChange'});

	const onSubmit = (data: LoginForm) => {
		console.log(data);
	}

	return (
		<main className="absolute inset-0 flex items-center justify-center">
		<div className="flex flex-col items-center space-y-6">
			<h1>Diary App</h1>
			<h1 className="text-left w-full">ログイン</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2">
				<p>{errors.name?.message}</p>
				<label htmlFor="メールアドレス">メールアドレス</label>
				<input id='email' type="email" {...register("email", { required: "メールアドレスは必須です" })} className={inputClass()} />
				<p>{errors.email?.message}</p>
				<label htmlFor="パスワード">パスワード</label>
				<input id='password' type="password" {...register("password", { required: "パスワードは必須です" })} className={inputClass()} />
				<p>{errors.password?.message}</p>
				<Button buttonName='ログイン' />
			</form>
		</div>
		</main>
	);
}
