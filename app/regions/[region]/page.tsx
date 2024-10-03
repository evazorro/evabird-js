import { ReactNode } from "react";

interface Observation {
    comName: string;
}

export default async function Page({ params }: { params: { region: string } }) {
    const region = params.region;
    const apiKey = process.env.EBIRD_API_KEY;

    const response = await fetch(`https://api.ebird.org/v2/data/obs/${region}/recent/notable`, {
        method: 'GET',
        headers: {
            'X-eBirdApiToken': `${apiKey}`,
        },
    });
    const result = await response.json();

    if (result.errors) {
        return <h2 className="p-7">That region does not exist.</h2>
    }

    const dedupedList = Array.from(new Set(result.map((e: Observation) => e.comName)));

    return (
        <main className="pl-12">
            <ul className="list-disc">
                {dedupedList.map((e, index) => (
                    <li key={index}>{e as ReactNode}</li>
                ))}
            </ul>
        </main>
    )
}