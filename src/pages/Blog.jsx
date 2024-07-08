import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post Title 1", excerpt: "This is a short excerpt of the post...", date: "2023-10-01", author: "John Doe" },
    { id: 2, title: "Post Title 2", excerpt: "This is a short excerpt of the post...", date: "2023-10-02", author: "John Doe" },
    { id: 3, title: "Post Title 3", excerpt: "This is a short excerpt of the post...", date: "2023-10-03", author: "John Doe" },
  ]);
  const [deletePostId, setDeletePostId] = useState(null);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    setDeletePostId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <section className="blog-posts">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {posts.map(post => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{post.excerpt}</p>
                <p className="text-xs text-gray-500">Date: {post.date} | Author: {post.author}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive" className="mt-2">Delete</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Deletion</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this post? This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setDeletePostId(null)}>Cancel</Button>
                      <Button variant="destructive" onClick={() => handleDelete(post.id)}>Delete</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </div>
  );
};

export default Blog;