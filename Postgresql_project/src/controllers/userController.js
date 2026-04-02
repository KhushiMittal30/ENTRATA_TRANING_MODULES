//Standardized response function 

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status: status,
        message: message,
        data: data
    });
}   

export const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await userModel.createUserService(name, email);
        handleResponse(res, 201, "User created successfully", result);
    } catch (error) {
         next(error);
    }
}   

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await userModel.getAllUsersService();
        handleResponse(res, 200, "Users retrieved successfully", users);
    } catch (error) {
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    const { id } = req.params;          
    try {
        const user = await userModel.getUserByIdService(id);
        if (!user) {
            return handleResponse(res, 404, "User not found");
        }
        handleResponse(res, 200, "User retrieved successfully", user);
    } catch (error) {
        next(error);
    }
};
export const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const user = await userModel.updateUserService(id, name, email);
        handleResponse(res, 200, "User updated successfully", user);
    } catch (error) {
        next(error);
    }
};
export const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await userModel.deleteUserService(id);
        if (!user) {
            return handleResponse(res, 404, "User not found");
        }
        handleResponse(res, 200, "User deleted successfully", user);
    } catch (error) {
        next(error);
    }
};  