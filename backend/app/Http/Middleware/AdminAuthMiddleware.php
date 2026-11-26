<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminAuthMiddleware
{
    /**
     * Handle an incoming request.
     * Enforce admin authentication and 15-minute (900s) inactivity timeout.
     */
    public function handle(Request $request, Closure $next)
    {
        if (!session('admin_logged_in')) {
            return redirect()->route('admin.login')->withErrors([
                'email' => 'Please sign in to access the admin panel.',
            ]);
        }

        $timeoutSeconds = 15 * 60; // 15 minutes
        $lastActivity = session('admin_last_activity');

        if ($lastActivity && (time() - $lastActivity) > $timeoutSeconds) {
            $request->session()->forget(['admin_logged_in', 'admin_user', 'admin_email', 'admin_last_activity']);
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return redirect()->route('admin.login')->withErrors([
                'email' => 'Your session expired after 15 minutes of inactivity. Please login again.',
            ]);
        }

        session(['admin_last_activity' => time()]);

        return $next($request);
    }
}
