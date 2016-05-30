import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

export default function (app) {
    
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
};