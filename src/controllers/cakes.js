const Cake = require('../models/Cake');

exports.getCake = async (req, res, next) => {
    try {
        const cake = await Cake.findById(req.params.id);

        res.status(200).json({
            success: true,
            data: cake
        });
    } catch (error) {
       res.status(404).json({
           success: false,
           error
       });
    }
};

exports.getCakes = async (req, res, next) => {
    try {
        const cakes = await Cake.find({});

        res.status(200).json({
            success: true,
            data: cakes
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            error
        });
    }
};

exports.createCake = async (req, res, next) => {
    try {
        const cake = await Cake.create(req.body);

        res.status(201).json({
            success: true,
            data: cake
        });
    } catch (error) {
        console.log('error');
        console.log(error);
        res.status(500).json({
            success: false,
            error
        });
    }
};

exports.updateCake = async (req, res, next) => {
    try {
        const { id } = req.params;
        let cake = await Cake.findById(id);

        if (!cake) {
            return next(
                new Error('Cake not found')
            );
        }

        cake = await Cake.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: cake
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        });
    }
};

exports.deleteCake = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cake = await Cake.findById(id);

        if (!cake) {
            return next(
                new Error('Cake not found')
            );
        }

        await cake.remove();
        
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        });
    }
};