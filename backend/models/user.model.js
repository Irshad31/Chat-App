import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "others"],
  },
  profilePic: {
    type: String,
    default: "",
  },
});
const User = mongoose.model("User",userSchema)
export default User;
// Fields: These are the attributes or properties of the document you're defining. Each field has a name and a type.

// Data Types: These specify the type of data that a field can store. Common data types include String, Number, Date, Boolean, ObjectId, Array, etc.

// Options:

// Required: Specifies whether a field is mandatory (true) or optional (false). If set to true and a document is created without the field, Mongoose will throw a validation error.
// Default: Sets a default value for a field if no value is provided when creating a document.
// Unique: Ensures that the value of the field is unique across all documents in the collection. If another document already has the same value for this field, Mongoose will throw a duplicate key error.
// Index: Specifies whether to create an index on the field for faster querying.
// Min/Max: Specifies the minimum and maximum allowed values for Number and Date fields.
// Trim: Removes leading and trailing whitespaces from a String field before saving it to the database.
// Validation: You can define custom validation logic for fields using the validate property or custom validator functions.

// Nested Schema: You can nest schemas within other schemas to represent embedded documents.

// Virtuals: These are additional fields computed from other fields in the document or external data sources. They are not stored in the database but can be accessed like regular fields.

// Hooks: You can define pre and post hooks (middleware) that execute before or after certain operations such as saving or removing a document.

// Plugins: Mongoose allows you to use plugins to extend schema functionality. Plugins can add additional methods, middleware, or virtuals to your schemas.

// These elements provide flexibility and control over the structure, behavior, and validation of documents in your MongoDB collections when using Mongoose in your Node.js applications.
