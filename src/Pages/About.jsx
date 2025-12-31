import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          This is
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Store
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to CR7, your one-stop destination for quality furniture that blends comfort, style, and durability. We specialize in crafting and supplying furniture that transforms houses into beautiful, functional homes.

With a strong focus on quality materials, modern designs, and customer satisfaction, our collection includes furniture for living rooms, bedrooms, dining areas, offices, and outdoor spaces. Each piece is carefully selected or manufactured to meet high standards of design and long-lasting performance.

At CR7, we believe furniture is more than just utility—it’s a reflection of your lifestyle. Whether you prefer classic elegance or modern minimalism, we offer designs that suit every taste and budget.

Our experienced team is committed to helping customers choose the right furniture with honest guidance, fair pricing, and reliable after-sales support.

Why Choose Us?

Premium quality materials

Stylish & functional designs

Affordable pricing

Custom furniture options

On-time delivery & installation

Excellent customer support

We take pride in building long-term relationships with our customers by delivering comfort, trust, and value in every product we sell.
      </p>
    </>
  );
};

export default About;
