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
        //$modal e.g Post -> title, body
        // where cluas -->  /?filter[title]=xyz&filter[body]=abc

        //{ data: [] }

        return $this->modal::paginate(10)->toArray();
    }

    public function show($id)
    {
        return $this->modal::findOrFail($id);
    }
}
