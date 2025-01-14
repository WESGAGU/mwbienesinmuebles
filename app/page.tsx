import { Welcome } from "@/components/strapi-components/welcome";
import { Categories } from "@/components/strapi-components/categories";
import ServicesOverview from "@/components/ServicesOverview";

export default function Home() {
  return (
    <div>
      <div>
        <Welcome />
      </div>

      <div className="w-full lg:w-[84%] mx-auto">
        <ServicesOverview />
      </div>

      <div>
        <Categories />
      </div>
    </div>
  );
}
