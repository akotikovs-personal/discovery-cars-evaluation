<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Helper\RequestDataHelper;

class BookController extends Controller
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
    public function submit(Request $request)
    {
        $firstname = $request->input('firstname');
        $lastname = $request->input('lastname');
        $offerUId = $request->input('offerUId');

        $formdata = [
            'offerUId' => $offerUId,
            "customer" => [
                'name' => $firstname,
                'surname' => $lastname
            ]
        ];

        $data = $this->requestDataHelper->postBookCar($formdata);

        return $data;
    }
}
