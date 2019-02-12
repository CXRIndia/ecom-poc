<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ApiController;
use App\Traits\ApiIndexCollection;
use App\User;

class UserController extends ApiController
{
    use ApiIndexCollection;
    protected $modal = User::class;

}