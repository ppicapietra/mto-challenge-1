export default async function apiCall (
    url,
    method = "get",
    body,
    headers)
    {
       try {
           const response = await fetch(url, {
            method,
            body,
            headers
        });

        const r = await response.json();
        return r;
    }
    catch (err) {
        Promise.reject(err);
    }
    }