const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

module.exports = {
    // @desc    Get all bootcamps
    // @routes  GET /api/v1/bootcamps
    // @acess   Public
    async getBootcamps(req, res, next) {
        try {
            const bootcamps = await Bootcamp.find();
            res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
        }catch(err) {
            // res.status(400).json({ success: false });
            next(err);
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
       } catch (err) {
        // res.status(400).json({ success: false });
        next(err);
       }
    },
    // @desc    Get sigle bootcamp
    // @routes  GET /api/v1/bootcamps/:id
    // @acess   Public
    async getBootcamp(req, res, next) {
        try {
            const bootcamp = await Bootcamp.findById(req.params.id);

            if(!bootcamp) {
                return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
            }

            res.status(200).json({ success: true, data: bootcamp });
        } catch(err) {
            next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
        }
    },
    // @desc    Update bootcamp
    // @routes  PUT /api/v1/bootcamps/:id
    // @acess   Private
    async updateBootcamp(req, res, next) {
        try {
            const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
    
            if(!bootcamp) {
                res.status(400).json({ success: false });
            }

            res.status(200).json({ success: true, data: bootcamp });
        } catch (err) {
            // res.status(400).json({ success: false });
            next(err);
        }
        
    },
    // @desc    Delete bootcamp
    // @routes  DELETE api/v1/bootcamps/:id
    // @acess   Private
    async deleteBootcamp(req, res, next) {
        try {
            const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
    
            if(!bootcamp) {
                res.status(400).json({ success: false });
            }

            res.status(200).json({ success: true, data: {} });
        } catch (err) {
            res.status(400).json({ success: false });
        }
    }
}