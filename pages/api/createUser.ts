const mongoose = require('mongoose');
import dbConnect from '../../lib/dbConnect';

const User = require('../../models/loginModel');
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const createUser = async (req: Request, res: Response) => {
  // Check method type ie post/get etc
  if (req.method === 'POST') {
    await dbConnect();

    console.log('Called createUser POST');
    // Passing in username / pass into Mongoose Schema from req.body
    const newUser = await new User(req.body);
    interface User {
      username: string
      password: string
      endpoints: any
    }
    newUser.save((err: ErrorRequestHandler, user: User) => {
      if (err) {
        return res.json(err);
      }
      res.send(user.username)
    });
  };
};

export default createUser;