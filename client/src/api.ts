const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5008/api';

export async function api(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });
  if (!res.ok) {
    throw new Error((await res.json()).message || 'Request failed');
  }
  return res.json();
}
