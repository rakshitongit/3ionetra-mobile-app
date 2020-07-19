import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
    },
    {
        path: 'otp-verification',
        loadChildren: () => import('./pages/otp-verification/otp-verification.module').then(m => m.OtpVerificationPageModule)
    },
    {
        path: 'waiting-for-approval',
        loadChildren: () => import('./pages/waiting-for-approval/waiting-for-approval.module').then(m => m.WaitingForApprovalPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'news',
        loadChildren: () => import('./pages/news/news.module').then(m => m.NewsPageModule)
    },
    {
        path: 'seva-bookings',
        loadChildren: () => import('./pages/seva-bookings/seva-bookings.module').then(m => m.SevaBookingsPageModule)
    },
    {
        path: 'seva-details',
        loadChildren: () => import('./pages/seva-details/seva-details.module').then(m => m.SevaDetailsPageModule)
    },
    {
        path: 'booking-history',
        loadChildren: () => import('./pages/booking-history/booking-history.module').then(m => m.BookingHistoryPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
