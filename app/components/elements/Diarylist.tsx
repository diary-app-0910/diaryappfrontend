import React from 'react'
import Image from 'next/image';

// リストの型を定義
interface DiaryList {
    year: string;
    month: string;
    day: string;
    week: string;
};


const Diarylist = ({ data }: { data: DiaryList }) => {
    return (
        <div className='flex justify-between items-center bg-white rounded-md h-32 w-full p-6'>
            <h2>{data.year}{data.month}{data.day}{data.week}</h2>
            <Image src='/img/arrow-right.svg' alt='ロゴ' width={24} height={36} />
        </div>
    )
}

export default Diarylist
