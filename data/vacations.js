
exports.SingleRow = {
    "name":"BAHAMAS1000",
    "description":"4 Nights all paid Resort vacation in Bahamas at the Atlantis resort",
    "type": "resort",
    "destinations": [
        {
            "city": "Nassau",
            "country": "Bahamas"
        }
    ],
    "includes": [
        {
            "what": "hotel",
            "description": "King or Queen Bed room, can accomodate 2 Adults and 2 Children"
        },
        {
            "what": "meals",
            "description": "Buffet style, available 24 hours in various resort restaurants"
        }
    ],
    "numberOfNights": 4,
    "pricePP": 300,
    "offer": {
        "discount": 0.1,
        "description": "End of year sale",
        "expires": "1/31/2020"
    },
    "validTill": "1/31/2020",
    "soldout": false
}

exports.MultipleRows = [
    {
    "name":"HAWAII1000",
    "description":"10 Nights all paid Resort vacation on Big Island",
    "type": "resort",
    "destinations": [
        {
            "city": "Maui",
            "country": "Hawaii"
        }
    ],
    "includes": [
        {
            "what": "hotel",
            "description": "King or Queen Bed room, can accomodate 2 Adults and 2 Children"
        },
        {
            "what": "meals",
            "description": "Buffet style, available 24 hours in various resort restaurants"
        }
    ],
    "numberOfNights": 10,
    "pricePP": 800,
    "offer": {
        "discount": 0.25,
        "description": "End of year sale",
        "expires": "1/31/2020"
    },
    "validTill": "1/31/2020",
    "soldout": false

},
{
    "name":"CRUISEBAHAMAS1000",
    "description":"6 Nights cruise to Bahamas from Miami, FL in luxury line 'Carnival, Ocean Beauty'",
    "type": "cruise",
    "destinations": [
        {
            "city": "Nassau",
            "country": "Bahamas"
        },
         {
            "city": "Jamaica",
            "country": "Jamaica"
        }
    ],
    "includes": [
        {
            "what": "cruise",
            "description": "Regular cruise suite can easily accomodate 2 adults and 2 children"
        },
        {
            "what": "meals",
            "description": "Buffet style, available 24 hours in various restaurants"
        }
    ],
    "numberOfNights": 10,
    "pricePP": 800,
    "offer": {
        "discount": 0.25,
        "description": "End of year sale",
        "expires": "1/31/2020"
    },
    "validTill": "1/31/2020",
    "soldout": false

}]
