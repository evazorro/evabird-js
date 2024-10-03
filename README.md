# evabird-js

This is a (very) quick port of my [evaBird project](https://github.com/evazorro/evabird) to [Next.js](https://nextjs.org) (from Python + Flask).
Uses Cornell University's [eBird API 2.0](https://documenter.getpostman.com/view/664302/S1ENwy59).

## Local development

1. Run the development server:

    ```bash
    npm run dev
    # or
    pnpm dev
    ```
1. Go to https://ebird.org/api/keygen and copy your eBird API key.
1. Create a `.env` file at the root of this project and add the following:

    ```
    EBIRD_API_KEY=your-api-key-here
    ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
