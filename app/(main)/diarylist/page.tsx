"use client"
// 日記一覧ページ

import React, { useEffect, useState } from 'react';
import { findAllDiaries } from '@/app/api/Api'; // API関数をインポート
import Link from 'next/link';
import Image from 'next/image';

const Page: React.FC = () => {
    const [diaries, setDiaries] = useState<any[]>([]); // 取得したデータを保存するためのstate

    const fetchData = async () => {
        try {
            const data = await findAllDiaries(); // すべてのデータを取得
            setDiaries(data.slice(0, 5)); // 最大5件のデータを状態にセット
        } catch (error) {
            console.log('データの取得に失敗しました：', error);
        }
    };

    useEffect(() => {
        fetchData(); // コンポーネントの初期レンダリング時にデータを取得
    }, []);

    return (
        <main className='flex justify-center'>
            <div className='flex w-full h-auto gap-6 pt-6 p-6 xl:pt-6 xl:p-0 max-w-screen-xl'>
                <div className='flex flex-col bg-white rounded-md gap-6 p-8 w-[318px] h-[736px]'>
                    <h1 className='font-bold pb-2 text-2xl lg:text-3xl'>日記一覧</h1>
                </div>
                <div className='flex flex-col w-full gap-6'>
                    {diaries.map((diary) => (
                        <Link href={`/diarydetail/${diary.id}`} passHref key={diary.id}>
                            <div className='flex justify-between items-center bg-white rounded-md h-32 w-full p-6'>
                                <div className='flex items-center'>
                                    <div className='flex flex-col'>
                                        <h2>{diary.title}</h2>
                                        <p>{diary.body}</p>
                                    </div>
                                    <Image src='/img/arrow-right.svg' alt='ロゴ' width={24} height={36} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Page;
