// const user = require('../models/User');
// const csv = require('csvtojson');

// const importUser = async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ success: false, msg: "No file uploaded" });
//         }
//         console.log(req.file.path);
//         const userData = await csv().fromFile(req.file.path);
//         console.log(userData)
//         const formattedData = userData.map(entry => ({
//             name: entry.name,
//             rollno: entry.rollno,
//             prn: entry.prn,
//             password: entry.password,
//         }));

//         await user.insertMany(formattedData);

//         res.status(200).json({ status: 200, success: true, msg: 'Data imported successfully' });
//     } catch (error) {
//         res.status(400).json({ status: 400, success: false, msg: error.message });
//     }
// }

// module.exports = {
//     importUser
// }


const user = require('../models/User');
const csv = require('csvtojson');

const importUser = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, msg: "No file uploaded" });
        }
        
        console.log(req.file.path);
        const userData = await csv().fromFile(req.file.path);
        console.log(userData);
        
        for (const entry of userData) {
            const { name, rollno, prn, password } = entry;
            const newUser = new user({ name, rollno, prn, password });
            await newUser.save();
        }

        res.status(200).json({ status: 200, success: true, msg: 'Data imported successfully' });
    } catch (error) {
        res.status(400).json({ status: 400, success: false, msg: error.message });
    }
}

module.exports = {
    importUser
}
