const initialState = {
    shop: [],
    amountOfItems: 0,
    loading: true,
    error: false,
    items: [],
    totalPrice: 0,
    categories: [],
    modalState: false,
}

const reducer = (state = initialState, action) => {
    const removeItem = (idx) => {
        const itemIndex = state.items.findIndex(item => item.id === idx);
        const itemPrice = state.items[itemIndex].price;
        const itemQtty = state.items[itemIndex].qtty;
        return {
            ...state,
            items: [
                ...state.items.slice(0, itemIndex),
                ...state.items.slice(itemIndex + 1)
            ],
            totalPrice: state.totalPrice - (itemPrice*itemQtty)
        }
    }

    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                shop: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                shop: state.shop,
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return {
                ...state,
                shop: state.shop,
                loading: false,
                error: true
            };
        case 'ADDED_TO_CART':
            const id = action.payload;
            const itemInd = state.items.findIndex(item => item.id === id)
            if (itemInd >= 0) {
                const itemState =  state.items.find(item => item.id === id);
                const newItem = {
                    ...itemState,
                    qtty: ++itemState.qtty
                };
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                };
            };
            const item = state.shop.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            };
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            }
        case 'REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const itemPrice = state.items[itemIndex].price;
            const itemQtty = state.items[itemIndex].qtty;
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: state.totalPrice - (itemPrice*itemQtty)
            }
            

        case 'REMOVE_ONE_ITEM':
            const el = action.payload;
            const elIdx = state.items.findIndex(item => item.id === el);
            const elState = state.items.find(item => item.id === el);
            if (elState.qtty === 1) {
                return removeItem(action.payload);
            }
            const newEl = {
                ...elState,
                qtty: --elState.qtty
            };
            return {
                ...state,
                items: [
                    ...state.items.slice(0, elIdx),
                    newEl,
                    ...state.items.slice(elIdx + 1)
                ],
                totalPrice: state.totalPrice - newEl.price
            };
        case 'MAKE_CATEGORIES':
            const category = action.payload;
            const categoryInd = state.categories.findIndex(item => item.name === category);
            if (categoryInd >= 0) {
                const categoryState = state.categories.find(item => item.name === category);
                const updatedCategory = {
                    ...categoryState,
                    qtty: ++categoryState.qtty
                }
                return {
                    ...state,
                    loading: false,
                    error: false,
                    categories: [
                        ...state.categories.slice(0, categoryInd),
                        updatedCategory,
                        ...state.categories.slice(categoryInd + 1)
                    ]
                }
            }
            const number = state.categories.length;
            const newCategory = {
                name: category,
                qtty: 1,
                id: number
            };
            return {
                ...state,
                loading: false,
                error: false,
                categories: [
                    ...state.categories,
                    newCategory
                ]
            }
        case 'CLEAN_CATEGORY':
            return {
                ...state,
                categories: []
            }
        case 'SHOW_MODAL':
            return {
                ...state,
                modalState: true
            }
        case 'HIDE_MODAL':
            return {
                ...state,
                modalState: false
            }

        default:
            return state;
    }
}

export default reducer;