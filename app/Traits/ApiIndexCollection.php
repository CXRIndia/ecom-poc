<?php

namespace App\Traits;

trait ApiIndexCollection
{

    /**
     * Show the application's login form.
     *
     * @return Array
     */
    public function index(): array
    {
        //return $this->modal::all()->toArray();
        return $this->modal::paginate(10)->toArray();
    }

    public function show($id)
    {
        return $this->modal::findOrFail($id);
    }
}