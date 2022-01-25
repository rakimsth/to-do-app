module.exports = {
  paths: {
    // TODO API
    '/todos': {
      post: {
        tags: ['todo'],
        summary: 'Create a new todo',
        description: 'return newly added Todo',
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
          500: {
            description: 'Invalid Todo',
          },
        },
      },
      get: {
        tags: ['todo'],
        summary: 'Get all todos list with their subtasks',
        description: 'returns all the todos list with their respective subtasks',
        operationId: 'list',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [],
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
          500: {
            description: 'Invalid Operation',
          },
        },
      },
    },
    '/todos/{id}': {
      get: {
        tags: ['todo'],
        summary: 'Find todo by ID',
        description: 'Returns a single todo',
        operationId: 'getById',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of todo to return',
            required: true,
            type: 'string',
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
            description: 'Invalid ID supplied',
          },
          500: {
            description: 'Invalid Operation',
          },
          404: {
            description: 'Todo not found',
          },
        },
      },
      put: {
        tags: ['todo'],
        summary: 'Update todo status by ID',
        description: 'Returns a single todo with updated status',
        operationId: 'update',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of todo that needs to be updated',
            required: true,
            type: 'string',
          },
          {
            in: 'formData',
            name: 'status',
            description: 'Required payload for updating new todo',
            required: true,
            type: 'string',
            enum: ['pending', 'completed'],
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
            description: 'Invalid ID supplied',
          },
          500: {
            description: 'Invalid Operation',
          },
          404: {
            description: 'Todo not found',
          },
        },
      },
      delete: {
        tags: ['todo'],
        summary: 'delete todo status by ID',
        description: 'deletes a single todo',
        operationId: 'delete',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of todo that needs to be deleted',
            required: true,
            type: 'string',
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
            description: 'Invalid ID supplied',
          },
          500: {
            description: 'Invalid Operation',
          },
          404: {
            description: 'Todo not found',
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
          500: {
            description: 'Invalid Subtask',
          },
        },
      },
    },
  },
};
