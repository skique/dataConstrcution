showLogic =  [
  {
    id:0,
    parentId: null,
    level: 0,
    logicComparator: 'or',
    children: [
      {
        // 普通选择题
        id: 1,
        parentId: 0,
        level: 1,
        // 逻辑关系
        logicComparator: 'and',
        // 题目
        targetField: "data_6",
        targetOptions: ["hash1"],
        // 条件
        children: [
          {
            id: 2,
            parentId: 1,
            level: 2,
            sourceField: "data_1",
            sourceAllOptions: true,
          },
          {
            id: 3,
            parentId: 1,
            level: 2,
            sourceField: "data_2",
            sourceOptions: ["hash_1", "hash_2", "hash_3"],
          },
          {
            id: 7,
            parentId: 1,
            level: 2,
            sourceField: "data_2",
            sourceOptions: ["hash_1", "hash_2", "hash_3"],
          }
        ]
      },
      {
        id: 4,
        parentId: 0,
        level: 1,
        // 逻辑关系
        logicComparator: 'and',
        // 题目，组合题or矩阵题
        targetField: "data_10",
        targetSubFields: ["data_10_1"],
        targetFieldOptions: ["hash3"],
        // 条件
        children: [
          {
            id: 5,
            parentId: 4,
            level: 2,
            // 条件
            sourceField: "data_3",
            sourceOptions: ["hash_2"],
          },
          {
            id: 6,
            parentId: 4,
            level: 2,
            // 条件
            sourceField: "data_3",
            sourceOptions: ["hash_1", "hash_3"],
          },
        ]
      }
    ]
  }
]

