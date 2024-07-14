
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { AllAITools } from "../models/allaitools.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const searchaitools = asyncHandler(async (req, res) => {
    const { Major_Category, AI_Tool_Name, Free_Paid_Other } = req.query;

    // Construct the query object
    let query = {};

    if (Major_Category) {
        query.Major_Category = Major_Category;
    }
    if (AI_Tool_Name) {
        query.AI_Tool_Name = new RegExp(AI_Tool_Name, 'i'); // Case-insensitive search
    }
    if (Free_Paid_Other) {
        query.Free_Paid_Other = Free_Paid_Other;
    }

    try {
        // Perform the search query
        const aitools = await AllAITools.find(query);

        if (!aitools.length) {
            return res.status(404).json(new ApiResponse(false, 'No AI tools found matching the criteria.'));
        }

        // Send back the results
        res.status(200).json(aitools);
    } catch (error) {
        throw new ApiError('Database query failed', error);
    }
});

export { searchaitools };
