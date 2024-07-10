import Hero from "@/components/hero/Hero";
import Client from "@/components/client/Client";
import User from "@/components/users/User";
import Product from "./product/page";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Product
        limit={8}
        title="Products"
        desc="Order it for you or for your beloved ones "
      />
      <Client />
      <User />
      <Product
        limit={4}
        title="Popular"
        desc="Our top selling product that you may like"
      />
    </div>
  );
}
