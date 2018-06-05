import Vue from 'vue';
export interface ISlTreeNodeModel<TDataType> {
    title: string;
    isLeaf?: boolean;
    children?: ISlTreeNodeModel<TDataType>[];
    isExpanded?: boolean;
    isSelected?: boolean;
    data?: TDataType;
}
export interface ISlTreeNode<TDataType> extends ISlTreeNodeModel<TDataType> {
    isFirstChild: boolean;
    isLastChild: boolean;
    ind: number;
    level: number;
    path: number[];
    pathStr: string;
    children: ISlTreeNode<TDataType>[];
}
export interface ICursorPosition<TDataType> {
    node: ISlTreeNode<TDataType>;
    placement: 'before' | 'inside' | 'after';
}
export interface IVueData<TDataType> {
    rootCursorPosition: ICursorPosition<TDataType>;
    rootDraggingNode: ISlTreeNode<TDataType>;
}
export default class SlVueTree<TDataType> extends Vue {
    value: ISlTreeNodeModel<TDataType>[];
    edgeSize: number;
    allowMultiselect: boolean;
    showBranches: boolean;
    level: number;
    parentInd: number;
    private rootCursorPosition;
    private rootDraggingNode;
    cursorPosition: ICursorPosition<TDataType>;
    draggingNode: ISlTreeNode<TDataType>;
    readonly nodes: ISlTreeNode<TDataType>[];
    getNode(path: number[]): ISlTreeNode<TDataType>;
    updateNode(nodeToUpdate: ISlTreeNode<TDataType>, patch: Partial<ISlTreeNodeModel<TDataType>>): void;
    getSelected(): ISlTreeNode<TDataType>[];
    traverse(cb: (node: ISlTreeNode<TDataType>, nodeModel: ISlTreeNodeModel<TDataType>, siblings: ISlTreeNodeModel<TDataType>[]) => boolean | void, nodeModels?: ISlTreeNodeModel<TDataType>[], parentPath?: number[]): ISlTreeNode<TDataType>[] | boolean;
    getNodeEl(path: number[]): HTMLElement;
    select(path: number[]): void;
}
