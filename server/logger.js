import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createLogger,
        transports,
        format
} = require('winston');

const logger = createLogger({
    transports:[
        new transports.File({
            filename:'info.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})


export default logger