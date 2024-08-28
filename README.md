# React + Redux + role based JWT auth

### Running the app

```bash
# development
$ npm run start
```

## Backend for this project

https://github.com/NemesisUA/courses-api

## Admin credentials. 

#### These credentials provide role ADMIN.

email: admin@email.com

password: admin123

#### APIs from SWAGGER:

/courses/add [POST] (use ADMIN credentials)

/courses/{id} [PUT] (use ADMIN credentials)

/authors/add [POST] (use ADMIN credentials)

/courses/{id} [DELETE] (use ADMIN credentials)

/logout [DELETE]

/users/me [GET]

### info
For fetching requests you should add Authorization header with user's token

Authorization: token

## CourseCard component

![image](https://github.com/user-attachments/assets/e14b7812-bce3-40de-81b9-d11230ab3ee3)

CourseCard component with ADMIN role:

![image](https://github.com/user-attachments/assets/c68c8d14-e6f4-4414-8cea-d81743e3f5d0)

## Reusable form

Admin can create or update course. in case of editing form should be prefilled

![image](https://github.com/user-attachments/assets/f5090a83-6773-4fc2-8450-e442a06255a4)

