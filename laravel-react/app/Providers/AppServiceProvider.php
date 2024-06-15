<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share('errors', function () {
            return session()->get('errors')
                ? session()->get('errors')->getBag('default')->getMessages()
                : (object) [];
        });

        Inertia::share('success', function () {
            return session()->get('success');
        });

        Inertia::share('failed', function () {
            return session()->get('failed');
        });
    }
}
