import { put, get } from "@vercel/blob";

export default async function handler(req, res) {
    if (req.method === "POST") {
        // Save users to the blob
        try {
            const { users } = req.body; // Expecting users array in the request body
            const jsonData = JSON.stringify(users);
            const { url } = await put("users/blob.json", jsonData, { access: "public" });
            res.status(200).json({ message: "Users saved to blob", url });
        } catch (error) {
            console.error("Error saving users to blob:", error);
            res.status(500).json({ error: "Failed to save users to blob" });
        }
    } else if (req.method === "GET") {
        // Fetch users from the blob
        try {
            const response = await get("users/blob.json");
            if (!response) {
                throw new Error("Blob not found");
            }
            const users = JSON.parse(await response.text());
            res.status(200).json(users);
        } catch (error) {
            console.error("Error fetching users from blob:", error);
            res.status(500).json({ error: "Failed to fetch users from blob" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}