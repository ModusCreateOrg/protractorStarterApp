/**
 * Created by sergiu on 05/07/16.
 */

module.exports.scrollElemIntoView = function (element) {
    browser.executeScript('arguments[0].scrollIntoView();', element.getWebElement());
    return element;
};

module.exports.scrollElemIntoViewPromise = function (element) {
    return browser.executeScript('arguments[0].scrollIntoView();', element.getWebElement());
};

/* Usage example:
 [ARRAY_OF_ELEMENTS].filter(helpers.filterByElementAttributeContains.bind({
        filterText          : "Some text",
        attributeName       : "src"
 }))*/
module.exports.filterByElementAttributeContains = function (element) {
    return element.getAttribute(this.attributeName).then(function (value) {
        return value.indexOf(this.filterText) != -1;
    }.bind({filterText: this.filterText}))
};

/* Usage example:
 [ARRAY_OF_ELEMENTS].filter(helpers.filterByChildElementAttributeContains.bind({
        filterText          : "Some text,
        childElementSelector: "span",
        attributeName       : "src"
 }))*/
module.exports.filterByChildElementAttributeContains = function (element) {
    return element.element(this.childElementSelector).getAttribute(this.attributeName).then(function (value) {
        return value.indexOf(this.filterText) != -1;
    }.bind({filterText: this.filterText}))
};

/* Usage example:
 [ARRAY_OF_ELEMENTS].filter(helpers.filterByElementAttributeContains.bind({
        filterText          : "Some text",
        attributeName       : "src"
 }))*/
module.exports.filterByElementAttributeEquals = function (element) {
    return element.getAttribute(this.attributeName).then(function (value) {
        return value === this.filterText;
    }.bind({filterText: this.filterText}))
};

/* Usage example:
 [ARRAY_OF_ELEMENTS].filter(helpers.filterByChildElementAttributeEquals.bind({
        filterText          : "Some text,
        childElementSelector: "span",
        attributeName       : "src"
 }))*/
module.exports.filterByChildElementAttributeEquals = function (element) {
    return element.element(this.childElementSelector).getAttribute(this.attributeName).then(function (value) {
        return value === this.filterText;
    }.bind({filterText: this.filterText}))
};