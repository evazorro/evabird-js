import { Button } from './button';
import { fetchRecentNotableBirds } from '@/app/actions'

export default function SearchForm() {
    return (
        <form action={fetchRecentNotableBirds} className="space-y-3">
            <div className="flex-1 rounded-lg px-6 pb-4">
                <h1 className="mb-3 text-2xl">Enter your region to see recent notable bird sightings nearby:</h1>
            </div>
            <div>
                <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="region"
                >
                Region
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="region"
                    type="string"
                    name="region"
                    placeholder="Enter a region code (e.g., US-NY-047)"
                    required
                /> 
                </div>
            </div>
            <Button className="mt-4 w-full">
                Search
            </Button>
        </form>
    );
}


