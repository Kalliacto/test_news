export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const itemUrl = `${baseUrl}/item/`;

export const getNews = async () => {
    try {
        const res = await fetch(`${newStoriesUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.json();
    } catch (err) {
        console.error(err);
    }
};

export const getNewsOne = async (newsId) => {
    try {
        const res = await fetch(`${itemUrl + newsId}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.json();
    } catch (err) {
        console.error(err);
    }
};

export const getComment = async (commentId) => {
    try {
        const res = await fetch(`${itemUrl + commentId}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.json();
    } catch (err) {
        console.error(err);
    }
};
