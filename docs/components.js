module.exports = {
    components: {
        schemas: {
            Task: {
                type: "object",
                properties: {
                    _id: {
                        type: "objectId",
                        description: "Task identification number",
                        example: "5748893290397045"
                    },
                    title: {
                        type: "string",
                        description: "Title of the task",
                        example: "Feed the cat"
                    },
                    completed: {
                        type: "boolean",
                        description: "If task is completed or not",
                        example: "false"
                    }
                }
            },
            _id: {
                type: "objectId",
                description: "Task identification number",
                example: "5748893290397045"
            },
        }
    }
};