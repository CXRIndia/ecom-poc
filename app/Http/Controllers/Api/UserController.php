<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Traits\ApiIndexCollection;
use App\User;

class UserController extends ApiController
{
    use ApiIndexCollection;
    protected $modal = User::class;

}
