'use client';

import { ChangeEvent, useState } from 'react';
import { Button } from './button';
import { useRouter } from 'next/navigation'

export default function SearchForm() {
    const router = useRouter()

    const [region, setRegion] = useState('');
    function handleRegion(e: ChangeEvent<HTMLInputElement>) {
        setRegion(e.target.value);
    }

    return (
        <form className="space-y-3">
            <div className="px-4">
                <h1 className="text-2xl">Enter your region to see recent notable bird sightings nearby:</h1>
            </div>
            <div className='px-4'>
                <label
                className="mb-3 mt-5 block text-sm font-semibold text-gray-900"
                htmlFor="region"
                >
                Region
                </label>
                <div className="flex flex-auto">
                    <input
                        onChange={handleRegion}
                        className="flex-auto mr-2 w-auto rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="region"
                        type="string"
                        name="region"
                        placeholder="Enter a region code (e.g., US-NY-047)"
                        required
                    /> 
                    <Button onClick={(e) => {
                                e.preventDefault();
                                router.push(`/regions/${region}`);
                            }
                        }>
                        Search
                    </Button>
                </div>
            </div>
        </form>
    );
}


