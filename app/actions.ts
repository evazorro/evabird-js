'use server';

// import { z } from 'zod'; // TODO

export async function fetchRecentNotableBirds(formData: FormData) {
    const region = formData.get('region');
    const apiKey = process.env.EBIRD_API_KEY;

    try {
        const response = await fetch(`https://api.ebird.org/v2/data/obs/${region}/recent/notable`, {
            method: 'GET',
            headers: {
                'X-eBirdApiToken': `${apiKey}`,
            },
        })
        const result = await response.json();
        console.log(result);
        return result;

    } catch (error) {
        console.log("API error!");
        return;
    }
}