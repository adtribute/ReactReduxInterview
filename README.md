## Basic TODO List

This is a very simple TODO list with the following functionality:
1. Add an item to the TODO list by clicking "Add"
2. Remove the last item from the TODO list by clicking "Remove"
3. Create a random TODO by clicking "Add Random TODO"

The current implementation only uses state, but there is a mostly empty file that you could extend to use Redux for state management.

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
   You can use the following endpoints:
   /get-random-todo is a GET and returns a random todo as {"todo": string}
   /get-todos is a GET and return {"todos": string[]}
   /add-todo is a POST and takes a payload as follows: {"todo": string}
   /remove-todo is a GET and removes the last todo stored on the server. It returns all todos {"todos": string[]}
   Yes, it is non-standard for this to be a GET, but it is done for simplicity.
   Are there any things you would change given that we now want multiple endpoints?
   Again consider where you are storing data in this process.
   You may visit the server side code to better understand any failures or edge cases to expect.

4. Up to this point, the TODO list has probably been one single React component.
   As a last consideration, we will want to use the TODO data in multiple components.
   We want to create a Greeting component that will show above the buttons and list.
   It should read: `Hello, your first is task is "{firstItem}". You have {numItems} total tasks.` if there are a 
   nonzero number of TODOs, where firstItem is the first TODO in the list and numItems are the total number of TODOs.
   If there are currently no TODOs, it should read `Hello, you do not have any TODOs!`
