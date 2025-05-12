import { saveUsersToBlob, fetchUsersFromBlob } from "./blob.js";

async function runTests() {
    const testUsers = [
        { name: "Test User", email: "test@example.com", password: "password123", role: "user" }
    ];

    console.log("Saving test users to blob...");
    await saveUsersToBlob(testUsers);

    console.log("Fetching users from blob...");
    const users = await fetchUsersFromBlob();
    console.log("Fetched users:", users);
}

runTests();