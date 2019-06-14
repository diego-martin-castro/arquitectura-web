const express = require('express');
const router = express.Router();

const Players = require('../models/players');
const Fighters = require('../models/figthers');
const Stages = require('../models/stages');

router.get('/', (req, res) => {
    res.send('Hello Backend');
});

// Players
router.get('/players', async (req, res) => {
    try {
        const players = await Players.find();
        res.send(players);
    } catch (error) {
        res.send(error);
    }    
});

router.post('/players', async (req, res) => {
    try {
        const players = new Players(req.body);
        await players.save();
        res.send('New player added');
    } catch (error) {
        res.send(error);
    }
});

router.get('/players/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const players = await Players.find({_id : id});
        res.send(players);
    } catch (error) {
        res.send(error);
    }    
});

router.get('/players/:id/gamelog', async (req, res) => {
    try {
        const { id } = req.params;
        const players = await Players.findById({_id : id});
        res.send(players.gamelog);
    } catch (error) {
        res.send(error);
    }    
});

router.get('/players/:id/stats', async (req, res) => {
    try {
        const { id } = req.params;
        const players = await Players.findById({_id : id});
        res.send(players.stats);
    } catch (error) {
        res.send(error);
    }    
});

router.delete('/players/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Players.remove({_id : id});
        res.send('Deleted');
    } catch (error) {
        res.send(error);
    }
});

router.put('/players/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Players.update({_id : id}, req.body);
        res.send('Updated');
    } catch (error) {
        res.send(error);
    }
});


// Figthers
router.get('/fighters', async (req, res) => {
    try {
        const fighters = await Fighters.find();
        res.send(fighters);
    } catch (error) {
        res.send(error);
    }    
});

router.post('/fighters', async (req, res) => {
    try {
        const fighters = new Fighters(req.body);
        await fighters.save();
        res.send('New fighter added');
    } catch (error) {
        res.send(error);
    }
});

router.get('/fighters/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const fighters = await Fighters.find({_id : id});
        res.send(fighters);
    } catch (error) {
        res.send(error);
    }    
});

router.delete('/fighters/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Fighters.remove({_id : id});
        res.send('Deleted');
    } catch (error) {
        res.send(error);
    }
});

router.put('/fighters/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Fighters.update({_id : id}, req.body);
        res.send('Updated');
    } catch (error) {
        res.send(error);
    }
});

// Stages
router.get('/stages', async (req, res) => {
    try {
        const stages = await Stages.find();
        res.send(stages);
    } catch (error) {
        res.send(error);
    }    
});

router.post('/stages', async (req, res) => {
    try {
        const stages = new Stages(req.body);
        await stages.save();
        res.send('New fighter added');
    } catch (error) {
        res.send(error);
    }
});

router.get('/stages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const stages = await Stages.find({_id : id});
        res.send(stages);
    } catch (error) {
        res.send(error);
    }    
});

router.delete('/stages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Stages.remove({_id : id});
        res.send('Deleted');
    } catch (error) {
        res.send(error);
    }
});

router.put('/stages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Stages.update({_id : id}, req.body);
        res.send('Updated');
    } catch (error) {
        res.send(error);
    }
});

/*  
  await Stages.findByIdAndDelete(id, (err) => {
        if (err) res.status(500).send({message: `Error al eliminar el stage: ${id}`});
        res.status(200).send({message: 'Stage eliminado'})
    }); 
*/

module.exports = router;