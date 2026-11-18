class InventoryPage {
    get header() { 
        return $('//div[contains(text(), "Swag Labs")]'); 
    }
    get title() { 
        return $('[data-test="title"]'); 
    }
    get filter() { 
        return $('[data-test="product-sort-container"]'); 
    }
    get shoppingCart() { 
        return $('[data-test= "shopping-cart-link"]'); 
    }
    get menus() { 
        return $('#react-burger-menu-btn'); 
    }
    get dynamicCatalogMenu() {
        return $('[data-test= "dynamic-catalog-sidebar-link"]')
    }
    get dynamicCatalogLazyLoad() {
        return $('[data-test="dynamic-catalog-lazy-load-link"]')
    }

}

export default new InventoryPage();