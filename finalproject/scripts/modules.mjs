async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        } 
        const data =  await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

export {fetchData};