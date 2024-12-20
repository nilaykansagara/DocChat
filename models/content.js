import mongoose from 'mongoose';

const content = new mongoose.Schema({
    fileName: String,
    textContent: String, // Store the extracted text
    uploadDate: { type: Date, default: Date.now },
});

export default mongoose.models.content || mongoose.model('content', content);
