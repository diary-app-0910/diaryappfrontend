// ログインAPI
export const login = async (email: string, password: string) => {
    const response = await fetch('https://api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password}),
    });

    if (!response.ok){
        throw new Error('ログインに失敗しました')
    }
    return await response.json();
};

// サインアップAPI
export const signup = async (username:string, email: string, password: string) => {
    const response = await fetch('https://api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
        throw new Error('サインアップに失敗しました');
    }
    return await response.json();
};

// Create DiaryAPI
export const createDiary = async ( goodhighlight: string, reflection: string, opinion: string) => {
// export const createDiary = async (user_id: bigint, goodhighlight: string, reflection: string, opinion: string) => {
    const response = await fetch('https://api/diaries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ goodhighlight, reflection, opinion }),
        // body: JSON.stringify({ user_id, goodhighlight, reflection, opinion }),
    });

    if (!response.ok) {
        throw new Error('登録に失敗しました');
    }
    return await response.json();
};

// Find by ID
export const findById = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('データの取得に失敗しました');
    }
    const diaryData = await response.json(); // 全てのデータを取得
    return diaryData;
};