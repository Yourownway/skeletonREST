const userController = (userModel) => {

    return {
        
        getAll: (req, res) => {
            return await userModel.getAll();
        },
        
       
    
    }

}

modules.exports = userController;