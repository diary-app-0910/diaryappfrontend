"use client"
// 日記詳細ページ

import { useParams } from 'next/navigation';
import { findbyID } from '../../../api/Api';
import React, { useEffect, useState } from 'react';

// 型の定義（例）
interface DiaryDetail {
    id: number;
    title: string;
    body: string;
}

const Page: React.FC = () => {
    const { id } = useParams();

    const [diary, setDiary] = useState<DiaryDetail | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchDiary = async () => {
                try {
                    const data: DiaryDetail = await findbyID(id as string);
                    setDiary(data);
                } catch (error) {
                    setError('データの取得に失敗しました');
                    console.error('データの取得に失敗しました：', error);
                }
            };
            fetchDiary();
        }
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {diary?.title}
            {diary?.body}
        </div>
    );
};

export default Page;
