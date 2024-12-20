import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
    pdfId: { type: mongoose.Schema.Types.ObjectId, ref: 'content' },
    userMessage: String,
    botResponse: String,
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Chat || mongoose.model('Chat', ChatSchema);
