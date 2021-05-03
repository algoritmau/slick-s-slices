import { useEffect, useState } from 'react';

export default function useLatestData() {
  // Hot Slices
  const [hotSlices, setHotSlices] = useState();

  // Slicemasters
  const [slicemasters, setSlicemasters] = useState();

  // Use side-effect to fetch data from graphql endpoint
  useEffect(() => {
    // fetch data upon component mounting
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                name
              }
              hotSlices {
                name
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // Check for errors
        // Set the data to the state
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      });
  }, []);

  return {
    hotSlices,
    slicemasters,
  };
}
