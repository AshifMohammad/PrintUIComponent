interface windowSize {
    height: string;
    width: string;
    top: string;
    left: string;
    right: string;
}
export declare function PrintHTMLComponent(htmlBody: HTMLElement, styles: StyleSheet, windowTitle: string, shouldAutoPrint: boolean, windowSize?: windowSize): void;
export {};
