
//Map to cache all elements on the page
const elCache = new Map();

//Function to add elements to the cache map when they are clicked on for the first time,
//or return the element from the cache if it has previously been clicked on
function getElement(id){
    const cachedEl = elCache.get(id);

    if(cachedEl){
        return cachedEl;
    };
    
    const newEl = document.getElementById(id);
    if(!newEl){
        throw new TypeError('element id ' + id + ' was not found in the DOM');
    };

    elCache.set(id, newEl);
    return newEl;
};