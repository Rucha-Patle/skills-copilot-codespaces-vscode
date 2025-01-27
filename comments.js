// Create web server
// Create a new comment
// Get all comments
// Get a comment by id
// Delete a comment by id

const express = require('express');
const commentsRouter = express.Router();

const { createComment, getComments, getCommentById, deleteCommentById } = require
