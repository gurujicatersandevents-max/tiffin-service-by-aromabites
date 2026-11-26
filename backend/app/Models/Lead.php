<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'name',
        'contact_no',
        'email',
        'street_address',
        'city',
        'district',
        'state',
        'country',
        'package_selection',
        'tasting_slot',
        'description_allergies',
        'status',
    ];

    public function notes()
    {
        return $this->hasMany(LeadNote::class);
    }

    public function activities()
    {
        return $this->hasMany(LeadActivity::class);
    }
}
