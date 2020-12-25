"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintHTMLComponent = void 0;
function PrintHTMLComponent(htmlBody, styles, windowTitle, shouldAutoPrint, windowSize) {
    var rootDiv = window.open('', windowTitle);
    rootDiv.document.write("<html><title>" + windowTitle + "</title><style>" + styles + "</style><body>" + htmlBody + "</body></html>");
    rootDiv && rootDiv.document.close();
    shouldAutoPrint && (rootDiv === null || rootDiv === void 0 ? void 0 : rootDiv.print());
}
exports.PrintHTMLComponent = PrintHTMLComponent;
