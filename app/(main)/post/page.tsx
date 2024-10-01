"use client"
// 日記登録ページ

import React from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { createDiary } from '../../api/Api'
import Button from '../../components/elements/Button';
import WhiteButton from '../../components/elements/WhiteButton';

// フォームデータの型を定義
interface createDiaryForm {
    goodhighlight: string;
    reflection: string;
    opinion: string;
};


// フォームのCSS
const textareaClass = () => 'w-ful h-[146px] resize-none overflow-hidden rounded-lg border p-3 text-sm';

const Page = () => {
    const router = useRouter();
	const { register, handleSubmit, formState: { errors },} = useForm<createDiaryForm>({ mode: 'onChange'});

	const onSubmit = async (data: createDiaryForm) => {
		try {
			// トークン保存情報を入れる
			const result = await createDiary(data.goodhighlight, data.reflection, data.opinion);
			console.log('登録できました', result);
            router.push('/diarylist');
		} catch (error) {
			console.error('登録に失敗しました', error);
		}
	}


    return (
        <main className='flex items-center justify-center py-5'>
            <div className='bg-white w-full h-auto flex flex-col items-center rounded-md p-6 gap-6 max-w-screen-xl'>
                <div className='flex flex-col gap-8 pt-6 w-full md:w-full max-w-screen-lg h-auto'>
                    <h1 className='font-bold text-2xl lg:text-3xl'>日記入力</h1>
                    <h2 className='font-bold text-1xl lg:text-2xl'>日付</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='良かったこと'>良かったこと</label>
                                    <textarea
                                    {...register('goodhighlight', { required: true })}
                                    id='goodhighlight' className={textareaClass()}
                                    placeholder='良かったことを入力してください'
                                    ></textarea>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='反省点'>反省点</label>
                                    <textarea
                                    {...register('reflection', { required: true })}
                                    id='reflection' className={textareaClass()}
                                    placeholder='反省点を入力してください'
                                    ></textarea>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='反省点を次にどうするか'>反省点を次にどうするか</label>
                                    <textarea
                                    {...register('opinion', { required: true })}
                                    id='opinion' className={textareaClass()}
                                    placeholder='反省点を次にどうするかを入力してください'
                                    ></textarea>
                                </div>
                            </div>
                            <div className='flex items-center justify-center  md:gap-2 lg:gap-10'>
                                <WhiteButton buttonName='キャンセル' />
                                <Button buttonName='保存する' />
                            </div>
                        </form>
                </div>
            </div>
        </main>
    )
}

export default Page
