# Mastering State in React Redux

## APIs

 +[3 points] - All functionality with back-end should be in services.js.
(Create api service for each endpoint that you use and call methods or functions from service into your components)

+[2 points] - Get courses from back-end. Save courses list to the store.

+[2 points] - Get authors from back-end. Save authors list to the store.


## Store

- +[4 points] - Store should have User reducer.

- +[4 points] - Store should have Courses reducer.

Courses reducer has logic:

+ +Save new course.
+ +Delete course.
+ +Update course.
+ +Get courses. Save courses to the store after getting them from API. 

- +[4 points] - Store should have Authors reducer.
 
Authors reducer has logic:

+ +Save a new author.
+ +Get authors. Save authors to store after getting them from API. 


## Courses Component

- +[3 point] - Get courses from the store and render them into Courses component.
- +[3 points] - If token is present in the localStorage the user should be immediately redirected to the Courses page when opening the application.


## CreateCourse Component

- +[2 points] - After saving course in CreateCourse component course should be added to store.
- +[2 points] - Get authors from the store.

- +[1 point] - Save new authors to the store.


## CourseCard Component

- [2 points] - Add a new button "Delete course" into CourseCard.

- [1 point] - Add a new button "Update course" into CourseCard (CourseCard in COMPONENTS).

- [1 point] - After clicking on the Delete course button a selected course should be deleted from the store.


## Login Component

- +[3 points] - Save user's info to the store after success login.


## Header Component

- +[1 point] - Get user's name from the store.
- +[2 point] - Dispatch REMOVE_USER action by LOGOUT button click.
