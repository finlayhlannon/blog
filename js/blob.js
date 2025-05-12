import { put } from "@vercel/blob";

const API_BASE_URL = "/api/blob"; // Vercel serverless function URL

// Save users to the blob via the serverless function
export async function saveUsersToBlob(users) {
    try {
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ users }),
        });
        if (!response.ok) {
            throw new Error("Failed to save users to blob");
        }
        const data = await response.json();
        console.log("Users saved to blob:", data.url);
        return data.url;
    } catch (error) {
        console.error("Error saving users to blob:", error);
    }
}

// Fetch users from the blob via the serverless function
export async function fetchUsersFromBlob() {
    try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch users from blob");
        }
        const users = await response.json();
        console.log("Users fetched from blob:", users);
        return users;
    } catch (error) {
        console.error("Error fetching users from blob:", error);
    }
}

// Add a new user to the blob
export async function addUserToBlob(newUser) {
    try {
        const users = await fetchUsersFromBlob() || []; // Fetch existing users
        if (users.some((user) => user.email === newUser.email)) {
            console.error("User already exists");
            return;
        }
        users.push(newUser); // Add the new user
        await saveUsersToBlob(users); // Save updated users back to the blob
        console.log("User added successfully");
    } catch (error) {
        console.error("Error adding user to blob:", error);
    }
}