module.exports = {
  paths: {
    // TODO API
    '/todos': {
      post: {
        tags: ['todo'],
        summary: 'Create a new todo',
        description: '',
        operationId: 'add',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Required payload for creating new todo',
            required: true,
            schema: {
              $ref: '#/definitions/Todos',
            },
          },
        ],
        security: [
          {
            access_token: [],
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/Todos',
            },
          },
          400: {
            description: 'Invalid Todo',
          },
        },
      },
    },
    // subtasks API
    '/subtasks': {
      post: {
        tags: ['subtasks'],
        summary: 'Create a new subtasks',
        description: '',
        operationId: 'add',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Required payload for creating new todo',
            required: true,
            schema: {
              $ref: '#/definitions/Subtasks',
            },
          },
        ],
        security: [
          {
            access_token: [],
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/Subtasks',
            },
          },
          400: {
            description: 'Invalid Subtask',
          },
        },
      },
    },
  },
};
