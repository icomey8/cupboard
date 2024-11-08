import { useQuery } from '@tanstack/react-query'

async function fetchItems(apiUrl) {
    return fetch(apiUrl).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
}

export function useMenuItems( apiUrl, itemType ) {
    return useQuery({
        queryKey: [itemType, apiUrl],
        queryFn: () => fetchItems(apiUrl),
    });
};
    

