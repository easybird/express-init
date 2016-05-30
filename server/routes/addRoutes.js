import index from './indexRoute';
import countriesRoute from './countries/countriesRoute';
import addErrorRoutes from './error/addErrorRoutes';

export default function(app) {
    app.use('/', index);
    app.use('/countries', countriesRoute);
    addErrorRoutes(app);
};