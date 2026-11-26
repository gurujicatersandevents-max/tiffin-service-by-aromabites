<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyProfile extends Model
{
    protected $fillable = [
        'company_name',
        'tagline',
        'phone',
        'whatsapp',
        'email',
        'leads_email',
        'address',
        'working_hours',
        'logo_url',
        'facebook_url',
        'instagram_url',
        'twitter_url',
    ];
}
