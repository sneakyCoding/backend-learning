//This code is used in production to fetch paginated tasks.


//no try/catch if an error occurs the code just crashes
export const getTasks = async (req, res) => {
    /* page can be -1🟢

    limit can be 0

    limit can be 100000

s   kip can become negative or huge */
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const tasks = await Task.find({}) // Security Bug: fetches all tasks in system - no authzn and scoping
        .skip(skip) //not recommended for large datasets - large offsets become slow in mongdb and performance degrades
        .limit(limit);

    res.status(200).json({
        data: tasks,
        //no total count returned
        page,
        limit
    });
};
