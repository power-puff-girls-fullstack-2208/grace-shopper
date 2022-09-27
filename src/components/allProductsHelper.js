// filters productArray according to filterOptions passed in
export const filterProducts = (productArray, filterOptions) => {
    // if there are no filterOptions to apply, returns productArray as is
    if (filterOptions.length === 0) return productArray;

    return (productArray.filter(card => {
        return (filterOptions.includes(card.rarity) || filterOptions.includes(card.series) || card.tags.some(tag => filterOptions.includes(tag.type)));
    }))
}

// sorts products by ascending/descending $/ABC
export const sortProducts = (productArray, sortOption) => {
    switch(sortOption) {
        case 'price-asc':
            return [...productArray].sort((a, b) => parseFloat(a.price) > parseFloat(b.price) ? 1 : parseFloat(a.price) < parseFloat(b.price) ? -1 : 0)
        case 'price-desc':
            return [...productArray].sort((a, b) => parseFloat(a.price) < parseFloat(b.price) ? 1 : parseFloat(a.price) > parseFloat(b.price) ? -1 : 0)
        case 'alpha-up':
            return [...productArray].sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0)
        case 'alpha-down':
            return [...productArray].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
        case 'none':
            return productArray;
    }
}

// handles showing filters overlay onClick
export const showFilters = () => {
    const filtersScreen = document.querySelector('#filters-screen');
    filtersScreen.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
}

// handles closing filters overlay onClick
export const cancelFilters = () => {
    const filtersScreen = document.querySelector('#filters-screen');
    filtersScreen.style.display = 'none';
    document.body.style.overflowY = 'auto';
}