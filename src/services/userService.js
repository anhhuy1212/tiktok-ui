import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log('Error', error);
    }
};

// export const getSuggestedContent = async () => {
//     try {
//         const res = await httpRequest.get('users/suggested');
//         return res.data;
//     } catch (error) {
//         console.log('Error', error);
//     }
// };
