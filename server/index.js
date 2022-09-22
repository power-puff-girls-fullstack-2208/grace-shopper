//const port = process.env.PORT || 3000;
const app = require('./app');
const db = require('./db')

const init = async () => {
    await db.syncAndSeed();
    //commenting this out for now because it's redundant
    //app.listen(port, ()=> console.log(`listening on port ${port}`));
};


// seeding process will automatically be stopped if it takes too long -- more than 3 minutes
// should take approximately 2 minutes
process.on('SIGINT', init);
setTimeout(() => {
    console.log('Exiting...');
    process.exit(0);
}, 180000);
process.kill(process.pid, 'SIGINT');