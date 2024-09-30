"use client"
// サインアップ

import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/elements/Button';
import { signup } from '../api/Api';
import Link from "next/link";
import Image from 'next/image';

// フォームデータの型を定義
interface SignupForm {
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

// フォームのCSS
const inputClass = () => 'block flex-1 border border-gray-400 rounded-md p-2';

const Page = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<SignupForm>({ mode: 'onChange' });
    // passwordフィールドの値を監視
    const password = watch('password');

    const onSubmit = async(data: SignupForm) => {
        // 確認用パスワード（passwordConfirmation）を除外
        const { passwordConfirmation, ...submitData } = data;
        console.log(submitData); // ユーザー名、メールアドレス、パスワードのみ送信

        try {
            const result = await signup(data.username, data.email, data.password);
            console.log('サインアップできました', result);
            // トークン保存処理を入れる
        } catch(error) {
            console.log('サインアップに失敗しました', error);
        }
    };

    return (
        <main className='absolute inset-0 flex items-center justify-center'>
            <div className='flex flex-col items-center space-y-6'>
                <div className='flex gap-2'>
					<Image src='/img/logo-header.svg' alt='ロゴ' width={32} height={32} />
					<h1 className='font-bold text-2xl lg:text-3xl'>Diary App</h1>
				</div>
                <div className='bg-white sm,md:w-[318px] lg:w-[658px] h-[700px] flex flex-col items-center justify-center rounded-md p-6'>
                    <div className='w-[318px]'>
                    <h1 className='text-left font-bold w-full mb-4 text-xl mb-8'>アカウント作成</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-3'>
                            <label htmlFor='ユーザー名'>ユーザー名</label>
                            <input id='name' type='text' {...register('username', { required: '名前は必須です' })} className={inputClass()} />
                            <p>{errors.username?.message}</p>

                            <label htmlFor='メールアドレス'>メールアドレス</label>
                            <input id='email' type='email' {...register('email', { required: 'メールアドレスは必須です' })} className={inputClass()} />
                            <p>{errors.email?.message}</p>

                            <label htmlFor='パスワード'>パスワード</label>
                            <input id='password' type='password' {...register('password', { required: 'パスワードは必須です' })} className={inputClass()} />
                            <p>{errors.password?.message}</p>

                            <label htmlFor='パスワード確認用'>パスワード確認用</label>
                            <input
                                id='passwordConfirmation'
                                type='password'
                                {...register('passwordConfirmation', {
                                    required: '確認用パスワードは必須です',
                                    validate: value => value === password || 'パスワードが一致しません'
                                })}
                                className={inputClass()}
                            />
                            <p>{errors.passwordConfirmation?.message}</p>

                            <Button buttonName='アカウント作成' />
                        </form>
                        <div className='flex justify-center'>
                            <Link
								className='text-center text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                                href="/"
                                >
                                アカウントをお持ちですか？ログインする
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
