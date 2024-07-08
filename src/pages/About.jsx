const About = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="about text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-48 h-48 rounded-full mb-4" />
        <p className="text-lg">This is a detailed biography about me...</p>
      </section>
    </div>
  );
};

export default About;