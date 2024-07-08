import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="hero text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg">A place to share my thoughts and experiences.</p>
      </section>
      <Separator />
      <section className="recent-posts mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Post Title 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This is a short excerpt of the post...</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post Title 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This is a short excerpt of the post...</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post Title 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This is a short excerpt of the post...</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </CardContent>
          </Card>
        </div>
      </section>
      <Separator />
      <aside className="sidebar mt-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <ul className="list-disc list-inside">
          <li><a href="#" className="text-blue-500 hover:underline">Category 1</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Category 2</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Category 3</a></li>
        </ul>
      </aside>
    </div>
  );
};

export default Index;