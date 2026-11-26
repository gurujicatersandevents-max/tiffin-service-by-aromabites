<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    protected $fillable = [
        'name',
        'tagline',
        'badge',
        'price_per_meal',
        'original_price_per_meal',
        'highlight_label',
        'is_popular',
        'is_active',
        'sort_order',
    ];

    public function features()
    {
        return $this->hasMany(SubscriptionPlanFeature::class, 'plan_id')->orderBy('sort_order', 'asc');
    }
}
