import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      required: true,
      enum: ['work', 'personal', 'home'],
      default: 'personal',
    },
    photo: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = model('contacts', contactsSchema);
