useState functionality
const [num, setNum] = useState(0)
ye jo num likha he ye (readOnly)value he 
and jo setNum likha he vo write only value he   (jo num ki value he vo useState("iske under jo likha hota he use connected rehti he"))












// counterSlice.js - Redux slice for counter with increment, decrement, reset
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    reset: (state) => { state.count = 0; }
  }
});
// store.js - Redux store configuration
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: { counter: counterReducer }
});

export default store;
// App.js - Counter App using Redux state
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { increment, decrement, reset } from './counterSlice';

function Counter() {
  // Get current count from Redux store
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>

      {/* Display current count from Redux */}
      <h2>Count: {count}</h2>

      {/* Increment button */}
      <button onClick={() => dispatch(increment())}>Increment</button>

      {/* Decrement button */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {/* Reset button */}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}















// todoSlice.js - Redux slice for todo with add, delete, toggle complete
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { list: [] },
  reducers: {
    // Add new task
    addTask: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload, completed: false });
    },
    // Delete task by id
    deleteTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
    // Toggle task completed status
    toggleTask: (state, action) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    }
  }
});

export const { addTask, deleteTask, toggleTask } = todoSlice.actions;
export default todoSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

// store.js - Redux store for Todo app
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: { todos: todoReducer }
});

export default store;

// App.js - Todo List App using Redux
import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { addTask, deleteTask, toggleTask } from './todoSlice';

function TodoApp() {
  const [input, setInput] = useState('');

  // Get todo list from Redux store
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() === '') return;
    dispatch(addTask(input));
    setInput('');
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Todo List</h1>

      {/* Input to add new task */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add Task</button>

      {/* Display list of tasks */}
      <ul>
        {todos.map((task) => (
          <li key={task.id}>
            {/* Toggle completed on click */}
            <span
              onClick={() => dispatch(toggleTask(task.id))}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              {task.text}
            </span>

            {/* Delete task button */}
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}






// studentSlice.js - Redux slice for student with add, delete
import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: { list: [] },
  reducers: {
    // Add new student with name and course
    addStudent: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });
    },
    // Delete student by id
    deleteStudent: (state, action) => {
      state.list = state.list.filter((s) => s.id !== action.payload);
    }
  }
});

export const { addStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;

// store.js - Redux store for Student Manager
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';

const store = configureStore({
  reducer: { students: studentReducer }
});

export default store;

// App.js - Student Manager App using Redux
import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { addStudent, deleteStudent } from './studentSlice';

function StudentManager() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  // Get student list from Redux store
  const students = useSelector((state) => state.students.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim() === '' || course.trim() === '') return;
    dispatch(addStudent({ name, course }));
    setName('');
    setCourse('');
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Student Manager</h1>

      {/* Input fields for student name and course */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
      />
      <input
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Course"
        style={{ marginLeft: '10px' }}
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>Add Student</button>

      {/* Display student list */}
      <table border="1" cellPadding="10" style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>
                {/* Delete student button */}
                <button onClick={() => dispatch(deleteStudent(s.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StudentManager />
    </Provider>
  );
}




// themeSlice.js - Redux slice to toggle light and dark mode
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isDark: false },
  reducers: {
    // Toggle between light and dark mode
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

// store.js - Redux store for Theme Switcher
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: { theme: themeReducer }
});

export default store;

// App.js - Theme Switcher using Redux
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { toggleTheme } from './themeSlice';

function ThemeApp() {
  // Get current theme from Redux store
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();

  const styles = {
    minHeight: '100vh',
    backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
    color: isDark ? '#ffffff' : '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={styles}>
      <h1>Theme Switcher</h1>
      <p>Current Mode: {isDark ? 'Dark Mode' : 'Light Mode'}</p>

      {/* Button to toggle theme using Redux */}
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Toggle {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeApp />
    </Provider>
  );
}
// App.js - Theme Switcher using Redux
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { toggleTheme } from './themeSlice';

function ThemeApp() {
  // Get current theme from Redux store
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();

  const styles = {
    minHeight: '100vh',
    backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
    color: isDark ? '#ffffff' : '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={styles}>
      <h1>Theme Switcher</h1>
      <p>Current Mode: {isDark ? 'Dark Mode' : 'Light Mode'}</p>

      {/* Button to toggle theme using Redux */}
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Toggle {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeApp />
    </Provider>
  );
}




// cartSlice.js - Redux slice for shopping cart with add, remove, total price
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [
      { id: 1, name: 'Laptop', price: 50000 },
      { id: 2, name: 'Phone', price: 20000 },
      { id: 3, name: 'Headphones', price: 3000 }
    ],
    cartItems: []
  },
  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const exists = state.cartItems.find((item) => item.id === action.payload.id);
      if (!exists) state.cartItems.push(action.payload);
    },
    // Remove product from cart by id
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// store.js - Redux store for Shopping Cart
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: { cart: cartReducer }
});

export default store;

// App.js - Shopping Cart App using Redux
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { addToCart, removeFromCart } from './cartSlice';

function ShoppingCart() {
  // Get products and cart items from Redux store
  const { products, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price of cart items
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '30px' }}>
      <h1>Shopping Cart</h1>

      {/* Product list */}
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <span>{product.name} - ₹{product.price}</span>
          <button
            onClick={() => dispatch(addToCart(product))}
            style={{ marginLeft: '10px' }}
          >
            Add to Cart
          </button>
        </div>
      ))}

      {/* Cart items */}
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            <span>{item.name} - ₹{item.price}</span>
            {/* Remove product from cart */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      {/* Display total price */}
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
}


















