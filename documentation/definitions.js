module.exports = {
  definitions: {
    // Schedules Model
    Todos: {
      type: 'object',
      properties: {
        title: { type: 'string', description: 'Title of the Todo' },
        status: {
          type: 'string',
          description: 'status of todo; pending/completed',
          enum: ['pending', 'completed'],
          example: 'pending',
        },
      },
    },
    Subtasks: {
      type: 'object',
      properties: {
        title: { type: 'string', description: 'Title of the Subtask' },
        status: {
          type: 'string',
          description: 'status of todo; pending/completed',
          enum: ['pending', 'completed'],
        },
        todo_id: { type: 'string', description: 'Id of the Todo', required: true },
      },
    },
  },
};
