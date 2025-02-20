<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seminar extends Model
{
    protected $fillable = [
        'topic',
        'date',
        'speaker',
        'issuer',
        'about_the_speaker',
        'description',
        'about_this_seminar',
        'speaker_image',
        'certificate_logo',
    ];
}
