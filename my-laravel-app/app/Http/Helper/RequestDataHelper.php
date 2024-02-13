<?php
declare(strict_types=1);

namespace App\Http\Helper;

use Illuminate\Support\Facades\Http;

class RequestDataHelper
{
    protected const BASE_API_URL = 'https://booking-test.dev-dch.com/api/v1';
    protected const LOCATIONS_ENDPOINT = '/Locations/Locations';
    protected const OFFERS_ENDPOINT = '/Availability/GetOffers?LocationId=';
    protected const CREATE_RESERVATION_ENDPOINT = '/Reservations/CreateReservation';

    /**
     *
     * @return void
     */
    public function getLocations()
    {
        try {
            $response = Http::get(self::BASE_API_URL . self::LOCATIONS_ENDPOINT);
    
            if ($response->successful()) {
                $locations = $response->json();
    
                return response()->json($locations);
            }
    
            return response()->json(['error', 'Failed to fetch locations'], $response->status());
        } catch(\Exception $e) {
            return response()->json(['error', 'An error occured: ' . $e->getMessage()], 500);
        }
    }

    /**
     *
     * @param $search
     * @return void
     */
    public function getSearchResults($search)
    {
        $response = Http::get(self::BASE_API_URL . self::OFFERS_ENDPOINT . $search);

        if ($response->successful()) {
            $locations = $response->json();

            return response()->json($locations);
        }

        return response()->json(['error', 'Failed to fetch locations'], $response->status());
    }

    /**
     *
     * @param $formData
     * @return void
     */
    public function postBookCar($formData)
    {
        try {
            $response = Http::post(self::BASE_API_URL . self::CREATE_RESERVATION_ENDPOINT, $formData);
            $statusCode = $response->status();
            $body = $response->body();

            return response()->json($body, $statusCode);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}