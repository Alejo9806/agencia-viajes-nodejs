import express from "express";
import { paginaInicio,paginaViajes,paginaNosotros,paginaTestimoniales,paginaDetalleViaje } from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

// res.send('Inicio');
// res.json({id:1});
// res.render();
// res.render('inicio',{
//     pagina:'Inicio'
// });
//req - lo que enviamos : res - lo que express nos responde 

router.get('/',paginaInicio);


router.get('/nosotros',paginaNosotros);


router.get('/viajes',paginaViajes);
router.get('/viajes/:slug',paginaDetalleViaje);

router.get('/testimoniales',paginaTestimoniales);
router.post('/testimoniales',guardarTestimonial);

export default router;