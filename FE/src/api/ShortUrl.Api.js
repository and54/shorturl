export const loadShortUrl = async shortUrl => {
    try {
        const resp = await fetch(`${process.env.REACT_APP_API_URL}/${shortUrl}`, { method: 'GET' });
        return await resp.json();
    } catch (e) { 
        return { success: false, error: 'Error loading shortUrl' };
    }
}

export const postShortUrl = async url => {
    try {
        const body = JSON.stringify({ url });
        const headers = { 'Content-Type': 'application/json' };
        const resp = await fetch(process.env.REACT_APP_API_URL, { method: 'POST', headers, body });
        return await resp.json();
    } catch (e) { 
        return { success: false, error: 'Error creating shortUrl' };
    }
}