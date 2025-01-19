import { Welcome } from "@/components/strapi-components/welcome";
import { Categories } from "@/components/strapi-components/categories";
import ServicesOverview from "@/components/ServicesOverview";
import QuickFilter from "@/components/QuickFilter";

export default function Home() {
  return (
    <div>
      <div>
        <Welcome />
      </div>

      <div>
      <QuickFilter/>
      </div>

      <div>
        <ServicesOverview />
      </div>

      <div>
        <Categories />
      </div>
    </div>
  );
}
