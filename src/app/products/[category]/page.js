import React from "react";
import Header1 from "@/components/header/Header1";
import Breadcrum from "@/components/common/Breadcrum";
import Home1FooterTop from "@/components/Footer/Home1FooterTop";
import Footer1 from "@/components/Footer/Footer1";
import Link from "next/link";
import { productData } from "@/data/productData";

// ✅ Static export: provide all dynamic paths
export function generateStaticParams() {
  // Get all keys from productData (each key is a category)
  return Object.keys(productData).map((category) => ({
    category,
  }));
}

const ProductCategoryPage = ({ params }) => {
  const category = params.category;

  const data = productData[category];

  if (!data) {
    return <div className="container py-100">Invalid Category</div>;
  }

  return (
    <>
      <Header1 fluid={"container-fluid"} />

      <Breadcrum
        content={`Our ${data.title}`}
        pageTitle={data.title}
        pagename={data.title}
      />

      <div className="project-grid-page pt-120 mb-120">
        <div className="container">
          <div className="row gy-5 mb-70">
            {data.items.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow animate fadeInDown"
                data-wow-delay={`${(index + 1) * 200}ms`}
                data-wow-duration="1500ms"
              >
                <div className="project-card two magnetic-item">
                  <div className="project-img-wrap">
                    <Link href="#" className="project-img">
                      <img src={item.img} alt={item.title} />
                    </Link>
                  </div>
                  <div className="project-content">
                    
                    <h4>
                      <Link href="#">{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Home1FooterTop />
      <Footer1 />
    </>
  );
};

export default ProductCategoryPage;
