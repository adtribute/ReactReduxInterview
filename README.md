## Basic TODO List

This is a very simple TODO list with the following functionality:
1. Add an item to the TODO list by clicking "Add"
2. Remove an item from the TODO list by clicking "Remove"
3. Add a random TODO by clicking "Add Random TODO"

The items in the TODO list are maintained in Redux and the value of the current text
(which will be the new item on clicking "Add") is in state.

You can start the small app with npm start.
Later, you will need the backend server, which you can also run with npm start in the backend folder.

Tasks:
1. The current implementation of createRandomTodo is silly and does not work properly.
   Why does it behave the way it does? Can you refactor it to work according to the 
   intent (which should be clear from the existing code)?

2. The backend server has an endpoint that you can reach with localhost:3000/get-random-todo.
   It will return a simple response of { todo: string }. Use this endpoint to reimplement the 
   random todo functionality such that it pulls the random text from this server. Clearly 
   express any design decisions that you make here, including how you are storing any data 
   required (local state, redux, etc.).

3. Suppose now we want to make the entire application store data on the server.
   You can use the endpoints get-todos and add-todo to retrieve the todos and add them 
   one at a time.
   /get-todo is a GET and return {"todos": string[]}
   /add-todo is a POST and takes a payload as follows: {"todo": string}
   Are there any things you would change given that we now want multiple endpoints?
   Again consider where you are storing data in this process.
