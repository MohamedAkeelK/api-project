# api-project

# 3rd-party api used

- https://randomuser.me/

# Thing that i learned

- file cant be empty when writing to it. add curly braces to fix.

# Errors I got

- error: "Query was already executed
- was able to fix using

```
.clone().catch(function(err){ console.log(err)})
});
```

# API DOCUMENTATION

- endpoint: GET /users
- description: gets all users, 50 users in total.
- example:
  ```
    {
        "name": {
            "title": "Mr",
            "first": "Dag",
            "last": "Nysæter"
        },
        "location": {
            "street": {
                "number": 723,
                "name": "Gunnar Johnsons vei"
            },
            "coordinates": {
                "latitude": 46.0105,
                "longitude": -169.4605
            },
            "timezone": {
                "offset": "+4:30",
                "description": "Kabul"
            },
            "city": "Jørpeland",
            "state": "Hedmark",
            "country": "Norway",
            "postcode": "6213"
        },
        "dob": {
            "age": 47
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/36.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
        },
        "_id": "6351a3e37dcf380f2cd2b1a4",
        "gender": "male",
        "email": "dag.nysaeter@example.com",
        "phone": "68587385",
        "cell": "41255006",
        "nat": "NO",
        "__v": 0
    },
    ...
  ```
