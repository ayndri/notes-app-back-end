/* eslint-disable indent */ /* eslint-disable linebreak-style */
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: (request, h) => {
      return addNoteHandler(request, h); // Return the handler's result
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: (request, h) => {
      return getAllNotesHandler(request, h); // Return the handler's result
    },
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: (request, h) => {
      return getNoteByIdHandler(request, h); // Return the handler's result
    },
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: (request, h) => {
      return editNoteByIdHandler(request, h); // Return the handler's result
    },
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: (request, h) => {
      return deleteNoteByIdHandler(request, h); // Return the handler's result
    },
  },
];

module.exports = routes;
