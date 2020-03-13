module.exports = {
    // @desc    Get all bootcamps
    // @routes  GET /api/v1/bootcamps
    // @acess   Public
    getBootcamps(req, res, next) {
        res.status(200).json({ success: true, msg: 'Show all bootcamps'});
    },
    // @desc    Create new boocamp
    // @routes  Post /api/v1/bootcamps
    // @acess   Private
    createBootcamp(req, res, next) {
        res.status(200).json({ success: true, msg: 'Create new bootcamp'});
    },
    // @desc    Get sigle bootcamp
    // @routes  GET /api/v1/bootcamps/:id
    // @acess   Public
    getBootcamp(req, res, next) {
        res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}`});
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