<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Helper\RequestDataHelper;

class LocationsController extends Controller
{
    /**
     *
     * @param RequestDataHelper $requestDataHelper
     */
    public function __construct(protected RequestDataHelper $requestDataHelper)
    {}
    
    /**
     *
     * @return void
     */
    public function locations()
    {
        $request = $this->requestDataHelper->getLocations();

        if (!isset($request)) {
            return response()->json(['error' => 'Message not found'], 500);
        }

        return $request;
    }
}
