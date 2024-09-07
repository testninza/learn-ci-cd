app.get('/user', (req, res) => {
    const userId = req.query.id;
    const query = `SELECT * FROM users WHERE id = ${userId}`; // Vulnerable to SQL Injection
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.json(result);
        }
    });
});
