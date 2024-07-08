import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="contact text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Name" className="w-full" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Email" className="w-full" />
          </div>
          <div className="mb-4">
            <Input type="text" placeholder="Subject" className="w-full" />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Message" className="w-full" />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>
    </div>
  );
};

export default Contact;