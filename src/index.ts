export declare const PrintHTMLComponent: (htmlBody: any, styles: any, windowTitle: any, windowSize?: {
    height: string;
    width: string;
    top: string;
    left: string;
    right: string;
}, shouldAutoPrint?: boolean) => {
    const rootDiv = window.open(
    "",
    windowTitle,
    `height=${windowSize.height} width=${windowSize.width} resizable,scrollbars,status,top=${window.top}, left=${windowSize.left}`
);

rootDiv &&
rootDiv.document.write(
`<html><title>${windowTitle}</title><style>${styles}</style><body>${htmlBody}</body></html>`
);
rootDiv && rootDiv.document.close();
shouldAutoPrint && rootDiv && rootDiv.print();
};