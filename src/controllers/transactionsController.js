const Transaction = require('../models/transaction')

class TransactionsController {

    async getAll(req, res) {
        const transaction = await Transaction.find({}, (err, result) => {
            if (err) return console.error(err)
            return result
        })
        return res.json(transaction)
    }

    async saveTransaction(req, res) {
        const transaction = await Transaction.create({
            description: req.body.description,
            value: req.body.value,
            date: req.body.date
        })

        return res.send(transaction)
    }

}

module.exports = new TransactionsController()