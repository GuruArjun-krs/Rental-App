import React, { Suspense, lazy } from 'react';

const AuthLoginScreen = lazy(() => import('@/Screens/Auth/Login'));

export const StackScreens = [
    {
        key: 'login',
        name: 'Login',
        component: AuthLoginScreen
    }
]