import asyncHandler from '../middleware/asyncHandler';
import UserModel from '../models/userModel';
import { Request, Response } from 'express';
import { toCheckUser } from '../types/utils';
import { UserSchemaMethod } from '../types/User';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
	const checkedUser = toCheckUser(req.body);
	const { email, password } = checkedUser;
	const user: UserSchemaMethod | null = await UserModel.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('register user');
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (_req: Request, res: Response) => {
	res.send('logout user');
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('get user profile');
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('update user profile');
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('get users');
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('delete user');
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('get user by id');
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (_req, res) => {
	await UserModel.find({});
	res.send('update user');
});

export {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
};
