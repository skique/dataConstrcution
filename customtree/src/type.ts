
interface Node {
  id: number,
  parentId: number | null,
  level: number,
  // 叶子节点没有该属性
  logicComparator?: 'or' | 'and',
  // 普通选择题，level为1时显示，作用到主体题目
  targetField?: "data_6",
  targetOptions?: ["hash1"],
  // 条件，level为2时显示，作用到前置条件
  sourceField?: "data_1",
  sourceAllOptions?: true,
}

interface TNode extends Node {
  children: []
}