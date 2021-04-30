export const dom = {
    getElement(selection: string) {
        return document.querySelector(selection);
    },
    getElements(selection: string) {
        return document.querySelectorAll(selection);
    },
    getClassList(selection: string) {
        return document.querySelector(selection).classList;
    },
    addClass(className: string, selection: string) {
        document.querySelector(selection).classList.add(className);
    },
    getAttrByName(attrName: string, selection: string) {
        return document.querySelector(selection).getAttribute(attrName);
    },
};
