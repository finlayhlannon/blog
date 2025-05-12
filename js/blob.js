import { put } from "@vercel/blob";

// Save users to the blob
export async function saveUsersToBlob(users) {
    try {
        const jsonData = JSON.stringify(users); // Convert users array to JSON
        const { url } = await put("users/blob.json", jsonData, { access: "public" });
        console.log("Users saved to blob:", url);
        return url; // The public URL of the blob
    } catch (error) {
        console.error("Error saving users to blob:", error);
    }
}

// Fetch users from the blob
export async function fetchUsersFromBlob() {
    try {
        const response = await fetch("https://<your-vercel-blob-url>/users/blob.json");
        if (!response.ok) {
            throw new Error("Failed to fetch users from blob");
        }
        const users = await response.json(); // Parse JSON data
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