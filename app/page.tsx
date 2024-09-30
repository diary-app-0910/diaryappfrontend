"use client"
// ログインページ
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../app/components/elements/Button';
import { login } from './api/Api'
import Link from "next/link";
import Image from 'next/image';


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
				<div className='flex gap-2'>
					<Image src='/img/logo-header.svg' alt='ロゴ' width={32} height={32} />
					<h1 className='font-bold text-2xl lg:text-3xl'>Diary App</h1>
				</div>
				<div className='bg-white sm,md:w-[318px] lg:w-[658px] h-[520px] flex flex-col items-center justify-center rounded-md p-6'>
					<div className='w-[318px]'>
						<h1 className='text-left font-bold w-full mb-4 text-xl mb-8'>ログイン</h1>
						<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-3'>
							<label htmlFor='メールアドレス'>メールアドレス</label>
							<input id='email' type='email' {...register('email', { required: 'メールアドレスは必須です' })} className={inputClass()} />
							<p>{errors.email?.message}</p>
							<label htmlFor='パスワード'>パスワード</label>
							<input id='password' type='password' {...register('password', { required: 'パスワードは必須です' })} className={inputClass()} />
							<p>{errors.password?.message}</p>
							<Button buttonName='ログイン' />
						</form>
						<div className='flex justify-center'>
							<Link
								className='text-center text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
								href='/signup'
							>
								アカウントをお持ちでない方はこちら
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
