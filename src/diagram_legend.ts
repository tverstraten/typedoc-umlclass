/**
 * Collection of images used in the diagram legend.
 */
const enum Image {
    ClassCircledChar = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHpvb21BbmRQYW49Im1hZ25pZnkiIHdpZHRoPSIyM3B4IiBoZWlnaHQ9IjIzcHgiIHN0eWxlPSJ3aWR0aDoyM3B4O2hlaWdodDoyM3B4OyIgdmlld0JveD0iMCAwIDIzIDIzIj4NCjxnPg0KPGVsbGlwc2UgY3g9IjExLjUiIGN5PSIxMS41IiByeD0iMTEiIHJ5PSIxMSIgZmlsbD0iI0FERDFCMiIgc3R5bGU9InN0cm9rZTogI0E4MDAzNjsgc3Ryb2tlLXdpZHRoOiAxLjA7Ii8+DQo8dGV4dCB4PSI3IiB5PSIxMS41IiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkNvdXJpZXIiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj5DPC90ZXh0Pg0KPC9nPg0KPC9zdmc+",
    AbstractClassCircledChar = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHpvb21BbmRQYW49Im1hZ25pZnkiIHdpZHRoPSIyM3B4IiBoZWlnaHQ9IjIzcHgiIHN0eWxlPSJ3aWR0aDoyM3B4O2hlaWdodDoyM3B4OyIgdmlld0JveD0iMCAwIDIzIDIzIj4NCjxnPg0KPGVsbGlwc2UgY3g9IjExLjUiIGN5PSIxMS41IiByeD0iMTEiIHJ5PSIxMSIgZmlsbD0iI0E5RENERiIgc3R5bGU9InN0cm9rZTogI0E4MDAzNjsgc3Ryb2tlLXdpZHRoOiAxLjA7Ii8+DQo8dGV4dCB4PSI3IiB5PSIxMS41IiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkNvdXJpZXIiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj5BPC90ZXh0Pg0KPC9nPg0KPC9zdmc+",
    InterfaceCircledChar = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHpvb21BbmRQYW49Im1hZ25pZnkiIHdpZHRoPSIyM3B4IiBoZWlnaHQ9IjIzcHgiIHN0eWxlPSJ3aWR0aDoyM3B4O2hlaWdodDoyM3B4OyIgdmlld0JveD0iMCAwIDIzIDIzIj4NCjxnPg0KPGVsbGlwc2UgY3g9IjExLjUiIGN5PSIxMS41IiByeD0iMTEiIHJ5PSIxMSIgZmlsbD0iI0I0QTdFNSIgc3R5bGU9InN0cm9rZTogI0E4MDAzNjsgc3Ryb2tlLXdpZHRoOiAxLjA7Ii8+DQo8dGV4dCB4PSI3IiB5PSIxMS41IiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkNvdXJpZXIiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj5JPC90ZXh0Pg0KPC9nPg0KPC9zdmc+",
    PublicProperty = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHpvb21BbmRQYW49Im1hZ25pZnkiIHdpZHRoPSI3cHgiIGhlaWdodD0iN3B4IiBzdHlsZT0id2lkdGg6N3B4O2hlaWdodDo3cHg7IiB2aWV3Qm94PSIwIDAgNyA3Ij4NCjxnPg0KPGVsbGlwc2UgY3g9IjMuNSIgY3k9IjMuNSIgcng9IjMiIHJ5PSIzIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiAjMDM4MDQ4OyBzdHJva2Utd2lkdGg6IDEuMDsiLz4NCjwvZz4NCjwvc3ZnPg==",
    ProtectedProperty = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHpvb21BbmRQYW49Im1hZ25pZnkiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiBzdHlsZT0id2lkdGg6OXB4O2hlaWdodDo5cHg7IiB2aWV3Qm94PSIwIDAgOSA5Ij4NCjxnPg0KPHBvbHlnb24gcG9pbnRzPSI0LjUsMC41LDguNSw0LjUsNC41LDguNSwwLjUsNC41IiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOiAjQjM4RDIyOyBzdHJva2Utd2lkdGg6IDEuMDsiLz4NCjwvZz4NCjwvc3ZnPg==",
    PrivateProperty = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHpvb21BbmRQYW49Im1hZ25pZnkiIHdpZHRoPSI3cHgiIGhlaWdodD0iN3B4IiBzdHlsZT0id2lkdGg6N3B4O2hlaWdodDo3cHg7IiB2aWV3Qm94PSIwIDAgNyA3Ij4NCjxnPg0KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6ICNDODI5MzA7IHN0cm9rZS13aWR0aDogMS4wOyIvPg0KPC9nPg0KPC9zdmc+",
    PublicMethod = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHpvb21BbmRQYW49Im1hZ25pZnkiIHdpZHRoPSI3cHgiIGhlaWdodD0iN3B4IiBzdHlsZT0id2lkdGg6N3B4O2hlaWdodDo3cHg7IiB2aWV3Qm94PSIwIDAgNyA3Ij4NCjxnPg0KPGVsbGlwc2UgY3g9IjMuNSIgY3k9IjMuNSIgcng9IjMiIHJ5PSIzIiBmaWxsPSIjODRCRTg0IiBzdHlsZT0ic3Ryb2tlOiAjMDM4MDQ4OyBzdHJva2Utd2lkdGg6IDEuMDsiLz4NCjwvZz4NCjwvc3ZnPg==",
    ProtectedMethod = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHpvb21BbmRQYW49Im1hZ25pZnkiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiBzdHlsZT0id2lkdGg6OXB4O2hlaWdodDo5cHg7IiB2aWV3Qm94PSIwIDAgOSA5Ij4NCjxnPg0KPHBvbHlnb24gcG9pbnRzPSI0LjUsMC41LDguNSw0LjUsNC41LDguNSwwLjUsNC41IiBmaWxsPSIjRkZGRjQ0IiBzdHlsZT0ic3Ryb2tlOiAjQjM4RDIyOyBzdHJva2Utd2lkdGg6IDEuMDsiLz4NCjwvZz4NCjwvc3ZnPg==",
    PrivateMethod = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHpvb21BbmRQYW49Im1hZ25pZnkiIHdpZHRoPSI3cHgiIGhlaWdodD0iN3B4IiBzdHlsZT0id2lkdGg6N3B4O2hlaWdodDo3cHg7IiB2aWV3Qm94PSIwIDAgNyA3Ij4NCjxnPg0KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIGZpbGw9IiNGMjRENUMiIHN0eWxlPSJzdHJva2U6ICNDODI5MzA7IHN0cm9rZS13aWR0aDogMS4wOyIvPg0KPC9nPg0KPC9zdmc+",
}

/**
 * Class for generating the HTML and CSS for a diagram legend.
 */
export class DiagramLegend {
    private hasClassIcon: boolean;
    private hasAbstractClassIcon: boolean;
    private hasInterfaceIcon: boolean;
    private readonly hasPublicPropertyItem: boolean;
    private readonly hasProtectedPropertyItem: boolean;
    private readonly hasPrivatePropertyItem: boolean;
    private readonly hasPublicMethodItem: boolean;
    private readonly hasProtectedMethodItem: boolean;
    private readonly hasPrivateMethodItem: boolean;
    private readonly hasStaticMemberItem: boolean;
    private hasAbstractMemberItem: boolean;

    /**
     * Creates a new legend for a diagram.
     * @param hasClassItem Include the class item in the legend?
     * @param hasAbstractClassItem Include the abstract class item in the legend?
     * @param hasInterfaceItem Include the interface item in the legend?
     * @param hasPublicPropertyItem Include the public property item in the legend?
     * @param hasProtectedPropertyItem Include the protected property item in the legend?
     * @param hasPrivatePropertyItem Include the private property item in the legend?
     * @param hasPublicMethodItem Include the public method item in the legend?
     * @param hasProtectedMethodItem Include the protected method item in the legend?
     * @param hasPrivateMethodItem Include the private method item in the legend?
     * @param hasStaticMemberItem Include the static member item in the legend?
     * @param hasAbstractMemberItem Include the abstract member item in the legend?
     */
    public constructor(
        hasClassItem = true,
        hasAbstractClassItem = true,
        hasInterfaceItem = true,
        hasPublicPropertyItem = true,
        hasProtectedPropertyItem = true,
        hasPrivatePropertyItem = true,
        hasPublicMethodItem = true,
        hasProtectedMethodItem = true,
        hasPrivateMethodItem = true,
        hasStaticMemberItem = true,
        hasAbstractMemberItem = true,
    ) {
        this.hasClassIcon = hasClassItem;
        this.hasAbstractClassIcon = hasAbstractClassItem;
        this.hasInterfaceIcon = hasInterfaceItem;
        this.hasPublicPropertyItem = hasPublicPropertyItem;
        this.hasProtectedPropertyItem = hasProtectedPropertyItem;
        this.hasPrivatePropertyItem = hasPrivatePropertyItem;
        this.hasPublicMethodItem = hasPublicMethodItem;
        this.hasProtectedMethodItem = hasProtectedMethodItem;
        this.hasPrivateMethodItem = hasPrivateMethodItem;
        this.hasStaticMemberItem = hasStaticMemberItem;
        this.hasAbstractMemberItem = hasAbstractMemberItem;
    }

    /**
     * Checks if the legend has nothing to display.
     * @returns True if the legend is empty, otherwise false.
     */
    public get isEmpty(): boolean {
        return (
            !this.hasClassIcon &&
            !this.hasAbstractClassIcon &&
            !this.hasInterfaceIcon &&
            !this.hasPublicPropertyItem &&
            !this.hasProtectedPropertyItem &&
            !this.hasPrivatePropertyItem &&
            !this.hasPublicMethodItem &&
            !this.hasProtectedMethodItem &&
            !this.hasPrivateMethodItem &&
            !this.hasStaticMemberItem &&
            !this.hasAbstractMemberItem
        );
    }

    /**
     * Tells the legend not to include icons for types.
     */
    public hideTypeIcons(): void {
        this.hasClassIcon = false;
        this.hasAbstractClassIcon = false;
        this.hasInterfaceIcon = false;
    }

    /**
     * Tells the legend not to include the "italic" item for abstract members.
     */
    public hideAbstractMemberItem(): void {
        this.hasAbstractMemberItem = false;
    }

    /**
     * Creates the markdown for the diagram legend.
     * @param memberVisbilityStyle The style of the visibility of members in the diagram.
     * @returns The markdown for the diagram legend.
     */
    public getMarkdown(memberVisbilityStyle: "text" | "icon"): string {
        let legend = `### Legend`;

        //![Jest Coverage](badges/coverage-jest%20coverage.svg)
        if (this.hasClassIcon) {
            legend += `![icon for a class in the UML class diagram](data:image/svg+xml;base64,${Image.ClassCircledChar})
            #### class`;
        }
        if (this.hasAbstractClassIcon) {
            legend += `![icon for an abstract class in the UML class diagram](data:image/svg+xml;base64,${Image.AbstractClassCircledChar})
            #### abstract class`;
        }
        if (this.hasInterfaceIcon) {
            legend += `![icon for an interface in the UML class diagram](data:image/svg+xml;base64,${Image.InterfaceCircledChar})
            #### interface`;
        }

        if (memberVisbilityStyle === "icon") {
            if (this.hasPublicPropertyItem) {
                legend += `![icon for a public property in the UML class diagram](data:image/svg+xml;base64,${Image.PublicProperty})
                #### public property`;
            }
            if (this.hasProtectedPropertyItem) {
                legend += `![icon for a protected property in the UML class diagram](data:image/svg+xml;base64,${Image.ProtectedProperty})
                #### protected property`;
            }
            if (this.hasPrivatePropertyItem) {
                legend += `![icon for a private property in the UML class diagram](data:image/svg+xml;base64,${Image.PrivateProperty})
                #### private property>`;
            }
            if (this.hasPublicMethodItem) {
                legend += `![icon for a public method in the UML class diagram](data:image/svg+xml;base64,${Image.PublicMethod})
                #### public method`;
            }
            if (this.hasProtectedMethodItem) {
                legend += `![icon for a protected method in the UML class diagram](data:image/svg+xml;base64,${Image.ProtectedMethod})
                #### protected method`;
            }
            if (this.hasPrivateMethodItem) {
                legend += `![icon for a private method in the UML class diagram](data:image/svg+xml;base64,${Image.PrivateMethod})
                #### private method`;
            }
        } else {
            if (this.hasPublicPropertyItem || this.hasPublicMethodItem) {
                legend += `+
                #### public property/method`;
            }
            if (this.hasProtectedPropertyItem || this.hasProtectedMethodItem) {
                legend += `#
                #### protected property/method`;
            }
            if (this.hasPrivatePropertyItem || this.hasPrivateMethodItem) {
                legend += `-
                          #### private property/method`;
            }
        }

        if (this.hasStaticMemberItem) {
            legend += `underlined
            #### static property/method`;
        }
        if (this.hasAbstractMemberItem) {
            legend += `italic
            #### abstract property/method`;
        }

        return legend;
    }
}

/**
 * Creates a legend for the given PlantUML code.
 * @param plantUml The PlantUML lines of code for which the legend is generated.
 * @returns The legend for the PlantUML code.
 */
export function createDiagramLegendForPlantUml(plantUml: readonly string[]): DiagramLegend {
    // Check for a trailing "{" too to distinguish between a dummy type and a real class
    const hasClassItem = plantUml.some((str) => str.startsWith("class ") && str.endsWith("{"));
    const hasAbstractClassItem = plantUml.some((str) => str.startsWith("abstract "));
    const hasInterfaceItem = plantUml.some((str) => str.startsWith("interface "));
    const hasPublicPropertyItem = plantUml.some((str) => / \+\w+ : /.test(str));
    const hasProtectedPropertyItem = plantUml.some((str) => / #\w+ : /.test(str));
    const hasPrivatePropertyItem = plantUml.some((str) => / -\w+ : /.test(str));
    const hasPublicMethodItem = plantUml.some((str) => / \+\w+\(/.test(str));
    const hasProtectedMethodItem = plantUml.some((str) => / #\w+\(/.test(str));
    const hasPrivateMethodItem = plantUml.some((str) => / -\w+\(/.test(str));
    const hasStaticMemberItem = plantUml.some((str) => str.includes("{static}"));
    const hasAbstractMemberItem = plantUml.some((str) => str.includes("{abstract}"));

    return new DiagramLegend(
        hasClassItem,
        hasAbstractClassItem,
        hasInterfaceItem,
        hasPublicPropertyItem,
        hasProtectedPropertyItem,
        hasPrivatePropertyItem,
        hasPublicMethodItem,
        hasProtectedMethodItem,
        hasPrivateMethodItem,
        hasStaticMemberItem,
        hasAbstractMemberItem,
    );
}
