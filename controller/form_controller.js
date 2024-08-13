const Bonafide = require('../model/form');

exports.Bonafide_create_controller = async (req, res) => {
    try {
        const data = req.body;
        const new_Bonafide = new Bonafide(data);
        await new_Bonafide.save();
        
        res.status(200).json({ message: "User Bonafide details saved successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getBonafide = async (req, res) => {
    try {
        const {regd} = req.query;
        const student_Bonafide = await Bonafide.findOne({ regd_no: regd });
        
        if (!student_Bonafide) {
            return res.status(404).json({ message: "Bonafide details not found" });
        }

        res.status(200).json({ 
            message: "Bonafide details fetched successfully", 
            data: student_Bonafide 
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
