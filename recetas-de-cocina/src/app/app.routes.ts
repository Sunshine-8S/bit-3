import { Routes } from '@angular/router';
import { Categorias } from './components/pages/categorias/categorias';
import { Recetas } from './components/pages/recetas/recetas';
import { RecetasDetalladas } from './components/pages/recetas-detalladas/recetas-detalladas';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: "categorias",
        component: Categorias,
        title: "Categories"
    },
    {
        path: "recetas/:categoria",
        component: Recetas,
        title: "Receipes"
    },
    {
        path: "recetas-detalladas/:id",
        component: RecetasDetalladas,
        title: "Detailed receip"
    },
    {
        path: "",
        redirectTo: "categorias",
        pathMatch: "full"
    },
    {
        path: "**",
        component: PageNotFound,
        title: "Error 404 | Pge not found"
    }
];
