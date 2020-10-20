const shopLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const shopRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const shopError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const addedToCart = (id) => {
    return {
        type: 'ADDED_TO_CART',
        payload: id
    };
};

const removedFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

const removeOneItem = (id) => {
    return {
        type: 'REMOVE_ONE_ITEM',
        payload: id
    }
}

const makeCategotyList = (category) => {
    return {
        type: 'MAKE_CATEGORIES',
        payload: category
    }
}

const showModal = () => {
    return {
        type: 'SHOW_MODAL'
    }
}

const hideModal = () => {
    return {
        type: 'HIDE_MODAL'
    }
}

const cleanCategory = () => {
    return {
        type: 'CLEAN_CATEGORY'
    }
}


export {
    shopLoaded,
    shopRequested,
    shopError,
    addedToCart,
    removedFromCart,
    removeOneItem,
    makeCategotyList,
    showModal,
    hideModal,
    cleanCategory
}