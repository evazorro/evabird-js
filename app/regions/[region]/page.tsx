
export default async function Page({ params }: { params: { region: string } }) {
    const region = params.region;
    const apiKey = process.env.EBIRD_API_KEY;

    let response = await fetch(`https://api.ebird.org/v2/data/obs/${region}/recent/notable`, {
        method: 'GET',
        headers: {
            'X-eBirdApiToken': `${apiKey}`,
        },
    })
    const result = await response.json();
    const dedupedList = Array.from(new Set(result.map(e => e.comName)));

    return (
        <main>
            <ul>{dedupedList.map(e => <li>{e}</li>) }</ul>
        </main>
    )
}