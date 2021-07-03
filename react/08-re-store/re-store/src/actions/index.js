
const bookloaded = (newBooks) => {

    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    };
};

export {
    bookloaded
};