import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <div className='w-full bg-gray-50'>
            <div className="flex justify-between items-center mx-auto px-4 h-16 sm:px-6 lg:px-8 max-w-screen-xl">
            <h1 className='text-3xl font-bold'>Diary App</h1>
            <nav className='hidden md:flex gap-16'>
                <Link
                    className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="/diarylist"
                    >
                日記一覧
                </Link>
                <Link
                    className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="/post"
                    >
                日記入力
                </Link>
                <Link
                    className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="/user"
                    >
                アカウント情報
                </Link>
            </nav>
            </div>
        </div>
    )
}

export default Header
