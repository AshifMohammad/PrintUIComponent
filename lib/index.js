"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrintHTMLComponent = void 0;

const PrintHTMLComponent = (htmlBody, styles, windowTitle, windowSize = {
    height: "",
    width: "",
    top: "",
    left: "",
    right: ""
}, shouldAutoPrint = false) => {
    const rootDiv = window.open("", windowTitle, `height=${windowSize.height} width=${windowSize.width} resizable,scrollbars,status,top=${window.top}, left=${windowSize.left}`);
    rootDiv && rootDiv.document.write(`<html><title>${windowTitle}</title><style>${styles}</style><body>${htmlBody}</body></html>`);
    rootDiv && rootDiv.document.close();
    shouldAutoPrint && rootDiv && rootDiv.print();
};

exports.PrintHTMLComponent = PrintHTMLComponent;