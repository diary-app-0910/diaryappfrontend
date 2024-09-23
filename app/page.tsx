"use client"
// ログインページ
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../app/components/elements/Button';
import { login } from './api/Api'


// フォームデータの型を定義
interface LoginForm {
    email: string;
    password: string;
};

// フォームのCSS
const inputClass = () => 'block flex-1 border border-gray-400 rounded-md p-2';


export default function Home() {
	const { register, handleSubmit, formState: { errors },} = useForm<LoginForm>({ mode: 'onChange'});

	const onSubmit = async (data: LoginForm) => {
		try {
			const result = await login(data.email, data.password);
			console.log('ログインできました', result);
			// トークン保存処理を入れる
		} catch (error) {
			console.error('ログインに失敗しました', error);
		}
	}

	return (
		<main className='absolute inset-0 flex items-center justify-center'>
		<div className='flex flex-col items-center space-y-6'>
			<h1>Diary App</h1>
			<h1 className='text-left w-full'>ログイン</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2'>
				<label htmlFor='メールアドレス'>メールアドレス</label>
				<input id='email' type='email' {...register('email', { required: 'メールアドレスは必須です' })} className={inputClass()} />
				<p>{errors.email?.message}</p>
				<label htmlFor='パスワード'>パスワード</label>
				<input id='password' type='password' {...register('password', { required: 'パスワードは必須です' })} className={inputClass()} />
				<p>{errors.password?.message}</p>
				<Button buttonName='ログイン' />
			</form>
		</div>
		</main>
	);
}
