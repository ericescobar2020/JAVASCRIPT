const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
  transports: [
    // - Escribir todos los registros con un nivel de importancia de `error` o menos en `error.log`
     // - Escribir todos los registros con un nivel de importancia de `info` o menos en `combined.log`dddddddddd
     new winston.transports.Console(),   
     new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports= logger;