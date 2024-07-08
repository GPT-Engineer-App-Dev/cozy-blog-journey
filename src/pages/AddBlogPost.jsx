import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const AddBlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const newPost = { title, content, author, date };
    console.log("New Post:", newPost);
    toast("Blog post added successfully!");
    // Reset form fields
    setTitle("");
    setContent("");
    setAuthor("");
    setDate("");
  };

  return (
    <div className="container mx-auto p-4">
      <section className="add-blog-post text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Add New Blog Post</h1>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Title"
              className="w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Textarea
              placeholder="Content"
              className="w-full"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Author"
              className="w-full"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="date"
              className="w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
};

export default AddBlogPost;