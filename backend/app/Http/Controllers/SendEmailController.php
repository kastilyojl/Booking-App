<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\TestingMail;

class SendEmailController extends Controller
{
    public function sendEmail() {
        Mail::to('pelagiolander68@gmail.com')->send(new TestingMail());

        return 'Email sent.';
    }
}
