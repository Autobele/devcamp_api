const Bootcamp = require('../models/Bootcamp');


module.exports = {
    // @desc    Get all bootcamps
    // @routes  GET /api/v1/bootcamps
    // @acess   Public
    async getBootcamps(req, res, next) {
        try {
            const bootcamps = await Bootcamp.find();
            res.status(200).json({ success: true, data: bootcamps});
        }catch(error) {
            res.status(400).json({ success: false });
        }
    },
    // @desc    Create new boocamp
    // @routes  Post /api/v1/bootcamps
    // @acess   Private
    async createBootcamp (req, res, next) {
       try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });
       } catch (error) {
        res.status(400).json({ success: false });
       }
    },
    // @desc    Get sigle bootcamp
    // @routes  GET /api/v1/bootcamps/:id
    // @acess   Public
    async getBootcamp(req, res, next) {
        try {
            const bootcamp = await Bootcamp.findById(req.params.id);

            if(!bootcamp) {
                return res.status(400).json({ success: false });
            }

            res.status(200).json({ success: true, data: bootcamp });
        } catch(error) {

        }
    },
    // @desc    Update bootcamp
    // @routes  PUT /api/v1/bootcamps/:id
    // @acess   Private
    updateBootcamp(req, res, next) {
        res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}`});
    },
    // @desc    Delete bootcamp
    // @routes  DELETE api/v1/bootcamps/:id
    // @acess   Private
    deleteBootcamp(req, res, next) {
        res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}`});
    }
}