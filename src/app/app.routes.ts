import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        title: "Home",
        children: [
            {
                path: 'login',
                component: LoginComponent,
                pathMatch: 'full',
                title: "login"
            }
        ]
    },
    {
        path: "**",
        component: NotFoundComponent,
        title: 'not found'
    }
];
