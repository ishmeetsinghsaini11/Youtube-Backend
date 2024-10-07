//via try catch

// const asyncHandler = (requestHandler) => async(req,res,next) => {
//     try {
//         await requestHandler(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

//via promises

// const asyncHandler = (requestHandeler) => {
//     (req,res,next) => {
//         Promise.resolve(requestHandeler(req,res,next)).catch((err) => next(err))
//     }
// }

export { asyncHandler }