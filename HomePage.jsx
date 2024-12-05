//import React from "react";
import CategoryItem from "../components/CategoryItem";
const categories = [
	{ href: "sanitary-pads", name: "sanitary-pads", imageUrl: "/sp.jpg" },
	{ href: "sanitary-napkins", name: "sanitary-napkins", imageUrl: "/sn.jpg" },
	{ href: "menstrual-cups", name: "menstrual-cups", imageUrl: "/mc.jpg" },
	{ href: "tampons", name: "tampons", imageUrl: "/ts.jpg" },
  { href: "period-panties", name: "period-panties", imageUrl: "/pp.jpg" },
  { href: "other-hygiene-products", name: "other-hygiene-products", imageUrl: "/hp.jpg" },
];
const HomePage = () => {
  return (
    <>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            color: #333;
            margin: 0;
            padding: 0;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          /* Hero Section */
          .hero {
            position: relative;
            text-align: center;
            margin-bottom: 40px;
          }

          .hero-image {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
          }

          .hero-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #ffffff;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
            font-weight: bold;
          }

          .hero-text h2 {
            font-size: 2.5rem;
            margin: 0;
          }

          .hero-text .ht2 {
            font-size: 1.2rem;
            margin-top: 10px;
          }

          /* About Section */
          .about {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 20px;
            margin-bottom: 40px;
          }

          .about div {
            flex: 1;
            font-size: 1rem;
            line-height: 1.8;
          }

          .about-image {
            flex: 1;
            max-width: 100%;
            border-radius: 10px;
          }

          /* Info Section */
          .info-section {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            margin-bottom: 40px;
          }

          .info-box {
            flex: 1;
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }

          .info-box h4 {
            font-size: 1.5rem;
            color: #800000; /* Maroon color */
            margin-bottom: 10px;
          }

          .info-box p {
            font-size: 1rem;
            line-height: 1.6;
          }

          /* View Products Button */
          .view-products-button {
            text-align: center;
            margin-bottom: 40px;
          }

          .view-products-button .vp {
            background-color: #800000; /* Maroon color */
            color: #ffffff;
            border: none;
            padding: 15px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .view-products-button .vp:hover {
            background-color: #990000; /* Slightly darker maroon */
          }
        `}
      </style>

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <img
            src="https://live.staticflickr.com/65535/51413381976_d0acef87d9_b.jpg"
            alt="Group of empowered women"
            className="hero-image"
          />
          <div className="hero-text">
            <h2>BRINGING HELPING HANDS TOGETHER</h2>
            <p className="ht2">Let us handle this together</p>
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div>
            
            <p>This website focuses on women empowerment,</p>
            <p>by bringing helping hands together to help the vulnerable ones</p>
            <p>with the help of many do-good NGOs and the constant</p>
            <p>support of the customers.</p>
            <p>We don’t deal with money, all you have to do is buy a product</p>
            <p>and we will send it to the NGOs working with us</p>
            <p>and they in turn supply these to the needy.</p>
          </div>
          <img
            src="https://t4.ftcdn.net/jpg/04/89/40/41/360_F_489404131_n94lHm5HAwlQObFpzefMXQuzHvpqSL1l.jpg"
            alt="Helping hands together"
            className="about-image"
            width={150}
            height={100}
          />
        </section>

        {/* Info Section */}
        <section className="info-section">
          <div className="info-box">
            <h4>SERVICES</h4>
            <p>
              This website provides a smooth interface for usage, and the products
              displayed will match the ones outside as well. You can track your order
              until it reaches the person who needs it. NGOs will update the products 
              most needed, simplifying selection.
            </p>
          </div>
          <div className="info-box">
            <h4>PROJECTS</h4>
            <p>
              We support all NGO projects to the fullest. All updates will be made
              available on the website with utmost transparency.
            </p>
          </div>
          <div className="info-box">
            <h4>CLIENTS</h4>
            <p>
              Currently, we partner with NGOs and aim to expand our network
              to help as many people as possible.
            </p>
          </div>
        </section>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

      </div>
    </>
  );
};

export default HomePage;
