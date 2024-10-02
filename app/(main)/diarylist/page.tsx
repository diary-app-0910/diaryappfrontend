// 日記一覧ページ

import Diarylist from '@/app/components/elements/Diarylist'
import React from 'react'

// リストの型を定義
interface DiaryList {
    year: string;
    month: string;
    day: string;
    week: string;
};


const page = () => {
    // 現在の西暦を取得
    const currentYear = new Date().getFullYear();
    // 01-12月を作成
    const months = Array.from({ length: 12 }, (_, index) => {
        const month = (index + 1).toString().padStart(2, '0');
        return `${month}月`;
    });

    return (
        <main className='flex justify-center'>
            <div className='flex w-full h-auto gap-6 pt-6 p-6 xl:pt-6 xl:p-0 max-w-screen-xl'>
                <div className='flex flex-col  bg-white rounded-md gap-6 p-8 w-[318px] h-[736px]'>
                    <h1 className='font-bold pb-2 text-2xl lg:text-3xl'>日記一覧</h1>
                    {months.map((month, index) => (
                        <h2 key={index}>{currentYear}年{month}</h2>
                    ))}
                </div>
                <div className='flex flex-col w-full gap-6'>
                        <Diarylist
                        data={{
                            year:'YYYY',
                            month:'mm',
                            day:'dd',
                            week:'week'
                        }}
                        />
                </div>
            </div>
        </main>
    )
}

export default page
