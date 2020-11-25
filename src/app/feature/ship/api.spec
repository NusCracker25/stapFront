{
  "openapi": "3.0.0",
  "info": {
    "title": "stapshipdb",
    "version": "0.0.1",
    "description": "ship database",
    "contact": {}
  },
  "paths": {
    "/books/count": {
      "get": {
        "x-controller-name": "BookController",
        "x-operation-name": "count",
        "tags": [
          "BookController"
        ],
        "responses": {
          "200": {
            "description": "Book model count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Book.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Book>"
                }
              }
            }
          }
        ],
        "operationId": "BookController.count"
      }
    },
    "/books/{id}/modifications": {
      "post": {
        "x-controller-name": "BookModificationController",
        "x-operation-name": "create",
        "tags": [
          "BookModificationController"
        ],
        "responses": {
          "200": {
            "description": "Book model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Modification"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewModificationInBook"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "BookModificationController.create"
      },
      "patch": {
        "x-controller-name": "BookModificationController",
        "x-operation-name": "patch",
        "tags": [
          "BookModificationController"
        ],
        "responses": {
          "200": {
            "description": "Book.Modification PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ModificationPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "BookModificationController.patch"
      },
      "get": {
        "x-controller-name": "BookModificationController",
        "x-operation-name": "find",
        "tags": [
          "BookModificationController"
        ],
        "responses": {
          "200": {
            "description": "Array of Book has many Modification",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Modification"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "BookModificationController.find"
      },
      "delete": {
        "x-controller-name": "BookModificationController",
        "x-operation-name": "delete",
        "tags": [
          "BookModificationController"
        ],
        "responses": {
          "200": {
            "description": "Book.Modification DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "operationId": "BookModificationController.delete"
      }
    },
    "/books/{id}/people": {
      "post": {
        "x-controller-name": "BookPeopleController",
        "x-operation-name": "create",
        "tags": [
          "BookPeopleController"
        ],
        "responses": {
          "200": {
            "description": "Book model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/People"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewPeopleInBook"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "BookPeopleController.create"
      },
      "patch": {
        "x-controller-name": "BookPeopleController",
        "x-operation-name": "patch",
        "tags": [
          "BookPeopleController"
        ],
        "responses": {
          "200": {
            "description": "Book.People PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "People.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<People>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PeoplePartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "BookPeopleController.patch"
      },
      "get": {
        "x-controller-name": "BookPeopleController",
        "x-operation-name": "find",
        "tags": [
          "BookPeopleController"
        ],
        "responses": {
          "200": {
            "description": "Array of Book has many People",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/People"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "BookPeopleController.find"
      },
      "delete": {
        "x-controller-name": "BookPeopleController",
        "x-operation-name": "delete",
        "tags": [
          "BookPeopleController"
        ],
        "responses": {
          "200": {
            "description": "Book.People DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "People.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<People>"
                }
              }
            }
          }
        ],
        "operationId": "BookPeopleController.delete"
      }
    },
    "/books/{id}": {
      "put": {
        "x-controller-name": "BookController",
        "x-operation-name": "replaceById",
        "tags": [
          "BookController"
        ],
        "responses": {
          "204": {
            "description": "Book PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Book"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "BookController.replaceById"
      },
      "patch": {
        "x-controller-name": "BookController",
        "x-operation-name": "updateById",
        "tags": [
          "BookController"
        ],
        "responses": {
          "204": {
            "description": "Book PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BookPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "BookController.updateById"
      },
      "get": {
        "x-controller-name": "BookController",
        "x-operation-name": "findById",
        "tags": [
          "BookController"
        ],
        "responses": {
          "200": {
            "description": "Book model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BookWithRelations"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Book.Filter"
                }
              }
            }
          }
        ],
        "operationId": "BookController.findById"
      },
      "delete": {
        "x-controller-name": "BookController",
        "x-operation-name": "deleteById",
        "tags": [
          "BookController"
        ],
        "responses": {
          "204": {
            "description": "Book DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "BookController.deleteById"
      }
    },
    "/books": {
      "post": {
        "x-controller-name": "BookController",
        "x-operation-name": "create",
        "tags": [
          "BookController"
        ],
        "responses": {
          "200": {
            "description": "Book model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Book"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewBook"
              }
            }
          }
        },
        "operationId": "BookController.create"
      },
      "patch": {
        "x-controller-name": "BookController",
        "x-operation-name": "updateAll",
        "tags": [
          "BookController"
        ],
        "responses": {
          "200": {
            "description": "Book PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Book.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Book>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BookPartial"
              }
            }
          }
        },
        "operationId": "BookController.updateAll"
      },
      "get": {
        "x-controller-name": "BookController",
        "x-operation-name": "find",
        "tags": [
          "BookController"
        ],
        "responses": {
          "200": {
            "description": "Array of Book model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BookWithRelations"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Book.Filter1"
                }
              }
            }
          }
        ],
        "operationId": "BookController.find"
      }
    },
    "/definitions/count": {
      "get": {
        "x-controller-name": "DefinitionController",
        "x-operation-name": "count",
        "tags": [
          "DefinitionController"
        ],
        "responses": {
          "200": {
            "description": "Definition model count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Definition.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Definition>"
                }
              }
            }
          }
        ],
        "operationId": "DefinitionController.count"
      }
    },
    "/definitions/{id}/modifications": {
      "post": {
        "x-controller-name": "DefinitionModificationController",
        "x-operation-name": "create",
        "tags": [
          "DefinitionModificationController"
        ],
        "responses": {
          "200": {
            "description": "Definition model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Modification"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewModificationInDefinition"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "DefinitionModificationController.create"
      },
      "patch": {
        "x-controller-name": "DefinitionModificationController",
        "x-operation-name": "patch",
        "tags": [
          "DefinitionModificationController"
        ],
        "responses": {
          "200": {
            "description": "Definition.Modification PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ModificationPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "DefinitionModificationController.patch"
      },
      "get": {
        "x-controller-name": "DefinitionModificationController",
        "x-operation-name": "find",
        "tags": [
          "DefinitionModificationController"
        ],
        "responses": {
          "200": {
            "description": "Array of Definition has many Modification",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Modification"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "DefinitionModificationController.find"
      },
      "delete": {
        "x-controller-name": "DefinitionModificationController",
        "x-operation-name": "delete",
        "tags": [
          "DefinitionModificationController"
        ],
        "responses": {
          "200": {
            "description": "Definition.Modification DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "operationId": "DefinitionModificationController.delete"
      }
    },
    "/definitions/{id}/reference": {
      "post": {
        "x-controller-name": "DefinitionReferenceController",
        "x-operation-name": "create",
        "tags": [
          "DefinitionReferenceController"
        ],
        "responses": {
          "200": {
            "description": "Definition model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reference"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewReferenceInDefinition"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "DefinitionReferenceController.create"
      },
      "patch": {
        "x-controller-name": "DefinitionReferenceController",
        "x-operation-name": "patch",
        "tags": [
          "DefinitionReferenceController"
        ],
        "responses": {
          "200": {
            "description": "Definition.Reference PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Reference.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Reference>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ReferencePartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "DefinitionReferenceController.patch"
      },
      "get": {
        "x-controller-name": "DefinitionReferenceController",
        "x-operation-name": "get",
        "tags": [
          "DefinitionReferenceController"
        ],
        "responses": {
          "200": {
            "description": "Definition has one Reference",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reference"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "DefinitionReferenceController.get"
      },
      "delete": {
        "x-controller-name": "DefinitionReferenceController",
        "x-operation-name": "delete",
        "tags": [
          "DefinitionReferenceController"
        ],
        "responses": {
          "200": {
            "description": "Definition.Reference DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Reference.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Reference>"
                }
              }
            }
          }
        ],
        "operationId": "DefinitionReferenceController.delete"
      }
    },
    "/definitions/{id}": {
      "put": {
        "x-controller-name": "DefinitionController",
        "x-operation-name": "replaceById",
        "tags": [
          "DefinitionController"
        ],
        "responses": {
          "204": {
            "description": "Definition PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Definition"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "DefinitionController.replaceById"
      },
      "patch": {
        "x-controller-name": "DefinitionController",
        "x-operation-name": "updateById",
        "tags": [
          "DefinitionController"
        ],
        "responses": {
          "204": {
            "description": "Definition PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DefinitionPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "DefinitionController.updateById"
      },
      "get": {
        "x-controller-name": "DefinitionController",
        "x-operation-name": "findById",
        "tags": [
          "DefinitionController"
        ],
        "responses": {
          "200": {
            "description": "Definition model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DefinitionWithRelations"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Definition.Filter"
                }
              }
            }
          }
        ],
        "operationId": "DefinitionController.findById"
      },
      "delete": {
        "x-controller-name": "DefinitionController",
        "x-operation-name": "deleteById",
        "tags": [
          "DefinitionController"
        ],
        "responses": {
          "204": {
            "description": "Definition DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "DefinitionController.deleteById"
      }
    },
    "/definitions": {
      "post": {
        "x-controller-name": "DefinitionController",
        "x-operation-name": "create",
        "tags": [
          "DefinitionController"
        ],
        "responses": {
          "200": {
            "description": "Definition model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Definition"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewDefinition"
              }
            }
          }
        },
        "operationId": "DefinitionController.create"
      },
      "patch": {
        "x-controller-name": "DefinitionController",
        "x-operation-name": "updateAll",
        "tags": [
          "DefinitionController"
        ],
        "responses": {
          "200": {
            "description": "Definition PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Definition.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Definition>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DefinitionPartial"
              }
            }
          }
        },
        "operationId": "DefinitionController.updateAll"
      },
      "get": {
        "x-controller-name": "DefinitionController",
        "x-operation-name": "find",
        "tags": [
          "DefinitionController"
        ],
        "responses": {
          "200": {
            "description": "Array of Definition model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/DefinitionWithRelations"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Definition.Filter1"
                }
              }
            }
          }
        ],
        "operationId": "DefinitionController.find"
      }
    },
    "/modifications/count": {
      "get": {
        "x-controller-name": "ModificationController",
        "x-operation-name": "count",
        "tags": [
          "ModificationController"
        ],
        "responses": {
          "200": {
            "description": "Modification model count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "operationId": "ModificationController.count"
      }
    },
    "/modifications/{id}": {
      "put": {
        "x-controller-name": "ModificationController",
        "x-operation-name": "replaceById",
        "tags": [
          "ModificationController"
        ],
        "responses": {
          "204": {
            "description": "Modification PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Modification"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ModificationController.replaceById"
      },
      "patch": {
        "x-controller-name": "ModificationController",
        "x-operation-name": "updateById",
        "tags": [
          "ModificationController"
        ],
        "responses": {
          "204": {
            "description": "Modification PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ModificationPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ModificationController.updateById"
      },
      "get": {
        "x-controller-name": "ModificationController",
        "x-operation-name": "findById",
        "tags": [
          "ModificationController"
        ],
        "responses": {
          "200": {
            "description": "Modification model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ModificationWithRelations"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Modification.Filter"
                }
              }
            }
          }
        ],
        "operationId": "ModificationController.findById"
      },
      "delete": {
        "x-controller-name": "ModificationController",
        "x-operation-name": "deleteById",
        "tags": [
          "ModificationController"
        ],
        "responses": {
          "204": {
            "description": "Modification DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "ModificationController.deleteById"
      }
    },
    "/modifications": {
      "post": {
        "x-controller-name": "ModificationController",
        "x-operation-name": "create",
        "tags": [
          "ModificationController"
        ],
        "responses": {
          "200": {
            "description": "Modification model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Modification"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewModification"
              }
            }
          }
        },
        "operationId": "ModificationController.create"
      },
      "patch": {
        "x-controller-name": "ModificationController",
        "x-operation-name": "updateAll",
        "tags": [
          "ModificationController"
        ],
        "responses": {
          "200": {
            "description": "Modification PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ModificationPartial"
              }
            }
          }
        },
        "operationId": "ModificationController.updateAll"
      },
      "get": {
        "x-controller-name": "ModificationController",
        "x-operation-name": "find",
        "tags": [
          "ModificationController"
        ],
        "responses": {
          "200": {
            "description": "Array of Modification model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ModificationWithRelations"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Modification.Filter1"
                }
              }
            }
          }
        ],
        "operationId": "ModificationController.find"
      }
    },
    "/people/count": {
      "get": {
        "x-controller-name": "PeopleController",
        "x-operation-name": "count",
        "tags": [
          "PeopleController"
        ],
        "responses": {
          "200": {
            "description": "People model count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "People.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<People>"
                }
              }
            }
          }
        ],
        "operationId": "PeopleController.count"
      }
    },
    "/people/{id}/modifications": {
      "post": {
        "x-controller-name": "PeopleModificationController",
        "x-operation-name": "create",
        "tags": [
          "PeopleModificationController"
        ],
        "responses": {
          "200": {
            "description": "People model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Modification"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewModificationInPeople"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "PeopleModificationController.create"
      },
      "patch": {
        "x-controller-name": "PeopleModificationController",
        "x-operation-name": "patch",
        "tags": [
          "PeopleModificationController"
        ],
        "responses": {
          "200": {
            "description": "People.Modification PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ModificationPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "PeopleModificationController.patch"
      },
      "get": {
        "x-controller-name": "PeopleModificationController",
        "x-operation-name": "find",
        "tags": [
          "PeopleModificationController"
        ],
        "responses": {
          "200": {
            "description": "Array of People has many Modification",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Modification"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "PeopleModificationController.find"
      },
      "delete": {
        "x-controller-name": "PeopleModificationController",
        "x-operation-name": "delete",
        "tags": [
          "PeopleModificationController"
        ],
        "responses": {
          "200": {
            "description": "People.Modification DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "operationId": "PeopleModificationController.delete"
      }
    },
    "/people/{id}": {
      "put": {
        "x-controller-name": "PeopleController",
        "x-operation-name": "replaceById",
        "tags": [
          "PeopleController"
        ],
        "responses": {
          "204": {
            "description": "People PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/People"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "PeopleController.replaceById"
      },
      "patch": {
        "x-controller-name": "PeopleController",
        "x-operation-name": "updateById",
        "tags": [
          "PeopleController"
        ],
        "responses": {
          "204": {
            "description": "People PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PeoplePartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "PeopleController.updateById"
      },
      "get": {
        "x-controller-name": "PeopleController",
        "x-operation-name": "findById",
        "tags": [
          "PeopleController"
        ],
        "responses": {
          "200": {
            "description": "People model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PeopleWithRelations"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/People.Filter"
                }
              }
            }
          }
        ],
        "operationId": "PeopleController.findById"
      },
      "delete": {
        "x-controller-name": "PeopleController",
        "x-operation-name": "deleteById",
        "tags": [
          "PeopleController"
        ],
        "responses": {
          "204": {
            "description": "People DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "PeopleController.deleteById"
      }
    },
    "/people": {
      "post": {
        "x-controller-name": "PeopleController",
        "x-operation-name": "create",
        "tags": [
          "PeopleController"
        ],
        "responses": {
          "200": {
            "description": "People model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/People"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewPeople"
              }
            }
          }
        },
        "operationId": "PeopleController.create"
      },
      "patch": {
        "x-controller-name": "PeopleController",
        "x-operation-name": "updateAll",
        "tags": [
          "PeopleController"
        ],
        "responses": {
          "200": {
            "description": "People PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "People.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<People>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PeoplePartial"
              }
            }
          }
        },
        "operationId": "PeopleController.updateAll"
      },
      "get": {
        "x-controller-name": "PeopleController",
        "x-operation-name": "find",
        "tags": [
          "PeopleController"
        ],
        "responses": {
          "200": {
            "description": "Array of People model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PeopleWithRelations"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/People.Filter1"
                }
              }
            }
          }
        ],
        "operationId": "PeopleController.find"
      }
    },
    "/ping": {
      "get": {
        "x-controller-name": "PingController",
        "x-operation-name": "ping",
        "tags": [
          "PingController"
        ],
        "responses": {
          "200": {
            "description": "Ping Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PingResponse"
                }
              }
            }
          }
        },
        "operationId": "PingController.ping"
      }
    },
    "/references/count": {
      "get": {
        "x-controller-name": "ReferenceController",
        "x-operation-name": "count",
        "tags": [
          "ReferenceController"
        ],
        "responses": {
          "200": {
            "description": "Reference model count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Reference.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Reference>"
                }
              }
            }
          }
        ],
        "operationId": "ReferenceController.count"
      }
    },
    "/references/{id}/book": {
      "post": {
        "x-controller-name": "ReferenceBookController",
        "x-operation-name": "create",
        "tags": [
          "ReferenceBookController"
        ],
        "responses": {
          "200": {
            "description": "Reference model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Book"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewBookInReference"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ReferenceBookController.create"
      },
      "patch": {
        "x-controller-name": "ReferenceBookController",
        "x-operation-name": "patch",
        "tags": [
          "ReferenceBookController"
        ],
        "responses": {
          "200": {
            "description": "Reference.Book PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Book.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Book>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BookPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ReferenceBookController.patch"
      },
      "get": {
        "x-controller-name": "ReferenceBookController",
        "x-operation-name": "get",
        "tags": [
          "ReferenceBookController"
        ],
        "responses": {
          "200": {
            "description": "Reference has one Book",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Book"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "ReferenceBookController.get"
      },
      "delete": {
        "x-controller-name": "ReferenceBookController",
        "x-operation-name": "delete",
        "tags": [
          "ReferenceBookController"
        ],
        "responses": {
          "200": {
            "description": "Reference.Book DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Book.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Book>"
                }
              }
            }
          }
        ],
        "operationId": "ReferenceBookController.delete"
      }
    },
    "/references/{id}/modifications": {
      "post": {
        "x-controller-name": "ReferenceModificationController",
        "x-operation-name": "create",
        "tags": [
          "ReferenceModificationController"
        ],
        "responses": {
          "200": {
            "description": "Reference model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Modification"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewModificationInReference"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ReferenceModificationController.create"
      },
      "patch": {
        "x-controller-name": "ReferenceModificationController",
        "x-operation-name": "patch",
        "tags": [
          "ReferenceModificationController"
        ],
        "responses": {
          "200": {
            "description": "Reference.Modification PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ModificationPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ReferenceModificationController.patch"
      },
      "get": {
        "x-controller-name": "ReferenceModificationController",
        "x-operation-name": "find",
        "tags": [
          "ReferenceModificationController"
        ],
        "responses": {
          "200": {
            "description": "Array of Reference has many Modification",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Modification"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "ReferenceModificationController.find"
      },
      "delete": {
        "x-controller-name": "ReferenceModificationController",
        "x-operation-name": "delete",
        "tags": [
          "ReferenceModificationController"
        ],
        "responses": {
          "200": {
            "description": "Reference.Modification DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "operationId": "ReferenceModificationController.delete"
      }
    },
    "/references/{id}": {
      "put": {
        "x-controller-name": "ReferenceController",
        "x-operation-name": "replaceById",
        "tags": [
          "ReferenceController"
        ],
        "responses": {
          "204": {
            "description": "Reference PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Reference"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ReferenceController.replaceById"
      },
      "patch": {
        "x-controller-name": "ReferenceController",
        "x-operation-name": "updateById",
        "tags": [
          "ReferenceController"
        ],
        "responses": {
          "204": {
            "description": "Reference PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ReferencePartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ReferenceController.updateById"
      },
      "get": {
        "x-controller-name": "ReferenceController",
        "x-operation-name": "findById",
        "tags": [
          "ReferenceController"
        ],
        "responses": {
          "200": {
            "description": "Reference model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReferenceWithRelations"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reference.Filter"
                }
              }
            }
          }
        ],
        "operationId": "ReferenceController.findById"
      },
      "delete": {
        "x-controller-name": "ReferenceController",
        "x-operation-name": "deleteById",
        "tags": [
          "ReferenceController"
        ],
        "responses": {
          "204": {
            "description": "Reference DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "ReferenceController.deleteById"
      }
    },
    "/references": {
      "post": {
        "x-controller-name": "ReferenceController",
        "x-operation-name": "create",
        "tags": [
          "ReferenceController"
        ],
        "responses": {
          "200": {
            "description": "Reference model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reference"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewReference"
              }
            }
          }
        },
        "operationId": "ReferenceController.create"
      },
      "patch": {
        "x-controller-name": "ReferenceController",
        "x-operation-name": "updateAll",
        "tags": [
          "ReferenceController"
        ],
        "responses": {
          "200": {
            "description": "Reference PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Reference.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Reference>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ReferencePartial"
              }
            }
          }
        },
        "operationId": "ReferenceController.updateAll"
      },
      "get": {
        "x-controller-name": "ReferenceController",
        "x-operation-name": "find",
        "tags": [
          "ReferenceController"
        ],
        "responses": {
          "200": {
            "description": "Array of Reference model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ReferenceWithRelations"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reference.Filter1"
                }
              }
            }
          }
        ],
        "operationId": "ReferenceController.find"
      }
    },
    "/ships/count": {
      "get": {
        "x-controller-name": "ShipController",
        "x-operation-name": "count",
        "tags": [
          "ShipController"
        ],
        "responses": {
          "200": {
            "description": "Ship model count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Ship.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Ship>"
                }
              }
            }
          }
        ],
        "operationId": "ShipController.count"
      }
    },
    "/ships/{id}/modifications": {
      "post": {
        "x-controller-name": "ShipModificationController",
        "x-operation-name": "create",
        "tags": [
          "ShipModificationController"
        ],
        "responses": {
          "200": {
            "description": "Ship model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Modification"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewModificationInShip"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ShipModificationController.create"
      },
      "patch": {
        "x-controller-name": "ShipModificationController",
        "x-operation-name": "patch",
        "tags": [
          "ShipModificationController"
        ],
        "responses": {
          "200": {
            "description": "Ship.Modification PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ModificationPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ShipModificationController.patch"
      },
      "get": {
        "x-controller-name": "ShipModificationController",
        "x-operation-name": "find",
        "tags": [
          "ShipModificationController"
        ],
        "responses": {
          "200": {
            "description": "Array of Ship has many Modification",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Modification"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "ShipModificationController.find"
      },
      "delete": {
        "x-controller-name": "ShipModificationController",
        "x-operation-name": "delete",
        "tags": [
          "ShipModificationController"
        ],
        "responses": {
          "200": {
            "description": "Ship.Modification DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "operationId": "ShipModificationController.delete"
      }
    },
    "/ships/{id}": {
      "put": {
        "x-controller-name": "ShipController",
        "x-operation-name": "replaceById",
        "tags": [
          "ShipController"
        ],
        "responses": {
          "204": {
            "description": "Ship PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Ship"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ShipController.replaceById"
      },
      "patch": {
        "x-controller-name": "ShipController",
        "x-operation-name": "updateById",
        "tags": [
          "ShipController"
        ],
        "responses": {
          "204": {
            "description": "Ship PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ShipPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ShipController.updateById"
      },
      "get": {
        "x-controller-name": "ShipController",
        "x-operation-name": "findById",
        "tags": [
          "ShipController"
        ],
        "responses": {
          "200": {
            "description": "Ship model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ShipWithRelations"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Ship.Filter"
                }
              }
            }
          }
        ],
        "operationId": "ShipController.findById"
      },
      "delete": {
        "x-controller-name": "ShipController",
        "x-operation-name": "deleteById",
        "tags": [
          "ShipController"
        ],
        "responses": {
          "204": {
            "description": "Ship DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "ShipController.deleteById"
      }
    },
    "/ships": {
      "post": {
        "x-controller-name": "ShipController",
        "x-operation-name": "create",
        "tags": [
          "ShipController"
        ],
        "responses": {
          "200": {
            "description": "Ship model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Ship"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewShip"
              }
            }
          }
        },
        "operationId": "ShipController.create"
      },
      "patch": {
        "x-controller-name": "ShipController",
        "x-operation-name": "updateAll",
        "tags": [
          "ShipController"
        ],
        "responses": {
          "200": {
            "description": "Ship PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Ship.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Ship>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ShipPartial"
              }
            }
          }
        },
        "operationId": "ShipController.updateAll"
      },
      "get": {
        "x-controller-name": "ShipController",
        "x-operation-name": "find",
        "tags": [
          "ShipController"
        ],
        "responses": {
          "200": {
            "description": "Array of Ship model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ShipWithRelations"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Ship.Filter1"
                }
              }
            }
          }
        ],
        "operationId": "ShipController.find"
      }
    },
    "/terms/count": {
      "get": {
        "x-controller-name": "TermController",
        "x-operation-name": "count",
        "tags": [
          "TermController"
        ],
        "responses": {
          "200": {
            "description": "Term model count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Term.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Term>"
                }
              }
            }
          }
        ],
        "operationId": "TermController.count"
      }
    },
    "/terms/{id}/definitions": {
      "post": {
        "x-controller-name": "TermDefinitionController",
        "x-operation-name": "create",
        "tags": [
          "TermDefinitionController"
        ],
        "responses": {
          "200": {
            "description": "Term model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Definition"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewDefinitionInTerm"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TermDefinitionController.create"
      },
      "patch": {
        "x-controller-name": "TermDefinitionController",
        "x-operation-name": "patch",
        "tags": [
          "TermDefinitionController"
        ],
        "responses": {
          "200": {
            "description": "Term.Definition PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Definition.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Definition>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DefinitionPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TermDefinitionController.patch"
      },
      "get": {
        "x-controller-name": "TermDefinitionController",
        "x-operation-name": "find",
        "tags": [
          "TermDefinitionController"
        ],
        "responses": {
          "200": {
            "description": "Array of Term has many Definition",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Definition"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "TermDefinitionController.find"
      },
      "delete": {
        "x-controller-name": "TermDefinitionController",
        "x-operation-name": "delete",
        "tags": [
          "TermDefinitionController"
        ],
        "responses": {
          "200": {
            "description": "Term.Definition DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Definition.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Definition>"
                }
              }
            }
          }
        ],
        "operationId": "TermDefinitionController.delete"
      }
    },
    "/terms/{id}/modifications": {
      "post": {
        "x-controller-name": "TermModificationController",
        "x-operation-name": "create",
        "tags": [
          "TermModificationController"
        ],
        "responses": {
          "200": {
            "description": "Term model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Modification"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewModificationInTerm"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TermModificationController.create"
      },
      "patch": {
        "x-controller-name": "TermModificationController",
        "x-operation-name": "patch",
        "tags": [
          "TermModificationController"
        ],
        "responses": {
          "200": {
            "description": "Term.Modification PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ModificationPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TermModificationController.patch"
      },
      "get": {
        "x-controller-name": "TermModificationController",
        "x-operation-name": "find",
        "tags": [
          "TermModificationController"
        ],
        "responses": {
          "200": {
            "description": "Array of Term has many Modification",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Modification"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "TermModificationController.find"
      },
      "delete": {
        "x-controller-name": "TermModificationController",
        "x-operation-name": "delete",
        "tags": [
          "TermModificationController"
        ],
        "responses": {
          "200": {
            "description": "Term.Modification DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "operationId": "TermModificationController.delete"
      }
    },
    "/terms/{id}/themes": {
      "post": {
        "x-controller-name": "TermThemeController",
        "x-operation-name": "create",
        "tags": [
          "TermThemeController"
        ],
        "responses": {
          "200": {
            "description": "Term model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Theme"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewThemeInTerm"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TermThemeController.create"
      },
      "patch": {
        "x-controller-name": "TermThemeController",
        "x-operation-name": "patch",
        "tags": [
          "TermThemeController"
        ],
        "responses": {
          "200": {
            "description": "Term.Theme PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Theme.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Theme>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ThemePartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TermThemeController.patch"
      },
      "get": {
        "x-controller-name": "TermThemeController",
        "x-operation-name": "find",
        "tags": [
          "TermThemeController"
        ],
        "responses": {
          "200": {
            "description": "Array of Term has many Theme",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Theme"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "TermThemeController.find"
      },
      "delete": {
        "x-controller-name": "TermThemeController",
        "x-operation-name": "delete",
        "tags": [
          "TermThemeController"
        ],
        "responses": {
          "200": {
            "description": "Term.Theme DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Theme.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Theme>"
                }
              }
            }
          }
        ],
        "operationId": "TermThemeController.delete"
      }
    },
    "/terms/{id}": {
      "put": {
        "x-controller-name": "TermController",
        "x-operation-name": "replaceById",
        "tags": [
          "TermController"
        ],
        "responses": {
          "204": {
            "description": "Term PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Term"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TermController.replaceById"
      },
      "patch": {
        "x-controller-name": "TermController",
        "x-operation-name": "updateById",
        "tags": [
          "TermController"
        ],
        "responses": {
          "204": {
            "description": "Term PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TermPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "TermController.updateById"
      },
      "get": {
        "x-controller-name": "TermController",
        "x-operation-name": "findById",
        "tags": [
          "TermController"
        ],
        "responses": {
          "200": {
            "description": "Term model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TermWithRelations"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Term.Filter"
                }
              }
            }
          }
        ],
        "operationId": "TermController.findById"
      },
      "delete": {
        "x-controller-name": "TermController",
        "x-operation-name": "deleteById",
        "tags": [
          "TermController"
        ],
        "responses": {
          "204": {
            "description": "Term DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "TermController.deleteById"
      }
    },
    "/terms": {
      "post": {
        "x-controller-name": "TermController",
        "x-operation-name": "create",
        "tags": [
          "TermController"
        ],
        "responses": {
          "200": {
            "description": "Term model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Term"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTerm"
              }
            }
          }
        },
        "operationId": "TermController.create"
      },
      "patch": {
        "x-controller-name": "TermController",
        "x-operation-name": "updateAll",
        "tags": [
          "TermController"
        ],
        "responses": {
          "200": {
            "description": "Term PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Term.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Term>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TermPartial"
              }
            }
          }
        },
        "operationId": "TermController.updateAll"
      },
      "get": {
        "x-controller-name": "TermController",
        "x-operation-name": "find",
        "tags": [
          "TermController"
        ],
        "responses": {
          "200": {
            "description": "Array of Term model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/TermWithRelations"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Term.Filter1"
                }
              }
            }
          }
        ],
        "operationId": "TermController.find"
      }
    },
    "/themes/count": {
      "get": {
        "x-controller-name": "ThemeController",
        "x-operation-name": "count",
        "tags": [
          "ThemeController"
        ],
        "responses": {
          "200": {
            "description": "Theme model count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Theme.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Theme>"
                }
              }
            }
          }
        ],
        "operationId": "ThemeController.count"
      }
    },
    "/themes/{id}/modifications": {
      "post": {
        "x-controller-name": "ThemeModificationController",
        "x-operation-name": "create",
        "tags": [
          "ThemeModificationController"
        ],
        "responses": {
          "200": {
            "description": "Theme model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Modification"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewModificationInTheme"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ThemeModificationController.create"
      },
      "patch": {
        "x-controller-name": "ThemeModificationController",
        "x-operation-name": "patch",
        "tags": [
          "ThemeModificationController"
        ],
        "responses": {
          "200": {
            "description": "Theme.Modification PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ModificationPartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ThemeModificationController.patch"
      },
      "get": {
        "x-controller-name": "ThemeModificationController",
        "x-operation-name": "find",
        "tags": [
          "ThemeModificationController"
        ],
        "responses": {
          "200": {
            "description": "Array of Theme has many Modification",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Modification"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true
                }
              }
            }
          }
        ],
        "operationId": "ThemeModificationController.find"
      },
      "delete": {
        "x-controller-name": "ThemeModificationController",
        "x-operation-name": "delete",
        "tags": [
          "ThemeModificationController"
        ],
        "responses": {
          "200": {
            "description": "Theme.Modification DELETE success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Modification.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Modification>"
                }
              }
            }
          }
        ],
        "operationId": "ThemeModificationController.delete"
      }
    },
    "/themes/{id}": {
      "put": {
        "x-controller-name": "ThemeController",
        "x-operation-name": "replaceById",
        "tags": [
          "ThemeController"
        ],
        "responses": {
          "204": {
            "description": "Theme PUT success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Theme"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ThemeController.replaceById"
      },
      "patch": {
        "x-controller-name": "ThemeController",
        "x-operation-name": "updateById",
        "tags": [
          "ThemeController"
        ],
        "responses": {
          "204": {
            "description": "Theme PATCH success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ThemePartial"
              }
            }
          },
          "x-parameter-index": 1
        },
        "operationId": "ThemeController.updateById"
      },
      "get": {
        "x-controller-name": "ThemeController",
        "x-operation-name": "findById",
        "tags": [
          "ThemeController"
        ],
        "responses": {
          "200": {
            "description": "Theme model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ThemeWithRelations"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          },
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Theme.Filter"
                }
              }
            }
          }
        ],
        "operationId": "ThemeController.findById"
      },
      "delete": {
        "x-controller-name": "ThemeController",
        "x-operation-name": "deleteById",
        "tags": [
          "ThemeController"
        ],
        "responses": {
          "204": {
            "description": "Theme DELETE success"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "schema": {
              "type": "number"
            },
            "required": true
          }
        ],
        "operationId": "ThemeController.deleteById"
      }
    },
    "/themes": {
      "post": {
        "x-controller-name": "ThemeController",
        "x-operation-name": "create",
        "tags": [
          "ThemeController"
        ],
        "responses": {
          "200": {
            "description": "Theme model instance",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Theme"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTheme"
              }
            }
          }
        },
        "operationId": "ThemeController.create"
      },
      "patch": {
        "x-controller-name": "ThemeController",
        "x-operation-name": "updateAll",
        "tags": [
          "ThemeController"
        ],
        "responses": {
          "200": {
            "description": "Theme PATCH success count",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/loopback.Count"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "where",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "title": "Theme.WhereFilter",
                  "additionalProperties": true,
                  "x-typescript-type": "@loopback/repository#Where<Theme>"
                }
              }
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ThemePartial"
              }
            }
          }
        },
        "operationId": "ThemeController.updateAll"
      },
      "get": {
        "x-controller-name": "ThemeController",
        "x-operation-name": "find",
        "tags": [
          "ThemeController"
        ],
        "responses": {
          "200": {
            "description": "Array of Theme model instances",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ThemeWithRelations"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Theme.Filter1"
                }
              }
            }
          }
        ],
        "operationId": "ThemeController.find"
      }
    }
  },
  "servers": [
    {
      "url": "/"
    }
  ],
  "components": {
    "schemas": {
      "Modification": {
        "title": "Modification",
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "required": [
          "field",
          "new_value"
        ],
        "additionalProperties": false
      },
      "NewModificationInBook": {
        "title": "NewModificationInBook",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'bookId'>, schemaOptions: { title: 'NewModificationInBook', exclude: [ 'id' ], optional: [ 'bookId' ] })",
        "properties": {
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "required": [
          "field",
          "new_value"
        ],
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'bookId'>"
      },
      "ModificationPartial": {
        "title": "ModificationPartial",
        "type": "object",
        "description": "(tsType: Partial<Modification>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "Partial<Modification>"
      },
      "People": {
        "title": "People",
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "birth": {
            "type": "string",
            "format": "date-time"
          },
          "death": {
            "type": "string",
            "format": "date-time"
          },
          "bookId": {
            "type": "number"
          }
        },
        "required": [
          "first_name",
          "last_name"
        ],
        "additionalProperties": true
      },
      "NewPeopleInBook": {
        "title": "NewPeopleInBook",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<People, 'id'>, 'bookId'>, schemaOptions: { title: 'NewPeopleInBook', exclude: [ 'id' ], optional: [ 'bookId' ] })",
        "properties": {
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "birth": {
            "type": "string",
            "format": "date-time"
          },
          "death": {
            "type": "string",
            "format": "date-time"
          },
          "bookId": {
            "type": "number"
          }
        },
        "required": [
          "first_name",
          "last_name"
        ],
        "additionalProperties": true,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<People, 'id'>, 'bookId'>"
      },
      "PeoplePartial": {
        "title": "PeoplePartial",
        "type": "object",
        "description": "(tsType: Partial<People>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "birth": {
            "type": "string",
            "format": "date-time"
          },
          "death": {
            "type": "string",
            "format": "date-time"
          },
          "bookId": {
            "type": "number"
          }
        },
        "additionalProperties": true,
        "x-typescript-type": "Partial<People>"
      },
      "Book": {
        "title": "Book",
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "title": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "publication": {
            "type": "string",
            "format": "date-time"
          },
          "referenceId": {
            "type": "number"
          }
        },
        "required": [
          "title"
        ],
        "additionalProperties": false
      },
      "NewBook": {
        "title": "NewBook",
        "type": "object",
        "description": "(tsType: Omit<Book, 'id'>, schemaOptions: { title: 'NewBook', exclude: [ 'id' ] })",
        "properties": {
          "title": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "publication": {
            "type": "string",
            "format": "date-time"
          },
          "referenceId": {
            "type": "number"
          }
        },
        "required": [
          "title"
        ],
        "additionalProperties": false,
        "x-typescript-type": "Omit<Book, 'id'>"
      },
      "ModificationWithRelations": {
        "title": "ModificationWithRelations",
        "type": "object",
        "description": "(tsType: ModificationWithRelations, schemaOptions: { includeRelations: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "required": [
          "field",
          "new_value"
        ],
        "additionalProperties": false,
        "x-typescript-type": "ModificationWithRelations"
      },
      "PeopleWithRelations": {
        "title": "PeopleWithRelations",
        "type": "object",
        "description": "(tsType: PeopleWithRelations, schemaOptions: { includeRelations: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "birth": {
            "type": "string",
            "format": "date-time"
          },
          "death": {
            "type": "string",
            "format": "date-time"
          },
          "bookId": {
            "type": "number"
          },
          "modifications": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ModificationWithRelations"
            }
          }
        },
        "required": [
          "first_name",
          "last_name"
        ],
        "additionalProperties": true,
        "x-typescript-type": "PeopleWithRelations"
      },
      "BookWithRelations": {
        "title": "BookWithRelations",
        "type": "object",
        "description": "(tsType: BookWithRelations, schemaOptions: { includeRelations: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "title": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "publication": {
            "type": "string",
            "format": "date-time"
          },
          "referenceId": {
            "type": "number"
          },
          "authors": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PeopleWithRelations"
            }
          },
          "modifications": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ModificationWithRelations"
            }
          }
        },
        "required": [
          "title"
        ],
        "additionalProperties": false,
        "x-typescript-type": "BookWithRelations"
      },
      "BookPartial": {
        "title": "BookPartial",
        "type": "object",
        "description": "(tsType: Partial<Book>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "title": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "publication": {
            "type": "string",
            "format": "date-time"
          },
          "referenceId": {
            "type": "number"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "Partial<Book>"
      },
      "NewModificationInDefinition": {
        "title": "NewModificationInDefinition",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'definitionId'>, schemaOptions: { title: 'NewModificationInDefinition', exclude: [ 'id' ], optional: [ 'definitionId' ] })",
        "properties": {
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "required": [
          "field",
          "new_value"
        ],
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'definitionId'>"
      },
      "Reference": {
        "title": "Reference",
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "page": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          }
        },
        "additionalProperties": false
      },
      "NewReferenceInDefinition": {
        "title": "NewReferenceInDefinition",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Reference, 'id'>, 'definitionId'>, schemaOptions: { title: 'NewReferenceInDefinition', exclude: [ 'id' ], optional: [ 'definitionId' ] })",
        "properties": {
          "page": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Reference, 'id'>, 'definitionId'>"
      },
      "ReferencePartial": {
        "title": "ReferencePartial",
        "type": "object",
        "description": "(tsType: Partial<Reference>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "page": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "Partial<Reference>"
      },
      "Definition": {
        "title": "Definition",
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "text": {
            "type": "string"
          },
          "termId": {
            "type": "number"
          }
        },
        "required": [
          "text"
        ],
        "additionalProperties": false
      },
      "NewDefinition": {
        "title": "NewDefinition",
        "type": "object",
        "description": "(tsType: Omit<Definition, 'id'>, schemaOptions: { title: 'NewDefinition', exclude: [ 'id' ] })",
        "properties": {
          "text": {
            "type": "string"
          },
          "termId": {
            "type": "number"
          }
        },
        "required": [
          "text"
        ],
        "additionalProperties": false,
        "x-typescript-type": "Omit<Definition, 'id'>"
      },
      "ReferenceWithRelations": {
        "title": "ReferenceWithRelations",
        "type": "object",
        "description": "(tsType: ReferenceWithRelations, schemaOptions: { includeRelations: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "page": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "book": {
            "$ref": "#/components/schemas/BookWithRelations"
          },
          "modifications": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ModificationWithRelations"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "ReferenceWithRelations"
      },
      "DefinitionWithRelations": {
        "title": "DefinitionWithRelations",
        "type": "object",
        "description": "(tsType: DefinitionWithRelations, schemaOptions: { includeRelations: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "text": {
            "type": "string"
          },
          "termId": {
            "type": "number"
          },
          "reference": {
            "$ref": "#/components/schemas/ReferenceWithRelations"
          },
          "modifications": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ModificationWithRelations"
            }
          }
        },
        "required": [
          "text"
        ],
        "additionalProperties": false,
        "x-typescript-type": "DefinitionWithRelations"
      },
      "DefinitionPartial": {
        "title": "DefinitionPartial",
        "type": "object",
        "description": "(tsType: Partial<Definition>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "text": {
            "type": "string"
          },
          "termId": {
            "type": "number"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "Partial<Definition>"
      },
      "NewModification": {
        "title": "NewModification",
        "type": "object",
        "description": "(tsType: Omit<Modification, 'id'>, schemaOptions: { title: 'NewModification', exclude: [ 'id' ] })",
        "properties": {
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "required": [
          "field",
          "new_value"
        ],
        "additionalProperties": false,
        "x-typescript-type": "Omit<Modification, 'id'>"
      },
      "NewModificationInPeople": {
        "title": "NewModificationInPeople",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'peopleId'>, schemaOptions: { title: 'NewModificationInPeople', exclude: [ 'id' ], optional: [ 'peopleId' ] })",
        "properties": {
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "required": [
          "field",
          "new_value"
        ],
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'peopleId'>"
      },
      "NewPeople": {
        "title": "NewPeople",
        "type": "object",
        "description": "(tsType: Omit<People, 'id'>, schemaOptions: { title: 'NewPeople', exclude: [ 'id' ] })",
        "properties": {
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "birth": {
            "type": "string",
            "format": "date-time"
          },
          "death": {
            "type": "string",
            "format": "date-time"
          },
          "bookId": {
            "type": "number"
          }
        },
        "required": [
          "first_name",
          "last_name"
        ],
        "additionalProperties": true,
        "x-typescript-type": "Omit<People, 'id'>"
      },
      "NewBookInReference": {
        "title": "NewBookInReference",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Book, 'id'>, 'referenceId'>, schemaOptions: { title: 'NewBookInReference', exclude: [ 'id' ], optional: [ 'referenceId' ] })",
        "properties": {
          "title": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "publication": {
            "type": "string",
            "format": "date-time"
          },
          "referenceId": {
            "type": "number"
          }
        },
        "required": [
          "title"
        ],
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Book, 'id'>, 'referenceId'>"
      },
      "NewModificationInReference": {
        "title": "NewModificationInReference",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'referenceId'>, schemaOptions: { title: 'NewModificationInReference', exclude: [ 'id' ], optional: [ 'referenceId' ] })",
        "properties": {
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "required": [
          "field",
          "new_value"
        ],
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'referenceId'>"
      },
      "NewReference": {
        "title": "NewReference",
        "type": "object",
        "description": "(tsType: Omit<Reference, 'id'>, schemaOptions: { title: 'NewReference', exclude: [ 'id' ] })",
        "properties": {
          "page": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "Omit<Reference, 'id'>"
      },
      "NewModificationInShip": {
        "title": "NewModificationInShip",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'shipId'>, schemaOptions: { title: 'NewModificationInShip', exclude: [ 'id' ], optional: [ 'shipId' ] })",
        "properties": {
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "required": [
          "field",
          "new_value"
        ],
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'shipId'>"
      },
      "Ship": {
        "title": "Ship",
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "length": {
            "type": "number"
          },
          "width": {
            "type": "number"
          },
          "heigth": {
            "type": "number"
          },
          "rank": {
            "type": "string"
          },
          "order": {
            "type": "string"
          },
          "construction": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "NewShip": {
        "title": "NewShip",
        "type": "object",
        "description": "(tsType: Omit<Ship, 'id'>, schemaOptions: { title: 'NewShip', exclude: [ 'id' ] })",
        "properties": {
          "name": {
            "type": "string"
          },
          "length": {
            "type": "number"
          },
          "width": {
            "type": "number"
          },
          "heigth": {
            "type": "number"
          },
          "rank": {
            "type": "string"
          },
          "order": {
            "type": "string"
          },
          "construction": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false,
        "x-typescript-type": "Omit<Ship, 'id'>"
      },
      "ShipWithRelations": {
        "title": "ShipWithRelations",
        "type": "object",
        "description": "(tsType: ShipWithRelations, schemaOptions: { includeRelations: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "length": {
            "type": "number"
          },
          "width": {
            "type": "number"
          },
          "heigth": {
            "type": "number"
          },
          "rank": {
            "type": "string"
          },
          "order": {
            "type": "string"
          },
          "construction": {
            "type": "string",
            "format": "date-time"
          },
          "modifications": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ModificationWithRelations"
            }
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false,
        "x-typescript-type": "ShipWithRelations"
      },
      "ShipPartial": {
        "title": "ShipPartial",
        "type": "object",
        "description": "(tsType: Partial<Ship>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "length": {
            "type": "number"
          },
          "width": {
            "type": "number"
          },
          "heigth": {
            "type": "number"
          },
          "rank": {
            "type": "string"
          },
          "order": {
            "type": "string"
          },
          "construction": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "Partial<Ship>"
      },
      "NewDefinitionInTerm": {
        "title": "NewDefinitionInTerm",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Definition, 'id'>, 'termId'>, schemaOptions: { title: 'NewDefinitionInTerm', exclude: [ 'id' ], optional: [ 'termId' ] })",
        "properties": {
          "text": {
            "type": "string"
          },
          "termId": {
            "type": "number"
          }
        },
        "required": [
          "text"
        ],
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Definition, 'id'>, 'termId'>"
      },
      "NewModificationInTerm": {
        "title": "NewModificationInTerm",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'termId'>, schemaOptions: { title: 'NewModificationInTerm', exclude: [ 'id' ], optional: [ 'termId' ] })",
        "properties": {
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "required": [
          "field",
          "new_value"
        ],
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'termId'>"
      },
      "Theme": {
        "title": "Theme",
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "termId": {
            "type": "number"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "NewThemeInTerm": {
        "title": "NewThemeInTerm",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Theme, 'id'>, 'termId'>, schemaOptions: { title: 'NewThemeInTerm', exclude: [ 'id' ], optional: [ 'termId' ] })",
        "properties": {
          "name": {
            "type": "string"
          },
          "termId": {
            "type": "number"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Theme, 'id'>, 'termId'>"
      },
      "ThemePartial": {
        "title": "ThemePartial",
        "type": "object",
        "description": "(tsType: Partial<Theme>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "termId": {
            "type": "number"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "Partial<Theme>"
      },
      "Term": {
        "title": "Term",
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "term": {
            "type": "string"
          }
        },
        "required": [
          "term"
        ],
        "additionalProperties": false
      },
      "NewTerm": {
        "title": "NewTerm",
        "type": "object",
        "description": "(tsType: Omit<Term, 'id'>, schemaOptions: { title: 'NewTerm', exclude: [ 'id' ] })",
        "properties": {
          "term": {
            "type": "string"
          }
        },
        "required": [
          "term"
        ],
        "additionalProperties": false,
        "x-typescript-type": "Omit<Term, 'id'>"
      },
      "ThemeWithRelations": {
        "title": "ThemeWithRelations",
        "type": "object",
        "description": "(tsType: ThemeWithRelations, schemaOptions: { includeRelations: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "termId": {
            "type": "number"
          },
          "modifications": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ModificationWithRelations"
            }
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false,
        "x-typescript-type": "ThemeWithRelations"
      },
      "TermWithRelations": {
        "title": "TermWithRelations",
        "type": "object",
        "description": "(tsType: TermWithRelations, schemaOptions: { includeRelations: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "term": {
            "type": "string"
          },
          "themes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ThemeWithRelations"
            }
          },
          "definitions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DefinitionWithRelations"
            }
          },
          "modifications": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ModificationWithRelations"
            }
          }
        },
        "required": [
          "term"
        ],
        "additionalProperties": false,
        "x-typescript-type": "TermWithRelations"
      },
      "TermPartial": {
        "title": "TermPartial",
        "type": "object",
        "description": "(tsType: Partial<Term>, schemaOptions: { partial: true })",
        "properties": {
          "id": {
            "type": "number"
          },
          "term": {
            "type": "string"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "Partial<Term>"
      },
      "NewModificationInTheme": {
        "title": "NewModificationInTheme",
        "type": "object",
        "description": "(tsType: @loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'themeId'>, schemaOptions: { title: 'NewModificationInTheme', exclude: [ 'id' ], optional: [ 'themeId' ] })",
        "properties": {
          "field": {
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "bookId": {
            "type": "number"
          },
          "definitionId": {
            "type": "number"
          },
          "peopleId": {
            "type": "number"
          },
          "referenceId": {
            "type": "number"
          },
          "shipId": {
            "type": "number"
          },
          "termId": {
            "type": "number"
          },
          "themeId": {
            "type": "number"
          }
        },
        "required": [
          "field",
          "new_value"
        ],
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository-json-schema#Optional<Omit<Modification, 'id'>, 'themeId'>"
      },
      "NewTheme": {
        "title": "NewTheme",
        "type": "object",
        "description": "(tsType: Omit<Theme, 'id'>, schemaOptions: { title: 'NewTheme', exclude: [ 'id' ] })",
        "properties": {
          "name": {
            "type": "string"
          },
          "termId": {
            "type": "number"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false,
        "x-typescript-type": "Omit<Theme, 'id'>"
      },
      "loopback.Count": {
        "type": "object",
        "title": "loopback.Count",
        "x-typescript-type": "@loopback/repository#Count",
        "properties": {
          "count": {
            "type": "number"
          }
        }
      },
      "Book.ScopeFilter": {
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {},
                "additionalProperties": true
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "uniqueItems": true
              }
            ]
          },
          "include": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {},
              "additionalProperties": true
            }
          }
        },
        "additionalProperties": false,
        "title": "Book.ScopeFilter"
      },
      "Book.IncludeFilter.Items": {
        "title": "Book.IncludeFilter.Items",
        "type": "object",
        "properties": {
          "relation": {
            "type": "string"
          },
          "scope": {
            "$ref": "#/components/schemas/Book.ScopeFilter"
          }
        }
      },
      "Book.Filter": {
        "type": "object",
        "title": "Book.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "title": {
                    "type": "boolean"
                  },
                  "url": {
                    "type": "boolean"
                  },
                  "publication": {
                    "type": "boolean"
                  },
                  "referenceId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "title",
                    "url",
                    "publication",
                    "referenceId"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Book.Fields"
          },
          "include": {
            "title": "Book.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Book.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Book>"
      },
      "Book.Filter1": {
        "type": "object",
        "title": "Book.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "title": "Book.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "title": {
                    "type": "boolean"
                  },
                  "url": {
                    "type": "boolean"
                  },
                  "publication": {
                    "type": "boolean"
                  },
                  "referenceId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "title",
                    "url",
                    "publication",
                    "referenceId"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Book.Fields"
          },
          "include": {
            "title": "Book.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Book.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Book>"
      },
      "Definition.ScopeFilter": {
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {},
                "additionalProperties": true
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "uniqueItems": true
              }
            ]
          },
          "include": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {},
              "additionalProperties": true
            }
          }
        },
        "additionalProperties": false,
        "title": "Definition.ScopeFilter"
      },
      "Definition.IncludeFilter.Items": {
        "title": "Definition.IncludeFilter.Items",
        "type": "object",
        "properties": {
          "relation": {
            "type": "string"
          },
          "scope": {
            "$ref": "#/components/schemas/Definition.ScopeFilter"
          }
        }
      },
      "Definition.Filter": {
        "type": "object",
        "title": "Definition.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "text": {
                    "type": "boolean"
                  },
                  "termId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "text",
                    "termId"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Definition.Fields"
          },
          "include": {
            "title": "Definition.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Definition.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Definition>"
      },
      "Definition.Filter1": {
        "type": "object",
        "title": "Definition.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "title": "Definition.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "text": {
                    "type": "boolean"
                  },
                  "termId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "text",
                    "termId"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Definition.Fields"
          },
          "include": {
            "title": "Definition.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Definition.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Definition>"
      },
      "Modification.Filter": {
        "type": "object",
        "title": "Modification.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "field": {
                    "type": "boolean"
                  },
                  "new_value": {
                    "type": "boolean"
                  },
                  "bookId": {
                    "type": "boolean"
                  },
                  "definitionId": {
                    "type": "boolean"
                  },
                  "peopleId": {
                    "type": "boolean"
                  },
                  "referenceId": {
                    "type": "boolean"
                  },
                  "shipId": {
                    "type": "boolean"
                  },
                  "termId": {
                    "type": "boolean"
                  },
                  "themeId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "field",
                    "new_value",
                    "bookId",
                    "definitionId",
                    "peopleId",
                    "referenceId",
                    "shipId",
                    "termId",
                    "themeId"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Modification.Fields"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Modification>"
      },
      "Modification.Filter1": {
        "type": "object",
        "title": "Modification.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "title": "Modification.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "field": {
                    "type": "boolean"
                  },
                  "new_value": {
                    "type": "boolean"
                  },
                  "bookId": {
                    "type": "boolean"
                  },
                  "definitionId": {
                    "type": "boolean"
                  },
                  "peopleId": {
                    "type": "boolean"
                  },
                  "referenceId": {
                    "type": "boolean"
                  },
                  "shipId": {
                    "type": "boolean"
                  },
                  "termId": {
                    "type": "boolean"
                  },
                  "themeId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "field",
                    "new_value",
                    "bookId",
                    "definitionId",
                    "peopleId",
                    "referenceId",
                    "shipId",
                    "termId",
                    "themeId"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Modification.Fields"
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Modification>"
      },
      "People.ScopeFilter": {
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {},
                "additionalProperties": true
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "uniqueItems": true
              }
            ]
          },
          "include": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {},
              "additionalProperties": true
            }
          }
        },
        "additionalProperties": false,
        "title": "People.ScopeFilter"
      },
      "People.IncludeFilter.Items": {
        "title": "People.IncludeFilter.Items",
        "type": "object",
        "properties": {
          "relation": {
            "type": "string"
          },
          "scope": {
            "$ref": "#/components/schemas/People.ScopeFilter"
          }
        }
      },
      "People.Filter": {
        "type": "object",
        "title": "People.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "first_name": {
                    "type": "boolean"
                  },
                  "last_name": {
                    "type": "boolean"
                  },
                  "birth": {
                    "type": "boolean"
                  },
                  "death": {
                    "type": "boolean"
                  },
                  "bookId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": true
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "People.Fields"
          },
          "include": {
            "title": "People.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/People.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<People>"
      },
      "People.Filter1": {
        "type": "object",
        "title": "People.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "title": "People.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "first_name": {
                    "type": "boolean"
                  },
                  "last_name": {
                    "type": "boolean"
                  },
                  "birth": {
                    "type": "boolean"
                  },
                  "death": {
                    "type": "boolean"
                  },
                  "bookId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": true
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "People.Fields"
          },
          "include": {
            "title": "People.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/People.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<People>"
      },
      "PingResponse": {
        "type": "object",
        "title": "PingResponse",
        "properties": {
          "greeting": {
            "type": "string"
          },
          "date": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "headers": {
            "type": "object",
            "properties": {
              "Content-Type": {
                "type": "string"
              }
            },
            "additionalProperties": true
          }
        }
      },
      "Reference.ScopeFilter": {
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {},
                "additionalProperties": true
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "uniqueItems": true
              }
            ]
          },
          "include": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {},
              "additionalProperties": true
            }
          }
        },
        "additionalProperties": false,
        "title": "Reference.ScopeFilter"
      },
      "Reference.IncludeFilter.Items": {
        "title": "Reference.IncludeFilter.Items",
        "type": "object",
        "properties": {
          "relation": {
            "type": "string"
          },
          "scope": {
            "$ref": "#/components/schemas/Reference.ScopeFilter"
          }
        }
      },
      "Reference.Filter": {
        "type": "object",
        "title": "Reference.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "page": {
                    "type": "boolean"
                  },
                  "definitionId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "page",
                    "definitionId"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Reference.Fields"
          },
          "include": {
            "title": "Reference.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Reference.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Reference>"
      },
      "Reference.Filter1": {
        "type": "object",
        "title": "Reference.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "title": "Reference.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "page": {
                    "type": "boolean"
                  },
                  "definitionId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "page",
                    "definitionId"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Reference.Fields"
          },
          "include": {
            "title": "Reference.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Reference.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Reference>"
      },
      "Ship.ScopeFilter": {
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {},
                "additionalProperties": true
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "uniqueItems": true
              }
            ]
          },
          "include": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {},
              "additionalProperties": true
            }
          }
        },
        "additionalProperties": false,
        "title": "Ship.ScopeFilter"
      },
      "Ship.IncludeFilter.Items": {
        "title": "Ship.IncludeFilter.Items",
        "type": "object",
        "properties": {
          "relation": {
            "type": "string"
          },
          "scope": {
            "$ref": "#/components/schemas/Ship.ScopeFilter"
          }
        }
      },
      "Ship.Filter": {
        "type": "object",
        "title": "Ship.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "name": {
                    "type": "boolean"
                  },
                  "length": {
                    "type": "boolean"
                  },
                  "width": {
                    "type": "boolean"
                  },
                  "heigth": {
                    "type": "boolean"
                  },
                  "rank": {
                    "type": "boolean"
                  },
                  "order": {
                    "type": "boolean"
                  },
                  "construction": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "name",
                    "length",
                    "width",
                    "heigth",
                    "rank",
                    "order",
                    "construction"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Ship.Fields"
          },
          "include": {
            "title": "Ship.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Ship.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Ship>"
      },
      "Ship.Filter1": {
        "type": "object",
        "title": "Ship.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "title": "Ship.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "name": {
                    "type": "boolean"
                  },
                  "length": {
                    "type": "boolean"
                  },
                  "width": {
                    "type": "boolean"
                  },
                  "heigth": {
                    "type": "boolean"
                  },
                  "rank": {
                    "type": "boolean"
                  },
                  "order": {
                    "type": "boolean"
                  },
                  "construction": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "name",
                    "length",
                    "width",
                    "heigth",
                    "rank",
                    "order",
                    "construction"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Ship.Fields"
          },
          "include": {
            "title": "Ship.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Ship.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Ship>"
      },
      "Term.ScopeFilter": {
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {},
                "additionalProperties": true
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "uniqueItems": true
              }
            ]
          },
          "include": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {},
              "additionalProperties": true
            }
          }
        },
        "additionalProperties": false,
        "title": "Term.ScopeFilter"
      },
      "Term.IncludeFilter.Items": {
        "title": "Term.IncludeFilter.Items",
        "type": "object",
        "properties": {
          "relation": {
            "type": "string"
          },
          "scope": {
            "$ref": "#/components/schemas/Term.ScopeFilter"
          }
        }
      },
      "Term.Filter": {
        "type": "object",
        "title": "Term.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "term": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "term"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Term.Fields"
          },
          "include": {
            "title": "Term.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Term.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Term>"
      },
      "Term.Filter1": {
        "type": "object",
        "title": "Term.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "title": "Term.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "term": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "term"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Term.Fields"
          },
          "include": {
            "title": "Term.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Term.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Term>"
      },
      "Theme.ScopeFilter": {
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {},
                "additionalProperties": true
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "uniqueItems": true
              }
            ]
          },
          "include": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {},
              "additionalProperties": true
            }
          }
        },
        "additionalProperties": false,
        "title": "Theme.ScopeFilter"
      },
      "Theme.IncludeFilter.Items": {
        "title": "Theme.IncludeFilter.Items",
        "type": "object",
        "properties": {
          "relation": {
            "type": "string"
          },
          "scope": {
            "$ref": "#/components/schemas/Theme.ScopeFilter"
          }
        }
      },
      "Theme.Filter": {
        "type": "object",
        "title": "Theme.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "name": {
                    "type": "boolean"
                  },
                  "termId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "name",
                    "termId"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Theme.Fields"
          },
          "include": {
            "title": "Theme.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Theme.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Theme>"
      },
      "Theme.Filter1": {
        "type": "object",
        "title": "Theme.Filter",
        "properties": {
          "offset": {
            "type": "integer",
            "minimum": 0
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "example": 100
          },
          "skip": {
            "type": "integer",
            "minimum": 0
          },
          "order": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ]
          },
          "where": {
            "title": "Theme.WhereFilter",
            "type": "object",
            "additionalProperties": true
          },
          "fields": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "boolean"
                  },
                  "name": {
                    "type": "boolean"
                  },
                  "termId": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id",
                    "name",
                    "termId"
                  ],
                  "example": "id"
                },
                "uniqueItems": true
              }
            ],
            "title": "Theme.Fields"
          },
          "include": {
            "title": "Theme.IncludeFilter",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Theme.IncludeFilter.Items"
            }
          }
        },
        "additionalProperties": false,
        "x-typescript-type": "@loopback/repository#Filter<Theme>"
      }
    }
  }
}
