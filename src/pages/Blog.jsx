import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="blog-posts">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Post Title 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This is a short excerpt of the post...</p>
              <p className="text-xs text-gray-500">Date: 2023-10-01 | Author: John Doe</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post Title 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This is a short excerpt of the post...</p>
              <p className="text-xs text-gray-500">Date: 2023-10-02 | Author: John Doe</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post Title 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This is a short excerpt of the post...</p>
              <p className="text-xs text-gray-500">Date: 2023-10-03 | Author: John Doe</p>
            </CardContent>
          </Card>
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