

interface windowSize {
  height: string;
  width: string;
  top: string;
  left: string;
  right: string;
}

export function PrintHTMLComponent(
  htmlBody: HTMLElement,
  styles: StyleSheet,
  windowTitle: string,
  shouldAutoPrint: boolean,
  windowSize?: windowSize
): void {
  const rootDiv = window.open('', windowTitle );
  rootDiv!.document.write(
    `<html><title>${windowTitle}</title><style>${styles}</style><body>${htmlBody}</body></html>`
  );
  rootDiv && rootDiv.document.close();
  shouldAutoPrint && rootDiv?.print();
}
