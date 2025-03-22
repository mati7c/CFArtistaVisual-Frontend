import axios from "axios";

const API_URL = "http://localhost:8080/piece";

export const addPiece = async (pieceData) => {
    try {
        const formData = new FormData();
        for (const key in pieceData) {
            if (key === "images") {
                Array.from(pieceData.images).forEach(file => formData.append("images", file));
            } else {
                formData.append(key, pieceData[key]);
            }
        }

        await axios.post(`${API_URL}/save`, formData, {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" }
        });

        return true;
    } catch (error) {
        console.error("Error agregando obra:", error);
        return false;
    }
};
