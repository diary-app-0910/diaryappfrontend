// ログインAPI
export const login = async (email: string, password: string) => {
    const response = await fetch('https:///api/auth/login', {
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
    const response = await fetch('https:///api/auth/signup', {
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