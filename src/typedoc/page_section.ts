/**
 * Well known sections of a TypeDoc page.
 */
export const enum PageSections {
    Hierarchy = "Hierarchy",
}

/**
 * Creates markdown for a section containing a hierarchy diagram.
 * @param title The title of the section.
 * @param imageUrl The URL to the hierarchy diagram.
 * @param reflectionName The name of the reflection for which the hierarchy diagram was generated.
 * @param legendMarkdown Possbile markdown for the diagram's legend.
 * @returns The markdown for the section.
 */
export function createHierarchyDiagramSection(
    title: string,
    imageUrl: string,
    reflectionName: string,
    legendMarkdown?: string,
): string {
    // URLs with data are not clickable in browsers for security concerns => just output an image tag
    return `### ${title}\n![UML class diagram of ${reflectionName}](${imageUrl})\n${legendMarkdown ?? ""}\n`;
}
