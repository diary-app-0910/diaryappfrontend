import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <div>
            Header nav
            <nav>
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
    )
}

export default Header
