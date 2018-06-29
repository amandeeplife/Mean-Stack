const cluster = require('cluster');
const os = require('os');

if(cluster.isMaster){
    const cpus = os.cpus().length;
    console.log(`forking for ${cpus} CPUs`);
    for(let i=0; i<cpus; i++){
        cluster.fork();
    }
    
}
else {
    require('./Run')
}
