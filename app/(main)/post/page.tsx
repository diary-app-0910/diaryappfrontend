"use client"
// 日記登録ページ

import React from 'react'
import Button from '../../components/elements/Button';
import WhiteButton from '../../components/elements/WhiteButton';

// フォームのCSS
const textareaClass = () => 'w-ful h-[146px] resize-none overflow-hidden rounded-lg border p-3 text-sm';


const page = () => {

    return (
        <main className='flex items-center justify-center py-5'>
            <div className='bg-white w-full md:h-[880px] lg:w-[1116px] h-auto flex flex-col items-center rounded-md p-6 gap-6'>
                <div className='flex flex-col gap-8 pt-6 w-full md:w-full lg:w-[915px] h-auto'>
                    <h1 className='font-bold text-2xl lg:text-3xl'>日記入力</h1>
                    <h2 className='font-bold text-1xl lg:text-2xl'>日付</h2>
                        <form action='submit'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='良かったこと'>良かったこと</label>
                                    <textarea name='' id='' className={textareaClass()}
                                    placeholder='良かったことを入力してください'
                                    ></textarea>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='反省点'>反省点</label>
                                    <textarea name='' id='' className={textareaClass()}
                                    placeholder='反省点を入力してください'
                                    ></textarea>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='反省点を次にどうするか'>反省点を次にどうするか</label>
                                    <textarea name='' id='' className={textareaClass()}
                                    placeholder='反省点を次にどうするかを入力してください'
                                    ></textarea>
                                </div>
                            </div>
                            <div className='flex items-center justify-center  md:gap-2 lg:gap-10'>
                                <WhiteButton buttonName='編集する' />
                                <Button buttonName='保存する' />
                            </div>
                        </form>
                </div>
            </div>
        </main>
    )
}

export default page
