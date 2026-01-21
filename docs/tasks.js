module.exports = {
    paths: {
        "/create": {
            post: {
                tags: ["Tasks"],
                description: "Create Task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Task created successfully"
                    },
                    500: {
                        description: "Server error"
                    }
                }
            }
        },
        "/": {
            get: {
                tags: ["Tasks"],
                description: "Get Tasks",
                operationId: "getTasks",
                parameters: []
            }
        },
        "/id/{_id}": {
            get: {
                tags: ["Tasks"],
                description: "Get Task By Id",
                operationId: "getTaskById",
                parameters: [{
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/_id"
                    },
                    description: "Id of the task"
                }],
                responses: {
                    500: {
                        description: "Server error"
                    }
                }
            },
            put: {
                tags: ["Tasks"],
                description: "Update Task",
                operationId: "updateTask",
                parameters: [{
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/_id"
                    },
                    description: "Id of the task to update"
                }],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Task updated successfully"
                    },
                    500: {
                        description: "Server error"
                    }
                }
            },
            delete: {
                tags: ["Tasks"],
                description: "Delete Task",
                operationId: "deleteTask",
                parameters: [{
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/_id"
                    },
                    description: "Id of the task to delete"
                }],
                responses: {
                    201: {
                        description: "Task deleted successfully"
                    },
                    500: {
                        description: "Server error"
                    }
                }
            }
        },
        "/markAsCompleted/{_id}": {
            put: {
                tags: ["Tasks"],
                description: "Mark As Completed",
                operationId: "markAsCompleted",
                parameters: [{
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/_id"
                    },
                    description: "Id of the task to mark as complete"
                }],
                responses: {
                    201: {
                        description: "Task updated successfully"
                    },
                    500: {
                        description: "Server error"
                    }
                }
            }
        },
    }
};