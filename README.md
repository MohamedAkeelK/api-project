# API-DUMMY-USERS

This project is a CRUD REST API that returns an array of boilerplate user data. Includes properties such as name, email, gender, email, etc.

## Getting Started Locally

fork and clone this repository then in the terminal run ...

```bash
  npm install
  npm run db:seed
  npm run dev
```

### Prerequisites

- must have node installed
- must have mongodb installed

## Deployment

- netlify

## Built With

- nodejs
- express
- mongoose

## Contributing

fork, clone, create a new feature, and submit a pull request!

## Authors

- **Mohamed Akeel Khan**

## 3rd-party api used

- https://randomuser.me/

## API DOCUMENTATION IN POSTMAN

https://documenter.getpostman.com/view/23919886/2s84DhX6oc

## API DOCUMENTATION

- **endpoint: GET /users**
- status code: 200 ok
- description: gets all users, 50 users in total.
- example response:

  ```json
  [
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
  ]
  ```

- **endpoint: POST /users**
- status: 201 created
- description: creates a new User.
- first, last, email are required and email should be unique
- example response:

```json
{
  "gender": "BANNANA",
  "name": {
    "title": "BANNANA",
    "first": "BANNANAS",
    "last": "BANNANAL"
  },
  "location": {
    "street": {
      "number": 723,
      "name": "Gunnar Johnsons vei"
    },
    "city": "Jørpeland",
    "state": "Hedmark",
    "country": "Norway",
    "postcode": "6213",
    "coordinates": {
      "latitude": 46.0105,
      "longitude": -169.4605
    },
    "timezone": {
      "offset": "+4:30",
      "description": "Kabul"
    }
  },
  "email": "BANNANA.nysaeter@example.com",
  "dob": {
    "age": 200
  },
  "phone": "68587385",
  "cell": "41255006",
  "picture": {
    "large": "https://randomuser.me/api/portraits/men/36.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
  },
  "nat": "NO",
  "_id": "6351ac71fb33ed5ee38c5682",
  "__v": 0
}
```

- **endpoint: PUT /users/:id**
- status: 201 created
- description: updates a single User.
- example body:

```json
{
  "name": "THEMANGOMANNNNNNNNN",
  "location": {
    "street": {
      "number": 666,
      "name": "firestreet"
    }
  }
}
```

- example response:

```json
{
  "name": "THEMANGOMANNNNNNNNN",
  "location": {
    "street": {
      "number": 666,
      "name": "firestreet"
    }
  },
  "dob": {
    "age": 203
  },
  "_id": "6351aeddfb33ed5ee38c5687",
  "gender": "MANGOOOOOO",
  "email": "MANGOOOO.nysaeter@example.com",
  "phone": "68587385",
  "cell": "41255006",
  "nat": "NO",
  "__v": 0
}
```

- **endpoint: DELETE /users/:id**
- status: 200 OK
- description: updates a single User.
- example response:

```
  User deleted!
```

- **endpoint: GET /users/gender/:gender**
- status: 200 OK
- gender slug can either be male or female.
- description: gets all Users by gender
- example response:

```json
[
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
]
```

- **endpoint: GET /users/limit/:num**
- status: 200 OK
- gender slug can either be male or female.
- description: gets all Users by gender
- example response:

```json
[
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
  {
    "name": {
      "title": "Mr",
      "first": "Grimaldo",
      "last": "Guerrero"
    },
    "location": {
      "street": {
        "number": 1471,
        "name": "Periférico Norte Beltrán"
      },
      "coordinates": {
        "latitude": -5.6585,
        "longitude": 47.0358
      },
      "timezone": {
        "offset": "+5:45",
        "description": "Kathmandu"
      },
      "city": "Boca de Camichin",
      "state": "Chihuahua",
      "country": "Mexico",
      "postcode": "68894"
    },
    "dob": {
      "age": 66
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/91.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
    },
    "_id": "6351a3e37dcf380f2cd2b1b4",
    "gender": "male",
    "email": "grimaldo.guerrero@example.com",
    "phone": "(638) 995 5994",
    "cell": "(643) 764 1597",
    "nat": "MX",
    "__v": 0
  }
]
```

## Errors I got

- error: "Query was already executed"
- occured when trying to get users by gender,
- was able to fix using

```js
.clone().catch(function(err){ console.log(err)});
```

- fs.writeFile() wouldnt allow me to write to an empty file.
  - added an empty object to fix.
