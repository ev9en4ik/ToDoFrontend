export const collectionsList = [
    {
        id: 1,
        title: 'Personal',
        color: 'purple',
        icon: 'heart',
        tasks: [
            {
                id: 1,
                title: 'Finish the essy collaboration',
                isCompleted: true,
                datetime: new Date('December 17, 2022 03:24:00'),
                subtasks: []
            },
            {
                id: 2,
                title: 'Go to home',
                isCompleted: false,
                datetime: new Date('Sun Apr 23 2023 23:37:18 GMT+0300 (за східноєвропейським літнім часом)'),
                subtasks: []
            },
            {
                id: 4,
                title: 'buy car',
                isCompleted: false,
                datetime: new Date('December 17, 2022 03:24:00'),
                subtasks: [
                    {
                        id: 1,
                        title: 'collect money',
                        isCompleted: false,
                        datetime: new Date('December 17, 2022 03:24:00'),
                    }, {
                        id: 2,
                        title: 'find car',
                        isCompleted: false,
                        datetime: new Date('December 17, 2022 03:24:00'),
                    }, {
                        id: 3,
                        title: 'buy car',
                        isCompleted: false,
                        datetime: new Date('December 17, 2022 03:24:00'),
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'School',
        color: 'slate',
        icon: 'home',
        tasks: [
            {
                id: 3,
                title: 'Finish studying react',
                isCompleted: false,
                datetime: new Date('December 17, 2022 03:24:00'),
                subtasks: [
                    {
                        id: 4,
                        title: 'create new project',
                        isCompleted: false,
                        datetime: new Date('December 17, 2022 03:24:00'),
                    }, {
                        id: 5,
                        title: 'study redux',
                        isCompleted: false,
                        datetime: new Date('December 17, 2022 03:24:00'),
                    }, {
                        id: 6,
                        title: 'pass a test',
                        isCompleted: false,
                        datetime: new Date('December 17, 2022 03:24:00'),
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Design',
        color: 'slate',
        icon: 'chip',
        tasks: []
    },
    {
        id: 4,
        title: 'Groceries',
        color: 'slate',
        icon: 'cart',
        tasks: []

    }];