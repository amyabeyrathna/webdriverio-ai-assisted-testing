class LazyLoadPage {
    get header() { 
        return $('//span[contains(text(), "Dynamic Catalog - Lazy Load")]'); 
    }

}

export default new LazyLoadPage();