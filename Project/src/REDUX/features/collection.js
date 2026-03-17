/*import { createSlice } from '@reduxjs/toolkit'

const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        items: []
    },
    reducers: {
        addToCollection: (state, action) => {
            const item = action.payload;
            if (!state.items.find(i => i.id === item.id)) {
                state.items.push(item);
            }
        },
        removeFromCollection: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCollection: (state) => {
            state.items = [];
        }
    }
})

export const { addToCollection, removeFromCollection, clearCollection } = collectionSlice.actions
export default collectionSlice.reducer
*/