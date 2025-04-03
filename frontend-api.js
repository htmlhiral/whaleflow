// Base URL for API
const API_BASE_URL = 'http://localhost:5000/api';

// Function to handle API errors
function handleApiError(response) {
  if (!response.ok) {
    return response.json().then(data => {
      throw new Error(data.error || 'An error occurred');
    });
  }
  return response.json();
}

// User signup
async function signup(username, email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ username, email, password }),
    });
    
    return handleApiError(response);
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
}

// User login
async function login(emailOrUsername, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email_or_username: emailOrUsername, password }),
    });
    
    return handleApiError(response);
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

// User logout
async function logout() {
  try {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    
    return handleApiError(response);
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
}

// Check if user is authenticated
async function checkAuth() {
  try {
    const response = await fetch(`${API_BASE_URL}/check-auth`, {
      credentials: 'include',
    });
    
    return handleApiError(response);
  } catch (error) {
    console.error('Auth check error:', error);
    throw error;
  }
}

// Send message to chatbot
async function sendMessage(message) {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ message }),
    });
    
    return handleApiError(response);
  } catch (error) {
    console.error('Chat error:', error);
    throw error;
  }
}

// Get chat history
async function getChatHistory() {
  try {
    const response = await fetch(`${API_BASE_URL}/chat-history`, {
      credentials: 'include',
    });
    
    return handleApiError(response);
  } catch (error) {
    console.error('Chat history error:', error);
    throw error;
  }
}

// Export all functions
export {
  signup,
  login,
  logout,
  checkAuth,
  sendMessage,
  getChatHistory
};