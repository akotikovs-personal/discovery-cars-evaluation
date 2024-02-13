<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Helper\RequestDataHelper;

class SearchController extends Controller
{
    /**
     *
     * @param RequestDataHelper $requestDataHelper
     */
    public function __construct(protected RequestDataHelper $requestDataHelper)
    {}

    /**
     *
     * @param Request $request
     * @return void
     */
    public function search(Request $request)
    {
        $id = $request->input('locationId');

        $response = $this->requestDataHelper->getSearchResults($id);

        return $response;
    }
}
